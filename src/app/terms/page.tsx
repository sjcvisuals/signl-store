import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Preorder | SIGNL.ONE",
  description: "Terms and conditions for SIGNL.ONE preorders. SJCVisuals Ltd, London, UK.",
};

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Terms of Preorder</h1>
          <p className="mt-4 text-muted">
            DRAFT — SJCVisuals Ltd, London, UK
          </p>
          <p className="mt-2 text-sm text-amber-400">
            This document is a draft and may be updated before first production.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-sm max-w-none">
            <p className="text-muted text-sm mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. What You're Ordering</h2>
            <p className="text-muted mb-4">
              By placing a preorder for SIGNL.ONE, you are ordering one (1) SIGNL.ONE wireless 
              motorized OSC controller at the stated price (£499 excluding VAT, or £598.80 
              including UK VAT at 20%).
            </p>
            <p className="text-muted mb-4">
              This is a preorder, not an in-stock purchase. Your payment funds the manufacturing 
              of the first production run of SIGNL.ONE units.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Delivery Timeline</h2>
            <p className="text-muted mb-4">
              We do not guarantee a specific delivery date. There is no contracted manufacturer 
              at the time of preorder launch. First assembled articles are typically 6–10 weeks 
              after a complete factory pack is delivered to a manufacturer.
            </p>
            <p className="text-muted mb-4">
              We will email you from sales@signl.store when first production units exist and 
              are ready to ship. This email will include shipping information and tracking 
              details where available.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Use of Funds</h2>
            <p className="text-muted mb-4">
              Preorder payments are used to fund manufacturing, components, tooling, and 
              related production costs for the first run of SIGNL.ONE units. This is how 
              small-batch hardware manufacturing works—preorders enable the production run.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Refunds</h2>
            <p className="text-muted mb-4">
              If you wish to request a refund before your unit ships, contact us at{" "}
              <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
                sales@signl.store
              </a>
              . We will work with you on a case-by-case basis.
            </p>
            <p className="text-muted mb-4">
              Please understand that preorder funds are committed to manufacturing. While we 
              will be fair, refund processing depends on production timing and fund allocation.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Product Specifications</h2>
            <p className="text-muted mb-4">
              Final product specifications may vary slightly from preorder descriptions due to 
              manufacturing refinements. Core functionality (3× motorized faders, OSC over Wi-Fi, 
              battery operation) will be delivered as described.
            </p>
            <p className="text-muted mb-4">
              SIGNL Dock companion software is currently available for Windows 10+ (64-bit). 
              macOS support is in development but not guaranteed at initial delivery.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. VAT and Taxes</h2>
            <p className="text-muted mb-4">
              Prices are quoted excluding VAT. UK VAT (20%) is calculated and charged at 
              checkout for UK customers via Stripe.
            </p>
            <p className="text-muted mb-4">
              Customers outside the UK may be subject to import duties, taxes, and customs 
              fees upon delivery. These are the responsibility of the customer and are not 
              included in the preorder price.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Shipping</h2>
            <p className="text-muted mb-4">
              Products ship from the United Kingdom. Shipping costs, if any, will be 
              communicated before or at the time of shipment.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Company Information</h2>
            <p className="text-muted mb-4">
              SJCVisuals Ltd<br />
              London, United Kingdom<br />
              Contact: <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
                sales@signl.store
              </a>
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Governing Law</h2>
            <p className="text-muted mb-4">
              These terms are governed by the laws of England and Wales. Any disputes will 
              be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact</h2>
            <p className="text-muted mb-4">
              For questions about these terms, your preorder, or anything else, contact us at{" "}
              <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
                sales@signl.store
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
