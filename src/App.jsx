import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import JobCategories from "./components/JobCategories.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import EverythingYouNeed from "./components/EverythingYouNeed.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import StubPage from "./components/StubPage.jsx";
import NotFound from "./components/NotFound.jsx";
import { STUB_ROUTES } from "./data/routes.js";
import { useScrollToHash } from "./hooks/useScrollToHash.js";

/**
 * Main Jobify Landing Page
 * Faithfully following the 11-section information architecture of Aarivi:
 * 01. Header & Navigation (rendered by layout wrapper)
 * 02. Hero / Product Demonstration
 * 03. Explore Job Categories
 * 04. How Jobify Works
 * 05. Everything You Need
 * 06. Pricing Plans
 * 07. Customer Testimonials
 * 08. Frequently Asked Questions
 * 09. Get in Touch / Contact Form
 * 10. Final Conversion CTA
 * 11. Footer (rendered by layout wrapper)
 */
function HomePage() {
  useEffect(() => {
    document.title = "Jobify - Job Search & Application Management";
  }, []);

  return (
    <main id="main-content">
      {/* 02. Hero / Product Demonstration */}
      <Hero />

      {/* 03. Explore Job Categories */}
      <JobCategories />

      {/* 04. How Jobify Works */}
      <HowItWorks />

      {/* 05. Everything You Need */}
      <EverythingYouNeed />

      {/* 06. Pricing Plans */}
      <Pricing />

      {/* 07. Customer Testimonials */}
      <Testimonials />

      {/* 08. Frequently Asked Questions */}
      <FAQ />

      {/* 09. Get in Touch / Contact Form */}
      <Contact />

      {/* 10. Final Conversion CTA */}
      <FinalCTA />
    </main>
  );
}

/**
 * Layout orchestrator with persistent Navbar, Router, and Footer
 */
function AppContent() {
  useScrollToHash();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#161616]">
      {/* 01. Header & Navigation */}
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/404" element={<NotFound />} />

          {/* Statically registered stub routes */}
          {STUB_ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <StubPage
                  title={route.title}
                  description={route.description}
                />
              }
            />
          ))}

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
