import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getPostBySlug, getRelatedPosts, blogPosts } from '@/lib/blogPosts';
import type { BlogCategory } from '@/lib/blogPosts';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, Clock3, Tag as TagIcon, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

function buildCategoryLink(category: BlogCategory) {
  const query = encodeURIComponent(category);
  return `/blog?category=${query}`;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, post.category, 3);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          quality={100}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-10 flex flex-col gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to all articles
            </Link>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-gray-300">
                <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full uppercase tracking-[0.2em]">
                  <TagIcon className="w-3 h-3" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="w-3 h-3" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-2">
                {post.title}
              </h1>
              <p className="text-gray-300 max-w-2xl text-sm md:text-base">
                All details and specifications discussed in this article refer to GWM and Haval vehicles offered
                in the South African market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-20">
          <div className="space-y-12">
            <article className="prose prose-invert prose-lg max-w-none">
              <div className="flex flex-col gap-12">
                {post.content.map((paragraph, idx) => (
                  <div key={idx} className="space-y-12">
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                      {paragraph}
                    </p>
                    {/* Interperse gallery images every few paragraphs */}
                    {post.gallery && post.gallery[idx] && (
                      <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                        <Image
                          src={post.gallery[idx]}
                          alt={`${post.title} detail ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {post.modelSlug && (
                <div className="mt-20 relative p-[1px] rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-transparent">
                  <div className="bg-zinc-950/80 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                    <div className="flex-1">
                      <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">Precision & Performance</p>
                      <h2 className="text-white text-3xl font-bold mb-4">Experience the {post.category}</h2>
                      <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                        Explore the full range of specifications, advanced safety features, and current ownership plans 
                        tailored for the South African market.
                      </p>
                    </div>
                    <Link
                      href={`/models/${post.modelSlug}`}
                      className="inline-flex items-center justify-center whitespace-nowrap px-10 py-5 rounded-2xl bg-white text-black text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
                    >
                      View model details
                      <ArrowRight className="w-4 h-4 ml-3" />
                    </Link>
                  </div>
                </div>
              )}
            </article>

            {post.gallery && post.gallery.length > 0 && (
              <div className="pt-10">
                <h3 className="text-2xl font-bold text-white mb-6">In‑Article Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {post.gallery.map((img, i) => (
                    <div
                      key={img + i}
                      className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
                    >
                      <Image src={img} alt={`${post.title} gallery ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {related.length > 0 && (
              <div className="pt-20 border-t border-white/5">
                <h3 className="text-2xl font-bold text-white mb-10">Related Perspectives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="group block p-6 rounded-3xl bg-zinc-950/30 border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                    >
                      <div className="flex flex-col gap-4">
                        <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">{item.category}</span>
                        <h4 className="text-white font-bold group-hover:text-blue-400 transition-colors line-clamp-2">{item.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{formatDate(item.date)}</span>
                          <span>•</span>
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="relative">
            <div className="sticky top-32 space-y-10">
              <div className="p-8 rounded-[2rem] bg-zinc-950/50 border border-white/5">
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">In this article</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{post.excerpt}</p>
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Published</span>
                    <span className="text-white font-medium">{formatDate(post.date)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Read time</span>
                    <span className="text-white font-medium">{post.readTime}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Category</span>
                    <Link href={buildCategoryLink(post.category)} className="text-blue-500 hover:underline">
                      {post.category}
                    </Link>
                  </div>
                </div>
              </div>

              {post.modelSlug && (
                <div className="p-8 rounded-[2rem] bg-blue-600/5 border border-blue-500/10">
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Visit Our Showroom</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Our specialists in Gqeberha and George are ready to walk you through our current GWM and Haval range.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center py-4 rounded-xl bg-white text-black text-xs font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      Book a Test Drive
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center py-4 rounded-xl border border-white/10 text-white text-xs font-bold hover:bg-white/5 transition-all duration-300"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
