"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface PartsBrand {
  name: string;
  logo: string;
  link: string;
}

const partsBrands: PartsBrand[] = [
  { name: 'Mercedes-Benz', logo: '/brands/Mercedes Benz Maritime Motors.jpg', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.92839,25.60486/@-33.9582083,25.5429752,13z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D' },
  { name: 'Kia', logo: '/brands/Kia Nelson Mandela Bay.jpg', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.9789448,25.5530441/@-33.9831938,25.5506047,16z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D' },
  { name: 'Honda', logo: '/brands/Autohaus Nelson Mandela Bay.png', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.9789448,25.5530441/@-33.9831938,25.5506047,16z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D' },
  { name: 'Mitsubishi', logo: '/brands/Mitsubishi Motors at Maritime.png', link: 'https://www.google.com/maps/dir/-33.9606503,22.4845943/-33.92839,25.60486/@-33.8617582,21.3361402,7z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D' },
  { name: 'Fuso', logo: '/brands/Fuso.jpg', link: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.92839,25.60486/@-33.9582083,25.5429752,13z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D' },
  { name: 'Haval', logo: '/brands/Haval at Maritime George.png', link: 'https://www.google.com/maps/dir/-33.9606503,22.4845943/maritime+george/@-33.9604652,22.4480836,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1dd60547e38a2947:0xbe0cecd5a3dff8bc!2m2!1d22.4522361!2d-33.9564551?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D' },
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
            className="flex-shrink-0 w-[140px] h-[80px] bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all group"
          >
            <div className="relative w-full h-full">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain brightness-75 group-hover:brightness-100 transition-all"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
