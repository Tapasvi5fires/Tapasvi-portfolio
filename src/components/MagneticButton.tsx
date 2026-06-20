import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactElement;
  range?: number; // Distance in px where magnet effect activates
  strength?: number; // Pull strength multiplier
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  range = 40,
  strength = 0.35
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      setPosition({
        x: distanceX * strength,
        y: distanceY * strength
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const child = React.Children.only(children);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        willChange: 'transform'
      }}
    >
      {React.cloneElement(child, {
        className: `${child.props.className || ''} transition-all duration-300`
      })}
    </div>
  );
};
