import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SocialMediaBar } from '../components/SocialIcons';
import { LogoEmblem } from '../components/Logo';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { NewsletterBanner } from '../components/NewsletterBanner';

export const FooterSection = ({ onOpenBooking }) => {
  const { content } = useLanguage();
  const { hotel, navigation, footer, roomsSection } = content;

  return (
    <footer className="bg-hotel-950 border-t border-slate-800/80 pt-12 sm:pt-16 pb-8 sm:pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* VIP Privilege Club & Newsletter Subscription Banner */}
        <NewsletterBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-slate-800/80">
          
          {/* Hotel Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <LogoEmblem size="md" />
              <div>
                <span className="font-serif font-bold text-xl text-white block">
                  {hotel.name}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
                  ))}
                  <span className="text-[10px] text-gold-400 font-semibold ml-1">
                    {hotel.starLabel}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {footer.about}
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="leading-snug">{hotel.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href={`tel:${hotel.phoneRaw}`} className="hover:text-gold-300 transition-colors">
                  {hotel.receptionLabel || hotel.santralLabel || `Resepsiyon: ${hotel.phone}`}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a 
                  href={`https://wa.me/${hotel.whatsappRaw}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold-300 transition-colors"
                >
                  {hotel.whatsappLabel || `WhatsApp: ${hotel.whatsapp}`}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href={`mailto:${hotel.email}`} className="hover:text-gold-300 transition-colors">
                  {hotel.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (Kalıcı ve Kararlı Liste) */}
          <div className="lg:col-span-3 border-t md:border-t-0 border-slate-800/60 pt-4 md:pt-0">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
              {footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-gold-300 transition-colors block py-0.5"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accommodation Highlights (Kalıcı ve Kararlı Liste) */}
          <div className="lg:col-span-3 border-t md:border-t-0 border-slate-800/60 pt-4 md:pt-0">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
              {footer.roomsLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {roomsSection.rooms.map((room) => (
                <li key={room.id}>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(room.id)}
                    className="hover:text-gold-300 transition-colors flex items-center justify-between w-full text-left cursor-pointer py-0.5"
                  >
                    <span className="truncate">{room.name}</span>
                    <span className="text-gold-400 font-medium shrink-0 ml-2 whitespace-nowrap">{room.formattedPrice}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights & Guarantee */}
          <div className="lg:col-span-2 border-t md:border-t-0 border-slate-800/60 pt-4 md:pt-0">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
              {footer.privilegesTitle || "Ayrıcalıklar"}
            </h4>
            <div className="p-3.5 rounded-xl bg-hotel-900/80 border border-slate-800 text-[11px] space-y-2 text-slate-300">
              <p className="font-semibold text-gold-400">{footer.skiPerkTitle || "18 km Erciyes Servisi"}</p>
              <p>{footer.skiPerkDesc || "Otelden kayak pistlerine düzenli transfer & ısıtmalı kayak odası."}</p>
              <div className="pt-2 border-t border-slate-800">
                <p className="font-semibold text-gold-400">{footer.spaPerkTitle || "1500 m² SPA Alanı"}</p>
                <p>{footer.spaPerkDesc || "Otel misafirlerimize kapalı havuz, hamam ve sauna ücretsizdir."}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Language Switcher & Social Media Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>{footer.copyright}</p>
            <p className="text-[11px] text-slate-600 mt-0.5">{footer.legalNotice}</p>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher variant="dropdown" direction="up" />
            <SocialMediaBar size="sm" />
          </div>
        </div>

      </div>
    </footer>
  );
};
