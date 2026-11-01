import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { 
  MountainSnow, 
  Waves, 
  Utensils, 
  Briefcase, 
  Compass, 
  ShieldCheck,
  Dumbbell,
  Coffee
} from 'lucide-react';

const iconMap = {
  MountainSnow,
  Waves,
  Utensils,
  Briefcase,
  Compass,
  ShieldCheck,
  Dumbbell,
  Coffee
};

export const FeaturesSection = () => {
  const { content } = useLanguage();
  const { keyFeatures, hotel } = content;

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative bg-hotel-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <SectionBadge className="mb-3">
            {keyFeatures.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {keyFeatures.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-400">
            {keyFeatures.subtitle}
          </Subtitle>
        </div>

        {/* Features 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {keyFeatures.items.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Waves;

            return (
              <article
                key={item.id}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-hotel-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors"
              >
                <div>
                  {/* Elegant Serif Number & Refined Highlight Tag */}
                  <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800/60">
                    <span className="font-serif text-2xl font-normal text-gold-400/90 tracking-widest">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-400">{hotel.name}</span>
                  <IconComponent className="w-4 h-4 text-gold-400/70" />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
