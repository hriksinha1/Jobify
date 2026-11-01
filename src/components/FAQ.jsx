import React, { useState, useRef } from "react";
import { Monitor, MessageCircle, CreditCard, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedTabs from "./ui/AnimatedTabs.jsx";
import SupportCTA from "./SupportCTA.jsx";
import Section from "./Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { SITE_CONTENT } from "../data/siteContent.js";
import { cn } from "../lib/utils.js";

const tabIconMap = {
  Monitor: <Monitor className="w-4 h-4 stroke-[1.8]" />,
  MessageCircle: <MessageCircle className="w-4 h-4 stroke-[1.8]" />,
  CreditCard: <CreditCard className="w-4 h-4 stroke-[1.8]" />,
};

export default function FAQ() {
  const { faq } = SITE_CONTENT;
  const [activeTab, setActiveTab] = useState("product");
  // First item open initially
  const [openIndex, setOpenIndex] = useState(0);
  const questionRefs = useRef([]);

  const currentQuestions = faq.items[activeTab] || faq.items.product;

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setOpenIndex(0); // Switching tabs resets to first item open
  };

  const toggleQuestion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const handleKeyDown = (e, index) => {
    let nextIndex = null;
    if (e.key === "ArrowDown") {
      nextIndex = (index + 1) % currentQuestions.length;
    } else if (e.key === "ArrowUp") {
      nextIndex = (index - 1 + currentQuestions.length) % currentQuestions.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = currentQuestions.length - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      questionRefs.current[nextIndex]?.focus();
    }
  };

  const tabItems = faq.tabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    icon: tabIconMap[tab.icon] || <Monitor className="w-4 h-4" />,
  }));

  return (
    <Section id="faq" className="py-16 md:py-24 bg-white">
      {/* Centered Heading & Subtitle */}
      <Reveal>
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="font-display text-h2-small text-[#1C1C1C] tracking-tight">
            {faq.title}
          </h2>
          <p className="mt-3.5 mx-auto max-w-[420px] font-body text-[14.5px] sm:text-[15px] text-[#5C5C5C] leading-relaxed">
            {faq.description}
          </p>
        </div>
      </Reveal>

      {/* Main Column */}
      <div className="mx-auto max-w-[640px] mt-10 md:mt-12">
        {/* Animated Tabs */}
        <AnimatedTabs
          tabs={tabItems}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          className="mb-6"
        />

        {/* Tab Panel */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="divide-y divide-[#EDEDED]"
        >
          {currentQuestions.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-4.5 sm:py-5">
                <h3>
                  <button
                    type="button"
                    ref={(el) => (questionRefs.current[idx] = el)}
                    id={`faq-btn-${activeTab}-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${activeTab}-${idx}`}
                    onClick={() => toggleQuestion(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className="w-full flex items-center justify-between text-left gap-4 py-1 group focus-visible:rounded-sm"
                  >
                    <span
                      className={cn(
                        "font-body text-[15px] transition-colors",
                        isOpen
                          ? "text-[#1C1C1C] font-semibold"
                          : "text-[#1C1C1C] font-normal group-hover:text-[#0B6B12]"
                      )}
                    >
                      {item.q}
                    </span>

                    {/* 28px circular button with +/- icon */}
                    <div className="w-[28px] h-[28px] rounded-full bg-[#F5F5F5] group-hover:bg-[#EBEBEB] flex items-center justify-center shrink-0 text-[#1C1C1C] transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 stroke-[2]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2]" />
                      )}
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${activeTab}-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${activeTab}-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="pt-3 pb-1 pr-6 sm:pr-8">
                        <p className="font-body text-[13.5px] text-[#5C5C5C] leading-relaxed max-w-[560px]">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support CTA Component */}
        <div className="mt-12">
          <SupportCTA data={faq.supportCard} />
        </div>
      </div>
    </Section>
  );
}
