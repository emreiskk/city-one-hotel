import React from 'react';

/**
 * Card: Sessiz lüks (Quiet Luxury) mimarisine sahip zarif taşıyıcı bileşen
 */
export function Card({
  children,
  variant = 'elevated',
  hover = false,
  className = '',
  onClick,
  as: Component = 'div',
  ...props
}) {
  const baseStyles = 'rounded-xl sm:rounded-2xl transition-colors duration-300 relative overflow-hidden';

  const variants = {
    elevated: 'bg-hotel-900/70 border border-slate-800/80 shadow-lg',
    glassmorphism: 'glass-panel shadow-lg',
    goldBorder: 'bg-hotel-900/90 border border-gold-500/25 shadow-xl',
    darkGlass: 'bg-hotel-950/90 backdrop-blur-xl border border-slate-800/60 shadow-xl'
  };

  const hoverStyles = hover ? 'hover:border-slate-700' : '';

  return (
    <Component
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.elevated} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className = '' }) {
  return <div className={`p-4 sm:p-6 pb-2 sm:pb-3 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }) {
  return <div className={`p-4 sm:p-6 pt-1 sm:pt-2 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }) {
  return <div className={`p-4 sm:p-6 pt-3 sm:pt-4 border-t border-slate-800/80 mt-auto ${className}`}>{children}</div>;
}

export default Card;
