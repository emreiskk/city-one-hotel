import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { BookingBar } from './sections/BookingBar';
import { FeaturesSection } from './sections/FeaturesSection';
import { FooterSection } from './sections/FooterSection';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { SectionSkeleton } from './components/SectionSkeleton';
import { siteContent } from './config/siteContent';

// Dağıtık Yükleme (Code-Splitting) - Core Web Vitals Optimizasyonu
const RoomsSection = lazy(() => import('./sections/RoomsSection'));
const SpaSection = lazy(() => import('./sections/SpaSection'));
const SkiSection = lazy(() => import('./sections/SkiSection'));
const MeetingsSection = lazy(() => import('./sections/MeetingsSection'));
const DiningSection = lazy(() => import('./sections/DiningSection'));
const ReviewsSection = lazy(() => import('./sections/ReviewsSection'));
const FaqSection = lazy(() => import('./sections/FaqSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

export default function App() {
  const { roomsSection } = siteContent;

  // Varsayılan rezervasyon tarihleri
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  const defaultCheckOut = new Date(today);
  defaultCheckOut.setDate(today.getDate() + 3);

  const formatDate = (date) => date.toISOString().split('T')[0];

  // Merkezi Rezervasyon Motoru State'i
  const [bookingState, setBookingState] = useState({
    checkIn: formatDate(defaultCheckIn),
    checkOut: formatDate(defaultCheckOut),
    adults: 2,
    children: 0,
    roomId: roomsSection.rooms[0].id
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Genel Rezervasyon Açma
  const handleOpenBooking = (roomId = null) => {
    if (roomId) {
      setBookingState((prev) => ({ ...prev, roomId }));
    }
    setIsBookingOpen(true);
  };

  // Rezervasyon Barından Arama & Fiyatlama
  const handleSearchBooking = (params) => {
    setBookingState(params);
    setIsBookingOpen(true);
  };

  // Belirli bir odayı seçip rezerve etme
  const handleSelectRoomForBooking = (room) => {
    setBookingState((prev) => ({
      ...prev,
      roomId: room.id
    }));
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-hotel-950 text-slate-100 flex flex-col relative selection:bg-gold-500/30 selection:text-gold-200">
      
      {/* Sabit Lüks Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* EAGER: Hero & İlk Açılış Vitrini (LCP Optimizasyonu) */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* EAGER: Hızlı Rezervasyon Motoru Barı */}
        <BookingBar onSearchBooking={handleSearchBooking} />

        {/* EAGER: Temel Değerler ve 6 Temel Özellik */}
        <FeaturesSection />

        {/* LAZY: Odalar Galerisi & Dinamik Fiyatlandırma */}
        <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
          <RoomsSection onSelectRoomForBooking={handleSelectRoomForBooking} />
        </Suspense>

        {/* LAZY: 1500 m² SPA & Yarı Olimpik Havuz Sekmeleri */}
        <Suspense fallback={<SectionSkeleton height="h-[650px]" />}>
          <SpaSection onOpenBooking={() => handleOpenBooking()} />
        </Suspense>

        {/* LAZY: Erciyes Kayak Merkezi 18 km Transfer & Kış Turizmi */}
        <Suspense fallback={<SectionSkeleton height="h-[550px]" />}>
          <SkiSection onOpenBooking={() => handleOpenBooking()} />
        </Suspense>

        {/* LAZY: Toplantı & Kongre Salonları */}
        <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
          <MeetingsSection />
        </Suspense>

        {/* LAZY: Kayseri Gastronomisi & Kahvaltı */}
        <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
          <DiningSection onOpenBooking={() => handleOpenBooking()} />
        </Suspense>

        {/* LAZY: Gerçek Misafir Yorumları & Skor Kartı */}
        <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
          <ReviewsSection />
        </Suspense>

        {/* LAZY: Sıkça Sorulan Sorular (Akordeon) */}
        <Suspense fallback={<SectionSkeleton height="h-[400px]" />}>
          <FaqSection />
        </Suspense>

        {/* LAZY: Google Harita & İletişim / Rezervasyon Hattı */}
        <Suspense fallback={<SectionSkeleton height="h-[550px]" />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <FooterSection onOpenBooking={handleOpenBooking} />

      {/* Sabit Yeşil WhatsApp & Hızlı Arama Butonları */}
      <FloatingActions />

      {/* Dinamik Fiyat Hesaplamalı Rezervasyon Modal Simülasyonu */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingState}
      />

    </div>
  );
}
