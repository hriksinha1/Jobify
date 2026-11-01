import React, { useState } from "react";
import { Send, SlidersHorizontal } from "lucide-react";
import ImageSlot from "./ImageSlot.jsx";
import { cn } from "../lib/utils.js";

/**
 * Floating notification cards stacked on the left side of the hero stage.
 * Features an interactive toggle switch, avatar notification, and action chip.
 */
export default function FloatingNotifications({ className = "" }) {
  const [toggleOn, setToggleOn] = useState(true);

  return (
    <div
      className={cn("flex flex-col gap-3 sm:gap-4 select-none", className)}
      aria-label="Interactive workflow automation triggers"
    >
      {/* Card 1: New lead in Xelofia */}
      <div className="animate-float-1 flex items-center justify-between h-[64px] sm:h-[68px] px-3.5 sm:px-4 rounded-xl bg-white border border-black/[0.04] shadow-card transition-transform">
        <div className="flex items-center gap-3">
          {/* 36px white icon tile with Xelofia glyph */}
          <div className="w-[36px] h-[36px] shrink-0 rounded-lg bg-white border border-[#E6E6E6] flex items-center justify-center text-[#1C1C1C]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 28 28"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="1" y="1" width="7" height="7" rx="2.5" />
              <rect x="20" y="1" width="7" height="7" rx="2.5" />
              <rect x="10.5" y="10.5" width="7" height="7" rx="2.5" />
              <rect x="1" y="20" width="7" height="7" rx="2.5" />
              <rect x="20" y="20" width="7" height="7" rx="2.5" />
            </svg>
          </div>
          <span className="font-display font-medium text-[15px] sm:text-[16px] text-[#1C1C1C] leading-tight">
            New lead in Xelofia
          </span>
        </div>

        {/* Interactive Accessible Toggle Switch */}
        <button
          type="button"
          role="switch"
          aria-checked={toggleOn}
          aria-label="Toggle new lead trigger in Xelofia"
          onClick={() => setToggleOn(!toggleOn)}
          className={cn(
            "w-[42px] h-[24px] rounded-full p-[3px] transition-colors duration-200 ease-in-out focus-visible:rounded-full shrink-0",
            toggleOn ? "bg-[#CFE3CF]" : "bg-[#E6E6E6]"
          )}
        >
          <span
            className={cn(
              "block w-[18px] h-[18px] rounded-full transition-transform duration-200 ease-in-out",
              toggleOn
                ? "translate-x-[18px] bg-[#0B6B12]"
                : "translate-x-0 bg-[#8A8A8A]"
            )}
          />
        </button>
      </div>

      {/* Card 2: The score is greater than 50 */}
      <div className="animate-float-2 flex items-center gap-3 h-[64px] sm:h-[68px] px-3.5 sm:px-4 rounded-xl bg-white border border-black/[0.04] shadow-card">
        <div className="relative shrink-0">
          <div className="w-[36px] h-[36px] rounded-full overflow-hidden bg-[#F2F2F2] border border-[#E6E6E6]">
            <ImageSlot
              slotKey="avatar-1"
              className="w-full h-full object-cover"
              customAlt="Analyst avatar"
            />
          </div>
          {/* Orange status indicator dot */}
          <span
            className="absolute bottom-0 right-0 w-[8px] h-[8px] rounded-full bg-[#F5820D] ring-2 ring-white"
            aria-hidden="true"
          />
        </div>
        <span className="font-body text-[14px] sm:text-[15px] text-[#1C1C1C] font-medium leading-tight">
          The score is greater than 50
        </span>
      </div>

      {/* Card 3: Notify sales team */}
      <div className="animate-float-3 flex items-center justify-between h-[64px] sm:h-[68px] px-3.5 sm:px-4 rounded-xl bg-white border border-black/[0.04] shadow-card">
        <div className="flex items-center gap-3">
          <div className="w-[36px] h-[36px] shrink-0 rounded-lg bg-white border border-[#E6E6E6] flex items-center justify-center text-[#1C1C1C]">
            <Send className="w-4 h-4 stroke-[1.5]" />
          </div>
          <span className="font-body text-[14px] sm:text-[15px] text-[#1C1C1C] font-medium leading-tight">
            Notify sales team
          </span>
        </div>

        {/* Small Filters Chip */}
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[6px] bg-[#EEF5EE] text-[#0B6B12] text-[11px] font-medium">
          <SlidersHorizontal className="w-3 h-3 stroke-[2]" />
          <span>Filters</span>
        </div>
      </div>
    </div>
  );
}
