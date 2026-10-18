import React from 'react';
import { siteContent } from '../config/siteContent';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Card } from '../design-system/Card';
import { Button } from '../design-system/Button';
import { Utensils, Coffee, ChefHat } from 'lucide-react';

export default function DiningSection({ onOpenBooking }) {
  const { diningSection, hotel } = siteContent;

  return (
    <section id="dining" className="py-14 sm:py-20 lg:py-28 bg-hotel-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <SectionBadge icon={Utensils} className="mb-4">
            {diningSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {diningSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {diningSection.subtitle}
          </Subtitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full w-full shadow-2xl border border-slate-700/80 group min-h-[300px]">
              <img
                src={diningSection.image}
                alt={diningSection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-hotel-950/85 backdrop-blur-md border border-white/10 flex items-center gap-3">
                <ChefHat className="w-7 h-7 sm:w-8 sm:h-8 text-gold-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">Tescilli Kayseri Lezzetleri & Gurme Mutfak</span>
                  <span className="text-[11px] text-slate-300">Geleneksel pastırma, yağlama, mantı ve taze fırın mamulleri</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3 sm:space-y-4 h-full">
            {diningSection.features.map((feature, idx) => (
              <Card
                key={idx}
                variant="elevated"
                hover={true}
                className="p-3.5 sm:p-5 border-slate-800 hover:border-gold-500/40"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    {idx === 0 ? <Coffee className="w-5 h-5" /> : <ChefHat className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button
                variant="gold"
                size="md"
                onClick={() => onOpenBooking()}
                className="flex-1 w-full"
              >
                Kahvaltı Dahil Rezervasyon
              </Button>
              <Button
                as="a"
                href={`tel:${hotel.phoneRaw}`}
                variant="dark"
                size="md"
                className="flex-1 w-full"
              >
                Restoran Masa Rezervasyonu
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
