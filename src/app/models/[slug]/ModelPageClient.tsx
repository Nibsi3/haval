"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, FileText, X, ChevronRight } from 'lucide-react';
import ImageLightbox from '@/components/ImageLightbox';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface SpecSection {
  title: string;
  items: string[];
}

interface Variant {
  name: string;
  price: string;
  engine: string;
  power: string;
  torque: string;
  transmission: string;
  drive: string;
  fuelConsumption: string;
  dimensions?: string;
  grade?: string;
  keyFeatures: string[];
  detailedSpecs?: SpecSection[];
}

interface SpecCategory {
  category: string;
  specs: { label: string; value: string }[];
}

interface CarData {
  name: string;
  model: string;
  tagline: string;
  longDescription: string;
  heroImage: string;
  galleryFolder: string;
  brochureUrl: string;
  variants: Variant[];
  specCategories: SpecCategory[];
  standardFeatures: string[];
  safetyFeatures: string[];
  dimensions: { label: string; value: string }[];
  exteriorImages: number[];
  interiorImages: number[];
  detailImages: number[];
}

interface ModelPageClientProps {
  slug: string;
  car: CarData;
}

export default function ModelPageClient({ slug, car }: ModelPageClientProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);
  const [specsSidebarOpen, setSpecsSidebarOpen] = useState(false);

  const currentVariant = car.variants[selectedVariant];

  const exteriorImgUrls = car.exteriorImages.map(n => `${car.galleryFolder}/${n}.jpg`);
  const interiorImgUrls = car.interiorImages.map(n => `${car.galleryFolder}/${n}.jpg`);
  const detailImgUrls = car.detailImages.map(n => `${car.galleryFolder}/${n}.jpg`);

  // Preload all images for instant display
  useEffect(() => {
    const allImages = [car.heroImage, ...exteriorImgUrls, ...interiorImgUrls, ...detailImgUrls];
    allImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [car.heroImage, exteriorImgUrls, interiorImgUrls, detailImgUrls]);

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSpecsSidebarOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ images, index, title });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <ImageLightbox
        images={lightbox?.images || []}
        initialIndex={lightbox?.index || 0}
        isOpen={!!lightbox}
        title={lightbox?.title}
        onClose={() => setLightbox(null)}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src={car.heroImage}
          alt={`${car.name} ${car.model}`}
          fill
          quality={100}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-16">
          <div className="max-w-7xl mx-auto w-full px-6">
            <Link 
              href="/new-vehicles" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to vehicles
            </Link>
            
            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.3em] mb-2">{car.tagline}</p>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
              {car.name} <span className="text-blue-500">{car.model}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mb-8">{car.longDescription}</p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/contact?subject=New Vehicle Enquiry&message=I'm interested in the ${car.name} ${car.model} ${currentVariant.name}. Please provide more information about pricing and availability.`}
                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href={`/contact?subject=Test Drive Request&message=I would like to book a test drive for the ${car.name} ${car.model} ${currentVariant.name}.`}
                className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Book a Test Drive
              </Link>
              <a
                href={car.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Sidebar */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${specsSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setSpecsSidebarOpen(false)}
        />
        
        {/* Sidebar Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-lg bg-zinc-950 border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${specsSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">Full Specifications</p>
                <h3 className="text-xl font-bold text-white">{currentVariant.name}</h3>
              </div>
              <button 
                onClick={() => setSpecsSidebarOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Price</p>
                  <p className="text-white font-bold text-lg">{currentVariant.price}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Engine</p>
                  <p className="text-white font-bold text-lg">{currentVariant.engine}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Power</p>
                  <p className="text-white font-bold text-lg">{currentVariant.power}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Torque</p>
                  <p className="text-white font-bold text-lg">{currentVariant.torque}</p>
                </div>
              </div>

              {/* Detailed Specs */}
              {currentVariant.detailedSpecs?.map((section, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-5">
                  <h4 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {section.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-3">
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Dimensions */}
              <div className="bg-white/5 rounded-xl p-5">
                <h4 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Dimensions
                </h4>
                <div className="space-y-3">
                  {car.dimensions.map((dim, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{dim.label}</span>
                      <span className="text-white font-medium text-sm">{dim.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10">
              <a
                href={car.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download Full Brochure
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Variant Selector */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <h2 className="text-3xl font-bold text-white">Choose Your Variant</h2>
            
            <div className="flex flex-wrap gap-3">
              {car.variants.map((variant, index) => (
                <button
                  key={variant.name}
                  onClick={() => setSelectedVariant(index)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    selectedVariant === index 
                      ? 'bg-white text-black shadow-lg shadow-white/20' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          {/* Variant Card */}
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left: Price & Specs */}
              <div className="lg:col-span-5">
                <div className="mb-8">
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Starting from</p>
                  <p className="text-5xl font-black text-white">{currentVariant.price}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Engine</p>
                    <p className="text-white font-semibold">{currentVariant.engine}</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Power</p>
                    <p className="text-white font-semibold">{currentVariant.power}</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Torque</p>
                    <p className="text-white font-semibold">{currentVariant.torque}</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Transmission</p>
                    <p className="text-white font-semibold">{currentVariant.transmission}</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Drivetrain</p>
                    <p className="text-white font-semibold">{currentVariant.drive}</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Fuel Consumption</p>
                    <p className="text-white font-semibold">{currentVariant.fuelConsumption}</p>
                  </div>
                </div>
              </div>

              {/* Right: Key Features */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-400 text-sm uppercase tracking-widest">Key Features</p>
                  {currentVariant.detailedSpecs && (
                    <button
                      onClick={() => setSpecsSidebarOpen(true)}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors group"
                    >
                      View Full Specs
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {currentVariant.keyFeatures.map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3"
                    >
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">Exterior Design</h2>
          <p className="text-gray-500 mb-8">Bold styling meets aerodynamic efficiency</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {exteriorImgUrls.map((url, i) => (
              <button 
                key={i} 
                onClick={() => openLightbox(exteriorImgUrls, i, 'Exterior Design')}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${i === 0 ? 'col-span-2 row-span-2 h-[450px]' : 'h-[220px]'}`}
              >
                <Image 
                  src={url} 
                  alt={`Exterior ${i + 1}`} 
                  fill 
                  priority={i < 3}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-16 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">Interior Craftsmanship</h2>
          <p className="text-gray-500 mb-8">Premium materials and intelligent design</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interiorImgUrls.map((url, i) => (
              <button 
                key={i} 
                onClick={() => openLightbox(interiorImgUrls, i, 'Interior Design')}
                className="relative h-[250px] rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image 
                  src={url} 
                  alt={`Interior ${i + 1}`} 
                  fill 
                  priority={i < 2}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">Technical Excellence</h2>
          <p className="text-gray-500 mb-8">Engineering precision in every detail</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">Dimensions</h3>
                <div className="space-y-3">
                  {car.dimensions.map((dim, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-gray-500">{dim.label}</span>
                      <span className="text-white font-medium">{dim.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button 
              onClick={() => openLightbox(detailImgUrls, 0, 'Technical Details')}
              className="relative h-[400px] lg:h-auto min-h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image 
                src={detailImgUrls[0]} 
                alt="Detail" 
                fill 
                priority
                loading="eager"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Safety Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {car.safetyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-3 h-3 text-blue-500 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => openLightbox(detailImgUrls, 1, 'Technical Details')}
              className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image 
                src={detailImgUrls[1]} 
                alt="Dimensions" 
                fill 
                priority
                loading="eager"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* Standard Features */}
      <section className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Standard Features</h2>
              <p className="text-gray-500">Every model comes fully equipped</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Features Grid */}
            <div className="lg:col-span-8">
              <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {car.standardFeatures.map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3"
                    >
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Images Column */}
            <div className="lg:col-span-4 grid grid-rows-3 gap-4">
              {detailImgUrls.slice(2, 5).map((url, i) => (
                <button 
                  key={i} 
                  onClick={() => openLightbox(detailImgUrls, i + 2, 'Technical Details')}
                  className="relative h-[140px] w-full rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image 
                    src={url} 
                    alt={`Feature ${i + 1}`} 
                    fill 
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the {car.model}?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Visit our showroom or contact us to learn more about the {car.name} {car.model} range.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/contact?subject=New Vehicle Enquiry&message=I'm interested in the ${car.name} ${car.model} ${currentVariant.name}. Please provide more information about pricing and availability.`}
              className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all"
            >
              Get in Touch
            </Link>
            <Link
              href="/new-vehicles"
              className="px-10 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all"
            >
              View All Models
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
