import Link from 'next/link';
import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PAIAPage() {
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
                <h1 className="text-3xl font-bold text-white">PAIA Manual</h1>
                <p className="text-gray-500">Promotion of Access to Information Act</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 leading-relaxed mb-6">
                The Promotion of Access to Information Act (PAIA) gives effect to the constitutional 
                right of access to any information held by the State and any information that is held 
                by another person and that is required for the exercise or protection of any rights.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">Purpose of the Manual</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                This manual is published in terms of section 51 of PAIA. It provides information on 
                how to request access to records held by The Maritime Group and describes the types 
                of records available.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">Information Officer</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                All requests for access to information must be directed to our Information Officer. 
                Contact details are available in the full PAIA manual document.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">How to Make a Request</h2>
              <ul className="text-gray-400 space-y-2 mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">1.</span>
                  <span>Complete the prescribed request form</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">2.</span>
                  <span>Submit the form to the Information Officer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">3.</span>
                  <span>Pay the prescribed fee (if applicable)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">4.</span>
                  <span>Await response within 30 days</span>
                </li>
              </ul>

              <div className="bg-zinc-800 rounded-xl p-6 mt-8">
                <h3 className="text-white font-bold mb-4">View Full PAIA Manual</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Download or view our complete PAIA manual for detailed information.
                </p>
                <a
                  href="https://www.themaritimegroup.co.za/wp-content/uploads/2021/07/PAIA-Manual.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <span>View PDF Manual</span>
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
