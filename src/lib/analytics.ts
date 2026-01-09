// Google Analytics 4 Event Tracking Utility
// All lead generation events for tracking and reporting

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// Lead Generation Events
export const trackLeadTestDrive = (vehicleInterest?: string, dealership?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "lead_test_drive", {
      event_category: "Lead Generation",
      event_label: vehicleInterest || "General",
      dealership: dealership || "Maritime Group",
      value: 1,
    });
  }
};

export const trackLeadQuote = (vehicleInterest?: string, dealership?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "lead_quote", {
      event_category: "Lead Generation",
      event_label: vehicleInterest || "General",
      dealership: dealership || "Maritime Group",
      value: 1,
    });
  }
};

export const trackLeadTradeIn = (vehicleInterest?: string, dealership?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "lead_trade_in", {
      event_category: "Lead Generation",
      event_label: vehicleInterest || "General",
      dealership: dealership || "Maritime Group",
      value: 1,
    });
  }
};

export const trackLeadFinance = (vehicleInterest?: string, dealership?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "lead_finance", {
      event_category: "Lead Generation",
      event_label: vehicleInterest || "General",
      dealership: dealership || "Maritime Group",
      value: 1,
    });
  }
};

export const trackLeadContact = (subject?: string, dealership?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "lead_contact", {
      event_category: "Lead Generation",
      event_label: subject || "General Enquiry",
      dealership: dealership || "Maritime Group",
      value: 1,
    });
  }
};

// Click-to-Call Tracking
export const trackClickCall = (phoneNumber?: string, location?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click_call", {
      event_category: "Engagement",
      event_label: phoneNumber || "Phone Call",
      location: location || "Unknown",
      value: 1,
    });
  }
};

// WhatsApp Click Tracking
export const trackClickWhatsApp = (location?: string, vehicleInterest?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click_whatsapp", {
      event_category: "Engagement",
      event_label: vehicleInterest || "General",
      location: location || "Unknown",
      value: 1,
    });
  }
};

// Form Submission Event (generic)
export const trackFormSubmission = (
  formType: string,
  vehicleInterest?: string,
  dealership?: string
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submission", {
      event_category: "Lead Generation",
      form_type: formType,
      event_label: vehicleInterest || "General",
      dealership: dealership || "Maritime Group",
      value: 1,
    });
  }
};

// Page View Tracking (for SPA navigation)
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Vehicle View Tracking
export const trackVehicleView = (vehicleName: string, vehicleModel: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "view_item", {
      event_category: "Vehicle Interest",
      event_label: `${vehicleName} ${vehicleModel}`,
      item_name: `${vehicleName} ${vehicleModel}`,
    });
  }
};

// Brochure Download Tracking
export const trackBrochureDownload = (vehicleName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "file_download", {
      event_category: "Engagement",
      event_label: vehicleName,
      file_name: `${vehicleName} Brochure`,
    });
  }
};
