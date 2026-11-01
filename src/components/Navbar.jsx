import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { NAV_LINKS } from "../data/routes.js";
import { SITE_CONTENT } from "../data/siteContent.js";
import { useScrollSpy } from "../hooks/useScrollSpy.js";
import { cn } from "../lib/utils.js";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuButtonRef = useRef(null);
  const mobileDrawerRef = useRef(null);

  // Active section tracking on Home route
  const isHome = location.pathname === "/";
  const activeSection = useScrollSpy(["top", "features", "benefits", "get-started", "use-cases", "faq"]);

  // Detect scroll offset > 8px for sticky blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleLinkClick = (e, link) => {
    if (link.isAnchor) {
      if (isHome) {
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
        // Navigate to home with target hash
        navigate(link.href);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to Content accessible link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#1C1C1C] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200",
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-[#E6E6E6]"
            : "bg-white border-b border-transparent"
        )}
      >
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 h-[72px] md:h-[80px] flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <Logo variant="nav" />
          </div>

          {/* Center: Desktop Nav Links */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-7 text-[15px]"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                (isHome && link.targetId && activeSection === link.targetId) ||
                (!link.isAnchor && location.pathname === link.href);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={cn(
                    "relative py-1 font-body transition-colors duration-200 group focus-visible:rounded-sm",
                    isActive
                      ? "text-[#1C1C1C] font-medium"
                      : "text-[#5C5C5C] hover:text-[#1C1C1C]"
                  )}
                >
                  {link.label}
                  {/* Subtle 1px underline growing from left on hover */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1.5px] bg-[#1C1C1C] transition-all duration-200 ease-out",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right: Desktop CTA button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center h-[40px] px-[18px] rounded-full bg-[#2A2A2A] text-white text-[15px] font-medium transition-all duration-200 hover:bg-[#3A3A3A] hover:-translate-y-[1px] active:scale-[0.98] shadow-sm focus-visible:rounded-full"
            >
              {SITE_CONTENT.brand.navCta}
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="w-[44px] h-[44px] flex items-center justify-center rounded-lg text-[#1C1C1C] hover:bg-[#F2F2F2] transition-colors focus-visible:rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Full-width Sheet Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            ref={mobileDrawerRef}
            className="lg:hidden fixed inset-x-0 top-[72px] md:top-[80px] bottom-0 bg-white z-40 border-t border-[#E6E6E6] flex flex-col justify-between p-6 overflow-y-auto"
          >
            <nav className="flex flex-col divide-y divide-[#F2F2F2]">
              {NAV_LINKS.map((link) => {
                const isActive =
                  (isHome && link.targetId && activeSection === link.targetId) ||
                  (!link.isAnchor && location.pathname === link.href);

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={cn(
                      "flex items-center h-[56px] text-[18px] font-body transition-colors",
                      isActive
                        ? "text-[#1C1C1C] font-semibold"
                        : "text-[#5C5C5C] hover:text-[#1C1C1C]"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="pt-6 pb-8 border-t border-[#E6E6E6]">
              <Link
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-[48px] flex items-center justify-center rounded-full bg-[#2A2A2A] text-white text-[16px] font-medium shadow-md hover:bg-[#3A3A3A] transition-colors"
              >
                {SITE_CONTENT.brand.navCta}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
