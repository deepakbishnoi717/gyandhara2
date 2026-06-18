import React, { useEffect, useState, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const RippleEffect: React.FC = () => {
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
          className="absolute rounded-full border border-cyan-500/50 animate-ripple-burst"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '0px',
            height: '0px',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.5)',
          }}
        />
      ))}
      <style>{`
        @keyframes ripple-burst {
          0% {
            width: 0px;
            height: 0px;
            opacity: 1;
          }
          100% {
            width: 500px;
            height: 500px;
            opacity: 0;
          }
        }
        .animate-ripple-burst {
          animation: ripple-burst 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default RippleEffect;
