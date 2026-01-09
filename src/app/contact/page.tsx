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
  { icon: Phone, label: 'Call Us', value: '041 399 2800', phone: '+27 41 399 2800' },
  { icon: Mail, label: 'Email', value: 'marketing@maritimemotors.co.za', href: 'mailto:marketing@maritimemotors.co.za' },
  { icon: MapPin, label: 'Location', value: 'Gqeberha, South Africa', href: 'https://www.google.com/maps/dir//maritime+motors+port+elizabeth' },
  { icon: Clock, label: 'Hours', value: 'Mon - Fri: 08:00 - 17:30', href: '#' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/maritime-motors/', icon: Linkedin },
  { name: 'Facebook', href: 'https://www.facebook.com/MaritimeMotors001', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/maritime_motorspe/', icon: Instagram },
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
            <p className="text-gray-400">Visit our showrooms across the Eastern Cape and Western Cape.</p>
          </div>

          <div className="relative h-[450px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9892!2d25.5535!3d-33.9796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad1ecf00e265f%3A0xacb1f2ec1dcfd275!2sMaritime%20Motors!5e0!3m2!1sen!2sza!4v1234567890"
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
