import React, { useEffect, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { cn } from "../lib/utils.js";

/**
 * Predictive AI Revenue dashboard card with ghost header and multi-ring SVG donut chart.
 */
export default function RevenueDashboard({ className = "" }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn("relative select-none", className)}
      aria-label="Predictive AI Revenue Dashboard"
    >
      {/* Ghost Card peeking above for depth */}
      <div
        className="absolute -top-[10px] left-3 right-3 h-[24px] rounded-[14px] bg-white/70 border border-black/[0.04] shadow-sm pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Dashboard Card */}
      <div className="animate-float-dash w-full rounded-[14px] bg-white p-4 sm:p-4.5 shadow-floating border border-black/[0.05]">
        {/* Header row */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="font-display text-[15px] font-medium text-[#1C1C1C]">
            Predictive AI Revenue
          </span>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[6px] bg-white border border-[#E6E6E6] text-[#5C5C5C] text-[11px] font-medium shadow-2xs">
            <SlidersHorizontal className="w-3 h-3 stroke-[1.5]" />
            <span>Filters</span>
          </div>
        </div>

        {/* Donut Chart Container */}
        <div className="relative flex items-center justify-center my-1 py-1">
          <svg
            className="w-[185px] h-[185px] -rotate-90 transform"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            {/* Background guide track */}
            <circle
              cx="100"
              cy="100"
              r="76"
              fill="none"
              stroke="#F2F4F0"
              strokeWidth="6"
            />

            {/* Outer Sage Ring (~270 deg) */}
            <circle
              cx="100"
              cy="100"
              r="76"
              fill="none"
              stroke="#A3B59C"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="477"
              strokeDashoffset={animated ? "120" : "477"}
              className="transition-[stroke-dashoffset] duration-900 ease-out"
            />

            {/* Middle Orange Ring (~200 deg) */}
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="#F5820D"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="377"
              strokeDashoffset={animated ? "160" : "377"}
              className="transition-[stroke-dashoffset] duration-900 delay-100 ease-out"
            />

            {/* Inner Blue Ring (~80 deg) */}
            <circle
              cx="100"
              cy="100"
              r="44"
              fill="none"
              stroke="#5B7BD5"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray="276"
              strokeDashoffset={animated ? "200" : "276"}
              className="transition-[stroke-dashoffset] duration-900 delay-200 ease-out"
            />
          </svg>

          {/* Center Callout Value */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="font-display font-medium text-[22px] text-[#1C1C1C] tracking-tight">
              $ 149k
            </span>
          </div>
        </div>

        {/* Visually hidden screen reader summary */}
        <span className="sr-only">
          Illustrative product UI: predicted revenue 149 thousand dollars with breakdown across interactions, proposal, and qualification.
        </span>

        {/* Bottom Three Metrics */}
        <div className="grid grid-cols-3 gap-1 pt-2.5 mt-1 border-t border-[#F2F2F2] text-center">
          <div>
            <div className="font-display font-semibold text-[17px] text-[#1C1C1C]">
              $30k
            </div>
            <div className="inline-flex items-center justify-center gap-1 text-[10px] text-[#8A8A8A] font-body">
              <span className="w-[6px] h-[6px] rounded-[1px] bg-[#B8BDB5] inline-block" />
              <span>Interactions</span>
            </div>
          </div>

          <div>
            <div className="font-display font-semibold text-[17px] text-[#1C1C1C]">
              $46k
            </div>
            <div className="inline-flex items-center justify-center gap-1 text-[10px] text-[#8A8A8A] font-body">
              <span className="w-[6px] h-[6px] rounded-[1px] bg-[#F5820D] inline-block" />
              <span>Proposal</span>
            </div>
          </div>

          <div>
            <div className="font-display font-semibold text-[17px] text-[#1C1C1C]">
              $60k
            </div>
            <div className="inline-flex items-center justify-center gap-1 text-[10px] text-[#8A8A8A] font-body">
              <span className="w-[6px] h-[6px] rounded-[1px] bg-[#5B7BD5] inline-block" />
              <span>Qualification</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
