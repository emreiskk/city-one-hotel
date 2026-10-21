import React from 'react';

/**
 * City One Hotel - Gerçek Otel Logosu & Amblem Bileşeni
 * Orijinal oval madalyon logo, şeffaf arka plan, sıcak altın ışıltı ve
 * duyarlı boyutlandırma ile Navbar, Modal ve Footer genelinde kullanılır.
 */
export const LogoEmblem = ({ size = 'md', className = '', alt = 'City One Hotel Kayseri' }) => {
  const sizeMap = {
    sm: {
      container: 'h-8 sm:h-9 w-auto',
      img: 'h-8 sm:h-9 w-auto',
    },
    md: {
      container: 'h-10 sm:h-12 w-auto',
      img: 'h-10 sm:h-12 w-auto',
    },
    lg: {
      container: 'h-14 sm:h-16 w-auto',
      img: 'h-14 sm:h-16 w-auto',
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 select-none ${currentSize.container} ${className}`}
    >
      <img
        src="/assets/hotel/logo.png"
        alt={alt}
        className={`${currentSize.img} max-w-none object-contain select-none drop-shadow-[0_2px_10px_rgba(217,170,84,0.3)] filter`}
        loading="eager"
      />
    </div>
  );
};

export default LogoEmblem;
