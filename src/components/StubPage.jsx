import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * On-brand placeholder page for registered sub-routes.
 * Displays route title, transparent placeholder notification, and back button.
 */
export default function StubPage({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Xelofia`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <main
      id="main-content"
      className="min-h-[60vh] flex items-center justify-center py-20 px-5 sm:px-8 bg-white"
    >
      <div className="max-w-[580px] w-full text-center flex flex-col items-center">
        <span className="inline-block px-3 py-1 rounded-full bg-[#F2F2F2] text-[#5C5C5C] text-[12px] font-body font-medium uppercase tracking-wider mb-4">
          Xelofia Preview
        </span>

        <h1 className="font-display text-h2-small text-[#1C1C1C] tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-3 font-body text-[16px] text-[#5C5C5C] leading-relaxed">
            {description}
          </p>
        )}

        <div className="mt-4 p-4 rounded-xl bg-[#F5F7F4] border border-[#E6EAE5] text-[14px] text-[#5C5C5C] font-body w-full">
          This page is a placeholder and will be available soon.
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 h-[44px] px-6 rounded-full bg-[#2A2A2A] text-white font-body text-[14.5px] font-medium transition-all hover:bg-[#3A3A3A] active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 stroke-[1.8]" />
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
