"use client";

import { motion } from 'framer-motion';
import { ChevronRight, Filter } from 'lucide-react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-zinc-900 animate-pulse rounded-2xl" />
});

const cars = [
  {
    id: 1,
    name: 'Mercedes-Benz G-Wagon',
    price: 'R 3,500,000',
    type: 'SUV',
    transmission: 'Automatic',
    fuel: 'Petrol',
  },
  {
    id: 2,
    name: 'Kia EV6 GT',
    price: 'R 1,200,000',
    type: 'Electric',
    transmission: 'Automatic',
    fuel: 'Electric',
  },
  {
    id: 3,
    name: 'Mitsubishi Pajero Sport',
    price: 'R 850,000',
    type: 'SUV',
    transmission: 'Automatic',
    fuel: 'Diesel',
  },
  {
    id: 4,
    name: 'Honda Civic Type R',
    price: 'R 980,000',
    type: 'Sedan',
    transmission: 'Manual',
    fuel: 'Petrol',
  },
];

export default function Inventory() {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              OUR <span className="text-blue-500">INVENTORY</span>
            </h1>
            <p className="text-gray-400 max-w-lg">
              Explore our hand-picked selection of world-class vehicles. Each one is verified and ready for its next journey.
            </p>
          </div>
          
          <button className="flex items-center space-x-2 bg-zinc-900 border border-white/10 px-6 py-3 rounded-full text-white font-bold hover:bg-white hover:text-black transition-all">
            <Filter className="w-4 h-4" />
            <span>Filter Results</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-zinc-950 border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              <div className="h-80 relative bg-black">
                <Scene />
                <div className="absolute top-6 left-6 flex space-x-2">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {car.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{car.name}</h3>
                    <p className="text-gray-500 text-sm font-medium">{car.transmission} • {car.fuel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-500 font-black text-xl">{car.price}</p>
                    <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Starting Price</p>
                  </div>
                </div>
                
                <button className="w-full bg-zinc-900 group-hover:bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center transition-all">
                  View Details
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
