"use client";

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const models = [
  { slug: 'tank-300', name: 'GWM', model: 'TANK 300', image: '/cars/haval-tank-300.png', tagline: 'Born for Adventure' },
  { slug: 'h6', name: 'HAVAL', model: 'H6', image: '/cars/haval-h6.png', tagline: 'Intelligent Luxury SUV' },
  { slug: 'h6-gt', name: 'HAVAL', model: 'H6 GT', image: '/cars/haval-h6-gt.png', tagline: 'Sporty Performance SUV' },
  { slug: 'jolion', name: 'HAVAL', model: 'JOLION', image: '/cars/haval-pro.png', tagline: 'Smart Urban Crossover' },
  { slug: 'h7', name: 'HAVAL', model: 'H7', image: '/cars/haval-h7.png', tagline: 'Premium 7-Seater SUV' },
];

export default function NewVehiclesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image src="/wallpapers/h6gt.jpg" alt="New Vehicles" fill quality={100} priority className="object-cover object-center brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
        <div className="relative max-w-7xl mx-auto px-6 w-full pt-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">Explore the Range</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              New <span className="text-blue-500">Vehicles</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed font-light mb-10 max-w-2xl">
              Scroll through our current line-up. Click any model for full specs, pricing and offers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {models.map((m, idx) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-zinc-950/30 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all"
            >
              <Link href={`/models/${m.slug}`} className="absolute inset-0 z-10" aria-label={`Open ${m.model}`}>
                <span className="sr-only">Open model</span>
              </Link>
              <div className="relative h-56 bg-gradient-to-b from-black/40 to-zinc-900/40">
                <Image src={m.image} alt={`${m.name} ${m.model}`} fill className="object-contain p-6" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded uppercase tracking-[0.2em] shadow-2xl">
                    {m.tagline}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-xl font-bold">{m.model}</h3>
                <p className="text-gray-500 text-sm">{m.name}</p>
                <div className="mt-4">
                  <Link href={`/models/${m.slug}`} className="relative z-20 inline-flex items-center text-blue-500 font-bold text-xs uppercase tracking-widest">
                    View details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
