import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Card } from '../design-system/Card';
import { Button } from '../design-system/Button';

export const NewsletterBanner = () => {
  const { content } = useLanguage();
  const { newsletter } = content;
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsLoading(true);

    // Simulate instant secure newsletter subscription & save to localStorage
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('city_one_newsletter_subscribers') || '[]');
        if (!stored.includes(email)) {
          stored.push(email);
          localStorage.setItem('city_one_newsletter_subscribers', JSON.stringify(stored));
        }
      } catch {
        // Safe fallback if storage unavailable
      }

      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 500);
  };

  if (!newsletter) return null;

  return (
    <Card 
      variant="elevated" 
      hover={false} 
      className="p-5 sm:p-8 mb-8 sm:mb-12 bg-hotel-900 border-slate-800 shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        
        {/* Left Column: Design System Typography (SectionBadge + Heading + Subtitle) */}
        <div className="lg:col-span-7 space-y-2.5">
          <SectionBadge icon={Mail} variant="gold" className="mb-2">
            {newsletter.badge}
          </SectionBadge>

          <Heading as="h3" size="lg" serif={true} className="leading-snug text-white">
            {newsletter.title}
          </Heading>

          <Subtitle size="sm" className="text-slate-300 max-w-xl">
            {newsletter.subtitle}
          </Subtitle>
        </div>

        {/* Right Column: Input & Action */}
        <div className="lg:col-span-5">
          {isSubmitted ? (
            <div className="p-4 sm:p-5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-200 flex items-start gap-3.5 animate-in fade-in duration-300 shadow-lg">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-white text-sm sm:text-base mb-1">
                  {newsletter.successTitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {newsletter.successMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2.5 text-[11px] font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-2 cursor-pointer transition-colors"
                >
                  {newsletter.resetButton || 'Farklı bir e-posta kaydet'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10 text-slate-400">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletter.placeholder}
                    className="w-full h-12 pl-10 pr-4 rounded-xl glass-input bg-hotel-950/90 text-white placeholder-slate-400 text-xs sm:text-sm border border-slate-700/80 focus:border-gold-400 focus:ring-1 focus:ring-gold-500/30 transition-all shadow-inner"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="md"
                  icon={Send}
                  iconPosition="right"
                  disabled={isLoading}
                  className="h-12 px-6 rounded-xl whitespace-nowrap shadow-gold-glow/20 flex items-center justify-center font-semibold text-xs sm:text-sm shrink-0"
                >
                  {isLoading ? '...' : newsletter.button}
                </Button>
              </div>
            </form>
          )}
        </div>

      </div>

    </Card>
  );
};
