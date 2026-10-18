import React from 'react';
import { siteContent } from '../config/siteContent';
import { Star, Phone, Mail, MapPin, ChevronRight, Heart } from 'lucide-react';
import { SocialMediaBar } from '../components/SocialIcons';
import { LogoEmblem } from '../components/Logo';

export const FooterSection = ({ onOpenBooking }) => {
  const { hotel, navigation, footer, roomsSection } = siteContent;

  return (
    <footer className="bg-hotel-950 border-t border-slate-800/80 pt-12 sm:pt-16 pb-8 sm:pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-800/80">
          
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
                <span className="truncate">{hotel.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href={`tel:${hotel.phoneRaw}`} className="hover:text-gold-300 transition-colors">
                  {hotel.phone}
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

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              {footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-gold-500" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accommodation Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              {footer.roomsLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {roomsSection.rooms.map((room) => (
                <li key={room.id}>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(room.id)}
                    className="hover:text-gold-300 transition-colors flex items-center justify-between w-full text-left"
                  >
                    <span className="truncate">{room.name}</span>
                    <span className="text-gold-400 font-medium shrink-0 ml-2">{room.formattedPrice}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights & Guarantee */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Ayrıcalıklar
            </h4>
            <div className="p-3.5 rounded-xl bg-hotel-900/80 border border-slate-800 text-[11px] space-y-2 text-slate-300">
              <p className="font-semibold text-gold-400">18 km Erciyes Servisi</p>
              <p>Otelden kayak pistlerine düzenli transfer & ısıtmalı kayak odası.</p>
              <div className="pt-2 border-t border-slate-800">
                <p className="font-semibold text-gold-400">1500 m² SPA Alanı</p>
                <p>Otel misafirlerimize kapalı havuz, hamam ve sauna ücretsizdir.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Media Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>{footer.copyright}</p>
            <p className="text-[11px] text-slate-600 mt-0.5">{footer.legalNotice}</p>
          </div>
          <SocialMediaBar size="sm" />
        </div>

      </div>
    </footer>
  );
};
