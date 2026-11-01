import React, { useState } from "react";
import { Cpu, Brain, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ImageSlot from "./ImageSlot.jsx";
import CarouselControls from "./CarouselControls.jsx";
import Reveal from "./ui/Reveal.jsx";
import { SITE_CONTENT } from "../data/siteContent.js";
import { cn } from "../lib/utils.js";

const iconMap = {
  Cpu: Cpu,
  Brain: Brain,
  Zap: Zap,
};

export default function Benefits() {
  const { benefits } = SITE_CONTENT;
  // Default active is item index 1 ("Intelligent Automation") matching reference screenshot!
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + benefits.items.length) % benefits.items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % benefits.items.length);
  };

  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden min-h-[460px] md:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between py-14 md:py-20"
      aria-label="Why Choose Our AI Automation Platform"
    >
      {/* Background ImageSlot with sky and meadow ridges */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ImageSlot
          slotKey={benefits.imageKey}
          className="w-full h-full object-cover"
          objectPosition="bottom center"
          aria-hidden="true"
        />
        {/* Soft top gradient to ensure optimal header contrast */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 via-white/20 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Header Block */}
        <Reveal>
          <div className="text-center max-w-[640px]">
            <h2 className="font-display text-h2 text-[#1C1C1C] tracking-tight">
              {benefits.title}
            </h2>
            <p className="mt-3.5 mx-auto max-w-[340px] font-body text-[14px] text-[#5C5C5C] leading-relaxed">
              {benefits.description}
            </p>
          </div>
        </Reveal>

        {/* Benefits Grid (Desktop: 3 columns; Mobile: vertical stack) */}
        <div
          role="region"
          aria-label="Core automation benefits"
          className="w-full mt-12 md:mt-16 max-w-[1040px]"
        >
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-3 gap-6 items-center">
            {benefits.items.map((item, index) => {
              const isActive = index === activeIndex;
              const Icon = iconMap[item.icon] || Cpu;

              return (
                <div
                  key={item.id}
                  className={cn(
                    "flex flex-col transition-all duration-300",
                    index === 0 && "items-start text-left",
                    index === 1 && "items-center text-center",
                    index === 2 && "items-end text-right"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    aria-label={`Select ${item.label}`}
                    className={cn(
                      "group relative transition-all duration-300 rounded-[12px] focus-visible:ring-2 focus-visible:ring-[#1C1C1C] text-left",
                      isActive
                        ? "bg-white p-4 sm:p-5 shadow-card w-[92%] max-w-[320px]"
                        : "p-2 hover:opacity-90 w-auto"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center gap-3.5",
                        isActive ? "justify-start" : "justify-center"
                      )}
                    >
                      {/* Icon Tile */}
                      <div
                        className={cn(
                          "w-[38px] h-[38px] rounded-[8px] flex items-center justify-center shrink-0 transition-colors duration-200",
                          isActive
                            ? "bg-[#1C1C1C] text-white"
                            : "bg-transparent border-[1.5px] border-[#1C1C1C] text-[#1C1C1C] group-hover:bg-[#1C1C1C]/5"
                        )}
                      >
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>

                      {/* Label */}
                      <span className="font-display font-medium text-[17px] sm:text-[18px] text-[#1C1C1C]">
                        {item.label}
                      </span>
                    </div>

                    {/* Active Description */}
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-2 text-[13px] text-[#5C5C5C] font-body leading-normal"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile Stack Layout */}
          <div className="flex md:hidden flex-col gap-3 w-full max-w-[360px] mx-auto">
            {benefits.items.map((item, index) => {
              const isActive = index === activeIndex;
              const Icon = iconMap[item.icon] || Cpu;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={cn(
                    "w-full text-left rounded-[12px] transition-all duration-200 p-4",
                    isActive
                      ? "bg-white shadow-card border border-black/[0.04]"
                      : "bg-white/40 hover:bg-white/60 border border-white/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-[36px] h-[36px] rounded-[8px] flex items-center justify-center shrink-0",
                        isActive
                          ? "bg-[#1C1C1C] text-white"
                          : "border-[1.5px] border-[#1C1C1C] text-[#1C1C1C]"
                      )}
                    >
                      <Icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <span className="font-display font-medium text-[16px] text-[#1C1C1C]">
                      {item.label}
                    </span>
                  </div>
                  {isActive && (
                    <p className="mt-2 text-[13px] text-[#5C5C5C] font-body leading-relaxed pl-[48px]">
                      {item.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Controls Beneath */}
        <div className="mt-7 md:mt-9">
          <CarouselControls
            size="small"
            onPrev={handlePrev}
            onNext={handleNext}
            prevAriaLabel="Previous benefit"
            nextAriaLabel="Next benefit"
          />
        </div>
      </div>
    </section>
  );
}
