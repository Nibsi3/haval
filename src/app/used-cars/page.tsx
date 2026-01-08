'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, X, ChevronDown, Tag as TagIcon, ArrowRight } from 'lucide-react';
import { usedCars } from '@/lib/usedCars';

 

const sortOptions = [
  { value: 'recent', label: 'Most recent' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'mileage-high', label: 'Mileage: High to Low' },
  { value: 'mileage-low', label: 'Mileage: Low to High' },
];

interface FilterState {
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
  minMileage?: number;
  maxMileage?: number;
  fuelTypes: string[];
  transmissions: string[];
  drivetrains: string[];
  bodyTypes: string[];
}

const initialFilters: FilterState = {
  fuelTypes: [],
  transmissions: [],
  drivetrains: [],
  bodyTypes: [],
};

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export default function UsedCarsPage() {
  const [search, setSearch] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recent');
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filteredCars = useMemo(() => {
    let cars = [...usedCars];

    if (search.trim()) {
      const q = search.toLowerCase();
      cars = cars.filter((car) =>
        `${car.name} ${car.model} ${car.location}`.toLowerCase().includes(q),
      );
    }

    if (filters.minPrice !== undefined) {
      cars = cars.filter((car) => car.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      cars = cars.filter((car) => car.price <= filters.maxPrice!);
    }
    if (filters.minYear !== undefined) {
      cars = cars.filter((car) => car.year >= filters.minYear!);
    }
    if (filters.maxYear !== undefined) {
      cars = cars.filter((car) => car.year <= filters.maxYear!);
    }
    if (filters.minMileage !== undefined) {
      cars = cars.filter((car) => car.mileage >= filters.minMileage!);
    }
    if (filters.maxMileage !== undefined) {
      cars = cars.filter((car) => car.mileage <= filters.maxMileage!);
    }

    if (filters.fuelTypes.length) {
      cars = cars.filter((car) => filters.fuelTypes.includes(car.fuelType));
    }
    if (filters.transmissions.length) {
      cars = cars.filter((car) => filters.transmissions.includes(car.transmission));
    }
    if (filters.drivetrains.length) {
      cars = cars.filter((car) => filters.drivetrains.includes(car.drivetrain));
    }
    if (filters.bodyTypes.length) {
      cars = cars.filter((car) => filters.bodyTypes.includes(car.bodyType));
    }

    cars.sort((a, b) => {
      switch (sortBy) {
        case 'price-high':
          return b.price - a.price;
        case 'price-low':
          return a.price - b.price;
        case 'mileage-high':
          return b.mileage - a.mileage;
        case 'mileage-low':
          return a.mileage - b.mileage;
        case 'recent':
        default:
          return b.createdAt.localeCompare(a.createdAt);
      }
    });

    return cars;
  }, [search, filters, sortBy]);

  const handleCheckboxFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const set = new Set(prev[key] as string[]);
      if (set.has(value)) {
        set.delete(value);
      } else {
        set.add(value);
      }
      return { ...prev, [key]: Array.from(set) };
    });
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src="/wallpapers/road.jpg"
          alt="Premium Used Vehicles"
          fill
          quality={100}
          priority
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
        <div className="relative max-w-7xl mx-auto px-6 w-full pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">Certified Excellence</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Pre-Owned <br />
              <span className="text-blue-500">Inventory</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed font-light mb-10 max-w-2xl">
              Discover our meticulously inspected range of GWM and Haval vehicles. Each unit is certified to deliver peace of mind and performance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row items-stretch gap-4 mb-16 bg-zinc-950/50 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <div className="relative flex-1 group">
              <Search className="w-5 h-5 text-gray-500 absolute left-6 top-1/2 -translate-y-1/2 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by model, year or location..."
                className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl pl-16 pr-6 py-5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-zinc-900/50 border border-white/5 text-sm font-bold text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group"
              >
                <Filter className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" />
                Advanced Filters
              </button>
              
              <div className="relative group">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-zinc-900/50 border border-white/5 rounded-2xl pl-8 pr-12 py-5 text-sm font-bold text-white focus:outline-none focus:border-blue-500/50 transition-all cursor-pointer min-w-[200px]"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-zinc-950">
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-blue-500 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-4">
              Available Stock
              <span className="text-sm font-normal text-gray-500 bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                {filteredCars.length} vehicles found
              </span>
            </h2>
            <div className="h-[1px] flex-1 mx-10 bg-gradient-to-r from-white/10 to-transparent hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-col bg-zinc-950/20 border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-xl"
              >
                <Link href={`/used-cars/${car.id}`} className="absolute inset-0 z-10" aria-label={`Open ${car.year} ${car.name}`}> 
                  <span className="sr-only">Open vehicle</span>
                </Link>
                <div className="relative h-28 w-full overflow-hidden bg-gradient-to-b from-black/40 to-zinc-900/40">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    quality={100}
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-1000"
                  />
                  
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <span className="bg-blue-600 text-white text-[5px] font-black px-1.5 py-0.5 rounded uppercase tracking-[0.2em] shadow-2xl">
                      Certified
                    </span>
                    {car.mileage < 20000 && (
                      <span className="bg-emerald-500/10 text-emerald-400 backdrop-blur-xl border border-emerald-500/20 text-[5px] font-black px-1.5 py-0.5 rounded uppercase tracking-[0.2em]">
                        Low KM
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-1 rounded flex items-center justify-between text-[6px] font-black text-white uppercase tracking-widest shadow-2xl">
                      <span className="flex items-center gap-1">
                        <TagIcon className="w-2 h-2 text-blue-500" />
                        {car.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xs font-bold text-white mb-0.5 group-hover:text-blue-400 transition-colors duration-300">
                        {car.year} {car.name}
                      </h3>
                      <p className="text-gray-500 text-[7px] font-bold uppercase tracking-[0.25em]">
                        {car.bodyType} • {car.fuelType}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-white tracking-tighter">
                        R {formatNumber(car.price)}
                      </p>
                      <p className="text-[6px] text-gray-500 uppercase tracking-widest mt-0.5 font-bold">
                        Est. R {(car.price * 0.018).toFixed(0)} p/m*
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3 py-2 border-y border-white/5">
                    <div className="space-y-0.5">
                      <span className="text-gray-500 text-[6px] font-black uppercase tracking-widest">KM</span>
                      <p className="text-white text-[9px] font-bold">{formatNumber(car.mileage)}</p>
                    </div>
                    <div className="space-y-0.5 text-right">
                      <span className="text-gray-500 text-[6px] font-black uppercase tracking-widest">Gearbox</span>
                      <p className="text-white text-[9px] font-bold">{car.transmission}</p>
                    </div>
                  </div>

                  <div className="mt-auto grid grid-cols-1 gap-1.5">
                    <Link
                      href={`/used-cars/${car.id}`}
                      className="relative z-20 flex items-center justify-center gap-1 py-2 rounded bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-blue-600/20 group/btn"
                    >
                      View full specifications
                      <ArrowRight className="w-2 h-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>

          <div className="mt-32 p-16 rounded-[4rem] bg-gradient-to-br from-blue-600/10 via-zinc-950 to-zinc-950 border border-white/5 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -mr-48 -mt-48" />
            <div className="relative z-10">
              <h4 className="text-white font-bold text-4xl mb-6 tracking-tight">Bespoke Vehicle Sourcing</h4>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Searching for a specific variant or color? Our network across South Africa allows us to source the exact GWM or Haval model you desire.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-white text-black text-sm font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl shadow-white/5"
              >
                Speak to a Specialist
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFilterOpen(false)}
          >
            <motion.aside
              className="absolute right-0 top-0 h-full w-full max-w-xl bg-[#050505] border-l border-white/5 flex flex-col shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-10 py-10 border-b border-white/5">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-blue-500 font-black mb-2">Inventory Control</p>
                  <h2 className="text-white font-bold text-3xl tracking-tight">Filter Selection</h2>
                </div>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-500 hover:text-white p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-10 py-10 space-y-12 text-sm text-white">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <p className="font-bold text-lg">Price Range</p>
                    <div className="bg-zinc-900 rounded-xl p-1.5 border border-white/5">
                      <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-blue-600/20">
                        Cash
                      </button>
                      <button className="px-6 py-2 rounded-lg text-gray-500 font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors">
                        Finance
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Minimum</label>
                      <input
                        type="number"
                        placeholder="Any Price"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                        value={filters.minPrice ?? ''}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            minPrice: e.target.value ? Number(e.target.value) : undefined,
                          }))
                        }
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Maximum</label>
                      <input
                        type="number"
                        placeholder="Any Price"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                        value={filters.maxPrice ?? ''}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            maxPrice: e.target.value ? Number(e.target.value) : undefined,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="font-bold text-lg">Body Style</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['SUV', 'Double Cab', 'Hatchback'].map((type) => (
                      <button
                        key={type}
                        onClick={() => handleCheckboxFilter('bodyTypes', type)}
                        className={`px-6 py-4 rounded-xl text-xs font-bold border transition-all duration-300 ${
                          filters.bodyTypes.includes(type)
                            ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20'
                            : 'bg-zinc-900 text-gray-400 border-white/5 hover:border-white/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="font-bold text-lg">Model Year</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest">From</label>
                      <input
                        type="number"
                        placeholder="Any Year"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                        value={filters.minYear ?? ''}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            minYear: e.target.value ? Number(e.target.value) : undefined,
                          }))
                        }
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] text-gray-500 font-black uppercase tracking-widest">To</label>
                      <input
                        type="number"
                        placeholder="Any Year"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                        value={filters.maxYear ?? ''}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            maxYear: e.target.value ? Number(e.target.value) : undefined,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="font-bold text-lg">Transmission</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Automatic', 'Manual'].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleCheckboxFilter('transmissions', value)}
                        className={`px-6 py-4 rounded-xl text-xs font-bold border transition-all duration-300 ${
                          filters.transmissions.includes(value)
                            ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20'
                            : 'bg-zinc-900 text-gray-400 border-white/5 hover:border-white/20'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="font-bold text-lg">Fuel Source</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleCheckboxFilter('fuelTypes', value)}
                        className={`px-6 py-4 rounded-xl text-xs font-bold border transition-all duration-300 ${
                          filters.fuelTypes.includes(value)
                            ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20'
                            : 'bg-zinc-900 text-gray-400 border-white/5 hover:border-white/20'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 px-10 py-10 flex items-center justify-between">
                <button
                  onClick={handleResetFilters}
                  className="text-gray-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors"
                >
                  Reset All
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="px-12 py-5 rounded-2xl bg-white text-black text-sm font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500"
                >
                  Show Results
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
