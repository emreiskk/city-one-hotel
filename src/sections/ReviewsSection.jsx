import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Star, CheckCircle, MessageSquareQuote } from 'lucide-react';

export default function ReviewsSection() {
  const { content } = useLanguage();
  const { reviewsSection, hotel } = content;
  const { ratingSummary, reviews, labels } = reviewsSection;

  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-32 bg-hotel-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <SectionBadge icon={MessageSquareQuote} className="mb-3">
            {reviewsSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {reviewsSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {reviewsSection.subtitle}
          </Subtitle>
        </div>

        {/* Rating Score Architecture Card */}
        <div className="rounded-2xl bg-hotel-900/40 border border-slate-800/80 p-6 sm:p-8 lg:p-10 mb-10 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Main Score Column */}
            <div className="md:col-span-5 text-center md:text-left md:border-r border-slate-800/80 md:pr-10">
              <div className="inline-flex items-baseline gap-2">
                <span className="font-serif text-5xl sm:text-6xl font-light text-gold-400 tracking-tight">
                  {ratingSummary.average}
                </span>
                <span className="text-xl text-slate-400 font-serif font-light">/ {ratingSummary.outOf}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 my-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(Number(ratingSummary.average) || 4) ? 'fill-gold-400 text-gold-400' : 'fill-gold-400/20 text-gold-400/40'}`} 
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-white">
                {ratingSummary.totalVerified}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                <span className="text-gold-400/90 font-medium">{(labels?.googleScore || 'Google Değerlendirmesi')}:</span> {hotel?.rating?.googleScore || '4.1 / 5.0'}
              </p>
            </div>

            {/* Sub-criteria Scores */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 md:pt-0 border-t md:border-t-0 border-slate-800/80">
              <div className="text-center md:text-left">
                <span className="text-xs text-slate-400 block mb-1">{labels?.cleanliness || 'Temizlik'}</span>
                <span className="font-serif text-2xl font-light text-white">{ratingSummary.cleanliness}</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs text-slate-400 block mb-1">{labels?.location || 'Konum & Ulaşım'}</span>
                <span className="font-serif text-2xl font-light text-white">{ratingSummary.location}</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs text-slate-400 block mb-1">{labels?.service || 'Hizmet & İlgi'}</span>
                <span className="font-serif text-2xl font-light text-white">{ratingSummary.service}</span>
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs text-slate-400 block mb-1">{labels?.comfort || 'Oda Konforu'}</span>
                <span className="font-serif text-2xl font-light text-white">{ratingSummary.comfort}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Real Guest Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl bg-hotel-900/40 border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:border-slate-700/80"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-medium tracking-wide">{rev.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-base sm:text-lg font-medium text-white mb-3">
                  "{rev.title}"
                </h3>

                {/* Comment */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Room Info */}
              <div className="pt-5 border-t border-slate-800/60 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-gold-400/80" title={labels?.verifiedGuest || 'Doğrulanmış Misafir'} />
                  </div>
                  <span className="text-xs text-slate-400 block mt-0.5">{rev.role}</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-gold-400/90 font-medium">
                  {rev.roomStayed}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}