import Link from 'next/link';
import { ArrowLeft, ExternalLink, Scale } from 'lucide-react';
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

          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center">
                <Scale className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Legal Notice</h1>
                <p className="text-gray-500">Terms and conditions of use</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 leading-relaxed mb-6">
                This legal notice governs your use of The Maritime Group website and services. 
                By accessing or using our website, you agree to be bound by these terms.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">Company Information</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The Maritime Group is a registered company in South Africa. Our Financial Services 
                Provider number is FSP 45171. All vehicle sales and finance activities are conducted 
                in accordance with South African law.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">Disclaimer</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                While we strive to provide accurate and up-to-date information, we make no warranties 
                or representations about the accuracy, completeness, or reliability of any information 
                on this website. Vehicle specifications, pricing, and availability are subject to change 
                without notice.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                All content on this website, including text, graphics, logos, and images, is the 
                property of The Maritime Group or its licensors and is protected by copyright and 
                trademark laws.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The Maritime Group shall not be liable for any direct, indirect, incidental, or 
                consequential damages arising from your use of this website or our services.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">Governing Law</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                These terms shall be governed by and construed in accordance with the laws of the 
                Republic of South Africa. Any disputes shall be subject to the exclusive jurisdiction 
                of the South African courts.
              </p>

              <div className="bg-zinc-800 rounded-xl p-6 mt-8">
                <h3 className="text-white font-bold mb-4">View Full Legal Notice</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Download or view our complete Legal Notice document.
                </p>
                <a
                  href="https://www.themaritimegroup.co.za/wp-content/uploads/2021/07/Legal-Notice.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <span>View PDF Document</span>
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
