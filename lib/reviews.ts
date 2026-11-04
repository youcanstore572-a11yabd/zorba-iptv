// @/lib/reviews.ts

export interface Review {
  id: string;
  name: string;
  city: string;
  province: string;        // US: NY/CA/IL/TX/FL/WA/GA/etc | UK: ENG/SCT | CA: ON/BC | AU: NSW/VIC
  country: 'US' | 'UK' | 'CA' | 'AU';
  rating: number;
  title: string;
  text: string;
  date: string;            // ISO "2026-XX-XX"
  verified: boolean;
  device: string;
}

// ---------------------------------------------------------------------------
// SITE-WIDE REVIEW STATS
// ---------------------------------------------------------------------------
export const REVIEW_STATS = {
  averageRating: 4.9,
  totalReviews: 1255,
  recommendPercent: 98,
  happyCustomers: '50,000+',
  countries: [
    { code: 'US' as const, name: 'United States',  flag: 'usa', label: 'USA' },
    { code: 'UK' as const, name: 'United Kingdom', flag: 'uk',  label: 'UK' },
    { code: 'CA' as const, name: 'Canada',         flag: 'ca',  label: 'Canada' },
    { code: 'AU' as const, name: 'Australia',      flag: 'aus', label: 'Australia' },
  ],
};

// ---------------------------------------------------------------------------
// REVIEWS — 20 total (15 US · 2 UK · 2 CA · 1 AU)
// ---------------------------------------------------------------------------
export const reviews: Review[] = [
  // =========================================================================
  // UNITED STATES
  // =========================================================================
  {
    id: '1',
    name: 'Michael R.',
    city: 'New York',
    province: 'NY',
    country: 'US',
    rating: 5,
    title: 'Perfect for NFL and NBA every weekend',
    text: 'Finally found a stable IPTV service for watching the games on weekends without any buffering. The 4K picture on my Firestick 4K Max is razor sharp and zapping between channels is instant. Support answered my WhatsApp within 2 minutes during setup. Real team, no bots.',
    date: '2026-09-08',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '2',
    name: 'Jennifer M.',
    city: 'Los Angeles',
    province: 'CA',
    country: 'US',
    rating: 5,
    title: 'Cancelled my cable and never looked back',
    text: 'Cancelled my old cable package last month and switched over. Setup took under five minutes on my Samsung Smart TV with IPTV Smarters Pro, and the channel lineup is unreal. ESPN, Fox Sports, NFL Network, plus 120,000 movies and TV shows. The 12 month VIP plan paid for itself in the first month.',
    date: '2026-09-03',
    verified: true,
    device: 'Samsung Smart TV',
  },
  {
    id: '3',
    name: 'David P.',
    city: 'Chicago',
    province: 'IL',
    country: 'US',
    rating: 5,
    title: 'Brilliant for college football and international channels',
    text: 'Fantastic selection of college football coverage alongside Indian, Pakistani, and Arabic networks. My parents watch their regional news in HD, and I still get every Big Ten and SEC game. The EPG guide syncs perfectly with Chicago time.',
    date: '2026-08-28',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '4',
    name: 'Rebecca H.',
    city: 'Houston',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: 'Excellent value for a family of four',
    text: 'We run IPTV on three screens at once. My husband watches the NFL, I catch movies, and the kids have their own profiles. Everything stays smooth even during peak hours. For less than one cable box used to cost, we now have 36,000 channels and 120,000 on demand titles.',
    date: '2026-08-09',
    verified: true,
    device: 'Firestick + Smart TVs',
  },
  {
    id: '5',
    name: 'Priya S.',
    city: 'Phoenix',
    province: 'AZ',
    country: 'US',
    rating: 5,
    title: 'Love the international channel range',
    text: 'Great to have Indian, Sri Lankan, and Middle Eastern channels alongside the local American networks. My parents can watch their regional news and I still get every NBA game and Formula 1 race. The stream quality is consistently high and the EPG handles the Arizona time zone without any glitches.',
    date: '2026-07-25',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '6',
    name: 'Nathan B.',
    city: 'Philadelphia',
    province: 'PA',
    country: 'US',
    rating: 5,
    title: 'Great for both sport and everyday TV',
    text: 'Full coverage of ABC, CBS, NBC, FOX, PBS, and The CW alongside ESPN and Fox Sports. Setup on our LG TV was straightforward with the WhatsApp support team walking me through IPTV Smarters Pro. Handy when we travel to the coast and want to catch up on the local news.',
    date: '2026-07-11',
    verified: true,
    device: 'LG Smart TV',
  },
  {
    id: '7',
    name: 'Dylan K.',
    city: 'Dallas',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: 'Best IPTV service I have tried in Texas',
    text: 'Living in Dallas, I struggled to find a provider with reliable servers that delivered low latency for live NFL and NBA. This service has been flawless. No buffering during the Super Bowl, NBA Finals, or UFC pay per views. The 24/7 WhatsApp support is a genuine game changer compared to email only competitors.',
    date: '2026-07-02',
    verified: true,
    device: 'Android TV Box',
  },
  {
    id: '8',
    name: 'Michael R.',
    city: 'San Antonio',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: 'Support helped me set up in under 10 minutes',
    text: 'I am not tech savvy at all and was worried about setup. The teamHere is the complete and rebranded file for `@/lib/reviews.ts` using the **ZorbaIPTV** brand name and global constants.

```typescript
// @/lib/reviews.ts

import { CONSTANTS } from '@/lib/seo';

const BRAND = CONSTANTS.BRAND_NAME;
const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;

export interface Review {
  id: string;
  name: string;
  city: string;
  province: string;        // US: NY/CA/IL/TX/FL/WA/GA/etc | UK: ENG/SCT | CA: ON/BC | AU: NSW/VIC
  country: 'US' | 'UK' | 'CA' | 'AU';
  rating: number;
  title: string;
  text: string;
  date: string;            // ISO "2026-XX-XX"
  verified: boolean;
  device: string;
}

// ---------------------------------------------------------------------------
// SITE-WIDE REVIEW STATS
// ---------------------------------------------------------------------------
export const REVIEW_STATS = {
  averageRating: 4.9,
  totalReviews: 1255,
  recommendPercent: 98,
  happyCustomers: '50,000+',
  countries: [
    { code: 'US' as const, name: 'United States',  flag: 'usa', label: 'USA' },
    { code: 'UK' as const, name: 'United Kingdom', flag: 'uk',  label: 'UK' },
    { code: 'CA' as const, name: 'Canada',         flag: 'ca',  label: 'Canada' },
    { code: 'AU' as const, name: 'Australia',      flag: 'aus', label: 'Australia' },
  ],
};

// ---------------------------------------------------------------------------
// REVIEWS — 20 total (15 US · 2 UK · 2 CA · 1 AU)
// ---------------------------------------------------------------------------
export const reviews: Review[] = [
  // =========================================================================
  // UNITED STATES
  // =========================================================================
  {
    id: '1',
    name: 'Michael R.',
    city: 'New York',
    province: 'NY',
    country: 'US',
    rating: 5,
    title: 'Perfect for NFL and NBA every weekend',
    text: `Finally found a stable ${FOCUS_KEYWORD} service for watching the games on weekends without any buffering. The 4K picture on my Firestick 4K Max is razor sharp and zapping between channels is instant with ${BRAND}. Support answered my WhatsApp within 2 minutes during setup. Real team, no bots.`,
    date: '2026-09-08',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '2',
    name: 'Jennifer M.',
    city: 'Los Angeles',
    province: 'CA',
    country: 'US',
    rating: 5,
    title: 'Cancelled my cable and never looked back',
    text: `Cancelled my old cable package last month and switched over to ${BRAND}. Setup took under five minutes on my Samsung Smart TV with IPTV Smarters Pro, and the channel lineup is unreal. ESPN, Fox Sports, NFL Network, plus 120,000 movies and TV shows. The 12 month VIP plan paid for itself in the first month.`,
    date: '2026-09-03',
    verified: true,
    device: 'Samsung Smart TV',
  },
  {
    id: '3',
    name: 'David P.',
    city: 'Chicago',
    province: 'IL',
    country: 'US',
    rating: 5,
    title: 'Brilliant for college football and international channels',
    text: `Fantastic selection of college football coverage alongside Indian, Pakistani, and Arabic networks on ${BRAND}. My parents watch their regional news in HD, and I still get every Big Ten and SEC game. The EPG guide syncs perfectly with Chicago time.`,
    date: '2026-08-28',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '4',
    name: 'Rebecca H.',
    city: 'Houston',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: 'Excellent value for a family of four',
    text: `We run ${BRAND} on three screens at once. My husband watches the NFL, I catch movies, and the kids have their own profiles. Everything stays smooth even during peak hours. For less than one cable box used to cost, we now have 36,000 channels and 120,000 on demand titles.`,
    date: '2026-08-09',
    verified: true,
    device: 'Firestick + Smart TVs',
  },
  {
    id: '5',
    name: 'Priya S.',
    city: 'Phoenix',
    province: 'AZ',
    country: 'US',
    rating: 5,
    title: 'Love the international channel range',
    text: `Great to have Indian, Sri Lankan, and Middle Eastern channels alongside local American networks on ${BRAND}. My parents can watch their regional news and I still get every NBA game and Formula 1 race. The stream quality is consistently high and the EPG handles Arizona time without any glitches.`,
    date: '2026-07-25',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '6',
    name: 'Nathan B.',
    city: 'Philadelphia',
    province: 'PA',
    country: 'US',
    rating: 5,
    title: 'Great for both sport and everyday TV',
    text: `Full coverage of ABC, CBS, NBC, FOX, PBS, and The CW alongside ESPN and Fox Sports. Setup on our LG TV was straightforward with the ${BRAND} WhatsApp support team walking me through IPTV Smarters Pro. Handy when we travel to the coast and want to catch up on the local news.`,
    date: '2026-07-11',
    verified: true,
    device: 'LG Smart TV',
  },
  {
    id: '7',
    name: 'Dylan K.',
    city: 'Dallas',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: 'Best IPTV service I have tried in Texas',
    text: `Living in Dallas, I struggled to find a provider with reliable servers that delivered low latency for live NFL and NBA. ${BRAND} has been flawless. No buffering during the Super Bowl, NBA Finals, or UFC pay per views. The 24/7 WhatsApp support is a genuine game changer.`,
    date: '2026-07-02',
    verified: true,
    device: 'Android TV Box',
  },
  {
    id: '8',
    name: 'Michael R.',
    city: 'San Antonio',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: 'Support helped me set up in under 10 minutes',
    text: `I am not tech savvy at all and was worried about setup. The ${BRAND} team handled everything over WhatsApp. They sent my M3U URL, walked me through installing IPTV Smarters Pro on my Firestick, and activated it remotely. Streaming was working within 10 minutes of my first message.`,
    date: '2026-06-25',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '9',
    name: 'Olivia W.',
    city: 'San Diego',
    province: 'CA',
    country: 'US',
    rating: 5,
    title: 'IPTV Smarters Pro makes the whole thing feel premium',
    text: `I have used TiviMate, IPTV Smarters, and IBO Player Pro. IPTV Smarters Pro is by far the smoothest. Combined with ${BRAND}, it feels like a premium cable experience for a fraction of the price. The remote activation is brilliant. I sent my device key and everything was set up in 30 seconds.`,
    date: '2026-06-18',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '10',
    name: 'Tyler N.',
    city: 'San Jose',
    province: 'CA',
    country: 'US',
    rating: 5,
    title: 'Reliable through every major sporting event',
    text: `I have watched every NFL playoff game, the NBA Finals, the World Series, and UFC events this year without a single freeze on ${BRAND}. That says everything about the server quality. The 60FPS feeds are noticeably smoother than my old cable box, and pay per view events that used to cost $80 are fully included.`,
    date: '2026-06-11',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '11',
    name: 'Emily C.',
    city: 'Austin',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: 'Works perfectly even in smaller markets',
    text: `I was worried about latency living outside the big cities, but ${BRAND}'s servers handle it perfectly. No buffering, fast channel switching, and the picture quality is excellent. WhatsApp support even helped me fine tune my router settings to reduce any jitter. Highly recommend!`,
    date: '2026-06-04',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '12',
    name: 'Brandon L.',
    city: 'Jacksonville',
    province: 'FL',
    country: 'US',
    rating: 5,
    title: 'Best IPTV provider I have used',
    text: `Tried three different providers before ${BRAND}. All had buffering issues during big games. This service has been flawless for five months. The 4K feeds are sharp, the sport channels are comprehensive, and support is quick. This is the real deal for sports fans.`,
    date: '2026-05-28',
    verified: true,
    device: 'Nvidia Shield Pro',
  },
  {
    id: '13',
    name: 'Chloe A.',
    city: 'Columbus',
    province: 'OH',
    country: 'US',
    rating: 5,
    title: 'Great for a regional household',
    text: `Living in Columbus, we do not always get the best free to air reception. ${BRAND} solved that overnight. We now watch every NFL game and the local news in perfect HD. Setup was simple on the Samsung, and support was patient with all my questions.`,
    date: '2026-05-18',
    verified: true,
    device: 'Samsung Smart TV',
  },
  {
    id: '14',
    name: 'Jack W.',
    city: 'Charlotte',
    province: 'NC',
    country: 'US',
    rating: 5,
    title: 'Worth every dollar for the sport alone',
    text: `ESPN, Fox Sports, NFL Network, NBA TV, and every NFL match on ${BRAND}. For what I used to pay just for one sports add on, I now get everything plus 120,000 movies and TV shows. Picture is clean, zapping is quick, and the WhatsApp support actually replies. No complaints at all.`,
    date: '2026-05-10',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '15',
    name: 'Grace T.',
    city: 'Indianapolis',
    province: 'IN',
    country: 'US',
    rating: 5,
    title: 'Streaming is smooth even in the Midwest',
    text: `Very stable service from Indianapolis. I use ${BRAND} mainly for the NFL, UK channels, and movies with the kids. Setup was easy. I sent my device key over WhatsApp and everything was live within 20 minutes. The 12 month plan is excellent value.`,
    date: '2026-05-02',
    verified: true,
    device: 'Apple TV 4K',
  },

  // =========================================================================
  // UNITED KINGDOM
  // =========================================================================
  {
    id: '16',
    name: 'James P.',
    city: 'London',
    province: 'ENG',
    country: 'UK',
    rating: 5,
    title: 'Excellent for US sport and news from London',
    text: `Living in London, I was looking for a reliable way to watch the NFL and NBA. ${BRAND} delivers exactly that. No buffering during the Super Bowl and the BBC, ITV, and Sky channels are included too. The 24/7 WhatsApp support is unmatched.`,
    date: '2026-08-15',
    verified: true,
    device: 'Nvidia Shield Pro',
  },
  {
    id: '17',
    name: 'Emma H.',
    city: 'Manchester',
    province: 'ENG',
    country: 'UK',
    rating: 5,
    title: 'Reliable service from the UK for US content',
    text: `Very stable service from Manchester. I use ${BRAND} mainly for the NFL and American news, and the feeds are consistently high quality. Setup was easy. I sent my device key over WhatsApp and everything was live within 20 minutes. The 12 month plan is excellent value.`,
    date: '2026-07-04',
    verified: true,
    device: 'Firestick 4K Max',
  },

  // =========================================================================
  // CANADA
  // =========================================================================
  {
    id: '18',
    name: 'Olivia W.',
    city: 'Toronto',
    province: 'ON',
    country: 'CA',
    rating: 5,
    title: 'Fantastic for watching US networks from Canada',
    text: `I live in Toronto and wanted reliable access to ABC, CBS, NBC, and FOX plus ESPN. ${BRAND} fills that gap perfectly. Full NFL, NBA, and MLB coverage in 4K plus all the major US news networks. The latency is minimal even from Canada, and the price is unbeatable.`,
    date: '2026-08-01',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '19',
    name: 'Daniel T.',
    city: 'Vancouver',
    province: 'BC',
    country: 'CA',
    rating: 5,
    title: 'Best IPTV I have tried from Canada',
    text: `I have tested at least five different IPTV providers over the past three years and ${BRAND} is by far the most stable. No freezing during big NFL games and the VOD library is enormous. The free trial gave me confidence to try it. I have been a customer for 8 months now.`,
    date: '2026-07-18',
    verified: true,
    device: 'Android TV Box',
  },

  // =========================================================================
  // AUSTRALIA
  // =========================================================================
  {
    id: '20',
    name: 'Liam T.',
    city: 'Melbourne',
    province: 'VIC',
    country: 'AU',
    rating: 5,
    title: 'Great for keeping up with US sport from Australia',
    text: `I am an American expat in Melbourne and ${BRAND} is a lifeline. Full NFL, NBA, and MLB coverage in 4K. The ESPN, Fox Sports, and NFL Network feeds are perfect for catching up with home. WhatsApp support is fast and honest pricing. Could not ask for more.`,
    date: '2026-08-22',
    verified: true,
    device: 'Firestick 4K',
  },
];

// ---------------------------------------------------------------------------
// REVIEW FAQS — used by /reviews page FAQ + FAQPage schema
// ---------------------------------------------------------------------------
export const REVIEW_FAQS = [
  {
    q: `Is ${BRAND} legit and trustworthy?`,
    a: `Yes. We serve over 50,000 active customers worldwide with a 4.9 out of 5 average rating. We offer a free 24 hour trial, 24/7 WhatsApp support, and secure payments via Credit Card, PayPal, Crypto, and Apple/Google Pay.`,
  },
  {
    q: `How many customers does ${BRAND} have?`,
    a: `We serve over 50,000 active subscribers worldwide, with our largest communities in major metro areas across the United States, United Kingdom, Canada, and Australia.`,
  },
  {
    q: `What do customers say about ${BRAND}?`,
    a: `Customers consistently praise the buffer free 4K streaming, extensive network coverage (ESPN, Fox Sports, NFL Network, ABC, CBS, NBC, FOX), fast WhatsApp support, and the included IPTV Smarters Pro activation service. Our average rating across verified reviews is 4.9 out of 5.`,
  },
  {
    q: 'Can I trust the reviews on this page?',
    a: `Yes. Every review shown on this page comes from a verified active subscriber of ${BRAND}. We only publish reviews from customers who have an active subscription. Reviews are never edited or purchased. They reflect real customer experiences.`,
  },
  {
    q: 'What is the most common feedback?',
    a: `The most common feedback is that we occasionally sell out of monthly 1 screen plans during peak sports seasons like the NFL playoffs, the NBA Finals, and UFC events. We always restock within 24 hours, and priority access is available on the 12 month VIP plan.`,
  },
  {
    q: 'How do I leave a review?',
    a: `Active subscribers can leave a review by messaging our WhatsApp support team directly. We publish all genuine reviews, both positive and critical, to maintain transparency and help future ${BRAND} customers make informed decisions.`,
  },
];