/**
 * City One Hotel - Çok Dilli Alt Menü ve Hızlı Gezinme Yapısı (TR, EN, DE, RU)
 * Desktop Dropdown ve Mobil Hamburger Akordiyon için ortak veri kaynağı.
 */

export const navigationSubItems = {
  tr: {
    rooms: {
      parentLabel: "Odalar & Süitler",
      viewAllText: "Tüm Odaları İncele",
      items: [
        { id: "standart-city", label: "Standart Şehir Manzaralı Oda", desc: "27 m² • Ortopedik Yatak & Wi-Fi 6", target: "#rooms", category: "standart" },
        { id: "superior-room", label: "Superior Konfor Oda", desc: "43 m² • Ergonomik Çalışma Alanı", target: "#rooms", category: "superior" },
        { id: "double-room", label: "Double Çift Kişilik Lüks Oda", desc: "35 m² • Geniş King Size Yatak", target: "#rooms", category: "double" },
        { id: "family-comfort", label: "Family Comfort Aile Odası", desc: "47 m² • 4 Kişilik Ayrı Yatak Düzeni", target: "#rooms", category: "aile" },
        { id: "jakuzili-suit", label: "Jakuzili Balayı & Executive Süit", desc: "53 m² • Özel Hidromasajlı Jakuzi", target: "#rooms", category: "jakuzi" }
      ]
    },
    spa: {
      parentLabel: "SPA & Havuz",
      viewAllText: "Tüm SPA Olanaklarını Keşfet",
      items: [
        { id: "pool", label: "Yarı Olimpik Isıtmalı Havuz", desc: "29°C Sabit Sıcaklık • Kapalı Havuz", target: "#spa", spaTab: "pool" },
        { id: "hamam", label: "Geleneksel Türk Hamamı", desc: "Tarihi Göbek Taşı & Kese-Köpük", target: "#spa", spaTab: "hamam" },
        { id: "fitness", label: "Spor & Fitness Salonu", desc: "Tam Donanımlı Kardiyo & Ağırlık", target: "#spa", spaTab: "fitness" },
        { id: "sauna", label: "Fin Hamamı (Buhar) & Kuru Sauna", desc: "Toksin Atımı & Canlandırıcı Sıcaklık", target: "#spa", spaTab: "sauna" },
        { id: "gelin", label: "Özel Gelin Hamamı", desc: "Kına & Kutlamalara Özel Rezervasyon", target: "#spa", spaTab: "gelin" },
        { id: "massage", label: "Uzak Doğu & Medikal Masajlar", desc: "Profesyonel Terapist Uygulamaları", target: "#spa", spaTab: "massage" }
      ]
    },
    ski: {
      parentLabel: "Erciyes Transfer",
      viewAllText: "Erciyes Kayak Hizmetleri",
      items: [
        { id: "shuttle", label: "VIP Shuttle Transfer Saatleri", desc: "Otelden Kayak Pistlerine 18 km", target: "#ski" },
        { id: "storage", label: "Isıtmalı Kayak Odası", desc: "Güvenli Ekipman & Bot Kurutma", target: "#ski" },
        { id: "guide", label: "Erciyes Kayak & Pist Rehberi", desc: "34 Farklı Pist & Canlı Hava Durumu", target: "#ski" }
      ]
    },
    meetings: {
      parentLabel: "Toplantı & Kongre",
      viewAllText: "Tüm Salon ve Kapasiteler",
      items: [
        { id: "kayseri", label: "Kayseri Balo Salonu (500 Kişi)", desc: "Kolonsuz Yüksek Tavan & Gala Düzeni", target: "#meetings" },
        { id: "erciyes", label: "Erciyes Kongre Salonu (400 Kişi)", desc: "Çok Amaçlı Konferans & Seminer", target: "#meetings" },
        { id: "breakout", label: "Yelken & Efes Toplantı Salonları", desc: "80-150 Kişilik VIP Workshop & Eğitim", target: "#meetings" }
      ]
    },
    dining: {
      parentLabel: "Gastronomi",
      viewAllText: "Restoran ve Menüleri Keşfet",
      items: [
        { id: "breakfast", label: "Zengin Açık Büfe Kahvaltı", desc: "07:00 - 10:00 Kayseri Pastırması & Sıcak Börek", target: "#dining" },
        { id: "sini", label: "Sini Restaurant (750 Kişi)", desc: "Kayseri'nin En Geniş Banket Salonu", target: "#dining" },
        { id: "alacarte", label: "La Brasserie A La Carte", desc: "Seçkin Türk & Dünya Mutfağı Akşam Yemeği", target: "#dining" }
      ]
    },
    gallery: {
      parentLabel: "Galeri",
      viewAllText: "Tüm Galeriyi Aç",
      items: [
        { id: "photos", label: "Fotoğraf Galerisi", desc: "Dış Cephe, Lobi, Oda ve SPA Kareleri", target: "#gallery", galleryCategory: "all" },
        { id: "videos", label: "Canlı Video Turları", desc: "Balo Salonları & Gelin Hamamı Canlı Çekimleri", target: "#gallery", galleryCategory: "videos" }
      ]
    },
    reviews: {
      parentLabel: "Yorumlar",
      viewAllText: "Tüm Misafir Değerlendirmeleri",
      items: [
        { id: "score", label: "4.1 / 5 Google Değerlendirmeleri", desc: "3.200+ Doğrulanmış Misafir Puanı", target: "#reviews" },
        { id: "stories", label: "Gerçek Misafir Deneyimleri", desc: "Kayak Tatilcileri & İş İnsanları Yorumları", target: "#reviews" }
      ]
    },
    contact: {
      parentLabel: "İletişim",
      viewAllText: "İletişim & Rezervasyon Bilgileri",
      items: [
        { id: "location", label: "Konum & Ulaşım Bilgisi", desc: "Kocasinan / Kayseri Şehir Merkezi", target: "#contact" },
        { id: "reception", label: "7/24 Resepsiyon & Rezervasyon", desc: "0352 207 00 00 Kesintisiz Destek", target: "#contact" },
        { id: "hours", label: "Hizmet & Çalışma Saatleri", desc: "Restoran, SPA ve Resepsiyon Saatleri", target: "#contact" }
      ]
    }
  },

  en: {
    rooms: {
      parentLabel: "Rooms & Suites",
      viewAllText: "View All Rooms",
      items: [
        { id: "standart-city", label: "Standard City View Room", desc: "27 m² • Orthopedic Bed & Wi-Fi 6", target: "#rooms", category: "standart" },
        { id: "superior-room", label: "Superior Comfort Room", desc: "43 m² • Ergonomic Workspace", target: "#rooms", category: "superior" },
        { id: "double-room", label: "Double Deluxe Room", desc: "35 m² • Spacious King Size Bed", target: "#rooms", category: "double" },
        { id: "family-comfort", label: "Family Comfort Room", desc: "47 m² • Separate Beds for up to 4 Guests", target: "#rooms", category: "aile" },
        { id: "jakuzili-suit", label: "Executive Jacuzzi Honeymoon Suite", desc: "53 m² • Private Hydromassage Jacuzzi", target: "#rooms", category: "jakuzi" }
      ]
    },
    spa: {
      parentLabel: "SPA & Pool",
      viewAllText: "Explore All SPA Amenities",
      items: [
        { id: "pool", label: "Semi-Olympic Heated Pool", desc: "29°C Constant Temperature • Indoor Pool", target: "#spa", spaTab: "pool" },
        { id: "hamam", label: "Traditional Turkish Bath", desc: "Historic Marble Stone & Scrub Ritual", target: "#spa", spaTab: "hamam" },
        { id: "fitness", label: "Fitness & Gym Center", desc: "Fully Equipped Cardio & Weight Area", target: "#spa", spaTab: "fitness" },
        { id: "sauna", label: "Finnish Steam & Dry Sauna", desc: "Detoxification & Revitalizing Heat", target: "#spa", spaTab: "sauna" },
        { id: "gelin", label: "Private Bridal Hamam", desc: "Exclusive Booking for Bridal Celebrations", target: "#spa", spaTab: "gelin" },
        { id: "massage", label: "Far East & Medical Massages", desc: "Certified Professional Therapists", target: "#spa", spaTab: "massage" }
      ]
    },
    ski: {
      parentLabel: "Erciyes Transfer",
      viewAllText: "Erciyes Ski Services",
      items: [
        { id: "shuttle", label: "VIP Shuttle Schedule", desc: "18 km Direct Transfer to Ski Slopes", target: "#ski" },
        { id: "storage", label: "Heated Ski Gear Room", desc: "Secure Ski Locker & Boot Drying", target: "#ski" },
        { id: "guide", label: "Erciyes Slope & Weather Guide", desc: "34 Certified Slopes & Real-Time Weather", target: "#ski" }
      ]
    },
    meetings: {
      parentLabel: "Meetings & Events",
      viewAllText: "View All Event Venues",
      items: [
        { id: "kayseri", label: "Kayseri Ballroom (500 Pax)", desc: "Pillar-free High Ceiling & Gala Setup", target: "#meetings" },
        { id: "erciyes", label: "Erciyes Conference Hall (400 Pax)", desc: "Multipurpose Corporate Conferences", target: "#meetings" },
        { id: "breakout", label: "Yelken & Efes Meeting Rooms", desc: "80-150 Pax VIP Workshops & Seminars", target: "#meetings" }
      ]
    },
    dining: {
      parentLabel: "Dining",
      viewAllText: "Discover Dining & Menus",
      items: [
        { id: "breakfast", label: "Rich Open Buffet Breakfast", desc: "07:00 - 10:00 Authentic Pastırma & Pastries", target: "#dining" },
        { id: "sini", label: "Sini Restaurant (750 Pax)", desc: "Largest Banquet Facility in Kayseri", target: "#dining" },
        { id: "alacarte", label: "La Brasserie A La Carte", desc: "Fine Turkish & International Dinners", target: "#dining" }
      ]
    },
    gallery: {
      parentLabel: "Gallery",
      viewAllText: "View Full Gallery",
      items: [
        { id: "photos", label: "Photo Showcase", desc: "Exterior, Lobby, Rooms & SPA Highlights", target: "#gallery", galleryCategory: "all" },
        { id: "videos", label: "Live Video Tours", desc: "Ballrooms & Bridal Hamam Experience", target: "#gallery", galleryCategory: "videos" }
      ]
    },
    reviews: {
      parentLabel: "Reviews",
      viewAllText: "View All Guest Reviews",
      items: [
        { id: "score", label: "4.1 / 5 Google Rating", desc: "3,200+ Verified Guest Ratings", target: "#reviews" },
        { id: "stories", label: "Authentic Guest Stories", desc: "Skiers & Business Traveler Experiences", target: "#reviews" }
      ]
    },
    contact: {
      parentLabel: "Contact",
      viewAllText: "Contact & Location Info",
      items: [
        { id: "location", label: "Location & Directions", desc: "Kocasinan / Kayseri City Center", target: "#contact" },
        { id: "reception", label: "24/7 Reception & Desk", desc: "+90 (352) 207 00 00 Dedicated Service", target: "#contact" },
        { id: "hours", label: "Operating Hours", desc: "Restaurant, SPA & Front Desk Timings", target: "#contact" }
      ]
    }
  },

  de: {
    rooms: {
      parentLabel: "Zimmer & Suiten",
      viewAllText: "Alle Zimmer ansehen",
      items: [
        { id: "standart-city", label: "Standard-Zimmer mit Stadtblick", desc: "27 m² • Orthopädisches Bett & Wi-Fi 6", target: "#rooms", category: "standart" },
        { id: "superior-room", label: "Superior Komfort-Zimmer", desc: "43 m² • Ergonomischer Arbeitsbereich", target: "#rooms", category: "superior" },
        { id: "double-room", label: "Doppelzimmer Deluxe", desc: "35 m² • Großes King-Size-Bett", target: "#rooms", category: "double" },
        { id: "family-comfort", label: "Familienzimmer Family Comfort", desc: "47 m² • Getrennte Betten für bis zu 4 Personen", target: "#rooms", category: "aile" },
        { id: "jakuzili-suit", label: "Executive Suite mit Whirlpool", desc: "53 m² • Privater Hydromassage-Whirlpool", target: "#rooms", category: "jakuzi" }
      ]
    },
    spa: {
      parentLabel: "SPA & Pool",
      viewAllText: "Alle SPA-Bereiche entdecken",
      items: [
        { id: "pool", label: "Beheiztes Hallenbad (Halbolympisch)", desc: "29°C konstante Temperatur • Innenpool", target: "#spa", spaTab: "pool" },
        { id: "hamam", label: "Traditionelles Türkisches Hamam", desc: "Historischer Marmorstein & Schaumritual", target: "#spa", spaTab: "hamam" },
        { id: "fitness", label: "Fitness- & Kraftraum", desc: "Voll ausgestattet für Cardio & Kraft", target: "#spa", spaTab: "fitness" },
        { id: "sauna", label: "Dampfbad & Finnische Trockensauna", desc: "Vitalisierende Wärme & Erholung", target: "#spa", spaTab: "sauna" },
        { id: "gelin", label: "Privates Braut-Hamam", desc: "Exklusive Buchung für Feierlichkeiten", target: "#spa", spaTab: "gelin" },
        { id: "massage", label: "Fernöstliche & Medizinische Massagen", desc: "Zertifizierte professionelle Therapeuten", target: "#spa", spaTab: "massage" }
      ]
    },
    ski: {
      parentLabel: "Erciyes Transfer",
      viewAllText: "Erciyes Ski-Services",
      items: [
        { id: "shuttle", label: "VIP-Shuttle Abfahrtszeiten", desc: "18 km direkter Transfer zu den Pisten", target: "#ski" },
        { id: "storage", label: "Beheizter Skiraum", desc: "Sichere Skiaufbewahrung & Schuhtrockner", target: "#ski" },
        { id: "guide", label: "Erciyes Pistenführer", desc: "34 zertifizierte Pisten & Wetterdaten", target: "#ski" }
      ]
    },
    meetings: {
      parentLabel: "Tagung & Kongress",
      viewAllText: "Alle Säle und Kapazitäten",
      items: [
        { id: "kayseri", label: "Kayseri Ballsaal (500 Pers.)", desc: "Säulenfrei, hohe Decken & Gala-Setup", target: "#meetings" },
        { id: "erciyes", label: "Erciyes Kongress-Saal (400 Pers.)", desc: "Vielseitig für Konferenzen & Seminare", target: "#meetings" },
        { id: "breakout", label: "Yelken & Efes Seminarräume", desc: "80-150 Pers. für Workshops & Schulungen", target: "#meetings" }
      ]
    },
    dining: {
      parentLabel: "Gastronomie",
      viewAllText: "Restaurants & Menüs",
      items: [
        { id: "breakfast", label: "Reichhaltiges Frühstücksbuffet", desc: "07:00 - 10:00 Kayseri Pastırma & warmes Gebäck", target: "#dining" },
        { id: "sini", label: "Sini Restaurant (750 Pers.)", desc: "Größter Bankettsaal in Kayseri", target: "#dining" },
        { id: "alacarte", label: "La Brasserie A La Carte", desc: "Exquisite türkische & internationale Küche", target: "#dining" }
      ]
    },
    gallery: {
      parentLabel: "Galerie",
      viewAllText: "Komplette Galerie ansehen",
      items: [
        { id: "photos", label: "Fotogalerie", desc: "Außenansicht, Lobby, Zimmer & SPA", target: "#gallery", galleryCategory: "all" },
        { id: "videos", label: "Live-Videotouren", desc: "Festsäle & Braut-Hamam Rundgänge", target: "#gallery", galleryCategory: "videos" }
      ]
    },
    reviews: {
      parentLabel: "Bewertungen",
      viewAllText: "Alle Gästebewertungen",
      items: [
        { id: "score", label: "4.1 / 5 Google-Bewertung", desc: "3.200+ verifizierte Bewertungen", target: "#reviews" },
        { id: "stories", label: "Echte Gästestimmen", desc: "Erfahrungen von Skitouristen & Geschäftsreisenden", target: "#reviews" }
      ]
    },
    contact: {
      parentLabel: "Kontakt",
      viewAllText: "Kontakt & Anfahrt",
      items: [
        { id: "location", label: "Standort & Anreise", desc: "Kocasinan / Kayseri Stadtzentrum", target: "#contact" },
        { id: "reception", label: "24/7 Rezeption & Reservierung", desc: "+90 (352) 207 00 00 Erreichbarkeit", target: "#contact" },
        { id: "hours", label: "Öffnungs- & Servicezeiten", desc: "Restaurant, SPA und Rezeption", target: "#contact" }
      ]
    }
  },

  ru: {
    rooms: {
      parentLabel: "Номера и люксы",
      viewAllText: "Посмотреть все номера",
      items: [
        { id: "standart-city", label: "Стандартный номер с видом на город", desc: "27 м² • Ортопедическая кровать и Wi-Fi 6", target: "#rooms", category: "standart" },
        { id: "superior-room", label: "Номер Superior повышенного комфорта", desc: "43 м² • Эргономичная рабочая зона", target: "#rooms", category: "superior" },
        { id: "double-room", label: "Двухместный номер Double Deluxe", desc: "35 м² • Большая кровать King Size", target: "#rooms", category: "double" },
        { id: "family-comfort", label: "Семейный номер Family Comfort", desc: "47 м² • Раздельные кровати до 4 гостей", target: "#rooms", category: "aile" },
        { id: "jakuzili-suit", label: "Люкс с джакузи для новобрачных", desc: "53 м² • Приватное гидромассажное джакузи", target: "#rooms", category: "jakuzi" }
      ]
    },
    spa: {
      parentLabel: "СПА и бассейн",
      viewAllText: "Все возможности СПА-центра",
      items: [
        { id: "pool", label: "Крытый полуолимпийский бассейн", desc: "29°C постоянная температура воды", target: "#spa", spaTab: "pool" },
        { id: "hamam", label: "Традиционный турецкий хаммам", desc: "Мраморный гебекташ и пенный массаж", target: "#spa", spaTab: "hamam" },
        { id: "fitness", label: "Тренажерный и фитнес-зал", desc: "Кардиозона и силовые тренажеры", target: "#spa", spaTab: "fitness" },
        { id: "sauna", label: "Финская парная и сухая сауна", desc: "Глубокое очищение и релаксация", target: "#spa", spaTab: "sauna" },
        { id: "gelin", label: "Свадебный хаммам (Gelin Hamamı)", desc: "Индивидуальное бронирование для торжеств", target: "#spa", spaTab: "gelin" },
        { id: "massage", label: "Массажи и спа-терапия", desc: "Сертифицированные мастера массажа", target: "#spa", spaTab: "massage" }
      ]
    },
    ski: {
      parentLabel: "Трансфер Эрджиес",
      viewAllText: "Горнолыжный сервис Эрджиес",
      items: [
        { id: "shuttle", label: "Расписание VIP-шаттлов", desc: "18 км прямой трансфер к подъемникам", target: "#ski" },
        { id: "storage", label: "Теплая лыжная комната", desc: "Сушка ботинок и хранение инвентаря", target: "#ski" },
        { id: "guide", label: "Гид по трассам Эрджиеса", desc: "34 оборудованные трассы и прогноз погоды", target: "#ski" }
      ]
    },
    meetings: {
      parentLabel: "Конференции и залы",
      viewAllText: "Все залы и схемы рассадки",
      items: [
        { id: "kayseri", label: "Банкетный зал Kayseri (500 мест)", desc: "Без колонн, высокие потолки и гала-ужин", target: "#meetings" },
        { id: "erciyes", label: "Конгресс-холл Erciyes (400 мест)", desc: "Масштабные конференции и форумы", target: "#meetings" },
        { id: "breakout", label: "Залы Yelken и Efes", desc: "80-150 мест для тренингов и семинаров", target: "#meetings" }
      ]
    },
    dining: {
      parentLabel: "Гастрономия",
      viewAllText: "Рестораны и меню",
      items: [
        { id: "breakfast", label: "Завтрак «шведский стол»", desc: "07:00 - 10:00 Настоящая пастурма и горячий бёрек", target: "#dining" },
        { id: "sini", label: "Ресторан Sini (на 750 мест)", desc: "Самый вместительный ресторан Кайсери", target: "#dining" },
        { id: "alacarte", label: "Ресторан La Brasserie A La Carte", desc: "Изысканные блюда турецкой и мировой кухни", target: "#dining" }
      ]
    },
    gallery: {
      parentLabel: "Галерея",
      viewAllText: "Открыть полную галерею",
      items: [
        { id: "photos", label: "Фотогалерея отеля", desc: "Фасад, лобби, номера и термальный СПА", target: "#gallery", galleryCategory: "all" },
        { id: "videos", label: "Видеоэкскурсии", desc: "Видео залов и свадебного хаммама", target: "#gallery", galleryCategory: "videos" }
      ]
    },
    reviews: {
      parentLabel: "Отзывы",
      viewAllText: "Все отзывы гостей",
      items: [
        { id: "score", label: "Рейтинг Google: 4.1 / 5", desc: "3 200+ подтвержденных отзывов", target: "#reviews" },
        { id: "stories", label: "Истории реальных гостей", desc: "Впечатления лыжников и бизнес-путешественников", target: "#reviews" }
      ]
    },
    contact: {
      parentLabel: "Контакты",
      viewAllText: "Контакты и схема проезда",
      items: [
        { id: "location", label: "Адрес и как добраться", desc: "Коджасинан / Центр города Кайсери", target: "#contact" },
        { id: "reception", label: "Круглосуточный ресепшн 24/7", desc: "+90 (352) 207 00 00 Бронирование и справки", target: "#contact" },
        { id: "hours", label: "Часы работы сервисов", desc: "График работы СПА, ресторана и стойки регистрации", target: "#contact" }
      ]
    }
  }
};
