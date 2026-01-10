// Dealership Configuration
// Each dealership can be configured with its own contact details

export interface Dealership {
  id: string;
  name: string;
  email: string;
  serviceEmail?: string;
  phone: string;
  servicePhone?: string;
  usedCarPhone?: string;
  whatsapp: string;
  address: string;
  city: string;
  province: string;
  brands: string[];
  operatingHours?: {
    weekdays: string;
    saturday: string;
    sunday: string;
    publicHolidays?: string;
  };
  socialLinks?: {
    facebook?: string;
    instagram?: string;
  };
  financeLink?: string;
}

export const dealerships: Dealership[] = [
  {
    id: "thorp-plumstead",
    name: "Thorp Haval & GWM Plumstead",
    email: "info@thorphaval.co.za",
    serviceEmail: "service@thorphaval.co.za",
    phone: "+27 21 002 2282",
    servicePhone: "+27 21 761 1865",
    usedCarPhone: "+27 21 002 0444",
    whatsapp: "27210022282",
    address: "220 Main Road, Plumstead, Cape Town 7801",
    city: "Cape Town",
    province: "Western Cape",
    brands: ["GWM", "Haval"],
    operatingHours: {
      weekdays: "08H00 – 17H30",
      saturday: "09H00 – 13H00",
      sunday: "Closed",
      publicHolidays: "09H00 – 12H00",
    },
    socialLinks: {
      facebook: "https://www.facebook.com/thorphavalplumstead/",
      instagram: "https://www.instagram.com/thorphaval/",
    },
    financeLink: "https://torque.seritisolutions.co.za/app/financeapplication?CompanyCode=THPHFA&UniqueCode=B676F4EB-DDEA-4BFB-821A-60D713EA51EE",
  },
  {
    id: "thorp-tablebaymall",
    name: "Thorp Haval & GWM Table Bay Mall",
    email: "info@thorphaval.co.za",
    serviceEmail: "service@thorphaval.co.za",
    phone: "+27 21 002 0071",
    servicePhone: "+27 21 476 0210",
    usedCarPhone: "+27 21 002 2999",
    whatsapp: "27210020071",
    address: "Table Bay Mall, Berkshire Boulevard, Sunningdale, Cape Town",
    city: "Cape Town",
    province: "Western Cape",
    brands: ["GWM", "Haval"],
    operatingHours: {
      weekdays: "09H00 – 19H00",
      saturday: "09H00 – 19H00",
      sunday: "09H00 – 18H00",
      publicHolidays: "09H00 – 18H00",
    },
    socialLinks: {
      facebook: "https://www.facebook.com/thorphavaltablebaymall/",
      instagram: "https://www.instagram.com/thorpsuzuki/",
    },
    financeLink: "https://torque.seritisolutions.co.za/app/financeapplication?CompanyCode=THPHFA&UniqueCode=6BE0F5C0-A7FC-4B91-9FA8-79F4C05BF70F",
  },
];

// Default dealership for general enquiries
export const defaultDealership = dealerships[0];

// Get dealership by ID
export const getDealershipById = (id: string): Dealership | undefined => {
  return dealerships.find((d) => d.id === id);
};

// Get dealerships by brand
export const getDealershipsByBrand = (brand: string): Dealership[] => {
  return dealerships.filter((d) => d.brands.includes(brand));
};

// Vehicle models for forms
export const vehicleModels = [
  { value: "tank-500", label: "GWM Tank 500" },
  { value: "tank-300", label: "GWM Tank 300" },
  { value: "h6", label: "Haval H6" },
  { value: "h6-gt", label: "Haval H6 GT" },
  { value: "h6-gt-phev", label: "Haval H6 GT PHEV" },
  { value: "jolion", label: "Haval Jolion" },
  { value: "jolion-pro", label: "Haval Jolion Pro" },
  { value: "jolion-s", label: "Haval Jolion S" },
  { value: "jolion-hev", label: "Haval Jolion HEV" },
  { value: "h7", label: "Haval H7" },
  { value: "ora-03", label: "GWM Ora 03 EV" },
  { value: "p-series", label: "GWM P-Series" },
  { value: "steed-5", label: "GWM Steed 5" },
  { value: "other", label: "Other / Not Sure" },
];
