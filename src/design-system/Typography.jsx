import React from 'react';

/**
 * SectionBadge: Lüks editoryal üst başlık (Eyebrow/Kicker) - Kutusuz, asil tipografi
 */
export const SectionBadge = ({ 
  children, 
  variant = 'gold', 
  className = '',
  icon: _Icon = null
}) => {
  const variantColors = {
    gold: 'text-gold-400',
    dark: 'text-slate-400',
    white: 'text-slate-200'
  };

  return (
    <p className={`text-xs font-semibold tracking-[0.25em] uppercase ${variantColors[variant] || 'text-gold-400'} ${className}`}>
      {children}
    </p>
  );
};

/**
 * Heading: Semantik HTML etiketleri (h1-h6) destekleyen lüks otel başlığı
 */
export const Heading = ({ 
  children, 
  as: Component = 'h2', 
  size = 'xl', 
  serif = true,
  gradient = false, 
  className = '' 
}) => {
  const sizeStyles = {
    hero: 'text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]',
    '2xl': 'text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2]',
    xl: 'text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug',
    lg: 'text-xl sm:text-2xl font-semibold',
    md: 'text-lg sm:text-xl font-medium',
    sm: 'text-base font-semibold'
  };

  const fontClass = serif ? 'font-serif' : 'font-sans';
  const gradientClass = gradient ? 'text-gold-gradient' : 'text-slate-50';

  return (
    <Component className={`${fontClass} ${sizeStyles[size] || sizeStyles.xl} ${gradientClass} ${className}`}>
      {children}
    </Component>
  );
};

/**
 * Subtitle: Başlık altı açıklama metinleri
 */
export const Subtitle = ({ 
  children, 
  size = 'md', 
  className = '' 
}) => {
  const sizeStyles = {
    lg: 'text-base sm:text-lg text-slate-300 leading-relaxed font-normal',
    md: 'text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal',
    sm: 'text-xs sm:text-sm text-slate-400 leading-normal'
  };

  return (
    <p className={`${sizeStyles[size] || sizeStyles.md} max-w-3xl ${className}`}>
      {children}
    </p>
  );
};
