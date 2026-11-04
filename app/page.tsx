'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { ProductSchema, FAQSchema } from './components/PageSchemas';
import { blogPosts } from '@/lib/blog';
import {
  PlayCircle,
  UserCheck,
  BookOpen,
  Star,
  ShieldCheck,
  Zap,
  Download,
  CreditCard,
  CheckCircle2,
  MonitorSmartphone,
  Tv2,
  Cpu,
  ArrowRight,
  Lock,
  ThumbsUp,
  Trophy,
  Medal,
  LifeBuoy,
  Settings,
  Check,
  Smartphone,
  BarChart,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import TargetCountries from './components/TargetCountries';
import ShareButtons from './components/ShareButtons';

/* =========================================================
   ZORBAIPTV — BRAND COLOR SYSTEM
   Primary Accent : #ffc300
   Dark BG        : #04208B / #000814
   Third Colors   : #f0ebd8 / #3e5c76 / #caf0f8 / #fdf0d5
   ========================================================= */

const LoadingSpinner = () => (
  <div className="min-h-[600px] flex items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#ffc300] border-t-transparent" />
  </div>
);

const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => <LoadingSpinner />,
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#04208B]/40 rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => (
    <div className="h-[400px] bg-[#04208B]/40 rounded-3xl animate-pulse max-w-7xl mx-auto" />
  ),
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#ffc300] border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#04208B] text-[#f0ebd8] overflow-hidden">
      <ProductSchema />
      <FAQSchema />

      {/* =========================================================
          HERO SECTION
          BG: #000814 → #04208B gradient
          H1: white + #ffc300 accent
          ========================================================= */}
      <section className="relative px-4 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#000814]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="ZorbaIPTV streaming live US TV channels in 4K Ultra HD quality"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.20]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/70 via-[#04208B]/40 to-[#000814]/80" />
        </div>

        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#04208B]/50 border border-[#ffc300]/50 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <Medal className="w-4 h-4 text-[#ffc300]" />
            <span className="text-[#f0ebd8] font-extrabold text-xs uppercase tracking-widest">
              #1 Rated ZorbaIPTV Provider in the United States
            </span>
          </div>

          <h1 className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight uppercase text-[#f0ebd8] mb-6 leading-[1.05] break-words">
            <span className="block md:whitespace-nowrap">ZORBA IPTV</span>
            <span className="block text-[#ffc300] md:whitespace-nowrap">PREMIUM IPTV PROVIDER</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#f0ebd8]/85 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Looking for the best ZorbaIPTV Provider? Zorba IPTV delivers 20,000+ live channels and 120,000+ movies and shows in crisp 4K on any device. Your IPTV Subscription activates in minutes, running on dedicated edge servers across the USA. From ESPN, FOX, NBC, CBS, and ABC to NFL, NBA, MLB, and NHL — ZorbaIPTV delivers buffer-free, no-contract streaming across the United States. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/pricing"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#ffc300] text-[#000814] font-black text-sm hover:bg-[#e6b000] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#ffc300]/30"
            >
              Buy Zorba IPTV Now
            </Link>
            <Link
              href="/free-trial"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#04208B]/60 text-[#f0ebd8] border border-[#caf0f8]/40 font-black text-sm hover:bg-[#04208B]/90 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5 text-[#ffc300] shrink-0" /> Start Free Trial
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#f0ebd8] font-bold uppercase tracking-widest bg-[#04208B]/40 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#caf0f8]/20 shadow-2xl">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#ffc300]" /> 4K Ultra HD Streaming
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#ffc300]" /> 99.9% US Server Uptime
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#ffc300]" /> Anti-Freeze Technology
            </span>
          </div>
        </FadeIn>
      </section>

      {/* =========================================================
          PARTNER SLIDER
          ========================================================= */}
      <div className="min-h-[128px] bg-[#000814]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* =========================================================
          3-STEP SETUP GUIDE
          BG: #f0ebd8 (light)
          Cards: #04208B with #ffc300 accents
          ========================================================= */}
      <section className="py-28 bg-[#f0ebd8] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3e5c76_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-[#3e5c76]/10 border border-[#3e5c76]/30 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3e5c76] animate-pulse" />
                <span className="text-[#04208B] font-black text-xs uppercase tracking-widest">
                  ZorbaIPTV Setup Guide
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#04208B] tracking-tight uppercase leading-[1.05]">
                START STREAMING IN <br className="hidden sm:block" />
                <span className="text-[#ffc300] relative inline-block mt-1">
                  3 SIMPLE STEPS
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#ffc300]/70 to-transparent rounded-full" />
                </span>
              </h2>

              <p className="text-[#04208B]/80 text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                No tech skills needed. Pick a plan, get your credentials by email, and start watching on any device — Firestick, Smart TV, iPhone, Android, Roku, or PC. The whole ZorbaIPTV Subscription setup takes under five minutes from checkout to first stream across the United States.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Step 1 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#04208B] text-[#f0ebd8] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#3e5c76]/60 shadow-[0_15px_35px_rgba(4,32,139,0.25)] hover:border-[#ffc300] hover:shadow-[0_25px_50px_rgba(255,195,0,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#000814] text-[#f0ebd8] shadow-lg shadow-[#000814]/40 border border-[#ffc300]/40 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Tv2 className="w-8 h-8 text-[#ffc300]" />
                  </div>
                  <span className="text-5xl font-black text-[#000814] bg-[#ffc300] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#000814] bg-[#ffc300] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Step One
                </div>

                <h3 className="text-2xl font-black text-[#f0ebd8] mb-3 uppercase tracking-tight group-hover:text-[#ffc300] transition-colors">
                  Choose Your Plan
                </h3>

                <p className="text-[#f0ebd8]/85 text-sm font-medium leading-relaxed mb-6">
                  Pick the ZorbaIPTV Subscription that fits your household. Choose 1, 2, or 3 simultaneous screens and lock in a 3, 6, or 12-month term. Plans are displayed in USD ($) — no hidden fees, no surprise charges, no contract you can't cancel.
                </p>

                <ul className="text-xs font-bold text-[#f0ebd8]/75 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffc300]" /> 1, 2, or 3 Device Options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffc300]" /> 3, 6, or 12 Month Terms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffc300]" /> USD ($) Pricing, No Contract
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#3e5c76]/50 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#f0ebd8] uppercase tracking-wider group-hover:text-[#ffc300] transition-colors">
                  Simple Selection
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#000814] text-[#f0ebd8] flex items-center justify-center shadow-md group-hover:bg-[#ffc300] group-hover:text-[#000814] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 2 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#04208B] text-[#f0ebd8] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#3e5c76]/60 shadow-[0_15px_35px_rgba(4,32,139,0.25)] hover:border-[#ffc300] hover:shadow-[0_25px_50px_rgba(255,195,0,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#000814] text-[#f0ebd8] shadow-lg shadow-[#000814]/40 border border-[#ffc300]/40 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Download className="w-8 h-8 text-[#ffc300]" />
                  </div>
                  <span className="text-5xl font-black text-[#000814] bg-[#ffc300] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#000814] bg-[#ffc300] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Step Two
                </div>

                <h3 className="text-2xl font-black text-[#f0ebd8] mb-3 uppercase tracking-tight group-hover:text-[#ffc300] transition-colors">
                  Get Instant Credentials
                </h3>

                <p className="text-[#f0ebd8]/85 text-sm font-medium leading-relaxed mb-6">
                  Your M3U playlist and Xtream Codes login land in your inbox within five minutes. Fire up a player like IPTV Extreme Pro, TiviMate, or Smart IPTV, paste your credentials, and you're live. Works on Firestick, Android TV, Apple TV, Smart TVs, phones, and desktop.
                </p>

                <ul className="text-xs font-bold text-[#f0ebd8]/75 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffc300]" /> M3U &amp; Xtream Codes Delivered by Email
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffc300]" /> Works with IPTV Extreme Pro &amp; TiviMate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffc300]" /> Setup Takes Under 5 Minutes
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#3e5c76]/50 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#f0ebd8] uppercase tracking-wider group-hover:text-[#ffc300] transition-colors">
                  Instant Delivery
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#000814] text-[#f0ebd8] flex items-center justify-center shadow-md group-hover:bg-[#ffc300] group-hover:text-[#000814] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 3 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#04208B] text-[#f0ebd8] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#3e5c76]/60 shadow-[0_15px_35px_rgba(4,32,139,0.25)] hover:border-[#ffc300] hover:shadow-[0_25px_50px_rgba(255,195,0,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#000814] text-[#f0ebd8] shadow-lg shadow-[#000814]/40 border border-[#ffc300]/40 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#ffc300]" />
                  </div>
                  <span className="text-5xl font-black text-[#000814] bg-[#ffc300] px-4 py-1 rounded-2xl shadow-md tracking-tight">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#000814] bg-[#ffc300] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  Step Three
                </div>

                <h3 className="text-2xl font-black text-[#f0ebd8] mb-3 uppercase tracking-tight group-hover:text-[#ffc300] transition-colors">
                  Stream &amp; Enjoy
                </h3>

                <p className="text-[#f0ebd8]/85 text-sm font-medium leading-relaxed mb-6">
                  Dive into 20,000+ live channels, catch every NFL, NBA, MLB, NHL, and UFC game, and binge 120,000+ on-demand titles. Questions along the way? Our 24/7 support team is on call — real people, real answers, no waiting in line.
                </p>

                <ul className="text-xs font-bold text-[#f0ebd8]/75 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffc300]" /> 20,000+ Live Channels &amp; 120K+ VOD
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffc300]" /> NFL, NBA, MLB, NHL, UFC &amp; PPV
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffc300]" /> 24/7 Customer Support
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#3e5c76]/50 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#f0ebd8] uppercase tracking-wider group-hover:text-[#ffc300] transition-colors">
                  Ready to Watch
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#000814] text-[#f0ebd8] flex items-center justify-center shadow-md group-hover:bg-[#ffc300] group-hover:text-[#000814] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>


      {/* =========================================================
          TARGET COUNTRIES STRIP
          BG: #ffc300
          ========================================================= */}
      <section className="w-full bg-[#ffc300] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <TargetCountries />
        </div>
      </section>


      {/* =========================================================
          LIVING ROOM SECTION
          BG: #FFF3B0 (light yellow)
          ========================================================= */}
      <section className="w-full bg-[#FFF3B0] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#1C65CE]/10 border border-[#1C65CE]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#04208B]">
            Home Cinema Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#04208B] leading-none">
            BRING 4K STREAMING TO YOUR <span className="text-[#1C65CE]">LIVING ROOM</span>
          </h2>
        </div>

        <div className="w-full bg-[#FFF3B0] py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="ZorbaIPTV playing on a Smart TV in a modern US living room"
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-[#04208B]/80 font-medium">
            Nothing beats match day on the big screen — whether it's Sunday NFL in New York, NBA playoffs in Los Angeles, or MLB action across the country. ZorbaIPTV runs on dedicated edge servers across the United States, keeping the picture razor-sharp and the sound locked in sync. Settle into the couch and skip the buffering for good.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/pricing"
              className="bg-[#25D366] px-8 py-3 text-sm font-black uppercase tracking-widest text-white hover:bg-[#20BA5A] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#25D366]/30"
            >
              Activate Subscription Today
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          MEDIA GRID / CHANNELS
          BG: #000814
          ========================================================= */}
      <section
        id="channels"
        className="pt-24 bg-[#000814] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-[#3e5c76]/30"
      >
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#f0ebd8] mb-4 uppercase tracking-tight leading-none">
              20,000+ LIVE CHANNELS FOR THE UNITED STATES
            </h2>
            <p className="text-[#f0ebd8]/80 font-medium text-lg">
              Every major US network — ESPN, Fox, NBC, CBS, ABC, HBO, Showtime, Starz, CNN, MSNBC, and local broadcasts — plus thousands of international feeds. New titles drop daily across our on-demand library. It's the ZorbaIPTV Provider lineup built for American viewers, all in one place.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#04208B]/40 rounded-2xl" />
            ))}
          </div>
        )}
      </section>

      {/* =========================================================
          PRICING SECTION
          ========================================================= */}
      <div className="min-h-[600px] bg-[#000814]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      <section className="w-full max-w-4xl mx-auto px-4 my-8 flex justify-center items-center bg-[#04208B]">
        <ShareButtons />
      </section>

      {/* =========================================================
          TRUST BADGES
          BG: #fdf0d5 card on #04208B
          ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#04208B]">
        <div className="bg-[#f0ebd8] text-[#04208B] border border-[#3e5c76]/30 rounded-3xl p-8 md:p-12 shadow-2xl">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#caf0f8]/40 border border-[#3e5c76]/30 flex items-center justify-center shrink-0">
                <Lock className="w-7 h-7 text-[#04208B]" />
              </div>
              <div>
                <div className="font-black text-[#04208B] text-lg uppercase tracking-tight">
                  Secure Payment Options
                </div>
                <p className="text-[#04208B]/70 font-medium text-xs mt-1">
                  Encrypted checkout with Credit Card, PayPal, or Crypto
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#caf0f8]/40 border border-[#3e5c76]/30 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-7 h-7 text-[#04208B]" />
              </div>
              <div>
                <div className="font-black text-[#04208B] text-lg uppercase tracking-tight">
                  Free Trial First
                </div>
                <p className="text-[#04208B]/70 font-medium text-xs mt-1">
                  Test the service on your own device before you pay a cent
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#caf0f8]/40 border border-[#3e5c76]/30 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-7 h-7 text-[#04208B]" />
              </div>
              <div>
                <div className="font-black text-[#04208B] text-lg uppercase tracking-tight">
                  24/7 Customer Support
                </div>
                <p className="text-[#04208B]/70 font-medium text-xs mt-1">
                  Real humans, real fast — via email and live chat
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#caf0f8]/40 border border-[#3e5c76]/30 flex items-center justify-center shrink-0">
                <Medal className="w-7 h-7 text-[#04208B]" />
              </div>
              <div>
                <div className="font-black text-[#04208B] text-lg uppercase tracking-tight">
                  US Edge Data Centers
                </div>
                <p className="text-[#04208B]/70 font-medium text-xs mt-1">
                  High-speed servers across the USA for low latency
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          ANIMATED STATISTICS
          BG: #000814
          ========================================================= */}
      <section className="py-24 bg-[#000814] relative overflow-hidden border-y border-[#3e5c76]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-[#f0ebd8] mb-4 uppercase tracking-tight">
              ZORBAIPTV PERFORMANCE METRICS
            </h3>
            <p className="text-[#ffc300] text-base font-bold mt-4 uppercase tracking-wider">
              Trusted by 50,000+ subscribers across New York, Los Angeles, Chicago, and major US cities.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center p-6 bg-[#f0ebd8] text-[#04208B] rounded-3xl border border-[#3e5c76]/30 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#04208B] mb-2">
                <AnimatedCounter value={50} suffix="K+" />
              </span>
              <span className="text-xs text-[#04208B]/70 font-extrabold uppercase tracking-widest mt-2">
                Active Subscribers
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#f0ebd8] text-[#04208B] rounded-3xl border border-[#3e5c76]/30 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#04208B] mb-2">
                <AnimatedCounter value={20} suffix="K+" />
              </span>
              <span className="text-xs text-[#04208B]/70 font-extrabold uppercase tracking-widest mt-2">
                Live Channels
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#f0ebd8] text-[#04208B] rounded-3xl border border-[#3e5c76]/30 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#04208B] mb-2">
                <AnimatedCounter value={120} suffix="K+" />
              </span>
              <span className="text-xs text-[#04208B]/70 font-extrabold uppercase tracking-widest mt-2">
                On Demand Titles
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#f0ebd8] text-[#04208B] rounded-3xl border border-[#3e5c76]/30 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#04208B] mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-[#04208B]/70 font-extrabold uppercase tracking-widest mt-2">
                Server Uptime
              </span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          BENEFITS SECTION
          BG: #f0ebd8
          ========================================================= */}
      <section className="py-24 bg-[#f0ebd8] relative overflow-hidden border-t border-[#3e5c76]/15">
        <div className="absolute inset-0 bg-[radial-gradient(#3e5c76_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#3e5c76]/10 border border-[#3e5c76]/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3e5c76] animate-pulse" />
              <span className="text-[#04208B] font-black text-xs uppercase tracking-widest">
                Reliable IPTV Services Across the USA
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#04208B] mb-6 uppercase tracking-tight leading-none">
              WHY ZORBAIPTV IS THE <span className="text-[#ffc300]">BEST IPTV PROVIDER</span> IN THE USA
            </h2>
            <p className="text-[#04208B]/80 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Households across America are done overpaying for cable. Here is why so many are switching to ZorbaIPTV — and why we're rated the best ZorbaIPTV Provider in the USA.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                iconSvg: (
                  <svg
                    className="w-7 h-7 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                ),
                title: 'Massive On-Demand Library',
                desc: '120,000+ movies and complete TV box sets, refreshed daily. Multiple audio tracks and subtitles included.',
              },
              {
                iconSvg: (
                  <svg
                    className="w-7 h-7 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Anti-Freeze Server Technology',
                desc: 'Our servers spread the load across US data centers, so your stream stays smooth even during peak NFL and NBA nights.',
              },
              {
                iconSvg: (
                  <svg
                    className="w-7 h-7 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: 'US-Optimized Routing',
                desc: 'Fast paths to our US edge servers mean low latency, quick channel flips, and steady picture quality wherever you watch.',
              },
              {
                iconSvg: (
                  <svg
                    className="w-7 h-7 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
                title: 'All Major US Sports',
                desc: 'NFL, NBA, MLB, NHL, UFC, PPV, ESPN, FOX, NBC, CBS, and ABC — all at a frame rate that keeps the action razor-sharp.',
              },
              {
                iconSvg: (
                  <svg
                    className="w-7 h-7 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: '7-Day Electronic Program Guide',
                desc: 'A full week of listings plus catch-up options, so you never miss a show or a game.',
              },
              {
                iconSvg: (
                  <svg
                    className="w-7 h-7 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
                title: 'Multi-Device Connections',
                desc: 'One account, multiple screens. Firestick, Android TV, Smart TVs, tablets, and phones all covered.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#04208B] text-[#f0ebd8] rounded-[2.5rem] p-8 border-2 border-[#3e5c76]/60 shadow-xl hover:border-[#ffc300] hover:shadow-[0_20px_45px_rgba(255,195,0,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#000814] border border-[#ffc300]/40 flex items-center justify-center mb-6 shadow-lg shadow-[#000814]/30">
                    {item.iconSvg}
                  </div>
                  <h3 className="text-2xl font-black text-[#f0ebd8] mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#f0ebd8]/85 font-medium text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#3e5c76]/50 flex items-center justify-between text-xs font-bold text-[#ffc300]">
                  <span className="uppercase tracking-wider">Key Feature</span>
                  <span className="w-2 h-2 rounded-full bg-[#ffc300]" />
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>



      {/* =========================================================
          GLOBAL SERVER MAP
          ========================================================= */}
      <div className="min-h-[400px] bg-[#04208B]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>



      {/* =========================================================
          CHANNEL CATEGORIES
          BG: #f0ebd8
          ========================================================= */}
      <section className="py-24 bg-[#f0ebd8] relative border-t border-[#3e5c76]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#3e5c76]/10 border border-[#3e5c76]/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3e5c76] animate-pulse" />
              <span className="text-[#04208B] font-black text-xs uppercase tracking-widest">
                20,000+ Live Channels
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#04208B] mb-6 uppercase tracking-tight leading-none">
              EXPLORE OUR <span className="text-[#3e5c76]">CHANNEL CATEGORIES</span>
            </h2>
            <p className="text-[#04208B]/80 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              From live sports to global broadcasts, ZorbaIPTV pulls everything into one place — no apps, no switching, no hassle.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                cat: 'Live Sports Networks',
                channels:
                  'Watch the NFL, NBA, MLB, NHL, UFC, and major PPV fight nights with motion that stays clean and sharp.',
                footer: ['4K Streaming', 'Live Now'],
                iconSvg: (
                  <svg
                    className="w-6 h-6 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
              },
              {
                cat: 'US Networks & Cable',
                channels:
                  'Full live coverage of ABC, CBS, NBC, Fox, ESPN, CNN, MSNBC, HBO, Showtime, and Starz.',
                footer: ['4K Ready', 'Live'],
                iconSvg: (
                  <svg
                    className="w-6 h-6 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
              },
              {
                cat: 'Movies & On Demand',
                channels:
                  'Thousands of cinema releases, streaming originals, and complete TV box sets refreshed daily.',
                footer: ['Crisp Picture', 'Available'],
                iconSvg: (
                  <svg
                    className="w-6 h-6 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                ),
              },
              {
                cat: 'Kids & Family',
                channels:
                  'Family-friendly shows, cartoons, and educational series that parents can trust for younger viewers.',
                footer: ['HD Quality', 'Streaming'],
                iconSvg: (
                  <svg
                    className="w-6 h-6 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                cat: 'Global Television',
                channels:
                  'International networks from Europe, Asia, the Middle East, and Latin America so you can stay close to home.',
                footer: ['HD Feed', 'On Air'],
                iconSvg: (
                  <svg
                    className="w-6 h-6 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                ),
              },
              {
                cat: 'Documentary & Nature',
                channels:
                  'Educational content about science, history, wildlife, and geography for viewers who love to learn.',
                footer: ['Crisp Picture', 'Available'],
                iconSvg: (
                  <svg
                    className="w-6 h-6 text-[#ffc300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#04208B] text-[#f0ebd8] rounded-3xl p-6 border-2 border-[#3e5c76]/60 shadow-lg hover:border-[#ffc300] hover:shadow-[0_15px_30px_rgba(255,195,0,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#000814] flex items-center justify-center shrink-0 border border-[#ffc300]/40 shadow-md">
                      {item.iconSvg}
                    </div>
                    <h3 className="font-black text-[#f0ebd8] text-base uppercase tracking-wider">
                      {item.cat}
                    </h3>
                  </div>
                  <p className="text-[#f0ebd8]/85 font-semibold text-xs leading-relaxed">
                    {item.channels}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#3e5c76]/40 flex items-center justify-between text-[10px] font-extrabold uppercase text-[#ffc300] tracking-widest">
                  <span>{item.footer[0]}</span>
                  <span>{item.footer[1]}</span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          FEATURE BLOCKS (4K + SPORTS)
          BG: #000814
          ========================================================= */}
      <section className="bg-[#000814] py-24 border-y border-[#3e5c76]/30 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#04208B]/40 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#04208B]/40 blur-[150px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl space-y-28 px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Block 1: 4K Quality */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#04208B]/40 border-2 border-[#3e5c76]/60 p-3 shadow-2xl transition-all duration-500 hover:border-[#ffc300]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt="ZorbaIPTV 4K ZorbaIPTV Provider service streaming in high definition on a Smart TV in the USA"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#000814]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#f0ebd8] border border-[#3e5c76]/60 shadow-md">
                  4K Ultra HD Quality
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#000814]/95 backdrop-blur-md border border-[#3e5c76]/50 p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px] shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffc300] text-[#000814] shrink-0 shadow-lg shadow-[#ffc300]/40">
                      <PlayCircle className="h-6 w-6 text-[#000814]" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#f0ebd8]">
                        Ultra Clear Streams
                      </p>
                      <p className="text-xs font-medium text-[#f0ebd8]/85 mt-0.5">
                        Enjoy sharp picture quality and smooth motion on any supported display.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FadeIn className="order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#04208B]/60 border border-[#3e5c76]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#ffc300]">
                <span className="w-2 h-2 rounded-full bg-[#ffc300] animate-pulse" />
                High Definition Playback
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f0ebd8] leading-[1.1] mb-6">
                EXPERIENCE UNMATCHED <br />
                <span className="text-[#ffc300] relative inline-block mt-1">
                  4K VIDEO CLARITY
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#3e5c76]/70 rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#f0ebd8]/85 font-medium">
                When you connect to ZorbaIPTV's global servers, you tap into a network built for stability. We route your traffic through high-bandwidth nodes across the United States that cut down on buffering and keep 4K, Full HD, and HD streams looking their best — all at a stable 60FPS.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#f0ebd8]/75 font-medium">
                Local news, movie night, match day — it all plays smooth on Firestick, Smart TV, Android TV, Apple TV, Roku, and mobile.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Anti-Freeze Protection Engine',
                  'Wide Channel Selection in 4K & FHD',
                  '120,000+ On-Demand Titles Available',
                  'Compatible with Firestick, TV & Mobile',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#04208B]/40 text-[#f0ebd8] border border-[#3e5c76]/40 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#ffc300] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ffc300] text-[#000814] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#ffc300] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#000814] hover:bg-[#e6b000] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg shadow-[#ffc300]/30"
                >
                  Get Instant Access Now
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Block 2: Live Sports */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#04208B]/60 border border-[#3e5c76]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#ffc300]">
                <span className="w-2 h-2 rounded-full bg-[#ffc300] animate-pulse" />
                Match Day & Pay Per View
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f0ebd8] leading-[1.1] mb-6">
                NEVER MISS A SINGLE <br />
                <span className="text-[#ffc300] relative inline-block mt-1">
                  GAME OR EVENT
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#3e5c76]/70 rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#f0ebd8]/85 font-medium">
                Sports fans need smooth feeds and fast response times. As a trusted ZorbaIPTV Provider across the USA, ZorbaIPTV delivers the NFL, NBA, MLB, NHL, UFC, and pay-per-view fight nights — no fuss, no freezing.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#f0ebd8]/75 font-medium">
                Super Bowl Sunday, NBA finals, championship fights — our infrastructure handles peak traffic without skipping a beat. You get 60FPS action that keeps the play looking natural.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Full NFL, NBA, MLB & NHL Coverage',
                  'ESPN, FOX, NBC, CBS & ABC Live',
                  'UFC, Boxing & PPV Events',
                  'Zero Buffering Guarantee',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#04208B]/40 text-[#f0ebd8] border border-[#3e5c76]/40 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#ffc300] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ffc300] text-[#000814] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="#channels"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#04208B] border-2 border-[#ffc300] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#f0ebd8] hover:bg-[#000814] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg"
                >
                  Explore Sports Coverage
                </Link>
              </div>
            </FadeIn>

            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#04208B]/40 border-2 border-[#3e5c76]/60 p-3 lg:order-2 shadow-2xl transition-all duration-500 hover:border-[#ffc300]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt="NFL game day streaming on a ZorbaIPTV Subscription in the USA"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#000814]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#f0ebd8] border border-[#3e5c76]/60 shadow-md">
                  Match Day Broadcasts
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#000814]/95 backdrop-blur-md border border-[#3e5c76]/50 p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ffc300] text-[#000814] shadow-lg shadow-[#ffc300]/40">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#f0ebd8]">Sports Pass</p>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-[#ffc300]">
                        Global Sports &amp; Live Feeds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPARISON TABLE
          BG: #04208B
          ========================================================= */}
      <section className="py-24 relative overflow-hidden bg-[#04208B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#000814]/60 px-4 py-2 rounded-full border border-[#ffc300]/50 mb-6">
              <BarChart className="w-4 h-4 text-[#ffc300]" />
              <span className="text-[#f0ebd8] font-extrabold text-xs uppercase tracking-wider">
                Service Comparison
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#f0ebd8] mb-6 uppercase tracking-tight">
              ZORBAIPTV VS TRADITIONAL CABLE TV
            </h2>
            <p className="text-[#f0ebd8]/90 text-lg max-w-3xl mx-auto font-medium">
              Side by side — why so many households across the United States are switching to the best ZorbaIPTV Provider and never looking back.
            </p>
          </FadeIn>

          <div className="hidden md:block overflow-x-auto">
            <div className="rounded-3xl border border-[#ffc300]/40 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 border-b border-r border-[#000814]/50 bg-[#000814]">
                  <h3 className="text-lg font-black uppercase text-[#f0ebd8]">
                    Feature Comparison
                  </h3>
                </div>
                <div className="p-6 border-b border-r border-[#000814]/50 bg-[#000814]">
                  <h3 className="text-lg font-black uppercase text-[#ffc300]">
                    ZorbaIPTV Subscription
                  </h3>
                </div>
                <div className="p-6 border-b border-[#000814]/50 bg-[#000814]">
                  <h3 className="text-lg font-black uppercase text-[#f0ebd8]/70">
                    Traditional Cable TV
                  </h3>
                </div>

                {[
                  {
                    feature: 'Monthly Cost',
                    us: 'From $35 / 3 months',
                    cable: '$80 to $140 per month',
                  },
                  {
                    feature: 'Contract Terms',
                    us: 'No Contract – Cancel Anytime',
                    cable: '12 to 24 Month Contracts',
                  },
                  {
                    feature: 'Live Channels',
                    us: '20,000+ Channels',
                    cable: '60 to 100 Channels',
                  },
                  {
                    feature: 'On Demand Movies',
                    us: '120,000+ Titles',
                    cable: 'Limited On Demand Selection',
                  },
                  {
                    feature: 'Ultra HD Quality',
                    us: 'Standard Inclusion',
                    cable: 'Extra HD Hardware Fees',
                    usIcon: true,
                  },
                  {
                    feature: 'Multiple Screens',
                    us: 'Multi-Device Support',
                    cable: 'Additional Box Rental Fees',
                    usIcon: true,
                  },
                  {
                    feature: 'Sports Events',
                    us: 'NFL, NBA, MLB, NHL Included',
                    cable: 'Extra Sports Package Fees',
                    usIcon: true,
                  },
                  {
                    feature: 'International Feeds',
                    us: 'Global Networks Included',
                    cable: 'Restricted Add-on Options',
                  },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    <div
                      className={`p-6 border-r border-b border-[#000814]/40 ${
                        idx % 2 === 0 ? 'bg-[#04208B]' : 'bg-[#000814]'
                      }`}
                    >
                      <span className="text-[#f0ebd8] font-bold text-sm">{row.feature}</span>
                    </div>

                    <div
                      className={`p-6 border-r border-b border-[#000814]/40 ${
                        idx % 2 === 0 ? 'bg-[#04208B]' : 'bg-[#000814]'
                      }`}
                    >
                      {row.usIcon ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#ffc300]" />
                          <span className="text-[#f0ebd8] font-extrabold text-sm">{row.us}</span>
                        </div>
                      ) : (
                        <span className="text-[#ffc300] font-black text-sm">{row.us}</span>
                      )}
                    </div>

                    <div
                      className={`p-6 border-b border-[#000814]/40 ${
                        idx % 2 === 0 ? 'bg-[#000814]/85' : 'bg-[#04208B]/70'
                      }`}
                    >
                      <span className="text-[#f0ebd8]/70 text-sm font-medium">{row.cable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-4">
            {[
              { feature: 'Monthly Cost', us: 'From $35/3mo', cable: '$80 to $140/mo' },
              { feature: 'Contract Terms', us: 'No Contract', cable: '12 to 24 Months' },
              { feature: 'Live Channels', us: '20,000+ Channels', cable: '60 to 100 Channels' },
              { feature: 'On Demand Titles', us: '120,000+ Titles', cable: 'Limited Selection' },
              { feature: '4K Streaming', us: 'Included Standard', cable: 'Extra Hardware Fee' },
              { feature: 'Multi Screen', us: 'Multi Device', cable: 'Fee per box' },
              {
                feature: 'Sports Events',
                us: 'NFL, NBA, MLB Included',
                cable: 'Extra Monthly Fees',
              },
              {
                feature: 'International Feeds',
                us: 'Global Networks',
                cable: 'Extra Add-ons',
              },
            ].map((row, idx) => (
              <div
                key={idx}
                className="bg-[#000814] text-[#f0ebd8] rounded-3xl border border-[#ffc300]/40 p-5 shadow-lg"
              >
                <div className="text-center mb-3">
                  <span className="text-[#ffc300] text-xs font-black uppercase tracking-wider">
                    {row.feature}
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="text-left bg-[#04208B] p-3 rounded-2xl flex-1 border border-[#ffc300]/60">
                    <div className="text-[#ffc300] font-black text-sm">{row.us}</div>
                    <div className="text-[#f0ebd8]/90 text-[10px] font-bold uppercase">
                      ZorbaIPTV Subscription
                    </div>
                  </div>
                  <div className="text-right bg-[#000814] p-3 rounded-2xl flex-1 border border-[#3e5c76]/50">
                    <div className="text-[#f0ebd8]/60 line-through text-sm">{row.cable}</div>
                    <div className="text-[#f0ebd8]/50 text-[10px] font-bold uppercase">
                      Traditional Cable
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CUSTOMER REVIEWS
          BG: #f0ebd8
          ========================================================= */}
      <section className="py-24 bg-[#f0ebd8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#3e5c76]/10 px-4 py-2 rounded-full border border-[#3e5c76]/30 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#04208B]" />
              <span className="text-[#04208B] font-extrabold text-xs uppercase tracking-wider">
                Verified Subscriber Feedback
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#04208B] mb-6 uppercase tracking-tight">
              TRUSTED BY <span className="text-[#3e5c76]">50,000+ SUBSCRIBERS</span>
            </h2>
            <p className="text-[#04208B]/80 text-lg font-medium max-w-2xl mx-auto">
              Real reviews from real subscribers across the USA — what they say about ZorbaIPTV (and why they're not going back to cable).
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'James T.',
                avatar:
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
                text: "I spent months hunting for a ZorbaIPTV Provider that wouldn't freeze during Sunday NFL games on my Firestick. ZorbaIPTV finally delivered. Setup took five minutes and the picture is crystal clear.",
                role: 'New York, USA',
              },
              {
                name: 'Jennifer L.',
                avatar:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
                text: 'Cancelled my cable package last month and switched to ZorbaIPTV. The team walked me through setup via chat in about five minutes, and I tested everything before paying. Highly recommend.',
                role: 'Los Angeles, USA',
              },
              {
                name: 'Olivia M.',
                avatar:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
                text: "Great mix of live sports, NFL, NBA, and on-demand titles. IPTV Extreme Pro runs smooth on my Android box here in Chicago. Easily the best IPTV services I've tried.",
                role: 'Chicago, USA',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#fdf0d5] text-[#04208B] rounded-3xl p-8 border border-[#3e5c76]/30 shadow-xl transition-all hover:-translate-y-2 hover:border-[#ffc300] hover:shadow-2xl duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-[#3e5c76] shadow-md shrink-0"
                      />
                      <div>
                        <div className="font-black text-[#04208B] text-base uppercase tracking-tight flex items-center gap-1.5">
                          {testimonial.name}
                          <UserCheck className="w-4 h-4 text-[#3e5c76]" />
                        </div>
                        <div className="text-[#3e5c76] text-xs font-bold uppercase tracking-wider">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#ffc300] text-[#ffc300]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-[#04208B]/80 font-medium text-base leading-relaxed italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                <div className="border-t border-[#3e5c76]/20 pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-black text-[#3e5c76] uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3e5c76]" /> Verified Subscriber
                  </span>
                  <span className="text-[11px] font-bold text-[#04208B]/50 uppercase">
                    Verified User
                  </span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          SUPPORTED DEVICES
          BG: #000814
          ========================================================= */}
      <section className="py-24 bg-[#000814] w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#04208B]/50 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3e5c7614_1px,transparent_1px),linear-gradient(to_bottom,#3e5c7614_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#04208B]/60 px-4 py-2 rounded-full border border-[#ffc300]/50 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ffc300] animate-pulse" />
              <span className="text-[#ffc300] font-extrabold text-xs uppercase tracking-widest">
                Universal Hardware Support
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#f0ebd8] mb-6 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
              COMPATIBLE WITH ALL POPULAR DEVICES
            </h2>

            <p className="text-[#f0ebd8]/80 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Setup is a breeze no matter what device you already own. ZorbaIPTV supports standard M3U playlists and Xtream Codes APIs across Android, iOS, Smart TVs, Roku, and desktop — no special hardware needed across the United States.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              {
                tag: 'Amazon Firestick & Fire TV',
                desc: 'Fire OS, Fire TV Cube, and 4K Sticks',
                detail:
                  'IPTV Extreme Pro and other popular players run great here for quick channel switching and smooth navigation.',
                icon: Zap,
                code: '01',
              },
              {
                tag: 'Smart TVs (Samsung & LG)',
                desc: 'Samsung Tizen OS and LG webOS Systems',
                detail:
                  'Install a player app straight from the TV app store and start watching without any extra boxes.',
                icon: Tv2,
                code: '02',
              },
              {
                tag: 'Android TV & Streaming Boxes',
                desc: 'Nvidia Shield, Google TV, and Android Boxes',
                detail:
                  'Full hardware decoding support for steady frame rates during live sports broadcasts.',
                icon: Cpu,
                code: '03',
              },
              {
                tag: 'Apple TV, iPhone & iPad',
                desc: 'tvOS and iOS Operating Platforms',
                detail:
                  'Smooth performance across iOS player apps with support for cloud-synced settings.',
                icon: Smartphone,
                code: '04',
              },
              {
                tag: 'Windows PCs & Mac Computers',
                desc: 'Windows 10 and 11, macOS, and Linux',
                detail:
                  'Stream directly through desktop media players or a web browser interface.',
                icon: MonitorSmartphone,
                code: '05',
              },
              {
                tag: 'MAG & Dedicated Boxes',
                desc: 'Portal Media Players and Set-Top Devices',
                detail:
                  'Native MAC address integration with full Electronic Program Guide functionality.',
                icon: ShieldCheck,
                code: '06',
              },
            ].map((device) => {
              const Icon = device.icon;
              return (
                <div
                  key={device.tag}
                  className="group relative bg-[#f0ebd8] text-[#04208B] border border-[#3e5c76]/40 rounded-3xl p-7 flex flex-col justify-between gap-5 hover:border-[#ffc300] hover:shadow-[0_12px_35px_rgba(255,195,0,0.3)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#ffc300] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#04208B] border border-[#ffc300]/50 flex items-center justify-center shrink-0 group-hover:bg-[#000814] group-hover:scale-105 transition-all duration-300 shadow-md">
                        <Icon className="w-7 h-7 text-[#ffc300] transition-all duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-[#04208B] uppercase tracking-wide leading-tight">
                          {device.tag}
                        </h3>
                        <p className="text-xs font-bold text-[#3e5c76] mt-0.5">{device.desc}</p>
                      </div>
                    </div>

                    <span className="text-xs font-black text-[#000814] bg-[#ffc300] px-2.5 py-1 rounded-xl shrink-0">
                      {device.code}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#04208B]/75 leading-relaxed pt-2 border-t border-[#04208B]/10">
                    {device.detail}
                  </p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          FAQ
          ========================================================= */}
      <div className="min-h-[400px] bg-[#04208B]">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* =========================================================
          BLOG SECTION
          BG: #f0ebd8
          ========================================================= */}
      <section className="py-24 bg-[#f0ebd8] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3e5c76_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#3e5c76]/10 px-4 py-2 rounded-full border border-[#3e5c76]/30 mb-6">
                <BookOpen className="w-4 h-4 text-[#04208B]" />
                <span className="text-[#04208B] font-extrabold text-xs uppercase tracking-widest">
                  Guides &amp; Insights
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#04208B] mb-4 uppercase tracking-tight">
                LATEST SETUP <span className="text-[#3e5c76]">GUIDES &amp; NEWS</span>
              </h2>
              <p className="text-[#04208B]/70 text-lg font-medium max-w-2xl leading-relaxed">
                Get more out of ZorbaIPTV with step-by-step setup guides, troubleshooting fixes, and network tips that keep your stream fast.
              </p>
            </div>

            <div className="flex shrink-0">
              <Link
                href="/blog"
                className="whitespace-nowrap px-7 py-4 rounded-2xl bg-[#ffc300] text-[#000814] font-black hover:bg-[#e6b000] transition-all duration-300 flex items-center gap-3 group shrink-0 shadow-xl hover:shadow-[0_10px_25px_rgba(255,195,0,0.3)]"
              >
                <span className="uppercase text-xs tracking-wider">Explore All Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#000814]" />
              </Link>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group cursor-pointer h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-[#fdf0d5] text-[#04208B] rounded-3xl p-4 border-2 border-[#3e5c76]/20 shadow-md hover:border-[#ffc300] hover:shadow-[0_20px_40px_rgba(255,195,0,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full relative">
                    <div>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#000814]">
                        <Image
                          src={post.image}
                          alt={`${post.title} ZorbaIPTV setup guide`}
                          width={800}
                          height={450}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-3 py-1 bg-[#ffc300] text-[#000814] text-[10px] font-black uppercase tracking-widest rounded-lg shadow-md">
                            {post.author || 'Setup Guide'}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3">
                          <span className="px-2.5 py-1 bg-[#000814]/80 backdrop-blur-md text-[#f0ebd8] text-[10px] font-extrabold uppercase tracking-wider rounded-lg border border-[#f0ebd8]/20">
                            5 Min Read
                          </span>
                        </div>
                      </div>

                      <div className="p-4 pt-6">
                        <h3 className="text-lg font-black text-[#04208B] mb-2.5 group-hover:text-[#3e5c76] transition-colors tracking-tight line-clamp-2 uppercase leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-[#04208B]/70 text-xs font-semibold line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 pb-3 pt-3 border-t border-[#3e5c76]/15 flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-2 text-xs font-black text-[#3e5c76] uppercase tracking-wider group-hover:text-[#04208B] transition-colors">
                        Read Article
                      </span>

                      <div className="w-9 h-9 rounded-xl bg-[#3e5c76]/10 border border-[#3e5c76]/30 flex items-center justify-center text-[#3e5c76] group-hover:bg-[#ffc300] group-hover:text-[#000814] group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
          ========================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f0ebd8] w-full">
        <div className="absolute inset-0 bg-[radial-gradient(#3e5c76_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border-2 border-[#3e5c76]/30 bg-[#f0ebd8] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3e5c76]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ffc300]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="h-2 w-full bg-gradient-to-r from-[#04208B] via-[#3e5c76] to-[#ffc300]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3e5c76]/30 bg-[#3e5c76]/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#04208B]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#04208B]">
                  IPTV Services in the United States
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#04208B] leading-[1.05] mb-6">
                UPGRADE YOUR ENTERTAINMENT <br />
                <span className="text-[#ffc300]">EXPERIENCE TODAY</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#04208B]/80">
                Pick your plan, get instant credentials by email, and start streaming on your own device. Test everything first — upgrade to a paid ZorbaIPTV Subscription only when you're ready. No contract. No hassle. No surprises.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['20K+', 'Live Channels'],
                  ['Ultra HD', 'Stream Quality'],
                  ['99.9%', 'Server Uptime'],
                  ['24/7', 'Customer Support'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl sm:rounded-3xl border border-[#3e5c76]/30 bg-[#fdf0d5] p-4 shadow-sm hover:border-[#ffc300] transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-[#04208B]">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#04208B]/70">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#ffc300] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#000814] hover:bg-[#e6b000] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#ffc300]/30"
                >
                  Choose Your Plan
                </Link>
                <Link
                  href="/firestick-setup"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#3e5c76]/40 bg-[#fdf0d5] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#04208B] hover:bg-[#3e5c76]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <Settings className="h-4 w-4 text-[#04208B] shrink-0" /> Firestick Setup Guide
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#3e5c76] uppercase tracking-wider">
                Instant Email Delivery • 24/7 Customer Support
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}