import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { MountainSnow, Calendar, Clock, Compass, ShieldCheck } from 'lucide-react';

export default function SkiSection({ onOpenBooking }) {
  const { content } = useLanguage();
  const { skiSection, hero, hotel, floatingActions } = content;

  return (
    <section id="ski" className="py-14 sm:py-20 lg:py-28 relative overflow-hidden bg-hotel-900/60 border-t border-slate-800">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <SectionBadge icon={MountainSnow} className="mb-4">
            {skiSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {skiSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {skiSection.subtitle}
          </Subtitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Visual Showcase with Highlights */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full w-full shadow-2xl border border-slate-700/80 group min-h-[300px]">
              <img
                src={skiSection.image}
                alt="Erciyes Kayak Merkezi Transfer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/90 via-transparent to-transparent" />
              
              {/* Distance Floating Stat Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-hotel-950/90 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">
                    {skiSection.distanceLabel || 'Erciyes Pistlerine Mesafe'}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-gold-400">{skiSection.distance}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] sm:text-xs text-slate-400 block font-medium">
                    {skiSection.durationLabel || 'Ulaşım Süresi'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 flex items-center justify-end gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-400" /> {skiSection.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Advantages Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3 sm:space-y-4 h-full">
            {skiSection.advantages.map((adv, idx) => (
              <Card
                key={idx}
                variant="elevated"
                hover={true}
                className="p-3.5 sm:p-5 border-slate-800 hover:border-gold-500/40"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 font-serif font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1.5">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button
                variant="gold"
                size="md"
                icon={Calendar}
                iconPosition="left"
                onClick={() => onOpenBooking()}
                className="flex-1 w-full"
              >
                {hero.ctaPrimary}
              </Button>
              <Button
                as="a"
                href={`https://wa.me/${hotel.whatsappRaw}?text=${encodeURIComponent(floatingActions.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
                size="md"
                className="flex-1 w-full"
              >
                {skiSection.shuttleButton || 'Kayak Paketi Bilgisi Al'}
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
