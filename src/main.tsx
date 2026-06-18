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
import { Header, WhatsAppButton } from "./components/Layout";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const [rotation, setRotation] = useState({ y: 0, x: 0 });
  const [activeIndex, setActiveIndex] = useState(0);

  const paths = ["/", "/about", "/courses", "/admissions", "/contact"];
  
  useEffect(() => {
    const index = paths.indexOf(location.pathname);
    if (index === -1) {
      setActiveIndex(-1);
      return;
    }
    
    setActiveIndex(index);
    if (index === 0) setRotation({ y: 0, x: 0 });
    else if (index === 1) setRotation({ y: -90, x: 0 });
    else if (index === 2) setRotation({ y: -180, x: 0 });
    else if (index === 3) setRotation({ y: -270, x: 0 });
    else if (index === 4) setRotation({ y: 0, x: -90 }); 

    setTimeout(() => {
      const faceClass = index === 4 ? ".face-contact" : `.face-${["home", "about", "courses", "admissions"][index]}`;
      const faceElement = document.querySelector(faceClass);
      if (faceElement) faceElement.scrollTo({ top: 0, behavior: "smooth" });
    }, 850);
  }, [location.pathname]);

  const isNotFound = paths.indexOf(location.pathname) === -1;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#020817]">
      <HackerBackground />
      <CircuitRipple />
      <div className="fixed top-0 left-0 w-full z-[999]">
        <Header />
      </div>
      <div className="fixed bottom-6 right-6 z-[999]">
        <WhatsAppButton />
      </div>
      
      <div className="cube-viewport">
        <div 
          className="cube-container" 
          style={{ transform: `translateZ(-50vw) rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)` }}
        >
          {/* Face 1: Home */}
          <div className={`cube-face face-home ${activeIndex === 0 ? "active-face" : "inactive-face"}`}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>

          {/* Face 2: About */}
          <div className={`cube-face face-about ${activeIndex === 1 ? "active-face" : "inactive-face"}`}>
            <Routes location={location}>
              <Route path="/about" element={<About />} />
            </Routes>
          </div>

          {/* Face 3: Courses */}
          <div className={`cube-face face-courses ${activeIndex === 2 ? "active-face" : "inactive-face"}`}>
            <Routes location={location}>
              <Route path="/courses" element={<Courses />} />
            </Routes>
          </div>

          {/* Face 4: Admissions */}
          <div className={`cube-face face-admissions ${activeIndex === 3 ? "active-face" : "inactive-face"}`}>
            <Routes location={location}>
              <Route path="/admissions" element={<Admissions />} />
            </Routes>
          </div>

          {/* Face 5: Contact (Top) */}
          <div className={`cube-face face-contact ${activeIndex === 4 ? "active-face" : "inactive-face"}`}>
            <Routes location={location}>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          {/* NotFound Overlay */}
          {isNotFound && (
            <div className="cube-face face-notfound active-face">
               <Routes location={location}>
                 <Route path="*" element={<NotFound />} />
               </Routes>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .cube-viewport {
          perspective: 2000px;
          perspective-origin: 50% 50%;
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          pointer-events: none;
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
          transition: opacity 0.85s ease;
        }

        .active-face {
          pointer-events: auto !important;
          z-index: 100;
          opacity: 1;
        }

        .inactive-face {
          pointer-events: none !important;
          z-index: 0;
          opacity: 0.15;
        }

        /* 3D Face Positions */
        .face-home       { transform: rotateY(0deg) translateZ(50vw); }
        .face-about      { transform: rotateY(90deg) translateZ(50vw); }
        .face-courses    { transform: rotateY(180deg) translateZ(50vw); }
        .face-admissions { transform: rotateY(270deg) translateZ(50vw); }
        .face-contact    { transform: rotateX(90deg) translateZ(50vw); }
        .face-notfound   { transform: translateZ(51vw); background: #020817; z-index: 200; pointer-events: auto; }

        .cube-face::-webkit-scrollbar { width: 4px; }
        .cube-face::-webkit-scrollbar-track { background: rgba(2, 8, 23, 0.5); }
        .cube-face::-webkit-scrollbar-thumb { background: rgba(6, 182, 212, 0.3); border-radius: 2px; }

        @media (max-width: 768px) {
           .face-home       { transform: rotateY(0deg) translateZ(50vw); }
           .face-about      { transform: rotateY(90deg) translateZ(50vw); }
           .face-courses    { transform: rotateY(180deg) translateZ(50vw); }
           .face-admissions { transform: rotateY(270deg) translateZ(50vw); }
           .face-contact    { transform: rotateX(90deg) translateZ(50vw); }
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
