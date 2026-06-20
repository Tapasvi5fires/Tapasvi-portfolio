import React, { useEffect, useState, useRef } from 'react';

export const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Disable trail on touch devices/mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    // Listen for custom elements that should trigger active hover styling
    const addHoverListeners = () => {
      const targets = document.querySelectorAll('button, a, [role="button"], .cursor-pointer');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', () => setIsHovered(true));
        target.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    
    // Add hover listeners initially and on DOM mutations
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      observer.disconnect();
    };
  }, [isVisible]);

  // Smooth lerp (linear interpolation) loop for trailing circle
  useEffect(() => {
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Interactive Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0) scale(${isHovered ? 1.5 : 1})`,
          willChange: 'transform'
        }}
      />
      {/* Outer Sleek Trailing Ring */}
      <div
        className="fixed top-0 left-0 w-6 h-6 border border-primary/40 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(calc(${trail.x}px - 50%), calc(${trail.y}px - 50%), 0) scale(${isHovered ? 1.8 : 1})`,
          backgroundColor: isHovered ? 'rgba(var(--primary-rgb), 0.05)' : 'transparent',
          willChange: 'transform'
        }}
      />
    </>
  );
};
