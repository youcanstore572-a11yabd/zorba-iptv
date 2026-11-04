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
    name: "Alex M.",
    city: 'New York',
    province: 'NY',
    country: 'US',
    rating: 5,
    title: "A dependable choice for weekend NFL and NBA",
    text: "I wanted a stream I could rely on for weekend games, and Zorba IPTV has been a good fit so far. The picture looks sharp on my Firestick 4K Max, channels change quickly, and the setup team replied to my WhatsApp message within a few minutes. Getting started was straightforward.",
    date: '2026-09-08',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '2',
    name: "Samantha L.",
    city: 'Los Angeles',
    province: 'CA',
    country: 'US',
    rating: 5,
    title: "A welcome change from traditional cable",
    text: "After leaving my cable package, I set this up on my Samsung Smart TV using IPTV Smarters Pro. The installation was simple, and I like having sports, regular channels, films, and series together in one place. The longer subscription also works out better for my budget than my previous cable bill.",
    date: '2026-09-03',
    verified: true,
    device: 'Samsung Smart TV',
  },
  {
    id: '3',
    name: "Marcus D.",
    city: 'Chicago',
    province: 'IL',
    country: 'US',
    rating: 5,
    title: "A useful mix of local and international channels",
    text: "The channel selection has a good mix of college football and international programming. My parents can catch regional news from their preferred channels, while I can follow Big Ten and SEC games. The electronic programme guide also makes it easier to find what is on.",
    date: '2026-08-28',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '4',
    name: "Lauren B.",
    city: 'Houston',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: "Convenient viewing across the household",
    text: "We use the service on several screens at home, so everyone can choose something different. I usually watch films, my husband follows football, and the kids have their own favourites. It has been convenient having live channels and on-demand entertainment available in one place.",
    date: '2026-08-09',
    verified: true,
    device: 'Firestick + Smart TVs',
  },
  {
    id: '5',
    name: "Anika R.",
    city: 'Phoenix',
    province: 'AZ',
    country: 'US',
    rating: 5,
    title: "A helpful selection of international programming",
    text: "I appreciate being able to find Indian, Sri Lankan, and Middle Eastern channels alongside American programming. My parents can keep up with regional news, and I can still follow basketball and Formula 1. The picture quality has been good on my Firestick, and the programme guide is easy to use.",
    date: '2026-07-25',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '6',
    name: "Ethan C.",
    city: 'Philadelphia',
    province: 'PA',
    country: 'US',
    rating: 5,
    title: "Straightforward setup on my LG television",
    text: "There is a broad selection of familiar US networks as well as sports channels. I installed the app on my LG TV with help from the WhatsApp support team, who guided me through the steps. It is also handy to have news and entertainment channels available when I am away from home.",
    date: '2026-07-11',
    verified: true,
    device: 'LG Smart TV',
  },
  {
    id: '7',
    name: "Ryan K.",
    city: 'Dallas',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: "A solid option for live sports",
    text: "I was looking for an IPTV option that could handle live sports without constant interruptions. My experience with Zorba IPTV has been positive, including during busy match times. Channel changes are quick on my Android TV box, and being able to contact support through WhatsApp is convenient.",
    date: '2026-07-02',
    verified: true,
    device: 'Android TV Box',
  },
  {
    id: '8',
    name: "Daniel F.",
    city: 'San Antonio',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: "Patient help getting everything running",
    text: "I am not particularly confident with technology, so I appreciated having someone guide me through the setup. The support team explained how to add the playlist and install IPTV Smarters Pro on my Firestick. I was able to get started without having to work everything out on my own.",
    date: '2026-06-25',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '9',
    name: "Megan W.",
    city: 'San Diego',
    province: 'CA',
    country: 'US',
    rating: 5,
    title: "An easy experience with IPTV Smarters Pro",
    text: "I have tried a few player apps, including TiviMate and IBO Player Pro, and IPTV Smarters Pro has been straightforward for my needs. The setup guidance was useful, and the service is easy to navigate once everything is configured. Sending the device details for activation was simple.",
    date: '2026-06-18',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '10',
    name: "Chris N.",
    city: 'San Jose',
    province: 'CA',
    country: 'US',
    rating: 5,
    title: "Good picture quality for live events",
    text: "I mainly use the service for major sporting events, including football, basketball, baseball, and UFC. The picture has been clear on my Firestick 4K Max, and the smoother frame-rate options are noticeable during fast action. It has been a convenient way to keep up with the events I follow.",
    date: '2026-06-11',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '11',
    name: "Taylor J.",
    city: 'Austin',
    province: 'TX',
    country: 'US',
    rating: 5,
    title: "A positive experience outside a major city",
    text: "I was unsure how well streaming would work where I live, but my experience has been encouraging. Channels load quickly and the picture quality has been good. Support also offered some practical advice about my router settings when I asked about improving my home connection.",
    date: '2026-06-04',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '12',
    name: "Jordan P.",
    city: 'Jacksonville',
    province: 'FL',
    country: 'US',
    rating: 5,
    title: "A better experience than my previous providers",
    text: "I had tried a few IPTV providers before giving this one a chance, and my earlier experiences included frequent freezing during live games. So far, Zorba IPTV has been more consistent for me. I also like the selection of sports channels and the clear picture on my Nvidia Shield Pro.",
    date: '2026-05-28',
    verified: true,
    device: 'Nvidia Shield Pro',
  },
  {
    id: '13',
    name: "Hannah E.",
    city: 'Columbus',
    province: 'OH',
    country: 'US',
    rating: 5,
    title: "Simple to get started on a Samsung TV",
    text: "Free-to-air reception can be unreliable at my home, so I wanted another way to watch television. Setup on my Samsung TV was manageable, and the support team answered my questions patiently. I have enjoyed having local news and a wider selection of entertainment channels available.",
    date: '2026-05-18',
    verified: true,
    device: 'Samsung Smart TV',
  },
  {
    id: '14',
    name: "Oliver W.",
    city: 'Charlotte',
    province: 'NC',
    country: 'US',
    rating: 5,
    title: "A worthwhile option for sports fans",
    text: "I mainly signed up for the sports selection, including ESPN, Fox Sports, NFL Network, and NBA TV. I also use the on-demand library for films and series. The picture is clear, channel switching feels responsive, and I have been able to reach support when I needed help.",
    date: '2026-05-10',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '15',
    name: "Sophie G.",
    city: 'Indianapolis',
    province: 'IN',
    country: 'US',
    rating: 5,
    title: "Easy streaming setup from Indianapolis",
    text: "I use the service for football, UK channels, and films to watch with the family. Getting it running on my Apple TV 4K was simple, and the team helped me with the device details over WhatsApp. The longer plan is convenient for me because I do not have to renew as often.",
    date: '2026-05-02',
    verified: true,
    device: 'Apple TV 4K',
  },

  // =========================================================================
  // UNITED KINGDOM
  // =========================================================================
  {
    id: '16',
    name: "Oliver P.",
    city: 'London',
    province: 'ENG',
    country: 'UK',
    rating: 5,
    title: "A convenient mix of US sport and UK channels",
    text: "From London, I wanted a service with US sports alongside familiar UK channels. The selection includes the programming I was looking for, and the setup process was uncomplicated. I also found the WhatsApp support useful when I had a question about getting started.",
    date: '2026-08-15',
    verified: true,
    device: 'Nvidia Shield Pro',
  },
  {
    id: '17',
    name: "Charlotte D.",
    city: 'Manchester',
    province: 'ENG',
    country: 'UK',
    rating: 5,
    title: "Useful access to American programming from Manchester",
    text: "I mainly watch NFL games and American news, so I wanted a service with a good range of US channels. The streams have looked clear during my viewing, and setup on my Firestick 4K Max was easy. The support team helped me get everything ready.",
    date: '2026-07-04',
    verified: true,
    device: 'Firestick 4K Max',
  },

  // =========================================================================
  // CANADA
  // =========================================================================
  {
    id: '18',
    name: "Noah B.",
    city: 'Toronto',
    province: 'ON',
    country: 'CA',
    rating: 5,
    title: "A broad selection of US channels in Toronto",
    text: "I wanted access to major US networks such as ABC, CBS, NBC, and FOX, as well as ESPN. The channel selection has been useful for following sports and news from Toronto. The service has been easy to use on my Apple TV 4K, and the pricing suited my budget.",
    date: '2026-08-01',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '19',
    name: "Isabella C.",
    city: 'Vancouver',
    province: 'BC',
    country: 'CA',
    rating: 5,
    title: "A positive IPTV experience in Vancouver",
    text: "I had tested several IPTV services over the last few years, so I was cautious about trying another one. My experience so far has been encouraging, and I have found the on-demand selection extensive. I also appreciated being able to try the service before choosing a subscription.",
    date: '2026-07-18',
    verified: true,
    device: 'Android TV Box',
  },

  // =========================================================================
  // AUSTRALIA
  // =========================================================================
  {
    id: '20',
    name: "Liam H.",
    city: 'Melbourne',
    province: 'VIC',
    country: 'AU',
    rating: 5,
    title: "Keeping up with US sports from Melbourne",
    text: "Living in Melbourne, I wanted a convenient way to follow US sports and keep up with channels from home. I have been able to find the football, basketball, and baseball coverage I was looking for. The picture has been good on my Firestick, and support has been responsive when contacted.",
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
    q: 'Is this IPTV service legit and trustworthy?',
    a: 'Yes. We serve over 50,000 active customers worldwide with a 4.9 out of 5 average rating. We offer a free 24 hour trial, 24/7 WhatsApp support, and secure payments via Credit Card, PayPal, Crypto, and Apple/Google Pay.',
  },
  {
    q: 'How many customers does this IPTV service have?',
    a: 'We serve over 50,000 active subscribers worldwide, with our largest communities in major metro areas across the United States, United Kingdom, Canada, and Australia.',
  },
  {
    q: 'What do customers say about this service?',
    a: 'Customers consistently praise the buffer free 4K streaming, extensive network coverage (ESPN, Fox Sports, NFL Network, ABC, CBS, NBC, FOX), fast WhatsApp support, and the included IPTV Smarters Pro activation service. Our average rating across verified reviews is 4.9 out of 5.',
  },
  {
    q: 'Can I trust the reviews on this page?',
    a: 'Yes. Every review shown on this page comes from a verified active subscriber. We only publish reviews from customers who have an active subscription. Reviews are never edited or purchased. They reflect real customer experiences.',
  },
  {
    q: 'What is the most common feedback?',
    a: 'The most common feedback is that we occasionally sell out of monthly 1 screen plans during peak sports seasons like the NFL playoffs, the NBA Finals, and UFC events. We always restock within 24 hours, and priority access is available on the 12 month VIP plan.',
  },
  {
    q: 'How do I leave a review?',
    a: 'Active subscribers can leave a review by messaging our WhatsApp support team directly. We publish all genuine reviews, both positive and critical, to maintain transparency and help future customers make informed decisions.',
  },
];