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
    <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-5 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          title={floatingActions.backToTopTooltip}
          aria-label={floatingActions.backToTopTooltip}
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-hotel-900/90 text-slate-300 hover:text-white border border-slate-700/80 shadow-xl flex items-center justify-center hover:bg-slate-800 transition-all duration-300 backdrop-blur-md hover:-translate-y-1"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Quick Direct Call Button */}
      <a
        href={`tel:${hotel.phoneRaw}`}
        title={floatingActions.phoneTooltip}
        aria-label={floatingActions.phoneTooltip}
        className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-hotel-900 border border-gold-500/40 text-gold-400 hover:text-white hover:bg-gold-600 shadow-xl hover:shadow-gold-glow/40 transition-all duration-300 hover:scale-105"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-12" />
        
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
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-white shadow-2xl hover:shadow-gold-glow/50 border border-gold-300/40 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing gold luxury ring */}
        <span className="absolute -inset-1 rounded-full bg-gold-400/30 animate-ping opacity-75 pointer-events-none" />
        
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />

        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:block absolute right-16 bg-hotel-950/95 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          {floatingActions.whatsappTooltip}
        </span>
      </a>

    </div>
  );
};
