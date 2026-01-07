"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/maritime-motors/', icon: Linkedin },
  { name: 'Facebook', href: 'https://www.facebook.com/MaritimeMotors001', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/maritime_motorspe/', icon: Instagram },
];

const locations = [
  {
    name: 'Maritime Motors',
    address: 'Cnr. William Moffett Expressway & Circular Dr, Gqeberha',
    phone: '041 399 2800',
  },
  {
    name: 'Jetour Nelson Mandela Bay',
    address: 'Cnr. William Moffet Expressway & Circular Dr, Overbaakens, Gqeberha',
    phone: '041 399 2800',
  },
  {
    name: 'Maritime Commercial',
    address: '111 Grahamstown Rd, North End, Gqeberha, 6001',
    phone: '041 408 6600',
  },
  {
    name: 'Maritime George',
    address: '44 C.J. Langenhoven Rd, George Central, George, 6529',
    phone: '044 803 7900',
  },
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
                <span className="text-black font-black">GWM</span>
              </div>
              <div>
                <p className="text-white font-bold">Maritime Motors</p>
                <p className="text-gray-500 text-sm">The Maritime Group</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Industry leader in car sales, services & related accessories. Committed to your complete satisfaction since 1958.
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
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Models</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
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
                <a href="tel:0413992800" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">041 399 2800</span>
                </a>
              </li>
              <li>
                <a href="mailto:marketing@maritimemotors.co.za" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">marketing@maritimemotors.co.za</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/dir//maritime+motors+port+elizabeth" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span className="text-sm">Gqeberha, Port Elizabeth, South Africa</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-white font-bold mb-6">Our Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div key={loc.name} className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-medium mb-2">{loc.name}</h4>
                <p className="text-gray-500 text-xs mb-2">{loc.address}</p>
                <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="text-blue-400 text-sm hover:text-blue-300">
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} The Maritime Group. All rights reserved. FSP 45171
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="https://www.themaritimegroup.co.za/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              The Maritime Group
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
