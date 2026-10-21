import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

export const LanguageSwitcher = ({ 
  variant = 'dropdown', 
  direction = 'down', // 'down' (navbar) | 'up' (footer dropup)
  align = null, // 'left' | 'right'
  className = '' 
}) => {
  const { currentLang, setLanguage, languageList } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeLanguage = languageList.find(l => l.code === currentLang) || languageList[0];
  const effectiveAlign = align || (direction === 'up' ? 'left' : 'right');

  // Close on outside click, touch, Escape key, or page scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Segmented / Bar variant (for mobile drawer or footer)
  if (variant === 'segmented') {
    return (
      <div className={`flex items-center gap-1.5 p-1.5 rounded-xl bg-hotel-900/90 border border-slate-800/90 shadow-md ${className}`}>
        {languageList.map((lang) => {
          const isActive = lang.code === currentLang;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-gold-gradient text-white font-semibold shadow-lg shadow-gold-500/25 border border-gold-400/40'
                  : 'bg-transparent text-slate-300 hover:text-white hover:bg-hotel-800/80 border border-transparent'
              }`}
            >
              <span className="text-sm">{lang.flag}</span>
              <span className="tracking-wide">{lang.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  const isUp = direction === 'up';

  const headerTitle = {
    tr: 'DİL SEÇİMİ',
    en: 'LANGUAGE',
    de: 'SPRACHE',
    ru: 'ЯЗЫК'
  }[currentLang] || 'DİL SEÇİMİ';

  // Dropdown variant (styled like top categories card)
  return (
    <div className={`relative inline-block text-left ${isOpen ? 'z-[60]' : 'z-20'} ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-md shrink-0 group border ring-1 ring-white/5 active:scale-95 ${
          isOpen
            ? 'bg-gold-500/15 border-gold-400/50 text-white shadow-gold-glow/20'
            : 'bg-hotel-900/90 hover:bg-hotel-800/90 border-slate-800/90 hover:border-gold-500/40 text-slate-200 hover:text-white'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Dil Seçimi / Change Language"
      >
        <span className="text-base leading-none">{activeLanguage.flag}</span>
        <span className="tracking-wider">{activeLanguage.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 group-hover:text-gold-400 transition-transform duration-200 ${
          isOpen ? (isUp ? 'rotate-0' : 'rotate-180') : (isUp ? 'rotate-180' : 'rotate-0')
        }`} />
      </button>

      {isOpen && (
        <div 
          className={`absolute ${effectiveAlign === 'left' ? 'left-0' : 'right-0'} ${
            isUp ? 'bottom-full mb-2 slide-in-from-bottom-2' : 'top-full mt-2 slide-in-from-top-2'
          } w-52 sm:w-56 rounded-2xl bg-hotel-950/95 backdrop-blur-2xl border border-gold-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(217,170,84,0.12)] ring-1 ring-white/10 z-[100] p-2.5 overflow-hidden animate-in fade-in duration-200`}
        >
          {/* Ana Kategoriler Kartı ile Birebir Uyumlu Üst Başlık Şeridi */}
          <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-800/80 mb-2 gap-2">
            <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider font-mono flex items-center gap-1.5 truncate">
              <Globe className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{headerTitle}</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono font-medium shrink-0 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">
              {activeLanguage.code.toUpperCase()}
            </span>
          </div>

          {/* Dil Seçenekleri (Ana Kategori Alt Menü Tasarımı İle Birebir Uyumlu) */}
          <div className="space-y-1">
            {languageList.map((lang) => {
              const isActive = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer text-left border group/sub ${
                    isActive
                      ? 'bg-gold-500/15 text-gold-300 font-bold border-gold-500/30 shadow-sm'
                      : 'border-transparent text-slate-200 hover:text-gold-400 hover:bg-slate-800/30 hover:border-gold-500/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-base shrink-0">{lang.flag}</span>
                    <span className={`truncate ${isActive ? 'text-gold-200 font-semibold' : 'text-slate-200 group-hover/sub:text-gold-300'}`}>
                      {lang.name}
                    </span>
                  </div>
                  {isActive ? (
                    <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover/sub:text-gold-400 group-hover/sub:translate-x-0.5 transition-all shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
