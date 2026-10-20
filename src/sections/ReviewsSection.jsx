import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Card } from '../design-system/Card';
import { Star, CheckCircle, MessageSquareQuote, Award } from 'lucide-react';

export default function ReviewsSection() {
  const { content } = useLanguage();
  const { reviewsSection, hotel } = content;
  const { ratingSummary, reviews, labels } = reviewsSection;

  return (
    <section id="reviews" className="py-14 sm:py-20 lg:py-28 bg-hotel-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <SectionBadge icon={MessageSquareQuote} className="mb-4">
            {reviewsSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {reviewsSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {reviewsSection.subtitle}
          </Subtitle>
        </div>

        {/* Rating Score Dashboard Card */}
        <Card variant="goldBorder" hover={false} className="p-4 sm:p-8 mb-8 sm:mb-14 bg-hotel-900/90 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Main Score Box */}
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-5 md:pb-0 md:pr-8">
              <div className="inline-flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-400">
                  {ratingSummary.average}
                </span>
                <span className="text-lg sm:text-xl text-slate-400 font-serif">/ {ratingSummary.outOf}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(Number(ratingSummary.average) || 4) ? 'fill-gold-400 text-gold-400' : 'fill-gold-400/20 text-gold-400/40'}`} 
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                {ratingSummary.totalVerified}
              </p>
              <p className="text-[11px] sm:text-xs text-gold-400 font-medium mt-1">
                {(labels?.googleScore || 'Google Değerlendirmesi')}: {hotel?.rating?.googleScore || '4.1 / 5.0'}
              </p>
            </div>

            {/* Sub-criteria Scores Grid with Guaranteed Equal Heights */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 items-stretch">
              <div className="bg-hotel-950/60 p-2.5 sm:p-3.5 rounded-xl border border-slate-800 text-center flex flex-col justify-between items-center h-full min-h-[76px]">
                <span className="text-[11px] sm:text-xs text-slate-400 block mb-1 leading-snug">{labels?.cleanliness || 'Temizlik'}</span>
                <span className="font-serif text-lg sm:text-xl font-bold text-white mt-auto">{ratingSummary.cleanliness}</span>
              </div>
              <div className="bg-hotel-950/60 p-2.5 sm:p-3.5 rounded-xl border border-slate-800 text-center flex flex-col justify-between items-center h-full min-h-[76px]">
                <span className="text-[11px] sm:text-xs text-slate-400 block mb-1 leading-snug">{labels?.location || 'Konum & Ulaşım'}</span>
                <span className="font-serif text-lg sm:text-xl font-bold text-white mt-auto">{ratingSummary.location}</span>
              </div>
              <div className="bg-hotel-950/60 p-2.5 sm:p-3.5 rounded-xl border border-slate-800 text-center flex flex-col justify-between items-center h-full min-h-[76px]">
                <span className="text-[11px] sm:text-xs text-slate-400 block mb-1 leading-snug">{labels?.service || 'Hizmet & İlgi'}</span>
                <span className="font-serif text-lg sm:text-xl font-bold text-white mt-auto">{ratingSummary.service}</span>
              </div>
              <div className="bg-hotel-950/60 p-2.5 sm:p-3.5 rounded-xl border border-slate-800 text-center flex flex-col justify-between items-center h-full min-h-[76px]">
                <span className="text-[11px] sm:text-xs text-slate-400 block mb-1 leading-snug">{labels?.comfort || 'Oda Konforu'}</span>
                <span className="font-serif text-lg sm:text-xl font-bold text-white mt-auto">{ratingSummary.comfort}</span>
              </div>
            </div>

          </div>
        </Card>

        {/* Real Guest Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {reviews.map((rev) => (
            <Card
              key={rev.id}
              variant="elevated"
              hover={true}
              className="p-4 sm:p-7 bg-hotel-900 border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-sm sm:text-base font-semibold text-white mb-2.5 flex items-center gap-2">
                  <MessageSquareQuote className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>"{rev.title}"</span>
                </h3>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Room Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-white">{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-gold-400" title={labels?.verifiedGuest || 'Doğrulanmış Misafir'} />
                  </div>
                  <span className="text-xs text-slate-400 block">{rev.role}</span>
                </div>
                <span className="text-[11px] font-medium text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/20">
                  {rev.roomStayed}
                </span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
