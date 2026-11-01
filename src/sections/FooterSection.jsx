import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SocialMediaBar } from '../components/SocialIcons';
import { LogoEmblem } from '../components/Logo';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { NewsletterBanner } from '../components/NewsletterBanner';
import { legalTabs, legalData } from '../data/legalDocuments';

export const FooterSection = ({ onOpenBooking: _onOpenBooking, onOpenLegal }) => {
  const { currentLang, content } = useLanguage();
  const { hotel, navigation, footer } = content;

  return (
    <footer className="bg-hotel-950 border-t border-slate-800/80 pt-12 sm:pt-16 pb-8 sm:pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* VIP Privilege Club & Newsletter Subscription Banner */}
        <NewsletterBanner onOpenLegal={onOpenLegal} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 sm:pb-12 border-b border-slate-800/80">
          
          {/* Hotel Brand Column (4 Cols) */}
          <div className="md:col-span-2 lg:col-span-4 space-y-4">
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

          {/* Quick Navigation Links (2 Cols) */}
          <div className="border-t md:border-t-0 border-slate-800/60 pt-4 md:pt-0 lg:col-span-2">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
              {footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-gold-300 transition-colors block py-0.5 text-slate-300"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate & Legal (KVKK) Column (3 Cols) */}
          <div className="border-t md:border-t-0 border-slate-800/60 pt-4 md:pt-0 lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
              {footer.legalLinksTitle || "KVKK & Yasal"}
            </h4>
            <ul className="space-y-2 text-xs">
              {legalTabs.map((tab) => {
                const label = tab[currentLang] || tab.tr;
                return (
                  <li key={tab.id}>
                    <button
                      type="button"
                      onClick={() => onOpenLegal?.(tab.id)}
                      className="hover:text-gold-300 transition-colors text-slate-400 hover:text-white text-left block py-0.5 cursor-pointer"
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800/70">
              <p className="text-[11px] text-slate-400 leading-snug">
                <span className="text-gold-400/90 font-medium block mb-0.5">
                  {legalData[currentLang]?.controller?.title || "Veri Sorumlusu"}:
                </span>
                {legalData[currentLang]?.controller?.companyName || "Panaroma Mobilya İnşaat Turizm Otelsan Tic. A.Ş."}
              </p>
            </div>
          </div>

          {/* Highlights & Guarantee (3 Cols) */}
          <div className="border-t md:border-t-0 border-slate-800/60 pt-4 md:pt-0 lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
              {footer.privilegesTitle || "Ayrıcalıklar"}
            </h4>
            <div className="p-4 rounded-xl bg-hotel-900/80 border border-slate-800 text-xs space-y-2.5 text-slate-300">
              <div>
                <p className="font-semibold text-gold-400">{footer.skiPerkTitle || "18 km Erciyes Servisi"}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{footer.skiPerkDesc || "Otelden kayak pistlerine düzenli transfer & ısıtmalı kayak odası."}</p>
              </div>
              <div className="pt-2.5 border-t border-slate-800">
                <p className="font-semibold text-gold-400">{footer.spaPerkTitle || "1500 m² SPA Alanı"}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{footer.spaPerkDesc || "Otel misafirlerimize kapalı havuz, hamam ve sauna ücretsizdir."}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links, Language Switcher & Social Media Icons */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <p>{footer.copyright}</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2.5 gap-y-1 text-[11px] text-slate-400">
              <span>{footer.legalNotice}</span>
              {legalTabs.map((tab) => (
                <React.Fragment key={tab.id}>
                  <span className="text-slate-600">•</span>
                  <button
                    type="button"
                    onClick={() => onOpenLegal?.(tab.id)}
                    className="hover:text-gold-300 transition-colors underline-offset-2 hover:underline cursor-pointer"
                  >
                    {tab[currentLang] || tab.tr}
                  </button>
                </React.Fragment>
              ))}
            </div>
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
