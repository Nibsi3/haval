'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Shield, CheckCircle, Car, Settings, Cog, Zap } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const warrantyBenefits = [
  'Peace of mind motoring after your factory warranty has expired',
  'Over R1,500,000 paid out in claims saving our customers money',
  'Comprehensive coverage on major components',
  'No excess on claims',
  'Transferable to new owner if you sell',
];

const coveredComponents = [
  {
    title: 'Engine',
    icon: Cog,
    items: [
      'All internally lubricated components',
      'Engine block (if damage is caused by a covered component)',
      'Burnt valves and engine sensors',
    ],
    excluded: 'Breakdowns from overheating or cambelt failure, cracked cylinder heads',
  },
  {
    title: 'Gearbox (Manual/Automatic)',
    icon: Settings,
    items: [
      'All internally lubricated components',
      'Ring gear, flex-plate, gear linkages',
      'AMT unit, torque convertor, DSG unit',
      'Transaxle and transmission sensors',
    ],
    excluded: null,
  },
  {
    title: 'Turbo Assembly',
    icon: Zap,
    items: [
      'Original manufacturer-fitted unit only',
      'Actuator, impellers, shafts',
      'Turbo electronic Control Unit (ECU)',
      'Bushes and casings',
    ],
    excluded: null,
  },
  {
    title: 'Transfer Box & Differential',
    icon: Car,
    items: [
      'All internally lubricated components',
      'Transfer box/differential casing',
      'Actuator and sensors',
      'Differential lock components',
    ],
    excluded: null,
  },
  {
    title: 'Drive Shafts',
    icon: Settings,
    items: [
      'CV joints and propeller shafts',
      'Half shafts, side shafts',
      'Centre bearing and universal joints',
    ],
    excluded: 'Propeller shaft tube and balancing',
  },
  {
    title: 'Free Wheel Hubs',
    icon: Cog,
    items: [
      'Complete unit (4x4 vehicles only)',
    ],
    excluded: null,
  },
];

const advantages = [
  { title: 'Trade-ins Welcome', description: 'We accept trade-ins on all vehicle purchases' },
  { title: 'Financial Insurance', description: 'Comprehensive finance and insurance options' },
  { title: 'Full Service & Parts', description: 'Complete service and parts department' },
  { title: 'Customer Driven', description: 'Your satisfaction is our priority' },
];

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image src="/brochures/tank-500/2.jpg" alt="Warranty" fill quality={100} priority className="object-cover object-center brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
        <div className="relative max-w-7xl mx-auto px-6 w-full pt-28">
          <div className="max-w-3xl">
            <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">Exclusive to Thorp</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              FREE Extended <span className="text-blue-500">Warranty</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed font-light mb-10 max-w-2xl">
              10 Years / 1 Million KM coverage on select vehicles. Only at Thorp Haval & GWM.
            </p>
          </div>
        </div>
      </section>

      {/* Main Warranty Info */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Shield className="w-4 h-4" />
                Industry-Leading Coverage
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                10 Years / 1 Million KM
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                When you purchase a qualifying Haval or GWM vehicle from Thorp, you receive our exclusive FREE extended warranty
                that covers you for up to 10 years or 1 million kilometers - whichever comes first. This is in addition to the
                manufacturer&apos;s standard warranty.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
              <div className="space-y-3 mb-8">
                {warrantyBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all"
              >
                Enquire About Warranty
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-8">
                <div className="text-center">
                  <Shield className="w-20 h-20 text-blue-500 mx-auto mb-6" />
                  <h3 className="text-5xl font-black text-white mb-2">10 YEARS</h3>
                  <p className="text-2xl text-blue-400 font-bold mb-4">1 MILLION KM</p>
                  <p className="text-gray-400">FREE Extended Warranty</p>
                  <p className="text-gray-500 text-sm mt-4">*On qualifying vehicles purchased from Thorp Haval & GWM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Covered */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Components Covered</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our extended warranty provides comprehensive coverage on major mechanical components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coveredComponents.map((component) => (
              <div key={component.title} className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <component.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold">{component.title}</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {component.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                {component.excluded && (
                  <p className="text-xs text-gray-600 border-t border-white/5 pt-3">
                    <span className="text-gray-500">Excluded:</span> {component.excluded}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Advantages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-zinc-900 border border-white/10 rounded-xl p-6 text-center">
                <h3 className="text-white font-bold mb-2">{adv.title}</h3>
                <p className="text-gray-500 text-sm">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Protected?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Visit our showrooms in Plumstead or Table Bay Mall to learn more about our exclusive warranty offer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/new-vehicles" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
              View New Vehicles
            </Link>
            <Link href="/contact" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
