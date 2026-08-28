import { Metadata } from "next";
import { PreorderButton } from "@/components/PreorderButton";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Preorder | SIGNL.ONE",
  description: "Preorder SIGNL.ONE for £499 excl. VAT. Your order funds the first production run. We ship when units exist.",
};

export default function PreorderPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Preorder SIGNL.ONE
          </h1>
          <p className="mt-4 text-xl text-muted max-w-2xl mx-auto">
            Join the first production run. Your preorder funds manufacturing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: What you get */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What you're ordering</h2>
              
              <div className="p-6 rounded-xl bg-card border border-border mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">SIGNL.ONE</h3>
                    <p className="text-muted">Wireless Motorized OSC Controller</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">£499</p>
                    <p className="text-sm text-muted">excl. VAT</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    3× 100mm motorized faders (bidirectional OSC)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    2 mechanical keys + rotary encoder
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    OLED display
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    2.4GHz Wi-Fi OSC/UDP
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    8+ hour battery, USB-C charging
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    SIGNL Dock software (Windows; macOS coming)
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted">
                    UK VAT (20%) will be calculated at checkout for UK customers.
                    <br />
                    Total with UK VAT: approximately £598.80
                  </p>
                </div>
              </div>

              {/* What preorder means */}
              <h2 className="text-2xl font-bold mb-6">What preorder means</h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Your order funds manufacturing</h3>
                      <p className="text-sm text-muted mt-1">
                        Preorders fund the first production run of SIGNL.ONE units. This is how 
                        hardware gets made—you're joining a funded build, not buying from stock.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">We email you when units ship</h3>
                      <p className="text-sm text-muted mt-1">
                        When first production units exist, we'll email you from sales@signl.store 
                        with shipping information and tracking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Questions or refund requests</h3>
                      <p className="text-sm text-muted mt-1">
                        Contact us at{" "}
                        <a href="mailto:sales@signl.store" className="text-accent hover:text-accent-hover">
                          sales@signl.store
                        </a>
                        . We'll work with you directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: What we don't promise */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What we don't promise</h2>
              
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg bg-card border border-amber-500/30">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">No specific ship date</h3>
                      <p className="text-sm text-muted mt-1">
                        We do not have a contracted manufacturer yet. First assembled articles 
                        are typically 6–10 weeks after a complete factory pack. We will not 
                        print a ship date we can't guarantee.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">No fake scarcity</h3>
                      <p className="text-sm text-muted mt-1">
                        There's no countdown timer. No "only 3 left." This is an honest first 
                        production run, not a manufactured urgency campaign.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">No macOS Dock yet</h3>
                      <p className="text-sm text-muted mt-1">
                        SIGNL Dock is Windows 10+ (64-bit) only today. macOS 12+ support is 
                        coming, but we won't say it's available when it isn't.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Card */}
              <div className="p-8 rounded-xl bg-card border-2 border-accent/30">
                <h2 className="text-2xl font-bold mb-2 text-center">Ready to preorder?</h2>
                <p className="text-muted text-center mb-6">
                  Secure your place in the first production run.
                </p>
                <div className="flex justify-center">
                  <PreorderButton size="large" />
                </div>
                <p className="mt-6 text-sm text-muted text-center">
                  Secure checkout via Stripe. You'll receive an email confirmation.
                </p>
              </div>

              {/* Contact */}
              <div className="mt-8 p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-2">Questions before ordering?</h3>
                <p className="text-sm text-muted">
                  We're happy to answer questions about SIGNL.ONE, OSC compatibility, 
                  or anything else before you commit.
                </p>
                <a 
                  href="mailto:sales@signl.store" 
                  className="inline-flex items-center mt-4 text-accent hover:text-accent-hover font-medium"
                >
                  sales@signl.store →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted">
            By placing a preorder, you agree to our{" "}
            <a href="/terms" className="text-accent hover:text-accent-hover">Terms of Preorder</a>
            {" "}and{" "}
            <a href="/privacy" className="text-accent hover:text-accent-hover">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
