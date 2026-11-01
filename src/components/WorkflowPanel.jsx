import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "../lib/utils.js";

/**
 * WorkflowPanel: Inside Card 1 of Powerful Features.
 * Features a subtle dot grid, central node with dashed green connectors, and a stat strip.
 */
export default function WorkflowPanel({ data, className = "" }) {
  return (
    <div
      className={cn(
        "relative w-full h-full rounded-[12px] bg-white p-4 sm:p-5 shadow-floating border border-black/[0.04] flex flex-col justify-between overflow-hidden",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(rgba(28, 28, 28, 0.08) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      {/* Title */}
      <div className="font-display font-medium text-[20px] sm:text-[22px] text-[#1C1C1C]">
        {data.panelHeader || "Automation"}
      </div>

      {/* Center Node Container with SVG Connectors */}
      <div className="relative my-auto py-2">
        {/* Dashed Connectors SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 320 120"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          {/* Connector to top-left */}
          <path
            d="M 50 60 C 20 60, 15 20, 10 10"
            stroke="#6F8F66"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="10" cy="10" r="3.5" fill="#6F8F66" />
          <circle cx="50" cy="60" r="3" fill="#6F8F66" />

          {/* Connector to top-right */}
          <path
            d="M 270 60 C 300 60, 305 20, 310 10"
            stroke="#6F8F66"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="310" cy="10" r="3.5" fill="#6F8F66" />
          <circle cx="270" cy="60" r="3" fill="#6F8F66" />

          {/* Connector downward */}
          <path
            d="M 160 88 L 160 115"
            stroke="#6F8F66"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="160" cy="115" r="3.5" fill="#6F8F66" />
        </svg>

        {/* The Center Node Card */}
        <div className="relative mx-auto w-[92%] sm:w-[86%] rounded-xl bg-white border border-[#E6E6E6] p-2.5 sm:p-3 shadow-md">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-[34px] h-[34px] rounded-lg bg-[#6F8F66] text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div className="text-left">
                <div className="font-body font-semibold text-[13px] text-[#1C1C1C] leading-none">
                  {data.badge?.title || "Automation AI"}
                </div>
                <div className="text-[10px] text-[#8A8A8A] font-body mt-1 leading-none">
                  {data.badge?.author || "By Xelofia - latest update 18 May"}
                </div>
              </div>
            </div>

            <div className="px-2 py-0.5 rounded-full bg-[#EBF4EB] text-[#0B6B12] text-[10px] font-semibold whitespace-nowrap">
              {data.badge?.growth || "+8.4% in 5 Days"}
            </div>
          </div>
        </div>
      </div>

      {/* Two-Column Stat Strip on --surface-tint */}
      <div className="grid grid-cols-2 gap-2 p-2.5 sm:p-3 rounded-lg bg-[#F5F7F4] border border-[#E6EAE5]">
        <div className="border-r border-[#E2E8E0] pr-2">
          <div className="text-[10px] text-[#8A8A8A] font-body mb-0.5">
            {data.stats?.[0]?.label || "Self-Service Resolutions"}
          </div>
          <div className="font-display font-medium text-[20px] sm:text-[22px] text-[#1C1C1C] leading-none">
            {data.stats?.[0]?.value || "1,200"}
          </div>
        </div>

        <div className="pl-2">
          <div className="text-[10px] text-[#8A8A8A] font-body mb-0.5">
            {data.stats?.[1]?.label || "Revenue Attributed"}
          </div>
          <div className="font-display font-medium text-[20px] sm:text-[22px] text-[#1C1C1C] leading-none">
            {data.stats?.[1]?.value || "$21,191"}
          </div>
        </div>
      </div>
    </div>
  );
}
