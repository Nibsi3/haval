"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';

const cars = [
  {
    id: 1,
    slug: 'tank-300',
    name: 'TANK',
    model: '300',
    tagline: 'Born for Adventure',
    description: 'The Tank 300 is an off-road focused SUV with retro-futuristic styling, featuring a 2.0L turbocharged engine, intelligent 4WD system, and 9 terrain modes.',
    specs: {
      power: '167 kW',
      torque: '387 Nm',
      engine: '2.0L Turbo',
      transmission: '8AT ZF',
    },
    price: 'From R 799,900',
    image: '/cars/haval-tank-300.png',
    color: '#1e3a5f',
  },
  {
    id: 2,
    slug: 'h6',
    name: 'HAVAL',
    model: 'H6',
    tagline: 'Intelligent Luxury SUV',
    description: 'The world\'s best-selling SUV combines cutting-edge technology with premium comfort. Features include L2 autonomous driving and a panoramic sunroof.',
    specs: {
      power: '155 kW',
      torque: '325 Nm',
      engine: '2.0L Turbo',
      transmission: '7DCT',
    },
    price: 'From R 599,900',
    image: '/cars/haval-h6.png',
    color: '#2d1f3d',
  },
  {
    id: 3,
    slug: 'h6-gt',
    name: 'HAVAL',
    model: 'H6 GT',
    tagline: 'Sporty Performance SUV',
    description: 'The H6 GT combines SUV practicality with coupe styling. Featuring a sportier design, enhanced performance, and premium interior appointments.',
    specs: {
      power: '155 kW',
      torque: '325 Nm',
      engine: '2.0L Turbo',
      transmission: '7DCT',
    },
    price: 'From R 649,900',
    image: '/cars/haval-h6-gt.png',
    color: '#3d2020',
  },
  {
    id: 4,
    slug: 'jolion',
    name: 'HAVAL',
    model: 'JOLION',
    tagline: 'Smart Urban Crossover',
    description: 'The Jolion is a compact crossover perfect for city driving. Features include a 10.25" touchscreen, wireless charging, and advanced safety systems.',
    specs: {
      power: '105 kW',
      torque: '210 Nm',
      engine: '1.5L Turbo',
      transmission: '7DCT',
    },
    price: 'From R 429,900',
    image: '/cars/haval-pro.png',
    color: '#1f2d3d',
  },
  {
    id: 5,
    slug: 'h7',
    name: 'HAVAL',
    model: 'H7',
    tagline: 'Premium 7-Seater SUV',
    description: 'The H7 offers spacious 7-seater accommodation with premium features for the whole family.',
    specs: {
      power: '155 kW',
      torque: '325 Nm',
      engine: '2.0L Turbo',
      transmission: '7DCT',
    },
    price: 'From R 699,900',
    image: '/cars/haval-h7.png',
    color: '#0d3320',
  },
];

export default function CarCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentCar = cars[currentIndex];
  const nextIndex = (currentIndex + 1) % cars.length;

  const navigate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => {
      if (dir === 1) return prev === cars.length - 1 ? 0 : prev + 1;
      return prev === 0 ? cars.length - 1 : prev - 1;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsIntroComplete(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate every 5 seconds - continuous loop
  useEffect(() => {
    if (!isIntroComplete) return;
    
    let interval: NodeJS.Timeout;
    
    const startAutoRotate = () => {
      interval = setInterval(() => {
        if (!isPaused) {
          navigate(1);
        }
      }, 5000);
    };
    
    startAutoRotate();
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isIntroComplete, navigate, isPaused]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
      <div className="hidden" aria-hidden="true">
        {cars.map((car) => (
          <Image
            key={car.id}
            src={car.image}
            alt=""
            width={1600}
            height={800}
            priority
          />
        ))}
      </div>
      {/* Intro Animation Overlay */}
      <AnimatePresence>
        {!isIntroComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-50 bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                THE MARITIME GROUP
              </motion.h1>
              <motion.p 
                className="text-gray-500 text-sm uppercase tracking-[0.5em] mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Premium Automotive Since 1958
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orb - top right */}
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full blur-[120px]"
          animate={{ 
            backgroundColor: currentCar.color,
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: 0.4 }}
        />
        
        {/* Animated gradient orb - bottom left */}
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-[100px]"
          animate={{ 
            backgroundColor: currentCar.color,
            scale: [1.1, 1, 1.1],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: 0.3 }}
        />

        {/* Center glow behind car */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[80px]"
          animate={{ backgroundColor: currentCar.color }}
          transition={{ duration: 1 }}
          style={{ opacity: 0.25 }}
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/50" />


      {/* Modern grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Header - only show after intro */}
      {isIntroComplete && <Header />}

      {/* Main Content */}
      <div className="relative z-10 h-full max-w-[1800px] mx-auto px-8 lg:px-16 flex flex-col pt-24">

        {/* Main Section */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Model Info */}
            <div className="lg:col-span-4 z-20">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentCar.id}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p className="text-gray-500 text-sm uppercase tracking-[0.3em] mb-4">
                    {currentCar.tagline}
                  </p>
                  
                  <h1 className="text-white leading-none mb-2">
                    <span className="block text-2xl md:text-3xl font-light tracking-wider opacity-60">
                      {currentCar.name}
                    </span>
                    <span className="block text-7xl md:text-9xl font-black tracking-tighter">
                      {currentCar.model}
                    </span>
                  </h1>

                  <p className="text-gray-500 text-base max-w-sm mt-6 leading-relaxed">
                    {currentCar.description}
                  </p>

                  <div className="mt-10 flex items-center space-x-6">
                    <Link href={`/models/${currentCar.slug}`} className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105">
                      Learn More
                    </Link>
                    <Link href="/contact" className="text-white font-medium hover:text-gray-300 transition-colors flex items-center space-x-2">
                      <span>Get a Quote</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Center: Car Image */}
            <div className="lg:col-span-5 relative h-[300px] md:h-[400px] flex items-center justify-center">
              
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentCar.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute w-full flex items-center justify-center"
                >
                  <Image
                    src={currentCar.image}
                    alt={`${currentCar.name} ${currentCar.model}`}
                    width={1600}
                    height={800}
                    quality={100}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Shadow under car */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/50 blur-xl rounded-full" />
            </div>

            {/* Right: Specs */}
            <div className="lg:col-span-3 z-20">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentCar.id}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                  className="space-y-6"
                >
                  <div className="mb-8">
                    <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-2">Starting from</p>
                    <p className="text-white text-3xl font-bold">{currentCar.price}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {Object.entries(currentCar.specs).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-white text-lg font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Pagination Dots */}
        <div 
          className="pb-28 flex flex-col items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Pagination Dots */}
          <div className="flex items-center space-x-3">
            {cars.map((car, index) => (
              <button
                key={car.id}
                onClick={() => goToSlide(index)}
                className="group relative p-2"
                aria-label={`Go to ${car.name} ${car.model}`}
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`} />
                {index === currentIndex && (
                  <motion.div
                    layoutId="dot-ring"
                    className="absolute inset-0 border-2 border-white rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom-left model tabs (current and next) */}
      <div 
        className="absolute bottom-10 left-10 z-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex flex-wrap items-center gap-3">
          {cars.map((car, index) => (
            <button
              key={car.id}
              onClick={() => goToSlide(index)}
              className={`relative px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border
                ${index === currentIndex ? 'bg-white text-black border-white' : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20'}`}
              aria-label={`Go to ${car.name} ${car.model}`}
            >
              <span className="opacity-70 mr-1">{index === currentIndex ? 'Now:' : index === nextIndex ? 'Next:' : ''}</span>
              {car.model}
              {index === currentIndex && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute -bottom-1 left-3 right-3 h-0.5 bg-black"
                  transition={{ duration: 0.25 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator - at very bottom */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-[0.2em] mb-2">Scroll to explore</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
