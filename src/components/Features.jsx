import React, { useRef, useState, useEffect } from "react";
import FeatureCard from "./FeatureCard.jsx";
import CarouselControls from "./CarouselControls.jsx";
import Section from "./Section.jsx";
import Reveal from "./ui/Reveal.jsx";
import { SITE_CONTENT, SHOW_EXTENSION_SLIDES } from "../data/siteContent.js";

export default function Features() {
  const { features } = SITE_CONTENT;
  const scrollRef = useRef(null);

  // Filter slides if extensions are disabled
  const activeSlides = SHOW_EXTENSION_SLIDES
    ? features.items
    : features.items.filter((item) => !item.extension);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(activeSlides.length > 2);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanPrev(scrollLeft > 10);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    updateScrollState();
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [activeSlides]);

  const handlePrev = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth >= 768
      ? scrollRef.current.clientWidth / 2
      : scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const handleNext = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth >= 768
      ? scrollRef.current.clientWidth / 2
      : scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <Section id="features" className="py-16 md:py-24 bg-white">
      <Reveal>
        {/* Section Heading & Subtitle */}
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="font-display text-h2 text-[#1C1C1C] tracking-tight">
            {features.title}
          </h2>
          <p className="mt-4 mx-auto max-w-[360px] font-body text-[15px] sm:text-[16px] text-[#5C5C5C] leading-relaxed">
            {features.description}
          </p>
        </div>
      </Reveal>

      {/* Carousel Viewport */}
      <div className="mt-12 md:mt-14 relative">
        <div
          ref={scrollRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Powerful Features"
          tabIndex={0}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-2 outline-none focus-visible:ring-1 focus-visible:ring-[#1C1C1C]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {activeSlides.map((item, idx) => (
            <div
              key={item.id}
              className="w-full md:w-[calc(50%-12px)] shrink-0 snap-start"
            >
              <FeatureCard
                item={item}
                index={idx}
                totalSlides={activeSlides.length}
              />
            </div>
          ))}
        </div>

        {/* Centered Carousel Controls */}
        <div className="mt-10 flex justify-center">
          <CarouselControls
            onPrev={handlePrev}
            onNext={handleNext}
            canPrev={canPrev}
            canNext={canNext}
            prevAriaLabel="Previous feature"
            nextAriaLabel="Next feature"
          />
        </div>
      </div>
    </Section>
  );
}
