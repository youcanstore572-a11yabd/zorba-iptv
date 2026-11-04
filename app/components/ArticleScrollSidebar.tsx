'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  Sparkles,
  Zap,
  MessageCircle,
  Flame,
  Crown,
  CheckCircle2,
} from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const BRAND = CONSTANTS.BRAND_NAME;

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
function getCategoryLabel(post: any): string {
  if (post.category) {
    const map: Record<string, string> = {
      setup: 'Setup Guide',
      review: 'Review',
      sports: 'Live Sports',
      tips: 'Tips & Tricks',
      news: 'News',
    };
    return map[post.category] || post.category;
  }
  if (post.keywords && post.keywords.length > 0) return post.keywords[0];
  return 'IPTV Provider Guide';
}

function getReadTime(post: any): number {
  if (post.readTime) {
    const match = String(post.readTime).match(/(\d+)/);
    if (match) return parseInt(match[1]);
  }
  const words = (post.content || '')
    .replace(/<[^>]*>/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.ceil(words / 200));
}

function formatDateShort(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

// ---------------------------------------------------------------------------
// SIDEBAR
// ---------------------------------------------------------------------------
export default function ArticleScrollSidebar({
  relatedPosts,
  whatsappIboMsg,
  whatsappSubMsg,
}: {
  relatedPosts: any[];
  whatsappIboMsg: string;
  whatsappSubMsg: string;
}) {
  return (
    <aside className="lg:col-span-4 order-2 lg:order-2 lg:self-start lg:sticky lg:top-24 h-fit">
      <div className="space-y-6">
        {/* =====================================================
            Card 1 — IPTV Smarter Pro
        ===================================================== */}
        <div className="bg-[#EDEADE] border-4 border-[#1C65CE] rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1C65CE]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 bg-[#1C65CE] text-[#EDEADE] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" /> Recommended Player
          </div>

          <h2 className="text-lg sm:text-xl font-black text-[#04208B] uppercase tracking-tight mb-2">
            Get IPTV Smarter Pro Access
          </h2>
          <p className="text-[#04208B]/80 text-xs sm:text-sm font-bold leading-relaxed mb-6">
            IPTV Smarter Pro is one of our top-pick players for fast, secure playback with minimal buffering. Our team helps you get set up and stays on hand throughout your whole subscription.
          </p>

          <a
            href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappIboMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#25D366] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#20BA5A] transition-all shadow-lg hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Order IPTV Smarter Pro</span>
          </a>
        </div>

        {/* =====================================================
            Card 2 — Official Plans
        ===================================================== */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#04208B] via-[#04208B] to-[#1C65CE]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,213,50,0.15),_transparent_60%)] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #EDEADE 1px, transparent 1px), linear-gradient(to bottom, #EDEADE 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 p-6">
            <div className="inline-flex items-center gap-1.5 bg-[#FFD532] text-[#04208B] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-md">
              <Crown className="w-3.5 h-3.5" /> Official Plans
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#EDEADE] uppercase tracking-tight mb-2 drop-shadow-md">
              {BRAND} <br />
              <span className="text-[#FFD532]">Subscriptions</span>
            </h2>
            <p className="text-[#EDEADE]/85 text-xs sm:text-sm font-bold leading-relaxed mb-6">
              20,000+ live channels · 120,000+ movies &amp; TV shows · 4K Ultra HD · Anti-freeze servers.
            </p>

            <div className="space-y-3">
              {/* Standard — 3 Months */}
              <div className="group bg-[#EDEADE] border-2 border-[#1C65CE]/40 rounded-2xl p-4 hover:border-[#FFD532] hover:-translate-y-0.5 transition-all shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#1C65CE]/15 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#1C65CE]" />
                    </div>
                    <span className="text-[#04208B] font-black text-sm uppercase tracking-tight">
                      Standard
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#04208B] font-black text-xl leading-none">
                      $35
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-[#04208B]/50 mt-0.5">
                      3 Months
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-[#04208B]/70">
                  <CheckCircle2 className="w-3 h-3 text-[#1C65CE]" />
                  <span>Set up by email in minutes</span>
                </div>
                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-full bg-[#25D366] text-[#FFFFFF] hover:bg-[#20BA5A] transition-all font-black text-[10px] uppercase tracking-widest block shadow-md hover:scale-105"
                >
                  Order on WhatsApp
                </a>
              </div>

              {/* VIP — 12 Months */}
              <div className="group relative bg-[#04208B] border-2 border-[#FFD532] rounded-2xl p-4 hover:border-[#EDEADE] hover:-translate-y-0.5 transition-all shadow-2xl">
                <div className="absolute -top-3 right-4 bg-[#FFD532] text-[#04208B] px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
                  ⭐ Best Value
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FFD532]/20 flex items-center justify-center">
                      <Crown className="w-4 h-4 text-[#FFD532]" />
                    </div>
                    <span className="text-[#EDEADE] font-black text-sm uppercase tracking-tight">
                      12 Months VIP
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-[#FFD532] font-black text-xl leading-none">
                      $65
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-[#EDEADE]/50 mt-0.5">
                      Save 60%
                    </div>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#EDEADE]/80">
                    <CheckCircle2 className="w-3 h-3 text-[#FFD532]" />
                    <span>4K Anti-Freeze Servers</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#EDEADE]/80">
                    <CheckCircle2 className="w-3 h-3 text-[#FFD532]" />
                    <span>Free trial before you pay</span>
                  </div>
                </div>

                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${whatsappSubMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-full bg-[#25D366] text-[#FFFFFF] hover:bg-[#20BA5A] transition-all font-black text-[10px] uppercase tracking-widest block shadow-lg hover:scale-105"
                >
                  Order VIP on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#EDEADE]/20 text-center">
              <Link
                href="/pricing"
                className="text-xs font-black text-[#EDEADE] uppercase tracking-wider hover:underline inline-flex items-center gap-1 group"
              >
                View all IPTV Subscription plans
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FFD532]" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            Card 3 — Related Articles
        ===================================================== */}
        {relatedPosts.length > 0 && (
          <div className="bg-[#EDEADE] border-4 border-[#1C65CE] rounded-3xl p-5 shadow-xl">
            <h2 className="text-lg font-black text-[#04208B] uppercase tracking-tight mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#1C65CE]" /> Related Articles
            </h2>

            <div className="space-y-4">
              {relatedPosts.map((relPost) => {
                const relCategory = getCategoryLabel(relPost);
                const relReadTime = getReadTime(relPost);
                const relDate = formatDateShort(relPost.date);

                return (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border-2 border-[#1C65CE]/20 hover:border-[#1C65CE] hover:shadow-[0_15px_35px_rgba(28,101,206,0.2)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#04208B]">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        width={400}
                        height={250}
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 350px"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#04208B] via-[#04208B]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                      <div className="absolute top-2 left-2 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1C65CE] text-[#EDEADE] text-[9px] font-black uppercase tracking-wider shadow-lg">
                          <Tag className="w-2.5 h-2.5" />
                          {relCategory}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#04208B]/80 backdrop-blur-md text-[#EDEADE] text-[9px] font-black uppercase tracking-wider border border-[#1C65CE]/40">
                          <Clock className="w-2.5 h-2.5" />
                          {relReadTime} min
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#04208B]/60 mb-2">
                        <Calendar className="w-3 h-3 text-[#1C65CE]" />
                        <span>{relDate}</span>
                      </div>

                      <h3 className="text-sm font-black text-[#04208B] uppercase tracking-tight leading-snug mb-2 line-clamp-2 group-hover:text-[#1C65CE] transition-colors">
                        {relPost.title}
                      </h3>

                      <p className="text-[#04208B]/70 text-xs font-medium leading-relaxed line-clamp-2 mb-3">
                        {relPost.description || relPost.excerpt}
                      </p>

                      <div className="pt-3 border-t border-[#04208B]/10 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[#1C65CE] font-black text-[10px] uppercase tracking-widest group-hover:gap-2 transition-all">
                          Read
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        <div className="w-6 h-6 rounded-lg bg-[#1C65CE]/10 border border-[#1C65CE]/30 flex items-center justify-center text-[#1C65CE] group-hover:bg-[#1C65CE] group-hover:text-[#EDEADE] transition-all duration-300">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}