'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  CheckCircle2,
  Zap,
  Crown,
  MonitorPlay,
  Gift,
  Sparkles,
  Flame,
  ShieldCheck,
  Lock,
} from 'lucide-react';

const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const SECONDARY_KEYWORD = CONSTANTS.SECONDARY_FOCUS_KEYWORD;
const THIRD_KEYWORD = CONSTANTS.TERTIARY_FOCUS_KEYWORD;

// ---------------------------------------------------------------------------
// Payment Method SVG Icons
// ---------------------------------------------------------------------------
const PaymentIcons = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const isDark = variant === 'dark';
  const shellBg = isDark ? '#09090B' : '#FFFFFF';
  const shellBorder = isDark ? 'rgba(255,206,0,0.35)' : '#E4E4E7';

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <div
      className="flex items-center justify-center h-8 w-12 rounded-md overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: shellBg, border: `1px solid ${shellBorder}` }}
    >
      {children}
    </div>
  );

  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="22" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fontStyle="italic" fill={isDark ? '#FFFFFF' : '#1434CB'} letterSpacing="-0.5">VISA</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="16" r="9" fill="#EB001B" />
          <circle cx="29" cy="16" r="9" fill="#F79E1B" />
          <path d="M24 8.5a9 9 0 000 15 9 9 0 000-15z" fill="#FF5F00" />
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="900" fontStyle="italic" fill="#003087">Pay</text>
          <text x="24" y="27" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="9" fontWeight="800" fontStyle="italic" fill="#0079C1">Pal</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" fontWeight="900" fill="#003399">SEPA</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="10" fill="#F7931A" />
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">₿</text>
        </svg>
      </Shell>
    </div>
  );
};

// ---------------------------------------------------------------------------
// ANIMATED PRICE COMPONENT
// ---------------------------------------------------------------------------
const AnimatedPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  return (
    <span className={`inline-flex items-baseline ${className ?? ''}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -25, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.7 }}
          transition={{ duration: 0.35, type: 'spring', stiffness: 200, damping: 18 }}
          className="inline-block"
        >
          ${value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------
export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  // OFFICIAL ZORBAIPTV SUBSCRIPTION PRICING — USD ($)
  // 1 DEVICE:  3mo $35 | 6mo $45 | 12mo $65
  // 2 DEVICES: 3mo $55 | 6mo $75 | 12mo $99
  // 3 DEVICES: 3mo $77 | 6mo $99 | 12mo $150
  const pricing = {
    1: {
      3:  { total: 35, mo: (35 / 3).toFixed(2) },
      6:  { total: 45, mo: (45 / 6).toFixed(2) },
      12: { total: 65, mo: (65 / 12).toFixed(2) },
    },
    2: {
      3:  { total: 55, mo: (55 / 3).toFixed(2) },
      6:  { total: 75, mo: (75 / 6).toFixed(2) },
      12: { total: 99, mo: (99 / 12).toFixed(2) },
    },
    3: {
      3:  { total: 77, mo: (77 / 3).toFixed(2) },
      6:  { total: 99, mo: (99 / 6).toFixed(2) },
      12: { total: 150, mo: (150 / 12).toFixed(2) },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];

  const handleWhatsAppRedirect = (months: number) => {
    const selectedPrice = currentPricing[months as 3 | 6 | 12]?.total;
    const message = `Hi ${SECONDARY_KEYWORD} Team! I would like to order the ${months}-month ${FOCUS_KEYWORD} plan for ${devices} ${
      devices > 1 ? 'devices' : 'device'
    } for $${selectedPrice}. Please send me the login credentials and activation guide via WhatsApp.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Hi ${SECONDARY_KEYWORD} Support! I would like to request a free 24-hour trial to test ${FOCUS_KEYWORD}, 4K streaming quality, live channels, and sports coverage on my device before subscribing.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="pricing-section"
      className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20 bg-[#09090B] text-[#FFFFFF] overflow-hidden"
    >
      {/* Background decorations — full width */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFD532]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:40px_40px] pointer-events-none" />

      {/* Inner content container — keeps content centered */}
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 md:mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#FFD532] bg-[#09090B] px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#FFD532]/10">
            <Crown className="w-4 h-4 text-[#FFD532]" />
            <span className="text-[#FFD532] font-black text-xs uppercase tracking-widest">
              #1 {FOCUS_KEYWORD} Provider
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight leading-tight">
            CHOOSE YOUR <span className="text-[#FFD532]">{FOCUS_KEYWORD.toUpperCase()}</span> PLAN
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Experience premium {THIRD_KEYWORD} with blazing-fast 4K Ultra HD streaming. Save more with 12-month plans including multi-room, 24/7 WhatsApp service, and instant activation.
          </p>

          {/* Device Switcher */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-[#FFD532]" />
              <span className="text-xs text-[#A1A1AA] font-black uppercase tracking-widest">
                Select Number of Simultaneous Devices
              </span>
            </div>
            <div className="inline-flex bg-[#121215] border border-[#FFFFFF]/10 rounded-2xl p-1.5 shadow-2xl relative">
              {[1, 2, 3].map((d) => (
                <button
                  key={d}
                  onClick={() => setDevices(d as 1 | 2 | 3)}
                  className={`px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 relative ${
                    devices === d
                      ? 'bg-[#FFD532] text-[#09090B] shadow-lg shadow-[#FFD532]/40 scale-[1.03] ring-2 ring-[#FFD532]/40'
                      : 'text-[#A1A1AA] hover:text-[#FFFFFF]'
                  }`}
                >
                  {d} {d > 1 ? 'Devices' : 'Device'}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Pricing Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-stretch max-w-6xl mx-auto mt-12 relative z-10">

          {/* CARD 1: 3 MONTHS — STARTER */}
          <FadeInItem className="relative bg-[#FFFFFF] text-[#09090B] border-4 border-[#04208B] rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-xl transition-all duration-500 hover:border-[#FFD532] hover:shadow-[0_25px_60px_rgba(4,32,139,0.35)] hover:-translate-y-3">
            <div className="absolute inset-0 bg-gradient-to-br from-[#04208B]/0 via-[#04208B]/0 to-[#04208B]/0 group-hover:from-[#04208B]/5 group-hover:to-[#04208B]/10 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-black text-[#04208B] uppercase tracking-[0.2em]">Starter Plan</h4>
                <MonitorPlay className="w-5 h-5 text-[#04208B] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <div className="text-3xl font-black text-[#09090B] mb-2 tracking-tighter uppercase">3 Months</div>

              <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#FFFFFF] border-2 border-[#04208B]/20 shadow-md transition-all duration-500 group-hover:border-[#04208B] group-hover:shadow-lg group-hover:scale-[1.05]">
                <span className="text-5xl font-black text-[#09090B] tracking-tighter transition-all duration-500 group-hover:text-[#04208B]">
                  <AnimatedPrice value={currentPricing[3]?.total || 0} />
                </span>
              </div>
              <div className="text-[11px] font-black text-[#04208B] mb-5 uppercase tracking-widest border border-[#04208B]/30 self-start px-3 py-1 rounded-full inline-block bg-[#04208B]/10">
                ${currentPricing[3]?.mo || 0} / Month
              </div>

              <button
                onClick={() => handleWhatsAppRedirect(3)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#04208B] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#000814] transition-all shadow-lg shadow-[#04208B]/30 active:scale-95 group-hover:scale-105 mb-4"
              >
                Order 3 Months
              </button>

              <div className="mb-6 pt-3 border-t border-[#E4E4E7]">
                <div className="flex items-center justify-between text-[10px] font-black text-[#71717A] uppercase tracking-widest mb-2">
                  <span>Secure Payments</span>
                  <Lock className="w-3 h-3 text-[#71717A]" />
                </div>
                <PaymentIcons variant="light" />
              </div>

              <ul className="w-full space-y-3.5 flex-grow relative mb-6">
                {[
                  `${devices} Simultaneous ${devices > 1 ? 'Devices' : 'Connection'}`,
                  '4K Ultra HD & 60FPS Premium Sports',
                  '20,000+ Live Channels Worldwide',
                  '120,000+ Movies & TV Shows (Updated Daily)',
                  'NFL, NBA, MLB, NHL, UFC & All PPV Events',
                  '7-Day Catch-Up & Full EPG Guide',
                  'Anti-Freeze Global Edge Servers',
                  'Smart TV, Firestick, Apple TV, iOS, Android',
                  '24/7 Support via WhatsApp',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[#52525B] text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#04208B] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-[#F4F4F5] rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#04208B]/10 mt-auto">
                <Zap className="w-4 h-4 text-[#04208B] shrink-0" />
                <span className="text-[11px] font-black text-[#09090B] uppercase tracking-wider">
                  Instant Activation • 99.9% Server Uptime
                </span>
              </div>
            </div>
          </FadeInItem>

          {/* CARD 2: 12 MONTHS VIP */}
          <FadeInItem className="relative bg-[#1A1608] border-2 border-[#FFD532] rounded-3xl p-6 sm:p-9 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(255,213,50,0.25)] z-20 group transition-all duration-500 hover:shadow-[0_0_70px_rgba(255,213,50,0.5)] hover:-translate-y-6">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-auto whitespace-nowrap">
              <div className="bg-[#FFD532] text-[#09090B] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full flex items-center gap-1.5 shadow-xl border border-[#09090B]">
                <Flame className="w-3.5 h-3.5 fill-current text-[#09090B]" /> Bestseller {FOCUS_KEYWORD}
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFD532]/0 via-[#FFD532]/0 to-[#FFD532]/0 group-hover:from-[#FFD532]/5 group-hover:to-[#FFD532]/10 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full pt-2">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-black text-[#FFD532] uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-[#FFD532]" /> Ultimate VIP
                </h4>
                <Sparkles className="w-4 h-4 text-[#FFD532] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>

              <div className="mb-2 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#04208B] text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#04208B]/40">
                <Flame className="w-3 h-3 fill-current" /> Maximum Discount
              </div>

              <div className="text-3xl font-black text-[#FFD532] mb-2 tracking-tighter uppercase">
                12 Months
              </div>

              <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#09090B] border-2 border-[#FFD532]/30 shadow-md transition-all duration-500 group-hover:border-[#FFD532] group-hover:shadow-[0_0_30px_rgba(255,213,50,0.5)] group-hover:scale-[1.05]">
                <span className="text-6xl font-black text-[#FFD532] tracking-tighter drop-shadow-[0_0_20px_rgba(255,213,50,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(255,213,50,0.8)]">
                  <AnimatedPrice value={currentPricing[12]?.total || 0} />
                </span>
              </div>

              <div className="text-[11px] font-black text-[#FFD532] mb-5 uppercase tracking-widest border border-[#FFD532] self-start px-4 py-1.5 rounded-full inline-block bg-[#FFD532]/10 shadow-sm">
                BEST PRICE: ${currentPricing[12]?.mo || 0} / Month
              </div>

              <button
                onClick={() => handleWhatsAppRedirect(12)}
                className="w-full text-center whitespace-nowrap px-6 py-4 sm:py-5 rounded-full bg-[#FFD532] text-[#09090B] font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#d4a803] transition-all shadow-xl shadow-[#FFD532]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_40px_rgba(255,213,50,0.5)] mb-4"
              >
                Get 12 Months VIP
              </button>

              <div className="mb-6 pt-3 border-t border-[#FFD532]/20">
                <div className="flex items-center justify-between text-[10px] font-black text-[#FFD532]/80 uppercase tracking-widest mb-2">
                  <span>Secure Payments</span>
                  <Lock className="w-3 h-3 text-[#FFD532]" />
                </div>
                <PaymentIcons variant="dark" />
              </div>

              <ul className="w-full space-y-3.5 flex-grow relative mb-6">
                {[
                  `${devices} Simultaneous ${devices > 1 ? 'Devices' : 'Connection'}`,
                  'Ultra HD 4K & Full HD 60FPS Quality',
                  '20,000+ Premium Live Channels',
                  '120,000+ Movies & TV Shows (New Titles Daily)',
                  'NFL, NBA, MLB, NHL, UFC & All PPV Events',
                  '7-Day Catch-Up & Full EPG Guide',
                  'Dedicated VIP High-Speed Server Line',
                  'Smart TV, Firestick, Apple TV, iOS, Android, MAG',
                  '24/7 VIP Priority Support via WhatsApp',
                ].map((feature, idx) => (
                  <li key={feature} className="flex items-center gap-3 text-[#FFFFFF] font-semibold text-sm">
                    <div className="bg-[#FFD532]/20 p-0.5 rounded-full border border-[#FFD532]/40">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD532] flex-shrink-0" />
                    </div>
                    <span className="text-[#FFFFFF]">{feature}</span>
                    {idx === 4 && (
                      <span className="bg-[#FFD532]/20 text-[#FFD532] text-[9px] font-black uppercase px-2 py-0.5 rounded ml-auto border border-[#FFD532]/40">
                        All PPVs
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-[#FFD532]/10 border border-[#FFD532]/30 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#FFD532]/20 mt-auto">
                <Crown className="w-4 h-4 text-[#FFD532] shrink-0" />
                <span className="text-[11px] font-black text-[#FFD532] uppercase tracking-wider">
                  Includes Dedicated VIP Server Line
                </span>
              </div>
            </div>
          </FadeInItem>

          {/* CARD 3: 6 MONTHS — PREMIUM */}
          <FadeInItem className="relative bg-gradient-to-br from-[#04208B] via-[#021457] to-[#04208B] border-4 border-[#FFD532] rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-[0_25px_60px_rgba(4,32,139,0.4)] transition-all duration-500 hover:shadow-[0_35px_80px_rgba(4,32,139,0.6)] hover:-translate-y-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_60%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-black text-[#FFD532] uppercase tracking-[0.2em]">Premium Plan</h4>
                <MonitorPlay className="w-5 h-5 text-[#FFD532] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <div className="text-3xl font-black text-[#FFFFFF] mb-2 tracking-tighter uppercase">6 Months</div>

              <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#FFFFFF] border-2 border-[#FFD532]/30 shadow-md transition-all duration-500 group-hover:bg-black/30 group-hover:border-[#FFD532] group-hover:shadow-[0_0_30px_rgba(255,213,50,0.5)] group-hover:scale-[1.05]">
                <span className="text-5xl font-black text-[#04208B] tracking-tighter transition-all duration-500 group-hover:text-[#FFD532]">
                  <AnimatedPrice value={currentPricing[6]?.total || 0} />
                </span>
              </div>
              <div className="text-[11px] font-black text-[#FFD532] mb-5 uppercase tracking-widest border border-[#FFD532]/60 self-start px-3 py-1 rounded-full inline-block bg-[#FFD532]/10">
                ${currentPricing[6]?.mo || 0} / Month
              </div>

              <button
                onClick={() => handleWhatsAppRedirect(6)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#FFD532] text-[#04208B] font-black text-xs uppercase tracking-widest hover:bg-[#FFFFFF] transition-all shadow-xl shadow-[#000000]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_40px_rgba(255,213,50,0.5)] mb-4"
              >
                Order 6 Months
              </button>

              <div className="mb-6 pt-3 border-t border-[#FFD532]/30">
                <div className="flex items-center justify-between text-[10px] font-black text-[#FFD532] uppercase tracking-widest mb-2">
                  <span>Secure Payments</span>
                  <Lock className="w-3 h-3 text-[#FFD532]" />
                </div>
                <PaymentIcons variant="dark" />
              </div>

              <ul className="w-full space-y-3.5 flex-grow relative mb-6">
                {[
                  `${devices} Simultaneous ${devices > 1 ? 'Devices' : 'Connection'}`,
                  '4K Ultra HD & 60FPS Premium Sports',
                  '20,000+ Live Channels Worldwide',
                  '120,000+ Movies & TV Shows (Updated Daily)',
                  'NFL, NBA, MLB, NHL, UFC & All PPV Events',
                  '7-Day Catch-Up & Full EPG Guide',
                  'Anti-Freeze Global Edge Servers',
                  'Smart TV, Firestick, iOS, Android, Shield',
                  '24/7 Support via WhatsApp',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[#FFFFFF] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD532] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 bg-[#000000]/20 border border-[#FFD532]/40 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#000000]/40 mt-auto">
                <Zap className="w-4 h-4 text-[#FFD532] shrink-0" />
                <span className="text-[11px] font-black text-[#FFFFFF] uppercase tracking-wider">
                  Instant Activation • 99.9% Server Uptime
                </span>
              </div>
            </div>
          </FadeInItem>

        </FadeInStagger>

        {/* Free Trial Banner */}
        <FadeIn className="max-w-2xl mx-auto mt-16 relative z-30">
          <div className="bg-[#121215] border border-[#FFD532]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden group hover:border-[#FFD532] transition-all duration-500">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#FFD532]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-4 text-left relative z-10">
              <div className="bg-[#FFD532]/10 border border-[#FFD532]/30 p-3 rounded-xl text-[#FFD532] shrink-0 hidden sm:block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#FFD532]" />
                  <h4 className="text-base font-black text-[#FFFFFF] uppercase tracking-tight">
                    Free 24-Hour Trial
                  </h4>
                </div>
                <p className="text-xs text-[#A1A1AA] font-medium">
                  Test {FOCUS_KEYWORD} with no commitment on your TV or smartphone. Our support team guides you through the simple setup directly via WhatsApp.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto shrink-0 relative z-10">
              <button
                onClick={handleFreeTrialRedirect}
                className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-3 rounded-full bg-[#FFD532] text-[#09090B] font-black text-xs uppercase tracking-widest hover:bg-[#d4a803] transition-all shadow-lg active:scale-95 hover:scale-105"
              >
                Try Free Now
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}