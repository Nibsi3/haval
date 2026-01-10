'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, ExternalLink, Facebook, Instagram, Linkedin, Car } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';

const locations = [
  {
    name: 'Thorp Haval & GWM Plumstead',
    address: '220 Main Road, Plumstead, Cape Town 7801',
    phone: '021 002 2282',
    hours: 'Mon-Fri: 08H00-17H30 | Sat: 09H00-13H00',
    mapUrl: 'https://www.google.com/maps/place/Thorp+Haval+%26+GWM+Plumstead',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.4656!3d-34.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d2f7a8e4b5f%3A0x1234567890abcdef!2s220%20Main%20Rd%2C%20Plumstead%2C%20Cape%20Town%2C%207801!5e0!3m2!1sen!2sza!4v1234567890',
  },
  {
    name: 'Thorp Haval & GWM Table Bay Mall',
    address: 'Table Bay Mall, Berkshire Boulevard, Sunningdale, Cape Town',
    phone: '021 002 0071',
    hours: 'Mon-Sat: 09H00-19H00 | Sun: 09H00-18H00',
    mapUrl: 'https://www.google.com/maps/place/Table+Bay+Mall',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310!2d18.5!3d-33.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5!2sTable%20Bay%20Mall!5e0!3m2!1sen!2sza!4v1234567890',
  },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/thorphavalplumstead/', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/thorphaval/', icon: Instagram },
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
              Your trusted Haval & GWM dealer in Cape Town
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
                Cape Town&apos;s Premier Haval & GWM Dealer
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Thorp Haval & GWM is your trusted destination for world-class SUVs in Cape Town. 
                With showrooms in Plumstead and Table Bay Mall, we bring the full range of Haval 
                and GWM vehicles to the Western Cape.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                We are proud to offer an exclusive FREE 10-year, 1 Million KM warranty on select 
                vehicles - a commitment to quality and customer satisfaction that sets us apart 
                from other dealerships.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From the luxurious GWM Tank 500 to the adventure-ready Tank 300, and the popular 
                Haval range including the H6, H7, and Jolion - we have the perfect vehicle for 
                every lifestyle and budget.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/tank300.jpg" alt="Since 1958" fill quality={100} className="object-cover" priority />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter value="10" label="Year Warranty" />
            <AnimatedCounter value="1M" label="KM Coverage" />
            <AnimatedCounter value="2" label="Cape Town Locations" />
            <AnimatedCounter value="5★" label="ANCAP Safety" />
          </div>
        </div>
      </section>

      {/* Locations with Individual Maps */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Locations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visit us at our showrooms in Plumstead or Table Bay Mall, Cape Town.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              Experience the Thorp difference. Visit our showrooms or contact us to learn more about our exclusive warranty.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
                Contact Us
              </Link>
              <a href="tel:0210022282" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Call 021 002 2282
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
