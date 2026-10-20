/**
 * City One Hotel Kayseri - Türkçe Dil Dosyası (TR)
 * Single Source of Truth - Orijinal Türkçe içerik ve etiketler
 */

export const tr = {
  langCode: "tr",
  langLabel: "Türkçe",
  flag: "🇹🇷",

  hotel: {
    name: "City One Hotel",
    city: "Kayseri",
    stars: 4,
    starLabel: "4 Yıldızlı Lüks Şehir & Kayak Oteli",
    tagline: "Erciyes'in Eteklerinde, Kayseri'nin Kalbinde Kusursuz Bir Konaklama",
    slogan: "İş Seyahatlerinizde Prestij, Erciyes Tatilinizde Sıcak Bir Yuva",
    phone: "+90 (352) 207 00 00",
    phoneRaw: "+903522070000",
    receptionPhone: "0352 207 00 00",
    receptionLabel: "Resepsiyon: 0352 207 00 00",
    santralPhone: "0352 207 00 00",
    santralLabel: "Resepsiyon: 0352 207 00 00",
    reservationPhone: "+90 (506) 752 02 86",
    whatsapp: "0506 752 02 86",
    whatsappRaw: "905067520286",
    whatsappLabel: "WhatsApp: 0506 752 02 86",
    email: "info@cityonekayseri.com",
    reservationEmail: "rezervasyon@cityonekayseri.com",
    address: "Eski Sanayi Bölgesi 2. Cadde No: 6002, Kocasinan / Kayseri",
    locationHighlights: "Kayseri Havalimanı'na 6 km, Forum Kayseri'ye 5 dk, Erciyes Kayak Merkezi'ne 18 km",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    operationalHours: {
      spaWeekdays: "09:00 - 23:00 (Hafta İçi)",
      spaWeekend: "09:00 - 21:00 (Hafta Sonu)",
      breakfast: "07:00 - 10:00 (Açık Büfe)",
      dinner: "Gece 00:00'a Kadar Servis",
      roomService: "24 Saat Kesintisiz (7/24)"
    },
    guestPrivileges: [
      "Ücretsiz Vale & Kapalı Otopark",
      "Odalarda Ücretsiz Çay Setup & Günlük Su",
      "Odalarda Ütü ve Ütü Masası",
      "Yarı Olimpik Isıtmalı Kapalı Havuz",
      "Geleneksel Türk Hamamı",
      "Fin Hamamı (Buhar) & Kuru Sauna",
      "SPA Jakuzisi & Dinlenme Alanı",
      "Tam Donanımlı Spor & Ağırlık Salonu (Fitness)",
      "24 Saat Kesintisiz Oda Servisi"
    ],
    rating: {
      score: "4.1",
      totalReviews: "3.200+",
      label: "Google Puanı: 4.1 / 5.0 (3.2K+ Yorum)",
      googleScore: "4.1 / 5.0"
    }
  },

  navigation: [
    { id: "rooms", label: "Odalar & Süitler", href: "#rooms" },
    { id: "spa", label: "SPA & Havuz", href: "#spa" },
    { id: "ski", label: "Erciyes Transfer", href: "#ski" },
    { id: "meetings", label: "Toplantı & Kongre", href: "#meetings" },
    { id: "dining", label: "Gastronomi", href: "#dining" },
    { id: "gallery", label: "Galeri", href: "#gallery" },
    { id: "reviews", label: "Yorumlar", href: "#reviews" },
    { id: "contact", label: "İletişim", href: "#contact" }
  ],

  hero: {
    badge: "KAYSERİ'NİN PRESTİJ NOKTASI",
    titlePrimary: "Zarafet, Konfor ve",
    titleHighlight: "Erciyes Manzarası",
    description: "Kayseri iş ve alışveriş merkezlerinin odağında, 1500 m²'lik yarı olimpik kapalı havuzlu SPA merkezi ve Erciyes Kayak Merkezi'ne özel VIP transfer ayrıcalığıyla 4 yıldızlı eşsiz bir konaklama deneyimi sizi bekliyor.",
    ctaPrimary: "Hemen Rezervasyon Yap",
    ctaSecondary: "Odaları Keşfet",
    ctaVirtualTour: "Otel Tanıtımını İncele",
    featuresPills: [
      "18 km Erciyes Kayak Transferi & VIP Shuttle",
      "1500 m² SPA & Yarı Olimpik Havuz (H.İçi 23:00'e kadar)",
      "07:00 - 10:00 Zengin Açık Büfe Kahvaltı",
      "Odalarda Ücretsiz Çay Setup, Su, Ütü & Vale"
    ],
    stats: [
      { value: "18 km", label: "Erciyes Kayak Pisti" },
      { value: "1500 m²", label: "Kapsamlı SPA Alanı" },
      { value: "120+", label: "Konforlu Oda & Süit" },
      { value: "4.1 / 5", label: "Google Puanı (3.2K+)" }
    ],
    backgroundImage: "/assets/hotel/exterior/hero-aerial.jpg"
  },

  bookingBar: {
    title: "En İyi Fiyat Garantisiyle Rezervasyon",
    subtitle: "Doğrudan rezervasyonlarda ücretsiz SPA girişi ve hoş geldin ikramı dahildir.",
    labels: {
      checkIn: "Giriş Tarihi",
      checkOut: "Çıkış Tarihi",
      adults: "Yetişkin",
      children: "Çocuk (0-12)",
      roomType: "Oda Tipi",
      submitButton: "Fiyatları & Müsaitliği Gör",
      directBookingBadge: "Resmi Web Sitesine Özel %10 İndirim Uygulandı"
    },
    defaultGuests: {
      adults: 2,
      children: 0
    }
  },

  keyFeatures: {
    sectionBadge: "AYRICALIKLARIMIZ",
    title: "Neden City One Hotel Kayseri?",
    subtitle: "Şehrin merkezinde iş dünyasının temposundan Erciyes'in taze karına uzanan seçkin hizmetler.",
    items: [
      {
        id: "ski",
        title: "Erciyes Kayak Transferi & Kayak Odası",
        description: "Dünya standartlarındaki Erciyes Kayak Merkezi'ne yalnızca 18 km mesafedeyiz. Otelimizden pistlere düzenli servis ve ısıtmalı kayak ekipmanı muhafaza odası sunuyoruz.",
        icon: "MountainSnow",
        highlight: "18 km / VIP Shuttle"
      },
      {
        id: "spa",
        title: "1500 m² Termal SPA, Havuz & Türk Hamamı",
        description: "Hafta içi 09:00-23:00, hafta sonu 09:00-21:00 saatleri arasında ısıtmalı yarı olimpik kapalı havuz, SPA jakuzisi, geleneksel Türk hamamı, Fin buhar banyosu ve sauna.",
        icon: "Waves",
        highlight: "Yarı Olimpik Havuz & Hamam"
      },
      {
        id: "fitness",
        title: "Tam Donanımlı Spor & Ağırlık Salonu",
        description: "Koşu bantları, kardiyo parkuru ve serbest ağırlık dambıl istasyonlarıyla formunuzu koruyabileceğiniz fitness salonumuz misafirlerimize ücretsizdir.",
        icon: "Dumbbell",
        highlight: "Ücretsiz Fitness Girişi"
      },
      {
        id: "dining",
        title: "07:00-10:00 Açık Büfe & 750 Kişilik Restoran",
        description: "Sabahları hakiki Kayseri pastırmalı zengin açık büfe kahvaltı; akşamları gece 00:00'a kadar seçkin A La Carte menüler ve 750 kişilik dev restoran.",
        icon: "Utensils",
        highlight: "07:00 - 10:00 Açık Büfe"
      },
      {
        id: "inroom",
        title: "Odalarda Çay Setup, Su, Ütü & 7/24 Servis",
        description: "Tüm odalarımızda ücretsiz çay/kahve setup, günlük şişe su, ütü ve ütü masası, mini bar ve günün her saati 24 saat kesintisiz oda servisi hizmeti.",
        icon: "Coffee",
        highlight: "24 Saat Oda Servisi"
      },
      {
        id: "parking",
        title: "Ücretsiz Kapalı Otopark & Vale Hizmeti",
        description: "Konaklamanız boyunca 24 saat güvenlik kameralarıyla korunan geniş kapalı otoparkımız ve profesyonel vale karşılama hizmetimiz tamamen ücretsizdir.",
        icon: "ShieldCheck",
        highlight: "Ücretsiz Vale & Otopark"
      }
    ]
  },

  roomsSection: {
    sectionBadge: "KONAKLAMA SEÇENEKLERİ",
    title: "Ferah, Sessiz ve Çağdaş Odalar",
    subtitle: "En iyi fiyat garantisi ve şeffaf fiyatlandırma anlayışımızla; her ayrıntısı üstün konforunuz ve huzurlu bir dinlenme deneyimi için tasarlanmış odalar.",
    categories: [
      { id: "all", label: "Tüm Odalar" },
      { id: "standart", label: "Standart Oda" },
      { id: "superior", label: "Superior Oda" },
      { id: "double", label: "Double Oda" },
      { id: "twin", label: "Twin Oda" },
      { id: "aile", label: "Aile Odası" },
      { id: "jakuzi", label: "Jakuzili Süit" }
    ],
    pricingNote: "Fiyatlara zengin açık büfe kahvaltı, 1500 m² SPA kullanımı ve KDV dahildir.",
    ui: {
      photosCount: "Fotoğraf",
      moreAmenities: "özellik daha",
      bookRoom: "Odayı Rezerve Et",
      inspectDetails: "Detayları İncele",
      modalArea: "Alan:",
      modalCapacity: "Kapasite:",
      modalBed: "Yatak:",
      modalAmenitiesTitle: "Oda Özellikleri & Konfor Ayrıcalıkları",
      confirmBook: "Bu Odayı Rezerve Et"
    },
    rooms: [
      {
        id: "standart-city",
        category: "standart",
        categoryLabel: "Standart Kategori",
        name: "Standart Şehir Manzaralı Oda",
        pricePerNight: 2750,
        formattedPrice: "2.750 ₺",
        capacity: "1 - 2 Misafir",
        bedType: "1 Çift Kişilik veya 2 Tek Kişilik Ortopedik Yatak",
        size: "27 m²",
        view: "Şehir / Cadde Manzarası",
        popular: false,
        tag: "Ekonomik & Konforlu",
        image: "/assets/hotel/rooms/standart-1.jpg",
        images: [
          "/assets/hotel/rooms/standart-1.jpg",
          "/assets/hotel/rooms/standart-2.jpg",
          "/assets/hotel/rooms/room-detail-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "27 m² Ferah Şehir Manzaralı Tasarım",
          "Odalarda Ücretsiz Çay & Kahve Setup",
          "Günlük Ücretsiz Şişe Su İkramı",
          "Oda İçi Ütü ve Ütü Masası",
          "Sessiz Mini Bar",
          "Yüksek Hızlı Wi-Fi 6 İnternet",
          "24 Saat Kesintisiz Oda Servisi",
          "Yağmur Duş Başlıklı Mermer Banyo"
        ],
        shortDesc: "İş seyahatlerinizde sessiz bir çalışma masası, ücretsiz çay setup ve ergonomik şehir konaklaması."
      },
      {
        id: "superior-room",
        category: "superior",
        categoryLabel: "Superior Kategori",
        name: "Superior Konfor Oda",
        pricePerNight: 3250,
        formattedPrice: "3.250 ₺",
        capacity: "2 Misafir",
        bedType: "1 Geniş King Size Ortopedik Yatak",
        size: "43 m²",
        view: "Ferah Şehir & Cadde Cephesi",
        popular: true,
        tag: "En Çok Tercih Edilen İş & Seyahat Odası",
        image: "/assets/hotel/rooms/superior-1.jpg",
        images: [
          "/assets/hotel/rooms/superior-1.jpg",
          "/assets/hotel/rooms/superior-2.jpg",
          "/assets/hotel/rooms/room-detail-2.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "43 m² Geniş ve Ferah Yaşam Alanı",
          "Geniş King Yatak & Dinlenme Köşesi",
          "Odalarda Ücretsiz Çay Setup & Nespresso",
          "Günlük Ücretsiz Şişe Su İkramı",
          "Oda İçi Ütü ve Ütü Masası",
          "Sessiz Mini Bar",
          "Yüksek Hızlı Wi-Fi 6 İnternet",
          "24 Saat Kesintisiz Oda Servisi"
        ],
        shortDesc: "43 m²'lik geniş iç hacmi, modern tasarımı ve premium yatak konforuyla üst segment konaklama."
      },
      {
        id: "double-room",
        category: "double",
        categoryLabel: "Double Kategori",
        name: "Double Çift Kişilik Lüks Oda",
        pricePerNight: 3100,
        formattedPrice: "3.100 ₺",
        capacity: "2 Misafir",
        bedType: "1 Geniş Çift Kişilik King Size Yatak",
        size: "35 m²",
        view: "Şehir & Dinlendirici Cephe",
        popular: false,
        tag: "Çiftler İçin İdeal",
        image: "/assets/hotel/rooms/double-1.jpg",
        images: [
          "/assets/hotel/rooms/double-1.jpg",
          "/assets/hotel/rooms/room-detail-3.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "35 m² Özel Çift Kişilik Düzen",
          "Geniş King Size Ortopedik Yatak",
          "Odalarda Ücretsiz Çay Setup & Kettle",
          "Günlük Ücretsiz Şişe Su İkramı",
          "Oda İçi Ütü ve Ütü Masası",
          "Sessiz Mini Bar",
          "Yüksek Hızlı Wi-Fi 6 İnternet",
          "24 Saat Kesintisiz Oda Servisi"
        ],
        shortDesc: "Huzurlu ve sessiz bir atmosferde çiftler için tasarlanmış geniş yataklı konforlu konaklama."
      },
      {
        id: "twin-room",
        category: "twin",
        categoryLabel: "Twin Kategori",
        name: "Twin İki Ayrı Yataklı Oda",
        pricePerNight: 2950,
        formattedPrice: "2.950 ₺",
        capacity: "2 Misafir",
        bedType: "2 Ayrı Tek Kişilik Ortopedik Yatak",
        size: "41 m²",
        view: "Şehir Manzarası",
        popular: false,
        tag: "Arkadaş & İş Seyahati İçin",
        image: "/assets/hotel/rooms/standart-2.jpg",
        images: [
          "/assets/hotel/rooms/standart-2.jpg",
          "/assets/hotel/rooms/standart-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "41 m² Ferah İki Yataklı Alan",
          "2 Bağımsız Tek Kişilik Ortopedik Yatak",
          "Odalarda Ücretsiz Çay Setup",
          "Günlük Ücretsiz Şişe Su",
          "Oda İçi Ütü ve Ütü Masası",
          "Sessiz Mini Bar",
          "Yüksek Hızlı Wi-Fi 6 İnternet",
          "24 Saat Kesintisiz Oda Servisi"
        ],
        shortDesc: "41 m² alanda birlikte seyahat edenler için iki bağımsız konforlu yatak ve çalışma masası."
      },
      {
        id: "family-comfort",
        category: "aile",
        categoryLabel: "Aile Kategorisi",
        name: "Family Comfort Aile Odası",
        pricePerNight: 3950,
        formattedPrice: "3.950 ₺",
        capacity: "3 - 4 Misafir",
        bedType: "1 Çift Kişilik Yatak + 2 Ayrı Yatak",
        size: "47 m²",
        view: "Şehir & Bahçe Manzarası",
        popular: false,
        tag: "Geniş Aileler & Kayak Grupları",
        image: "/assets/hotel/rooms/family-1.jpg",
        images: [
          "/assets/hotel/rooms/family-1.jpg",
          "/assets/hotel/rooms/room-detail-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "47 m² Çok Yataklı Geniş Aile Mimarisi",
          "1 Çift Kişilik + 2 Ayrı Yatak Düzeni",
          "Odalarda Ücretsiz Çay Setup & Kettle",
          "Günlük Ücretsiz Şişe Su",
          "Oda İçi Ütü ve Ütü Masası",
          "Buzdolabı & Mini Bar",
          "Yüksek Hızlı Wi-Fi 6 İnternet",
          "24 Saat Kesintisiz Oda Servisi"
        ],
        shortDesc: "47 m² ferah yaşam alanıyla çocuklu ailelerin rahatlığı gözetilerek tasarlanmış geniş mimari."
      },
      {
        id: "jakuzili-suit",
        category: "jakuzi",
        categoryLabel: "Süit Kategori",
        name: "Jakuzili Executive & Balayı Süiti",
        pricePerNight: 5400,
        formattedPrice: "5.400 ₺",
        capacity: "2 Misafir",
        bedType: "1 Ultra-Lüks Super King Size Yatak",
        size: "53 m²",
        view: "Panoramik Çift Cephe & Erciyes",
        popular: true,
        tag: "Özel Jakuzili & VIP Servis",
        image: "/assets/hotel/rooms/jakuzi-1.jpg",
        images: [
          "/assets/hotel/rooms/jakuzi-1.jpg",
          "/assets/hotel/rooms/jakuzi-2.jpg",
          "/assets/hotel/rooms/jakuzi-detail.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "53 m² Özel Hidromasajlı Jakuzili Süit",
          "Ayrı Oturma Odası & Çalışma Salonu",
          "VIP Hoş Geldiniz İkram Sepeti & Setup",
          "Günlük Ücretsiz Şişe Su & Mini Bar",
          "Oda İçi Ütü ve Ütü Masası",
          "Odaya Ücretsiz Kahvaltı Servisi",
          "24 Saat Kesintisiz Oda Servisi",
          "Erciyes & Şehir Panoraması"
        ],
        shortDesc: "53 m² özel hidromasajlı jakuzi ve bağımsız salonuyla romantik ve üst düzey bir süit deneyimi."
      }
    ]
  },

  spaSection: {
    sectionBadge: "SAĞLIK & WELLNESS",
    title: "1500 m² Termal Ruhlu SPA & Kapalı Havuz",
    subtitle: "Erciyes'te geçirdiğiniz soğuk kayak gününün veya yoğun iş toplantılarının ardından sıcak suların, Türk hamamının ve fitness'ın huzuruna teslim olun.",
    stats: [
      { value: "09:00 - 23:00", label: "Hafta İçi Hizmet Saatleri" },
      { value: "09:00 - 21:00", label: "Hafta Sonu Hizmet Saatleri" },
      { value: "1500 m²", label: "Toplam SPA Alanı" },
      { value: "28-30°C", label: "Isıtmalı Yarı Olimpik Havuz" }
    ],
    tabs: [
      {
        id: "pool",
        title: "Yarı Olimpik Kapalı Havuz",
        subtitle: "Dört mevsim 29°C ısıtmalı hijyenik yüzme keyfi",
        description: "Yarı olimpik ölçülerdeki kapalı yüzme havuzumuz, gelişmiş ozon dezenfeksiyon sistemi ve 28-30°C aralığında tutulan ideal su ısısıyla hem spor yapmak hem de gevşemek isteyen misafirlerimiz için kesintisiz açıktır.",
        image: "/assets/hotel/spa/havuz-1.jpg",
        bulletPoints: [
          "Sabit 29°C su sıcaklığı",
          "Geniş şezlong dinlenme alanı",
          "Doğal ışık alan ferah mimari",
          "SPA Jakuzisi ve dinlenme köşesi"
        ]
      },
      {
        id: "hamam",
        title: "Geleneksel Türk Hamamı",
        subtitle: "Yüzyıllık Osmanlı arınma ritüelleri",
        description: "Doğal mermer göbek taşı, otantik kurna detayları ve sıcacık kubbesiyle Türk hamamımız, geleneksel kese-köpük masajı ve toksin atıcı ritüellerle vücudunuzu baştan aşağı yeniler.",
        image: "/assets/hotel/spa/hamam-1.jpg",
        images: ["/assets/hotel/spa/hamam-1.jpg", "/assets/hotel/spa/hamam-2.jpg"],
        bulletPoints: [
          "Geleneksel Kese & Köpük Masajı",
          "Isıtmalı Doğal Mermer Göbek Taşı",
          "Tarihi Türk Hamamı Mimarisi",
          "Özel Kurna ve Bitkisel Sabunlar"
        ]
      },
      {
        id: "fitness",
        title: "Spor & Ağırlık Salonu (Fitness)",
        subtitle: "Kardiyo cihazları, koşu bantları & ağırlık parkuru",
        description: "Tatiliniz veya iş seyahatiniz boyunca formunuzu koruyabileceğiniz kardiyo koşu parkuru, serbest ağırlık dambıllar ve kondisyon aletleriyle donatılmış spor salonumuz otel misafirlerimize tamamen ücretsizdir.",
        image: "/assets/hotel/spa/spa-1.jpg",
        bulletPoints: [
          "Gelişmiş Koşu Bantları & Kardiyo Parkuru",
          "Serbest Ağırlık ve Dambıl İstasyonları",
          "Esneme, Pilates ve Kondisyon Alanı",
          "Otel Misafirlerine Tamamen Ücretsiz Giriş"
        ]
      },
      {
        id: "vitamin",
        title: "SPA Vitamin Bar & Detoks",
        subtitle: "Taze sıkılmış meyve suları ve bitkisel kürler",
        description: "Havuz, sauna veya fitness seansları sonrasında vücudunuzun mineral dengesini sağlayan taze sıkılmış narenciye suları, aromatik bitki çayları ve sağlıklı detoks içecekleri.",
        image: "/assets/hotel/spa/vitamin-bar-1.jpg",
        bulletPoints: [
          "Taze Sıkılmış Meyve ve Sebze Suları",
          "Aromatik Bitki & Detoks Çayları",
          "Sağlıklı Protein & Mineral Kokteylleri",
          "Huzurlu Dinlenme Lounge Alanı"
        ]
      },
      {
        id: "sauna",
        title: "Fin Hamamı (Buhar) & Kuru Sauna",
        subtitle: "Doğal çam ahşabı ve okaliptüs aromaterapisi",
        description: "Kuzey çamından inşa edilmiş geleneksel kuru Fin saunamız kaslarınızı gevşetirken, nem oranı yüksek okaliptüs Fin buhar odamız solunum yollarınızı ferahlatır ve gözeneklerinizi açar.",
        image: "/assets/hotel/spa/spa-1.jpg",
        bulletPoints: [
          "85-90°C Ayarlı Kuru Fin Saunası",
          "Fin Hamamı / Okaliptüs Buhar Odası",
          "Şok Duşları ve Kar Çeşmesi",
          "Detoks İçecek Barı"
        ]
      },
      {
        id: "gelin",
        title: "Özel Gelin Hamamı",
        subtitle: "Kına ve kutlamalar için özel müzikli merasim",
        description: "Gelin hamamı geleneklerini modern lüksle buluşturan özel salonumuz; müzikli eğlence, özel ikram tepsileri ve canlandırıcı ritüellerle unutulmaz anlar yaşatır.",
        image: "/assets/hotel/spa/gelin-hamami.jpg",
        video: "/assets/hotel/videos/gelin-hamami.mp4",
        bulletPoints: [
          "Özel Müzik ve Eğlence Düzeni",
          "Geleneksel Kına ve İkram Tepsileri",
          "Kişiye Özel Kese & Köpük Masajı",
          "Canlı Video Turuyla Salonu İnceleme"
        ]
      },
      {
        id: "massage",
        title: "Uzak Doğu & Medikal Masajlar",
        subtitle: "Sertifikalı yerli ve yabancı terapistler",
        description: "Bali masajından klasik İsveç masajına, aromaterapiden spor sonrası derin doku masajına kadar zengin masaj menümüzle tüm kas tutulmalarınızdan kurtulun.",
        image: "/assets/hotel/spa/spa-2.jpg",
        bulletPoints: [
          "Bali & Thai Masajı",
          "Kayak Sonrası Derin Doku Terapisi",
          "Sıcak Volkanik Taş Masajı",
          "Çiftler İçin Özel VIP Masaj Odası"
        ]
      }
    ],
    videoTourButton: "Gelin Hamamı Canlı Video Turunu İzle",
    infoLineButton: "SPA Bilgi Hattı",
    hoursBadge: "H.İçi: 09:00 - 23:00 • H.Sonu: 09:00 - 21:00"
  },

  skiSection: {
    sectionBadge: "KIŞ TURİZMİ & SPOR",
    title: "Erciyes Kayak Merkezi'ne 18 km: Kar Tatilinin En Konforlu Hali",
    subtitle: "Dağın dondurucu soğuğunda kalmak yerine, akşamları şehrin sıcaklığında, 1500 m² SPA ve lezzet dolu bir otelde konaklayın.",
    distance: "18 km",
    duration: "Yaklaşık 20 Dakika",
    distanceLabel: "Erciyes Pistlerine Mesafe",
    durationLabel: "Ulaşım Süresi",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1400&q=80",
    advantages: [
      {
        title: "Otelden Pistlere VIP Servis",
        desc: "Kayak sezonu boyunca otelimizin önünden Erciyes Tekir Kapı ve Develi Kapı pistlerine düzenli servis imkanı."
      },
      {
        title: "Isıtmalı Kayak ve Bot Odası",
        desc: "Kayak ve snowboard takımlarınızı güvenle bırakabileceğiniz, sabah sıcacık botlarla çıkmanızı sağlayan kurutma sistemleri."
      },
      {
        title: "Avantajlı Skipass ve Ekipman Kiralama",
        desc: "Pistlerde sıra beklemeden Skipass kartınızı resepsiyondan temin edin; anlaşmalı kayak okullarından indirimli kiralama fırsatı."
      },
      {
        title: "Kayak Sonrası (Après-Ski) Şömineli Lobi",
        desc: "Dağdan döndüğünüzde lobide sıcak salepli, taze fırın kurabiyeli ikramlar ve dinlendirici müzik eşliğinde yorgunluk atın."
      }
    ],
    shuttleButton: "Kayak Servisi & Transfer Bilgisi Al"
  },

  meetingsSection: {
    sectionBadge: "İŞ DÜNYASI & ETKİNLİK",
    title: "Prestijli Toplantı ve Kongre Salonları",
    subtitle: "15 kişiden 500 kişiye kadar; kurumsal kongreler, lansmanlar, seminerler, düğün ve gala yemekleri için kusursuz organizasyon.",
    contactForHalls: "Toplantı & Etkinlik Teklifi Al",
    halls: [
      {
        id: "kayseri-ballroom",
        name: "Kayseri Balo Salonu",
        capacity: "450 - 500 Kişi",
        area: "520 m²",
        type: "Balo / Kongre / Düğün & Gala",
        image: "/assets/hotel/halls/kayseri/kayseri-1.jpg",
        gallery: [
          "/assets/hotel/halls/kayseri/kayseri-1.jpg",
          "/assets/hotel/halls/kayseri/kayseri-2.jpg",
          "/assets/hotel/halls/kayseri/kayseri-3.jpg",
          "/assets/hotel/halls/kayseri/kayseri-4.jpg",
          "/assets/hotel/halls/kayseri/kayseri-5.jpg",
          "/assets/hotel/halls/kayseri/kayseri-6.jpg",
          "/assets/hotel/halls/kayseri/kayseri-7.jpg",
          "/assets/hotel/halls/kayseri/kayseri-8.jpg",
          "/assets/hotel/halls/kayseri/kayseri-9.jpg"
        ],
        video: "/assets/hotel/videos/kayseri-salonu.mp4",
        features: ["Kolonsuz Yüksek Tavan & Görkemli Sahne", "Lazer Projeksiyon & Çift Dev LED Ekran", "Gelişmiş Işık & Robot Sistemleri", "Geniş Fuaye & Kokteyl Alanı"]
      },
      {
        id: "erciyes-ballroom",
        name: "Erciyes Balo & Kongre Salonu",
        capacity: "350 - 400 Kişi",
        area: "420 m²",
        type: "Tiyatro / Gala / Sınıf Düzeni",
        image: "/assets/hotel/halls/erciyes/erciyes-1.jpg",
        gallery: [
          "/assets/hotel/halls/erciyes/erciyes-1.jpg"
        ],
        features: ["Kolonsuz Yüksek Tavan", "Lazer Projeksiyon & Ses Sistemi", "Simültane Çeviri Kabinleri", "Özel Fuaye Alanı"]
      },
      {
        id: "yelken-hall",
        name: "Yelken Toplantı Salonu",
        capacity: "120 - 150 Kişi",
        area: "160 m²",
        type: "Seminer / Lansman / U Masa",
        image: "/assets/hotel/halls/yelken/yelken-1.jpg",
        gallery: [
          "/assets/hotel/halls/yelken/yelken-1.jpg",
          "/assets/hotel/halls/yelken/yelken-2.jpg",
          "/assets/hotel/halls/yelken/yelken-3.jpg",
          "/assets/hotel/halls/yelken/yelken-4.jpg",
          "/assets/hotel/halls/yelken/yelken-5.jpg",
          "/assets/hotel/halls/yelken/yelken-6.jpg",
          "/assets/hotel/halls/yelken/yelken-7.jpg"
        ],
        features: ["Gün Işığı Alan Ferah Tasarım", "Ergonomik Konferans Koltukları", "Kesintisiz Yüksek Hızlı Fiber İnternet", "Kahve Molası Catering Hizmeti"]
      },
      {
        id: "efes-hall",
        name: "Efes Toplantı & Seminer Salonu",
        capacity: "80 - 100 Kişi",
        area: "110 m²",
        type: "Sınıf / Blok / Workshop",
        image: "/assets/hotel/halls/efes/efes-1.jpg",
        gallery: [
          "/assets/hotel/halls/efes/efes-1.jpg",
          "/assets/hotel/halls/efes/efes-2.jpg",
          "/assets/hotel/halls/efes/efes-3.jpg",
          "/assets/hotel/halls/efes/efes-4.jpg",
          "/assets/hotel/halls/efes/efes-5.jpg",
          "/assets/hotel/halls/efes/efes-6.jpg",
          "/assets/hotel/halls/efes/efes-7.jpg"
        ],
        features: ["Akustik Ses Yalıtımı", "Ultra HD Projeksiyon Sistemi", "Modüler Masa Düzenleri", "Özel İkram Servisi"]
      },
      {
        id: "kapadokya-hall",
        name: "Kapadokya Toplantı Salonu",
        capacity: "60 - 80 Kişi",
        area: "95 m²",
        type: "Eğitim / Seminer / Kurumsal",
        image: "/assets/hotel/halls/kapadokya/kapadokya-1.jpg",
        gallery: [
          "/assets/hotel/halls/kapadokya/kapadokya-1.jpg",
          "/assets/hotel/halls/kapadokya/kapadokya-2.jpg",
          "/assets/hotel/halls/kapadokya/kapadokya-3.jpg",
          "/assets/hotel/halls/kapadokya/kapadokya-4.jpg",
          "/assets/hotel/halls/kapadokya/kapadokya-5.jpg",
          "/assets/hotel/halls/kapadokya/kapadokya-6.jpg",
          "/assets/hotel/halls/kapadokya/kapadokya-7.jpg"
        ],
        features: ["İnteraktif Akıllı Tahta", "Ses ve Görüntü Otomasyonu", "Hızlı Wi-Fi 6 Bağlantısı", "Özel Yönetim İkramı"]
      },
      {
        id: "sini-hall",
        name: "Sini Salonu & Ziyafet Alanı",
        capacity: "150 Kişi",
        area: "200 m²",
        type: "Özel Davet & Ziyafet Düzeni",
        image: "/assets/hotel/dining/sini-restaurant-750.jpg",
        video: "/assets/hotel/videos/sini-salonu.mp4",
        features: ["Özel Ziyafet & Düğün Yemeği Düzeni", "Canlı Müzik ve Ses Altyapısı", "Usta Şeflerden Gurme Menüler", "VIP Protokol Servisi"]
      }
    ]
  },

  diningSection: {
    sectionBadge: "GASTRONOMİ & RESTORAN",
    title: "Geleneksel Kayseri Tatları & 750 Kişilik Sini Restaurant",
    subtitle: "Usta şeflerimizin yorumuyla 07:00 - 10:00 zengin açık büfe kahvaltı, gece 00:00'a kadar akşam yemeği ve 7/24 oda servisi.",
    image: "/assets/hotel/dining/sini-restaurant-750.jpg",
    capacityBadge: "750 Kişi Kapasiteli Dev Restoran",
    hours: {
      breakfast: "07:00 - 10:00 (Açık Büfe)",
      dinner: "Gece 00:00'a Kadar Servis",
      roomService: "24 Saat Kesintisiz (7/24)"
    },
    breakfastGallery: [
      "/assets/hotel/dining/breakfast/breakfast-1.jpg",
      "/assets/hotel/dining/breakfast/breakfast-2.jpg",
      "/assets/hotel/dining/breakfast/breakfast-3.jpg",
      "/assets/hotel/dining/breakfast/breakfast-4.jpg",
      "/assets/hotel/dining/breakfast/breakfast-5.jpg",
      "/assets/hotel/dining/breakfast/breakfast-6.jpg",
      "/assets/hotel/dining/breakfast/breakfast-7.jpg",
      "/assets/hotel/dining/breakfast/breakfast-8.jpg",
      "/assets/hotel/dining/breakfast/breakfast-9.jpg",
      "/assets/hotel/dining/breakfast/breakfast-10.jpg",
      "/assets/hotel/dining/breakfast/breakfast-11.jpg",
      "/assets/hotel/dining/breakfast/breakfast-12.jpg"
    ],
    alacarteGallery: [
      "/assets/hotel/dining/alacarte/alacarte-1.jpg",
      "/assets/hotel/dining/alacarte/alacarte-2.jpg",
      "/assets/hotel/dining/alacarte/alacarte-3.jpg",
      "/assets/hotel/dining/alacarte/alacarte-4.jpg",
      "/assets/hotel/dining/alacarte/alacarte-5.jpg"
    ],
    features: [
      {
        title: "Sini Restaurant (750 Kişi Kapasite)",
        desc: "Kayseri'nin en yüksek ağırlama kapasitelerinden biriyle; dev kurumsal yemekler, düğün, iftar ve gala organizasyonları için eksiksiz altyapı."
      },
      {
        title: "Zengin Açık Büfe Kahvaltı (07:00 - 10:00)",
        desc: "07:00 - 10:00 saatleri arasında hakiki Kayseri pastırması, su böreği, ev yapımı reçeller, zengin peynir büfesi ve sıcak unlu mamullerle enerji dolu sabahlar."
      },
      {
        title: "La Brasserie A La Carte & 7/24 Oda Servisi",
        desc: "Gece 00:00'a kadar akşam yemeği servisi ve günün her saati odanızın konforunda 24 saat kesintisiz oda servisi lezzetleri."
      }
    ],
    bookWithBreakfast: "Kahvaltı Dahil Rezervasyon",
    reserveTable: "Restoran Masa Rezervasyonu",
    tabBreakfast: "Açık Büfe Kahvaltı",
    tabSini: "Sini Restaurant",
    tabAlacarte: "A La Carte Restoran",
    modes: {
      sini: {
        title: "750 Kişilik Sini Restaurant",
        subtitle: "Kayseri'nin En Büyük Davet ve Ziyafet Salonu",
        badge: "750 Kişi Kapasite"
      },
      breakfast: {
        title: "Zengin Kayseri Açık Büfe Kahvaltı",
        subtitle: "Hakiki Pastırma, Sıcak Su Böreği & 100+ Çeşit",
        badge: "12 Fotoğraf"
      },
      alacarte: {
        title: "La Brasserie A La Carte",
        subtitle: "Seçkin Dünya ve Kayseri Mutfağı",
        badge: "5 Fotoğraf"
      }
    }
  },

  gallerySection: {
    sectionBadge: "OTELİMİZDEN GERÇEK KARELER",
    title: "City One Hotel Fotoğraf & Video Galerisi",
    subtitle: "Erciyes Dağı eteklerinde yükselen zarafet; salonlarımız, odalarımız, 1500 m² SPA'mız ve zengin gastronomi dünyamızın gerçek görüntüleri.",
    zoomLabel: "Büyüt",
    watchLabel: "Canlı Video",
    categories: {
      all: "Tüm Galeri",
      exterior: "Dış Cephe & Lobi",
      rooms: "Odalar & Süitler",
      halls: "Balo & Kongre Salonları",
      spa: "SPA, Havuz & Hamam",
      dining: "Restoran & Açık Büfe",
      videos: "Canlı Video Turları"
    }
  },

  reviewsSection: {
    sectionBadge: "MİSAFİR DENEYİMLERİ",
    title: "Gerçek Misafirlerimizden Samimi Yorumlar",
    subtitle: "Kopya veya sahte yorumlar yerine, Erciyes kayak tatilcilerinin ve iş insanlarının gerçek deneyimleri.",
    ratingSummary: {
      average: "4.1",
      outOf: "5",
      totalVerified: "3.200+ Google Değerlendirmesi",
      cleanliness: "4.2",
      location: "4.5",
      service: "4.1",
      comfort: "4.0"
    },
    labels: {
      cleanliness: "Temizlik",
      location: "Konum & Ulaşım",
      service: "Hizmet & İlgi",
      comfort: "Oda Konforu",
      googleScore: "Google Değerlendirmesi",
      verifiedGuest: "Doğrulanmış Misafir"
    },
    reviews: [
      {
        id: "rev-1",
        name: "Ahmet Serdar K.",
        role: "İş İnsanı - İstanbul",
        date: "Ekim 2026",
        rating: 5,
        title: "Kayseri'deki vazgeçilmez iş durağım",
        comment: "Organize Sanayi Bölgesi'ndeki toplantılarım için yılda en az 6-7 kez Kayseri'ye gelirim. City One'ın sessiz odaları, hızlı Wi-Fi bağlantısı ve güler yüzlü personeli gerçekten 4 yıldızın çok ötesinde. Sabah kahvaltısındaki pastırma ve taze börekler harika.",
        roomStayed: "Superior Standart Oda"
      },
      {
        id: "rev-2",
        name: "Elif & Murat Y.",
        role: "Aile Kayak Tatili - Ankara",
        date: "Ocak 2026",
        rating: 5,
        title: "Erciyes tatilimiz için en doğru karardı",
        comment: "Erciyes dağındaki oteller yerine City One'da kalmayı tercih ettik ve çok memnun kaldık. 18 km mesafe arabayla 18-20 dakika sürdü. Kayak sonrası otelin 1500 m² SPA'sına girip sıcak havuzda ve saunada dinlenmek paha biçilemezdi. Aile odası 2 çocuğumuzla çok ferahtı.",
        roomStayed: "Family Comfort Aile Odası"
      },
      {
        id: "rev-3",
        name: "Dr. Selim Tekinalp",
        role: "Tıp Kongresi Katılımcısı - İzmir",
        date: "Eylül 2026",
        rating: 5,
        title: "Mükemmel kongre organizasyonu ve SPA",
        comment: "Otelde düzenlenen ulusal medikal sempozyum vesilesiyle 3 gece konakladım. Erciyes Salonu'nun ses ve havalandırma düzeni kusursuzdu. Her gün seminer sonrası yarı olimpik kapalı havuzda yüzdüm. Şehir merkezine yürüme mesafesinde olması da büyük avantaj.",
        roomStayed: "Deluxe Erciyes Manzaralı Oda"
      },
      {
        id: "rev-4",
        name: "Merve Çelik",
        role: "Hafta Sonu Kaçamağı - Adana",
        date: "Kasım 2026",
        rating: 5,
        title: "Corner Süit ve Jakuzi harikaydı",
        comment: "Evlilik yıl dönümümüz için Executive Corner Süit kiraladık. Odanın iki cepheli Erciyes manzarası ve jakuzisi çok romantikti. Otel personeline sürpriz karşılama meyve sepeti için çok teşekkür ederiz. Kesinlikle tekrar geleceğiz.",
        roomStayed: "Executive Corner Süit"
      }
    ]
  },

  faqSection: {
    sectionBadge: "SIKÇA SORULAN SORULAR",
    title: "Aklınıza Takılan Her Şey",
    subtitle: "Konaklamanız öncesinde bilmek isteyebileceğiniz tüm detaylar.",
    items: [
      {
        q: "Giriş (Check-in) ve Çıkış (Check-out) saatleri nedir?",
        a: "Otelimize giriş saati 14:00, çıkış saati ise 12:00'dir. Müsaitlik durumuna bağlı olarak erken giriş veya geç çıkış talepleri memnuniyetle karşılanmaktadır."
      },
      {
        q: "Erciyes Kayak Merkezi'ne ulaşım ve transfer nasıl sağlanıyor?",
        a: "Otelimiz Erciyes Kayak Merkezi pistlerine yalnızca 18 km uzaklıktadır. Kayak sezonu boyunca her sabah otelimizden pistlere, akşamüstü ise dağdan otele düzenli VIP transfer servisimiz mevcuttur. Resepsiyondan rezervasyon yaptırabilirsiniz."
      },
      {
        q: "1500 m² SPA ve Yarı Olimpik Havuz kullanımı ücretli mi?",
        a: "Hayır. Konaklayan tüm misafirlerimiz kapalı havuz, Türk hamamı, Fin saunası, buhar odası ve fitness salonundan ücretsiz olarak yararlanabilir. Yalnızca özel masaj ve kese-köpük terapileri ek ücrete tabidir."
      },
      {
        q: "Otopark ve vale hizmeti var mı?",
        a: "Evet. 24 saat güvenlik kameralı kapalı otoparkımız ve profesyonel vale hizmetimiz tüm otel misafirlerimiz için tamamen ücretsizdir."
      },
      {
        q: "Fiyatlara kahvaltı dahil mi?",
        a: "Evet. Sitemizden yapılan tüm rezervasyonlarda yerel Kayseri lezzetlerinin de yer aldığı zengin açık büfe kahvaltımız fiyata dahildir."
      }
    ]
  },

  contactSection: {
    sectionBadge: "BİZE ULAŞIN & KONUM",
    title: "Kayseri'nin Kalbinde Kolay Ulaşım",
    subtitle: "Havalimanı, tren garı, sanayi bölgeleri ve alışveriş merkezlerine birkaç dakikalık mesafedeyiz.",
    addressTitle: "Adresimiz",
    addressText: "Eski Sanayi Bölgesi 2. Cadde No: 6002, 38010 Kocasinan / Kayseri",
    phoneTitle: "Telefon & İletişim Hatları",
    phones: [
      {
        label: "Otel Resepsiyon & Rezervasyon",
        number: "0352 207 00 00",
        formatted: "+90 (352) 207 00 00",
        href: "tel:+903522070000",
        subtext: "7/24 Kesintisiz Resepsiyon & Danışma",
        isWhatsapp: false
      },
      {
        label: "WhatsApp Rezervasyon Hattı",
        number: "0506 752 02 86",
        formatted: "+90 (506) 752 02 86",
        href: "https://wa.me/905067520286?text=Merhaba,%20City%20One%20Hotel%20hakk%C4%B1nda%20bilgi%20ve%20rezervasyon%20almak%20istiyorum.",
        subtext: "Hızlı Yanıt & Anında Destek",
        isWhatsapp: true
      }
    ],
    emailTitle: "E-Posta İletişim",
    emails: ["info@cityonekayseri.com", "rezervasyon@cityonekayseri.com"],
    hoursTitle: "Çalışma & Hizmet Saatlerimiz",
    hoursText: "Resepsiyon & Danışma: 7 Gün 24 Saat Kesintisiz",
    hoursList: [
      { label: "Resepsiyon & Karşılama", time: "24 Saat Kesintisiz (7/24)" },
      { label: "Oda Servisi", time: "24 Saat Kesintisiz (7/24)" },
      { label: "SPA, Havuz & Hamam", time: "Hafta İçi: 09:00 - 23:00 • Hafta Sonu: 09:00 - 21:00" },
      { label: "Açık Büfe Kahvaltı", time: "07:00 - 10:00 (Sini Restaurant)" },
      { label: "Akşam Yemeği", time: "Gece 00:00'a Kadar A La Carte" }
    ],
    privilegesTitle: "Konaklamanıza Dahil Ücretsiz Hizmetler",
    privileges: [
      "Odalarda Ücretsiz Çay & Kahve Setup",
      "Günlük Ücretsiz Şişe Su İkramı",
      "Odalarda Ütü ve Ütü Masası",
      "Ücretsiz Vale & Güvenlikli Kapalı Otopark",
      "Yarı Olimpik Isıtmalı Kapalı Yüzme Havuzu & Jakuzi",
      "Geleneksel Türk Hamamı, Fin Hamamı (Buhar) & Sauna",
      "Tam Donanımlı Spor & Ağırlık Salonu (Fitness)",
      "Yüksek Hızlı Wi-Fi 6 İnternet Bağlantısı"
    ],
    quickForm: {
      title: "Hızlı İletişim & Talep Formu",
      subtitle: "Toplantı, kongre, grup rezervasyonu veya özel sorularınız için ekibimize anında mesaj iletin.",
      successMessage: "Mesajınız alındı! City One Hotel misafir ilişkileri ekibimiz en kısa sürede sizinle iletişime geçecektir.",
      namePlaceholder: "Adınız Soyadınız",
      phonePlaceholder: "Telefon Numaranız",
      emailPlaceholder: "E-Posta Adresiniz",
      messagePlaceholder: "Mesajınız veya konaklama talebiniz...",
      submitButton: "Mesajı Gönder"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.985651817743!2d35.47467657647228!3d38.72957197176044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1216503c72b1%3A0xe541da4fe08169d2!2sCity%20One%20Hotel!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
  },

  newsletter: {
    badge: "CITY ONE PRIVILEGE CLUB",
    title: "Özel Fırsatlardan & Erciyes Sezonundan İlk Siz Haberdar Olun",
    subtitle: "Erken rezervasyon indirimleri, 1500 m² SPA paketleri ve zengin Kayseri gastronomi etkinlikleri e-postanıza gelsin.",
    placeholder: "E-posta adresinizi giriniz...",
    button: "Bültene Kaydol",
    privacyNotice: "Spam göndermiyoruz. Bilgileriniz KVKK kapsamında korunur ve dilediğiniz an ayrılabilirsiniz.",
    successTitle: "Aramıza Hoş Geldiniz!",
    successMessage: "E-posta adresiniz başarıyla kaydedildi. Özel fırsatlar ve sezonluk duyurular gelen kutunuza iletilecektir.",
    resetButton: "Farklı bir e-posta kaydet"
  },

  footer: {
    about: "City One Hotel Kayseri, modern mimarisi, 1500 m² termal ruhlu SPA merkezi ve Erciyes Kayak Merkezi'ne 18 km'lik yakınlığıyla 4 yıldızlı seçkin bir konaklama standardı sunar.",
    quickLinksTitle: "Hızlı Bağlantılar",
    roomsLinksTitle: "Konaklama",
    privilegesTitle: "Ayrıcalıklar",
    skiPerkTitle: "18 km Erciyes Servisi",
    skiPerkDesc: "Otelden kayak pistlerine düzenli transfer & ısıtmalı kayak odası.",
    spaPerkTitle: "1500 m² SPA Alanı",
    spaPerkDesc: "Otel misafirlerimize kapalı havuz, hamam ve sauna ücretsizdir.",
    legalLinksTitle: "Kurumsal & Yasal",
    copyright: "© 2026 City One Hotel Kayseri. Tüm hakları saklıdır.",
    legalNotice: "Kayseri Ticaret Odası Sicil No: 41285. Fiyatlarımıza KDV dahildir.",
    developerBadge: "Production-Ready Architecture | React 18 & Tailwind CSS"
  },

  bookingModal: {
    step1Title: "Rezervasyon Özeti & Bilgiler",
    step2Title: "Rezervasyon Talebiniz Alındı!",
    guestInfoLabel: "Misafir İletişim Bilgileri",
    fullNamePlaceholder: "Adınız ve Soyadınız",
    phonePlaceholder: "05XX XXX XX XX",
    emailPlaceholder: "ornek@eposta.com",
    notesPlaceholder: "Özel İstekleriniz (örn: Yüksek kat, Erciyes manzarası, bebek yatağı)",
    pricingBreakdown: "Fiyat Dağılımı",
    nightUnit: "gece",
    subtotal: "Oda Ücreti",
    taxes: "KDV & Turizm Vergisi (Dahil)",
    totalPrice: "Toplam Ödenecek Tutar",
    perNightRate: "Gecelik Fiyat",
    datesSummary: "Seçilen Tarihler",
    guestsSummary: "Misafir Sayısı",
    confirmButton: "Rezervasyonu Onayla",
    cancelButton: "Kapat",
    successMessage: "Talebiniz City One Hotel rezervasyon ekibine iletildi. Yetkilimiz en kısa sürede sizinle iletişime geçecektir.",
    reservationCodeLabel: "Rezervasyon Takip Kodu",
    returnHomeButton: "Ana Sayfaya Dön",
    whatsappConfirmButton: "WhatsApp ile Onay Al"
  },

  floatingActions: {
    whatsappTooltip: "WhatsApp Hızlı Rezervasyon",
    whatsappMessage: "Merhaba, City One Hotel Kayseri için rezervasyon ve bilgi almak istiyorum.",
    phoneTooltip: "Hemen Ara: +90 (352) 207 00 00",
    backToTopTooltip: "Yukarı Çık"
  }
};
