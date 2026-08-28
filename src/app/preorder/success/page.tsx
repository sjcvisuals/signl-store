import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Preorder Confirmed | SIGNL.ONE",
  description: "Your SIGNL.ONE preorder has been confirmed. We'll email you when units ship.",
};

export default function SuccessPage() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-8">
          <CheckCircle className="w-10 h-10 text-accent" />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          You're on the list
        </h1>
        
        <p className="text-xl text-muted mb-8">
          Your SIGNL.ONE preorder is confirmed. Thank you for joining the first production run.
        </p>
        
        <div className="p-6 rounded-xl bg-card border border-border mb-8 text-left">
          <h2 className="text-lg font-semibold mb-4">What happens next</h2>
          <ul className="space-y-3 text-muted">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">1.</span>
              <span>
                You'll receive a confirmation email from Stripe with your payment receipt.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">2.</span>
              <span>
                Your preorder funds the first production run of SIGNL.ONE units.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">3.</span>
              <span>
                When first production units exist, we'll email you from{" "}
                <span className="text-foreground">sales@signl.store</span> with shipping 
                information.
              </span>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-card/50 border border-border mb-8">
          <p className="text-sm text-muted">
            <strong>No specific ship date</strong> — we don't have a contracted manufacturer yet. 
            We'll keep you updated as production progresses. Questions?{" "}
            <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
              sales@signl.store
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/product"
            className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-colors"
          >
            View Product Details
          </Link>
        </div>
      </div>
    </div>
  );
}
