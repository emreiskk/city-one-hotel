import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { siteContent } from '../config/siteContent';
import { Button } from '../design-system/Button';
import { Calendar, Menu, X, Star, Phone } from 'lucide-react';
import { SocialMediaBar } from './SocialIcons';
import { LogoEmblem } from './Logo';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { hotel, navigation } = siteContent;

  useBodyScrollLock(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-hotel-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-2' 
        : 'bg-gradient-to-b from-hotel-950/95 via-hotel-950/85 to-transparent py-3 sm:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Üst Satır: Logo, Sosyal Medya Butonları ve Rezervasyon CTA */}
        <div className="flex items-center justify-between gap-4 w-full">
          
          {/* Sol: Logo & Marka (Kusursuz Tek Satır & Altın Yıldızlar) */}
          <a href="#hero" className="flex items-center gap-3 shrink-0 group select-none py-0.5">
            <LogoEmblem size="md" />
            <div className="flex flex-col shrink-0 justify-center">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide whitespace-nowrap">
                  {hotel.name}
                </span>
                <span className="text-gold-400 font-sans text-[10px] tracking-wider font-semibold uppercase px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/25 whitespace-nowrap shrink-0">
                  {hotel.city}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
                <div className="flex items-center gap-0.5">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-gold-400 text-gold-400 shrink-0" />
                  ))}
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium tracking-tight whitespace-nowrap">
                  4 Yıldızlı Lüks Otel & SPA
                </span>
              </div>
            </div>
          </a>

          {/* Sağ: Sosyal Medya İkonları ve Rezervasyon Butonu */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            
            {/* Sosyal Medya Butonları (Facebook, Twitter/X, Instagram, LinkedIn, YouTube) */}
            <div className="hidden sm:flex items-center">
              <SocialMediaBar size="xs" />
            </div>

            {/* Rezervasyon Butonu */}
            <Button
              variant="gold"
              size="sm"
              icon={Calendar}
              iconPosition="left"
              onClick={() => onOpenBooking()}
              className="whitespace-nowrap shrink-0 text-xs sm:text-sm px-3.5 sm:px-4 py-2 font-semibold shadow-md"
            >
              <span className="hidden sm:inline">{siteContent.hero.ctaPrimary}</span>
              <span className="sm:hidden">Rezervasyon</span>
            </Button>

            {/* Mobil & Tablet Menü Butonu (< 1200px) */}
            <div className="flex xl:hidden items-center shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 sm:p-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 focus:outline-none transition-colors cursor-pointer"
                aria-label="Menüyü Aç/Kapat"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

        </div>

        {/* Alt Satır: Masaüstü Başlık & Menü Metinleri (Ferah, Geniş, Asla Kaymayan Düzlem) */}
        <div className="hidden xl:flex items-center justify-center border-t border-slate-800/60 pt-2.5 mt-2.5">
          <nav className="flex items-center justify-center gap-8 2xl:gap-10">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-xs 2xl:text-sm font-semibold tracking-wide text-slate-300 hover:text-gold-300 transition-colors py-1 relative group whitespace-nowrap shrink-0"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

      </div>

      {/* Mobil & Tablet Tam Ekran Lüks Menü Overlay */}
      {mobileMenuOpen && createPortal(
        <div className="xl:hidden fixed inset-0 z-[60] h-[100dvh] w-full bg-hotel-950/98 backdrop-blur-3xl flex flex-col justify-between overflow-hidden animate-in fade-in duration-200">
          
          {/* Üst Kısım: Marka Başlığı, Rezervasyon Butonu ve Kapatma Butonu */}
          <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-slate-800/80 bg-hotel-950/90 shrink-0">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 shrink-0"
            >
              <LogoEmblem size="md" />
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-base sm:text-lg text-white tracking-wide whitespace-nowrap">
                    {hotel.name}
                  </span>
                  <span className="text-gold-400 font-sans text-[9px] tracking-wider font-semibold uppercase px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/25 shrink-0">
                    {hotel.city}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-gold-400 text-gold-400 shrink-0" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-300 font-medium whitespace-nowrap">
                    4 Yıldızlı Lüks Otel & SPA
                  </span>
                </div>
              </div>
            </a>

            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="gold"
                size="sm"
                icon={Calendar}
                iconPosition="left"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="whitespace-nowrap text-xs px-3 py-1.5 font-semibold shadow-md"
              >
                Rezervasyon
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 focus:outline-none transition-colors cursor-pointer"
                aria-label="Menüyü Kapat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Orta Kısım: Menü Bağlantıları (Üstte ferah, sıralı, lüks dokunuşlu) */}
          <div data-modal-scrollable className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto overscroll-contain">
            <nav className="space-y-1.5 max-w-md mx-auto">
              {navigation.map((item, idx) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base sm:text-lg font-medium text-slate-200 hover:text-gold-300 hover:bg-white/5 active:bg-white/10 transition-all border border-transparent hover:border-slate-800/80 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {item.label}
                  </span>
                  <span className="text-gold-400/40 group-hover:text-gold-400 transition-colors text-xs font-semibold font-mono">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Alt Kısım: En altta butonlar, butonların tam üstünde sosyal medya */}
          <div className="px-4 sm:px-6 pt-4 pb-6 sm:pb-8 border-t border-slate-800/80 bg-hotel-950/95 shrink-0 space-y-4">
            
            {/* Sosyal Medya Butonları (Aksiyon butonlarının hemen üzerinde) */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Bizi Takip Edin
              </span>
              <SocialMediaBar size="md" />
            </div>

            {/* Aksiyon Butonları (En altta) */}
            <div className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto w-full">
              <a
                href={`tel:${hotel.phoneRaw}`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-gold-300 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{hotel.phone}</span>
              </a>
              <Button
                variant="gold"
                fullWidth
                size="md"
                icon={Calendar}
                iconPosition="left"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex-1 py-3 text-xs sm:text-sm font-semibold shadow-gold-glow/25"
              >
                {siteContent.hero.ctaPrimary}
              </Button>
            </div>

          </div>

        </div>,
        document.body
      )}
    </header>
  );
};
