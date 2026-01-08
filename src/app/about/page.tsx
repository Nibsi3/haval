'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, ExternalLink, Facebook, Instagram, Linkedin, Car } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

const locations = [
  {
    name: 'Maritime Motors',
    address: 'Cnr. William Moffett Expressway & Circular Dr, Overbaakens, Gqeberha, 6000',
    phone: '041 399 2800',
    mapUrl: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.97959,25.55352/@-33.9824379,25.5436883,15z',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9892!2d25.5535!3d-33.9796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad1ecf00e265f%3A0xacb1f2ec1dcfd275!2sMaritime%20Motors!5e0!3m2!1sen!2sza!4v1234567890',
  },
  {
    name: 'Maritime Commercial',
    address: '111 Grahamstown Rd, North End, Gqeberha, 6001',
    phone: '041 408 6600',
    mapUrl: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.92839,25.60486/@-33.9582083,25.5429752,13z',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d25.6049!3d-33.9284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad3!2sMaritime%20Commercial!5e0!3m2!1sen!2sza!4v1234567890',
  },
  {
    name: 'Maritime George',
    address: '44 C.J. Langenhoven Rd, George Central, George, 6529',
    phone: '044 803 7900',
    mapUrl: 'https://www.google.com/maps/dir/-33.9876803,25.5562544/-33.95616,22.45249/@-33.610492,21.3243824,7z',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310!2d22.4525!3d-33.9562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd60547e38a2947%3A0xbe0cecd5a3dff8bc!2sMaritime%20George!5e0!3m2!1sen!2sza!4v1234567890',
  },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/maritime-motors/', icon: Linkedin },
  { name: 'Facebook', href: 'https://www.facebook.com/MaritimeMotors001', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/maritime_motorspe/', icon: Instagram },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero with Wallpaper */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image src="/wallpapers/tank300.jpg" alt="About Us" fill quality={100} className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Serving South Africa with excellence since 1958
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                65+ Years of Excellence
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Maritime Motors, one of the oldest and largest privately-owned Mercedes-Benz dealerships 
                in South Africa, was established in 1958 by Mr. Rudi Stucken, grandfather of the current 
                Chairman Mr. Nico Stucken.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                As a proud franchised agent with our main facility in Gqeberha, we serve the greater 
                western and central part of the Eastern Cape Province from a vehicle sales and 
                after-sales perspective.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Since its inception, Maritime Motors has become one of the leading luxury automotive 
                dealerships in the Eastern Cape. The dealership has grown significantly and now 
                includes nine exceptional franchises.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/service.jpg" alt="Since 1958" fill quality={100} className="object-cover" priority />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter value="65+" label="Years of Excellence" />
            <AnimatedCounter value="9" label="Premium Brands" />
            <AnimatedCounter value="50K+" label="Happy Customers" />
            <AnimatedCounter value="3" label="Locations" />
          </div>
        </div>
      </section>

      {/* Locations with Individual Maps */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Locations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visit us at any of our dealerships across the Eastern Cape and Western Cape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all"
              >
                {/* Individual Map */}
                <div className="relative h-[200px]">
                  <iframe
                    src={loc.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Car className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-white font-bold">{loc.name}</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{loc.address}</p>
                  <div className="flex flex-col space-y-2">
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, '')}`}
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{loc.phone}</span>
                    </a>
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Get Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Connect With Us</h2>
          <p className="text-gray-400 mb-8">Follow us on social media for the latest news and updates.</p>
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Us Today</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Experience the Maritime difference. Visit any of our showrooms or contact us to learn more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
                Contact Us
              </Link>
              <a href="tel:0413992800" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Call 041 399 2800
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
