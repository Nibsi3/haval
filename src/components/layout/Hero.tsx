"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Zap, Shield, Award } from 'lucide-react';
import Link from 'next/link';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-black via-zinc-950 to-black flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
    </div>
  )
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Scene carColor="#1a1a1a" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-none"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/20 to-transparent border border-blue-500/30 px-4 py-2 rounded-full mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Haval Tank 300</span>
            </motion.div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                CONQUER
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400"
              >
                EVERY
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block"
              >
                TERRAIN.
              </motion.span>
            </h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-lg md:text-xl mb-10 max-w-md leading-relaxed pointer-events-auto"
            >
              Experience the legendary <span className="text-white font-semibold">Haval Tank 300</span> in our immersive 3D showroom. Rugged capability meets refined luxury.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pointer-events-auto"
            >
              <Link href="/configurator" className="group relative bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40">
                <Zap className="w-5 h-5 mr-2" />
                Configure Yours
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/inventory" className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center transition-all">
                View Inventory
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Features Pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3 mt-10 pointer-events-auto"
            >
              {[
                { icon: Shield, text: '5-Star Safety' },
                { icon: Zap, text: '2.0T Engine' },
                { icon: Award, text: 'Award Winning' },
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
                  <feature.icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300 font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Specs Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="hidden lg:block pointer-events-auto"
          >
            <div className="ml-auto max-w-sm bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Specs</h3>
              <div className="space-y-5">
                {[
                  { label: 'Engine', value: '2.0L Turbo' },
                  { label: 'Power', value: '227 HP' },
                  { label: 'Torque', value: '387 Nm' },
                  { label: 'Drive', value: '4WD' },
                  { label: 'Starting From', value: 'R 849,000', highlight: true },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">{spec.label}</span>
                    <span className={`font-bold ${spec.highlight ? 'text-blue-400 text-xl' : 'text-white'}`}>{spec.value}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 bg-white text-black py-4 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center group">
                <Play className="w-4 h-4 mr-2 fill-current" />
                Watch Video
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
          />
        </div>
        <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em] mt-3 font-bold">Scroll</span>
      </motion.div>

      {/* Side Stats */}
      <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col space-y-6">
        {[
          { label: 'Models', value: '450+' },
          { label: 'Showrooms', value: '12' },
          { label: 'Brands', value: '09' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15 }}
            className="text-right bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/5"
          >
            <div className="text-2xl font-black text-white">{stat.value}</div>
            <div className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
