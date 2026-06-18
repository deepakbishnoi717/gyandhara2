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
    }, 600);
  }, []);

  useEffect(() => {
    window.addEventListener('click', addRipple);
    return () => window.removeEventListener('click', addRipple);
  }, [addRipple]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="click-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        >
          <div className="inner-ripple" />
        </div>
      ))}
      <style>{`
        .click-ripple {
          position: fixed;
          border-radius: 50%;
          border: 1.5px solid rgba(6, 182, 212, 0.8);
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.4),
                      inset 0 0 8px rgba(6, 182, 212, 0.1);
          pointer-events: none;
          z-index: 100;
          animation: ripple-expand 0.6s ease-out forwards;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
        }

        .inner-ripple {
          position: absolute;
          inset: 20%;
          border-radius: 50%;
          border: 1px solid rgba(6, 182, 212, 0.3);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        @keyframes ripple-expand {
          0%   { width: 0px; height: 0px; opacity: 1; }
          100% { width: 120px; height: 120px; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CircuitRipple;
