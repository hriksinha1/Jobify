import React from "react";
import { Link } from "react-router-dom";
import ImageSlot from "./ImageSlot.jsx";
import FloatingNotifications from "./FloatingNotifications.jsx";
import RevenueDashboard from "./RevenueDashboard.jsx";
import { SITE_CONTENT } from "../data/siteContent.js";
import { cn } from "../lib/utils.js";

export default function Hero() {
  const { hero } = SITE_CONTENT;

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden pt-8 md:pt-14 pb-12 lg:pb-20 bg-white"
      aria-label="Introduction"
    >
      {/* Centered Text Block */}
      <div className="relative z-30 mx-auto w-full max-w-[920px] px-5 sm:px-8 text-center flex flex-col items-center">
        <h1 className="font-display text-h1 text-[#1C1C1C] tracking-tight">
          <span>{hero.headlineLine1}</span>
          <br className="hidden sm:inline" />
          <span className="sm:inline block"> {hero.headlineLine2}</span>
        </h1>

        <p className="mt-5 max-w-[520px] font-body text-[16px] sm:text-[17px] text-[#5C5C5C] leading-relaxed">
          {hero.description}
        </p>

        <div className="mt-8">
          <Link
            to={hero.ctaHref}
            className="inline-flex items-center justify-center h-[48px] px-7 rounded-full bg-[#2A2A2A] text-white text-[15px] font-medium transition-all duration-200 hover:bg-[#3A3A3A] hover:-translate-y-[1px] active:scale-[0.98] shadow-md focus-visible:rounded-full"
          >
            {hero.cta}
          </Link>
        </div>
      </div>

      {/* The Visual Stage */}
      <div className="relative w-full mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 mt-2 md:-mt-6 h-[720px] md:h-[580px] lg:h-[640px]">
        {/* Layer 1: Landscape Panorama with top/bottom mist gradient mask */}
        <div
          className="absolute inset-x-0 bottom-0 top-[22%] md:top-[28%] z-0 pointer-events-none select-none"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, #000 28%, #000 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, #000 28%, #000 75%, transparent 100%)",
          }}
        >
          <ImageSlot
            slotKey="hero-landscape"
            className="w-full h-full object-cover"
            objectPosition="50% 40%"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle top and bottom white atmospheric fades */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/70 pointer-events-none" />
        </div>

        {/* Layer 2: Portrait Cutout with Torso Fade */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 flex justify-center pointer-events-none"
          style={{
            maskImage: "linear-gradient(to bottom, #000 62%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 62%, transparent 100%)",
          }}
        >
          <div className="w-[300px] sm:w-[360px] md:w-[420px] lg:w-[460px] h-[360px] sm:h-[430px] md:h-[490px] lg:h-[530px] relative md:left-[3%]">
            <ImageSlot
              slotKey="hero-portrait"
              className="w-full h-full object-contain filter grayscale contrast-125"
              objectPosition="bottom center"
              loading="eager"
            />
          </div>
        </div>

        {/* DESKTOP LAYOUT (>=768px): Notification stack left, Revenue dashboard right */}
        <div className="hidden md:block">
          {/* Layer 3: Left Notification Stack */}
          <div className="absolute left-6 lg:left-12 top-[44%] lg:top-[42%] z-20 w-[240px] lg:w-[304px]">
            <FloatingNotifications />
          </div>

          {/* Layer 4: Right Dashboard */}
          <div className="absolute right-6 lg:right-12 top-[34%] lg:top-[32%] z-20 w-[260px] lg:w-[300px]">
            <RevenueDashboard />
          </div>
        </div>

        {/* MOBILE LAYOUT (<768px): Recomposed without hiding any decorative element */}
        <div className="block md:hidden relative z-20 w-full h-full pt-4 flex flex-col justify-between pb-4">
          {/* Top: Centered Dashboard card */}
          <div className="w-[88%] max-w-[320px] mx-auto">
            <RevenueDashboard />
          </div>

          {/* Bottom: Left-aligned staggered notification stack over torso fade area */}
          <div className="w-[82%] max-w-[300px] pl-2 self-start space-y-2">
            <FloatingNotifications />
          </div>
        </div>
      </div>
    </section>
  );
}
