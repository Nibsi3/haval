"use client";

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const models = [
  { slug: 'tank-500', name: 'GWM', model: 'TANK 500', image: '/brochures/tank-500/0.jpg', tagline: 'Where Majesty Meets Muscle', price: 'From R1,299,900', featured: true },
  { slug: 'tank-300', name: 'GWM', model: 'TANK 300', image: '/haval_pics/haval-tank-300/0.jpg', tagline: 'Born for Adventure', price: 'From R799,900' },
  { slug: 'h6', name: 'HAVAL', model: 'H6', image: '/haval_pics/haval-h6/0.jpg', tagline: 'Intelligent Luxury SUV', price: 'From R599,900' },
  { slug: 'h6-gt', name: 'HAVAL', model: 'H6 GT', image: '/haval_pics/haval-h6-gt/0.jpg', tagline: 'Sporty Performance SUV', price: 'From R649,900' },
  { slug: 'jolion', name: 'HAVAL', model: 'JOLION', image: '/haval_pics/haval-jolion-pro/0.jpg', tagline: 'Smart Urban Crossover', price: 'From R429,900' },
  { slug: 'h7', name: 'HAVAL', model: 'H7', image: '/haval_pics/haval-h7/0.jpg', tagline: 'Premium 7-Seater SUV', price: 'From R699,900' },
];

export default function NewVehiclesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image src="/wallpapers/tank.jpg" alt="New Vehicles" fill quality={100} priority className="object-cover object-center brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
        <div className="relative max-w-7xl mx-auto px-6 w-full pt-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">Explore the Range</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              New <span className="text-blue-500">Vehicles</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed font-light mb-10 max-w-2xl">
              Discover our complete lineup of GWM and Haval vehicles. Click any model for full specifications, pricing and exclusive offers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Complete GWM & Haval Range
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From the luxurious Tank 500 to rugged off-road adventurers and sophisticated urban crossovers, our lineup delivers exceptional value, 
            cutting-edge technology, and uncompromising quality. Each model is backed by our exclusive FREE 10-year, 1 Million KM warranty - 
            only at Thorp Haval & GWM in Cape Town.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {models.map((m, idx) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link 
                href={`/models/${m.slug}`}
                className="group relative block h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
              >
                <Image 
                  src={m.image} 
                  alt={`${m.name} ${m.model}`} 
                  fill 
                  quality={100}
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="max-w-xl">
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">{m.tagline}</p>
                    <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-2">
                      {m.name} <span className="text-blue-500">{m.model}</span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl font-light mb-6">{m.price}</p>
                    
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        Explore Model
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 md:top-10 md:right-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-blue-500 -rotate-45 transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
