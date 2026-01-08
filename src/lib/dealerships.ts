// Dealership Configuration
// Each dealership can be configured with its own contact details

export interface Dealership {
  id: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  province: string;
  brands: string[];
}

export const dealerships: Dealership[] = [
  {
    id: "maritime-motors-pe",
    name: "Maritime Motors Port Elizabeth",
    email: "sales@maritimemotors.co.za",
    phone: "+27 41 363 1518",
    whatsapp: "27413631518",
    address: "1 Ring Road, Greenacres",
    city: "Port Elizabeth",
    province: "Eastern Cape",
    brands: ["GWM", "Haval", "Mercedes-Benz"],
  },
  {
    id: "maritime-motors-uitenhage",
    name: "Maritime Motors Uitenhage",
    email: "uitenhage@maritimemotors.co.za",
    phone: "+27 41 992 1234",
    whatsapp: "27419921234",
    address: "123 Main Street",
    city: "Uitenhage",
    province: "Eastern Cape",
    brands: ["GWM", "Haval"],
  },
  {
    id: "kia-nmb",
    name: "Kia Nelson Mandela Bay",
    email: "kia@maritimegroup.co.za",
    phone: "+27 41 363 2000",
    whatsapp: "27413632000",
    address: "Ring Road, Greenacres",
    city: "Port Elizabeth",
    province: "Eastern Cape",
    brands: ["Kia"],
  },
  {
    id: "honda-nmb",
    name: "Honda Nelson Mandela Bay",
    email: "honda@maritimegroup.co.za",
    phone: "+27 41 363 3000",
    whatsapp: "27413633000",
    address: "Ring Road, Greenacres",
    city: "Port Elizabeth",
    province: "Eastern Cape",
    brands: ["Honda"],
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
  { value: "tank-300", label: "GWM Tank 300" },
  { value: "h6", label: "Haval H6" },
  { value: "h6-gt", label: "Haval H6 GT" },
  { value: "jolion", label: "Haval Jolion" },
  { value: "h7", label: "Haval H7" },
  { value: "other", label: "Other / Not Sure" },
];
