import React, { useState, useLayoutEffect, useEffect } from "react";
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
import HackerBackground from "./components/HackerBackground";
import CircuitRipple from "./components/CircuitRipple";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const [activeFace, setActiveFace] = useState("home");
  const [rotation, setRotation] = useState(0);

  const paths = ["/", "/about", "/courses", "/admissions", "/contact"];
  const faces = ["home", "about", "courses", "admissions", "contact"];

  useEffect(() => {
    const currentIndex = paths.indexOf(location.pathname);
    if (currentIndex !== -1) {
      const face = faces[currentIndex];
      setActiveFace(face);
      setRotation(currentIndex * -90);

      // Scroll the target face to top after rotation
      setTimeout(() => {
        const faceElement = document.querySelector(`.face-${face}`);
        if (faceElement) faceElement.scrollTo({ top: 0, behavior: "smooth" });
      }, 850);
    }
  }, [location.pathname]);

  return (
    <div className="cube-viewport">
      <HackerBackground />
      <CircuitRipple />
      
      <div 
        className="cube-container" 
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <div className="cube-face face-home">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div className="cube-face face-about">
          <Routes location={location}>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div className="cube-face face-courses">
          <Routes location={location}>
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
        <div className="cube-face face-admissions">
          <Routes location={location}>
            <Route path="/admissions" element={<Admissions />} />
          </Routes>
        </div>
        <div className="cube-face face-contact">
          <Routes location={location}>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

      <style>{`
        .cube-viewport {
          perspective: 1200px;
          perspective-origin: 50% 50%;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          position: relative;
          background: #020817;
        }

        .cube-container {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.85s cubic-bezier(0.77, 0, 0.175, 1);
          will-change: transform;
        }

        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          scroll-behavior: smooth;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background: transparent;
        }

        /* 3D Face Positions */
        .face-home       { transform: rotateY(0deg) translateZ(50vw); }
        .face-about      { transform: rotateY(90deg) translateZ(50vw); }
        .face-courses    { transform: rotateY(180deg) translateZ(50vw); }
        .face-admissions { transform: rotateY(270deg) translateZ(50vw); }
        .face-contact    { transform: rotateY(360deg) translateZ(50vw); }

        /* Hide scrollbars for cleaner look but keep functionality */
        .cube-face::-webkit-scrollbar {
          width: 4px;
        }
        .cube-face::-webkit-scrollbar-track {
          background: rgba(2, 8, 23, 0.5);
        }
        .cube-face::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 2px;
        }
        .cube-face::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }

        @media (max-width: 768px) {
           .face-home       { transform: rotateY(0deg) translateZ(50vw); }
           .face-about      { transform: rotateY(90deg) translateZ(50vw); }
           .face-courses    { transform: rotateY(180deg) translateZ(50vw); }
           .face-admissions { transform: rotateY(270deg) translateZ(50vw); }
           .face-contact    { transform: rotateY(360deg) translateZ(50vw); }
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
