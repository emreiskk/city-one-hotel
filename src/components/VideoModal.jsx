import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export const VideoModal = ({ 
  isOpen, 
  onClose, 
  videoUrl, 
  title, 
  subtitle
}) => {
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
    isPortrait: false,
    loaded: false
  });
  const [prevVideoUrl, setPrevVideoUrl] = useState(videoUrl);
  const videoRef = useRef(null);

  useBodyScrollLock(isOpen);

  // Sync state when videoUrl changes without cascading effect renders
  if (videoUrl !== prevVideoUrl) {
    setPrevVideoUrl(videoUrl);
    setVideoDimensions({
      width: 0,
      height: 0,
      isPortrait: false,
      loaded: false
    });
  }

  // Safely pause video when closing
  const handleClose = React.useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  }, [onClose]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

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
      className="fixed inset-0 z-[200] flex flex-col justify-between bg-black/95 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Video Oynatıcı'}
    >
      {/* Top Bar - Clean, Minimalist, Luxury Standard */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-hotel-950/90 border-b border-slate-800/80 z-20 backdrop-blur-md shrink-0">
        <div className="min-w-0 pr-3">
          <h3 className="font-serif text-sm sm:text-base font-semibold text-white truncate">
            {title || 'City One Hotel'}
          </h3>
          {subtitle && (
            <p className="text-xs text-slate-400 truncate font-light mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        <button
          onClick={handleClose}
          aria-label="Kapat"
          className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer shrink-0 active:scale-95 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Video Area (Ortalanmış, doğal oranına uygun, lüks çerçeveli) */}
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
                ? 'max-h-[70dvh] sm:max-h-[76dvh] object-contain' 
                : 'max-h-[68dvh] sm:max-h-[74dvh] object-contain'
            } mx-auto block`}
          >
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
