import { NextResponse } from "next/server";
import { getStripeClient, isStripeConfigured, PRODUCT_PRICE_GBP, PRODUCT_NAME, PRODUCT_DESCRIPTION } from "@/lib/stripe";

export async function POST() {
  if (!isStripeConfigured()) {
    return NextResponse.json({
      demo: true,
      message: "Stripe is not configured. Add STRIPE_SECRET_KEY and STRIPE_PUBLISHABLE_KEY to enable checkout.",
    });
  }

  const stripe = getStripeClient();
  if (!stripe) {
    return NextResponse.json(
      { error: "Failed to initialize Stripe" },
      { status: 500 }
    );
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : "http://localhost:3000";

    let priceId = process.env.STRIPE_PRICE_ID;

    if (!priceId) {
      const price = await stripe.prices.create({
        unit_amount: PRODUCT_PRICE_GBP * 100,
        currency: "gbp",
        product_data: {
          name: PRODUCT_NAME,
        },
        tax_behavior: "exclusive",
      });
      priceId = price.id;
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      automatic_tax: {
        enabled: true,
      },
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: [
          "GB", "US", "CA", "AU", "NZ", "DE", "FR", "NL", "BE", "AT", "CH",
          "IE", "IT", "ES", "PT", "SE", "NO", "DK", "FI", "PL", "CZ", "HU",
          "RO", "BG", "HR", "SI", "SK", "EE", "LV", "LT", "CY", "MT", "LU",
          "GR", "JP", "KR", "SG", "HK", "AE", "IL", "ZA", "MX", "BR", "AR",
        ],
      },
      success_url: `${baseUrl}/preorder/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/preorder`,
      metadata: {
        product: "SIGNL.ONE",
        type: "preorder",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
