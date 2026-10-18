import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { siteContent } from '../config/siteContent';
import { Button } from '../design-system/Button';
import { Card } from '../design-system/Card';
import { 
  X, 
  Calendar, 
  Users, 
  BedDouble, 
  CheckCircle2, 
  BadgePercent, 
  MessageCircle,
  FileText
} from 'lucide-react';
import { LogoEmblem } from './Logo';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

export const BookingModal = ({ isOpen, onClose, initialData = {} }) => {
  useBodyScrollLock(isOpen);

  const { bookingModal, roomsSection, hotel, floatingActions } = siteContent;

  // Initial State Setup - unconditionally called on every render
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [reservationCode, setReservationCode] = useState('');

  // Always reset step to 1 when modal is opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  // Find selected room
  const selectedRoom = useMemo(() => {
    return roomsSection.rooms.find(r => r.id === initialData.roomId) || roomsSection.rooms[0];
  }, [initialData.roomId, roomsSection.rooms]);

  // Calculate nights
  const nights = useMemo(() => {
    if (!initialData.checkIn || !initialData.checkOut) return 1;
    const start = new Date(initialData.checkIn);
    const end = new Date(initialData.checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  }, [initialData.checkIn, initialData.checkOut]);

  // Calculations
  const rawSubtotal = selectedRoom ? selectedRoom.pricePerNight * nights : 0;
  const directDiscount = Math.round(rawSubtotal * 0.10); // %10 direct discount
  const finalTotal = rawSubtotal - directDiscount;

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    
    // Generate simulated unique reservation code
    const randomCode = `C1-${Math.floor(100000 + Math.random() * 900000)}`;
    setReservationCode(randomCode);
    setStep(2);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setFormData({ fullName: '', phone: '', email: '', notes: '' });
    onClose();
  };

  const whatsappReservationUrl = useMemo(() => {
    if (!selectedRoom) return '#';
    const text = `Merhaba City One Hotel, ${reservationCode || 'Yeni'} kodlu rezervasyon talebim hakkında bilgi almak istiyorum.\nOda: ${selectedRoom.name}\nGiriş: ${initialData.checkIn}\nÇıkış: ${initialData.checkOut}\nMisafir: ${initialData.adults || 2} Yetişkin\nTutar: ${finalTotal.toLocaleString('tr-TR')} ₺`;
    return `https://wa.me/${hotel.whatsappRaw}?text=${encodeURIComponent(text)}`;
  }, [reservationCode, selectedRoom, initialData, finalTotal, hotel.whatsappRaw]);

  // Hook rules guarantee: return null ONLY AFTER all hooks are defined
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-hotel-900 border-t sm:border border-slate-700/80 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden h-[90dvh] sm:h-auto sm:max-h-[90vh] flex flex-col">
        
        {/* Mobile Pull Indicator */}
        <div className="w-10 h-1 rounded-full bg-slate-700/80 mx-auto mt-2 sm:hidden shrink-0" />

        {/* Header */}
        <div className="p-3.5 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-hotel-900/90 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <LogoEmblem size="sm" className="shrink-0" />
            <div className="min-w-0">
              <h3 className="font-serif text-base sm:text-xl font-bold text-white truncate">
                {step === 1 ? bookingModal.step1Title : bookingModal.step2Title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                {hotel.name} - {hotel.starLabel}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors shrink-0 ml-2 flex items-center justify-center"
            aria-label="Kapat"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div data-modal-scrollable className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 flex-1 min-h-0 overscroll-contain pb-28 sm:pb-6">
          
          {step === 1 ? (
            <form onSubmit={handleConfirm} className="space-y-6">
              
              {/* Selected Booking Summary Strip */}
              <div className="p-4 rounded-xl bg-hotel-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                    <BedDouble className="w-4 h-4 text-gold-400" />
                    <span>{selectedRoom.name}</span>
                  </div>
                  <span className="text-xs font-bold text-gold-400 px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/20">
                    {selectedRoom.formattedPrice} / {bookingModal.nightUnit}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>Giriş: {initialData.checkIn}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>Çıkış: {initialData.checkOut}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    <span>{initialData.adults || 2} Yetişkin {initialData.children ? `, ${initialData.children} Çocuk` : ''}</span>
                  </div>
                </div>
              </div>

              {/* Price Calculation Engine Breakdown */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-2 text-xs sm:text-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  {bookingModal.pricingBreakdown}
                </span>

                <div className="flex justify-between text-slate-300">
                  <span>{selectedRoom.name} ({nights} {bookingModal.nightUnit})</span>
                  <span>{rawSubtotal.toLocaleString('tr-TR')} ₺</span>
                </div>

                <div className="flex justify-between text-emerald-400">
                  <span className="flex items-center gap-1">
                    <BadgePercent className="w-3.5 h-3.5" /> Resmi Web Özel İndirimi (%10)
                  </span>
                  <span>- {directDiscount.toLocaleString('tr-TR')} ₺</span>
                </div>

                <div className="flex justify-between text-slate-400 text-xs">
                  <span>{bookingModal.taxes}</span>
                  <span>0 ₺</span>
                </div>

                <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
                  <div>
                    <span className="font-serif text-base sm:text-lg font-bold text-white block">
                      {bookingModal.totalPrice}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Kahvaltı & 1500 m² SPA Dahildir
                    </span>
                  </div>
                  <span className="font-serif text-2xl font-bold text-gold-400">
                    {finalTotal.toLocaleString('tr-TR')} ₺
                  </span>
                </div>
              </div>

              {/* Guest Form */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  {bookingModal.guestInfoLabel}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder={bookingModal.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90"
                  />
                  <input
                    type="tel"
                    required
                    placeholder={bookingModal.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90"
                  />
                </div>

                <input
                  type="email"
                  placeholder={bookingModal.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90"
                />

                <textarea
                  rows={2}
                  placeholder={bookingModal.notesPlaceholder}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full glass-input text-xs sm:text-sm text-white rounded-lg px-3.5 py-2.5 bg-hotel-900/90 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 pb-1 flex items-center justify-end gap-2.5 sm:gap-3">
                <Button
                  variant="dark"
                  size="md"
                  onClick={handleResetAndClose}
                  className="flex-1 sm:flex-none text-xs sm:text-sm py-2.5 sm:py-2"
                >
                  {bookingModal.cancelButton}
                </Button>
                <Button
                  type="submit"
                  variant="gold"
                  size="md"
                  icon={CheckCircle2}
                  iconPosition="right"
                  className="flex-1 sm:flex-none text-xs sm:text-sm py-2.5 sm:py-2 shadow-gold-glow/20"
                >
                  {bookingModal.confirmButton}
                </Button>
              </div>

            </form>
          ) : (
            
            /* Step 2: Instant Confirmation Simulation */
            <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
                  REZERVASYON TALEBİ BAŞARILI
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mb-2">
                  Sayın {formData.fullName}, Teşekkür Ederiz!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  {bookingModal.successMessage}
                </p>
              </div>

              {/* Code Box */}
              <div className="p-4 rounded-xl bg-hotel-900 border border-gold-500/40 max-w-xs mx-auto">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                  {bookingModal.reservationCodeLabel}
                </span>
                <span className="font-mono text-2xl font-bold text-gold-400 tracking-wider">
                  {reservationCode}
                </span>
              </div>

              {/* Detailed receipt */}
              <div className="text-xs text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-left max-w-md mx-auto space-y-1.5">
                <div className="flex justify-between">
                  <span>Otel:</span>
                  <span className="font-semibold text-white">{hotel.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Oda Tipi:</span>
                  <span className="font-semibold text-white">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tarihler:</span>
                  <span className="font-semibold text-white">{initialData.checkIn} - {initialData.checkOut} ({nights} Gece)</span>
                </div>
                <div className="flex justify-between">
                  <span>Misafir:</span>
                  <span className="font-semibold text-white">{formData.fullName} ({formData.phone})</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-800 font-bold text-gold-400 text-sm">
                  <span>Ödenecek Tutar:</span>
                  <span>{finalTotal.toLocaleString('tr-TR')} ₺</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  as="a"
                  href={whatsappReservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="md"
                  icon={MessageCircle}
                  iconPosition="left"
                  className="flex-1 w-full"
                >
                  WhatsApp ile Onay Al
                </Button>
                <Button
                  variant="dark"
                  size="md"
                  onClick={handleResetAndClose}
                  className="flex-1 w-full"
                >
                  {bookingModal.returnHomeButton}
                </Button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>,
    document.body
  );
};
