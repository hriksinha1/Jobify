import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ImageSlot from "./ImageSlot.jsx";
import WorkflowPanel from "./WorkflowPanel.jsx";
import AnalyticsPanel from "./AnalyticsPanel.jsx";
import HoverCard from "./ui/HoverCard.jsx";
import { cn } from "../lib/utils.js";

/**
 * FeatureCard displaying landscape media box with embedded UI panel and editorial copy.
 */
export default function FeatureCard({ item, index, totalSlides }) {
  const isWorkflow = item.panelType === "workflow";

  return (
    <article
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${totalSlides}`}
      className="w-full flex flex-col select-none group"
    >
      <HoverCard elevation="default">
        {/* Media Box: aspect-ratio 1.4/1, radius 16 */}
        <div
          className="relative w-full rounded-[16px] overflow-hidden bg-[#F2F2F2]"
          style={{ aspectRatio: "1.4 / 1" }}
        >
          {/* Background Landscape with soft mist overlay */}
          <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            <ImageSlot
              slotKey={item.imageKey}
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
            {/* Top 35% Pale White Mist Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/10 to-transparent pointer-events-none" />
          </div>

          {/* Floating UI Panel centered with insets */}
          <div className="absolute inset-x-[8%] sm:inset-x-[11%] top-[9%] bottom-[9%] z-10">
            {isWorkflow ? (
              <WorkflowPanel data={item} />
            ) : (
              <AnalyticsPanel data={item} />
            )}
          </div>
        </div>
      </HoverCard>

      {/* Copy block below */}
      <div className="pt-6 flex flex-col items-start">
        <h3 className="font-display font-medium text-[22px] sm:text-[26px] text-[#1C1C1C] tracking-tight">
          {item.title}
        </h3>

        <p className="mt-2.5 font-body text-[15px] sm:text-[16px] text-[#5C5C5C] leading-relaxed max-w-[520px]">
          {item.description}
        </p>

        <Link
          to={item.href}
          className="mt-4 inline-flex items-center gap-1.5 font-body font-medium text-[15px] text-[#1C1C1C] group/link transition-colors hover:text-[#0B6B12] focus-visible:rounded-sm"
        >
          <span>{item.linkText}</span>
          <ArrowUpRight className="w-4 h-4 stroke-[1.8] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
