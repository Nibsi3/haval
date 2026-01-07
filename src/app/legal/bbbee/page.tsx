import Link from 'next/link';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function BBBEEPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">BBBEE Certificate</h1>
            <p className="text-gray-400">Broad-Based Black Economic Empowerment</p>
          </div>

          {/* Company Details */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Company Information</h2>
            <div className="border border-white/10 divide-y divide-white/10">
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Company Name</span>
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
                <span className="text-gray-400">Industry Sector</span>
                <span className="text-white font-medium">Motor Industry</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Status</span>
                <span className="text-white font-medium">Current & Valid</span>
              </div>
            </div>
          </div>

          {/* About BBBEE */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">About BBBEE</h2>
            <div className="text-gray-400 space-y-4 leading-relaxed">
              <p>
                The Maritime Group is committed to transformation and economic empowerment in South Africa. 
                Our BBBEE certificate demonstrates our dedication to contributing to the country&apos;s economic 
                transformation objectives as set out in the Broad-Based Black Economic Empowerment Act.
              </p>
              <p>
                As a proudly South African company established in 1958, we actively participate in initiatives 
                that promote broad-based black economic empowerment across all pillars of the scorecard.
              </p>
            </div>
          </div>

          {/* Scorecard Elements */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Scorecard Elements</h2>
            <div className="border border-white/10 divide-y divide-white/10">
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Ownership</p>
                <p className="text-gray-500 text-sm">Black ownership participation and voting rights in the company structure.</p>
              </div>
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Management Control</p>
                <p className="text-gray-500 text-sm">Representation of black people in executive and senior management positions.</p>
              </div>
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Skills Development</p>
                <p className="text-gray-500 text-sm">Investment in training and development programs for employees.</p>
              </div>
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Enterprise & Supplier Development</p>
                <p className="text-gray-500 text-sm">Support for black-owned suppliers and enterprise development initiatives.</p>
              </div>
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Socio-Economic Development</p>
                <p className="text-gray-500 text-sm">Contributions to socio-economic development and community initiatives.</p>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="border-t border-white/20 pt-8">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Official Document</h2>
            <p className="text-gray-400 mb-6">
              Download or view our official BBBEE certificate for verification purposes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/legal/BBBEE Certificate - Maritime Motors.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Certificate
              </a>
              <a
                href="/legal/BBBEE Certificate - Maritime Motors.pdf"
                download
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
