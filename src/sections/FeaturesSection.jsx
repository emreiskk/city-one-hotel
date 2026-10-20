import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Card } from '../design-system/Card';
import { 
  MountainSnow, 
  Waves, 
  Utensils, 
  Briefcase, 
  Compass, 
  ShieldCheck,
  Dumbbell,
  Coffee,
  Gem
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
    <section className="py-14 sm:py-20 lg:py-28 relative overflow-hidden bg-hotel-950">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <SectionBadge icon={Gem} className="mb-4">
            {keyFeatures.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {keyFeatures.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-400">
            {keyFeatures.subtitle}
          </Subtitle>
        </div>

        {/* Features 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {keyFeatures.items.map((item) => {
            const IconComponent = iconMap[item.icon] || Waves;

            return (
              <Card
                key={item.id}
                variant="glassmorphism"
                hover={true}
                className="p-5 sm:p-7 flex flex-col justify-between group border-slate-800/80 hover:border-gold-500/40"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 truncate max-w-[190px] sm:max-w-none shrink-0">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-gold-400 transition-colors">
                    {hotel.name}
                  </span>
                  <div className="w-6 h-0.5 bg-slate-800 group-hover:bg-gold-400 transition-colors rounded-full" />
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
