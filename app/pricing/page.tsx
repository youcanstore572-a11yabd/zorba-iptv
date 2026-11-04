'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PricingSection from '../components/PricingSection';
import ShareButtons from '../components/ShareButtons';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  ShieldCheck,
  Zap,
  ChevronDown,
  CreditCard,
  Award,
  Globe,
  Server,
  Trophy,
  Tv,
  Film,
  MonitorPlay,
  Wifi,
  Calendar,
  Lock,
  ThumbsUp,
  Headphones,
  Sparkles,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// FAQ Item — Accordion
// ---------------------------------------------------------------------------
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#EDEADE] border-2 ${
        isOpen ? 'border-[#FFD532]' : 'border-transparent'
      } rounded-2xl p-6 hover:border-[#FFD532]/60 shadow-lg transition-all duration-300 group`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#04208B]' : 'text-[#04208B] group-hover:text-[#1C65CE]'
          } flex items-center gap-3`}
        >
          <span
            className={`${
              isOpen ? 'text-[#1C65CE]' : 'text-[#04208B]/30'
            } font-black text-2xl`}
          >
            Q.
          </span>
          {question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 text-[#1C65CE]'
              : 'text-[#04208B]/30 group-hover:text-[#1C65CE]/50'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#04208B]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#1C65CE] ml-2 py-2">
          {answer}
        </p>
      </div>
    </button>
  );
}

// ---------------------------------------------------------------------------
// MAIN PRICING PAGE
// ---------------------------------------------------------------------------
export default function PricingPage() {
  const BRAND = CONSTANTS.BRAND_NAME;

  return (
    <div className="min-h-screen bg-[#04208B] flex flex-col">

      {/* ==========================================================
          HERO SECTION — Fully Centered
      ========================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt={`${BRAND} IPTV Subscription plans and pricing`}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.2]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#04208B]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-[#04208B]/0" />
        </div>

        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1C65CE 1px, transparent 1px),
              linear-gradient(to bottom, #1C65CE 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1C65CE]/15 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#1C65CE] px-4 py-2 rounded-full mb-6 shadow-md border border-[#FFD532]/30">
                <Sparkles className="w-4 h-4 text-[#FFD532]" />
                <span className="text-[#EDEADE] font-black text-xs uppercase tracking-widest">
                  Best Value IPTV Subscription Plans 2026
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#EDEADE] tracking-tighter uppercase mb-6 leading-none text-center">
                IPTV SUBSCRIPTION PLANS & <br />
                <span className="text-[#FFD532]">BEST PRICING</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-lg md:text-xl text-[#EDEADE]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Stream 20,000+ live channels and 120,000+ movies and TV shows in 4K on any device. Try it free first, get instant activation, and pay with zero hassle.
              </p>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 text-[#EDEADE]/60 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#FFD532]" /> Instant Activation
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFD532]" /> Guided Setup
                </span>
                <span className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-[#FFD532]" /> Free Trial First
                </span>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          MAIN PRICING CARDS
      ========================================================== */}
      <div className="w-full relative z-20 bg-[#000814] py-12" id="pricing-section">
        <PricingSection />
      </div>

      {/* ==========================================================
          FEATURES GRID — LIGHT
      ========================================================== */}
      <section className="py-24 bg-[#EDEADE] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#04208B] mb-4 uppercase tracking-tighter leading-none">
              Everything Included In <span className="text-[#1C65CE]">Every Plan</span>
            </h2>
            <p className="text-[#04208B]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
              Every IPTV Subscription comes with these premium features as standard.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: '20,000+ Live Channels',
                desc: `Sports, news, entertainment, and premium broadcasters from over 50 countries on this IPTV Provider.`,
              },
              {
                icon: Film,
                title: '120,000+ Movies & TV Shows',
                desc: `The latest movies, complete series, and documentaries updated daily on the on-demand library.`,
              },
              {
                icon: MonitorPlay,
                title: '4K & 60FPS Quality',
                desc: `Crystal clear streaming on compatible channels and devices without buffering.`,
              },
              {
                icon: Wifi,
                title: 'Anti Freeze Technology',
                desc: 'Buffer free viewing thanks to advanced stream optimization and dedicated load balancers.',
              },
              {
                icon: Calendar,
                title: 'Full EPG TV Guide',
                desc: '7 day interactive program guide covering all live channels and on-demand titles.',
              },
              {
                icon: Trophy,
                title: 'PPV Events Included',
                desc: 'All major UFC, boxing, NFL, NBA, and Main Event Pay Per View matches at no extra cost.',
              },
              {
                icon: Globe,
                title: 'Global Server Coverage',
                desc: 'Dedicated edge servers across multiple continents for minimal latency on live sports broadcasts.',
              },
              {
                icon: Server,
                title: '99.9% Server Uptime',
                desc: 'Enterprise infrastructure with redundant backup servers for guaranteed streaming stability.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-[#f0ebd8] border-2 border-[#1C65CE]/40 rounded-2xl p-6 hover:border-[#FFD532] shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1C65CE]/15 flex items-center justify-center mb-4 group-hover:bg-[#1C65CE]/25 transition-colors">
                    <Icon className="w-6 h-6 text-[#04208B]" />
                  </div>
                  <h3 className="font-black text-[#04208B] uppercase tracking-wide text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#04208B]/70 text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          COMPARISON TABLE — Dark
      ========================================================== */}
      <section className="py-24 bg-[#04208B] border-y border-[#1C65CE]/30 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#EDEADE] mb-4 uppercase tracking-tighter">
              Compare <span className="text-[#FFD532]">IPTV Subscription Plans</span>
            </h2>
            <p className="text-[#EDEADE]/60 text-base font-bold uppercase tracking-widest mt-2">
              Find the perfect IPTV Provider plan for your streaming needs
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-[#EDEADE] border-2 border-[#1C65CE]/50 rounded-3xl p-4 md:p-6 shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#04208B]/10">
                  <th className="text-left p-4 text-[#04208B] font-black uppercase tracking-wider text-base md:text-lg">
                    Specification
                  </th>
                  <th className="text-center p-4 text-[#1C65CE] font-black uppercase tracking-wider text-base md:text-lg">
                    3 Months
                  </th>
                  <th className="text-center p-4 text-[#1C65CE] font-black uppercase tracking-wider text-base md:text-lg bg-[#04208B]/5 rounded-t-xl">
                    12 Months (VIP)
                  </th>
                  <th className="text-center p-4 text-[#1C65CE] font-black uppercase tracking-wider text-base md:text-lg">
                    6 Months
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#04208B]/5">
                {[
                  { feature: 'Live Channels', basic: '20,000+', pro: '20,000+ VIP', premium: '20,000+' },
                  { feature: 'Movies & TV Shows', basic: '120,000+', pro: '120,000+ (Daily Updates)', premium: '120,000+' },
                  { feature: '4K & 60FPS Streaming', basic: 'Yes', pro: 'Yes (Ultra Bitrate)', premium: 'Yes' },
                  { feature: 'Live Sport & PPV', basic: 'Included', pro: 'All PPV + VIP Feeds', premium: 'Included' },
                  { feature: 'EPG & Catch Up', basic: 'Standard EPG', pro: '7 Day Catch Up + EPG', premium: 'Full EPG' },
                  { feature: 'Anti Freeze Technology', basic: 'Standard', pro: 'VIP Priority Routing', premium: 'Advanced' },
                  { feature: 'VPN Compatible', basic: 'Yes (Not Required)', pro: '100% Compatible', premium: 'Yes' },
                  { feature: 'Number of Screens', basic: '1 or 2 Screens', pro: '1, 2, or 3 Screens', premium: '1 or 2 Screens' },
                  { feature: 'Customer Support', basic: '24/7 Support', pro: '24/7 VIP Priority', premium: 'Priority Support' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#04208B]/[0.02] transition-colors">
                    <td className="p-4 text-[#04208B] font-black uppercase text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-[#04208B]/70 font-bold text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#1C65CE] font-black text-sm bg-[#04208B]/[0.02]">{row.pro}</td>
                    <td className="p-4 text-center text-[#04208B]/70 font-bold text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TRUST BADGES — BLUE
      ========================================================== */}
      <section className="py-24 bg-[#1C65CE] w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD532]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#04208B]/25 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#EDEADE] mb-4 uppercase tracking-tighter">
              Why Choose <span className="text-[#FFD532]">{BRAND}</span>
            </h2>
            <p className="text-[#EDEADE]/85 text-lg font-bold max-w-2xl mx-auto mt-4">
              Trusted by over 50,000 happy viewers worldwide for premium 4K IPTV streaming.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#EDEADE] border-2 border-[#FFD532]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#1C65CE]/15 flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-[#04208B]" />
              </div>
              <h4 className="text-xl font-black text-[#04208B] mb-2 uppercase tracking-wide">
                Secure Payments
              </h4>
              <p className="text-[#04208B]/70 text-sm font-medium">
                Encrypted transactions via Credit Card, PayPal, and Crypto with 256 bit SSL protection.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#EDEADE] border-2 border-[#FFD532]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#1C65CE]/15 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-[#04208B]" />
              </div>
              <h4 className="text-xl font-black text-[#04208B] mb-2 uppercase tracking-wide">
                Instant Activation
              </h4>
              <p className="text-[#04208B]/70 text-sm font-medium">
                Get your IPTV Subscription credentials instantly and start streaming within minutes.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#EDEADE] border-2 border-[#FFD532]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#1C65CE]/15 flex items-center justify-center mb-4">
                <CreditCard className="w-8 h-8 text-[#04208B]" />
              </div>
              <h4 className="text-xl font-black text-[#04208B] mb-2 uppercase tracking-wide">
                Free Trial First
              </h4>
              <p className="text-[#04208B]/70 text-sm font-medium">
                Test IPTV services on your own device and internet before you pay a cent.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-[#EDEADE] border-2 border-[#FFD532]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#1C65CE]/15 flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-[#04208B]" />
              </div>
              <h4 className="text-xl font-black text-[#04208B] mb-2 uppercase tracking-wide">
                24/7 Global Support
              </h4>
              <p className="text-[#04208B]/70 text-sm font-medium">
                Real people on hand around the clock to help with setup, streaming, or anything else you need.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          FREE TRIAL BANNER — Dark
      ========================================================== */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#04208B] w-full">
        <div className="bg-[#EDEADE] border-2 border-[#1C65CE]/40 rounded-3xl p-8 md:p-10 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#1C65CE] px-4 py-2 rounded-full mb-4 shadow-md border border-[#FFD532]/30">
            <Award className="w-4 h-4 text-[#FFD532]" />
            <span className="text-[#EDEADE] font-black text-xs uppercase tracking-widest">
              Try Before You Pay
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#04208B] uppercase tracking-tight mb-3">
            Free Trial First
          </h3>
          <p className="text-[#04208B]/80 max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed">
            Request a free trial and we will set you up so you can test the 4K picture, check the sports lineup, and make sure everything runs smooth on your device and internet connection. Upgrade to a paid IPTV Subscription only when you are happy.
          </p>
        </div>
      </section>

      {/* ==========================================================
          FAQ — LIGHT
      ========================================================== */}
      <section className="w-full bg-[#EDEADE] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#1C65CE]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#04208B] mb-6 uppercase tracking-tighter">
              Frequently Asked <span className="text-[#1C65CE]">Questions</span>
            </h2>
            <p className="text-[#04208B]/70 font-bold text-lg">
              Everything you need to know about our IPTV Subscription plans, pricing, and setup.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4 relative z-10">
            <FAQItem
              question="Which payment methods do you accept?"
              answer="We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrencies (Bitcoin, Ethereum, USDT). Every payment is processed via encrypted 256 bit SSL connections."
            />
            <FAQItem
              question="Can I upgrade or modify my IPTV Subscription later?"
              answer="Yes, you can upgrade at any time to add more screens or switch to a longer period. Just reach our support team and we will adjust your account straight away."
            />
            <FAQItem
              question="Is there a contract or automatic renewal?"
              answer="No. There are no long term contracts and no automatic renewals. Every plan is a prepaid one time payment that stops on its own when the period ends."
            />
            <FAQItem
              question="What happens when my subscription expires?"
              answer="We will send you a reminder before your IPTV Subscription ends. You can renew easily through our support team. If you decide not to renew, the service stops automatically with no further obligation."
            />
            <FAQItem
              question="Do you offer a free trial before I commit?"
              answer="Yes. Request a free trial and we will set you up so you can test the 4K picture quality and channel lineup on your own device and internet connection. Upgrade to a paid IPTV Subscription only when you are happy."
            />
            <FAQItem
              question="Can I use the service on multiple devices at the same time?"
              answer="Yes, depending on your chosen plan. You can pick 1, 2, or 3 simultaneous screens during checkout to watch in multiple rooms at once. Everyone in the household can watch what they want."
            />
            <FAQItem
              question="Are there discounts for longer subscriptions?"
              answer="Yes. The 12 month plans offer the highest savings, up to 60% off compared to the shorter terms. That is the best value option for a household that knows they will stick with it."
            />
            <FAQItem
              question="Do I need a VPN to use this IPTV service?"
              answer="No VPN is required. Our servers are optimized for smooth, buffer free streaming on your home connection."
            />
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          SHARE BUTTONS
      ========================================================== */}
      <div className="w-full flex justify-center items-center py-12 bg-[#04208B]">
        <ShareButtons />
      </div>

      {/* ==========================================================
          BOTTOM CTA — BLUE
      ========================================================== */}
      <section className="py-20 bg-[#1C65CE] border-t border-[#FFD532]/20 w-full relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD532]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#04208B]/30 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-[#EDEADE] mb-4 uppercase tracking-tight">
              Ready To Start Streaming?
            </h2>
            <p className="text-[#EDEADE]/85 font-bold text-lg mb-8 max-w-2xl mx-auto">
              Join over 50,000 happy viewers worldwide. Pick your plan, get instant activation, and test everything on a free trial first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="#pricing-section"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#FFD532] text-[#04208B] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,213,50,0.3)] border-2 border-[#04208B]/30 hover:bg-[#E5BE1F]"
              >
                Choose Your Plan
              </Link>
              <Link
                href="/firestick-setup"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#04208B] text-[#EDEADE] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 border-2 border-[#04208B]"
              >
                Setup Guide
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-[#EDEADE]/70 text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#FFD532]" /> Instant Activation
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#FFD532]" /> Secure Checkout
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#FFD532]" /> Card, PayPal &amp; Crypto
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}