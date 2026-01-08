import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadForm from '@/components/LeadForm';
import { Car, Clock, MapPin, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Book a Test Drive | The Maritime Group',
  description: 'Experience your dream vehicle firsthand. Book a test drive at Maritime Motors today.',
};

const benefits = [
  { icon: Car, title: 'Drive Your Dream Car', description: 'Experience the vehicle before you buy' },
  { icon: Clock, title: 'Flexible Scheduling', description: 'Choose a time that works for you' },
  { icon: MapPin, title: 'Multiple Locations', description: 'Visit any of our showrooms' },
  { icon: CheckCircle, title: 'No Obligation', description: 'Free and no pressure test drives' },
];

export default function TestDrivePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image 
          src="/wallpapers/tank300.jpg" 
          alt="Book a Test Drive" 
          fill 
          quality={100} 
          className="object-cover object-center" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">Experience It Yourself</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Book a Test Drive</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Nothing beats the feeling of being behind the wheel. Book your test drive today.
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
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-blue-400" />
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
          <LeadForm type="test_drive" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
