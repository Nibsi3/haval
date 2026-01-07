"use client";

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({ value, label, duration = 2000 }: AnimatedCounterProps) {
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
      { threshold: 0.5 }
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
      
      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * targetNumber);
      
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
