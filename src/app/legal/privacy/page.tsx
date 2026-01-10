import Link from 'next/link';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-gray-400">Protection of Personal Information Act (POPIA) Compliant</p>
          </div>

          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Introduction</h2>
            <div className="text-gray-400 space-y-4 leading-relaxed">
              <p>
                Thorp Haval &amp; GWM is committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information in accordance with the Protection of Personal 
                Information Act (POPIA).
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Your Rights Under POPIA</h2>
            <div className="border border-white/10 divide-y divide-white/10">
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Right to Access</p>
                <p className="text-gray-500 text-sm">You have the right to request access to the personal information we hold about you.</p>
              </div>
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Right to Correction</p>
                <p className="text-gray-500 text-sm">You can request that we correct or update any inaccurate personal information.</p>
              </div>
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Right to Deletion</p>
                <p className="text-gray-500 text-sm">You may request deletion of your personal information in certain circumstances.</p>
              </div>
              <div className="py-3 px-4">
                <p className="text-white font-medium mb-1">Right to Object</p>
                <p className="text-gray-500 text-sm">You have the right to object to the processing of your personal information for direct marketing.</p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Information We Collect</h2>
            <div className="border border-white/10">
              <table className="w-full">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Category</th>
                    <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Examples</th>
                    <th className="text-left py-3 px-4 text-gray-400 text-sm font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-3 px-4 text-white text-sm">Identity Data</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Name, ID number, date of birth</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Vehicle sales, finance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white text-sm">Contact Data</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Address, email, phone</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Communication</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white text-sm">Financial Data</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Bank details, income</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Finance applications</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white text-sm">Vehicle Data</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">VIN, registration</td>
                    <td className="py-3 px-4 text-gray-400 text-sm">Warranty, servicing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">How We Protect Your Data</h2>
            <div className="text-gray-400 space-y-4 leading-relaxed">
              <p>We implement appropriate technical and organisational measures to protect your personal information, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Encrypted data transmission and storage</li>
                <li>Access controls and authentication systems</li>
                <li>Regular security audits and monitoring</li>
                <li>Staff training on data protection</li>
                <li>Secure third-party partnerships</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Information Officer</h2>
            <div className="border border-white/10 divide-y divide-white/10">
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Email</span>
                <span className="text-white font-medium">info@thorphaval.co.za</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Telephone</span>
                <span className="text-white font-medium">021 002 2282</span>
              </div>
              <div className="flex justify-between py-3 px-4">
                <span className="text-gray-400">Address</span>
                <span className="text-white font-medium text-right">220 Main Road, Plumstead, Cape Town 7801</span>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="border-t border-white/20 pt-8">
            <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">Official Documents</h2>
            <p className="text-gray-400 mb-6">
              Download or view our complete privacy documentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/legal/Maritime Group Privacy Notice & Statement (Binded).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Privacy Policy
              </a>
              <a
                href="/legal/Maritime Motots Group Data Protection (004).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Data Protection Policy
              </a>
              <a
                href="/legal/Maritime Group Privacy Notice & Statement (Binded).pdf"
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
