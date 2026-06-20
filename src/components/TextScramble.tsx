import React, { useState, useEffect, useCallback } from 'react';

interface TextScrambleProps {
  text: string;
  speed?: number;
  delay?: number;
  triggerOnHover?: boolean;
  className?: string;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  speed = 30,
  delay = 0,
  triggerOnHover = true,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let frame = 0;
    const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
    
    for (let i = 0; i < text.length; i++) {
      const from = '';
      const to = text[i];
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20) + 10;
      queue.push({ from, to, start, end });
    }

    let animationFrameId: number;

    const update = () => {
      let output = '';
      let complete = 0;

      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end, char } = queue[i];
        
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          output += `<span class="text-primary font-mono opacity-80">${char}</span>`;
        } else {
          output += from;
        }
      }

      // We use innerHTML to display styled scramble characters
      const element = document.getElementById(`scramble-${text.replace(/\s+/g, '-')}`);
      if (element) {
        element.innerHTML = output;
      } else {
        setDisplayText(output.replace(/<[^>]*>/g, ''));
      }

      if (complete === queue.length) {
        setIsScrambling(false);
      } else {
        frame++;
        animationFrameId = requestAnimationFrame(update);
      }
    };

    update();

    return () => cancelAnimationFrame(animationFrameId);
  }, [text, isScrambling]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scramble();
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      id={`scramble-${text.replace(/\s+/g, '-')}`}
      onMouseEnter={triggerOnHover ? scramble : undefined}
      className={`cursor-default select-none ${className}`}
    >
      {displayText}
    </span>
  );
};
