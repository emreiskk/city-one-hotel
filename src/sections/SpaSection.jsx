import React, { useState } from 'react';
import { siteContent } from '../config/siteContent';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { 
  Waves, 
  Flame, 
  Droplets, 
  HeartHandshake, 
  Dumbbell, 
  CheckCircle2, 
  Clock, 
  Calendar 
} from 'lucide-react';

const tabIcons = {
  pool: Waves,
  hamam: Droplets,
  sauna: Flame,
  massage: HeartHandshake,
  fitness: Dumbbell
};

export default function SpaSection({ onOpenBooking }) {
  const { spaSection } = siteContent;
  const [activeTabId, setActiveTabId] = useState(spaSection.tabs[0].id);

  const activeTab = spaSection.tabs.find(t => t.id === activeTabId) || spaSection.tabs[0];
  const IconComponent = tabIcons[activeTab.id] || Waves;

  return (
    <section id="spa" className="py-14 sm:py-20 lg:py-28 bg-hotel-950 relative overflow-hidden">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <SectionBadge icon={Waves} className="mb-4">
            {spaSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {spaSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {spaSection.subtitle}
          </Subtitle>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {spaSection.stats.map((stat, idx) => (
            <Card
              key={idx}
              variant="glassmorphism"
              hover={false}
              className="p-3.5 sm:p-5 text-center border-slate-800"
            >
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-gold-400 block mb-0.5 sm:mb-1">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                {stat.label}
              </span>
            </Card>
          ))}
        </div>

        {/* Tab Buttons Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-10">
          {spaSection.tabs.map((tab) => {
            const TabIcon = tabIcons[tab.id] || Waves;
            const isActive = tab.id === activeTabId;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gold-gradient text-white shadow-gold-glow/30 scale-105 border border-gold-400/40'
                    : 'bg-hotel-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <Card variant="elevated" hover={false} className="p-4 sm:p-8 lg:p-10 border-slate-800/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
            
            {/* Visual Column */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <div className="relative group overflow-hidden rounded-2xl aspect-[16/10] lg:aspect-auto lg:h-full w-full bg-slate-900 min-h-[320px]">
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs text-slate-200 backdrop-blur-md bg-hotel-950/70 p-2.5 sm:p-3 rounded-xl border border-white/10">
                  <span className="font-semibold text-gold-300 text-[11px] sm:text-xs">{activeTab.subtitle}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-400">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> 07:00 - 22:00
                  </span>
                </div>
              </div>
            </div>

            {/* Description & Features Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold mb-3">
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{activeTab.subtitle}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                  {activeTab.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-6">
                  {activeTab.description}
                </p>

                <div className="space-y-3 mb-8">
                  {activeTab.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
                <Button
                  variant="gold"
                  size="md"
                  icon={Calendar}
                  iconPosition="left"
                  onClick={() => onOpenBooking()}
                  className="flex-1 w-full"
                >
                  {siteContent.hero.ctaPrimary}
                </Button>
                <Button
                  as="a"
                  href={`tel:${siteContent.hotel.phoneRaw}`}
                  variant="dark"
                  size="md"
                  className="flex-1 w-full"
                >
                  SPA Bilgi Hattı
                </Button>
              </div>

            </div>

          </div>
        </Card>

      </div>
    </section>
  );
}
