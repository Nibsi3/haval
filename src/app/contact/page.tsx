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
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  },
  { 
    title: 'Get a Quote', 
    description: 'Request pricing', 
    icon: FileText, 
    href: '/quote',
    color: 'bg-green-500/10 text-green-400 border-green-500/20'
  },
  { 
    title: 'Trade-In', 
    description: 'Value your vehicle', 
    icon: RefreshCw, 
    href: '/trade-in',
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  },
  { 
    title: 'Finance', 
    description: 'Explore options', 
    icon: Calculator, 
    href: '/finance',
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
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
                className={`${action.color} border rounded-2xl p-6 hover:scale-105 transition-transform`}
              >
                <action.icon className="w-8 h-8 mb-3" />
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

              {/* WhatsApp CTA */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-8">
                <h3 className="text-white font-bold mb-2">Chat on WhatsApp</h3>
                <p className="text-gray-400 text-sm mb-4">Get instant responses from our sales team</p>
                <TrackedWhatsApp
                  whatsappNumber="27413631518"
                  message="Hi, I'd like to enquire about your vehicles."
                  location="Contact Page"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat Now
                </TrackedWhatsApp>
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
