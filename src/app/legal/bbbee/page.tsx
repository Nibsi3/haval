import Link from 'next/link';
import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';
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

          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center">
                <FileText className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">BBBEE Certificate</h1>
                <p className="text-gray-500">Broad-Based Black Economic Empowerment</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 leading-relaxed mb-6">
                The Maritime Group is committed to transformation and economic empowerment in South Africa. 
                Our BBBEE certificate demonstrates our dedication to contributing to the country&apos;s economic 
                transformation objectives.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">Our Commitment</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                As a proudly South African company, we actively participate in initiatives that promote 
                broad-based black economic empowerment. Our BBBEE scorecard reflects our ongoing efforts 
                in areas including:
              </p>

              <ul className="text-gray-400 space-y-2 mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Ownership and management control</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Skills development and training</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Enterprise and supplier development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Socio-economic development initiatives</span>
                </li>
              </ul>

              <div className="bg-zinc-800 rounded-xl p-6 mt-8">
                <h3 className="text-white font-bold mb-4">View Official Certificate</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Download or view our official BBBEE certificate for verification purposes.
                </p>
                <a
                  href="https://www.themaritimegroup.co.za/wp-content/uploads/2024/01/BBBEE-Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <span>View PDF Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
