import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ExternalLink, Navigation } from 'lucide-react';

export default function ContactSection() {
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

  const googleMapsUrl = 'https://maps.google.com/?cid=16520117467261954514';
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
          
          {/* Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            
            {/* Address */}
            <Card variant="elevated" hover={false} className="p-3.5 sm:p-5 border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {contactSection.addressTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {contactSection.addressText}
                  </p>
                  <span className="text-[11px] text-gold-400 mt-2 block font-medium">
                    {hotel.locationHighlights}
                  </span>
                  <div className="mt-2.5 pt-2 border-t border-slate-800/60">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-semibold transition-all group cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5 text-gold-400 group-hover:scale-110 transition-transform" />
                      <span>{openMapsLabel}</span>
                      <ExternalLink className="w-3 h-3 text-gold-400/80" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phone Numbers: Santral & WhatsApp */}
            <Card variant="elevated" hover={false} className="p-3.5 sm:p-5 border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm mb-2">
                    {contactSection.phoneTitle}
                  </h3>
                  <div className="space-y-2.5">
                    {contactSection.phones.map((p, i) => {
                      const isObj = typeof p === 'object';
                      const label = isObj ? p.label : (i === 0 ? (contactSection.receptionLabel || 'Resepsiyon & Rezervasyon') : 'WhatsApp');
                      const number = isObj ? (p.display || p.number) : p;
                      const href = isObj ? p.href : `tel:${p.replace(/[^0-9+]/g, '')}`;
                      const subtext = isObj ? p.subtext : null;
                      const isWa = isObj ? p.isWhatsapp : (i === 1);

                      return (
                        <a
                          key={i}
                          href={href}
                          target={isWa ? "_blank" : undefined}
                          rel={isWa ? "noopener noreferrer" : undefined}
                          className={`flex items-center justify-between p-2.5 rounded-lg border transition-all ${
                            isWa 
                              ? 'bg-gold-500/10 border-gold-500/30 hover:border-gold-400 hover:bg-gold-500/15' 
                              : 'bg-slate-900/60 border-slate-800 hover:border-gold-500/40 hover:bg-slate-900'
                          }`}
                        >
                          <div>
                            <span className="text-[11px] font-medium text-slate-400 block">
                              {label}
                            </span>
                            <span className={`text-xs sm:text-sm font-bold ${isWa ? 'text-gold-400' : 'text-white'}`}>
                              {number}
                            </span>
                            {subtext && (
                              <span className="text-[10px] text-slate-400 block mt-0.5">
                                {subtext}
                              </span>
                            )}
                          </div>
                          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                            isWa 
                              ? 'bg-gold-500/20 text-gold-300 border border-gold-500/30' 
                              : 'bg-gold-500/15 text-gold-300 border border-gold-500/20'
                          }`}>
                            {isWa ? 'WhatsApp' : callActionLabel}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>

            {/* Email Addresses */}
            <Card variant="elevated" hover={false} className="p-3.5 sm:p-5 border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">
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
              </div>
            </Card>

            {/* Hours Detailed List */}
            <Card variant="elevated" hover={false} className="p-3.5 sm:p-5 border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm mb-2">
                    {contactSection.hoursTitle}
                  </h3>
                  <div className="space-y-2 text-xs text-slate-300">
                    {(contactSection.hoursList || []).map((h, i) => {
                      const hasDivider = h.time && h.time.includes('•');
                      const parts = hasDivider ? h.time.split('•').map(s => s.trim()) : [h.time];

                      return (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between pb-1.5 border-b border-slate-800/60 last:border-0 last:pb-0 gap-1 sm:gap-3">
                          <span className="text-slate-400 font-medium shrink-0 pt-0.5">{h.label}</span>
                          {parts.length > 1 ? (
                            <div className="flex flex-col sm:items-end text-gold-300 font-semibold text-[11px] sm:text-xs space-y-0.5 sm:text-right">
                              {parts.map((p, pIdx) => (
                                <span key={pIdx} className="whitespace-nowrap">{p}</span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-gold-300 font-semibold text-[11px] sm:text-xs sm:text-right">
                              {h.time}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>

            {/* Complimentary Guest Privileges Card (Lüks Alt Alta Sıralı Altın Konsept) */}
            {contactSection.privileges && (
              <Card variant="glassmorphism" hover={false} className="p-4 sm:p-5 border-gold-500/25 bg-gold-500/5 shadow-xl">
                <h4 className="font-serif text-sm sm:text-base font-bold text-gold-300 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{contactSection.privilegesTitle}</span>
                </h4>
                <div className="flex flex-col space-y-2 text-xs text-slate-200">
                  {contactSection.privileges.map((privilege, i) => (
                    <div key={i} className="flex items-start gap-2.5 py-1 border-b border-white/5 last:border-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span className="leading-snug text-slate-200 font-normal">{privilege}</span>
                    </div>
                  ))}
                </div>
              </Card>
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
                  className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-gold-gradient text-white text-xs font-bold shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-102 active:scale-98 transition-all shrink-0 cursor-pointer"
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
                  href={googleMapsUrl}
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
            <Card variant="glassmorphism" hover={false} className="p-4 sm:p-6 border-slate-800">
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
                </form>
              )}
            </Card>

          </div>

        </div>

      </div>
    </section>
  );
}
