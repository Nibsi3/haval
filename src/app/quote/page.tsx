import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadForm from '@/components/LeadForm';
import { FileText, Shield, BadgePercent, Clock } from 'lucide-react';

export const metadata = {
  title: 'Request a Quote | The Maritime Group',
  description: 'Get a personalised quote for your chosen vehicle. No obligation, competitive pricing.',
};

const benefits = [
  { icon: FileText, title: 'Detailed Quote', description: 'Full pricing breakdown' },
  { icon: Shield, title: 'Best Price Guarantee', description: 'Competitive market pricing' },
  { icon: BadgePercent, title: 'Special Offers', description: 'Exclusive deals available' },
  { icon: Clock, title: 'Quick Response', description: 'Within 24 hours' },
];

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image 
          src="/wallpapers/h6gt.jpg" 
          alt="Request a Quote" 
          fill 
          quality={100} 
          className="object-cover object-center" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4">Get Your Price</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Request a Quote</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Receive a personalised, no-obligation quote for your dream vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-white font-bold mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <LeadForm type="quote" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
