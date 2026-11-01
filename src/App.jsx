import React, { useState, lazy, Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { BookingBar } from './sections/BookingBar';
import { FeaturesSection } from './sections/FeaturesSection';
import { FooterSection } from './sections/FooterSection';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModal';
import { SectionSkeleton } from './components/SectionSkeleton';
import { LanguageProvider } from './context/LanguageContext';

// Dağıtık Yükleme (Code-Splitting) - Core Web Vitals Optimizasyonu
const RoomsSection = lazy(() => import('./sections/RoomsSection'));
const SpaSection = lazy(() => import('./sections/SpaSection'));
const SkiSection = lazy(() => import('./sections/SkiSection'));
const MeetingsSection = lazy(() => import('./sections/MeetingsSection'));
const DiningSection = lazy(() => import('./sections/DiningSection'));
const GallerySection = lazy(() => import('./sections/GallerySection'));
const ReviewsSection = lazy(() => import('./sections/ReviewsSection'));
const FaqSection = lazy(() => import('./sections/FaqSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

// Varsayılan rezervasyon tarihleri yardımcı fonksiyonu
const formatDate = (date) => date.toISOString().split('T')[0];

const getInitialBookingDates = () => {
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  const defaultCheckOut = new Date(today);
  defaultCheckOut.setDate(today.getDate() + 3);
  return {
    checkIn: formatDate(defaultCheckIn),
    checkOut: formatDate(defaultCheckOut)
  };
};

function MainApp() {
  // Merkezi Rezervasyon Motoru State'i
  const [bookingState, setBookingState] = useState(() => {
    const dates = getInitialBookingDates();
    return {
      checkIn: dates.checkIn,
      checkOut: dates.checkOut,
      adults: 2,
      children: 0,
      roomId: null
    };
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Merkezi Yasal Bilgilendirme & KVKK Modal State'i
  const [legalModalState, setLegalModalState] = useState({
    isOpen: false,
    tab: 'aydinlatma'
  });

  const handleOpenLegal = (tab = 'aydinlatma') => {
    setLegalModalState({
      isOpen: true,
      tab
    });
  };

  const handleCloseLegal = () => {
    setLegalModalState((prev) => ({
      ...prev,
      isOpen: false
    }));
  };

  // Genel Rezervasyon Açma (Navbar veya Hero)
  const handleOpenBooking = (roomId = null) => {
    setBookingState((prev) => ({ ...prev, roomId }));
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

        {/* LAZY: Fotoğraf & Canlı Video Galerisi */}
        <Suspense fallback={<SectionSkeleton height="h-[650px]" />}>
          <GallerySection />
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
          <ContactSection onOpenLegal={handleOpenLegal} />
        </Suspense>
      </main>

      {/* Footer */}
      <FooterSection 
        onOpenBooking={handleOpenBooking} 
        onOpenLegal={handleOpenLegal}
      />

      {/* Sabit Yeşil WhatsApp & Hızlı Arama Butonları */}
      <FloatingActions />

      {/* Merkezi Lüks Rezervasyon Motoru Modalı */}
      {isBookingOpen && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialData={bookingState}
          onOpenLegal={handleOpenLegal}
        />
      )}

      {/* 4 Dilli KVKK & Yasal Bilgilendirme Modalı */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={handleCloseLegal}
      />

    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </ErrorBoundary>
  );
}
