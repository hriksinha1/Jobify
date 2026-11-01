import React, { useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ImageSlot from "./ImageSlot.jsx";
import IntegrationDiagram from "./IntegrationDiagram.jsx";
import Section from "./Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { SITE_CONTENT } from "../data/siteContent.js";
import { cn } from "../lib/utils.js";

export default function GettingStarted() {
  const { gettingStarted } = SITE_CONTENT;
  // First row is open by default
  const [openIndex, setOpenIndex] = useState(0);
  const headerRefs = useRef([]);

  const toggleRow = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleKeyDown = (e, index) => {
    let nextIndex = null;
    if (e.key === "ArrowDown") {
      nextIndex = (index + 1) % gettingStarted.steps.length;
    } else if (e.key === "ArrowUp") {
      nextIndex = (index - 1 + gettingStarted.steps.length) % gettingStarted.steps.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = gettingStarted.steps.length - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      headerRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <Section id="get-started" className="py-16 md:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Column: Title & 3-Step Accordion */}
        <div className="flex flex-col">
          <Reveal>
            <h2 className="font-display text-h2-small text-[#1C1C1C] tracking-tight">
              <span>Get Started in 3</span>
              <br />
              <span>Simple Steps</span>
            </h2>
          </Reveal>

          {/* Accordion Stack */}
          <div className="mt-8 md:mt-12 flex flex-col gap-3">
            {gettingStarted.steps.map((step, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={step.num}
                  className="rounded-[12px] bg-[#F2F2F2] transition-colors overflow-hidden"
                >
                  <h3>
                    <button
                      type="button"
                      ref={(el) => (headerRefs.current[idx] = el)}
                      id={`step-header-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`step-panel-${idx}`}
                      onClick={() => toggleRow(idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-visible:rounded-[12px]"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="font-display text-[17px] sm:text-[18px] text-[#5C5C5C]">
                          {step.num}
                        </span>
                        <span className="font-display font-medium text-[18px] sm:text-[20px] text-[#1C1C1C]">
                          {step.title}
                        </span>
                      </div>

                      <div className="w-5 h-5 flex items-center justify-center text-[#1C1C1C] transition-transform duration-200">
                        {isOpen ? (
                          <X className="w-4 h-4 stroke-[2]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2]" />
                        )}
                      </div>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`step-panel-${idx}`}
                        role="region"
                        aria-labelledby={`step-header-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                          <p className="font-body text-[14px] text-[#5C5C5C] leading-relaxed max-w-[340px]">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Media Box with embedded IntegrationDiagram */}
        <Reveal>
          <div className="relative w-full aspect-[1.09/1] min-h-[320px] sm:min-h-[380px] rounded-[12px] overflow-hidden bg-[#F2F2F2] flex items-center justify-center p-4 sm:p-6">
            {/* Background Meadow ImageSlot */}
            <div className="absolute inset-0 z-0">
              <ImageSlot
                slotKey={gettingStarted.imageKey}
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>

            {/* Centered Integration Diagram */}
            <div className="relative z-10 w-full">
              <IntegrationDiagram />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
