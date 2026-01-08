"use client";

import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '041 399 2800', href: 'tel:+27413992800' },
  { icon: Mail, label: 'Email', value: 'marketing@maritimemotors.co.za', href: 'mailto:marketing@maritimemotors.co.za' },
  { icon: MapPin, label: 'Location', value: 'Gqeberha, South Africa', href: 'https://www.google.com/maps/dir//maritime+motors+port+elizabeth' },
  { icon: Clock, label: 'Hours', value: 'Mon - Fri: 08:00 - 17:30', href: '#' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/maritime-motors/', icon: Linkedin },
  { name: 'Facebook', href: 'https://www.facebook.com/MaritimeMotors001', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/maritime_motorspe/', icon: Instagram },
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
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="082 123 4567"
                      className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Subject</label>
                  <select className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                    <option>General Inquiry</option>
                    <option>New Vehicle Enquiry</option>
                    <option>Pre-Owned Vehicles</option>
                    <option>Service Booking</option>
                    <option>Parts & Accessories</option>
                    <option>Finance Options</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you today?"
                    className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold flex items-center justify-center space-x-2 transition-all">
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
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
