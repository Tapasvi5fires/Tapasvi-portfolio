import React, { useRef, useState } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxRotation?: number; // Maximum tilt angle in degrees
  perspective?: number; // Perspective value in pixels
  scale?: number; // Scale on hover
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  maxRotation = 10,
  perspective = 1000,
  scale = 1.02,
  className = '',
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center for 3D tilt
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;

    // Mouse coordinates relative to card top-left for spotlight overlay
    const xCoord = e.clientX - rect.left;
    const yCoord = e.clientY - rect.top;
    setSpotlightPos({ x: xCoord, y: yCoord });
    setIsHovered(true);

    // Normalize coordinates (-1 to 1)
    const normalizedX = x / (width / 2);
    const normalizedY = y / (height / 2);

    // Calculate rotation angles
    const rotateX = -normalizedY * maxRotation;
    const rotateY = normalizedX * maxRotation;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, ...tiltStyle }}
      className={`will-change-transform relative overflow-hidden rounded-xl ${className}`}
      {...props}
    >
      {/* Interactive spotlight glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(280px circle at ${spotlightPos.x}px ${spotlightPos.y}px, hsl(var(--primary) / 0.12), transparent 75%)`,
          opacity: isHovered ? 1 : 0
        }}
      />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
