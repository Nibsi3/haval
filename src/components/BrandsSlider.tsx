"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface Brand {
  name: string;
  logo: string;
  invert?: boolean;
}

const brands: Brand[] = [
  { name: 'GWM', logo: '/brands/GWM-Maritime-George.png', invert: true },
  { name: 'Haval', logo: '/brands/Haval-at-Maritime-George.png' },
];

export default function BrandsSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const container = scrollRef.current;
        if (!container) return prev;
        const maxScroll = container.scrollWidth / 2;
        const newPos = prev + 1;
        return newPos >= maxScroll ? 0 : newPos;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const duplicatedBrands = [...brands, ...brands];

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
      
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-hidden py-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedBrands.map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            className="flex-shrink-0 w-[160px] bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all group"
          >
            <div className="relative w-full h-[70px]">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                priority
                className={`object-contain transition-all ${brand.invert ? 'brightness-0 invert group-hover:brightness-0 group-hover:invert' : 'brightness-90 group-hover:brightness-110'}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
