import React from 'react';
import { siteContent } from '../config/siteContent';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { Briefcase, Users, Maximize2, Check, Phone } from 'lucide-react';

export default function MeetingsSection() {
  const { meetingsSection, hotel } = siteContent;

  return (
    <section id="meetings" className="py-14 sm:py-20 lg:py-28 bg-hotel-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <SectionBadge icon={Briefcase} className="mb-4">
            {meetingsSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {meetingsSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {meetingsSection.subtitle}
          </Subtitle>
        </div>

        {/* Meeting Halls 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {meetingsSection.halls.map((hall) => (
            <Card
              key={hall.id}
              variant="elevated"
              hover={true}
              className="flex flex-col h-full bg-hotel-900 border-slate-800 group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <img
                  src={hall.image}
                  alt={hall.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hotel-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-hotel-950/80 backdrop-blur-md text-gold-300 border border-gold-500/20">
                  {hall.type}
                </div>
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gold-300 transition-colors">
                    {hall.name}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-300 mb-5 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-400" />
                      <span>{hall.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                      <span>{hall.area}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {hall.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    as="a"
                    href={`tel:${hotel.phoneRaw}`}
                    variant="outline"
                    size="sm"
                    fullWidth
                    icon={Phone}
                    iconPosition="left"
                  >
                    Teklif & Rezervasyon Al
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
