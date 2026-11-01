import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const { content } = useLanguage();
  const { faqSection } = content;
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

        {/* Editorial Accordion List (Clean Hairline Dividers, No Box Cards) */}
        <div className="divide-y divide-slate-800/80 border-y border-slate-800/80">
          {faqSection.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-1">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-white group-hover:text-gold-300 transition-colors">
                    {item.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gold-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
