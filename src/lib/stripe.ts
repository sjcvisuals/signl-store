import Stripe from "stripe";

export function getStripeClient(): Stripe | null {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!secretKey) {
    return null;
  }
  
  return new Stripe(secretKey);
}

export function isStripeConfigured(): boolean {
  return !!(
    process.env.STRIPE_SECRET_KEY &&
    process.env.STRIPE_PUBLISHABLE_KEY
  );
}

export const PRODUCT_PRICE_GBP = 499;
export const PRODUCT_NAME = "SIGNL.ONE Preorder";
export const PRODUCT_DESCRIPTION = "Wireless Motorized OSC Controller - Preorder";
