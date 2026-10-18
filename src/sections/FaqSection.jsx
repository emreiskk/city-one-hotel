import React, { useState } from 'react';
import { siteContent } from '../config/siteContent';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Card } from '../design-system/Card';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const { faqSection } = siteContent;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-hotel-900/50 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <SectionBadge icon={HelpCircle} className="mb-4">
            {faqSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {faqSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {faqSection.subtitle}
          </Subtitle>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqSection.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Card
                key={index}
                variant="elevated"
                hover={false}
                className={`transition-all duration-300 border-slate-800 ${
                  isOpen ? 'border-gold-500/40 bg-hotel-900' : 'bg-hotel-950/70 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base lg:text-lg font-semibold text-white">
                    {item.q}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-gold-500/20 text-gold-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
