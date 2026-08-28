import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { createOrder, getOrderByStripeSession } from "@/lib/db";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = getStripeClient();
  
  if (!stripe) {
    console.log("Webhook received but Stripe not configured");
    return NextResponse.json({ received: true, note: "Stripe not configured" });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  
  if (!webhookSecret) {
    console.log("Webhook received but STRIPE_WEBHOOK_SECRET not configured");
    return NextResponse.json({ received: true, note: "Webhook secret not configured" });
  }

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    
    const existingOrder = getOrderByStripeSession(session.id);
    if (existingOrder) {
      console.log(`Order already exists for session ${session.id}`);
      return NextResponse.json({ received: true, note: "Order already recorded" });
    }

    const email = session.customer_details?.email || session.customer_email || "unknown";
    const amount = session.amount_total || 0;
    const currency = session.currency || "gbp";

    try {
      const order = createOrder(
        session.id,
        email,
        amount,
        currency,
        {
          customer_name: session.customer_details?.name,
          shipping_address: session.customer_details?.address,
          payment_intent: session.payment_intent,
          metadata: session.metadata,
        }
      );

      console.log(`Order created: ${order.id} for ${email}`);

      await sendNotificationEmail(email, order.id);
    } catch (dbError) {
      console.error("Failed to create order:", dbError);
    }
  }

  return NextResponse.json({ received: true });
}

async function sendNotificationEmail(customerEmail: string, orderId: number) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.MAIL_TO || "sales@signl.store";

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    console.log("SMTP not configured, skipping notification email");
    return;
  }

  try {
    const nodemailer = await import("nodemailer");
    
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to: mailTo,
      subject: `New SIGNL.ONE Preorder #${orderId}`,
      text: `New preorder received!\n\nOrder ID: ${orderId}\nCustomer Email: ${customerEmail}\n\nCheck the admin panel for details.`,
      html: `
        <h2>New SIGNL.ONE Preorder</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Customer Email:</strong> ${customerEmail}</p>
        <p>Check the admin panel for full order details.</p>
      `,
    });

    console.log(`Notification email sent to ${mailTo}`);
  } catch (emailError) {
    console.error("Failed to send notification email:", emailError);
  }
}
