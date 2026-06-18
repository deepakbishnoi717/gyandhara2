import React, { useEffect, useState, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const CircuitRipple: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = useCallback((e: MouseEvent) => {
    const newRipple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  }, []);

  useEffect(() => {
    window.addEventListener('click', addRipple);
    return () => window.removeEventListener('click', addRipple);
  }, [addRipple]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute animate-circuit-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500 shadow-[0_0_20px_#06b6d4] scale-0 animate-pulse-fast" />
          <div className="absolute inset-0 rounded-full border border-emerald-500/50 scale-0 animate-pulse-slow" />
        </div>
      ))}
      <style>{`
        @keyframes circuit-ripple {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
        }
        .animate-circuit-ripple {
          width: 100px;
          height: 100px;
          animation: circuit-ripple 0.8s cubic-bezier(0, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default CircuitRipple;
