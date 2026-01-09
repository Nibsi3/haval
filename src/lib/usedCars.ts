export interface UsedCar {
  id: number;
  name: string;
  model: string;
  price: number;
  mileage: number;
  year: number;
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Manual' | 'Automatic';
  drivetrain: '4x2' | '4x4';
  bodyType: 'SUV' | 'Double Cab' | 'Hatchback';
  location: string;
  colour: string;
  image: string;
  createdAt: string;
}

export const usedCars: UsedCar[] = [
  {
    id: 1,
    name: 'Haval Jolion Super Luxury',
    model: 'Jolion',
    price: 399900,
    mileage: 18500,
    year: 2023,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    drivetrain: '4x2',
    bodyType: 'SUV',
    location: 'Gqeberha',
    colour: 'White',
    image: '/cars/haval-pro.png',
    createdAt: '2025-01-05',
  },
  {
    id: 2,
    name: 'GWM Tank 300 Ultra',
    model: 'Tank 300',
    price: 859900,
    mileage: 12000,
    year: 2024,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    drivetrain: '4x4',
    bodyType: 'SUV',
    location: 'George',
    colour: 'Sand',
    image: '/cars/haval-tank-300.png',
    createdAt: '2025-01-12',
  },
  {
    id: 3,
    name: 'Haval H6 GT Super Luxury',
    model: 'H6 GT',
    price: 679900,
    mileage: 22000,
    year: 2023,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    drivetrain: '4x4',
    bodyType: 'SUV',
    location: 'Gqeberha',
    colour: 'Green',
    image: '/cars/haval-h6-gt.png',
    createdAt: '2024-12-10',
  },
];

export function getUsedCarById(id: number): UsedCar | undefined {
  return usedCars.find((c) => c.id === id);
}
