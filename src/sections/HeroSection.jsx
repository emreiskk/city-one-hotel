import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Calendar, ArrowRight, Star } from 'lucide-react';

export const HeroSection = ({ onOpenBooking }) => {
  const { content } = useLanguage();
  const { hero, hotel } = content;

  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      
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
        <div className="absolute inset-0 bg-gradient-to-r from-hotel-950/95 via-hotel-950/60 to-transparent pointer-events-none" />
        {/* Subtle gold radiance at top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Editorial Eyebrow Kicker with Discreet Rating - Clean, No Nested Boxes */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
              {hero.badge}
            </span>
            <span className="h-3 w-[1px] bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400 shrink-0" />
              <span className="font-semibold text-white">4.1</span>
              <span className="text-slate-400 text-[11px] hidden xs:inline">(3.2K+ Google)</span>
            </div>
          </div>

          {/* Luxury Main Heading */}
          <Heading as="h1" size="hero" className="mb-5 sm:mb-6">
            <span>{hero.titlePrimary} </span>
            <span className="text-gold-gradient block sm:inline">{hero.titleHighlight}</span>
          </Heading>

          {/* Subtitle - Poetic, Direct, Uncluttered */}
          <Subtitle size="lg" className="mb-8 sm:mb-10 text-slate-200/90 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
            {hero.description}
          </Subtitle>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Button
              variant="gold"
              size="md"
              icon={Calendar}
              iconPosition="left"
              onClick={() => onOpenBooking()}
              className="py-3 sm:!py-3.5 sm:!px-7 text-sm sm:text-base shadow-lg"
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

      </div>

    </section>
  );
};

export default HeroSection;
