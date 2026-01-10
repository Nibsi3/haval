"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCarsOpen, setIsCarsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 lg:mx-8 mt-4">
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 px-6 py-3">
          <div className="max-w-[1800px] mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-white font-bold text-lg tracking-tight">Thorp Haval & GWM</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">About</Link>
              <Link href="/specials" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Specials</Link>
              <Link href="/services" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Services</Link>
              <div 
                className="relative"
                onMouseEnter={() => setIsCarsOpen(true)}
                onMouseLeave={() => setIsCarsOpen(false)}
              >
                <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                  Our Cars
                </button>
                <AnimatePresence>
                  {isCarsOpen && (
                    <motion.div 
                      className="absolute left-1/2 top-full pt-3"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      style={{ x: '-50%' }}
                    >
                      <motion.div 
                        className="flex gap-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl"
                        initial={{ gap: 0 }}
                        animate={{ gap: 8 }}
                        transition={{ delay: 0.1, duration: 0.25 }}
                      >
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15, duration: 0.2 }}
                        >
                          <Link 
                            href="/new-vehicles" 
                            className="block px-5 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium whitespace-nowrap transition-colors"
                          >
                            New Vehicles
                          </Link>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15, duration: 0.2 }}
                        >
                          <Link 
                            href="/used-cars" 
                            className="block px-5 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium whitespace-nowrap transition-colors"
                          >
                            Used Vehicles
                          </Link>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/warranty" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Warranty</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/quote" className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                Get a Quote
              </Link>
              
              <button 
                className="md:hidden text-white p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl mt-2 rounded-2xl border border-white/10">
            <nav className="flex flex-col p-6 space-y-4">
              <Link href="/about" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/specials" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Specials</Link>
              <Link href="/services" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/new-vehicles" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>New Vehicles</Link>
              <Link href="/used-cars" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Used Vehicles</Link>
              <Link href="/warranty" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Warranty</Link>
              <Link href="/contact" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link href="/quote" className="bg-white text-black px-6 py-3 rounded-full text-center font-bold mt-4" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
