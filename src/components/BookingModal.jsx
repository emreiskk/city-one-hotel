import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../design-system/Button';
import { 
  X, 
  Calendar, 
  Users, 
  Check, 
  CheckCircle2, 
  ShieldCheck, 
  Printer, 
  MessageCircle, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown,
  RotateCcw,
  Lock,
  Info,
  ArrowRight
} from 'lucide-react';
import { LogoEmblem } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { RoomDetailModal } from './RoomDetailModal';

const formatDate = (date) => date.toISOString().split('T')[0];
const TODAY_ISO = formatDate(new Date());

const generatePnrCode = () => `C1-${Math.floor(100000 + Math.random() * 900000)}`;
const getNowFormatted = (lang = 'tr') => {
  const localeMap = { tr: 'tr-TR', en: 'en-US', de: 'de-DE', ru: 'ru-RU' };
  const locale = localeMap[lang] || 'tr-TR';
  const now = new Date();
  return `${now.toLocaleDateString(locale)} · ${now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}`;
};

const COUNTRY_CODES = [
  { code: '+90', country: 'TR', name: 'Türkiye', flag: '🇹🇷', format: '5XX XXX XX XX', maxDigits: 10 },
  { code: '+49', country: 'DE', name: 'Deutschland', flag: '🇩🇪', format: '1XX XXXXXXX', maxDigits: 11 },
  { code: '+7', country: 'RU', name: 'Россия', flag: '🇷🇺', format: '(XXX) XXX-XX-XX', maxDigits: 10 },
  { code: '+44', country: 'GB', name: 'United Kingdom', flag: '🇬🇧', format: '7XXX XXXXXX', maxDigits: 10 },
  { code: '+1', country: 'US', name: 'United States', flag: '🇺🇸', format: '(XXX) XXX-XXXX', maxDigits: 10 },
  { code: '+33', country: 'FR', name: 'France', flag: '🇫🇷', format: '6 XX XX XX XX', maxDigits: 9 },
  { code: '+31', country: 'NL', name: 'Nederland', flag: '🇳🇱', format: '6 XXXX XXXX', maxDigits: 9 },
  { code: '+971', country: 'AE', name: 'UAE', flag: '🇦🇪', format: '5X XXX XXXX', maxDigits: 9 },
  { code: '+966', country: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', format: '5X XXX XXXX', maxDigits: 9 },
  { code: '+7', country: 'KZ', name: 'Қазақстан', flag: '🇰🇿', format: '(XXX) XXX-XX-XX', maxDigits: 10 },
  { code: '+994', country: 'AZ', name: 'Azərbaycan', flag: '🇦🇿', format: 'XX XXX XX XX', maxDigits: 9 },
  { code: '+43', country: 'AT', name: 'Österreich', flag: '🇦🇹', format: '6XX XXXXXXX', maxDigits: 10 },
  { code: '+41', country: 'CH', name: 'Schweiz', flag: '🇨🇭', format: '7X XXX XX XX', maxDigits: 9 },
  { code: '+32', country: 'BE', name: 'Belgique', flag: '🇧🇪', format: '4XX XX XX XX', maxDigits: 9 },
  { code: '+974', country: 'QA', name: 'Qatar', flag: '🇶🇦', format: 'XXXX XXXX', maxDigits: 8 },
  { code: '+965', country: 'KW', name: 'Kuwait', flag: '🇰🇼', format: 'XXXX XXXX', maxDigits: 8 },
  { code: '+39', country: 'IT', name: 'Italia', flag: '🇮🇹', format: '3XX XXX XXXX', maxDigits: 10 },
  { code: '+34', country: 'ES', name: 'España', flag: '🇪🇸', format: '6XX XX XX XX', maxDigits: 9 }
];

const formatPhoneNumber = (digits, country) => {
  if (!digits) return '';
  const d = digits;
  
  if (country.country === 'TR') {
    if (d.length <= 3) return d;
    if (d.length <= 6) return `${d.slice(0, 3)} ${d.slice(3)}`;
    if (d.length <= 8) return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`;
    return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 8)} ${d.slice(8, 10)}`;
  }
  
  if (country.country === 'RU' || country.country === 'KZ') {
    if (d.length <= 3) return `(${d}`;
    if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    if (d.length <= 8) return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 8)}-${d.slice(8, 10)}`;
  }

  if (country.country === 'US') {
    if (d.length <= 3) return `(${d}`;
    if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 10)}`;
  }

  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)} ${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`;
  return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 9)} ${d.slice(9, 12)}`;
};

export const BookingModal = ({ isOpen, onClose, initialData = {}, onOpenLegal }) => {
  useBodyScrollLock(isOpen);

  const { content, language } = useLanguage();
  const { bookingModal, roomsSection, hotel, bookingBar } = content;
  const scrollContainerRef = useRef(null);

  const localeMap = { tr: 'tr-TR', en: 'en-US', de: 'de-DE', ru: 'ru-RU' };
  const activeLocale = localeMap[language] || 'tr-TR';

  // Active step: Always starts at Step 1 (Room Selection), pre-selecting any chosen room from homepage
  const [step, setStep] = useState(1);

  // Inspected room for detail modal preview
  const [inspectedRoom, setInspectedRoom] = useState(null);

  // Local stay parameters
  const [checkIn, setCheckIn] = useState(() => initialData.checkIn || TODAY_ISO);
  const [checkOut, setCheckOut] = useState(() => initialData.checkOut || TODAY_ISO);
  const [adults, setAdults] = useState(() => initialData.adults || 2);
  const [childrenCount, setChildrenCount] = useState(() => initialData.children || 0);

  // Selected room ID
  const [selectedRoomId, setSelectedRoomId] = useState(() => {
    if (initialData.roomId && roomsSection.rooms.some(r => r.id === initialData.roomId)) {
      return initialData.roomId;
    }
    return roomsSection.rooms[0]?.id || null;
  });

  // Guest details form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: '',
    termsAccepted: false,
    kvkkAccepted: false
  });

  // Phone country & local digits state (defaults to Turkey +90)
  const [phoneCountry, setPhoneCountry] = useState(COUNTRY_CODES[0]);
  const [phoneLocal, setPhoneLocal] = useState('');

  const handlePhoneChange = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (phoneCountry.country === 'TR' && val.startsWith('0')) {
      val = val.slice(1);
    }
    if (phoneCountry.country === 'TR' && val.startsWith('90') && val.length > 10) {
      val = val.slice(2);
    }
    const trimmed = val.slice(0, phoneCountry.maxDigits);
    const formatted = formatPhoneNumber(trimmed, phoneCountry);
    setPhoneLocal(formatted);
    setFormData(prev => ({
      ...prev,
      phone: formatted ? `${phoneCountry.code} ${formatted}` : ''
    }));
  };

  const handleCountryChange = (e) => {
    const found = COUNTRY_CODES.find(c => `${c.code}_${c.country}` === e.target.value) || COUNTRY_CODES[0];
    setPhoneCountry(found);
    const rawDigits = phoneLocal.replace(/\D/g, '').slice(0, found.maxDigits);
    const formatted = formatPhoneNumber(rawDigits, found);
    setPhoneLocal(formatted);
    setFormData(prev => ({
      ...prev,
      phone: formatted ? `${found.code} ${formatted}` : ''
    }));
  };

  const [formError, setFormError] = useState('');

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState('hotel'); // 'hotel' | 'card'
  const [cardData, setCardData] = useState({
    holder: '',
    number: '',
    expiry: '',
    cvv: ''
  });


  // Generated PNR tracking code & timestamp
  const [reservationCode, setReservationCode] = useState('');
  const [reservationDate, setReservationDate] = useState('');

  // ESC key listener
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Calculate nights stay duration
  const nights = useMemo(() => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [checkIn, checkOut]);

  // Find active room object
  const selectedRoom = useMemo(() => {
    return roomsSection.rooms.find(r => r.id === selectedRoomId) || roomsSection.rooms[0];
  }, [roomsSection.rooms, selectedRoomId]);

  // Pricing computations (10% Official Web direct booking privilege discount)
  const rawSubtotal = selectedRoom ? selectedRoom.pricePerNight * nights : 0;
  const directDiscount = Math.round(rawSubtotal * 0.10);
  const finalTotal = rawSubtotal - directDiscount;

  // Step transition with auto-scroll to top
  const handleSelectStep = (targetStep) => {
    setStep(targetStep);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Card formatting helpers
  const handleCardNumberChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = raw.replace(/(\d{4})/g, '$1 ').trim();
    setCardData(prev => ({ ...prev, number: formatted }));
  };

  const handleExpiryChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (raw.length >= 3) {
      setCardData(prev => ({ ...prev, expiry: `${raw.slice(0, 2)}/${raw.slice(2, 4)}` }));
    } else {
      setCardData(prev => ({ ...prev, expiry: raw }));
    }
  };

  // Step 2 Submission: Validate guest details and legal terms
  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setFormError(bookingModal.ui?.requiredFieldsError || 'Lütfen tüm zorunlu misafir alanlarını doldurunuz.');
      return;
    }
    if (!formData.termsAccepted || !formData.kvkkAccepted) {
      setFormError(bookingModal.termsRequiredNotice || 'Lütfen rezervasyona devam etmek için koşulları onaylayınız.');
      return;
    }
    setFormError('');
    handleSelectStep(3);
  };

  // Step 3 Submission: Complete and confirm booking
  const handleCompleteReservation = (e) => {
    e.preventDefault();
    const pnr = generatePnrCode();
    const formattedDate = getNowFormatted(language);
    
    setReservationCode(pnr);
    setReservationDate(formattedDate);
    handleSelectStep(4);
  };

  // Close and reset modal
  const handleResetAndClose = () => {
    setStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      notes: '',
      termsAccepted: false,
      kvkkAccepted: false
    });
    setPhoneCountry(COUNTRY_CODES[0]);
    setPhoneLocal('');
    setFormError('');
    onClose();
  };

  // WhatsApp concierge integration URL with clean pre-formatted message
  const whatsappReservationUrl = useMemo(() => {
    if (!selectedRoom) return '#';
    const text = `${bookingModal.ui?.whatsappConfirmationTitle || '*City One Hotel Kayseri - Rezervasyon Teyidi*'}\n` +
      `${bookingModal.ui?.whatsappPnr || 'PNR No:'} *${reservationCode || 'Yeni'}*\n` +
      `${bookingModal.ui?.whatsappRoom || 'Oda:'} ${selectedRoom.name}\n` +
      `${bookingModal.ui?.whatsappDate || 'Tarih:'} ${checkIn} / ${checkOut} (${nights} ${bookingModal.nightUnit || 'gece'})\n` +
      `${bookingModal.ui?.whatsappGuest || 'Misafir:'} ${formData.firstName} ${formData.lastName} (${adults} ${bookingBar.labels?.adults || 'Yetişkin'}${childrenCount ? `, ${childrenCount} ${bookingBar.labels?.children || 'Çocuk'}` : ''})\n` +
      `${bookingModal.ui?.whatsappPhone || 'Telefon:'} ${formData.phone}\n` +
      `${bookingModal.ui?.whatsappPayment || 'Ödeme Tercihi:'} ${paymentMethod === 'hotel' ? (bookingModal.ui?.docPayAtHotel || 'Otelde Tahsil Edilecek (Kart Garantili)') : (bookingModal.ui?.docOnlinePaid || 'Online Kredi Kartı Onaylandı')}\n` +
      `${bookingModal.ui?.whatsappTotal || 'Toplam Tutar:'} *${finalTotal.toLocaleString(activeLocale)} ₺*\n` +
      `${bookingModal.ui?.whatsappConfirmRequest || 'Rezervasyonumu teyit etmek istiyorum.'}`;
    return `https://wa.me/${hotel.whatsappRaw}?text=${encodeURIComponent(text)}`;
  }, [selectedRoom, bookingModal, reservationCode, checkIn, checkOut, nights, formData, adults, childrenCount, bookingBar.labels, paymentMethod, finalTotal, activeLocale, hotel.whatsappRaw]);

  // Hook rules guarantee: return null ONLY AFTER all hooks are defined
  if (!isOpen) return null;

  return createPortal(
    <div
      ref={scrollContainerRef}
      data-modal-scrollable
      className="fixed inset-0 z-[150] bg-hotel-950 text-slate-100 overflow-y-auto min-h-screen flex flex-col selection:bg-gold-500/30 selection:text-gold-200"
      role="dialog"
      aria-modal="true"
      aria-label={bookingModal.step1Title || 'Online Rezervasyon Motoru'}
    >
      {/* Top Navigation Header - 100% Identical Structure to Navbar.jsx, LegalModal.jsx & GalleryModal.jsx */}
      <header className="sticky top-0 z-40 bg-hotel-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-2.5 sm:py-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full box-border">
          <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
            
            {/* Left: Brand Identity & Portal Context */}
            <div className="flex items-center gap-2 sm:gap-3 select-none py-0.5 min-w-0">
              <LogoEmblem size="sm" className="shrink-0" />
              <div className="flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="font-serif font-bold text-sm xs:text-base sm:text-xl text-white tracking-wide truncate">
                    City One Hotel
                  </span>
                  <span className="inline-block text-gold-400 font-sans text-[8px] sm:text-[10px] tracking-wider font-semibold uppercase px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/25 shrink-0">
                    Kayseri
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium tracking-tight whitespace-nowrap truncate">
                  {bookingModal.step1Title || 'Online Rezervasyon Motoru'}
                </span>
              </div>
            </div>

            {/* Right: Actions (Language Switcher, Close Button) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <LanguageSwitcher variant="dropdown" direction="down" />

              <span className="h-5 w-[1px] bg-slate-800 hidden sm:block" />

              {/* Clean Close Icon (Identical to LegalModal & GalleryModal) */}
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 border border-transparent hover:border-slate-700/60 transition-colors flex items-center justify-center cursor-pointer shrink-0 active:scale-95"
                aria-label={bookingModal.cancelButton || 'Kapat'}
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full py-6 sm:py-8 lg:py-10">
        
        {/* Step Progress Tracker Bar - 100% Localized */}
        <div className="mb-8 sm:mb-10 border-b border-slate-800/80 pb-6 sm:pb-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { num: '01', key: 1, title: bookingModal.steps?.room || 'Oda Seçimi', subtitle: bookingModal.stepsSubtitles?.room || 'Oda & Tarih' },
              { num: '02', key: 2, title: bookingModal.steps?.guest || 'Misafir & Koşullar', subtitle: bookingModal.stepsSubtitles?.guest || 'İletişim & Yasal Onay' },
              { num: '03', key: 3, title: bookingModal.steps?.payment || 'Güvenli Ödeme', subtitle: bookingModal.stepsSubtitles?.payment || 'Kart & Güvenli Ödeme' },
              { num: '04', key: 4, title: bookingModal.steps?.confirmation || 'Onay & Fatura', subtitle: bookingModal.stepsSubtitles?.confirmation || 'Resmi PNR Belgesi' },
            ].map((item) => {
              const isActive = step === item.key;
              const isPassed = step > item.key;
              const isClickable = isPassed && step < 4;

              return (
                <div
                  key={item.key}
                  onClick={() => isClickable && handleSelectStep(item.key)}
                  className={`group relative flex flex-col transition-all ${
                    isClickable ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  {/* Top Progress Line Indicator */}
                  <div className="w-full h-1 rounded-full mb-3 overflow-hidden bg-slate-800/70">
                    <div
                      className={`h-full transition-all duration-300 rounded-full ${
                        isActive
                          ? 'bg-gold-400 w-full'
                          : isPassed
                          ? 'bg-emerald-500 w-full'
                          : 'bg-transparent w-0'
                      }`}
                    />
                  </div>

                  {/* Step Header: Number & Title */}
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`font-mono text-xs font-bold tracking-wider ${
                        isActive
                          ? 'text-gold-400'
                          : isPassed
                          ? 'text-emerald-400 flex items-center gap-1'
                          : 'text-slate-600'
                      }`}
                    >
                      {isPassed ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{item.num}</span>
                        </>
                      ) : (
                        item.num
                      )}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold tracking-wide truncate transition-colors ${
                        isActive
                          ? 'text-white'
                          : isPassed
                          ? 'text-slate-200 group-hover:text-white'
                          : 'text-slate-500'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Step Subtitle */}
                  <span
                    className={`text-[11px] truncate hidden sm:block ${
                      isActive
                        ? 'text-slate-400'
                        : isPassed
                        ? 'text-slate-500 group-hover:text-slate-400'
                        : 'text-slate-600'
                    }`}
                  >
                    {item.subtitle}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Split Grid: Steps on Left, Sticky Folio / Fatura on Right (Both Aligned at Top) */}
        <div className={step === 4 ? "w-full max-w-3xl mx-auto" : "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"}>
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: ACTIVE STEP WORK AREA                           */}
          {/* ============================================================ */}
          <div className={step === 4 ? "w-full space-y-6" : "lg:col-span-7 xl:col-span-8 space-y-6"}>
            
            {/* ------------------------------------------------------------ */}
            {/* STEP 1: ODA VE TARİH SEÇİMİ                                   */}
            {/* ------------------------------------------------------------ */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                
                {/* Header & Date Parameters Bar */}
                <div>
                  <div className="mb-4">
                    <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                      {bookingModal.steps?.room || 'Konaklama Odanızı Seçin'}
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {roomsSection.pricingNote}
                    </p>
                  </div>

                  {/* Stay Dates & Guests Quick Adjuster */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#090F1C]/95 border border-slate-800 shadow-xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5 sm:gap-4 text-xs">
                    
                    {/* Check-In */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="text-[11px] sm:text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
                        <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="truncate">{bookingBar.labels?.checkIn || 'Giriş Tarihi'}</span>
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="date"
                          value={checkIn}
                          min={TODAY_ISO}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full h-10 sm:h-11 glass-input text-white text-xs sm:text-sm rounded-xl pl-3 pr-9 bg-hotel-900/90 cursor-pointer focus:ring-1 focus:ring-gold-500/50 border border-slate-800"
                          required
                        />
                        <Calendar className="w-4 h-4 text-gold-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Check-Out */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="text-[11px] sm:text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
                        <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="truncate">{bookingBar.labels?.checkOut || 'Çıkış Tarihi'}</span>
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="date"
                          value={checkOut}
                          min={checkIn}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full h-10 sm:h-11 glass-input text-white text-xs sm:text-sm rounded-xl pl-3 pr-9 bg-hotel-900/90 cursor-pointer focus:ring-1 focus:ring-gold-500/50 border border-slate-800"
                          required
                        />
                        <Calendar className="w-4 h-4 text-gold-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Adults */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="text-[11px] sm:text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
                        <Users className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="truncate">{bookingBar.labels?.adults || 'Yetişkin'}</span>
                      </label>
                      <div className="relative flex items-center">
                        <select
                          value={adults}
                          onChange={(e) => setAdults(Number(e.target.value))}
                          className="w-full h-10 sm:h-11 appearance-none glass-input text-white text-xs sm:text-sm rounded-xl pl-3 pr-8 bg-hotel-900/90 cursor-pointer focus:ring-1 focus:ring-gold-500/50 border border-slate-800"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num} className="bg-hotel-950 text-white">
                              {num} {bookingBar.labels?.adults || 'Yetişkin'}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-gold-400 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Children */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="text-[11px] sm:text-xs font-semibold text-slate-300 flex items-center gap-1.5 h-5">
                        <Users className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="truncate">{bookingBar.labels?.children || 'Çocuk (0-12)'}</span>
                      </label>
                      <div className="relative flex items-center">
                        <select
                          value={childrenCount}
                          onChange={(e) => setChildrenCount(Number(e.target.value))}
                          className="w-full h-10 sm:h-11 appearance-none glass-input text-white text-xs sm:text-sm rounded-xl pl-3 pr-8 bg-hotel-900/90 cursor-pointer focus:ring-1 focus:ring-gold-500/50 border border-slate-800"
                        >
                          {[0, 1, 2, 3].map((num) => (
                            <option key={num} value={num} className="bg-hotel-950 text-white">
                              {num} {bookingBar.labels?.children || 'Çocuk'}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-gold-400 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Available Rooms Grid */}
                <div className="space-y-4">
                  {roomsSection.rooms.map((room) => {
                    const isSelected = room.id === selectedRoomId;
                    const roomTotal = Math.round((room.pricePerNight * nights) * 0.90);

                    return (
                      <div
                        key={room.id}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                          isSelected 
                            ? 'bg-hotel-900/95 border-gold-500/70 shadow-2xl ring-1 ring-gold-500/30' 
                            : 'bg-hotel-900/40 border-slate-800/80 hover:border-slate-700/80'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                          
                          {/* Room Thumbnail with Clickable Inspection */}
                          <div 
                            onClick={() => setInspectedRoom(room)}
                            className="relative w-full sm:w-44 lg:w-48 sm:h-32 rounded-xl overflow-hidden shrink-0 bg-slate-900 cursor-pointer group"
                          >
                            <img
                              src={room.image}
                              alt={room.name}
                              className="w-full h-44 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            {/* Info / Inspection Overlay Hint */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-white">
                              <Info className="w-4 h-4 text-gold-400" />
                              <span className="font-medium text-[11px]">{bookingModal.ui?.viewPhotos || 'Fotoğrafları Gör'}</span>
                            </div>
                            {isSelected && (
                              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-gold-500 text-hotel-950 uppercase tracking-wider shadow">
                                {bookingModal.folio?.selectedRoomLabel || 'Seçili Oda'}
                              </div>
                            )}
                          </div>

                          {/* Room Details */}
                          <div className="flex-1 min-w-0 space-y-1">
                            <div>
                              <span className="text-[10px] font-semibold text-gold-400 tracking-wider uppercase block truncate">
                                {room.categoryLabel}
                              </span>
                            </div>

                            {room.tag && (
                              <p className="text-[11px] sm:text-xs text-slate-400 font-light tracking-wide truncate -mt-0.5">
                                {room.tag}
                              </p>
                            )}

                            <h3 className="font-serif text-base sm:text-lg font-bold text-white truncate">
                              {room.name}
                            </h3>

                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              {room.shortDesc}
                            </p>
                          </div>

                          {/* Pricing & Actions */}
                          <div className="w-full sm:w-auto shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2.5 sm:gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-800/70 sm:min-w-[180px] lg:min-w-[200px]">
                            <div className="text-left sm:text-right">
                              <span className="text-[11px] text-slate-400 block whitespace-nowrap">
                                {nights} {bookingModal.nightUnit || 'gece'} {bookingModal.ui?.forNights || 'için:'}
                              </span>
                              <span className="font-serif text-xl sm:text-2xl font-bold text-gold-400 block whitespace-nowrap">
                                {roomTotal.toLocaleString(activeLocale)} ₺
                              </span>
                              <span className="text-[11px] text-slate-500 line-through block whitespace-nowrap">
                                {(room.pricePerNight * nights).toLocaleString(activeLocale)} ₺
                              </span>
                            </div>

                            {/* Action Buttons: Info (Details) + Selection */}
                            <div className="flex items-center gap-2 shrink-0">
                              <Button
                                type="button"
                                variant="dark"
                                size="sm"
                                icon={Info}
                                onClick={() => setInspectedRoom(room)}
                                aria-label={roomsSection.ui?.inspectDetails || 'Detayları İncele'}
                                className="w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] !p-0 flex items-center justify-center cursor-pointer border border-slate-800 hover:border-slate-700 shrink-0"
                              />

                              {isSelected ? (
                                <Button
                                  type="button"
                                  variant="gold"
                                  size="md"
                                  icon={ArrowRight}
                                  iconPosition="right"
                                  onClick={() => handleSelectStep(2)}
                                  className="px-4 sm:px-5 py-2.5 text-xs font-semibold shadow-md cursor-pointer whitespace-nowrap shrink-0"
                                >
                                  {bookingModal.folio?.continueReservation || 'Devam Et'}
                                </Button>
                              ) : (
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="md"
                                  onClick={() => setSelectedRoomId(room.id)}
                                  className="px-4 sm:px-5 py-2.5 text-xs font-medium cursor-pointer hover:border-gold-500/70 hover:text-white whitespace-nowrap shrink-0"
                                >
                                  {bookingModal.folio?.selectRoomCta || 'Bu Odayı Seç'}
                                </Button>
                              )}
                            </div>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            )}

            {/* ------------------------------------------------------------ */}
            {/* STEP 2: MİSAFİR BİLGİLERİ & YASAL KOŞULLAR                   */}
            {/* ------------------------------------------------------------ */}
            {step === 2 && (
              <form onSubmit={handleProceedToPayment} className="space-y-6 animate-in fade-in duration-300">
                
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white mb-2">
                    {bookingModal.guestInfoLabel || 'Misafir İletişim Bilgileri'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {bookingModal.ui?.guestSubtitle || 'Rezervasyon teyidi ve resepsiyon giriş işlemleriniz için lütfen bilgilerinizi eksiksiz giriniz.'}
                  </p>
                </div>

                {/* Error Banner if any */}
                {formError && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                    {formError}
                  </div>
                )}

                {/* Form Inputs Grid */}
                <div className="p-6 rounded-2xl bg-hotel-900/60 border border-slate-800 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* First Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        {bookingModal.firstName || 'Adınız'} <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        placeholder={bookingModal.ui?.firstNamePlaceholder || 'Örn: Ahmet'}
                        className="w-full glass-input text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 bg-hotel-950 border border-slate-800"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        {bookingModal.lastName || 'Soyadınız'} <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        placeholder={bookingModal.ui?.lastNamePlaceholder || 'Örn: Yılmaz'}
                        className="w-full glass-input text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 bg-hotel-950 border border-slate-800"
                      />
                    </div>

                    {/* Phone with International Country Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        {bookingModal.phone || 'Telefon Numarası'} <span className="text-gold-400">*</span>
                      </label>
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        {/* Country Code Select Dropdown - Flag Left, Code Center, Chevron Right */}
                        <div className="relative shrink-0 w-[100px] sm:w-[108px] group">
                          {/* Visible Custom UI: Flag on left, Code in center, Chevron on right */}
                          <div className="w-full h-10 sm:h-11 px-2.5 sm:px-3 rounded-xl bg-hotel-950 border border-slate-800 text-white flex items-center justify-between pointer-events-none transition-all group-hover:border-slate-700 group-focus-within:border-gold-500/70 group-focus-within:ring-1 group-focus-within:ring-gold-500/40">
                            <span className="text-base leading-none shrink-0 select-none">{phoneCountry.flag}</span>
                            <span className="font-mono font-semibold text-slate-100 text-xs sm:text-[13px] tracking-tight">{phoneCountry.code}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform group-hover:text-gold-400" />
                          </div>

                          {/* Full Overlay Native Select for Seamless Selection & Accessibility */}
                          <select
                            value={`${phoneCountry.code}_${phoneCountry.country}`}
                            onChange={handleCountryChange}
                            aria-label="Country Code"
                            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                          >
                            {COUNTRY_CODES.map((item) => (
                              <option key={`${item.code}_${item.country}`} value={`${item.code}_${item.country}`} className="bg-hotel-950 text-white">
                                {item.flag} {item.code} ({item.name})
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Phone Input with Dynamic Formatting - Standalone Box */}
                        <div className="relative flex-1">
                          <input
                            type="tel"
                            required
                            value={phoneLocal}
                            onChange={handlePhoneChange}
                            placeholder={phoneCountry.format}
                            className="w-full h-10 sm:h-11 glass-input text-xs sm:text-sm text-white rounded-xl px-3.5 bg-hotel-950 border border-slate-800 font-mono tracking-wide focus:border-gold-500/70 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        {bookingModal.email || 'E-Posta Adresi'} <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder={bookingModal.emailPlaceholder || 'ahmet@example.com'}
                        className="w-full glass-input text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 bg-hotel-950 border border-slate-800"
                      />
                    </div>

                  </div>

                  {/* Special Requests / Notes */}
                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      {bookingModal.notes || 'Özel İstekler & Notlar'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder={bookingModal.notesPlaceholder}
                      className="w-full glass-input text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 bg-hotel-950 border border-slate-800 resize-none"
                    />
                    <span className="text-[11px] text-slate-500 block">
                      {bookingModal.ui?.specialRequestsNote || '* Özel istekleriniz otel müsaitliğine bağlı olarak resepsiyon tarafından memnuniyetle karşılanacaktır.'}
                    </span>
                  </div>
                </div>

                {/* Terms and KVKK Checkboxes */}
                <div className="p-5 rounded-2xl bg-hotel-900/60 border border-slate-800 space-y-3.5">
                  
                  {/* Terms Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(e) => setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))}
                      style={{ accentColor: '#BF8431' }}
                      className="mt-0.5 w-4 h-4 rounded border-slate-700 bg-hotel-950 accent-gold-500 cursor-pointer shrink-0"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                      {bookingModal.termsLabel || 'Rezervasyon ve Ücretsiz İptal Koşullarını okudum, kabul ediyorum.'}
                      <span className="block text-[11px] text-slate-500 mt-0.5">
                        {bookingModal.ui?.cancellationSubtext || 'Giriş gününe 24 saat kalaya kadar ücretsiz iptal hakkınız bulunmaktadır.'}
                      </span>
                    </span>
                  </label>

                  {/* KVKK Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.kvkkAccepted}
                      onChange={(e) => setFormData(prev => ({ ...prev, kvkkAccepted: e.target.checked }))}
                      style={{ accentColor: '#BF8431' }}
                      className="mt-0.5 w-4 h-4 rounded border-slate-700 bg-hotel-950 accent-gold-500 cursor-pointer shrink-0"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                      {bookingModal.kvkkLabel || '6698 Sayılı KVKK Aydınlatma Metnini okudum, kişisel verilerimin işlenmesini onaylıyorum.'}
                      {onOpenLegal && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onOpenLegal('aydinlatma');
                          }}
                          className="ml-1 text-gold-400 hover:underline text-[11px] cursor-pointer"
                        >
                          {bookingModal.ui?.inspectLegalText || '(Metni İncele)'}
                        </button>
                      )}
                    </span>
                  </label>

                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <Button
                    type="button"
                    variant="dark"
                    size="md"
                    icon={ChevronLeft}
                    iconPosition="left"
                    onClick={() => handleSelectStep(1)}
                    className="text-xs sm:text-sm px-5 py-2.5"
                  >
                    {bookingModal.ui?.backToRooms || bookingModal.buttons?.back || 'Oda Seçimine Dön'}
                  </Button>

                  <Button
                    type="submit"
                    variant="gold"
                    size="md"
                    icon={ChevronRight}
                    iconPosition="right"
                    className="text-xs sm:text-sm px-7 py-2.5 font-semibold"
                  >
                    {bookingModal.buttons?.continueToPayment || 'Ödeme Adımına İlerle'}
                  </Button>
                </div>

              </form>
            )}

            {/* ------------------------------------------------------------ */}
            {/* STEP 3: GÜVENLİ ÖDEME SEÇENEKLERİ                             */}
            {/* ------------------------------------------------------------ */}
            {step === 3 && (
              <form onSubmit={handleCompleteReservation} className="space-y-6 animate-in fade-in duration-300">
                
                <div>
                  <h2 className="font-serif text-2xl font-bold text-white mb-2">
                    {bookingModal.payment?.title || 'Ödeme Tercihi'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {bookingModal.payment?.subtitle || 'Güvenli 256-bit SSL şifreleme altyapısıyla korunmaktadır.'}
                  </p>
                </div>

                {/* Payment Method Selector Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Option 1: Pay at Hotel (Card Guarantee) */}
                  <div
                    onClick={() => setPaymentMethod('hotel')}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'hotel'
                        ? 'bg-hotel-900/95 border-gold-500/70 shadow-lg'
                        : 'bg-hotel-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-white">
                        {bookingModal.payment?.payAtHotelTitle || 'Otelde Ödeme'}
                      </span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === 'hotel' ? 'border-gold-400 bg-gold-500' : 'border-slate-700'
                      }`}>
                        {paymentMethod === 'hotel' && <span className="w-1.5 h-1.5 rounded-full bg-hotel-950" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {bookingModal.payment?.payAtHotelDesc || 'Rezervasyon anında kartınızdan çekim yapılmaz. Odayı adınıza bloke etmek için kart bilgileri alınır, ödeme otele varışta gerçekleştirilir.'}
                    </p>
                  </div>

                  {/* Option 2: Online 3D Secure Card */}
                  <div
                    onClick={() => setPaymentMethod('card')}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-hotel-900/95 border-gold-500/70 shadow-lg'
                        : 'bg-hotel-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm text-white">
                        {bookingModal.payment?.payOnlineTitle || 'Güvenli Online Ödeme'}
                      </span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === 'card' ? 'border-gold-400 bg-gold-500' : 'border-slate-700'
                      }`}>
                        {paymentMethod === 'card' && <span className="w-1.5 h-1.5 rounded-full bg-hotel-950" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {bookingModal.payment?.payOnlineDesc || 'Banka 3D Secure onay sayfası ile güvenli, anında doğrudan tahsilat.'}
                    </p>
                  </div>

                </div>

                {/* Credit Card Inputs Area */}
                <div className="p-6 rounded-2xl bg-hotel-900/70 border border-slate-800 space-y-4">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                    <span className="font-semibold text-slate-300">
                      {paymentMethod === 'hotel' ? (bookingModal.ui?.hotelGuaranteeCard || 'Kart Bilgileri') : (bookingModal.ui?.creditCardInfo || 'Kart Bilgileri')}
                    </span>
                    <span className="text-slate-500 text-[11px] flex items-center gap-1">
                      <Lock className="w-3 h-3 text-slate-400" /> 256-Bit SSL
                    </span>
                  </div>

                  {/* Cardholder Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      {bookingModal.payment?.cardHolder || 'Kart Üzerindeki İsim'}
                    </label>
                    <input
                      type="text"
                      required
                      value={cardData.holder}
                      onChange={(e) => setCardData(prev => ({ ...prev, holder: e.target.value.toUpperCase() }))}
                      placeholder={bookingModal.payment?.cardHolderPlaceholder || 'AD SOYAD'}
                      className="w-full glass-input text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 bg-hotel-950 border border-slate-800 font-mono tracking-wider"
                    />
                  </div>

                  {/* Card Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      {bookingModal.payment?.cardNumber || 'Kart Numarası'}
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={19}
                      value={cardData.number}
                      onChange={handleCardNumberChange}
                      placeholder="0000 0000 0000 0000"
                      className="w-full glass-input text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 bg-hotel-950 border border-slate-800 font-mono tracking-widest"
                    />
                  </div>

                  {/* Expiry & CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        {bookingModal.payment?.cardExpiry || 'Son Kullanma'}
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={5}
                        value={cardData.expiry}
                        onChange={handleExpiryChange}
                        placeholder="AA/YY"
                        className="w-full glass-input text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 bg-hotel-950 border border-slate-800 font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 block">
                        {bookingModal.payment?.cardCvv || 'CVV / CVC'}
                      </label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        value={cardData.cvv}
                        onChange={(e) => setCardData(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '') }))}
                        placeholder="•••"
                        className="w-full glass-input text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 bg-hotel-950 border border-slate-800 font-mono"
                      />
                    </div>
                  </div>

                </div>

                {/* Reassurance Badge */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{bookingModal.payment?.securityBadge || '256-Bit SSL Uçtan Uca Şifreleme & 3D Secure Güvencesi'}</span>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <Button
                    type="button"
                    variant="dark"
                    size="md"
                    icon={ChevronLeft}
                    iconPosition="left"
                    onClick={() => handleSelectStep(2)}
                    className="text-xs sm:text-sm px-5 py-2.5"
                  >
                    {bookingModal.ui?.backToGuests || bookingModal.buttons?.back || 'Misafir Bilgilerine Dön'}
                  </Button>

                  <Button
                    type="submit"
                    variant="gold"
                    size="md"
                    icon={CheckCircle2}
                    iconPosition="right"
                    className="text-xs sm:text-sm px-7 py-2.5 font-semibold"
                  >
                    {bookingModal.buttons?.completeReservation || 'Rezervasyonu Tamamla & Onayla'}
                  </Button>
                </div>

              </form>
            )}

            {/* ------------------------------------------------------------ */}
            {/* STEP 4: REZERVASYON ONAYI & PROFORMA FATURA                   */}
            {/* ------------------------------------------------------------ */}
            {step === 4 && (
              <div className="space-y-6 animate-in fade-in duration-300 py-4">
                
                {/* Header Confirmation Notice */}
                <div className="text-center space-y-2 pb-2">
                  <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase block">
                    {bookingModal.step2Title || 'Rezervasyon Talebiniz Onaylandı!'}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {bookingModal.ui?.thankYou || 'Teşekkür Ederiz, Sayın'} {formData.firstName} {formData.lastName}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
                    {bookingModal.successMessage}
                  </p>
                </div>

                {/* Official Proforma Invoice & Voucher Card */}
                <div className="rounded-2xl bg-[#090F1C] border border-slate-800 shadow-2xl overflow-hidden text-xs text-slate-300">
                  
                  {/* Top Gold Border Accent */}
                  <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-600" />

                  {/* Invoice Header */}
                  <div className="p-5 sm:p-6 border-b border-slate-800/80 bg-hotel-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <LogoEmblem size="sm" className="shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-bold text-base text-white">{hotel.name}</span>
                          <span className="text-[10px] text-gold-400 font-semibold px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/25">
                            {hotel.starLabel}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          {bookingModal.ui?.docVoucherTitle || 'Rezervasyon Onay Belgesi & Proforma Fatura'}
                        </span>
                      </div>
                    </div>

                    {/* PNR Code & Status */}
                    <div className="sm:text-right w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                        {bookingModal.reservationCodeLabel || 'Rezervasyon Takip Kodu (PNR)'}
                      </span>
                      <span className="font-mono text-xl sm:text-2xl font-bold text-gold-400 tracking-wider block">
                        {reservationCode}
                      </span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">
                        {bookingModal.ui?.registrationDate || 'Kayıt Tarihi'}: {reservationDate}
                      </span>
                    </div>
                  </div>

                  {/* Invoice Details Grid */}
                  <div className="p-5 sm:p-6 space-y-4">
                    
                    {/* Guest & Stay Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-800/60 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block mb-1">
                          {bookingModal.folio?.guestDetails || 'Misafir Bilgileri'}
                        </span>
                        <div className="text-white font-semibold text-sm">
                          {formData.firstName} {formData.lastName}
                        </div>
                        <div className="text-slate-400 text-xs mt-0.5">
                          {formData.phone} {formData.email ? `· ${formData.email}` : ''}
                        </div>
                      </div>

                      <div className="sm:text-right">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block mb-1">
                          {bookingModal.folio?.stayDetails || 'Konaklama Detayları'}
                        </span>
                        <div className="text-white font-semibold text-sm">
                          {selectedRoom.name}
                        </div>
                        <div className="text-slate-400 text-xs mt-0.5">
                          {checkIn} – {checkOut} ({nights} {bookingModal.nightUnit || 'gece'} · {adults} {bookingBar.labels?.adults || 'Yetişkin'}{childrenCount ? `, ${childrenCount} ${bookingBar.labels?.children || 'Çocuk'}` : ''})
                        </div>
                      </div>
                    </div>

                    {/* Breakdown Table */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                        {bookingModal.pricingBreakdown || 'Fatura & Fiyat Dağılımı'}
                      </span>

                      <div className="p-3.5 rounded-xl bg-hotel-950/70 border border-slate-800/80 space-y-2 text-xs">
                        <div className="flex justify-between text-slate-300">
                          <span>{nights} {bookingModal.ui?.roomNightFee || 'Gece Oda Ücreti'} ({nights} × {selectedRoom.pricePerNight.toLocaleString(activeLocale)} ₺)</span>
                          <span className="font-mono text-white">{rawSubtotal.toLocaleString(activeLocale)} ₺</span>
                        </div>
                        <div className="flex justify-between text-emerald-400">
                          <span>{bookingModal.folio?.directDiscount || 'Resmi Web Doğrudan İndirimi (%10)'}</span>
                          <span className="font-mono">- {directDiscount.toLocaleString(activeLocale)} ₺</span>
                        </div>
                        <div className="flex justify-between text-slate-400 text-[11px]">
                          <span>{bookingModal.folio?.includedBreakfast || 'Açık Büfe Kahvaltı'} & {bookingModal.folio?.includedSpa || '1500 m² Termal SPA'}</span>
                          <span className="text-slate-300 font-medium">{bookingModal.folio?.includedFree || 'Dahil'}</span>
                        </div>

                        {/* Total Row */}
                        <div className="pt-3 mt-2 border-t border-slate-800 flex items-baseline justify-between">
                          <div>
                            <span className="font-serif font-bold text-sm text-white block">
                              {bookingModal.totalPrice || 'Net Fatura Tutarı'}
                            </span>
                            <span className="text-[10px] text-slate-400 block mt-0.5">
                              {paymentMethod === 'hotel' 
                                ? (bookingModal.ui?.docPayAtHotel || 'Otelde Tahsil Edilecek (Kart Garantili)') 
                                : (bookingModal.ui?.docOnlinePaid || 'Online Kredi Kartı Onaylandı')}
                            </span>
                          </div>
                          <span className="font-serif text-2xl font-bold text-gold-400">
                            {finalTotal.toLocaleString(activeLocale)} ₺
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Special Requests if any */}
                    {formData.notes && (
                      <div className="p-3 rounded-xl bg-hotel-950/40 border border-slate-800/60 text-xs">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block mb-0.5">
                          {bookingModal.ui?.docSpecialRequests || 'Özel İstekler'}
                        </span>
                        <p className="text-slate-300 italic">{formData.notes}</p>
                      </div>
                    )}

                    {/* Reception Guidance */}
                    <div className="pt-1 text-center text-[11px] text-slate-400 font-light">
                      {bookingModal.ui?.checkInNotice || 'Otele varışınızda resepsiyon deskine bu PNR kodunu göstermeniz yeterlidir. Giriş saati: 14:00.'}
                    </div>

                  </div>

                </div>

                {/* Action CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    as="a"
                    href={whatsappReservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="whatsapp"
                    size="md"
                    icon={MessageCircle}
                    iconPosition="left"
                    className="w-full sm:w-auto text-xs px-6 py-2.5 font-semibold"
                  >
                    {bookingModal.whatsappConfirmButton || 'Resepsiyona WhatsApp ile İlet'}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    icon={Printer}
                    iconPosition="left"
                    onClick={() => window.print()}
                    className="w-full sm:w-auto text-xs px-5 py-2.5"
                  >
                    {bookingModal.printButton || 'Faturayı / Belgeyi Yazdır'}
                  </Button>

                  <Button
                    type="button"
                    variant="dark"
                    size="md"
                    onClick={handleResetAndClose}
                    className="w-full sm:w-auto text-xs px-5 py-2.5"
                  >
                    {bookingModal.returnHomeButton || 'Ana Sayfaya Dön'}
                  </Button>
                </div>

              </div>
            )}

          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: STICKY PROFORMA FATURA & REZERVASYON ÖZETİ      */}
          {/* ============================================================ */}
          {step < 4 && (
            <aside className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28 space-y-4">
              
              <div className="p-5 xl:p-6 rounded-2xl bg-[#090F1C] border border-slate-800 space-y-4 shadow-2xl">
              
              {/* Folio Header */}
              <div className="pb-3 border-b border-slate-800">
                <span className="text-[10px] font-semibold text-gold-400 tracking-wider uppercase block mb-0.5">
                  {bookingModal.folio?.title || 'Rezervasyon Özeti & Proforma Fatura'}
                </span>
                <h3 className="font-serif text-base font-bold text-white">
                  {hotel.name}
                </h3>
                <p className="text-[11px] text-slate-400">
                  {bookingModal.folio?.hotelSub || 'Kayseri · 4 Yıldızlı Lüks Konaklama'}
                </p>
              </div>

              {/* Selected Room Preview */}
              <div className="p-3.5 rounded-xl bg-hotel-900/80 border border-slate-800 space-y-2.5">
                <div className="flex gap-3 items-center">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-16 h-14 rounded-lg object-cover shrink-0 bg-slate-900"
                  />
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <span className="text-[10px] text-gold-400 font-semibold uppercase block truncate">
                      {selectedRoom.categoryLabel}
                    </span>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-white truncate">
                      {selectedRoom.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 block truncate">
                      {selectedRoom.size} · {selectedRoom.capacity}
                    </span>
                  </div>
                </div>

                {/* Option to change room during step 2 or 3 */}
                {step > 1 && step < 4 && (
                  <button
                    type="button"
                    onClick={() => handleSelectStep(1)}
                    className="w-full pt-2 border-t border-slate-800/80 text-[11px] text-gold-400 hover:text-gold-300 font-medium flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{bookingModal.folio?.changeRoom || 'Odayı Değiştir'}</span>
                  </button>
                )}
              </div>

              {/* Stay & Guest Information Block - Minimal, Clean, Iconless, No Divider Lines */}
              <div className="space-y-2 text-xs text-slate-300 py-1">
                
                {/* Stay Dates */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 shrink-0">{bookingModal.ui?.checkInOut || 'Giriş - Çıkış'}:</span>
                  <span className="font-medium text-white text-right truncate">
                    {checkIn} / {checkOut}
                  </span>
                </div>

                {/* Stay Duration */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 truncate">{bookingModal.ui?.stayDuration || 'Konaklama Süresi'}:</span>
                  <span className="font-medium text-white shrink-0 whitespace-nowrap">
                    {nights} {bookingModal.nightUnit || 'gece'}
                  </span>
                </div>

                {/* Guests Count */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 shrink-0">{bookingModal.ui?.guests || 'Misafirler'}:</span>
                  <span className="font-medium text-white text-right truncate">
                    {adults} {bookingBar.labels?.adults || 'Yetişkin'}{childrenCount ? `, ${childrenCount} ${bookingBar.labels?.children || 'Çocuk'}` : ''}
                  </span>
                </div>

                {/* Live Guest Preview */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 shrink-0">{bookingModal.ui?.registeredGuest || 'Kayıtlı Misafir'}:</span>
                  <span className="font-medium text-white truncate text-right">
                    {formData.firstName || formData.lastName 
                      ? `${formData.firstName} ${formData.lastName}` 
                      : (bookingModal.folio?.notEntered || 'Henüz girilmedi')}
                  </span>
                </div>

              </div>

              {/* Financial Accounting Folio Breakdown */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs">
                
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {bookingModal.pricingBreakdown || 'Fatura & Fiyat Dağılımı'}
                </span>

                <div className="flex items-center justify-between gap-2 text-slate-300">
                  <span className="truncate min-w-0 pr-1">{bookingModal.perNightRate || 'Gecelik Fiyat'}:</span>
                  <span className="font-mono shrink-0 whitespace-nowrap">{selectedRoom.pricePerNight.toLocaleString(activeLocale)} ₺</span>
                </div>

                <div className="flex items-center justify-between gap-2 text-slate-300">
                  <span className="truncate min-w-0 pr-1">{nights} {bookingModal.ui?.roomNightFee || 'Gece Oda Ücreti'}:</span>
                  <span className="font-mono shrink-0 whitespace-nowrap">{rawSubtotal.toLocaleString(activeLocale)} ₺</span>
                </div>

                <div className="flex items-center justify-between gap-2 text-emerald-400">
                  <span className="truncate min-w-0 pr-1">{bookingModal.folio?.directDiscount || 'Resmi Web Doğrudan İndirimi (%10)'}:</span>
                  <span className="font-mono shrink-0 whitespace-nowrap">- {directDiscount.toLocaleString(activeLocale)} ₺</span>
                </div>

                <div className="flex items-center justify-between gap-2 text-slate-400 text-[11px]">
                  <span className="truncate min-w-0 pr-1">{bookingModal.folio?.includedBreakfast || 'Açık Büfe Kahvaltı'}:</span>
                  <span className="text-slate-300 font-medium shrink-0 whitespace-nowrap">{bookingModal.folio?.includedFree || 'Dahil'}</span>
                </div>

                <div className="flex items-center justify-between gap-2 text-slate-400 text-[11px]">
                  <span className="truncate min-w-0 pr-1">{bookingModal.folio?.includedSpa || '1500 m² SPA & Termal Havuz'}:</span>
                  <span className="text-slate-300 font-medium shrink-0 whitespace-nowrap">{bookingModal.folio?.includedFree || 'Dahil'}</span>
                </div>

                <div className="flex items-center justify-between gap-2 text-slate-400 text-[11px]">
                  <span className="truncate min-w-0 pr-1">{bookingModal.ui?.vatNotice || 'KDV & Konaklama Vergisi'}:</span>
                  <span className="text-slate-300 font-medium shrink-0 whitespace-nowrap">{bookingModal.folio?.includedFree || 'Dahil'}</span>
                </div>

                {/* Final Total Amount - Harmonious, Perfectly Aligned Lockup */}
                <div className="pt-3.5 mt-2.5 border-t border-slate-800 space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-serif font-bold text-sm sm:text-base text-white truncate">
                      {bookingModal.totalPrice || 'Net Fatura Tutarı'}
                    </span>
                    <span className="font-serif text-2xl font-bold text-gold-400 shrink-0 whitespace-nowrap">
                      {finalTotal.toLocaleString(activeLocale)} ₺
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {bookingModal.ui?.taxesAndBreakfastIncluded || 'Vergiler ve kahvaltı dahil'}
                  </span>
                </div>

              </div>

              {/* Cancellation Guarantee Notice - Unboxed, Iconless, Quiet Luxury */}
              <p className="text-center text-[11px] text-slate-400 font-light tracking-wide pt-1">
                {bookingModal.folio?.cancellationGuarantee || 'Giriş gününe 24 saat kalaya kadar ücretsiz iptal güvencesi.'}
              </p>

            </div>

          </aside>
          )}

        </div>

      </main>

      {/* Bottom Footer - 100% Localized */}
      <footer className="mt-auto border-t border-slate-800/80 bg-hotel-950 py-4 sm:py-6 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>{bookingModal.ui?.portalCopyright || '© 2026 City One Hotel Kayseri. Tüm hakları saklıdır. Resmi Doğrudan Rezervasyon Portalı.'}</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {bookingModal.ui?.sslBadge || '256-Bit SSL Güvenli Altyapı'}
            </span>
          </div>
        </div>
      </footer>

      {/* Inspected Room Detail Modal */}
      {inspectedRoom && (
        <RoomDetailModal
          room={inspectedRoom}
          onClose={() => setInspectedRoom(null)}
          onSelectRoom={(room) => {
            setSelectedRoomId(room.id);
            setInspectedRoom(null);
          }}
          actionLabel={bookingModal.folio?.selectRoomCta || 'Bu Odayı Seç'}
        />
      )}
    </div>,
    document.body
  );
};

export default BookingModal;
