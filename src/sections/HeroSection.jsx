import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Calendar, ArrowRight, CheckCircle2, Crown } from 'lucide-react';

export const HeroSection = ({ onOpenBooking }) => {
  const { content } = useLanguage();
  const { hero, hotel } = content;

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 overflow-hidden">
      
      {/* Background with Dark Glass & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source type="image/avif" srcSet="/assets/hotel/exterior/hero-aerial.avif" />
          <img
            src={hero.backgroundImage}
            alt={hotel.name}
            className="w-full h-full object-cover object-[center_22%] scale-105 animate-in fade-in duration-1000"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Vertical vignette gradient */}
        <div className="absolute inset-0 bg-hero-overlay" />
        {/* Left-to-right subtle luxury vignette to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-hotel-950/90 via-hotel-950/50 to-transparent pointer-events-none" />
        {/* Subtle gold radiance at top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Section Badge */}
          <div className="mb-4">
            <SectionBadge icon={Crown} variant="gold">
              {hero.badge}
            </SectionBadge>
          </div>

          {/* Luxury Main Heading */}
          <Heading as="h1" size="hero" className="mb-6">
            <span>{hero.titlePrimary} </span>
            <span className="text-gold-gradient block sm:inline">{hero.titleHighlight}</span>
          </Heading>

          {/* Subtitle */}
          <Subtitle size="lg" className="mb-8 text-slate-200/90 text-base sm:text-lg lg:text-xl font-light">
            {hero.description}
          </Subtitle>

          {/* Key Feature Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-9 max-w-2xl">
            {hero.featuresPills.map((pill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-hotel-900/60 border border-slate-700/50 backdrop-blur-md text-xs sm:text-sm text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{pill}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs: Focused luxury direct booking & room discovery */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Button
              variant="gold"
              size="md"
              icon={Calendar}
              iconPosition="left"
              onClick={() => onOpenBooking()}
              className="py-3 sm:!py-3.5 sm:!px-7 text-sm sm:text-base shadow-xl"
            >
              {hero.ctaPrimary}
            </Button>

            <Button
              as="a"
              href="#rooms"
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="py-3 sm:!py-3.5 sm:!px-7 text-sm sm:text-base justify-center"
            >
              {hero.ctaSecondary}
            </Button>
          </div>

        </div>

        {/* Floating Quick Stats Card / Bar */}
        <div className="mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {hero.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold text-gold-400 tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-sm text-slate-300 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
