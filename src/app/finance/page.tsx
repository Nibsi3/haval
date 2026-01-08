"use client";

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadForm from '@/components/LeadForm';
import { Calculator, Shield, Percent, Clock, ChevronDown } from 'lucide-react';

const benefits = [
  { icon: Percent, title: 'Competitive Rates', description: 'Best finance rates available' },
  { icon: Shield, title: 'Multiple Lenders', description: 'Access to various finance houses' },
  { icon: Calculator, title: 'Flexible Terms', description: '36 to 72 month options' },
  { icon: Clock, title: 'Quick Approval', description: 'Fast application process' },
];

const faqs = [
  {
    question: 'What documents do I need for finance?',
    answer: 'You\'ll typically need a valid ID, proof of income (3 months payslips), proof of residence, and bank statements. Self-employed applicants may need additional documentation.',
  },
  {
    question: 'Can I get finance with a low credit score?',
    answer: 'We work with multiple lenders to find options that suit various credit profiles. Contact us to discuss your specific situation.',
  },
  {
    question: 'What deposit is required?',
    answer: 'Deposit requirements vary based on the vehicle and your credit profile. Generally, a higher deposit results in better rates and lower monthly payments.',
  },
  {
    question: 'How long does approval take?',
    answer: 'Most applications receive a decision within 24-48 hours. Some may be approved same-day.',
  },
];

export default function FinancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [vehiclePrice, setVehiclePrice] = useState(800000);
  const [deposit, setDeposit] = useState(80000);
  const [term, setTerm] = useState(60);
  const interestRate = 11.5;

  // Calculate monthly payment
  const loanAmount = vehiclePrice - deposit;
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image 
          src="/wallpapers/h6gt.jpg" 
          alt="Finance Options" 
          fill 
          quality={100} 
          className="object-cover object-center" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-4">Flexible Payment Plans</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Finance Options</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Make your dream vehicle affordable with our flexible finance solutions.
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
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-white font-bold mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator & Form */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Payment Calculator</h2>
              <p className="text-gray-400 mb-8">Estimate your monthly payments with our calculator.</p>
              
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-400 text-sm">Vehicle Price</label>
                    <span className="text-white font-bold">R {vehiclePrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={300000}
                    max={2000000}
                    step={10000}
                    value={vehiclePrice}
                    onChange={(e) => setVehiclePrice(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-400 text-sm">Deposit</label>
                    <span className="text-white font-bold">R {deposit.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={vehiclePrice * 0.5}
                    step={5000}
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-gray-400 text-sm">Term</label>
                    <span className="text-white font-bold">{term} months</span>
                  </div>
                  <input
                    type="range"
                    min={36}
                    max={72}
                    step={12}
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Loan Amount</span>
                    <span className="text-white font-bold">R {loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Interest Rate</span>
                    <span className="text-white font-bold">{interestRate}%</span>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                    <p className="text-orange-400 text-sm mb-1">Estimated Monthly Payment</p>
                    <p className="text-3xl font-black text-white">
                      R {Math.round(monthlyPayment).toLocaleString()}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  * This is an estimate only. Actual rates and terms may vary based on credit profile and lender requirements.
                </p>
              </div>
            </div>

            {/* Form */}
            <LeadForm type="finance" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 bg-zinc-950/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
