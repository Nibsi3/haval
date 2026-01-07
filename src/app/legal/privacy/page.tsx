import Link from 'next/link';
import { ArrowLeft, ExternalLink, Shield } from 'lucide-react';
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

          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
                <p className="text-gray-500">How we protect your information</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 leading-relaxed mb-6">
                The Maritime Group is committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Name, email address, and contact details</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Vehicle preferences and purchase history</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Service and maintenance records</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Financial information for vehicle purchases</span>
                </li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-gray-400 space-y-2 mb-6">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Process vehicle sales and service requests</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Communicate with you about your enquiries</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Improve our products and services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>

              <h2 className="text-xl font-bold text-white mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Under the Protection of Personal Information Act (POPIA), you have the right to 
                access, correct, or delete your personal information. Contact us to exercise these rights.
              </p>

              <div className="bg-zinc-800 rounded-xl p-6 mt-8">
                <h3 className="text-white font-bold mb-4">View Full Privacy Policy</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Download or view our complete Privacy Policy document.
                </p>
                <a
                  href="https://www.themaritimegroup.co.za/wp-content/uploads/2021/07/Privacy-Policy.pdf"
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
