import Link from 'next/link';
import { ArrowLeft, Download, FileText } from 'lucide-react';
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

          {/* Document Header */}
          <div className="border-b border-white/20 pb-8 mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Legal Document</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">PAIA Manual</h1>
            <p className="text-gray-400">Promotion of Access to Information Act, No. 2 of 2000</p>
          </div>

          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">About This Manual</h2>
            <div className="text-gray-400 space-y-4 leading-relaxed">
              <p>
                This manual is published in compliance with Section 51 of the Promotion of Access to Information Act 
                (PAIA), No. 2 of 2000. PAIA gives effect to the constitutional right of access to any information 
                held by the State and any information that is held by another person and that is required for the 
                exercise or protection of any rights.
              </p>
              <p>
                The Maritime Group respects the right of access to information and is committed to transparency 
                in accordance with PAIA requirements.
              </p>
            </div>
          </div>

          {/* Information Officer */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Information Officer</h2>
            <div className="border border-white/10 divide-y divide-white/10">
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Name</span>
                <span className="text-white font-medium">The Maritime Group</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Physical Address</span>
                <span className="text-white font-medium text-right">Cnr. William Moffett Expressway & Circular Drive, Gqeberha, 6000</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Telephone</span>
                <span className="text-white font-medium">041 399 2800</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Email</span>
                <span className="text-white font-medium">info@maritimemotors.co.za</span>
              </div>
            </div>
          </div>

          {/* Request Process */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">How to Request Information</h2>
            <div className="border border-white/10 divide-y divide-white/10">
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Step 1: Complete Form</p>
                <p className="text-gray-500 text-sm">Fill in the prescribed PAIA request form (Form C) available in the manual.</p>
              </div>
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Step 2: Submit Request</p>
                <p className="text-gray-500 text-sm">Submit the completed form to our Information Officer via email or post.</p>
              </div>
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Step 3: Pay Fees</p>
                <p className="text-gray-500 text-sm">Pay the prescribed request and access fees as applicable.</p>
              </div>
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Step 4: Await Response</p>
                <p className="text-gray-500 text-sm">Receive a response within 30 days of receipt of your request.</p>
              </div>
            </div>
          </div>

          {/* Fees Table */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Prescribed Fees</h2>
            <div className="border border-white/10">
              <table className="w-full">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Fee Type</th>
                    <th className="text-right py-3 px-4 text-gray-400 text-sm font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-3 px-4 text-white text-sm">Request fee (non-personal requester)</td>
                    <td className="py-3 px-4 text-white text-sm text-right">R50.00</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white text-sm">Photocopy (per A4 page)</td>
                    <td className="py-3 px-4 text-white text-sm text-right">R1.10</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white text-sm">Printed copy (per A4 page)</td>
                    <td className="py-3 px-4 text-white text-sm text-right">R0.75</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white text-sm">CD copy</td>
                    <td className="py-3 px-4 text-white text-sm text-right">R70.00</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white text-sm">Search and preparation (per hour)</td>
                    <td className="py-3 px-4 text-white text-sm text-right">R30.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Important Notice</h2>
            <p className="text-gray-400 leading-relaxed">
              Access to certain records may be refused if disclosure would harm the commercial interests 
              of the company, constitute a breach of confidentiality, or if the record contains personal 
              information about a third party. Grounds for refusal are set out in Chapter 4 of PAIA.
            </p>
          </div>

          {/* Download Section */}
          <div className="border-t border-white/20 pt-8">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Official Document</h2>
            <p className="text-gray-400 mb-6">
              Download or view our complete PAIA manual including request forms and detailed procedures.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/legal/Maritime Group PAIA Manual Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Manual
              </a>
              <a
                href="/legal/Maritime Group PAIA Manual Policy.pdf"
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
