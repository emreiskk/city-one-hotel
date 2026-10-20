import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../design-system/Button';
import { 
  Calendar, Menu, X, Star, Phone, ChevronRight, ChevronDown,
  BedDouble, Waves, Mountain, Briefcase, 
  UtensilsCrossed, Camera, MessageCircle, MapPin
} from 'lucide-react';
import { SocialMediaBar } from './SocialIcons';
import { LogoEmblem } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useBodyScrollLock, setSkipScrollRestore } from '../hooks/useBodyScrollLock';
import { navigationSubItems } from '../data/navigationSubItems';

const NAV_ICONS = {
  rooms: BedDouble,
  spa: Waves,
  ski: Mountain,
  meetings: Briefcase,
  dining: UtensilsCrossed,
  gallery: Camera,
  reviews: Star,
  contact: Phone
};

export const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenuId, setExpandedMenuId] = useState(null);
  const { content } = useLanguage();
  const { hotel, navigation, hero, footer } = content;

  const navigateToSection = (target, subItem = null) => {
    // 1. Tell body scroll lock NOT to snap back to old saved scroll position
    setSkipScrollRestore(true);

    // 2. Immediately close mobile menu drawer
    setMobileMenuOpen(false);

    // 3. Immediately clear fixed styles from body/html
    document.documentElement.classList.remove('modal-open');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.paddingRight = '';

    // 4. Dispatch the navigation event for tab/category switching
    if (subItem) {
      window.dispatchEvent(new CustomEvent('cityone-navigate', {
        detail: {
          target: subItem.target,
          subId: subItem.id,
          category: subItem.category,
          spaTab: subItem.spaTab,
          galleryCategory: subItem.galleryCategory
        }
      }));
    } else if (target) {
      window.dispatchEvent(new CustomEvent('cityone-navigate', {
        detail: {
          target: target
        }
      }));
    }

    // 5. Scroll smoothly to target element
    const selector = target || subItem?.target;
    if (selector) {
      setTimeout(() => {
        const el = document.querySelector(selector);
        if (el) {
          const navOffset = 75;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          try {
            history.pushState(null, '', selector);
          } catch (e) {
            // ignore
          }
        }
      }, 60);
    }
  };

  useBodyScrollLock(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Localized quick labels
  const followUsText = {
    tr: 'Bizi Takip Edin',
    en: 'Follow Us',
    de: 'Folgen Sie uns',
    ru: 'Подписывайтесь на нас'
  }[content.langCode] || 'Bizi Takip Edin';

  const callNowText = {
    tr: 'Hemen Arayın',
    en: 'Call Direct',
    de: 'Direkt Anrufen',
    ru: 'Прямой звонок'
  }[content.langCode] || 'Hemen Arayın';

  const whatsappText = {
    tr: 'WhatsApp Danışma',
    en: 'WhatsApp Concierge',
    de: 'WhatsApp Service',
    ru: 'WhatsApp Консьерж'
  }[content.langCode] || 'WhatsApp';

  const perkSkiText = {
    tr: '18 km Erciyes Kayak VIP Shuttle',
    en: '18 km Erciyes Ski VIP Shuttle',
    de: '18 km Erciyes Ski-VIP-Shuttle',
    ru: '18 км VIP-трансфер в Эрджиес'
  }[content.langCode] || '18 km Erciyes VIP Shuttle';

  const perkSpaText = {
    tr: '1500 m² Termal SPA & Yarı Olimpik Havuz',
    en: '1500 m² Thermal SPA & Pool',
    de: '1500 m² Thermal-SPA & Pool',
    ru: '1500 м² СПА и Бассейн'
  }[content.langCode] || '1500 m² Termal SPA & Havuz';

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-hotel-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-2' 
        : 'bg-gradient-to-b from-hotel-950/95 via-hotel-950/85 to-transparent py-2.5 sm:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full box-border">
        
        {/* Üst Satır: Logo, Sosyal Medya Butonları, Dil Seçici ve Aksiyonlar */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
          
          {/* Sol: Logo & Marka */}
          <a href="#hero" className="flex items-center gap-2 sm:gap-3 group select-none py-0.5 min-w-0 flex-1">
            <LogoEmblem size="sm" className="shrink-0" />
            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="font-serif font-bold text-sm xs:text-base sm:text-xl text-white tracking-wide truncate">
                  {hotel.name}
                </span>
                <span className="inline-block text-gold-400 font-sans text-[8px] sm:text-[10px] tracking-wider font-semibold uppercase px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/25 shrink-0">
                  {hotel.city}
                </span>
              </div>
              <div className="hidden md:flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
                <div className="flex items-center gap-0.5">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-gold-400 text-gold-400 shrink-0" />
                  ))}
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium tracking-tight whitespace-nowrap">
                  {hotel.starLabel}
                </span>
              </div>
            </div>
          </a>

          {/* Sağ: Dil Kutucuğu, Rezervasyon Butonu & Hamburger Menü */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Sosyal Medya Butonları (Desktop) */}
            <div className="hidden lg:flex items-center">
              <SocialMediaBar size="xs" />
            </div>

            {/* Dil Seçici (Mobilde ve Masaüstünde Her Zaman Görünür) */}
            <LanguageSwitcher variant="dropdown" />

            {/* Rezervasyon Butonu - Ekran daraldığında (mobilde) gizlenir, sadece dil ve hamburger kalır */}
            <Button
              variant="gold"
              size="sm"
              icon={Calendar}
              iconPosition="left"
              onClick={() => onOpenBooking()}
              className="hidden md:inline-flex whitespace-nowrap shrink-0 text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 sm:py-2 font-semibold shadow-md"
            >
              <span>{hero.ctaPrimary}</span>
            </Button>

            {/* Mobil & Tablet Hamburger Menü Butonu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 focus:outline-none transition-all cursor-pointer shrink-0 flex items-center justify-center shadow-md active:scale-95 xl:hidden"
              aria-label="Menüyü Aç"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>

          </div>

        </div>

        {/* Alt Satır: Masaüstü Başlık & Menü Metinleri (XL ve üzeri) */}
        <div className="hidden xl:flex items-center justify-center border-t border-slate-800/60 pt-2.5 mt-2.5">
          <nav className="flex items-center justify-center gap-7 2xl:gap-9">
            {navigation.map((item) => {
              const subNav = navigationSubItems[content.langCode]?.[item.id] || navigationSubItems.tr[item.id];
              const hasSub = Boolean(subNav?.items?.length);

              return (
                <div key={item.id} className="relative group py-1">
                  <a
                    href={item.href}
                    className="text-xs 2xl:text-sm font-semibold tracking-wide text-slate-300 hover:text-gold-300 transition-colors py-1 flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <span>{item.label}</span>
                    {hasSub && (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold-400 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-200 group-hover:w-full" />
                  </a>

                  {/* Desktop Dropdown Mega-Card */}
                  {hasSub && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 pointer-events-none opacity-0 invisible translate-y-2 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                      <div className="w-[360px] 2xl:w-[380px] p-3 rounded-2xl bg-hotel-950/95 backdrop-blur-2xl border border-gold-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(217,170,84,0.12)] ring-1 ring-white/10">
                        {/* Dropdown Header */}
                        <div className="flex items-center justify-between px-2 py-2 border-b border-slate-800/80 mb-2 gap-2">
                          <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider font-mono truncate">
                            {subNav.parentLabel || item.label}
                          </span>
                          <a
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              navigateToSection(item.href);
                            }}
                            className="text-[11px] text-slate-400 hover:text-gold-300 transition-colors font-medium shrink-0 cursor-pointer"
                          >
                            {subNav.viewAllText || 'Tümünü Gör'} →
                          </a>
                        </div>

                        {/* Sub items */}
                        <div className="divide-y divide-slate-800/40">
                          {subNav.items.map((sub) => (
                            <a
                              key={sub.id}
                              href={sub.target}
                              onClick={(e) => {
                                e.preventDefault();
                                navigateToSection(sub.target, sub);
                              }}
                              className="block py-2.5 px-2 transition-colors group/sub cursor-pointer rounded-lg hover:bg-slate-800/20"
                            >
                              <div className="flex items-center justify-between gap-3 min-w-0">
                                <span className="text-xs font-semibold text-slate-200 group-hover/sub:text-gold-400 transition-colors truncate whitespace-nowrap">
                                  {sub.label}
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover/sub:text-gold-400 group-hover/sub:translate-x-1 transition-all shrink-0" />
                              </div>
                              {sub.desc && (
                                <div className="text-[11px] text-slate-400 group-hover/sub:text-slate-300 transition-colors mt-0.5 truncate whitespace-nowrap">
                                  {sub.desc}
                                </div>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

      </div>

      {/* Mobil & Tablet Lüks Slide-over Menü Drawer (Düz siyah yerine derinlikli lüks tasarım) */}
      {mobileMenuOpen && createPortal(
        <div className="xl:hidden fixed inset-0 z-[60] overflow-hidden">
          
          {/* Yarı saydam arka plan (Kullanıcı tıkladığında menüyü kapatır, altındaki site buzlu cam arkasından görünür) */}
          <div 
            className="fixed inset-0 bg-hotel-950/75 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Sağdan Açılan Lüks Panel */}
          <aside 
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm sm:max-w-md h-[100dvh] z-[70] bg-gradient-to-b from-hotel-900 via-hotel-950 to-[#050811] border-l border-gold-500/20 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil Gezinme Menüsü"
          >
            {/* Arka plan Lüks Işıltısı (Ambient Glow) */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-radial-gradient from-gold-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Panel Başlığı: Logo & Kapat Butonu */}
            <div className="relative z-10 flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-800/90 bg-hotel-950/80 backdrop-blur-md shrink-0">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 min-w-0"
              >
                <LogoEmblem size="sm" className="shrink-0" />
                <div className="flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-base text-white tracking-wide truncate">
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
                    <span className="text-[10px] text-slate-400 font-medium truncate">
                      {hotel.starLabel}
                    </span>
                  </div>
                </div>
              </a>

              {/* Kapat Butonu */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-xl text-slate-300 hover:text-white bg-slate-800/90 hover:bg-gold-500 hover:text-hotel-950 border border-slate-700/80 transition-all cursor-pointer flex items-center justify-center shrink-0 active:scale-95 shadow-sm"
                aria-label="Menüyü Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Orta Kısım: Ayrıcalık Şeridi + İkonlu Menü Kartları (Kaydırılabilir) */}
            <div data-modal-scrollable className="relative z-10 flex-1 px-4 sm:px-5 py-4 overflow-y-auto overscroll-contain space-y-4">
              
              {/* Dil Değiştirici (Menü İçi Alternatif) */}
              <div className="pb-1">
                <LanguageSwitcher variant="segmented" />
              </div>

              {/* Ayrıcalık Kartı */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-gold-500/10 via-slate-900/60 to-transparent border border-gold-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs text-gold-300 font-medium mb-1">
                  <Mountain className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>{perkSkiText}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Waves className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>{perkSpaText}</span>
                </div>
              </div>

              {/* Navigasyon Listesi (Akordiyon / Alt Kategorili) */}
              <nav className="space-y-2" aria-label="Mobil Bağlantılar">
                {navigation.map((item, idx) => {
                  const IconComponent = NAV_ICONS[item.id] || ChevronRight;
                  const subNav = navigationSubItems[content.langCode]?.[item.id] || navigationSubItems.tr[item.id];
                  const hasSub = Boolean(subNav?.items?.length);
                  const isExpanded = expandedMenuId === item.id;

                  return (
                    <div 
                      key={item.id} 
                      className="rounded-xl overflow-hidden border border-white/5 bg-slate-900/40 transition-colors shadow-sm"
                    >
                      {/* Üst Başlık Satırı */}
                      <div
                        onClick={() => {
                          if (hasSub) {
                            setExpandedMenuId(prev => prev === item.id ? null : item.id);
                          } else {
                            navigateToSection(item.href);
                          }
                        }}
                        className="flex items-center justify-between px-3.5 py-3 hover:bg-slate-800/80 transition-all cursor-pointer group select-none"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-gold-500 group-hover:text-hotel-950 transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-gold-300 transition-colors truncate">
                            {item.label}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-slate-500 group-hover:text-gold-400 shrink-0">
                          <span className="text-[11px] font-mono text-slate-500 group-hover:text-gold-400/80">
                            0{idx + 1}
                          </span>
                          {hasSub ? (
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-slate-400 group-hover:text-gold-400 ${isExpanded ? 'rotate-180 text-gold-400' : ''}`} />
                          ) : (
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          )}
                        </div>
                      </div>

                      {/* Akordiyon Alt Öğeleri (Nefes alan, ferah kutucuk & tek satır tasarım) */}
                      {hasSub && isExpanded && (
                        <div className="px-3.5 pt-3.5 pb-4 border-t border-slate-800/80 bg-hotel-950/70 animate-in fade-in slide-in-from-top-1 duration-200">
                          {/* Tümünü Gör Hızlı Butonu */}
                          <button
                            type="button"
                            onClick={() => navigateToSection(item.href)}
                            className="w-full flex items-center justify-between py-3 px-3.5 mb-3 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 active:bg-gold-500/25 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-all cursor-pointer"
                          >
                            <span>{subNav.viewAllText || 'Tümünü Gör'}</span>
                            <ChevronRight className="w-4 h-4 text-gold-400" />
                          </button>

                          {/* Alt Kategoriler & Odalar (Ferah nefes alan satırlar) */}
                          <div className="divide-y divide-slate-800/40">
                            {subNav.items.map((sub) => (
                              <button
                                key={sub.id}
                                type="button"
                                onClick={() => navigateToSection(sub.target, sub)}
                                className="w-full text-left py-3 px-2.5 transition-colors cursor-pointer group/sub block rounded-lg hover:bg-slate-800/30 active:bg-slate-800/50"
                              >
                                <div className="flex items-center justify-between gap-3 min-w-0">
                                  <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/sub:text-gold-400 transition-colors truncate whitespace-nowrap">
                                    {sub.label}
                                  </span>
                                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover/sub:text-gold-400 group-hover/sub:translate-x-0.5 transition-all shrink-0" />
                                </div>
                                {sub.desc && (
                                  <div className="text-[11px] text-slate-400 group-hover/sub:text-slate-300 transition-colors mt-1 truncate whitespace-nowrap">
                                    {sub.desc}
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

            </div>

            {/* Alt Kısım: Aksiyonlar & İletişim */}
            <div className="relative z-10 px-4 sm:px-5 pt-3 pb-5 sm:pb-6 border-t border-slate-800/90 bg-hotel-950/95 backdrop-blur-md shrink-0 space-y-3">
              
              {/* Rezervasyon CTA Butonu (Büyük & Vurgulu) */}
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
                className="py-3 text-sm font-semibold shadow-gold-glow/20 justify-center"
              >
                {hero.ctaPrimary}
              </Button>

              {/* Hızlı Arama & WhatsApp Aksiyonları */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${hotel.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-gold-300 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>{callNowText}</span>
                </a>

                <a
                  href={`https://wa.me/${hotel.whatsappRaw}?text=${encodeURIComponent(content.floatingActions?.whatsappMessage || 'City One Hotel Kayseri')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-gold-500/30 text-gold-300 hover:text-gold-200 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>{whatsappText}</span>
                </a>
              </div>

              {/* Sosyal Medya Şeridi */}
              <div className="pt-1 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  {followUsText}
                </span>
                <SocialMediaBar size="xs" />
              </div>

            </div>

          </aside>

        </div>,
        document.body
      )}
    </header>
  );
};
