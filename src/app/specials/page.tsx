'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Tag, Shield, Percent } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const gwmSpecials = [
  { name: 'GWM Tank 500', slug: 'tank-500', image: '/brochures/tank-500/0.jpg', tagline: 'Where Majesty Meets Muscle', price: 'From R1,299,900' },
  { name: 'GWM Tank 300', slug: 'tank-300', image: '/cars/haval-tank-300.png', tagline: 'Born for Adventure', price: 'From R799,900' },
  { name: 'GWM Ora 03 EV', slug: null, image: '/cars/haval-h6.png', tagline: 'Electric Innovation', price: 'From R699,900' },
  { name: 'GWM P-Series', slug: null, image: '/cars/haval-h6-gt.png', tagline: 'Work Hard, Play Hard', price: 'From R399,900' },
  { name: 'GWM Steed 5', slug: null, image: '/cars/haval-pro.png', tagline: 'Reliable Workhorse', price: 'From R299,900' },
];

const havalSpecials = [
  { name: 'Haval H6 GT PHEV', slug: 'h6-gt', image: '/cars/haval-h6-gt.png', tagline: 'Plug-In Hybrid Performance', price: 'From R749,900' },
  { name: 'Haval H7', slug: 'h7', image: '/cars/haval-h7.png', tagline: 'Premium 7-Seater', price: 'From R699,900' },
  { name: 'Haval H6', slug: 'h6', image: '/cars/haval-h6.png', tagline: 'Intelligent Luxury SUV', price: 'From R599,900' },
  { name: 'Haval H6 GT', slug: 'h6-gt', image: '/cars/haval-h6-gt.png', tagline: 'Sporty Performance', price: 'From R649,900' },
  { name: 'Haval Jolion', slug: 'jolion', image: '/cars/haval-pro.png', tagline: 'Smart Urban Crossover', price: 'From R429,900' },
  { name: 'Haval Jolion Pro', slug: 'jolion', image: '/cars/haval-pro.png', tagline: 'Enhanced Features', price: 'From R459,900' },
  { name: 'Haval Jolion S', slug: 'jolion', image: '/cars/haval-pro.png', tagline: 'Sport Edition', price: 'From R479,900' },
  { name: 'Haval Jolion HEV', slug: 'jolion', image: '/cars/haval-pro.png', tagline: 'Hybrid Efficiency', price: 'From R519,900' },
];

export default function SpecialsPage() {
  const [activeTab, setActiveTab] = useState<'gwm' | 'haval'>('gwm');

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image src="/brochures/tank-500/1.jpg" alt="Specials" fill quality={100} priority className="object-cover object-center brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
        <div className="relative max-w-7xl mx-auto px-6 w-full pt-28">
          <div className="max-w-3xl">
            <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">Exclusive Offers</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Vehicle <span className="text-blue-500">Specials</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed font-light mb-10 max-w-2xl">
              Experience our amazing offers exclusive to Thorp Haval & GWM. Plus, get our FREE 10-year, 1 Million KM warranty on select vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty Banner */}
      <section className="py-8 px-6 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Shield className="w-10 h-10 text-white" />
            <div>
              <h3 className="text-white font-bold text-lg">FREE Extended Warranty</h3>
              <p className="text-blue-100 text-sm">10 Years / 1 Million KM - Exclusive to Thorp</p>
            </div>
          </div>
          <Link href="/warranty" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
            Learn More
          </Link>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-6 bg-zinc-950 sticky top-0 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('gwm')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'gwm'
                  ? 'bg-blue-600 text-white'
                  : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              GWM Specials
            </button>
            <button
              onClick={() => setActiveTab('haval')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'haval'
                  ? 'bg-blue-600 text-white'
                  : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              Haval Specials
            </button>
          </div>
        </div>
      </section>

      {/* Specials Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {activeTab === 'gwm' ? 'Thorp GWM Specials' : 'Thorp Haval Specials'}
            </h2>
            <p className="text-gray-400">Experience our amazing offers. Exclusive to Thorp.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'gwm' ? gwmSpecials : havalSpecials).map((special) => (
              <div
                key={special.name}
                className="group bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all"
              >
                <div className="relative h-48 bg-gradient-to-b from-zinc-800 to-zinc-900">
                  <Image
                    src={special.image}
                    alt={special.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      Special
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-400 text-xs uppercase tracking-wider mb-1">{special.tagline}</p>
                  <h3 className="text-white text-xl font-bold mb-2">{special.name}</h3>
                  <p className="text-gray-400 text-lg font-semibold mb-4">{special.price}</p>
                  {special.slug ? (
                    <Link
                      href={`/models/${special.slug}`}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-800 text-white rounded-xl font-bold hover:bg-blue-500 transition-all"
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Drive CTA */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12">
            <Percent className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">We Come to YOU for Test Drives!</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Can&apos;t make it to our showroom? No problem! We&apos;ll bring the vehicle to you for a test drive at your convenience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/test-drive" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
                Book a Test Drive
              </Link>
              <a href="tel:0210022282" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Call 021 002 2282
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-xs">
            Note: E&OE and T&apos;s & C&apos;s Apply. All information, specifications and illustrations are based on the latest product information available at the time of publication.
            Thorp Motor Group reserves the right to make changes at any time, without notice. Some vehicles pictured may contain non-local market equipment.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
