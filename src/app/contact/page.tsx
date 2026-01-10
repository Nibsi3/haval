"use client";

import { Suspense } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Car, Calculator, RefreshCw, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadForm from '@/components/LeadForm';
import { TrackedPhone, TrackedWhatsApp } from '@/components/TrackedContact';

const contactInfo = [
  { icon: Phone, label: 'Plumstead Sales', value: '021 002 2282', phone: '+27 21 002 2282' },
  { icon: Phone, label: 'Table Bay Mall Sales', value: '021 002 0071', phone: '+27 21 002 0071' },
  { icon: Mail, label: 'Email', value: 'info@thorphaval.co.za', href: 'mailto:info@thorphaval.co.za' },
  { icon: MapPin, label: 'Plumstead', value: '220 Main Road, Plumstead, Cape Town', href: 'https://www.google.com/maps/place/Thorp+Haval+%26+GWM+Plumstead' },
  { icon: Clock, label: 'Hours (Plumstead)', value: 'Mon-Fri: 08:00-17:30, Sat: 09:00-13:00', href: '#' },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/thorphavalplumstead/', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/thorphaval/', icon: Instagram },
];

const quickActions = [
  { 
    title: 'Test Drive', 
    description: 'Book a test drive', 
    icon: Car, 
    href: '/test-drive',
  },
  { 
    title: 'Get a Quote', 
    description: 'Request pricing', 
    icon: FileText, 
    href: '/quote',
  },
  { 
    title: 'Trade-In', 
    description: 'Value your vehicle', 
    icon: RefreshCw, 
    href: '/trade-in',
  },
  { 
    title: 'Finance', 
    description: 'Explore options', 
    icon: Calculator, 
    href: '/finance',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero with Wallpaper */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image src="/wallpapers/p500.webp" alt="Contact Us" fill quality={100} className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Get in touch with our team
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                href={action.href}
                className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 hover:bg-zinc-800/50 hover:border-white/20 transition-all"
              >
                <action.icon className="w-8 h-8 mb-3 text-white" />
                <h3 className="font-bold text-white">{action.title}</h3>
                <p className="text-sm text-gray-400">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Have questions about a vehicle or want to schedule a test drive? Our team is here to assist you.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  item.phone ? (
                    <TrackedPhone
                      key={item.label}
                      phone={item.phone}
                      location="Contact Page"
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                        <item.icon className="w-5 h-5 text-blue-400 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </TrackedPhone>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                        <item.icon className="w-5 h-5 text-blue-400 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </a>
                  )
                ))}
              </div>

{/* Social Links */}
              <div>
                <h3 className="text-white font-bold mb-4">Follow Us</h3>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Suspense fallback={<div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl animate-pulse h-[600px]" />}>
              <LeadForm type="contact" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-gray-400">Visit our showrooms in Plumstead or Table Bay Mall, Cape Town.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-2">Thorp Plumstead</h3>
              <p className="text-gray-400 text-sm mb-2">220 Main Road, Plumstead, Cape Town 7801</p>
              <p className="text-gray-500 text-xs mb-4">Mon-Fri: 08H00-17H30 | Sat: 09H00-13H00</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-400">New Car Sales: <span className="text-white">021 002 2282</span></p>
                <p className="text-gray-400">Used Car Sales: <span className="text-white">021 002 0444</span></p>
                <p className="text-gray-400">Service: <span className="text-white">021 761 1865</span></p>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-2">Thorp Table Bay Mall</h3>
              <p className="text-gray-400 text-sm mb-2">Table Bay Mall, Berkshire Boulevard, Sunningdale</p>
              <p className="text-gray-500 text-xs mb-4">Mon-Sat: 09H00-19H00 | Sun: 09H00-18H00</p>
              <div className="space-y-1 text-sm">
                <p className="text-gray-400">New Car Sales: <span className="text-white">021 002 0071</span></p>
                <p className="text-gray-400">Used Car Sales: <span className="text-white">021 002 2999</span></p>
                <p className="text-gray-400">Service: <span className="text-white">021 476 0210</span></p>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.4656!3d-34.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d2f7a8e4b5f%3A0x1234567890abcdef!2s220%20Main%20Rd%2C%20Plumstead%2C%20Cape%20Town%2C%207801!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
