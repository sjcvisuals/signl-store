import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SIGNL.ONE",
  description: "Privacy policy for SIGNL.ONE website and preorders. SJCVisuals Ltd, London, UK.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
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

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Who We Are</h2>
            <p className="text-muted mb-4">
              This website is operated by SJCVisuals Ltd, a company registered in England 
              and Wales, based in London. For privacy inquiries, contact us at{" "}
              <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
                sales@signl.store
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. What Data We Collect</h2>
            <p className="text-muted mb-4">
              When you place a preorder, we collect:
            </p>
            <ul className="list-disc list-inside text-muted mb-4 space-y-1">
              <li>Email address (provided via Stripe Checkout)</li>
              <li>Name and billing/shipping address (via Stripe)</li>
              <li>Payment information (processed and stored by Stripe, not by us)</li>
              <li>Transaction details (order ID, amount, timestamp)</li>
            </ul>
            <p className="text-muted mb-4">
              We do not collect sensitive personal data. We do not use cookies for tracking 
              or advertising.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
            <p className="text-muted mb-4">
              We use your data to:
            </p>
            <ul className="list-disc list-inside text-muted mb-4 space-y-1">
              <li>Process and fulfil your preorder</li>
              <li>Email you about your order status and shipping</li>
              <li>Respond to support inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-muted mb-4">
              We do not sell your data. We do not use it for marketing purposes beyond 
              order-related communications unless you explicitly opt in.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Payment Processing</h2>
            <p className="text-muted mb-4">
              Payment is processed by Stripe, Inc. We do not see or store your full card 
              details. Stripe's privacy policy applies to their handling of your payment 
              information:{" "}
              <a 
                href="https://stripe.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover"
              >
                stripe.com/privacy
              </a>
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Storage</h2>
            <p className="text-muted mb-4">
              Order records (email, amount, timestamp, Stripe session ID) are stored 
              securely. We retain order data for as long as necessary for order fulfilment, 
              customer support, and legal compliance.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Data Sharing</h2>
            <p className="text-muted mb-4">
              We may share your data with:
            </p>
            <ul className="list-disc list-inside text-muted mb-4 space-y-1">
              <li>Stripe (payment processing)</li>
              <li>Shipping carriers (to deliver your order)</li>
              <li>Legal authorities (if required by law)</li>
            </ul>
            <p className="text-muted mb-4">
              We do not share your data with marketing companies or data brokers.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Your Rights</h2>
            <p className="text-muted mb-4">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc list-inside text-muted mb-4 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
            <p className="text-muted mb-4">
              To exercise these rights, contact us at{" "}
              <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
                sales@signl.store
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Cookies</h2>
            <p className="text-muted mb-4">
              This website uses only essential cookies required for basic functionality 
              (session management, security). We do not use tracking cookies, analytics 
              cookies, or advertising cookies.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="text-muted mb-4">
              We may update this privacy policy as our practices evolve. Significant changes 
              will be communicated via email to existing customers or prominently noted on 
              this website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact</h2>
            <p className="text-muted mb-4">
              For privacy questions or to exercise your data rights:<br /><br />
              SJCVisuals Ltd<br />
              London, United Kingdom<br />
              Email:{" "}
              <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
                sales@signl.store
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
