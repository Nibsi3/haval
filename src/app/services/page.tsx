import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, ExternalLink, Wrench, Shield, Clock, Award, Package, Truck, CheckCircle, FileText, CreditCard, Home, Car } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PartsSlider from '@/components/PartsSlider';

const branchManagers = [
  {
    name: 'Thorp Plumstead',
    role: 'Sales & Service',
    branch: 'Thorp Haval & GWM',
    image: '/brochures/tank-500/4.jpg',
    description: 'Our Plumstead showroom offers the complete Haval and GWM range with expert sales consultants and a fully-equipped service centre. Experience our exclusive FREE 10-year, 1 Million KM warranty on select vehicles.',
    address: '220 Main Road, Plumstead, Cape Town 7801',
    phone: '021 002 2282',
    location: 'https://www.google.com/maps/place/Thorp+Haval+%26+GWM+Plumstead',
  },
  {
    name: 'Thorp Table Bay Mall',
    role: 'Sales & Service',
    branch: 'Thorp Haval & GWM',
    image: '/brochures/tank-500/0.jpg',
    description: 'Conveniently located in Table Bay Mall, our showroom is open 7 days a week. Browse our full range of Haval and GWM vehicles including the luxurious Tank 500 and adventure-ready Tank 300.',
    address: 'Table Bay Mall, Berkshire Boulevard, Sunningdale, Cape Town',
    phone: '021 002 0071',
    location: 'https://www.google.com/maps/place/Table+Bay+Mall',
  },
];

const serviceLocations = [
  {
    brand: 'GWM & Haval',
    dealer: 'Thorp Plumstead',
    address: '220 Main Road, Plumstead, Cape Town 7801',
    location: 'https://www.google.com/maps/place/Thorp+Haval+%26+GWM+Plumstead',
    phone: '021 761 1865',
    hours: 'Mon-Fri: 08H00-17H30 | Sat: 09H00-13H00',
  },
  {
    brand: 'GWM & Haval',
    dealer: 'Thorp Table Bay Mall',
    address: 'Table Bay Mall, Berkshire Boulevard, Sunningdale',
    location: 'https://www.google.com/maps/place/Table+Bay+Mall',
    phone: '021 476 0210',
    hours: 'Mon-Sat: 09H00-19H00 | Sun: 09H00-18H00',
  },
];

const serviceFeatures = [
  {
    icon: Wrench,
    title: 'Expert Technicians',
    description: 'Factory-trained technicians with years of experience working on GWM and Haval vehicles.',
  },
  {
    icon: Shield,
    title: 'Genuine Parts',
    description: 'We only use 100% genuine parts to maintain your vehicle warranty and performance.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Efficient service processes to get you back on the road as quickly as possible.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'All work comes with our quality guarantee for your peace of mind.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero with Wallpaper */}
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

      {/* Service Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all"
              >
                <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-white text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Managers / Where to Find Us */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">Group Contacts</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Where to Find Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visit our showrooms in Plumstead or Table Bay Mall for expert sales and service.
            </p>
          </div>

          <div className="space-y-8">
            {branchManagers.map((manager, idx) => (
              <div 
                key={manager.name}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-8 rounded-2xl border border-white/10 bg-zinc-900/50 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/30 mb-4">
                    <Image src={manager.image} alt={manager.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-white text-xl font-bold">{manager.name}</h3>
                  <p className="text-blue-400 text-sm">{manager.role}</p>
                  <p className="text-gray-500 text-xs mt-1">{manager.branch}</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-gray-400 leading-relaxed mb-6">{manager.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={manager.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{manager.address}</span>
                    </a>
                    <a
                      href={`tel:${manager.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{manager.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Service With Us?
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Thorp Haval & GWM is committed to ensuring that your car remains safe, reliable, 
                and economical long after your purchase. Our dedicated team understands the importance 
                of high-quality, reliable workmanship.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <span className="text-gray-300">Factory-trained technicians</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <span className="text-gray-300">100% genuine parts guaranteed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <span className="text-gray-300">Free roadside assistance with new cars</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <span className="text-gray-300">Optional service plans for used cars</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/service.jpg" alt="Expert Service" fill quality={100} className="object-cover" priority />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Service Centers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visit any of our locations for expert vehicle service and genuine parts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceLocations.map((loc) => (
              <div
                key={loc.brand}
                className="bg-zinc-900 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-1">{loc.brand}</h3>
                <p className="text-gray-500 text-sm mb-4">{loc.dealer}</p>
                <p className="text-gray-400 text-sm mb-4">{loc.address}</p>
                
                <div className="flex flex-col space-y-3">
                  <a
                    href={loc.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Get Directions</span>
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </a>
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, '')}`}
                    className="flex items-center space-x-3 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{loc.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genuine Parts Section */}
      <section className="py-16 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Genuine Parts</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We stock a comprehensive range of genuine parts for all the brands we represent. 
              Quality assured and warranty protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 text-center">
              <Package className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white text-lg font-bold mb-2">100% Genuine</h3>
              <p className="text-gray-500 text-sm">All parts are sourced directly from manufacturers to ensure quality and reliability.</p>
            </div>
            <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 text-center">
              <Truck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white text-lg font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-500 text-sm">Quick turnaround on parts orders with nationwide delivery available.</p>
            </div>
            <div className="bg-zinc-950 border border-white/10 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white text-lg font-bold mb-2">Warranty Protected</h3>
              <p className="text-gray-500 text-sm">All genuine parts come with manufacturer warranty for your peace of mind.</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-center text-gray-500 text-sm mb-6">Parts available for the following brands:</p>
            <PartsSlider />
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all">
              Order Parts
            </Link>
          </div>
        </div>
      </section>

      {/* What You Need When Buying */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">What to Bring When Buying a Car</h2>
                </div>
                <p className="text-gray-400">
                  Be sure to bring the following documents with you when you&apos;re ready to purchase your new vehicle.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="bg-zinc-800 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">3 Payslips</p>
                    <p className="text-gray-500 text-xs">Latest months</p>
                  </div>
                </div>
                
                <div className="bg-zinc-800 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Bank Statements</p>
                    <p className="text-gray-500 text-xs">3 months</p>
                  </div>
                </div>
                
                <div className="bg-zinc-800 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">ID & License</p>
                    <p className="text-gray-500 text-xs">Valid driver&apos;s license</p>
                  </div>
                </div>
                
                <div className="bg-zinc-800 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Proof of Residence</p>
                    <p className="text-gray-500 text-xs">Recent utility bill</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book a Service?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact us today to schedule your vehicle service or order genuine parts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
              Book a Service
            </Link>
            <a href="tel:0217611865" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Call 021 761 1865
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
