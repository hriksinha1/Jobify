import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Benefits from "./components/Benefits.jsx";
import GettingStarted from "./components/GettingStarted.jsx";
import UseCases from "./components/UseCases.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import StubPage from "./components/StubPage.jsx";
import NotFound from "./components/NotFound.jsx";
import { STUB_ROUTES } from "./data/routes.js";
import { useScrollToHash } from "./hooks/useScrollToHash.js";

/**
 * Main HomePage layout assembling all 8 primary sections
 */
function HomePage() {
  useEffect(() => {
    document.title = "Xelofia - AI Automation Platform";
  }, []);

  return (
    <main id="main-content">
      {/* SECTION 02: HERO */}
      <Hero />

      {/* SECTION 03: POWERFUL FEATURES */}
      <Features />

      {/* SECTION 04: WHY CHOOSE US / BENEFITS */}
      <Benefits />

      {/* SECTION 05: GET STARTED IN 3 SIMPLE STEPS */}
      <GettingStarted />

      {/* SECTION 06: BUILT FOR EVERY TEAM AND WORKFLOW */}
      <UseCases />

      {/* SECTION 07: FAQ & SUPPORT */}
      <FAQ />
    </main>
  );
}

/**
 * AppContent manages hash scrolling and router layouts
 */
function AppContent() {
  useScrollToHash();

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1C1C1C]">
      {/* SECTION 01: HEADER / NAVBAR */}
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

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* SECTION 08: FOOTER */}
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
