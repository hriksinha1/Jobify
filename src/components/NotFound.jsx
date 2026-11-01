import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 Page Not Found | Xelofia";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      id="main-content"
      className="min-h-[65vh] flex items-center justify-center py-20 px-5 sm:px-8 bg-white"
    >
      <div className="max-w-[500px] w-full text-center flex flex-col items-center">
        <span className="font-display text-big-numeral text-[#1C1C1C]/20 select-none">
          404
        </span>

        <h1 className="font-display text-h2-small text-[#1C1C1C] tracking-tight -mt-4">
          Page Not Found
        </h1>

        <p className="mt-3 font-body text-[15px] sm:text-[16px] text-[#5C5C5C] leading-relaxed">
          The requested page could not be located. It may have been moved, renamed,
          or is temporarily unavailable.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 h-[44px] px-6 rounded-full bg-[#2A2A2A] text-white font-body text-[14.5px] font-medium transition-all hover:bg-[#3A3A3A] active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 stroke-[1.8]" />
            <span>Return to home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
