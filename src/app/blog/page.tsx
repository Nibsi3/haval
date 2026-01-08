'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock3, 
  ArrowRight, 
  Tag as TagIcon, 
  CalendarDays, 
  ChevronDown,
  ChevronLeft
} from 'lucide-react';
import { blogPosts } from '@/lib/blogPosts';
import type { BlogCategory, BlogPost } from '@/lib/blogPosts';

const CATEGORIES: (BlogCategory | 'All')[] = [
  'All',
  'Tank 300',
  'Tank 500',
  'H6',
  'H6 GT',
  'Jolion',
  'H7',
  'P-Series',
  'ORA',
  'Ownership',
  'Technology',
];

const POSTS_PER_PAGE = 12;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | BlogCategory>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const { featurePost, paginatedPosts, totalPages } = useMemo(() => {
    const filtered = selectedCategory === 'All'
      ? [...blogPosts]
      : blogPosts.filter((post) => post.category === selectedCategory);

    const sorted = filtered.sort((a, b) => b.date.localeCompare(a.date));
    const [first, ...rest] = sorted;

    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const total = Math.ceil(rest.length / POSTS_PER_PAGE) || 1;

    return {
      featurePost: first,
      paginatedPosts: rest.slice(start, end),
      totalPages: total,
    };
  }, [selectedCategory, currentPage]);

  const handleCategoryChange = (category: 'All' | BlogCategory) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <Image
          src="/wallpapers/h6gt.jpg"
          alt="The Maritime Journal"
          fill
          quality={100}
          priority
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
        <div className="relative max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.4em] mb-6">Established 1958</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              The Maritime <br />
              <span className="text-blue-500">Journal</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed font-light mb-10 max-w-2xl">
              Professional automotive perspectives, technical insights, and lifestyle guides curated for the South African GWM and Haval community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Category Navigation */}
          <div className="flex flex-wrap items-center gap-3 mb-20 bg-zinc-950/50 backdrop-blur-xl p-4 rounded-3xl border border-white/5 shadow-2xl">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4 mr-6">Filter by</span>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category as 'All' | BlogCategory)}
                className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20'
                    : 'bg-transparent text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post - Ultra Premium Layout */}
          {featurePost && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative mb-32"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-950/40 backdrop-blur-sm hover:border-blue-500/20 transition-all duration-700 shadow-2xl">
                <div className="lg:col-span-7 relative h-[450px] lg:h-[650px] overflow-hidden">
                  <Image
                    src={featurePost.heroImage}
                    alt={featurePost.title}
                    fill
                    quality={100}
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  <div className="absolute top-8 left-8">
                    <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2.5 rounded-xl shadow-2xl">
                      Featured Feature
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-10 md:p-16 lg:p-20 flex flex-col">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">{featurePost.category}</span>
                      <span className="text-gray-500 text-xs">{formatDate(featurePost.date)}</span>
                    </div>
                    <div className="h-10 w-[1px] bg-white/10" />
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Clock3 className="w-4 h-4" />
                      {featurePost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight group-hover:text-blue-400 transition-colors duration-500">
                    {featurePost.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg mb-12 line-clamp-4 leading-relaxed font-light">
                    {featurePost.excerpt}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/blog/${featurePost.slug}`}
                      className="group/btn inline-flex items-center gap-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 px-10 py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20"
                    >
                      Read full article
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid Layout */}
          <div className="space-y-16">
            <div className="flex items-center justify-between mb-12">
              <h4 className="text-2xl font-bold text-white tracking-tight">Latest Perspectives</h4>
              <div className="h-[1px] flex-1 mx-10 bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {paginatedPosts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative flex flex-col bg-zinc-950/20 border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-lg"
                >
                  <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Open ${post.title}`}> 
                    <span className="sr-only">Open article</span>
                  </Link>
                  <div className="relative h-24 w-full overflow-hidden">
                    <Image
                      src={post.thumbnailImage}
                      alt={post.title}
                      fill
                      quality={100}
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-black/60 backdrop-blur-xl text-white text-[5px] font-black uppercase tracking-[0.2em] px-1.5 py-0.5 rounded border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-[7px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      <span>{formatDate(post.date)}</span>
                      <span className="text-white/10">•</span>
                      <span className="flex items-center gap-1">
                        <Clock3 className="w-2 h-2" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xs font-bold text-white mb-1.5 leading-tight group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-[9px] mb-3 line-clamp-2 leading-relaxed font-light">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-2 border-t border-white/5">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="relative z-20 text-blue-500 hover:text-blue-400 font-bold text-[8px] flex items-center gap-1 group/link uppercase tracking-widest"
                      >
                        Read article
                        <ArrowRight className="w-2 h-2 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-24">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`px-8 py-4 rounded-2xl text-xs font-bold transition-all duration-300 border ${
                    currentPage === 1
                      ? 'border-white/5 text-gray-600 cursor-not-allowed'
                      : 'border-white/10 text-white hover:bg-white hover:text-black hover:border-white'
                  }`}
                >
                  Previous
                </button>
                <div className="px-8 py-4 rounded-2xl bg-zinc-950/50 border border-white/5 text-xs font-bold text-gray-400">
                  Page <span className="text-white">{currentPage}</span> of {totalPages}
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-8 py-4 rounded-2xl text-xs font-bold transition-all duration-300 border ${
                    currentPage === totalPages
                      ? 'border-white/5 text-gray-600 cursor-not-allowed'
                      : 'border-white/10 text-white hover:bg-white hover:text-black hover:border-white'
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
