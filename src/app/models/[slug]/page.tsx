import { notFound } from 'next/navigation';
import { MODEL_SLUGS, carsData } from './carsData';
import ModelPageClient from './ModelPageClient';

export function generateStaticParams() {
  return MODEL_SLUGS.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ModelPage({ params }: PageProps) {
  const { slug } = await params;
  const car = carsData[slug];

  if (!car) {
    notFound();
  }

  return <ModelPageClient slug={slug} car={car} />;
}
