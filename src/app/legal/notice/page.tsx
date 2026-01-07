import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Document Header */}
          <div className="border-b border-white/20 pb-8 mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Legal Document</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Legal Notice</h1>
            <p className="text-gray-400">Terms, Conditions & Company Information</p>
          </div>

          {/* Company Information */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Company Information</h2>
            <div className="border border-white/10 divide-y divide-white/10">
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Registered Name</span>
                <span className="text-white font-medium">Maritime Motors (Pty) Ltd</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Registration Number</span>
                <span className="text-white font-medium">1958/000979/07</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">VAT Number</span>
                <span className="text-white font-medium">4540103927</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">FSP Number</span>
                <span className="text-white font-medium">FSP 45171</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Country</span>
                <span className="text-white font-medium">Republic of South Africa</span>
              </div>
            </div>
          </div>

          {/* Website Use */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Website Use</h2>
            <p className="text-gray-400 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by these terms and conditions. 
              If you do not agree to these terms, please do not use our website. We reserve the right to modify 
              these terms at any time without prior notice.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, and software, 
              is the property of The Maritime Group or its licensors and is protected by South African and 
              international copyright and trademark laws.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Disclaimer</h2>
            <p className="text-gray-400 leading-relaxed">
              While we strive to provide accurate information, we make no warranties about the accuracy, completeness, 
              or reliability of any information on this website. Vehicle specifications, pricing, and availability 
              are subject to change without notice. Images shown may differ from actual vehicles.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              The Maritime Group shall not be liable for any direct, indirect, incidental, special, or consequential 
              damages arising from your use of this website, our services, or any products purchased through our dealerships.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Governing Law & Jurisdiction</h2>
            <div className="text-gray-400 space-y-4 leading-relaxed">
              <p>
                These terms and conditions shall be governed by and construed in accordance with the laws of the 
                Republic of South Africa. Any disputes arising from or in connection with these terms shall be 
                subject to the exclusive jurisdiction of the South African courts.
              </p>
              <p>
                All financial services are provided in accordance with the Financial Advisory and Intermediary 
                Services Act (FAIS). The Maritime Group is an authorized Financial Services Provider (FSP 45171).
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-white/20 pt-8">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Contact Information</h2>
            <div className="border border-white/10 divide-y divide-white/10">
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Registered Address</span>
                <span className="text-white font-medium text-right">Cnr. William Moffett Expressway & Circular Drive, Gqeberha, 6000</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Telephone</span>
                <span className="text-white font-medium">041 399 2800</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Fax</span>
                <span className="text-white font-medium">041 399 2801</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Email</span>
                <span className="text-white font-medium">info@maritimemotors.co.za</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Website</span>
                <span className="text-white font-medium">www.themaritimegroup.co.za</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
