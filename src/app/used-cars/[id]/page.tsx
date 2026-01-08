import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getUsedCarById } from '@/lib/usedCars';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  params: { id: string };
}

export default function UsedCarDetailPage({ params }: PageProps) {
  const car = getUsedCarById(Number(params.id));
  if (!car) return notFound();

  const message = `Hi Maritime team, I'm interested in the ${car.year} ${car.name} (${car.model}) in ${car.colour}, with ${car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} KM, listed at R ${car.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}. Please share full specifications and availability.`;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="relative pt-32 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-2">Pre-Owned Vehicle</p>
          <h1 className="text-white text-3xl md:text-5xl font-black tracking-tight mb-2">{car.year} {car.name}</h1>
          <p className="text-gray-400 text-sm mb-8">{car.bodyType} • {car.fuelType} • {car.transmission} • {car.drivetrain}</p>
          <div className="relative aspect-video max-w-3xl rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-black/40 to-zinc-900/40">
            <Image src={car.image} alt={car.name} fill quality={100} className="object-contain p-8" />
          </div>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-6">
              <h2 className="text-white font-bold text-xl mb-4">Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1">Price</p>
                  <p className="text-white font-bold">R {car.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</p>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-white/5 text-right md:text-left">
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1">Mileage</p>
                  <p className="text-white font-bold">{car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} KM</p>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-white font-bold">{car.location}</p>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-1">Colour</p>
                  <p className="text-white font-bold">{car.colour}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-6">
              <h2 className="text-white font-bold text-xl mb-4">Description</h2>
              <p className="text-gray-400 leading-relaxed">
                This {car.year} {car.name} is a certified pre-owned vehicle from The Maritime Group. Contact us for a full specification sheet,
                service history and detailed condition report.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/50 p-6">
              <h3 className="text-white font-bold mb-4">Interested?</h3>
              <Link
                href={`/contact?subject=${encodeURIComponent('Pre-Owned Vehicles')}&message=${encodeURIComponent(message)}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-black uppercase tracking-widest hover:bg-blue-500 transition-all"
              >
                View full specifications
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="mt-4 text-center text-xs text-gray-500">No obligation. We reply within 1 business hour.</div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
