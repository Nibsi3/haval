"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { TrackedPhone, TrackedWhatsApp } from '@/components/TrackedContact';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/thorphavalplumstead/', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/thorphaval/', icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-xs">THORP</span>
              </div>
              <div>
                <p className="text-white font-bold">Thorp Haval & GWM</p>
                <p className="text-gray-500 text-sm">Plumstead & Table Bay Mall</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted Haval & GWM dealer in Cape Town. Experience luxury SUVs with our exclusive FREE 10-year, 1 Million KM warranty.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/used-cars" className="text-gray-400 hover:text-white transition-colors text-sm">Used Cars</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/legal/bbbee" className="text-gray-400 hover:text-white transition-colors text-sm">BBBEE Certificate</Link></li>
              <li><Link href="/legal/paia" className="text-gray-400 hover:text-white transition-colors text-sm">PAIA Manual</Link></li>
              <li><Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/legal/notice" className="text-gray-400 hover:text-white transition-colors text-sm">Legal Notice</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <TrackedPhone 
                  phone="+27 21 002 2282" 
                  location="Footer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">021 002 2282 (Plumstead)</span>
                </TrackedPhone>
              </li>
              <li>
                <TrackedPhone 
                  phone="+27 21 002 0071" 
                  location="Footer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">021 002 0071 (Table Bay Mall)</span>
                </TrackedPhone>
              </li>
              <li>
                <a href="mailto:info@thorphaval.co.za" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">info@thorphaval.co.za</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/Thorp+Haval+%26+GWM+Plumstead" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span className="text-sm">220 Main Road, Plumstead, Cape Town</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Thorp Haval & GWM. All rights reserved. E&OE.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="https://thorphaval.co.za/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              thorphaval.co.za
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
