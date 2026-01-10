'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Wrench, Shield, Clock, Award, Package, Calendar, Sparkles, Download, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadForm from '@/components/LeadForm';

const tabs = [
  { id: 'service', label: 'Book a Service', icon: Wrench },
  { id: 'parts', label: 'Request Parts', icon: Package },
  { id: 'accessories', label: 'Accessories', icon: Sparkles },
  { id: 'plans', label: 'Service Plans', icon: Calendar },
];

const serviceItems = [
  'Shock & Spring Replacement',
  'Suspension Inspection & Diagnosis',
  'Suspension Setup & Fitment',
  'Disc & Drum Brake Service',
  'ABS Inspection & Diagnosis',
  'Brake Fluid Flush',
  'Electrical System Diagnostics & Repair',
  'Major & Minor Vehicle Services',
  'Engine Fluids & Filters',
  'Vehicle Health Check',
];

const accessoryCategories = [
  'Engine Parts',
  'Shocks',
  'Suspension Parts',
  'Filters',
  'Body Panels',
  'Brake Discs & Pads',
  'Wipers & Blades',
  'Interior Trim',
  'Electrical Parts',
  'Gearbox Internals',
];

const servicePlanBenefits = [
  { title: 'No costly annual bills', description: 'Get your regular servicing costs covered without the annual surprise.' },
  { title: 'Tailored to suit you', description: 'No fixed kilometers - we calculate your unique premium based on your driving.' },
  { title: 'Choose your time frame', description: 'Buy a plan for 12, 24, 36, 48, 60, 72 or 84 months.' },
  { title: 'Extend existing plans', description: 'Take out a brand new plan or extend your existing service plan.' },
];

const serviceLocations = [
  {
    name: 'Thorp Plumstead',
    address: '220 Main Road, Plumstead, Cape Town 7801',
    servicePhone: '021 879 0921',
    hours: 'Mon-Fri: 08H00-17H30 | Sat: 09H00-13H00',
  },
  {
    name: 'Thorp Table Bay Mall',
    address: 'Table Bay Mall, Berkshire Boulevard, Sunningdale',
    servicePhone: '021 476 0210',
    hours: 'Mon-Sat: 09H00-19H00 | Sun: 09H00-18H00',
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('service');

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image src="/wallpapers/pseries.jpg" alt="Services" fill quality={100} className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Service & Parts</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Expert care for your vehicle from factory-trained technicians
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-6 bg-zinc-950 sticky top-0 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Book a Service Tab */}
          {activeTab === 'service' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Book a Service</h2>
                <p className="text-gray-400 mb-8">
                  Regular servicing is highly recommended to make sure that your vehicle is in full working order and most importantly, safe.
                  We service all Haval, GWM, Isuzu, Suzuki, Opel and Chevrolet vehicles.
                </p>
                
                <h3 className="text-xl font-bold text-white mb-4">Our Services Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {serviceItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://thorphaval.co.za/wp-content/uploads/2024/08/GWM-South-Africa_Vehicle-Warranty-and-Service-Guide_Aug-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white hover:bg-zinc-800 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Warranty & Service Guide
                </a>

                {/* Service Locations */}
                <div className="mt-12 space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">Service Centres</h3>
                  {serviceLocations.map((loc) => (
                    <div key={loc.name} className="bg-zinc-900/50 border border-white/10 rounded-xl p-4">
                      <h4 className="text-white font-bold">{loc.name}</h4>
                      <p className="text-gray-500 text-sm">{loc.address}</p>
                      <p className="text-gray-500 text-xs mt-1">{loc.hours}</p>
                      <a href={`tel:${loc.servicePhone.replace(/\s/g, '')}`} className="text-blue-400 text-sm mt-2 inline-flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        {loc.servicePhone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <LeadForm type="contact" className="sticky top-32" />
              </div>
            </div>
          )}

          {/* Request Parts Tab */}
          {activeTab === 'parts' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Request Parts</h2>
                <p className="text-gray-400 mb-8">
                  We stock a comprehensive range of genuine parts for all Haval and GWM vehicles.
                  All genuine parts come with a 12-month warranty for your peace of mind.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-center">
                    <Package className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <h4 className="text-white font-bold mb-1">100% Genuine</h4>
                    <p className="text-gray-500 text-xs">Direct from manufacturer</p>
                  </div>
                  <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-center">
                    <Clock className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <h4 className="text-white font-bold mb-1">Fast Delivery</h4>
                    <p className="text-gray-500 text-xs">Quick turnaround times</p>
                  </div>
                  <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-center">
                    <Shield className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <h4 className="text-white font-bold mb-1">12 Month Warranty</h4>
                    <p className="text-gray-500 text-xs">On all genuine parts</p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm">
                  Fill out the form to request a quote for parts. Our team will get back to you with pricing and availability.
                </p>
              </div>
              
              <div>
                <LeadForm type="contact" className="sticky top-32" />
              </div>
            </div>
          )}

          {/* Accessories Tab */}
          {activeTab === 'accessories' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Accessories</h2>
                <p className="text-gray-400 mb-8">
                  Enhance your vehicle with genuine accessories. We offer a wide range of parts and accessories
                  with a 12-month warranty on all genuine products.
                </p>
                
                <h3 className="text-xl font-bold text-white mb-4">Available Categories:</h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {accessoryCategories.map((cat) => (
                    <div key={cat} className="flex items-center gap-3 text-gray-300 bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3">
                      <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{cat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://thorphaval.co.za/wp-content/uploads/2024/09/GWM-HAVAL-List-of-Accessories.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl text-white hover:bg-blue-500 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Accessories Catalog
                </a>
              </div>
              
              <div>
                <LeadForm type="contact" className="sticky top-32" />
              </div>
            </div>
          )}

          {/* Service Plans Tab */}
          {activeTab === 'plans' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Monthly Service Plans</h2>
                <p className="text-gray-400 mb-8">
                  Service plans cover the cost of all scheduled services in the future. Regular servicing is essential
                  to keep your vehicle in safe driving condition, but with this plan you won&apos;t have to budget every year for it.
                </p>
                
                <div className="space-y-4 mb-8">
                  {servicePlanBenefits.map((benefit) => (
                    <div key={benefit.title} className="bg-zinc-900/50 border border-white/10 rounded-xl p-5">
                      <h4 className="text-white font-bold mb-1">{benefit.title}</h4>
                      <p className="text-gray-500 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-2">Peace of Mind Motoring</h4>
                  <p className="text-gray-400 text-sm">
                    Service plans give you peace of mind and help you budget for the servicing costs that come along with owning a vehicle,
                    so you won&apos;t feel the pinch when the time comes for regular servicing.
                  </p>
                </div>
              </div>
              
              <div>
                <LeadForm type="contact" className="sticky top-32" />
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Service With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-center">
              <Wrench className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Expert Technicians</h3>
              <p className="text-gray-500 text-sm">Factory-trained with years of experience</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-center">
              <Shield className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Genuine Parts</h3>
              <p className="text-gray-500 text-sm">100% genuine parts guaranteed</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-center">
              <Clock className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Quick Turnaround</h3>
              <p className="text-gray-500 text-sm">Get back on the road fast</p>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-center">
              <Award className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-500 text-sm">All work comes with our guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Roadside Assistance?</h2>
          <p className="text-gray-400 mb-8">
            All new Haval and GWM vehicles come with complimentary roadside assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
              Contact Us
            </Link>
            <a href="tel:0218790921" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Call Service: 021 879 0921
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
