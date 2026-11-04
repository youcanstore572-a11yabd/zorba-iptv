import Link from 'next/link';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import {
  reviews,
  REVIEW_STATS,
  REVIEW_FAQS,
} from '@/lib/reviews';
import {
  Star,
  ShieldCheck,
  Zap,
  Headphones,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Users,
  MapPin,
  PlayCircle,
  ThumbsUp,
  Award,
  Sparkles,
  Quote,
  ChevronDown,
} from 'lucide-react';

// ✅ MATCHES seo.ts — SITE_URL already includes https://
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const PAGE_URL = `${SITE_URL}/reviews`;

// ✅ SAFE WhatsApp URL builder
const WHATSAPP_BASE = CONSTANTS.CONTACT.whatsappUrl || 'https://support-tv.online';

// ✅ SAFE review stats
const RATING_VALUE = String(REVIEW_STATS?.averageRating ?? 4.9);
const REVIEW_COUNT = String(REVIEW_STATS?.totalReviews ?? 1255);
const HAPPY_CUSTOMERS = String(REVIEW_STATS?.happyCustomers ?? '50,000');
const RECOMMEND_PERCENT = String(REVIEW_STATS?.recommendPercent ?? 98);

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  `${BRAND} Reviews | Verified Customer Feedback 2026`,
  `Read ${REVIEW_COUNT}+ verified ${BRAND} reviews from real customers. Rated ${RATING_VALUE}/5 for 4K streaming, 36,000+ channels, and 24/7 support.`,
  '/reviews'
);

// ---------------------------------------------------------------------------
// COUNTRY FLAG COMPONENT (US / UK / CA / AU)
// ---------------------------------------------------------------------------
function CountryFlag({
  country,
  size = 'md',
}: {
  country: 'AU' | 'US' | 'UK' | 'CA';
  size?: 'sm' | 'md' | 'lg';
}) {
  const dim = size === 'lg' ? 'w-7 h-7' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const cls = `${dim} rounded-full shrink-0 shadow-md border border-white/20 overflow-hidden`;

  if (country === 'US') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="United States flag">
        <clipPath id="rv-flag-us">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
        <g clipPath="url(#rv-flag-us)">
          <path fill="#FFF" d="M0 0h32v32H0z" />
          {[0, 4.57, 9.14, 13.71, 18.29, 22.86, 27.43].map((y, i) => (
            <path key={i} fill="#B22234" d={`M0 ${y}h32v2.29H0z`} />
          ))}
          <path fill="#3C3B6E" d="M0 0h13.7v14.86H0z" />
        </g>
      </svg>
    );
  }
  if (country === 'UK') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="United Kingdom flag">
        <clipPath id="rv-flag-uk">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
        <g clipPath="url(#rv-flag-uk)">
          <path fill="#012169" d="M0 0h32v32H0z" />
          <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
          <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
          <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
          <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
        </g>
      </svg>
    );
  }
  if (country === 'CA') {
    return (
      <svg className={cls} viewBox="0 0 32 32" aria-label="Canada flag">
        <clipPath id="rv-flag-ca">
          <circle cx="16" cy="16" r="16" />
        </clipPath>
        <g clipPath="url(#rv-flag-ca)">
          <path fill="#FFF" d="M0 0h32v32H0z" />
          <path fill="#D80621" d="M0 0h8v32H0zM24 0h8v32h-8z" />
          <path
            fill="#D80621"
            d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z"
          />
        </g>
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 32 32" aria-label="Australia flag">
      <clipPath id="rv-flag-au">
        <circle cx="16" cy="16" r="16" />
      </clipPath>
      <g clipPath="url(#rv-flag-au)">
        <path fill="#012169" d="M0 0h32v32H0z" />
        <path stroke="#FFF" strokeWidth="4" d="M0 0l16 16M16 0L0 16" />
        <path stroke="#C8102E" strokeWidth="2" d="M0 0l16 16M16 0L0 16" />
        <path stroke="#FFF" strokeWidth="6" d="M8 0v16M0 8h16" />
        <path stroke="#C8102E" strokeWidth="3" d="M8 0v16M0 8h16" />
        <circle cx="24" cy="8" r="1.5" fill="#FFF" />
        <circle cx="24" cy="24" r="1.5" fill="#FFF" />
        <circle cx="20" cy="18" r="1.5" fill="#FFF" />
        <circle cx="28" cy="18" r="1.5" fill="#FFF" />
        <circle cx="16" cy="26" r="1.5" fill="#FFF" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA
// ---------------------------------------------------------------------------
const ReviewsPageSchema = () => {
  const productId = `${SITE_URL}/#product`;
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization
      {
        '@type': 'Organization',
        '@id': orgId,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: `${SITE_URL}/img/iptv-logo.webp`,
          contentUrl: `${SITE_URL}/img/iptv-logo.webp`,
          width: 512,
          height: 512,
          caption: `${BRAND} Logo`,
        },
        email: CONSTANTS.CONTACT.email,
        telephone: CONSTANTS.CONTACT.phone,
        areaServed: ['GB', 'US', 'AU'],
        sameAs: Object.values(CONSTANTS.SOCIALS ?? {}),
      },

      // WebSite
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: BRAND,
        inLanguage: 'en-US',
        publisher: { '@id': orgId },
      },

      // WebPage
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `${BRAND} Reviews & Testimonials`,
        description: `Verified reviews from real ${BRAND} customers.`,
        inLanguage: 'en-US',
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },

      // Single Product node
      {
        '@type': 'Product',
        '@id': productId,
        name: `${BRAND} Premium Subscription`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} delivers premium 4K live TV and on demand media with 99.9% server uptime and quick WhatsApp guided activation.`,
        sku: 'IPTV-PREMIUM',
        category: 'Streaming Service',
        brand: {
          '@type': 'Brand',
          '@id': `${SITE_URL}/#brand`,
          name: BRAND,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: RATING_VALUE,
          reviewCount: REVIEW_COUNT,
          bestRating: '5',
          worstRating: '1',
        },
      },

      // Reviews list
      ...reviews.map((rev, index) => ({
        '@type': 'Review',
        '@id': `${PAGE_URL}/#review-${index + 1}`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(rev.rating),
          bestRating: '5',
          worstRating: '1',
        },
        author: {
          '@type': 'Person',
          name: rev.name,
        },
        reviewBody: rev.text,
        name: rev.title,
        datePublished: rev.date,
        itemReviewed: { '@id': productId },
      })),

      // Breadcrumb
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Reviews', item: PAGE_URL },
        ],
      },

      // FAQ
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: REVIEW_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="reviews-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// STAR RATING
// ---------------------------------------------------------------------------
function StarRating({
  rating,
  size = 'md',
}: {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClass =
    size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${
            i < rating ? 'fill-[#FFD532] text-[#FFD532]' : 'text-[#04208B]/20'
          }`}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// REVIEW CARD
// ---------------------------------------------------------------------------
function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  const initials = review.name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="relative bg-[#EDEADE] border-2 border-[#1C65CE]/20 hover:border-[#FFD532] rounded-3xl p-6 shadow-lg hover:shadow-[0_20px_50px_rgba(255,213,50,0.2)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col">
      <Quote className="absolute top-4 right-4 w-12 h-12 text-[#1C65CE]/10 rotate-180" />

      <div className="flex items-start gap-3.5 mb-4">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1C65CE] to-[#04208B] flex items-center justify-center text-[#EDEADE] font-black text-base uppercase shadow-md">
            {initials}
          </div>
          <div className="absolute -bottom-1 -right-1 rounded-full ring-2 ring-[#EDEADE]">
            <CountryFlag country={review.country} size="sm" />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
            <h3 className="font-black text-[#04208B] text-sm uppercase tracking-tight">
              {review.name}
            </h3>
            {review.verified && (
              <span title="Verified Subscriber">
                <CheckCircle2 className="w-4 h-4 text-[#1C65CE] shrink-0" />
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#04208B]/60">
            <MapPin className="w-3 h-3 text-[#1C65CE]" />
            <span>
              {review.city}, {review.province}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <StarRating rating={review.rating} size="sm" />
        <span className="text-[10px] font-black uppercase tracking-wider text-[#04208B]/50">
          {new Date(review.date).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          })}
        </span>
      </div>

      <h4 className="font-black text-[#04208B] text-base uppercase tracking-tight leading-tight mb-3 line-clamp-2">
        {review.title}
      </h4>

      <p className="text-[#04208B]/75 text-sm font-medium leading-relaxed line-clamp-6 flex-1 mb-4">
        {review.text}
      </p>

      <div className="pt-4 border-t border-[#04208B]/10 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#04208B]/60">
          <PlayCircle className="w-3.5 h-3.5 text-[#1C65CE]" />
          {review.device}
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#1C65CE]">
          <ShieldCheck className="w-3 h-3" />
          Verified
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// FAQ ITEM
// ---------------------------------------------------------------------------
function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group bg-[#EDEADE] border-4 border-[#FFD532] rounded-2xl overflow-hidden">
      <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4 hover:bg-[#EDEADE]/80 transition-colors">
        <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-[#04208B] flex items-start gap-3 text-left">
          <span className="text-[#1C65CE] font-black text-xl shrink-0">Q.</span>
          <span>{q}</span>
        </h3>
        <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#1C65CE] transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-6">
        <p className="text-[#04208B]/80 font-medium leading-relaxed text-sm md:text-base pl-9 border-l-4 border-[#1C65CE] ml-1 py-1">
          {a}
        </p>
      </div>
    </details>
  );
}

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function ReviewsPage() {
  return (
    <>
      <ReviewsPageSchema />

      <div className="flex flex-col min-h-screen bg-[#04208B] text-[#EDEADE]">
        {/* HERO */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1C65CE]/20 blur-[150px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #1C65CE 1px, transparent 1px), linear-gradient(to bottom, #1C65CE 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#1C65CE] px-4 py-2 rounded-full mb-6 shadow-lg border border-[#FFD532]/30">
              <Sparkles className="w-4 h-4 text-[#FFD532]" />
              <span className="text-[#EDEADE] font-black text-xs uppercase tracking-widest">
                Real Customer Feedback
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-[#EDEADE] mb-6">
              {BRAND.toUpperCase()} <br />
              <span className="text-[#FFD532]">REVIEWS & TESTIMONIALS</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#EDEADE]/70 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
              Read verified reviews from {HAPPY_CUSTOMERS} happy customers around the world, rated{' '}
              <span className="text-[#FFD532] font-black">
                {RATING_VALUE}/5
              </span>{' '}
              for buffer free 4K streaming.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDEADE]/5 border border-white/10 text-[#EDEADE] text-xs font-black uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-[#FFD532] fill-[#FFD532]" />
                {RATING_VALUE} / 5
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDEADE]/5 border border-white/10 text-[#EDEADE] text-xs font-black uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-[#FFD532]" />
                {HAPPY_CUSTOMERS} Customers
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EDEADE]/5 border border-white/10 text-[#EDEADE] text-xs font-black uppercase tracking-wider">
                <ThumbsUp className="w-3.5 h-3.5 text-[#FFD532]" />
                {RECOMMEND_PERCENT}% Recommend
              </span>
            </div>
          </div>
        </section>

        {/* OVERALL RATING CARD */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="bg-[#EDEADE] border-4 border-[#FFD532] rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="text-6xl md:text-7xl font-black text-[#1C65CE] leading-none mb-2">
                  {RATING_VALUE}
                </div>
                <div className="mb-3 flex justify-center md:justify-start">
                  <StarRating rating={5} size="lg" />
                </div>
                <p className="text-[#04208B]/70 text-xs font-black uppercase tracking-wider">
                  Based on {REVIEW_COUNT} Reviews
                </p>
              </div>

              <div className="text-center border-y md:border-y-0 md:border-x border-[#04208B]/10 py-6 md:py-0 md:px-8">
                <div className="inline-flex items-center justify-center gap-2 bg-[#1C65CE] text-[#FFD532] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                  <Award className="w-3.5 h-3.5" /> Top Rated
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#04208B] leading-none mb-2">
                  {RECOMMEND_PERCENT}%
                </div>
                <p className="text-[#04208B]/70 text-xs font-black uppercase tracking-wider">
                  Would Recommend
                </p>
              </div>

              <div className="text-center md:text-right">
                <div className="text-4xl md:text-5xl font-black text-[#04208B] leading-none mb-2">
                  {HAPPY_CUSTOMERS}
                </div>
                <p className="text-[#04208B]/70 text-xs font-black uppercase tracking-wider mb-4">
                  Happy Customers
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-end items-center">
                  <CountryFlag country="US" size="md" />
                  <CountryFlag country="UK" size="md" />
                  <CountryFlag country="CA" size="md" />
                  <CountryFlag country="AU" size="md" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS GRID */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#1C65CE]/10 border border-[#1C65CE]/40 px-4 py-1.5 rounded-full mb-4">
              <MessageCircle className="w-4 h-4 text-[#FFD532]" />
              <span className="text-[#FFD532] font-black text-xs uppercase tracking-widest">
                Customer Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#EDEADE] uppercase tracking-tighter leading-tight">
              What Customers Are <span className="text-[#FFD532]">Saying</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: ShieldCheck,
                title: '99.9% Uptime',
                desc: 'Enterprise grade global servers',
              },
              {
                icon: Zap,
                title: '4K & 60FPS',
                desc: 'Ultra HD streaming quality',
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                desc: 'Real WhatsApp team on hand',
              },
              {
                icon: Award,
                title: 'Free Trial First',
                desc: 'Test it on your own device',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#EDEADE] border-2 border-[#1C65CE]/20 hover:border-[#FFD532] rounded-2xl p-5 text-center transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1C65CE]/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[#1C65CE]" />
                  </div>
                  <h3 className="text-sm font-black text-[#04208B] uppercase tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#04208B]/60 font-bold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHATSAPP CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFD532]/40 bg-gradient-to-br from-[#1C65CE] via-[#04208B] to-[#1C65CE] p-8 md:p-10 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,213,50,0.12),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFD532] text-[#04208B] px-4 py-2 rounded-full mb-5 shadow-lg">
                <MessageCircle className="w-4 h-4" />
                <span className="font-black text-xs uppercase tracking-widest">
                  Join {HAPPY_CUSTOMERS} Happy Customers
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#EDEADE] uppercase tracking-tighter leading-tight mb-4">
                Get Started with a Free 24 Hour Trial
              </h3>
              <p className="text-[#EDEADE]/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
                Message our team on WhatsApp. We will set up IPTV Smarters Pro for
                you and get you streaming in under 10 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                    `Hi! I read your reviews and I'd like to try the free 24 hour trial.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFD532] text-[#04208B] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#04208B]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Free Trial
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#04208B] text-[#EDEADE] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#FFD532]"
                >
                  View Pricing <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full mb-16 relative">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[#1C65CE]/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#1C65CE]/10 border border-[#1C65CE]/40 px-4 py-1.5 rounded-full mb-4">
              <MessageCircle className="w-4 h-4 text-[#FFD532]" />
              <span className="text-[#FFD532] font-black text-xs uppercase tracking-widest">
                Reviews FAQ
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#EDEADE] uppercase tracking-tighter leading-tight">
              Common Questions{' '}
              <span className="text-[#FFD532]">About Our Reviews</span>
            </h2>
          </div>

          <div className="space-y-4 relative z-10">
            {REVIEW_FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-20">
          <div className="bg-[#EDEADE] rounded-3xl p-8 md:p-12 border-2 border-[#1C65CE]/20 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#04208B] leading-tight mb-4">
              Ready to Join Our{' '}
              <span className="text-[#1C65CE]">Happy Customers?</span>
            </h3>
            <p className="text-[#04208B]/70 text-sm sm:text-base font-medium max-w-xl mx-auto mb-8">
              Choose from 3, 6, or 12 month plans starting at USD $35. Guided
              WhatsApp setup, 36,000+ channels, and 120,000+ movies and TV
              shows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFD532] text-[#04208B] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg border border-[#04208B]/20"
              >
                View {BRAND} Plans <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/setup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#04208B] text-[#EDEADE] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all border-2 border-[#FFD532]"
              >
                Setup Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}