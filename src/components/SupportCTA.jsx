import React from "react";
import { CornerDownRight } from "lucide-react";
import ImageSlot from "./ImageSlot.jsx";
import { SUPPORT_EMAIL } from "../data/siteContent.js";

/**
 * SupportCTA card placed below FAQ accordion.
 * Features 3 overlapping avatars and mailto button.
 */
export default function SupportCTA({ data }) {
  const mailtoHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    "Xelofia Platform Inquiry"
  )}`;

  return (
    <div
      className="w-full rounded-[12px] border border-[#E6E6E6] bg-[#FBFBFB] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 select-none"
      aria-label="Contact support"
    >
      {/* Left region: 3 overlapping avatars + text block */}
      <div className="flex items-center gap-4">
        {/* Overlapping Avatars */}
        <div className="flex items-center shrink-0">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white bg-[#F2F2F2] shadow-2xs z-30">
            <ImageSlot slotKey="avatar-1" className="w-full h-full object-cover" customAlt="Support team member" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white bg-[#F2F2F2] shadow-2xs -ml-3 z-20">
            <ImageSlot slotKey="avatar-2" className="w-full h-full object-cover" customAlt="Support specialist" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white bg-[#F2F2F2] shadow-2xs -ml-3 z-10">
            <ImageSlot slotKey="avatar-3" className="w-full h-full object-cover" customAlt="Support engineer" />
          </div>
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left">
          <span className="font-body font-medium text-[15px] text-[#1C1C1C] leading-snug">
            {data.title || "Have more questions?"}
          </span>
          <span className="font-body text-[14px] text-[#5C5C5C] leading-snug">
            {data.subtitle || "Contact our support team"}
          </span>
        </div>
      </div>

      {/* Right button: near-black pill with corner-down-right icon */}
      <a
        href={mailtoHref}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-[44px] px-6 rounded-full bg-[#0B1215] text-white text-[14.5px] font-medium transition-all duration-200 hover:bg-[#20282C] hover:-translate-y-[1px] active:scale-[0.98] shadow-sm shrink-0 focus-visible:rounded-full"
      >
        <span>{data.buttonText || "Contact Us"}</span>
        <CornerDownRight className="w-4 h-4 stroke-[2]" />
      </a>
    </div>
  );
}
