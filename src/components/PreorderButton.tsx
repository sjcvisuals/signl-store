"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface PreorderButtonProps {
  className?: string;
  size?: "default" | "large";
}

export function PreorderButton({ className = "", size = "default" }: PreorderButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePreorder = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.demo) {
        setError("Demo mode: Add Stripe keys to enable checkout");
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Failed to create checkout session");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  };

  const sizeClasses = size === "large" 
    ? "px-8 py-4 text-lg" 
    : "px-6 py-3 text-base";

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handlePreorder}
        disabled={loading}
        className={`inline-flex items-center justify-center font-semibold bg-accent text-background rounded-lg hover:bg-accent-hover transition-all disabled:opacity-70 disabled:cursor-not-allowed ${sizeClasses} ${className}`}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>Preorder SIGNL.ONE · £499</>
        )}
      </button>
      <p className="mt-2 text-sm text-muted">excl. VAT (~£598.80 inc. UK VAT)</p>
      {error && (
        <p className="mt-2 text-sm text-amber-400">{error}</p>
      )}
    </div>
  );
}
