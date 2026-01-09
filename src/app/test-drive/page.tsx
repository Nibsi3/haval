"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadForm from '@/components/LeadForm';

function TestDriveForm() {
  const searchParams = useSearchParams();
  const vehicle = searchParams.get('vehicle') || undefined;

  return <LeadForm type="test_drive" vehiclePreselect={vehicle} />;
}

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
            <div className="text-center">
              <div className="w-14 h-14 bg-zinc-800 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <h3 className="text-white font-bold mb-1">Drive Your Dream Car</h3>
              <p className="text-gray-500 text-sm">Experience the vehicle before you buy</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-zinc-800 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-white font-bold mb-1">Flexible Scheduling</h3>
              <p className="text-gray-500 text-sm">Choose a time that works for you</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-zinc-800 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-white font-bold mb-1">Multiple Locations</h3>
              <p className="text-gray-500 text-sm">Visit any of our showrooms</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-zinc-800 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-white font-bold mb-1">No Obligation</h3>
              <p className="text-gray-500 text-sm">Free and no pressure test drives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Suspense fallback={<div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl animate-pulse h-[600px]" />}>
            <TestDriveForm />
          </Suspense>
        </div>
      </section>

      <Footer />
    </div>
  );
}
