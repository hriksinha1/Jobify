import React from "react";
import { cn } from "../lib/utils.js";

/**
 * AnalyticsPanel: Inside Card 2 of Powerful Features.
 * Features an illustrative stacked area chart across 5 years, callout badge, and legend.
 */
export default function AnalyticsPanel({ data, className = "" }) {
  const years = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

  return (
    <div
      className={cn(
        "relative w-full h-full rounded-[12px] bg-white p-4 sm:p-5 shadow-floating border border-black/[0.04] flex flex-col justify-between overflow-hidden",
        className
      )}
    >
      {/* Header with Title and 92% Net Revenue Callout */}
      <div className="flex items-start justify-between">
        <div className="font-display font-medium text-[20px] sm:text-[22px] text-[#1C1C1C]">
          {data.panelHeader || "Analytics"}
        </div>

        <div className="text-right">
          <div className="font-display font-medium text-[20px] text-[#1C1C1C] leading-none">
            {data.chartBadge || "92%"}
          </div>
          <div className="text-[10px] text-[#8A8A8A] font-body mt-0.5">
            {data.chartBadgeLabel || "Net Revenue"}
          </div>
        </div>
      </div>

      {/* Stacked Area Chart Container */}
      <div className="relative w-full my-auto pt-2">
        <svg
          className="w-full h-[120px] overflow-visible"
          viewBox="0 0 360 120"
          preserveAspectRatio="none"
          aria-label="Illustrative chart: five-year net revenue trajectory reaching 92% compared to market alternatives"
        >
          <defs>
            {/* Top gradient for Xelofia curve */}
            <linearGradient id="zelofiaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6F8F66" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#6F8F66" stopOpacity="0.02" />
            </linearGradient>

            {/* Middle tier gradient */}
            <linearGradient id="other1Gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B8BDB5" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B8BDB5" stopOpacity="0.05" />
            </linearGradient>

            {/* Bottom tier gradient */}
            <linearGradient id="other2Gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D5DBD3" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D5DBD3" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Dotted horizontal guideline at the peak level */}
          <line
            x1="0"
            y1="25"
            x2="360"
            y2="25"
            stroke="#E0E0E0"
            strokeWidth="1"
            strokeDasharray="3 3"
          />

          {/* Vertical grid lines at year ticks */}
          <line x1="10" y1="15" x2="10" y2="105" stroke="#F0F0F0" strokeWidth="1" />
          <line x1="95" y1="15" x2="95" y2="105" stroke="#F0F0F0" strokeWidth="1" />
          <line x1="180" y1="15" x2="180" y2="105" stroke="#F0F0F0" strokeWidth="1" />
          <line x1="265" y1="15" x2="265" y2="105" stroke="#F0F0F0" strokeWidth="1" />
          <line x1="350" y1="15" x2="350" y2="105" stroke="#F0F0F0" strokeWidth="1" />

          {/* Series 3: Lower curve */}
          <path
            d="M 10 100 Q 95 95, 180 88 T 265 80 T 350 72 L 350 105 L 10 105 Z"
            fill="url(#other2Gradient)"
          />
          <path
            d="M 10 100 Q 95 95, 180 88 T 265 80 T 350 72"
            fill="none"
            stroke="#D5DBD3"
            strokeWidth="1.5"
          />

          {/* Series 2: Middle curve */}
          <path
            d="M 10 95 Q 95 86, 180 72 T 265 60 T 350 48 L 350 105 L 10 105 Z"
            fill="url(#other1Gradient)"
          />
          <path
            d="M 10 95 Q 95 86, 180 72 T 265 60 T 350 48"
            fill="none"
            stroke="#B8BDB5"
            strokeWidth="1.5"
          />

          {/* Series 1: Top Curve (Xelofia) */}
          <path
            d="M 10 90 Q 95 72, 180 50 T 265 32 T 350 25 L 350 105 L 10 105 Z"
            fill="url(#zelofiaGradient)"
          />
          <path
            d="M 10 90 Q 95 72, 180 50 T 265 32 T 350 25"
            fill="none"
            stroke="#6F8F66"
            strokeWidth="2"
          />
          <circle cx="350" cy="25" r="3.5" fill="#6F8F66" />
        </svg>

        {/* X Axis Labels */}
        <div className="flex justify-between items-center px-1 text-[9px] sm:text-[10px] text-[#8A8A8A] font-body mt-1">
          {years.map((year) => (
            <span key={year}>{year}</span>
          ))}
        </div>
      </div>

      {/* Legend Row */}
      <div className="flex items-center gap-3 pt-2 mt-1 border-t border-[#F2F2F2] text-[10px] text-[#8A8A8A] font-body">
        <div className="flex items-center gap-1.5">
          <span className="w-[6px] h-[6px] rounded-full bg-[#6F8F66] inline-block" />
          <span className="text-[#1C1C1C] font-medium">Xelofia</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-[6px] h-[6px] rounded-full bg-[#B8BDB5] inline-block" />
          <span>Other Companies</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-[6px] h-[6px] rounded-full bg-[#D5DBD3] inline-block" />
          <span>Other Companies</span>
        </div>
      </div>
    </div>
  );
}
