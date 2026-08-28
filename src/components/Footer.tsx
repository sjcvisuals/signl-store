import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                SIGNL<span className="text-accent">.</span>ONE
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted max-w-md">
              Compact wireless motorized OSC controller. Three 100mm faders that chase the show, 
              bidirectional OSC over Wi-Fi.
            </p>
            <p className="mt-4 text-sm text-muted">
              SJCVisuals Ltd · London, UK
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="/product" className="hover:text-foreground transition-colors">
                  Specifications
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-foreground transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/preorder" className="hover:text-foreground transition-colors">
                  Preorder
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Preorder
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:sales@signl.store"
                  className="hover:text-foreground transition-colors"
                >
                  Contact: sales@signl.store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted text-center">
            © {new Date().getFullYear()} SJCVisuals Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
