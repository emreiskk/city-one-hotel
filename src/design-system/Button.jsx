import React from 'react';

/**
 * Button: Gold, Dark, Outline ve Ghost varyantlarına sahip merkezi buton bileşeni
 */
export const Button = ({
  children,
  variant = 'gold',
  size = 'md',
  fullWidth = false,
  icon: Icon = null,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  type = 'button',
  as: Component = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98] select-none whitespace-nowrap';

  const variants = {
    gold: 'bg-gold-gradient hover:bg-gold-gradient-hover text-white font-semibold shadow-lg hover:shadow-gold-glow hover:-translate-y-0.5 border border-gold-400/30',
    dark: 'bg-hotel-900/80 hover:bg-hotel-850 text-slate-100 border border-slate-700/80 hover:border-gold-500/40 shadow-sm hover:-translate-y-0.5 backdrop-blur-md',
    outline: 'bg-hotel-950/60 hover:bg-gold-500/20 text-gold-300 hover:text-gold-200 border border-gold-500/50 hover:border-gold-400 shadow-lg hover:-translate-y-0.5 backdrop-blur-md',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white',
    whatsapp: 'bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 border border-emerald-400/30'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold',
    xl: 'text-lg px-8 py-4 gap-3 font-semibold'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <Component
      type={Component === 'button' ? type : undefined}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant] || variants.gold} ${sizes[size] || sizes.md} ${widthStyle} ${className}`}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : !children && Icon ? (
        <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />}
          {children && <span>{children}</span>}
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
        </>
      )}
    </Component>
  );
};
