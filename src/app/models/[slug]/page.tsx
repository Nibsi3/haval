"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import ImageLightbox from '@/components/ImageLightbox';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface SpecSection {
  title: string;
  items: string[];
}

interface Variant {
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

interface SpecCategory {
  category: string;
  specs: { label: string; value: string }[];
}

interface CarData {
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

const carsData: Record<string, CarData> = {
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
          {
            title: 'Off-Road Capability',
            items: ['Intelligent 4WD System', 'Front & Rear Differential Locks', '9 Terrain Modes (Standard, Sport, Mud, Sand, Snow, 4L, Rock, Expert, ECO)', 'Hill Descent Control (HDC)', 'Hill Start Assist (HSA)', '224mm Ground Clearance', '33° Approach Angle', '34° Departure Angle', '700mm Wading Depth']
          },
          {
            title: 'Exterior',
            items: ['18" Alloy Wheels', 'LED Headlights with Auto Leveling', 'LED Daytime Running Lights', 'LED Tail Lights', 'Roof Rails', 'Electric Tailgate', 'Rain-Sensing Wipers', 'Heated Exterior Mirrors', 'Spare Wheel Mounted on Tailgate']
          },
          {
            title: 'Interior',
            items: ['Leather Seats', '12.3" Digital Cluster', '12.3" Touchscreen Infotainment', 'Dual-Zone Automatic Climate Control', 'Keyless Entry & Push Button Start', '6-Way Electric Driver Seat', '4-Way Electric Passenger Seat', '60:40 Split Folding Rear Seats', 'Leather Steering Wheel', 'Ambient Lighting']
          },
          {
            title: 'Safety & Security',
            items: ['6 Airbags: Dual Front, Side & Curtain', 'Electronic Stability Control (ESC)', 'Traction Control System (TCS)', 'Anti-lock Braking System (ABS) with EBD', 'Adaptive Cruise Control', 'Lane Keep Assist', 'Forward Collision Warning', 'Automatic Emergency Braking (AEB)', 'Blind Spot Detection', '360° Surround View Camera', 'Front & Rear Parking Sensors', 'ISOFIX Child Seat Anchors']
          },
          {
            title: 'Infotainment',
            items: ['12.3" Touchscreen Display', 'Apple CarPlay & Android Auto', 'Bluetooth Connectivity', '6 Speaker Sound System', 'USB Ports (Front & Rear)', 'Voice Recognition']
          },
          {
            title: 'Warranty',
            items: ['Warranty – 5 Years / 100,000 km', 'Roadside Assistance – 5 Years / Unlimited km', 'Service Plan – 5 Years / 60,000 km', 'Service Intervals – 12 Months / 15,000 km']
          }
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
          {
            title: 'Off-Road Capability',
            items: ['Intelligent 4WD System', 'Front & Rear Differential Locks', '9 Terrain Modes (Standard, Sport, Mud, Sand, Snow, 4L, Rock, Expert, ECO)', 'Hill Descent Control (HDC)', 'Hill Start Assist (HSA)', '224mm Ground Clearance', '33° Approach Angle', '34° Departure Angle', '700mm Wading Depth', 'Tank Turn (Ultra Exclusive)']
          },
          {
            title: 'Exterior',
            items: ['18" Alloy Wheels', 'LED Headlights with Auto Leveling', 'LED Daytime Running Lights', 'LED Tail Lights', 'Roof Rails', 'Electric Tailgate with Hands-Free', 'Rain-Sensing Wipers', 'Heated & Folding Exterior Mirrors', 'Spare Wheel Mounted on Tailgate', 'Panoramic Sunroof']
          },
          {
            title: 'Interior',
            items: ['Nappa Leather Seats', 'Heated & Ventilated Front Seats', 'Heated Rear Seats', '12.3" Digital Cluster', '12.3" Touchscreen Infotainment', 'Head-Up Display', 'Wireless Phone Charger', 'Dual-Zone Automatic Climate Control', 'Keyless Entry & Push Button Start', '8-Way Electric Driver Seat with Memory', '6-Way Electric Passenger Seat', '60:40 Split Folding Rear Seats', 'Leather Steering Wheel with Heating', 'Premium Ambient Lighting', '64-Colour Interior Lighting']
          },
          {
            title: 'Safety & Security',
            items: ['6 Airbags: Dual Front, Side & Curtain', 'Electronic Stability Control (ESC)', 'Traction Control System (TCS)', 'Anti-lock Braking System (ABS) with EBD', 'Adaptive Cruise Control with Stop & Go', 'Lane Keep Assist', 'Lane Centering', 'Forward Collision Warning', 'Automatic Emergency Braking (AEB)', 'Blind Spot Detection', 'Rear Cross Traffic Alert', '360° Surround View Camera with 3D View', 'Front & Rear Parking Sensors', 'Driver Fatigue Alert', 'ISOFIX Child Seat Anchors']
          },
          {
            title: 'Infotainment',
            items: ['12.3" Touchscreen Display', 'Apple CarPlay & Android Auto', 'Bluetooth Connectivity', 'Infinity Premium Sound System (12 Speakers)', 'USB Ports (Front & Rear)', 'Voice Recognition', 'Connected Car Services']
          },
          {
            title: 'Warranty',
            items: ['Warranty – 5 Years / 100,000 km', 'Roadside Assistance – 5 Years / Unlimited km', 'Service Plan – 5 Years / 60,000 km', 'Service Intervals – 12 Months / 15,000 km']
          }
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
        { label: 'Fuel Tank', value: '80 Litres' },
        { label: 'Consumption', value: '9.4 L/100km' },
      ]},
      { category: 'Off-Road Capability', specs: [
        { label: 'Ground Clearance', value: '224mm' },
        { label: 'Approach Angle', value: '33°' },
        { label: 'Departure Angle', value: '34°' },
        { label: 'Wading Depth', value: '700mm' },
        { label: 'Terrain Modes', value: '9 Modes' },
        { label: 'Diff Locks', value: 'Front & Rear' },
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
    longDescription: 'The HAVAL H6 has earned its reputation as the world best-selling SUV. This intelligent luxury SUV combines sophisticated design with advanced technology, offering L2 autonomous driving, panoramic sunroof, and a premium interior that rivals vehicles twice its price.',
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
        dimensions: '4,653 x 1,886 x 1,730 mm',
        grade: 'Luxury',
        keyFeatures: ['10.25" Touchscreen', 'Leather Seats', 'Panoramic Sunroof', '19" Alloys', 'LED Headlights', 'Parking Sensors'],
        detailedSpecs: [
          { title: 'Steering & Driving', items: ['Electronic Parking Brake', 'Auto Hold', 'Tilt & Telescopic Steering', 'Front McPherson & Rear Multi-Link Suspension', 'Driving Modes (Eco, Standard, Sport)', 'Speed Sensitive Electric Steering'] },
          { title: 'Exterior', items: ['19" Alloy Wheels', 'LED Headlights', 'LED Daytime Running Lights', 'LED Tail Lights', 'Panoramic Sunroof', 'Rain-Sensing Wipers', 'Electric Folding Mirrors'] },
          { title: 'Interior', items: ['Leather Seats', 'Keyless Entry & Push Button Start', '6-Way Electric Driver Seat', '4-Way Electric Passenger Seat', '60:40 Split Folding Rear Seats', 'Dual-Zone Climate Control', 'Rear Air Vents'] },
          { title: 'Safety & Security', items: ['6 Airbags', 'ESC & Traction Control', 'Hill Start Assist', 'TPMS', 'Front & Rear Parking Sensors', 'Rear View Camera', 'ISOFIX'] },
          { title: 'Infotainment', items: ['10.25" Touchscreen', 'Apple CarPlay & Android Auto', 'Bluetooth', '6 Speakers', 'USB Ports'] },
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
        dimensions: '4,653 x 1,886 x 1,730 mm',
        grade: 'Super Luxury',
        keyFeatures: ['All Luxury Features +', '360° Camera', 'Heated Seats', 'Wireless Charging', 'Electric Tailgate', 'Premium Sound'],
        detailedSpecs: [
          { title: 'Steering & Driving', items: ['Electronic Parking Brake', 'Auto Hold', 'Tilt & Telescopic Steering', 'Front McPherson & Rear Multi-Link Suspension', 'Driving Modes (Eco, Standard, Sport)', 'Speed Sensitive Electric Steering', 'Adaptive Cruise Control'] },
          { title: 'Exterior', items: ['19" Alloy Wheels', 'LED Headlights with Auto Leveling', 'LED DRL', 'LED Tail Lights', 'Panoramic Sunroof', 'Rain-Sensing Wipers', 'Electric Folding Mirrors with Heating', 'Electric Tailgate'] },
          { title: 'Interior', items: ['Leather Seats', 'Heated Front Seats', 'Wireless Phone Charger', 'Keyless Entry & Push Button Start', '6-Way Electric Driver Seat', '4-Way Electric Passenger Seat', '60:40 Split Folding Rear Seats', 'Dual-Zone Climate Control', 'Rear Air Vents', 'Ambient Lighting'] },
          { title: 'Safety & Security', items: ['6 Airbags', 'ESC & Traction Control', 'Hill Start Assist', 'TPMS', 'Front & Rear Parking Sensors', '360° Camera', 'Lane Keep Assist', 'Lane Departure Warning', 'Blind Spot Detection', 'Rear Cross Traffic Alert', 'AEB', 'ISOFIX'] },
          { title: 'Infotainment', items: ['10.25" Touchscreen', '10.25" Digital Cluster', 'Apple CarPlay & Android Auto', 'Bluetooth', '8 Speaker Sound System', 'USB Ports'] },
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
        { label: 'Drive Type', value: 'Front Wheel Drive' },
        { label: 'Fuel Tank', value: '57 Litres' },
        { label: 'Consumption', value: '7.8 L/100km' },
      ]},
      { category: 'Technology', specs: [
        { label: 'Infotainment', value: '10.25" Touchscreen' },
        { label: 'Instrument Cluster', value: '10.25" Digital' },
        { label: 'Connectivity', value: 'Apple CarPlay & Android Auto' },
        { label: 'Sound System', value: 'Premium 8-Speaker' },
        { label: 'USB Ports', value: '4 USB Ports' },
        { label: 'Wireless Charging', value: 'Standard (Super Luxury)' },
      ]},
    ],
    standardFeatures: ['10.25" Digital Cluster', '10.25" Touchscreen', 'Apple CarPlay & Android Auto', 'Leather Seats', 'Panoramic Sunroof', 'LED Lights', '19" Alloys', 'Keyless Entry', 'Push Start', 'Auto Climate'],
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'ESC', 'Hill Start Assist', 'Adaptive Cruise', 'Lane Departure Warning', 'Forward Collision Warning', 'AEB', 'Rear Cross Traffic Alert', 'ISOFIX'],
    dimensions: [
      { label: 'Length', value: '4,653mm' },
      { label: 'Width', value: '1,886mm' },
      { label: 'Height', value: '1,730mm' },
      { label: 'Wheelbase', value: '2,738mm' },
      { label: 'Boot', value: '600L' },
      { label: 'Weight', value: '1,685kg' },
    ],
  },
  'h6-gt': {
    name: 'HAVAL',
    model: 'H6 GT',
    tagline: 'Sporty Performance SUV',
    longDescription: 'The HAVAL H6 GT takes the award-winning H6 platform and adds a sporty coupe-inspired roofline. This performance-oriented SUV maintains all the practicality while adding dynamic driving experience and head-turning design.',
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
        dimensions: '4,653 x 1,886 x 1,730 mm',
        grade: 'Super Luxury',
        keyFeatures: ['Coupe Roofline', '12.3" Dual Screens', 'Sport Suspension', '19" Alloys', 'Ambient Lighting', 'Sport Seats', 'Head-Up Display', '360° Camera'],
        detailedSpecs: [
          {
            title: 'Steering & Driving Dynamics',
            items: ['Electronic Parking Brake (EPB)', 'Auto Hold', 'Smart Start-Stop', 'Tilt & Telescopic Steering', 'Front McPherson & Rear Multi-Link Suspension', 'Driving & Terrain Modes (Standard, Eco, Sports, Snow, Sand, Off-Road, Race)', 'Speed Sensitive Electric Steering']
          },
          {
            title: 'Exterior',
            items: ['Aerodynamic Kit: Dual Rear Spoilers, Aero Side Skirts & Sporty Rear Diffuser', 'Front Bumper & Rear Tailgate: Gloss Black with Carbon Fibre Visual Accent', 'Matte Black Overfenders', 'Gloss Black Exterior Mirrors', 'Gloss Black Roof Rails', '235/55 R19 Sporty Alloy Wheels with Gloss Black Finish', 'Auto Lift Tailgate', 'Panoramic Sunroof', 'Rain-Sensing Wipers']
          },
          {
            title: 'Interior',
            items: ['Wireless Charger', 'Synthetic Leather Steering Wheel', 'Keyless Entry & Push Button Start', 'Heated Front Seats', 'Vanity Mirrors (Driver and Passenger)', 'Paddle Shift', 'Front 12V Power Outlet', 'Rear Luggage 12V Power Outlet', 'Dashcam Power Outlet', '10.25" Colour Combination Instrument', '6-Way Electric Adjustable Driver Seat', '4-Way Electric Adjustable Passenger Seat', '2-Way Electric Adjustable Driver Lumbar Support', '60:40 Split with Folding Rear Seats', 'Sports Front & Rear Seats', 'Sports Interior: Alcantara Inserts & Carbon Fibre Visual Accents']
          },
          {
            title: 'Safety & Security',
            items: ['6 Airbags: Dual, Side & Curtain', 'Child Safety Lock & ISOFIX', 'Electronic Stability System (ESC) & Traction Control (TCS)', 'Anti-Roll System (RMI) & Secondary Collision Mitigation (SCM)', 'Cornering Brake Control (CBC) & Brake Assist (BA)', 'Hill Descent (HDC) & Uphill Assist (HHC)', 'Tyre Pressure Monitoring System (TPMS)', 'Front & Rear Parking Sensors', '360° Camera with Panoramic View', 'Adaptive Cruise Control (ACC) with Traffic Jam Assist', 'Pre-Collision Warning & Automatic Emergency Braking (AEB)', 'Lane Departure Alert (LDW) & Lane Keeping Assist (LKA)', 'Traffic Sign Recognition (TSR)', 'Blind-Spot Detection with Rear Cross Traffic Alert', 'Head-Up Display', 'Driver Fatigue Alert', 'Anti-Theft Alarm System']
          },
          {
            title: 'Infotainment',
            items: ['Radio with FM/AM', '12.3" Colour Multi-Touch Screen', 'Voice Command', 'Front & Rear Dual USB Ports', 'Bluetooth Connectivity', '8 Speakers: 4 Treble & 4 Bass', 'Speed Sensitive Volume Control', 'Apple CarPlay® & Android Auto™']
          },
          {
            title: 'Glass & Mirror',
            items: ['Electronic Anti-Glare Inside Mirror', 'All Windows One-Touch (up/down)', 'Heated Exterior Mirror', 'Electrically Adjustable Exterior Mirror', 'Electrically Retractable Exterior Mirror']
          },
          {
            title: 'Lighting',
            items: ['LED Headlights & Tail Lights', 'Electric Height-Adjusting Headlights', 'Automatic Headlights with Follow-Me-Home Function', 'Front Fog Lamp (LED)', 'Rear Fog Lamp (LED)', 'Daytime Running Lights (LED Integrated)']
          },
          {
            title: 'Climate Control',
            items: ['Automatic Dual Zone Air Conditioner', 'Rear Air Conditioner Vents']
          },
          {
            title: 'Warranty',
            items: ['Warranty – 7 Years / 200,000 km', 'Roadside Assistance – 7 Years / Unlimited km', 'Service Plan – 7 Years / 75,000 km', 'Service Intervals – 12 Months / 15,000 km']
          }
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
    standardFeatures: ['12.3" Digital Cluster', '12.3" Touchscreen', 'Coupe Roofline', 'Sport Suspension', '19" Alloys', 'Sport Seats', 'Ambient Lighting', '360° Camera', 'Electric Tailgate', 'Premium Sound'],
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'ESC', 'Adaptive Cruise', 'Lane Keep Assist', 'AEB', 'Blind Spot Monitor', 'Rear Cross Traffic Alert'],
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
    longDescription: 'The HAVAL Jolion is the smart choice for urban explorers. This compact crossover delivers excellent fuel efficiency, easy maneuverability, and surprising interior space. Loaded with technology including a 10.25" touchscreen and comprehensive safety features.',
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
        dimensions: '4,472 x 1,841 x 1,619 mm',
        grade: 'Standard',
        keyFeatures: ['10.25" Touchscreen', 'LED Headlights', 'Cruise Control', '17" Alloys', 'Rear Camera', 'Parking Sensors'],
        detailedSpecs: [
          { title: 'Exterior', items: ['17" Alloy Wheels', 'LED Headlights', 'Halogen Fog Lamps', 'Roof Rails', 'Body-Coloured Door Handles', 'Electric Folding Mirrors'] },
          { title: 'Interior', items: ['Fabric Seats', 'Manual Air Conditioning', 'Tilt & Telescopic Steering', '60:40 Split Rear Seats', 'Front & Rear USB Ports', 'Luggage Cover'] },
          { title: 'Safety', items: ['6 Airbags', 'ABS with EBD', 'ESC', 'Hill Start Assist', 'Rear Parking Sensors', 'Rear View Camera', 'ISOFIX'] },
          { title: 'Infotainment', items: ['10.25" Touchscreen', 'Apple CarPlay & Android Auto', 'Bluetooth', '4 Speakers', 'USB Ports'] },
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
        dimensions: '4,472 x 1,841 x 1,619 mm',
        grade: 'Premium',
        keyFeatures: ['All Base Features +', 'Leather Seats', 'Panoramic Sunroof', 'Auto Climate', 'Push Start', '360° Camera'],
        detailedSpecs: [
          { title: 'Exterior', items: ['17" Alloy Wheels', 'LED Headlights', 'LED Fog Lamps', 'Panoramic Sunroof', 'Roof Rails', 'Chrome Door Handles', 'Heated Electric Folding Mirrors'] },
          { title: 'Interior', items: ['Leather Seats', 'Automatic Climate Control', 'Keyless Entry & Push Start', 'Tilt & Telescopic Steering', '6-Way Manual Driver Seat', '60:40 Split Rear Seats', 'Front & Rear USB Ports', 'Luggage Cover', 'Auto-Dimming Mirror'] },
          { title: 'Safety', items: ['6 Airbags', 'ABS with EBD', 'ESC', 'Hill Start Assist', 'Front & Rear Parking Sensors', '360° Camera', 'Lane Departure Warning', 'ISOFIX'] },
          { title: 'Infotainment', items: ['10.25" Touchscreen', '7" Digital Cluster', 'Apple CarPlay & Android Auto', 'Bluetooth', '6 Speakers', 'USB Ports'] },
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
        dimensions: '4,472 x 1,841 x 1,619 mm',
        grade: 'S (Sport)',
        keyFeatures: ['All Premium Features +', 'Sport Styling', '18" Alloys', 'Sport Seats', 'Upgraded Sound', 'Ambient Lighting'],
        detailedSpecs: [
          { title: 'Exterior', items: ['18" Sport Alloy Wheels', 'LED Headlights', 'LED Fog Lamps', 'Panoramic Sunroof', 'Sport Roof Rails', 'Gloss Black Accents', 'Sport Body Kit', 'Heated Electric Folding Mirrors'] },
          { title: 'Interior', items: ['Sport Leather Seats', 'Automatic Climate Control', 'Keyless Entry & Push Start', 'Sport Steering Wheel', '6-Way Electric Driver Seat', '60:40 Split Rear Seats', 'Ambient Lighting', 'Sport Pedals', 'Auto-Dimming Mirror'] },
          { title: 'Safety', items: ['6 Airbags', 'ABS with EBD', 'ESC', 'Hill Start Assist', 'Front & Rear Parking Sensors', '360° Camera', 'Lane Departure Warning', 'Lane Keep Assist', 'Blind Spot Detection', 'ISOFIX'] },
          { title: 'Infotainment', items: ['10.25" Touchscreen', '10.25" Digital Cluster', 'Apple CarPlay & Android Auto', 'Bluetooth', '8 Speaker Sound System', 'USB Ports'] },
          { title: 'Warranty', items: ['7 Years / 200,000 km Warranty', '7 Years Roadside Assistance', '7 Years / 75,000 km Service Plan'] }
        ]
      },
    ],
    specCategories: [
      { category: 'Engine & Performance', specs: [
        { label: 'Engine Type', value: '1.5L Turbocharged' },
        { label: 'Power (Standard)', value: '105 kW @ 5,600 rpm' },
        { label: 'Power (S)', value: '110 kW @ 5,600 rpm' },
        { label: 'Torque', value: '210-220 Nm' },
        { label: 'Transmission', value: '6MT / 7-Speed DCT' },
        { label: 'Consumption', value: '6.9-7.2 L/100km' },
      ]},
    ],
    standardFeatures: ['10.25" Touchscreen', 'Apple CarPlay & Android Auto', 'LED Headlights', 'Cruise Control', 'Rear Camera', 'Parking Sensors', 'Auto Lights', 'USB Ports'],
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'ESC', 'Hill Start Assist', 'Rear Parking Sensors', 'Rear Camera', 'ISOFIX'],
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
    longDescription: 'The HAVAL H7 is the flagship of versatility, offering genuine 7-seater accommodation without compromising on comfort or features. Perfect for growing families with flexible seating configurations and a comprehensive suite of technology.',
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
        dimensions: '4,910 x 1,905 x 1,780 mm',
        grade: 'Super Luxury',
        keyFeatures: ['7 Seats', '12.3" Dual Screens', 'Leather Seats', 'Panoramic Sunroof', '360° Camera', 'Electric Tailgate', 'Third Row Air Vents', 'Premium Sound'],
        detailedSpecs: [
          { title: 'Seating & Space', items: ['7-Seater Configuration (2+3+2)', 'Second Row 60:40 Split & Fold', 'Third Row 50:50 Split & Fold', 'Third Row Air Vents', 'Third Row USB Charging', 'Boot Space: 238L (7 seats) / 808L (5 seats) / 1,050L (2 seats)'] },
          { title: 'Exterior', items: ['19" Alloy Wheels', 'LED Headlights with Auto Leveling', 'LED DRL', 'LED Tail Lights', 'Panoramic Sunroof', 'Electric Tailgate with Hands-Free', 'Roof Rails', 'Rain-Sensing Wipers', 'Heated & Folding Exterior Mirrors'] },
          { title: 'Interior', items: ['Leather Seats', 'Heated Front Seats', 'Ventilated Front Seats', '8-Way Electric Driver Seat', '4-Way Electric Passenger Seat', 'Dual-Zone Climate Control', 'Rear Air Vents (2nd & 3rd Row)', 'Wireless Phone Charger', 'Keyless Entry & Push Start', 'Ambient Lighting', '12.3" Digital Cluster', '12.3" Touchscreen'] },
          { title: 'Safety & Security', items: ['6 Airbags: Dual Front, Side & Curtain', 'ESC & Traction Control', 'Hill Start Assist', 'TPMS', 'Front & Rear Parking Sensors', '360° Camera with Bird\'s Eye View', 'Adaptive Cruise Control', 'Lane Keep Assist', 'Lane Departure Warning', 'Blind Spot Detection', 'Rear Cross Traffic Alert', 'AEB', 'Driver Fatigue Alert', 'ISOFIX (3 Points)'] },
          { title: 'Infotainment', items: ['12.3" Touchscreen Display', '12.3" Digital Cluster', 'Apple CarPlay & Android Auto', 'Bluetooth', '8 Speaker Sound System', 'Voice Recognition', 'USB Ports (Front, 2nd Row & 3rd Row)'] },
          { title: 'Warranty', items: ['7 Years / 200,000 km Warranty', '7 Years Roadside Assistance', '7 Years / 75,000 km Service Plan', 'Service Intervals – 12 Months / 15,000 km'] }
        ]
      },
    ],
    specCategories: [
      { category: 'Engine & Performance', specs: [
        { label: 'Engine Type', value: '2.0L Turbocharged' },
        { label: 'Maximum Power', value: '155 kW @ 5,500 rpm' },
        { label: 'Maximum Torque', value: '325 Nm @ 1,500-4,000 rpm' },
        { label: 'Transmission', value: '7-Speed DCT' },
        { label: 'Fuel Tank', value: '65 Litres' },
        { label: 'Consumption', value: '8.5 L/100km' },
      ]},
      { category: 'Seating & Space', specs: [
        { label: 'Seating Capacity', value: '7 Passengers' },
        { label: 'Second Row', value: '60/40 Split Fold' },
        { label: 'Third Row', value: '50/50 Split Fold' },
        { label: 'Boot (7 Seats)', value: '238 Litres' },
        { label: 'Boot (5 Seats)', value: '808 Litres' },
        { label: 'Boot (2 Seats)', value: '1,050 Litres' },
      ]},
    ],
    standardFeatures: ['7-Seater Configuration', '12.3" Digital Cluster', '12.3" Touchscreen', 'Leather Seats', 'Panoramic Sunroof', 'Third Row Air Vents', '360° Camera', 'Electric Tailgate', 'Roof Rails'],
    safetyFeatures: ['6 Airbags', 'ABS with EBD', 'ESC', 'Adaptive Cruise', 'Lane Keep Assist', 'AEB', 'Blind Spot Monitor', 'Rear Cross Traffic Alert', 'ISOFIX x3'],
    dimensions: [
      { label: 'Length', value: '4,910mm' },
      { label: 'Width', value: '1,905mm' },
      { label: 'Height', value: '1,780mm' },
      { label: 'Wheelbase', value: '2,850mm' },
      { label: 'Boot (7-seat)', value: '238L' },
      { label: 'Boot (max)', value: '1,050L' },
    ],
  },
};

export default function ModelPage() {
  const params = useParams();
  const slug = params.slug as string;
  const car = carsData[slug];
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);
  const [showSpecs, setShowSpecs] = useState(false);

  if (!car) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Model Not Found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">Return to Home</Link>
        </div>
      </div>
    );
  }

  const currentVariant = car.variants[selectedVariant];
  const getImg = (idx: number) => `${car.galleryFolder}/${idx}.jpg`;
  
  const exteriorImgUrls = car.exteriorImages.map(getImg);
  const interiorImgUrls = car.interiorImages.map(getImg);
  const detailImgUrls = car.detailImages.map(getImg);

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ images, index, title });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero Section - Full Width Feature Image */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image src={car.heroImage} alt={car.model} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="inline-flex items-center space-x-2 text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Models</span>
            </Link>
            <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-2">{car.tagline}</p>
            <h1 className="text-white">
              <span className="block text-xl font-light tracking-wider opacity-60">{car.name}</span>
              <span className="block text-5xl md:text-7xl font-black tracking-tighter">{car.model}</span>
            </h1>
            <p className="text-white text-3xl font-bold mt-4">From {car.variants[0].price}</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Discover the {car.model}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{car.longDescription}</p>
            
            {/* Brochure Link */}
            <a 
              href={car.brochureUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
            >
              <FileText className="w-4 h-4" />
              View Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Version Selector - Full Width */}
      <section className="py-12 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-6 text-center">Select Your Version</p>
          
          {/* Version Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {car.variants.map((variant, index) => (
              <button
                key={variant.name}
                onClick={() => setSelectedVariant(index)}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  selectedVariant === index 
                    ? 'bg-white text-black' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>

          {/* Selected Variant Card - Full Width */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full font-medium">
                  {selectedVariant === 0 ? 'Base Model' : 'Upgraded'}
                </span>
                <h3 className="text-white text-2xl font-bold mt-3">{currentVariant.name}</h3>
                <p className="text-blue-400 text-4xl font-bold mt-2">{currentVariant.price}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
                  Request a Quote
                </Link>
                <Link href="tel:0413992800" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                  Call 041 399 2800
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              <div className="bg-black/20 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase mb-1">Engine</p>
                <p className="text-white text-sm font-medium">{currentVariant.engine}</p>
              </div>
              <div className="bg-black/20 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase mb-1">Power</p>
                <p className="text-white text-sm font-medium">{currentVariant.power}</p>
              </div>
              <div className="bg-black/20 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase mb-1">Torque</p>
                <p className="text-white text-sm font-medium">{currentVariant.torque}</p>
              </div>
              <div className="bg-black/20 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase mb-1">Transmission</p>
                <p className="text-white text-sm font-medium">{currentVariant.transmission}</p>
              </div>
              <div className="bg-black/20 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase mb-1">Drive</p>
                <p className="text-white text-sm font-medium">{currentVariant.drive}</p>
              </div>
              <div className="bg-black/20 rounded-xl p-4">
                <p className="text-gray-500 text-xs uppercase mb-1">Fuel Economy</p>
                <p className="text-white text-sm font-medium">{currentVariant.fuelConsumption}</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Key Features</p>
              <div className="flex flex-wrap gap-2">
                {currentVariant.keyFeatures.map((f) => (
                  <span key={f} className="bg-white/10 text-gray-300 text-sm px-4 py-2 rounded-full">{f}</span>
                ))}
              </div>
            </div>

            {/* Additional Specs: Dimensions & Grade */}
            {(currentVariant.dimensions || currentVariant.grade) && (
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                {currentVariant.dimensions && (
                  <div className="bg-black/20 rounded-xl p-4">
                    <p className="text-gray-500 text-xs uppercase mb-1">Dimensions (L x W x H)</p>
                    <p className="text-white text-sm font-medium">{currentVariant.dimensions}</p>
                  </div>
                )}
                {currentVariant.grade && (
                  <div className="bg-black/20 rounded-xl p-4">
                    <p className="text-gray-500 text-xs uppercase mb-1">Grade</p>
                    <p className="text-white text-sm font-medium">{currentVariant.grade}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full Specifications Button & Collapsible Content */}
      {currentVariant.detailedSpecs && currentVariant.detailedSpecs.length > 0 && (
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setShowSpecs(!showSpecs)}
              className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-white text-lg font-bold">Full Specifications</h3>
                  <p className="text-gray-400 text-sm">{currentVariant.name} - {currentVariant.detailedSpecs.length} categories</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm hidden sm:block">{showSpecs ? 'Hide details' : 'View all features'}</span>
                <div className="w-10 h-10 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
                  {showSpecs ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-white" />}
                </div>
              </div>
            </button>

            {showSpecs && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                {currentVariant.detailedSpecs.map((section) => (
                  <div key={section.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {section.title}
                    </h4>
                    <div className="space-y-1.5">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Exterior Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Exterior Design</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {exteriorImgUrls.map((url, i) => (
              <button 
                key={i} 
                onClick={() => openLightbox(exteriorImgUrls, i, 'Exterior Design')}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${i === 0 ? 'col-span-2 row-span-2 h-[450px]' : 'h-[220px]'}`}
              >
                <Image src={url} alt={`Exterior ${i + 1}`} fill className="object-cover object-center group-hover:scale-102 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full transition-opacity">View</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Section with Images */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Premium Interior</h2>
              <p className="text-gray-400 mb-8">Step inside and experience a cabin designed for comfort and sophistication. Every surface, every control has been crafted with attention to detail.</p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white text-lg font-bold mb-4">{currentVariant.name} Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  {currentVariant.keyFeatures.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {interiorImgUrls.map((url, i) => (
                <button 
                  key={i} 
                  onClick={() => openLightbox(interiorImgUrls, i, 'Interior Design')}
                  className="relative h-[200px] rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image src={url} alt={`Interior ${i + 1}`} fill className="object-cover object-center group-hover:scale-102 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full transition-opacity">View</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications with Image */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-8">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {car.specCategories.map((cat) => (
                  <div key={cat.category} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-white text-lg font-bold mb-4">{cat.category}</h3>
                    <div className="space-y-3">
                      {cat.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between py-2 border-b border-white/5">
                          <span className="text-gray-500 text-sm">{spec.label}</span>
                          <span className="text-white text-sm font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => openLightbox(detailImgUrls, 0, 'Technical Details')}
              className="relative h-[400px] lg:h-auto min-h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image src={detailImgUrls[0]} alt="Detail" fill className="object-cover object-center group-hover:scale-102 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full transition-opacity">View Gallery</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Dimensions with Visual */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Dimensions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {car.dimensions.map((dim) => (
                <div key={dim.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{dim.label}</p>
                  <p className="text-white text-xl font-bold">{dim.value}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => openLightbox(detailImgUrls, 1, 'Technical Details')}
              className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image src={detailImgUrls[1]} alt="Dimensions" fill className="object-cover object-center group-hover:scale-102 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full transition-opacity">View</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid with Images */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Standard Features</h2>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  {car.standardFeatures.map((f) => (
                    <div key={f} className="flex items-center space-x-3 py-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Safety Features</h2>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  {car.safetyFeatures.map((f) => (
                    <div key={f} className="flex items-center space-x-3 py-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {detailImgUrls.slice(2, 5).map((url, i) => (
                <button 
                  key={i} 
                  onClick={() => openLightbox(detailImgUrls, i + 2, 'Technical Details')}
                  className="relative h-[150px] w-full rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image src={url} alt={`Feature ${i + 1}`} fill className="object-cover object-center group-hover:scale-102 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full transition-opacity">View</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience the {car.model}?</h2>
          <p className="text-gray-400 text-lg mb-10">Contact our team to schedule a test drive or request a personalized quote.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold transition-all">
              Book a Test Drive
            </Link>
            <Link href="tel:0413992800" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-4 rounded-full font-bold transition-all">
              Call 041 399 2800
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Lightbox */}
      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          isOpen={!!lightbox}
          onClose={() => setLightbox(null)}
          title={lightbox.title}
        />
      )}
    </div>
  );
}
