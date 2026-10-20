import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingActions = () => {
  const { content } = useLanguage();
  const { hotel, floatingActions } = content;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${hotel.whatsappRaw}?text=${encodeURIComponent(floatingActions.whatsappMessage)}`;

  return (
    <div className="fixed bottom-3 right-2.5 sm:bottom-6 sm:right-5 z-40 flex flex-col items-end gap-2 sm:gap-3 pointer-events-auto">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          title={floatingActions.backToTopTooltip}
          aria-label={floatingActions.backToTopTooltip}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-hotel-900/90 text-slate-300 hover:text-white border border-slate-700/80 shadow-lg flex items-center justify-center hover:bg-slate-800 transition-all duration-200 backdrop-blur-md active:scale-95"
        >
          <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      )}

      {/* Quick Direct Call Button */}
      <a
        href={`tel:${hotel.phoneRaw}`}
        title={floatingActions.phoneTooltip}
        aria-label={floatingActions.phoneTooltip}
        className="group relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-hotel-900/95 border border-gold-500/40 text-gold-400 hover:text-white hover:bg-gold-600 shadow-lg transition-all duration-200 active:scale-95"
      >
        <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:rotate-12" />
        
        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:block absolute right-14 bg-hotel-950/95 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          {hotel.phone}
        </span>
      </a>

      {/* Primary Fixed WhatsApp Reservation Button in Unified Luxury Gold */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={floatingActions.whatsappTooltip}
        aria-label={floatingActions.whatsappTooltip}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-white shadow-xl border border-gold-300/40 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        {/* Subtle pulsing gold ring */}
        <span className="absolute -inset-0.5 rounded-full bg-gold-400/25 animate-ping opacity-60 pointer-events-none" />
        
        <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 relative z-10" />

        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:block absolute right-16 bg-hotel-950/95 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          {floatingActions.whatsappTooltip}
        </span>
      </a>

    </div>
  );
};
