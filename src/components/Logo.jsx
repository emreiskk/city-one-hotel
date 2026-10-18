import React from 'react';

/**
 * Reusable luxury "C1" Brand Emblem
 * Matches the canonical navbar/main screen design:
 * - Rounded gold-gradient outer border
 * - Dark luxury background (hotel-950)
 * - Gold serif bold "C1" text with tracking
 */
export const LogoEmblem = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: {
      outer: 'w-8 h-8 rounded-lg p-0.5 shadow-gold-glow/20',
      inner: 'rounded-[6px]',
      text: 'text-sm',
    },
    md: {
      outer: 'w-10 h-10 rounded-xl p-0.5 shadow-gold-glow/30',
      inner: 'rounded-[10px]',
      text: 'text-lg',
    },
    lg: {
      outer: 'w-12 h-12 rounded-xl p-0.5 shadow-gold-glow/40',
      inner: 'rounded-[10px]',
      text: 'text-xl',
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`${currentSize.outer} bg-gold-gradient shrink-0 transition-transform group-hover:scale-105 ${className}`}
    >
      <div
        className={`w-full h-full bg-hotel-950 ${currentSize.inner} flex items-center justify-center`}
      >
        <span
          className={`font-serif font-bold text-gold-400 ${currentSize.text} tracking-wider select-none leading-none`}
        >
          C1
        </span>
      </div>
    </div>
  );
};

export default LogoEmblem;
