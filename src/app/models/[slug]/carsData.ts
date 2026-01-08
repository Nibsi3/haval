export interface SpecSection {
  title: string;
  items: string[];
}

export interface Variant {
  name: string;
  price: string;
  engine: string;
  power: string;
  torque: string;
  transmission: string;
  drive: string;
  fuelConsumption: string;
  dimensions?: string;
  grade?: string;
  keyFeatures: string[];
  detailedSpecs?: SpecSection[];
}

export interface SpecCategory {
  category: string;
  specs: { label: string; value: string }[];
}

export interface CarData {
  name: string;
  model: string;
  tagline: string;
  longDescription: string;
  heroImage: string;
  galleryFolder: string;
  brochureUrl: string;
  variants: Variant[];
  specCategories: SpecCategory[];
  standardFeatures: string[];
  safetyFeatures: string[];
  dimensions: { label: string; value: string }[];
  exteriorImages: number[];
  interiorImages: number[];
  detailImages: number[];
}

export const MODEL_SLUGS = ['tank-300', 'h6', 'h6-gt', 'jolion', 'h7'];

export const carsData: Record<string, CarData> = {
  'tank-300': {
    name: 'GWM',
    model: 'TANK 300',
    tagline: 'Born for Adventure',
    longDescription: 'The GWM Tank 300 is a revolutionary off-road SUV that combines retro-futuristic design with cutting-edge technology. Built on GWM dedicated tank platform, it features an intelligent 4WD system with 9 terrain modes, a robust 2.0L turbocharged engine paired with an 8-speed ZF automatic transmission, and a premium interior.',
    heroImage: '/brochures/tank-300/0.jpg',
    galleryFolder: '/brochures/tank-300',
    brochureUrl: '/brochures/Haval Tank 300.pdf',
    exteriorImages: [1, 4, 5, 90, 91],
    interiorImages: [8, 9],
    detailImages: [7, 11, 12, 60, 13],
    variants: [
      {
        name: 'Tank 300 Premium',
        price: 'R 799,900',
        engine: '2.0L Turbo',
        power: '167 kW @ 5,500 rpm',
        torque: '387 Nm @ 1,800-3,600 rpm',
        transmission: '8-Speed ZF Automatic',
        drive: 'Intelligent 4WD',
        fuelConsumption: '9.4 L/100km',
        dimensions: '4,760 x 1,930 x 1,903 mm',
        grade: 'Premium',
        keyFeatures: ['12.3" Dual Screens', 'Leather Seats', '360° Camera', 'Front & Rear Diff Locks', '9 Terrain Modes', 'Adaptive Cruise Control'],
        detailedSpecs: [
          { title: 'Off-Road Capability', items: ['Intelligent 4WD System', 'Front & Rear Differential Locks', '9 Terrain Modes', 'Hill Descent Control', 'Hill Start Assist', '224mm Ground Clearance', '700mm Wading Depth'] },
          { title: 'Exterior', items: ['18" Alloy Wheels', 'LED Headlights', 'LED Tail Lights', 'Roof Rails', 'Electric Tailgate', 'Rain-Sensing Wipers'] },
          { title: 'Interior', items: ['Leather Seats', '12.3" Digital Cluster', '12.3" Touchscreen', 'Dual-Zone Climate', 'Keyless Entry', '6-Way Electric Driver Seat'] },
          { title: 'Safety', items: ['6 Airbags', 'ESC', 'ABS with EBD', 'Adaptive Cruise', 'Lane Keep Assist', 'AEB', '360° Camera'] },
          { title: 'Warranty', items: ['5 Years / 100,000 km Warranty', '5 Years Roadside Assistance', '5 Years / 60,000 km Service Plan'] }
        ]
      },
      {
        name: 'Tank 300 Ultra',
        price: 'R 899,900',
        engine: '2.0L Turbo',
        power: '167 kW @ 5,500 rpm',
        torque: '387 Nm @ 1,800-3,600 rpm',
        transmission: '8-Speed ZF Automatic',
        drive: 'Intelligent 4WD',
        fuelConsumption: '9.4 L/100km',
        dimensions: '4,760 x 1,930 x 1,903 mm',
        grade: 'Ultra',
        keyFeatures: ['All Premium Features +', 'Nappa Leather', 'Heated & Ventilated Seats', 'Premium Sound', 'Wireless Charging', 'Head-Up Display', 'Panoramic Sunroof'],
        detailedSpecs: [
          { title: 'Off-Road Capability', items: ['Intelligent 4WD System', 'Front & Rear Differential Locks', '9 Terrain Modes', 'Tank Turn (Ultra Exclusive)', 'Hill Descent Control', '224mm Ground Clearance'] },
          { title: 'Exterior', items: ['18" Alloy Wheels', 'LED Headlights', 'Panoramic Sunroof', 'Electric Tailgate with Hands-Free'] },
          { title: 'Interior', items: ['Nappa Leather Seats', 'Heated & Ventilated Front Seats', 'Head-Up Display', 'Wireless Charger', '64-Colour Ambient Lighting'] },
          { title: 'Safety', items: ['6 Airbags', 'ESC', 'Adaptive Cruise with Stop & Go', 'Lane Centering', 'AEB', '360° Camera with 3D View', 'Driver Fatigue Alert'] },
          { title: 'Warranty', items: ['5 Years / 100,000 km Warranty', '5 Years Roadside Assistance', '5 Years / 60,000 km Service Plan'] }
        ]
      },
    ],
    specCategories: [
      { category: 'Engine & Performance', specs: [
        { label: 'Engine Type', value: '2.0L Turbocharged 4-Cylinder' },
        { label: 'Maximum Power', value: '167 kW @ 5,500 rpm' },
        { label: 'Maximum Torque', value: '387 Nm @ 1,800-3,600 rpm' },
        { label: 'Transmission', value: '8-Speed ZF Automatic' },
        { label: 'Drive Type', value: 'Intelligent 4WD' },
        { label: 'Consumption', value: '9.4 L/100km' },
      ]},
    ],
    standardFeatures: ['12.3" Digital Cluster', '12.3" Touchscreen', 'Apple CarPlay & Android Auto', 'Leather Seats', '360° Camera', 'Parking Sensors', 'Keyless Entry', 'Dual-Zone Climate', 'LED Lights', '18" Alloys', 'Electric Tailgate'],
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'ESC', 'Hill Start Assist', 'Hill Descent Control', 'Adaptive Cruise', 'Lane Keep Assist', 'Forward Collision Warning', 'AEB', 'Blind Spot Monitor', 'ISOFIX'],
    dimensions: [
      { label: 'Length', value: '4,760mm' },
      { label: 'Width', value: '1,930mm' },
      { label: 'Height', value: '1,903mm' },
      { label: 'Wheelbase', value: '2,750mm' },
      { label: 'Boot', value: '724L' },
      { label: 'Towing', value: '2,500kg' },
    ],
  },
  'h6': {
    name: 'HAVAL',
    model: 'H6',
    tagline: 'Intelligent Luxury SUV',
    longDescription: 'The HAVAL H6 has earned its reputation as the world best-selling SUV. This intelligent luxury SUV combines sophisticated design with advanced technology, offering L2 autonomous driving, panoramic sunroof, and a premium interior.',
    heroImage: '/brochures/h6/0.jpg',
    galleryFolder: '/brochures/h6',
    brochureUrl: '/brochures/Haval H6.pdf',
    exteriorImages: [2, 6, 7, 1, 3],
    interiorImages: [4, 5],
    detailImages: [10, 11, 12, 13, 14],
    variants: [
      {
        name: 'H6 Luxury',
        price: 'R 549,900',
        engine: '2.0L Turbo',
        power: '155 kW @ 5,500 rpm',
        torque: '325 Nm @ 1,500-4,000 rpm',
        transmission: '7DCT',
        drive: 'FWD',
        fuelConsumption: '7.8 L/100km',
        grade: 'Luxury',
        keyFeatures: ['10.25" Touchscreen', 'Leather Seats', 'Panoramic Sunroof', '19" Alloys', 'LED Headlights', 'Parking Sensors'],
        detailedSpecs: [
          { title: 'Exterior', items: ['19" Alloy Wheels', 'LED Headlights', 'Panoramic Sunroof', 'Rain-Sensing Wipers', 'Electric Folding Mirrors'] },
          { title: 'Interior', items: ['Leather Seats', 'Keyless Entry', '6-Way Electric Driver Seat', 'Dual-Zone Climate Control'] },
          { title: 'Safety', items: ['6 Airbags', 'ESC', 'Hill Start Assist', 'Rear View Camera', 'ISOFIX'] },
          { title: 'Warranty', items: ['7 Years / 200,000 km Warranty', '7 Years Roadside Assistance', '7 Years / 75,000 km Service Plan'] }
        ]
      },
      {
        name: 'H6 Super Luxury',
        price: 'R 599,900',
        engine: '2.0L Turbo',
        power: '155 kW @ 5,500 rpm',
        torque: '325 Nm @ 1,500-4,000 rpm',
        transmission: '7DCT',
        drive: 'FWD',
        fuelConsumption: '7.8 L/100km',
        grade: 'Super Luxury',
        keyFeatures: ['All Luxury Features +', '360° Camera', 'Heated Seats', 'Wireless Charging', 'Electric Tailgate', 'Premium Sound'],
        detailedSpecs: [
          { title: 'Exterior', items: ['19" Alloy Wheels', 'LED Headlights with Auto Leveling', 'Panoramic Sunroof', 'Electric Tailgate'] },
          { title: 'Interior', items: ['Leather Seats', 'Heated Front Seats', 'Wireless Phone Charger', 'Ambient Lighting'] },
          { title: 'Safety', items: ['6 Airbags', 'ESC', '360° Camera', 'Lane Keep Assist', 'Blind Spot Detection', 'AEB'] },
          { title: 'Warranty', items: ['7 Years / 200,000 km Warranty', '7 Years Roadside Assistance', '7 Years / 75,000 km Service Plan'] }
        ]
      },
    ],
    specCategories: [
      { category: 'Engine & Performance', specs: [
        { label: 'Engine Type', value: '2.0L Turbocharged' },
        { label: 'Maximum Power', value: '155 kW @ 5,500 rpm' },
        { label: 'Maximum Torque', value: '325 Nm @ 1,500-4,000 rpm' },
        { label: 'Transmission', value: '7-Speed DCT' },
        { label: 'Consumption', value: '7.8 L/100km' },
      ]},
    ],
    standardFeatures: ['10.25" Digital Cluster', '10.25" Touchscreen', 'Apple CarPlay & Android Auto', 'Leather Seats', 'Panoramic Sunroof', 'LED Lights', '19" Alloys', 'Keyless Entry'],
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'ESC', 'Hill Start Assist', 'Adaptive Cruise', 'Lane Departure Warning', 'AEB', 'ISOFIX'],
    dimensions: [
      { label: 'Length', value: '4,653mm' },
      { label: 'Width', value: '1,886mm' },
      { label: 'Height', value: '1,730mm' },
      { label: 'Wheelbase', value: '2,738mm' },
      { label: 'Boot', value: '600L' },
    ],
  },
  'h6-gt': {
    name: 'HAVAL',
    model: 'H6 GT',
    tagline: 'Sporty Performance SUV',
    longDescription: 'The HAVAL H6 GT takes the award-winning H6 platform and adds a sporty coupe-inspired roofline. This performance-oriented SUV maintains all the practicality while adding dynamic driving experience.',
    heroImage: '/brochures/h6-gt/0.jpg',
    galleryFolder: '/brochures/h6-gt',
    brochureUrl: '/brochures/Haval H6 GT.pdf',
    exteriorImages: [1, 5, 18, 2, 3],
    interiorImages: [10, 8, 9],
    detailImages: [4, 20, 21, 24, 25],
    variants: [
      {
        name: 'H6 GT Super Luxury',
        price: 'R 649,900',
        engine: '2.0L Turbo',
        power: '155 kW @ 6,000-6,300 rpm',
        torque: '325 Nm @ 1,500-4,000 rpm',
        transmission: '7DCT',
        drive: '4WD',
        fuelConsumption: '7.9 L/100km',
        grade: 'Super Luxury',
        keyFeatures: ['Coupe Roofline', '12.3" Dual Screens', 'Sport Suspension', '19" Alloys', 'Ambient Lighting', 'Sport Seats', 'Head-Up Display', '360° Camera'],
        detailedSpecs: [
          { title: 'Exterior', items: ['Aerodynamic Kit', '19" Sport Alloy Wheels', 'Panoramic Sunroof', 'Auto Lift Tailgate'] },
          { title: 'Interior', items: ['Sport Leather Seats', 'Wireless Charger', 'Heated Front Seats', 'Paddle Shift', 'Alcantara Inserts'] },
          { title: 'Safety', items: ['6 Airbags', 'ESC', '360° Camera', 'Adaptive Cruise', 'Lane Keep Assist', 'AEB', 'Head-Up Display'] },
          { title: 'Warranty', items: ['7 Years / 200,000 km Warranty', '7 Years Roadside Assistance', '7 Years / 75,000 km Service Plan'] }
        ]
      },
    ],
    specCategories: [
      { category: 'Engine & Performance', specs: [
        { label: 'Engine Type', value: '2.0L Turbocharged' },
        { label: 'Maximum Power', value: '155 kW @ 6,000-6,300 rpm' },
        { label: 'Maximum Torque', value: '325 Nm @ 1,500-4,000 rpm' },
        { label: 'Transmission', value: '7DCT' },
        { label: 'Drivetrain', value: '4WD' },
        { label: 'Consumption', value: '7.9 L/100km' },
      ]},
    ],
    standardFeatures: ['12.3" Digital Cluster', '12.3" Touchscreen', 'Coupe Roofline', 'Sport Suspension', '19" Alloys', 'Sport Seats', 'Ambient Lighting', '360° Camera', 'Electric Tailgate'],
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'ESC', 'Adaptive Cruise', 'Lane Keep Assist', 'AEB', 'Blind Spot Monitor'],
    dimensions: [
      { label: 'Length', value: '4,727mm' },
      { label: 'Width', value: '1,886mm' },
      { label: 'Height', value: '1,696mm' },
      { label: 'Wheelbase', value: '2,738mm' },
      { label: 'Boot', value: '485L' },
    ],
  },
  'jolion': {
    name: 'HAVAL',
    model: 'JOLION',
    tagline: 'Smart Urban Crossover',
    longDescription: 'The HAVAL Jolion is the smart choice for urban explorers. This compact crossover delivers excellent fuel efficiency, easy maneuverability, and surprising interior space.',
    heroImage: '/brochures/jolion/0.jpg',
    galleryFolder: '/brochures/jolion',
    brochureUrl: '/brochures/Haval Jollion Pro.pdf',
    exteriorImages: [1, 2, 4, 21, 28],
    interiorImages: [5, 6, 7, 8],
    detailImages: [12, 13, 14, 15, 27],
    variants: [
      {
        name: 'Jolion',
        price: 'R 379,900',
        engine: '1.5L Turbo',
        power: '105 kW @ 5,600 rpm',
        torque: '210 Nm @ 2,000-4,000 rpm',
        transmission: '6MT',
        drive: 'FWD',
        fuelConsumption: '6.9 L/100km',
        grade: 'Standard',
        keyFeatures: ['10.25" Touchscreen', 'LED Headlights', 'Cruise Control', '17" Alloys', 'Rear Camera', 'Parking Sensors'],
        detailedSpecs: [
          { title: 'Exterior', items: ['17" Alloy Wheels', 'LED Headlights', 'Roof Rails'] },
          { title: 'Interior', items: ['Fabric Seats', 'Manual Air Conditioning', '60:40 Split Rear Seats'] },
          { title: 'Safety', items: ['6 Airbags', 'ABS with EBD', 'ESC', 'Rear Camera', 'ISOFIX'] },
          { title: 'Warranty', items: ['7 Years / 200,000 km Warranty', '7 Years Roadside Assistance', '7 Years / 75,000 km Service Plan'] }
        ]
      },
      {
        name: 'Jolion Premium',
        price: 'R 399,900',
        engine: '1.5L Turbo',
        power: '105 kW @ 5,600 rpm',
        torque: '210 Nm @ 2,000-4,000 rpm',
        transmission: '7DCT',
        drive: 'FWD',
        fuelConsumption: '7.1 L/100km',
        grade: 'Premium',
        keyFeatures: ['All Base Features +', 'Leather Seats', 'Panoramic Sunroof', 'Auto Climate', 'Push Start', '360° Camera'],
        detailedSpecs: [
          { title: 'Exterior', items: ['17" Alloy Wheels', 'LED Headlights', 'Panoramic Sunroof'] },
          { title: 'Interior', items: ['Leather Seats', 'Automatic Climate Control', 'Keyless Entry'] },
          { title: 'Safety', items: ['6 Airbags', 'ESC', '360° Camera', 'Lane Departure Warning'] },
          { title: 'Warranty', items: ['7 Years / 200,000 km Warranty', '7 Years Roadside Assistance', '7 Years / 75,000 km Service Plan'] }
        ]
      },
      {
        name: 'Jolion S',
        price: 'R 429,900',
        engine: '1.5L Turbo',
        power: '110 kW @ 5,600 rpm',
        torque: '220 Nm @ 2,000-4,000 rpm',
        transmission: '7DCT',
        drive: 'FWD',
        fuelConsumption: '7.2 L/100km',
        grade: 'S (Sport)',
        keyFeatures: ['All Premium Features +', 'Sport Styling', '18" Alloys', 'Sport Seats', 'Upgraded Sound', 'Ambient Lighting'],
        detailedSpecs: [
          { title: 'Exterior', items: ['18" Sport Alloy Wheels', 'Sport Body Kit', 'Gloss Black Accents'] },
          { title: 'Interior', items: ['Sport Leather Seats', 'Ambient Lighting', 'Sport Pedals'] },
          { title: 'Safety', items: ['6 Airbags', 'ESC', '360° Camera', 'Lane Keep Assist', 'Blind Spot Detection'] },
          { title: 'Warranty', items: ['7 Years / 200,000 km Warranty', '7 Years Roadside Assistance', '7 Years / 75,000 km Service Plan'] }
        ]
      },
    ],
    specCategories: [
      { category: 'Engine & Performance', specs: [
        { label: 'Engine Type', value: '1.5L Turbocharged' },
        { label: 'Power', value: '105-110 kW' },
        { label: 'Torque', value: '210-220 Nm' },
        { label: 'Transmission', value: '6MT / 7-Speed DCT' },
        { label: 'Consumption', value: '6.9-7.2 L/100km' },
      ]},
    ],
    standardFeatures: ['10.25" Touchscreen', 'Apple CarPlay & Android Auto', 'LED Headlights', 'Cruise Control', 'Rear Camera', 'Parking Sensors'],
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'ESC', 'Hill Start Assist', 'Rear Camera', 'ISOFIX'],
    dimensions: [
      { label: 'Length', value: '4,472mm' },
      { label: 'Width', value: '1,841mm' },
      { label: 'Height', value: '1,619mm' },
      { label: 'Wheelbase', value: '2,700mm' },
      { label: 'Boot', value: '437L' },
    ],
  },
  'h7': {
    name: 'HAVAL',
    model: 'H7',
    tagline: 'Premium 7-Seater SUV',
    longDescription: 'The HAVAL H7 is the flagship of versatility, offering genuine 7-seater accommodation without compromising on comfort or features. Perfect for growing families.',
    heroImage: '/brochures/h7/0.jpg',
    galleryFolder: '/brochures/h7',
    brochureUrl: '/brochures/Haval H7.pdf',
    exteriorImages: [1, 4, 5, 8, 20],
    interiorImages: [19, 3, 6],
    detailImages: [24, 21, 22, 17, 18],
    variants: [
      {
        name: 'H7 Super Luxury',
        price: 'R 699,900',
        engine: '2.0L Turbo',
        power: '155 kW @ 5,500 rpm',
        torque: '325 Nm @ 1,500-4,000 rpm',
        transmission: '7DCT',
        drive: 'FWD',
        fuelConsumption: '8.5 L/100km',
        grade: 'Super Luxury',
        keyFeatures: ['7 Seats', '12.3" Dual Screens', 'Leather Seats', 'Panoramic Sunroof', '360° Camera', 'Electric Tailgate', 'Third Row Air Vents', 'Premium Sound'],
        detailedSpecs: [
          { title: 'Seating', items: ['7-Seater (2+3+2)', 'Second Row 60:40 Split', 'Third Row 50:50 Split', 'Third Row Air Vents'] },
          { title: 'Exterior', items: ['19" Alloy Wheels', 'LED Headlights', 'Panoramic Sunroof', 'Electric Tailgate'] },
          { title: 'Interior', items: ['Leather Seats', 'Heated & Ventilated Front Seats', 'Wireless Charger', 'Ambient Lighting'] },
          { title: 'Safety', items: ['6 Airbags', 'ESC', '360° Camera', 'Adaptive Cruise', 'Lane Keep Assist', 'AEB', 'ISOFIX x3'] },
          { title: 'Warranty', items: ['7 Years / 200,000 km Warranty', '7 Years Roadside Assistance', '7 Years / 75,000 km Service Plan'] }
        ]
      },
    ],
    specCategories: [
      { category: 'Engine & Performance', specs: [
        { label: 'Engine Type', value: '2.0L Turbocharged' },
        { label: 'Maximum Power', value: '155 kW @ 5,500 rpm' },
        { label: 'Maximum Torque', value: '325 Nm @ 1,500-4,000 rpm' },
        { label: 'Transmission', value: '7-Speed DCT' },
        { label: 'Consumption', value: '8.5 L/100km' },
      ]},
    ],
    standardFeatures: ['7-Seater Configuration', '12.3" Digital Cluster', '12.3" Touchscreen', 'Leather Seats', 'Panoramic Sunroof', 'Third Row Air Vents', '360° Camera', 'Electric Tailgate'],
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'ESC', 'Adaptive Cruise', 'Lane Keep Assist', 'AEB', 'Blind Spot Monitor', 'ISOFIX x3'],
    dimensions: [
      { label: 'Length', value: '4,910mm' },
      { label: 'Width', value: '1,905mm' },
      { label: 'Height', value: '1,780mm' },
      { label: 'Wheelbase', value: '2,850mm' },
      { label: 'Boot (7-seat)', value: '238L' },
    ],
  },
};
