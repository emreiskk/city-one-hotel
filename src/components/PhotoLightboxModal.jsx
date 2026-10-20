import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useLanguage } from '../context/LanguageContext';

export const PhotoLightboxModal = ({
  isOpen,
  onClose,
  images = [],
  items = [],
  initialIndex = 0,
  title
}) => {
  const { currentLang } = useLanguage();
  useBodyScrollLock(isOpen);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const thumbnailContainerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const defaultTitles = {
    tr: 'Fotoğraf Galerisi',
    en: 'Photo Gallery',
    de: 'Fotogalerie',
    ru: 'Фотогалерея'
  };

  const defaultTitle = defaultTitles[currentLang] || 'Fotoğraf Galerisi';
  const effectiveTitle = title || defaultTitle;

  // Normalize image data list
  const photoList = React.useMemo(() => {
    if (items && items.length > 0) return items;
    return images.map((img) => {
      if (typeof img === 'object' && img !== null) return img;
      return {
        src: img,
        title: effectiveTitle
      };
    });
  }, [items, images, effectiveTitle]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Keep active thumbnail in view
  useEffect(() => {
    if (isOpen && thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.children[currentIndex];
      if (activeThumb && typeof activeThumb.scrollIntoView === 'function') {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [isOpen, currentIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, photoList.length]);

  if (!isOpen || !photoList.length) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photoList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photoList.length) % photoList.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const currentItem = photoList[currentIndex] || {};
  const currentSrc = currentItem.src || (typeof images[currentIndex] === 'string' ? images[currentIndex] : '');
  const currentTitle = currentItem.title || title;
  const currentSubtitle = currentItem.subtitle || '';

  return createPortal(
    <div
      className="fixed inset-0 z-[130] flex flex-col justify-between bg-black/95 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={currentTitle}
    >
      {/* Top Bar across full viewport width */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-hotel-950/90 border-b border-slate-800/80 z-20 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-2.5 text-white min-w-0 pr-3">
          <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
            <ImageIcon className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <h3 className="font-serif text-sm sm:text-base font-semibold text-white truncate">
                {currentTitle}
              </h3>
              <span className="text-xs text-gold-400/90 font-mono shrink-0 font-medium">
                ({currentIndex + 1} / {photoList.length})
              </span>
            </div>
            {currentSubtitle && (
              <p className="text-[11px] text-slate-400 truncate">
                {currentSubtitle}
              </p>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label={currentLang === 'ru' ? 'Закрыть' : currentLang === 'en' ? 'Close' : currentLang === 'de' ? 'Schließen' : 'Kapat'}
          className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer shrink-0 active:scale-95 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Area */}
      <div 
        className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {photoList.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label={currentLang === 'ru' ? 'Предыдущее фото' : currentLang === 'en' ? 'Previous Photo' : currentLang === 'de' ? 'Vorheriges Foto' : 'Önceki Fotoğraf'}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-hotel-900/90 border border-slate-700/80 text-white sm:hover:bg-gold-500 sm:hover:text-hotel-950 active:bg-gold-500 active:text-hotel-950 transition-all shadow-xl z-20 cursor-pointer active:scale-90 select-none"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        <div className="relative max-w-5xl max-h-[72vh] sm:max-h-[75vh] flex items-center justify-center">
          <img
            key={currentSrc}
            src={currentSrc}
            alt={`${currentTitle} - ${currentIndex + 1}`}
            className="max-h-[72vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-2xl border border-gold-500/20 shadow-2xl transition-all duration-300 select-none animate-in fade-in"
          />
        </div>

        {photoList.length > 1 && (
          <button
            onClick={handleNext}
            aria-label={currentLang === 'ru' ? 'Следующее фото' : currentLang === 'en' ? 'Next Photo' : currentLang === 'de' ? 'Nächstes Foto' : 'Sonraki Fotoğraf'}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-hotel-900/90 border border-slate-700/80 text-white sm:hover:bg-gold-500 sm:hover:text-hotel-950 active:bg-gold-500 active:text-hotel-950 transition-all shadow-xl z-20 cursor-pointer active:scale-90 select-none"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip (Dynamic and auto-centering) */}
      {photoList.length > 1 && (
        <div 
          ref={thumbnailContainerRef}
          className="px-4 py-3 bg-hotel-950/90 border-t border-slate-800/80 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto max-w-full z-10 scrollbar-none"
        >
          {photoList.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              title={item.title || `Fotoğraf ${idx + 1}`}
              className={`shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'border-gold-400 scale-105 shadow-gold-glow/50 opacity-100 ring-2 ring-gold-500/30'
                  : 'border-transparent opacity-50 hover:opacity-100 hover:border-slate-600'
              }`}
            >
              <img
                src={item.src}
                alt={item.title || `Küçük Resim ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body
  );
};
