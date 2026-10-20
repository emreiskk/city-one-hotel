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
      <div className={`flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-700/80 ${className}`}>
        {languageList.map((lang) => {
          const isActive = lang.code === currentLang;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-gold-gradient text-white shadow-gold-glow/30 scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
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
    tr: 'Dil Seçimi',
    en: 'Language',
    de: 'Sprachauswahl',
    ru: 'Выбор языка'
  }[currentLang] || 'Dil Seçimi';

  // Dropdown variant (standard for navbar desktop & footer dropup)
  return (
    <div className={`relative inline-block text-left ${isOpen ? 'z-[60]' : 'z-20'} ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-900/85 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm active:scale-95"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Dil Seçimi / Change Language"
      >
        <span className="text-base leading-none">{activeLanguage.flag}</span>
        <span className="tracking-wider">{activeLanguage.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-gold-400 transition-transform duration-200 ${
          isOpen ? (isUp ? 'rotate-0' : 'rotate-180') : (isUp ? 'rotate-180' : 'rotate-0')
        }`} />
      </button>

      {isOpen && (
        <div 
          className={`absolute ${effectiveAlign === 'left' ? 'left-0' : 'right-0'} ${isUp ? 'bottom-full mb-2 slide-in-from-bottom-2' : 'top-full mt-2 slide-in-from-top-2'} w-44 rounded-2xl bg-hotel-950/98 backdrop-blur-2xl border border-gold-500/40 shadow-2xl z-[100] p-1.5 overflow-hidden animate-in fade-in duration-150`}
        >
          {/* Uyumlu, lüks altın tonlu ve yerelleştirilmiş başlık şeridi */}
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-gold-300 border-b border-gold-500/20 flex items-center gap-1.5 mb-1.5 bg-gold-500/5 rounded-t-xl">
            <Globe className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>{headerTitle}</span>
          </div>

          <div className="space-y-0.5">
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
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer text-left border ${
                    isActive
                      ? 'bg-gold-500/15 text-gold-300 font-bold border-gold-500/30 shadow-sm'
                      : 'border-transparent text-slate-200 hover:text-white hover:bg-gold-500/10 hover:border-gold-500/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <span className={isActive ? 'text-gold-200 font-semibold' : 'text-slate-200'}>{lang.name}</span>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
