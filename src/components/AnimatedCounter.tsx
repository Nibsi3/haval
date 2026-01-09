"use client";

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({ value, label, duration = 3000 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateValue = () => {
    // Extract numeric part and suffix (like + or K+)
    const match = value.match(/^(\d+)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2] || '';
    
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-in-out cubic for extra smoothness
      const easeInOutCubic = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      const current = Math.round(easeInOutCubic * targetNumber);
      
      setDisplayValue(`${current}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-black text-white mb-2">{displayValue}</div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
}
