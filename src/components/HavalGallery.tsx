'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const images = [
  {
    url: '/haval_pics/tank-300-offroad.jpg',
    title: 'Unstoppable Capability',
    description: 'The Tank 300 Hi4-T tackling challenging South African terrain with its advanced 4WD system.'
  },
  {
    url: '/haval_pics/haval-interior-1.webp',
    title: 'Premium Craftsmanship',
    description: 'Experience a new level of luxury with Nappa leather and dual 12.3-inch high-definition displays.'
  },
  {
    url: '/haval_pics/tank-300-engine.webp',
    title: 'Hybrid Performance',
    description: 'The heartbeat of adventure: A powerful 2.0L turbocharged hybrid engine delivering 648Nm of torque.'
  },
  {
    url: '/haval_pics/haval-exterior-1.webp',
    title: 'Modern Sophistication',
    description: 'A design language that commands attention, blending rugged utility with urban elegance.'
  }
];

export default function HavalGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  const transition: any = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-blue-500 text-sm font-black uppercase tracking-[0.4em] mb-4">Visual Experience</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Haval in Focus</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Witness the perfect synergy of design and engineering. From the rugged landscapes of the interior to the refined comfort of the cabin.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => { setIsAutoPlaying(false); paginate(-1); }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => { setIsAutoPlaying(false); paginate(1); }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                fill
                quality={100}
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="max-w-xl"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{images[currentIndex].title}</h3>
                  <p className="text-gray-300 text-lg font-light leading-relaxed mb-0">
                    {images[currentIndex].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-8 right-8 z-10">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">
              <span className="text-blue-500">{currentIndex + 1}</span>
              <span className="text-gray-600">/</span>
              <span>{images.length}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-8">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => { setIsAutoPlaying(false); setCurrentIndex(idx); }}
              className={`relative aspect-[16/9] rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                currentIndex === idx ? 'border-blue-500 scale-95 shadow-lg shadow-blue-500/20' : 'border-transparent opacity-40 hover:opacity-100'
              }`}
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
