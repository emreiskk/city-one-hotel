import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Play, Film, Smartphone } from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export const VideoModal = ({ 
  isOpen, 
  onClose, 
  videoUrl, 
  title, 
  subtitle,
  videoTourBadge = 'Video Tur',
  verticalTourBadge = 'Dikey Tur'
}) => {
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
    isPortrait: false,
    loaded: false
  });
  const videoRef = useRef(null);

  useBodyScrollLock(isOpen);

  // Reset dimensions when videoUrl changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setVideoDimensions({
        width: 0,
        height: 0,
        isPortrait: false,
        loaded: false
      });
    }
  }, [isOpen, videoUrl]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Safely pause video when closing
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  const handleLoadedMetadata = (e) => {
    const w = e.target.videoWidth || 0;
    const h = e.target.videoHeight || 0;
    if (w > 0 && h > 0) {
      setVideoDimensions({
        width: w,
        height: h,
        isPortrait: h > w,
        loaded: true
      });
    }
  };

  if (!isOpen || !videoUrl) return null;

  const isPortrait = videoDimensions.isPortrait;

  return createPortal(
    <div
      className="fixed inset-0 z-[130] flex flex-col justify-between bg-black/95 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Video Oynatıcı'}
    >
      {/* Top Bar across full viewport width (PhotoLightboxModal ile %100 aynı görsel dil) */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-hotel-950/90 border-b border-slate-800/80 z-20 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-2.5 text-white min-w-0 pr-3">
          <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
            {isPortrait ? <Smartphone className="w-4 h-4" /> : <Film className="w-4 h-4" />}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <h3 className="font-serif text-sm sm:text-base font-semibold text-white truncate">
                {title || 'City One Hotel'}
              </h3>
              <span className="text-[10px] sm:text-xs text-gold-400 font-sans uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/25 shrink-0">
                {isPortrait ? verticalTourBadge : videoTourBadge}
              </span>
            </div>
            {subtitle && (
              <p className="text-[11px] text-slate-400 truncate">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <button
          onClick={handleClose}
          aria-label="Kapat"
          className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer shrink-0 active:scale-95 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Video Area (Ortalanmış, doğal oranına uygun, altın çerçeveli) */}
      <div 
        className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <div 
          className={`relative flex items-center justify-center rounded-2xl overflow-hidden border border-gold-500/30 bg-black shadow-2xl transition-all duration-300 ${
            isPortrait ? 'max-w-[420px] w-auto' : 'max-w-5xl w-full'
          }`}
        >
          <video
            ref={videoRef}
            key={videoUrl}
            src={videoUrl}
            controls
            autoPlay
            playsInline
            onLoadedMetadata={handleLoadedMetadata}
            className={`w-auto h-auto max-w-full ${
              isPortrait 
                ? 'max-h-[68dvh] sm:max-h-[74dvh] object-contain' 
                : 'max-h-[65dvh] sm:max-h-[72dvh] object-contain'
            } mx-auto block`}
          >
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </div>
      </div>

      {/* Bottom Bar across full viewport width */}
      <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-hotel-950/90 border-t border-slate-800/80 flex items-center justify-center sm:justify-start text-xs text-slate-400 shrink-0 z-10">
        <span className="flex items-center gap-1.5 text-gold-300 text-xs truncate">
          <Play className="w-3.5 h-3.5 text-gold-400 fill-gold-400 shrink-0" />
          <span>City One Hotel Kayseri • Canlı Çekim</span>
        </span>
      </div>

    </div>,
    document.body
  );
};
