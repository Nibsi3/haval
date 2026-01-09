'use client';

import CarCarousel from '@/components/layout/CarCarousel';
import Footer from '@/components/layout/Footer';
import BrandsSlider from '@/components/BrandsSlider';
import AnimatedCounter from '@/components/AnimatedCounter';
import HavalGallery from '@/components/HavalGallery';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'New Vehicles',
    description: 'Explore our range of brand new GWM and Haval vehicles.',
    icon: '🚗',
  },
  {
    title: 'Pre-Owned',
    description: 'Quality certified pre-owned vehicles with full history.',
    icon: '✓',
  },
  {
    title: 'Service & Parts',
    description: 'Expert maintenance with genuine parts and accessories.',
    icon: '🔧',
  },
  {
    title: 'Finance',
    description: 'Flexible finance options tailored to your needs.',
    icon: '💳',
  },
];

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      {/* Hero Carousel */}
      <CarCarousel />

      {/* Our Brands Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Brands</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The Maritime Group represents South Africa&apos;s finest automotive brands, 
              offering world-class vehicles and service excellence since 1958.
            </p>
          </div>
        </div>
        <BrandsSlider />
      </section>

      {/* High-Impact Visual Gallery */}
      <HavalGallery />

      {/* Services Section */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From new vehicle sales to comprehensive after-sales support, we&apos;re here for every step of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-zinc-900 border border-white/10 hover:border-blue-500/30 transition-all p-6"
              >
                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter value="65+" label="Years of Excellence" />
            <AnimatedCounter value="9" label="Premium Brands" />
            <AnimatedCounter value="50K+" label="Happy Customers" />
            <AnimatedCounter value="3" label="Locations" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect Vehicle?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Visit our showroom or contact us today. Our team is ready to help you find the perfect GWM or Haval vehicle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all"
            >
              Contact Us
            </Link>
            <a 
              href="tel:0413992800" 
              className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Call 041 399 2800
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
