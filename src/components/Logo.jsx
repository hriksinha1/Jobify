import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils.js";

/**
 * Xelofia Logo Component
 * Renders the signature 3x3 X-pattern glyph alongside the Bricolage Grotesque wordmark.
 */
export default function Logo({
  variant = "nav", // "nav" | "footer"
  className = "",
  showWordmark = true,
  onClick,
}) {
  const isFooter = variant === "footer";
  const iconSize = isFooter ? 44 : 26;

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Xelofia Home"
      className={cn(
        "inline-flex items-center gap-3 select-none text-[#1C1C1C] transition-opacity hover:opacity-90 focus-visible:rounded-md",
        className
      )}
    >
      {/* 3x3 X-Pattern Glyphs */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 28 28"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Top-left */}
        <rect x="1" y="1" width="7" height="7" rx="2.5" />
        {/* Top-right */}
        <rect x="20" y="1" width="7" height="7" rx="2.5" />
        {/* Center */}
        <rect x="10.5" y="10.5" width="7" height="7" rx="2.5" />
        {/* Bottom-left */}
        <rect x="1" y="20" width="7" height="7" rx="2.5" />
        {/* Bottom-right */}
        <rect x="20" y="20" width="7" height="7" rx="2.5" />
      </svg>

      {showWordmark && (
        <span
          className={cn(
            "font-display font-medium tracking-tight text-[#1C1C1C] leading-none",
            isFooter ? "wordmark-footer" : "wordmark-nav"
          )}
        >
          Xelofia
        </span>
      )}
    </Link>
  );
}
