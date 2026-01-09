"use client";

import { Phone, MessageCircle } from "lucide-react";
import { trackClickCall, trackClickWhatsApp } from "@/lib/analytics";

interface TrackedPhoneProps {
  phone: string;
  location?: string;
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

interface TrackedWhatsAppProps {
  whatsappNumber: string;
  message?: string;
  location?: string;
  vehicleInterest?: string;
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

// Click-to-Call with GA4 tracking
export function TrackedPhone({
  phone,
  location = "Unknown",
  className = "",
  showIcon = true,
  children,
}: TrackedPhoneProps) {
  const handleClick = () => {
    trackClickCall(phone, location);
  };

  // Format phone for tel: link
  const telLink = phone.replace(/\s/g, "").replace(/^\+/, "");

  return (
    <a
      href={`tel:${phone}`}
      onClick={handleClick}
      className={className}
    >
      {children || (
        <span className="inline-flex items-center gap-2">
          {showIcon && <Phone className="w-4 h-4" />}
          {phone}
        </span>
      )}
    </a>
  );
}

// WhatsApp with GA4 tracking
export function TrackedWhatsApp({
  whatsappNumber,
  message = "Hi, I'm interested in learning more about your vehicles.",
  location = "Unknown",
  vehicleInterest,
  className = "",
  showIcon = true,
  children,
}: TrackedWhatsAppProps) {
  const handleClick = () => {
    trackClickWhatsApp(location, vehicleInterest);
  };

  // Format WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children || (
        <span className="inline-flex items-center gap-2">
          {showIcon && <MessageCircle className="w-4 h-4" />}
          WhatsApp
        </span>
      )}
    </a>
  );
}

// Floating WhatsApp Button - Dark theme matching site
export function FloatingWhatsApp({
  whatsappNumber,
  message = "Hi, I'm interested in learning more about your vehicles.",
}: {
  whatsappNumber: string;
  message?: string;
}) {
  const handleClick = () => {
    trackClickWhatsApp("Floating Button", undefined);
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white fill-current"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// Call-to-Action Bar (fixed bottom on mobile)
export function ContactBar({
  phone,
  whatsappNumber,
}: {
  phone: string;
  whatsappNumber: string;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-900/95 backdrop-blur-sm border-t border-white/10 p-3 md:hidden">
      <div className="flex gap-3">
        <TrackedPhone
          phone={phone}
          location="Mobile Contact Bar"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </TrackedPhone>
        <TrackedWhatsApp
          whatsappNumber={whatsappNumber}
          location="Mobile Contact Bar"
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl font-semibold transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </TrackedWhatsApp>
      </div>
    </div>
  );
}
