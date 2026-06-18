import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import "./styles.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CyberGridBackground from "./components/CyberGridBackground";
import CircuitRipple from "./components/CircuitRipple";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<"idle" | "rotating">("idle");
  const [direction, setDirection] = useState(1);

  useLayoutEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("rotating");
      
      const paths = ["/", "/about", "/courses", "/admissions", "/contact"];
      const currentIndex = paths.indexOf(displayLocation.pathname);
      const nextIndex = paths.indexOf(location.pathname);
      setDirection(nextIndex > currentIndex ? 1 : -1);

      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("idle");
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className="relative w-full h-screen perspective-[1200px] overflow-hidden bg-slate-950">
      <CyberGridBackground />
      <CircuitRipple />
      <div
        className={`relative w-full h-full transition-transform duration-800 preserve-3d ${
          transitionStage === "rotating" ? (direction > 0 ? "rotate-left" : "rotate-right") : ""
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          className="absolute inset-0 backface-hidden preserve-3d w-full h-full overflow-y-auto scroll-smooth side-scrolling-containment" 
          style={{ transform: 'translateZ(0px)', backfaceVisibility: 'hidden' }}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {transitionStage === "rotating" && (
          <div 
            className="absolute inset-0 backface-hidden preserve-3d w-full h-full overflow-y-auto scroll-smooth side-scrolling-containment" 
            style={{ 
              transform: `rotateY(${direction * 90}deg) translateZ(50vw) translateX(${direction * -50}vw)`,
              backfaceVisibility: 'hidden'
            }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        )}
      </div>

      <style>{`
        .perspective-1200 { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .side-scrolling-containment { contain: paint size layout; }
        
        .rotate-left {
          transform: rotateY(-90deg) translateX(-50vw) translateZ(-50vw);
        }
        .rotate-right {
          transform: rotateY(90deg) translateX(50vw) translateZ(-50vw);
        }
      `}</style>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
        <Toaster richColors position="top-center" />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
