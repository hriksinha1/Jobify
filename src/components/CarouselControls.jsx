import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils.js";

/**
 * Reusable Carousel Controls matching the reference buttons:
 * Left: outlined circle with arrow-left.
 * Right: filled light-grey circle with arrow-right.
 * Hover lifts and inverts to dark ink with white arrow.
 */
export default function CarouselControls({
  onPrev,
  onNext,
  canPrev = true,
  canNext = true,
  prevAriaLabel = "Previous item",
  nextAriaLabel = "Next item",
  className = "",
  size = "default", // "default" (44px) | "small" (36-40px)
}) {
  const isSmall = size === "small";
  const btnSize = isSmall ? "w-[38px] h-[38px]" : "w-[44px] h-[44px]";
  const iconSize = isSmall ? "w-4 h-4" : "w-5 h-5";

  return (
    <div className={cn("flex items-center justify-center gap-3 select-none", className)}>
      {/* Prev Button: 1px border var(--ink) */}
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label={prevAriaLabel}
        className={cn(
          btnSize,
          "rounded-full border border-[#1C1C1C] flex items-center justify-center text-[#1C1C1C] transition-all duration-200 focus-visible:rounded-full",
          canPrev
            ? "hover:bg-[#1C1C1C] hover:text-white cursor-pointer active:scale-95"
            : "opacity-40 cursor-not-allowed"
        )}
      >
        <ArrowLeft className={cn(iconSize, "stroke-[1.5]")} />
      </button>

      {/* Next Button: filled #F2F2F2 */}
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        aria-label={nextAriaLabel}
        className={cn(
          btnSize,
          "rounded-full bg-[#F2F2F2] flex items-center justify-center text-[#1C1C1C] transition-all duration-200 focus-visible:rounded-full",
          canNext
            ? "hover:bg-[#1C1C1C] hover:text-white cursor-pointer active:scale-95"
            : "opacity-40 cursor-not-allowed"
        )}
      >
        <ArrowRight className={cn(iconSize, "stroke-[1.5]")} />
      </button>
    </div>
  );
}
