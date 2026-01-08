"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, FileText, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [showSpecs, setShowSpecs] = useState(false);

  const currentVariant = car.variants[selectedVariant];

  const exteriorImgUrls = car.exteriorImages.map(n => `${car.galleryFolder}/${n}.jpg`);
  const interiorImgUrls = car.interiorImages.map(n => `${car.galleryFolder}/${n}.jpg`);
  const detailImgUrls = car.detailImages.map(n => `${car.galleryFolder}/${n}.jpg`);

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

      {/* Variant Selector */}
      <section className="py-16 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Choose Your Variant</h2>
          
          <div className="flex flex-wrap gap-4 mb-12">
            {car.variants.map((variant, index) => (
              <button
                key={variant.name}
                onClick={() => setSelectedVariant(index)}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  selectedVariant === index 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>

          {/* Selected Variant Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Starting from</p>
                <p className="text-4xl font-black text-white">{currentVariant.price}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Engine</p>
                  <p className="text-white font-semibold">{currentVariant.engine}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Power</p>
                  <p className="text-white font-semibold">{currentVariant.power}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Torque</p>
                  <p className="text-white font-semibold">{currentVariant.torque}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Transmission</p>
                  <p className="text-white font-semibold">{currentVariant.transmission}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Drivetrain</p>
                  <p className="text-white font-semibold">{currentVariant.drive}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Fuel Consumption</p>
                  <p className="text-white font-semibold">{currentVariant.fuelConsumption}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Key Features</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentVariant.keyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specs Accordion */}
      {currentVariant.detailedSpecs && (
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setShowSpecs(!showSpecs)}
              className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all group"
            >
              <div className="flex items-center gap-4">
                <FileText className="w-5 h-5 text-blue-500" />
                <span className="text-white font-bold">Full Specifications for {currentVariant.name}</span>
              </div>
              {showSpecs ? (
                <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              )}
            </button>

            {showSpecs && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentVariant.detailedSpecs.map((section, idx) => (
                  <div key={idx} className="bg-zinc-950/50 border border-white/5 rounded-2xl p-6">
                    <h4 className="text-blue-500 font-bold text-sm uppercase tracking-wider mb-4">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

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
                <Image src={url} alt={`Exterior ${i + 1}`} fill className="object-cover object-center group-hover:scale-102 transition-transform duration-500" />
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
                className="relative h-[200px] rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image src={url} alt={`Interior ${i + 1}`} fill className="object-cover object-center group-hover:scale-102 transition-transform duration-500" />
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
              <Image src={detailImgUrls[0]} alt="Detail" fill className="object-cover object-center group-hover:scale-102 transition-transform duration-500" />
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
              <Image src={detailImgUrls[1]} alt="Dimensions" fill className="object-cover object-center group-hover:scale-102 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* Standard Features */}
      <section className="py-16 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Standard Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.standardFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {detailImgUrls.slice(2, 5).map((url, i) => (
                <button 
                  key={i} 
                  onClick={() => openLightbox(detailImgUrls, i + 2, 'Technical Details')}
                  className="relative h-[150px] w-full rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image src={url} alt={`Feature ${i + 1}`} fill className="object-cover object-center group-hover:scale-102 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
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
