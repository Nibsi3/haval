"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface PartsBrand {
  name: string;
  logo: string;
  link: string;
  subtitle?: string;
  invert?: boolean;
}

const partsBrands: PartsBrand[] = [
  { name: 'Mercedes-Benz', logo: '/brands/Mercedes Benz Maritime Motors.jpg', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.97959,25.55352/@-33.9824379,25.5436883,15z', subtitle: 'Maritime Motors' },
  { name: 'Kia', logo: '/brands/Kia Nelson Mandela Bay.jpg', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.97959,25.55352/@-33.9824379,25.5436883,15z', subtitle: 'Maritime Motors', invert: true },
  { name: 'Mitsubishi', logo: '/brands/Mitsubishi Motors at Maritime.png', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.97959,25.55352/@-33.9824379,25.5436883,15z', subtitle: 'Maritime Motors' },
  { name: 'Honda Auto PE', logo: '/brands/Honda at Maritime George.png', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.97959,25.55352/@-33.9824379,25.5436883,15z', subtitle: 'Maritime Motors', invert: true },
  { name: 'Honda & Haval George', logo: '/brands/Honda at Maritime George.png', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.95616,22.45249/@-33.610492,21.3243824,7z', subtitle: 'Maritime George', invert: true },
  { name: 'GWM', logo: '/brands/GWM Maritime George.png', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.95616,22.45249/@-33.610492,21.3243824,7z', subtitle: 'Maritime George', invert: true },
  { name: 'Haval', logo: '/brands/Haval at Maritime George.png', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.95616,22.45249/@-33.610492,21.3243824,7z', subtitle: 'Maritime George' },
  { name: 'Jetour', logo: '/brands/Jetour Nelson Mandela Bay.png', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.97959,25.55352/@-33.9824379,25.5436883,15z', subtitle: 'Maritime Motors', invert: true },
  { name: 'Tata Motors', logo: '/brands/Tata Motors Nelson Mandela Bay.png', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.97959,25.55352/@-33.9824379,25.5436883,15z', subtitle: 'Maritime Motors', invert: true },
  { name: 'Maritime Commercial', logo: '/brands/Maritime Commercial Nelson Mandela Bay  copy.jpg', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.92839,25.60486/@-33.9582083,25.5429752,13z', subtitle: 'Commercial Vehicles' },
  { name: 'Fuso', logo: '/brands/Fuso.jpg', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.92839,25.60486/@-33.9582083,25.5429752,13z', subtitle: 'Maritime Commercial', invert: true },
];

export default function PartsSlider() {
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

  const duplicatedBrands = [...partsBrands, ...partsBrands];

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-900 to-transparent z-10" />
      
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-hidden py-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedBrands.map((brand, idx) => (
          <a
            key={`${brand.name}-${idx}`}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[160px] bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all group"
          >
            <div className="relative w-full h-[70px]">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className={`object-contain transition-all ${brand.invert ? 'brightness-0 invert group-hover:brightness-0 group-hover:invert' : 'brightness-75 group-hover:brightness-100'}`}
              />
            </div>
            <div className="mt-2 text-center">
              <p className="text-white text-xs font-medium truncate w-full">{brand.name}</p>
              {brand.subtitle && <p className="text-gray-500 text-[10px]">{brand.subtitle}</p>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
