import React, { useState } from 'react';
import { siteContent } from '../config/siteContent';
import { SectionBadge, Heading, Subtitle } from '../design-system/Typography';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const { contactSection, hotel } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

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
                </div>
              </div>
            </Card>

            {/* Phone Numbers */}
            <Card variant="elevated" hover={false} className="p-3.5 sm:p-5 border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {contactSection.phoneTitle}
                  </h3>
                  <div className="space-y-1">
                    {contactSection.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                        className="block text-xs sm:text-sm text-slate-300 hover:text-gold-300 transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
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

            {/* Hours */}
            <Card variant="elevated" hover={false} className="p-3.5 sm:p-5 border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {contactSection.hoursTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {contactSection.hoursText}
                  </p>
                </div>
              </div>
            </Card>

          </div>

          {/* Map & Quick Message Form Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-[16/9] w-full bg-slate-900 relative">
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

            {/* Quick Contact Inquiry Form */}
            <Card variant="glassmorphism" hover={false} className="p-4 sm:p-6 border-slate-800">
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Hızlı İletişim & Talep Formu
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Toplantı, kongre, grup rezervasyonu veya özel sorularınız için ekibimize anında mesaj iletin.
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-sm">
                    Mesajınız alındı! City One Hotel misafir ilişkileri ekibimiz en kısa sürede sizinle iletişime geçecektir.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90"
                    />
                    <input
                      type="tel"
                      placeholder="Telefon Numaranız"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="E-Posta Adresiniz"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90"
                  />
                  <textarea
                    rows={3}
                    placeholder="Mesajınız veya konaklama talebiniz..."
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
                    Mesajı Gönder
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
