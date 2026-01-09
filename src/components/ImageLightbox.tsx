"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ImageLightbox({ images, initialIndex, isOpen, onClose, title }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToPrev, goToNext, onClose]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/98 flex flex-col"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-white">
          {title && <p className="text-sm text-gray-400 uppercase tracking-wider">{title}</p>}
          <p className="text-lg font-medium">{currentIndex + 1} of {images.length}</p>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main image area */}
      <div 
        className="flex-1 relative flex items-center justify-center px-4 md:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 md:left-8 z-20 text-white/60 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-sm transition-all border border-white/10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 md:right-8 z-20 text-white/60 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-sm transition-all border border-white/10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image with animation */}
        <div className="relative w-full max-w-5xl h-[60vh] md:h-[70vh]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom thumbnail strip */}
      <div 
        className="py-4 px-6 bg-gradient-to-t from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center gap-2 overflow-x-auto max-w-4xl mx-auto py-2 scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${
                idx === currentIndex 
                  ? 'w-20 h-14 ring-2 ring-white ring-offset-2 ring-offset-black' 
                  : 'w-16 h-12 opacity-40 hover:opacity-80 grayscale hover:grayscale-0'
              }`}
            >
              <Image 
                src={img} 
                alt={`Thumbnail ${idx + 1}`} 
                fill 
                className="object-cover" 
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
