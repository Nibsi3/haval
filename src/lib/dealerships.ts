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
    id: "maritime-george",
    name: "Maritime George",
    email: "george@maritimemotors.co.za",
    phone: "+27 44 803 7900",
    whatsapp: "27448037900",
    address: "44 C.J. Langenhoven Rd, George Central",
    city: "George",
    province: "Western Cape",
    brands: ["GWM", "Haval"],
  },
  {
    id: "maritime-motors",
    name: "Maritime Motors",
    email: "sales@maritimemotors.co.za",
    phone: "+27 41 399 2800",
    whatsapp: "27413992800",
    address: "Cnr. William Moffett Expressway & Circular Dr, Overbaakens",
    city: "Gqeberha",
    province: "Eastern Cape",
    brands: ["GWM", "Haval"],
  },
  {
    id: "maritime-commercial",
    name: "Maritime Commercial",
    email: "commercial@maritimemotors.co.za",
    phone: "+27 41 408 6600",
    whatsapp: "27414086600",
    address: "111 Grahamstown Rd, North End",
    city: "Gqeberha",
    province: "Eastern Cape",
    brands: ["GWM", "Haval"],
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
