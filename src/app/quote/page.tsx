"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadForm from '@/components/LeadForm';

function QuoteForm() {
  const searchParams = useSearchParams();
  const vehicle = searchParams.get('vehicle') || undefined;

  return <LeadForm type="quote" vehiclePreselect={vehicle} />;
}

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
            <div className="text-center">
              <div className="w-14 h-14 bg-zinc-800 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-white font-bold mb-1">Detailed Quote</h3>
              <p className="text-gray-500 text-sm">Full pricing breakdown</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-zinc-800 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-white font-bold mb-1">Best Price Guarantee</h3>
              <p className="text-gray-500 text-sm">Competitive market pricing</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-zinc-800 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
              </div>
              <h3 className="text-white font-bold mb-1">Special Offers</h3>
              <p className="text-gray-500 text-sm">Exclusive deals available</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-zinc-800 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-white font-bold mb-1">Quick Response</h3>
              <p className="text-gray-500 text-sm">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Suspense fallback={<div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl animate-pulse h-[600px]" />}>
            <QuoteForm />
          </Suspense>
        </div>
      </section>

      <Footer />
    </div>
  );
}
