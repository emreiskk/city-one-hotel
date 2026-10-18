import React from 'react';

/**
 * SectionBadge: Zarif, lüks bölme rozeti (üst başlık)
 */
export const SectionBadge = ({ 
  children, 
  variant = 'gold', 
  className = '',
  icon: Icon = null
}) => {
  const variantStyles = {
    gold: 'border-gold-500/30 bg-gold-500/10 text-gold-300 shadow-sm',
    dark: 'border-slate-700 bg-hotel-900/80 text-slate-300',
    white: 'border-white/20 bg-white/10 text-white'
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase backdrop-blur-md ${variantStyles[variant] || variantStyles.gold} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5 text-gold-400 shrink-0" />}
      <span>{children}</span>
    </div>
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
