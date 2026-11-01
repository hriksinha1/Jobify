import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils.js";

/**
 * IntegrationDiagram component:
 * Illustrates Slack, Microsoft Teams, HubSpot, Mailchimp, and Shopify converging into Xelofia.
 * NOTE: Third-party brand marks require appropriate brand-usage clearance prior to production deployment.
 */
export default function IntegrationDiagram({ className = "" }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      role="img"
      aria-label="Diagram: Slack, Microsoft Teams, HubSpot, Mailchimp and Shopify connecting into Xelofia"
      className={cn(
        "relative mx-auto w-[88%] sm:w-[82%] aspect-[1.75/1] min-h-[190px] rounded-[12px] bg-white p-4 sm:p-5 shadow-floating border border-black/[0.04] flex flex-col justify-between select-none",
        className
      )}
    >
      {/* 5 App Badges across the top */}
      <div className="flex items-center justify-between px-1 sm:px-3 relative z-10">
        {/* Slack */}
        <div
          title="Slack"
          className="w-[34px] sm:w-[38px] h-[34px] sm:h-[38px] rounded-full bg-[#F5F5F5] border border-[#E6E6E6] flex items-center justify-center p-1.5 shadow-2xs transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path
              d="M6 10a2 2 0 11-2-2h2v2zm1 0a2 2 0 114 0v5a2 2 0 11-4 0v-5z"
              fill="#E01E5A"
            />
            <path
              d="M10 6a2 2 0 112-2v2h-2zm0 1a2 2 0 110 4H5a2 2 0 110-4h5z"
              fill="#36C5F0"
            />
            <path
              d="M18 14a2 2 0 112 2h-2v-2zm-1 0a2 2 0 11-4 0V9a2 2 0 114 0v5z"
              fill="#2EB67D"
            />
            <path
              d="M14 18a2 2 0 11-2 2v-2h2zm0-1a2 2 0 110-4h5a2 2 0 110 4h-5z"
              fill="#ECB22E"
            />
          </svg>
        </div>

        {/* Microsoft Teams */}
        <div
          title="Microsoft Teams"
          className="w-[34px] sm:w-[38px] h-[34px] sm:h-[38px] rounded-full bg-[#F5F5F5] border border-[#E6E6E6] flex items-center justify-center p-1.5 shadow-2xs transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path
              d="M19.5 7.5a2 2 0 100-4 2 2 0 000 4zm-4.5 2a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm5 2h-2c-.5 0-1 .3-1.3.8 1.4.6 2.3 2 2.3 3.7v1.5h3v-3.5c0-1.4-1.1-2.5-2-2.5zm-5 1h-5c-1.4 0-2.5 1.1-2.5 2.5V17h10v-2c0-1.4-1.1-2.5-2.5-2.5z"
              fill="#505AC9"
            />
          </svg>
        </div>

        {/* HubSpot */}
        <div
          title="HubSpot"
          className="w-[34px] sm:w-[38px] h-[34px] sm:h-[38px] rounded-full bg-[#F5F5F5] border border-[#E6E6E6] flex items-center justify-center p-1.5 shadow-2xs transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF7A59">
            <path d="M17.5 7a2.5 2.5 0 00-2.2 1.3L12 6.5V4.8a2 2 0 10-2 0v1.7L6.7 8.3A2.5 2.5 0 108 12.1l3.3-1.8v3.5a2.5 2.5 0 102 0V10.3l3.3 1.8a2.5 2.5 0 10.9-5.1z" />
          </svg>
        </div>

        {/* Mailchimp */}
        <div
          title="Mailchimp"
          className="w-[34px] sm:w-[38px] h-[34px] sm:h-[38px] rounded-full bg-[#F5F5F5] border border-[#E6E6E6] flex items-center justify-center p-1.5 shadow-2xs transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFE01B">
            <circle cx="12" cy="12" r="9" fill="#1C1C1C" />
            <path
              d="M8.5 11c.8 0 1.5-.7 1.5-1.5S9.3 8 8.5 8 7 8.7 7 9.5 7.7 11 8.5 11zm7 0c.8 0 1.5-.7 1.5-1.5S16.3 8 15.5 8 14 8.7 14 9.5s.7 1.5 1.5 1.5zm-3.5 5c2 0 3-1.2 3-1.2H9s1 1.2 3 1.2z"
              fill="#FFE01B"
            />
          </svg>
        </div>

        {/* Shopify */}
        <div
          title="Shopify"
          className="w-[34px] sm:w-[38px] h-[34px] sm:h-[38px] rounded-full bg-[#F5F5F5] border border-[#E6E6E6] flex items-center justify-center p-1.5 shadow-2xs transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#95BF47">
            <path d="M18.8 6.5l-2.4-.7c-.1 0-.3 0-.4.1l-1.5 1.5-1.3-.4c-.1 0-.2 0-.3.1l-.8.8-1.5-2.2c-.2-.3-.5-.4-.8-.4-.1 0-.1 0-.2.1L7 6.1 5.2 6.5c-.3.1-.5.3-.5.6l1.8 11.2c.1.4.4.7.8.7h9.4c.4 0 .8-.3.8-.7l1.8-11.2c.1-.3-.2-.5-.5-.6z" />
          </svg>
        </div>
      </div>

      {/* SVG Converging Connectors */}
      <div className="relative flex-1 my-1 w-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 320 80"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Connector 1: Slack (x=24) to center (x=160, y=78) */}
          <path
            d="M 28 0 C 28 40, 155 45, 160 78"
            stroke="#BDBDBD"
            strokeWidth="1.2"
            strokeDasharray="200"
            strokeDashoffset={animated ? "0" : "200"}
            className="transition-[stroke-dashoffset] duration-700 ease-out"
          />

          {/* Connector 2: Teams (x=94) to center */}
          <path
            d="M 94 0 C 94 38, 156 46, 160 78"
            stroke="#BDBDBD"
            strokeWidth="1.2"
            strokeDasharray="160"
            strokeDashoffset={animated ? "0" : "160"}
            className="transition-[stroke-dashoffset] duration-700 delay-75 ease-out"
          />

          {/* Connector 3: HubSpot (x=160) straight down */}
          <path
            d="M 160 0 L 160 78"
            stroke="#BDBDBD"
            strokeWidth="1.2"
            strokeDasharray="100"
            strokeDashoffset={animated ? "0" : "100"}
            className="transition-[stroke-dashoffset] duration-700 delay-150 ease-out"
          />

          {/* Connector 4: Mailchimp (x=226) to center */}
          <path
            d="M 226 0 C 226 38, 164 46, 160 78"
            stroke="#BDBDBD"
            strokeWidth="1.2"
            strokeDasharray="160"
            strokeDashoffset={animated ? "0" : "160"}
            className="transition-[stroke-dashoffset] duration-700 delay-225 ease-out"
          />

          {/* Connector 5: Shopify (x=292) to center */}
          <path
            d="M 292 0 C 292 40, 165 45, 160 78"
            stroke="#BDBDBD"
            strokeWidth="1.2"
            strokeDasharray="200"
            strokeDashoffset={animated ? "0" : "200"}
            className="transition-[stroke-dashoffset] duration-700 delay-300 ease-out"
          />
        </svg>
      </div>

      {/* Target Node: 40px black rounded-square with Xelofia glyph */}
      <div className="flex justify-center relative z-10">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#1C1C1C] text-white flex items-center justify-center shadow-md">
          <svg
            width="20"
            height="20"
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
      </div>
    </div>
  );
}
