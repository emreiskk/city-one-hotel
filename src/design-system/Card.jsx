import React from 'react';

/**
 * Card: Elevated ve Glassmorphism varyantlarına sahip lüks kart taşıyıcı bileşen
 */
export const Card = ({
  children,
  variant = 'elevated',
  hover = true,
  className = '',
  onClick,
  as: Component = 'div',
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 relative overflow-hidden';

  const variants = {
    elevated: 'bg-hotel-900 border border-slate-800 shadow-card hover:border-slate-700',
    glassmorphism: 'glass-panel shadow-luxury hover:border-slate-600/40',
    goldBorder: 'glass-panel-gold shadow-gold-glow/20 border-gold-500/30 hover:border-gold-500/60',
    darkGlass: 'bg-hotel-950/80 backdrop-blur-xl border border-white/5 shadow-2xl'
  };

  const hoverStyles = hover 
    ? 'hover:-translate-y-1.5 hover:shadow-2xl' 
    : '';

  return (
    <Component
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.elevated} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4 sm:p-6 pb-2 sm:pb-3 ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`p-4 sm:p-6 pt-1 sm:pt-2 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`p-4 sm:p-6 pt-3 sm:pt-4 border-t border-slate-800/80 mt-auto ${className}`}>{children}</div>
);
