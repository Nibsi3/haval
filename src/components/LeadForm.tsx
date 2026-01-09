"use client";

import { useState } from "react";
import { Check, Loader2, Phone, Mail, User, Car, MessageSquare, Calendar, DollarSign } from "lucide-react";
import { vehicleModels, dealerships, defaultDealership } from "@/lib/dealerships";
import {
  trackLeadTestDrive,
  trackLeadQuote,
  trackLeadTradeIn,
  trackLeadFinance,
  trackLeadContact,
} from "@/lib/analytics";

type FormType = "test_drive" | "quote" | "trade_in" | "finance" | "contact";

interface LeadFormProps {
  type: FormType;
  vehiclePreselect?: string;
  dealershipId?: string;
  onSuccess?: () => void;
  className?: string;
  compact?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  vehicleInterest: string;
  message: string;
  preferredContactTime: string;
  // Trade-in fields
  currentVehicle: string;
  currentYear: string;
  currentMileage: string;
  // Finance fields
  depositAmount: string;
  termMonths: string;
  dealershipId: string;
}

const formTitles: Record<FormType, string> = {
  test_drive: "Book a Test Drive",
  quote: "Request a Quote",
  trade_in: "Trade-In Valuation",
  finance: "Finance Enquiry",
  contact: "Contact Us",
};

const formDescriptions: Record<FormType, string> = {
  test_drive: "Experience your dream vehicle firsthand. Book your test drive today.",
  quote: "Get a personalised quote for your chosen vehicle.",
  trade_in: "Find out what your current vehicle is worth.",
  finance: "Explore flexible finance options tailored to your needs.",
  contact: "Have a question? We're here to help.",
};

export default function LeadForm({
  type,
  vehiclePreselect,
  dealershipId,
  onSuccess,
  className = "",
  compact = false,
}: LeadFormProps) {
  const getDefaultMessage = (formType: FormType, vehicle?: string) => {
    if (formType === 'test_drive' && vehicle) {
      return `I would like to book a test drive for the ${vehicle}. Please contact me to arrange a convenient time.`;
    }
    if (formType === 'quote' && vehicle) {
      return `I would like to request a quote for the ${vehicle}. Please provide pricing and available options.`;
    }
    return '';
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    vehicleInterest: vehiclePreselect || "",
    message: getDefaultMessage(type, vehiclePreselect),
    preferredContactTime: "",
    currentVehicle: "",
    currentYear: "",
    currentMileage: "",
    depositAmount: "",
    termMonths: "60",
    dealershipId: dealershipId || defaultDealership.id,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          ...formData,
          source: `Website - ${formTitles[type]}`,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      // Track the lead in GA4
      const selectedDealership = dealerships.find((d) => d.id === formData.dealershipId);
      const dealershipName = selectedDealership?.name || defaultDealership.name;

      switch (type) {
        case "test_drive":
          trackLeadTestDrive(formData.vehicleInterest, dealershipName);
          break;
        case "quote":
          trackLeadQuote(formData.vehicleInterest, dealershipName);
          break;
        case "trade_in":
          trackLeadTradeIn(formData.vehicleInterest, dealershipName);
          break;
        case "finance":
          trackLeadFinance(formData.vehicleInterest, dealershipName);
          break;
        case "contact":
          trackLeadContact(formData.message.substring(0, 50), dealershipName);
          break;
      }

      setIsSuccess(true);
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`bg-zinc-900/50 border border-white/10 rounded-2xl p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
        <p className="text-gray-400 mb-6">
          Your {formTitles[type].toLowerCase()} request has been submitted successfully.
          Our team will contact you shortly.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              vehicleInterest: vehiclePreselect || "",
              message: getDefaultMessage(type, vehiclePreselect),
              preferredContactTime: "",
              currentVehicle: "",
              currentYear: "",
              currentMileage: "",
              depositAmount: "",
              termMonths: "60",
              dealershipId: dealershipId || defaultDealership.id,
            });
          }}
          className="text-blue-400 hover:text-blue-300 font-semibold"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 ${className}`}>
      {!compact && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{formTitles[type]}</h3>
          <p className="text-gray-400">{formDescriptions[type]}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+27 82 123 4567"
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Vehicle Interest (not for contact form) */}
        {type !== "contact" && (
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Vehicle of Interest *
            </label>
            <div className="relative">
              <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <select
                name="vehicleInterest"
                required
                value={formData.vehicleInterest}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-zinc-900">Select a vehicle</option>
                {vehiclePreselect && !vehicleModels.some(m => m.label === vehiclePreselect) && (
                  <option value={vehiclePreselect} className="bg-zinc-900">
                    {vehiclePreselect}
                  </option>
                )}
                {vehicleModels.map((model) => (
                  <option key={model.value} value={model.label} className="bg-zinc-900">
                    {model.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Trade-In Specific Fields */}
        {type === "trade_in" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Current Vehicle
                </label>
                <input
                  type="text"
                  name="currentVehicle"
                  value={formData.currentVehicle}
                  onChange={handleChange}
                  placeholder="e.g. Toyota Corolla"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Year
                </label>
                <input
                  type="text"
                  name="currentYear"
                  value={formData.currentYear}
                  onChange={handleChange}
                  placeholder="e.g. 2020"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Mileage (km)
                </label>
                <input
                  type="text"
                  name="currentMileage"
                  value={formData.currentMileage}
                  onChange={handleChange}
                  placeholder="e.g. 50000"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
          </>
        )}

        {/* Finance Specific Fields */}
        {type === "finance" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                <DollarSign className="inline w-4 h-4 mr-1" />
                Deposit Amount (R)
              </label>
              <input
                type="number"
                name="depositAmount"
                value={formData.depositAmount}
                onChange={handleChange}
                placeholder="e.g. 50000"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                Term (Months)
              </label>
              <select
                name="termMonths"
                value={formData.termMonths}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="36" className="bg-zinc-900">36 months</option>
                <option value="48" className="bg-zinc-900">48 months</option>
                <option value="60" className="bg-zinc-900">60 months</option>
                <option value="72" className="bg-zinc-900">72 months</option>
              </select>
            </div>
          </div>
        )}

        {/* Test Drive - Preferred Time */}
        {type === "test_drive" && (
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              <Calendar className="inline w-4 h-4 mr-1" />
              Preferred Contact Time
            </label>
            <select
              name="preferredContactTime"
              value={formData.preferredContactTime}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-zinc-900">Any time</option>
              <option value="8am - 10am" className="bg-zinc-900">8am - 10am</option>
              <option value="10am - 12pm" className="bg-zinc-900">10am - 12pm</option>
              <option value="12pm - 2pm" className="bg-zinc-900">12pm - 2pm</option>
              <option value="2pm - 4pm" className="bg-zinc-900">2pm - 4pm</option>
            </select>
          </div>
        )}

        {/* Dealership Selection */}
        {dealerships.length > 1 && (
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Preferred Dealership
            </label>
            <select
              name="dealershipId"
              value={formData.dealershipId}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
            >
              {dealerships.map((dealer) => (
                <option key={dealer.id} value={dealer.id} className="bg-zinc-900">
                  {dealer.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {type === "contact" ? "Message *" : "Additional Notes"}
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
            <textarea
              name="message"
              required={type === "contact"}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder={type === "contact" ? "How can we help you?" : "Any specific requirements or questions?"}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>Submit {formTitles[type]}</>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our{" "}
          <a href="/legal/privacy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
