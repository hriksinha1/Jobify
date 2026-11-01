import React from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Megaphone, Briefcase, BarChart3 } from "lucide-react";
import ImageSlot from "./ImageSlot.jsx";
import Section from "./Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { SITE_CONTENT } from "../data/siteContent.js";
import { cn } from "../lib/utils.js";

const iconMap = {
  PhoneCall: PhoneCall,
  Megaphone: Megaphone,
  Briefcase: Briefcase,
  BarChart3: BarChart3,
};

export default function UseCases() {
  const { useCases } = SITE_CONTENT;

  return (
    <Section id="use-cases" className="py-16 md:py-24 bg-white">
      {/* Centered Heading & Subtitle */}
      <Reveal>
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="font-display text-h2 text-[#1C1C1C] tracking-tight">
            <span>Built for Every Team</span>
            <br />
            <span>and Workflow</span>
          </h2>
          <p className="mt-4 mx-auto max-w-[440px] font-body text-[15px] sm:text-[16px] text-[#5C5C5C] leading-relaxed">
            {useCases.description}
          </p>
        </div>
      </Reveal>

      {/* 4-Card Responsive Grid */}
      <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr_1fr] gap-5 sm:gap-6 items-stretch">
        {useCases.items.map((card) => {
          const Icon = iconMap[card.icon] || Briefcase;

          if (card.isHighlighted) {
            // Card 02: Highlighted Marketing Automation with Photography and White Icon Tile
            return (
              <Link
                key={card.num}
                to={card.href}
                className="group relative rounded-[12px] overflow-hidden min-h-[280px] sm:min-h-[340px] lg:h-[380px] sm:col-span-2 lg:col-span-1 shadow-card flex flex-col justify-end p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-floating focus-visible:rounded-[12px]"
                aria-label={`${card.title}: ${card.description}`}
              >
                {/* Background Alpine ImageSlot with Zoom on Hover */}
                <div className="absolute inset-0 z-0 transition-transform duration-600 ease-out group-hover:scale-[1.04]">
                  <ImageSlot
                    slotKey={card.imageKey}
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  />
                  {/* High contrast bottom gradient overlay for legible text (>=4.5:1) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Content at lower-left */}
                <div className="relative z-10 flex flex-col items-start text-left">
                  {/* 50px White Icon Tile */}
                  <div className="w-[48px] sm:w-[50px] h-[48px] sm:h-[50px] rounded-[8px] bg-white text-[#1C1C1C] flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-5 h-5 stroke-[1.7]" />
                  </div>

                  <h3 className="font-display font-medium text-[20px] sm:text-[22px] text-white tracking-tight leading-tight">
                    {card.title}
                  </h3>

                  <p className="mt-2 font-body text-[13.5px] sm:text-[14px] text-white/90 leading-relaxed max-w-[280px]">
                    {card.description}
                  </p>
                </div>
              </Link>
            );
          }

          // Standard Cards (01, 03, 04): Grey surface with faint large numerals
          const isTint = card.num === "01";

          return (
            <Link
              key={card.num}
              to={card.href}
              className={cn(
                "group relative rounded-[12px] p-6 min-h-[220px] sm:min-h-[340px] lg:h-[380px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus-visible:rounded-[12px] border border-black/[0.03]",
                isTint ? "bg-[#F5F7F4]" : "bg-[#F2F2F2]"
              )}
              aria-label={`${card.title}. ${card.srDescription}`}
            >
              {/* Top-centered Big Numeral */}
              <div className="w-full text-center">
                <span className="font-display text-big-numeral select-none font-medium">
                  {card.num}
                </span>
              </div>

              {/* Bottom-left: 50px Black Icon Tile and Title */}
              <div className="flex flex-col items-start text-left">
                <div className="w-[48px] sm:w-[50px] h-[48px] sm:h-[50px] rounded-[8px] bg-[#2A2A2A] text-white flex items-center justify-center mb-3 shadow-sm transition-transform duration-200 group-hover:scale-105">
                  <Icon className="w-5 h-5 stroke-[1.7]" />
                </div>

                <h3 className="font-display font-medium text-[19px] sm:text-[21px] text-[#1C1C1C] leading-snug">
                  {card.title}
                </h3>

                {/* Accessible screen reader description */}
                <span className="sr-only">{card.srDescription}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
