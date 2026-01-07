"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 lg:mx-8 mt-4">
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 px-6 py-3">
          <div className="max-w-[1800px] mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-white font-bold text-lg tracking-tight">The Maritime Group</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Models</Link>
              <Link href="/about" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Services</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/contact" className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
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
              <Link href="/" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Models</Link>
              <Link href="/about" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/services" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/contact" className="text-white text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-full text-center font-bold mt-4" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
