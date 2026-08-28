"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Product", href: "/product" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight">
              SIGNL<span className="text-accent">.</span>ONE
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/preorder"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold bg-accent text-background rounded-lg hover:bg-accent-hover transition-colors"
            >
              Preorder · £499
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-muted hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/preorder"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold bg-accent text-background rounded-lg hover:bg-accent-hover transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preorder · £499
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
