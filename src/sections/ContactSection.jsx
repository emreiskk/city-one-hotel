import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { MapPin, Send, CheckCircle2, ExternalLink, Navigation } from 'lucide-react';

export default function ContactSection({ onOpenLegal }) {
  const { content, currentLang } = useLanguage();
  const { contactSection, hotel } = content;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const callActionLabel = contactSection.callLabel || (
    currentLang === 'en' ? 'Call' : currentLang === 'de' ? 'Anrufen' : currentLang === 'ru' ? 'Позвонить' : 'Ara'
  );

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=City+One+Hotel+Kayseri';
  const googleDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=City+One+Hotel+Kayseri';

  const openMapsLabel = currentLang === 'en' 
    ? 'Open in Google Maps' 
    : currentLang === 'de' 
      ? 'In Google Maps öffnen' 
      : currentLang === 'ru' 
        ? 'Открыть в Google Maps' 
        : "Google Haritalar'da Aç";

  const directionsLabel = currentLang === 'en'
    ? 'Directions'
    : currentLang === 'de'
      ? 'Route'
      : currentLang === 'ru'
        ? 'Маршрут'
        : 'Yol Tarifi Al';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-hotel-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <SectionBadge icon={MapPin} className="mb-4">
            {contactSection.sectionBadge}
          </SectionBadge>
          <Heading as="h2" size="2xl" className="mb-4">
            {contactSection.title}
          </Heading>
          <Subtitle size="lg" className="mx-auto text-slate-300">
            {contactSection.subtitle}
          </Subtitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Unified Contact Dossier Panel (Single Clean Architecture, No Nested Boxes) */}
          <div className="lg:col-span-5 rounded-2xl bg-hotel-900/40 border border-slate-800/80 p-6 sm:p-8 space-y-6 divide-y divide-slate-800/80">
            
            {/* Address Block */}
            <div className="space-y-2">
              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                {contactSection.addressTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {contactSection.addressText}
              </p>
              <span className="text-[11px] text-gold-400 block font-medium">
                {hotel.locationHighlights}
              </span>
              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 text-xs font-semibold transition-colors"
                >
                  <span>{openMapsLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Numbers Block */}
            <div className="pt-6 space-y-3">
              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                {contactSection.phoneTitle}
              </h3>
              <div className="space-y-2">
                {contactSection.phones.map((p, i) => {
                  const isObj = typeof p === 'object';
                  const label = isObj ? p.label : (i === 0 ? (contactSection.receptionLabel || 'Resepsiyon & Rezervasyon') : 'WhatsApp');
                  const number = isObj ? (p.display || p.number) : p;
                  const href = isObj ? p.href : `tel:${p.replace(/[^0-9+]/g, '')}`;
                  const isWa = isObj ? p.isWhatsapp : (i === 1);

                  return (
                    <a
                      key={i}
                      href={href}
                      target={isWa ? "_blank" : undefined}
                      rel={isWa ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between py-2 text-xs text-slate-300 hover:text-white transition-colors group"
                    >
                      <div>
                        <span className="text-[11px] text-slate-400 block">{label}</span>
                        <span className={`font-semibold ${isWa ? 'text-gold-400' : 'text-slate-200 group-hover:text-gold-300'}`}>
                          {number}
                        </span>
                      </div>
                      <span className="text-[11px] text-gold-400/80 group-hover:text-gold-300">
                        {isWa ? 'WhatsApp →' : `${callActionLabel} →`}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Email Addresses Block */}
            <div className="pt-6 space-y-2">
              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                {contactSection.emailTitle}
              </h3>
              <div className="space-y-1">
                {contactSection.emails.map((email, i) => (
                  <a
                    key={i}
                    href={`mailto:${email}`}
                    className="block text-xs sm:text-sm text-slate-300 hover:text-gold-300 transition-colors"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Operational Hours Block */}
            <div className="pt-6 space-y-3">
              <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                {contactSection.hoursTitle}
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                {(contactSection.hoursList || []).map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-1">
                    <span className="text-slate-400">{h.label}</span>
                    <span className="text-gold-300 font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Privileges Block */}
            {contactSection.privileges && (
              <div className="pt-6 space-y-3">
                <h4 className="font-serif text-sm sm:text-base font-bold text-gold-300">
                  {contactSection.privilegesTitle}
                </h4>
                <div className="space-y-1.5 text-xs text-slate-300">
                  {contactSection.privileges.map((privilege, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-gold-400/60">•</span>
                      <span>{privilege}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Map & Quick Message Form Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Google Map with Direct Google Maps Integration */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl w-full bg-slate-900 relative group">
              
              {/* Floating Header Card over the Map */}
              <div className="absolute top-3 left-3 right-3 z-10 flex flex-wrap items-center justify-between gap-2.5 p-2.5 sm:p-3 rounded-xl bg-hotel-950/90 backdrop-blur-md border border-slate-700/80 shadow-lg pointer-events-auto">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-white truncate">
                      City One Hotel Kayseri
                    </div>
                    <div className="text-[11px] text-slate-300 truncate hidden xs:block sm:block">
                      {contactSection.addressText || 'Gevhernesibe Mah. Salih Avgun Paşa Cd. No:3, Kocasinan / Kayseri'}
                    </div>
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-hotel-950 text-xs font-medium transition-colors shrink-0 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-white" />
                  <span>{openMapsLabel}</span>
                  <ExternalLink className="w-3 h-3 text-white/90" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="aspect-[16/9] min-h-[300px] sm:min-h-[360px] w-full pt-14 sm:pt-0">
                <iframe
                  title="City One Hotel Kayseri Konum Haritası"
                  src={contactSection.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Bottom bar with quick address pill */}
              <div className="p-3 bg-hotel-950/95 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-2 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                  <span className="truncate">{hotel.locationHighlights || 'Kayseri Şehir Merkezi • 24/7 Vale & Kapalı Otopark'}</span>
                </span>
                <a
                  href={googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-gold-300 font-semibold underline underline-offset-2 shrink-0 ml-3 flex items-center gap-1"
                >
                  <span>{directionsLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Quick Contact Inquiry Form */}
            <div className="p-5 sm:p-8 rounded-2xl bg-hotel-900/40 border border-slate-800/80">
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                {contactSection.quickForm?.title || 'Hızlı İletişim & Talep Formu'}
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                {contactSection.quickForm?.subtitle || 'Toplantı, kongre, grup rezervasyonu veya özel sorularınız için ekibimize anında mesaj iletin.'}
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-200 flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-xs sm:text-sm">
                    {contactSection.quickForm?.successMessage || 'Mesajınız alındı! City One Hotel misafir ilişkileri ekibimiz en kısa sürede sizinle iletişime geçecektir.'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder={contactSection.quickForm?.namePlaceholder || 'Adınız Soyadınız'}
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90"
                    />
                    <input
                      type="tel"
                      placeholder={contactSection.quickForm?.phonePlaceholder || 'Telefon Numaranız'}
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder={contactSection.quickForm?.emailPlaceholder || 'E-Posta Adresiniz'}
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90"
                  />
                  <textarea
                    rows={3}
                    placeholder={contactSection.quickForm?.messagePlaceholder || 'Mesajınız veya konaklama talebiniz...'}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90 resize-none"
                  />
                  <Button
                    type="submit"
                    variant="gold"
                    fullWidth
                    size="md"
                    icon={Send}
                    iconPosition="right"
                  >
                    {contactSection.quickForm?.submitButton || 'Mesajı Gönder'}
                  </Button>
                  {onOpenLegal && (
                    <p className="text-[11px] text-slate-400 text-center pt-1 leading-snug">
                      {currentLang === 'tr' ? (
                        <>
                          Formu göndererek{' '}
                          <button
                            type="button"
                            onClick={() => onOpenLegal('aydinlatma')}
                            className="text-gold-400 hover:text-gold-300 underline underline-offset-2 cursor-pointer font-medium"
                          >
                            KVKK Aydınlatma Metni
                          </button>
                          'ni okuduğunuzu onaylamış olursunuz.
                        </>
                      ) : currentLang === 'en' ? (
                        <>
                          By submitting, you agree to our{' '}
                          <button
                            type="button"
                            onClick={() => onOpenLegal('aydinlatma')}
                            className="text-gold-400 hover:text-gold-300 underline underline-offset-2 cursor-pointer font-medium"
                          >
                            Privacy & KVKK Notice
                          </button>
                          .
                        </>
                      ) : currentLang === 'de' ? (
                        <>
                          Mit dem Absenden stimmen Sie unserer{' '}
                          <button
                            type="button"
                            onClick={() => onOpenLegal('aydinlatma')}
                            className="text-gold-400 hover:text-gold-300 underline underline-offset-2 cursor-pointer font-medium"
                          >
                            Datenschutzerklärung
                          </button>{' '}
                          zu.
                        </>
                      ) : (
                        <>
                          Отправляя форму, вы подтверждаете согласие с{' '}
                          <button
                            type="button"
                            onClick={() => onOpenLegal('aydinlatma')}
                            className="text-gold-400 hover:text-gold-300 underline underline-offset-2 cursor-pointer font-medium"
                          >
                            Уведомлением KVKK
                          </button>
                          .
                        </>
                      )}
                    </p>
                  )}
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
