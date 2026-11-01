import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";
import ImageSlot from "./ImageSlot.jsx";
import { SITE_CONTENT } from "../data/siteContent.js";
import { subscribeNewsletter } from "../services/newsletter.js";
import { cn } from "../lib/utils.js";

export default function Footer() {
  const { footer } = SITE_CONTENT;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, link) => {
    if (link.isAnchor) {
      if (location.pathname === "/") {
        e.preventDefault();
        if (link.targetId === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(link.targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else {
        navigate(link.href);
      }
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail || !/^\S+@\S+\.\S+$/.test(cleanEmail)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "loading", message: "Subscribing..." });

    try {
      const result = await subscribeNewsletter(cleanEmail);

      if (result.ok) {
        setStatus({
          type: "success",
          message: "Thanks - check your inbox.",
        });
        setEmail("");
      } else if (result.reason === "not-configured") {
        setStatus({
          type: "info",
          message: "Newsletter signup isn't connected yet.",
        });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="relative w-full overflow-hidden pt-20 md:pt-28 pb-12 md:pb-16 bg-white border-t border-[#F0F0F0]"
      aria-label="Site footer"
    >
      {/* Background Landscape with Mist Fade and Text Readability Overlay */}
      <div
        className="absolute inset-x-0 bottom-0 top-[20%] pointer-events-none select-none z-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, #000 45%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 45%)",
        }}
      >
        <ImageSlot
          slotKey="footer-landscape"
          className="w-full h-full object-cover"
          objectPosition="bottom center"
          aria-hidden="true"
        />
        {/* Semi-transparent white veil ensuring >=4.5:1 text contrast for all link text */}
        <div className="absolute inset-0 bg-white/60 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16 items-start">
          {/* Left Region: Logo & Newsletter */}
          <div className="flex flex-col items-start">
            <Logo variant="footer" />

            <div className="mt-12 sm:mt-14 w-full max-w-[380px]">
              <h3 className="font-body font-medium text-[17px] text-[#1C1C1C]">
                {footer.newsletterTitle}
              </h3>

              {/* Newsletter Form */}
              <form
                onSubmit={handleSubscribe}
                noValidate
                className="mt-4 relative flex items-center h-[56px] p-1.5 rounded-full bg-white border border-black/10 shadow-sm focus-within:ring-2 focus-within:ring-[#1C1C1C]"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email Address for Newsletter
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={footer.inputPlaceholder}
                  autoComplete="email"
                  required
                  disabled={isSubmitting}
                  className="w-full h-full pl-5 pr-2 rounded-full font-body text-[15px] text-[#1C1C1C] placeholder:text-[#8A8A8A] bg-transparent outline-none focus:outline-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shrink-0 h-[44px] px-6 rounded-full bg-[#2A2A2A] text-white font-body text-[14.5px] font-medium transition-all duration-200 hover:bg-[#3A3A3A] active:scale-95 disabled:opacity-60 focus-visible:rounded-full"
                >
                  {isSubmitting ? "..." : footer.buttonText}
                </button>
              </form>

              {/* Accessible Live Region Status Message */}
              <div
                role="status"
                aria-live="polite"
                className="mt-2.5 text-[13px] font-body min-h-[20px]"
              >
                {status.type === "success" && (
                  <span className="text-[#0B6B12] font-medium">
                    {status.message}
                  </span>
                )}
                {status.type === "error" && (
                  <span className="text-[#C53030] font-medium">
                    {status.message}
                  </span>
                )}
                {status.type === "info" && (
                  <span className="text-[#5C5C5C] italic">
                    {status.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right Region: 4 Link Groups */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 pt-2">
            {footer.linkGroups.map((group) => (
              <div key={group.id} className="flex flex-col gap-4 text-left">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="font-body text-[14.5px] text-[#2C2C2C] transition-colors duration-150 hover:text-[#0B6B12] hover:underline underline-offset-4 focus-visible:rounded-sm w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Thin Bottom Row */}
        <div className="mt-14 md:mt-20 pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-body text-[13px] text-[#5C5C5C]">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-6 text-[13px] text-[#5C5C5C] font-body">
            <Link to="/terms" className="hover:text-[#1C1C1C]">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="hover:text-[#1C1C1C]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
