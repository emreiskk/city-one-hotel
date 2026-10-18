/**
 * City One Hotel Kayseri - Single Source of Truth
 * Tüm kurumsal metinler, oda fiyatları, özellikler ve iletişim verileri tek bir merkezden yönetilir.
 * Bileşenler içinde hardcoded Türkçe metin yer almaz.
 */

export const siteContent = {
  hotel: {
    name: "City One Hotel",
    city: "Kayseri",
    stars: 4,
    starLabel: "4 Yıldızlı Lüks Şehir & Kayak Oteli",
    tagline: "Erciyes'in Eteklerinde, Kayseri'nin Kalbinde Kusursuz Bir Konaklama",
    slogan: "İş Seyahatlerinizde Prestij, Erciyes Tatilinizde Sıcak Bir Yuva",
    phone: "+90 (352) 207 00 00",
    phoneRaw: "+903522070000",
    reservationPhone: "+90 (506) 752 02 86",
    whatsapp: "+90 (506) 752 02 86",
    whatsappRaw: "905067520286",
    email: "info@cityonekayseri.com",
    reservationEmail: "rezervasyon@cityonekayseri.com",
    address: "Eski Sanayi Bölgesi 2. Cadde No: 6002, Kocasinan / Kayseri",
    locationHighlights: "Kayseri Havalimanı'na 6 km, Forum Kayseri'ye 5 dk, Erciyes Kayak Merkezi'ne 18 km",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    rating: {
      score: "9.2",
      totalReviews: "1.480+",
      label: "Mükemmel Misafir Deneyimi",
      googleScore: "4.6 / 5.0"
    }
  },

  navigation: [
    { id: "rooms", label: "Odalar & Süitler", href: "#rooms" },
    { id: "spa", label: "SPA & Havuz", href: "#spa" },
    { id: "ski", label: "Erciyes Transfer", href: "#ski" },
    { id: "meetings", label: "Toplantı & Kongre", href: "#meetings" },
    { id: "dining", label: "Gastronomi", href: "#dining" },
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
      "18 km Erciyes Kayak Transferi",
      "1500 m² Termo-Mineral SPA",
      "Zengin Kayseri Açık Büfe Kahvaltı",
      "Ücretsiz Kapalı Otopark & Vale"
    ],
    stats: [
      { value: "18 km", label: "Erciyes Kayak Pisti" },
      { value: "1500 m²", label: "Kapsamlı SPA Alanı" },
      { value: "120+", label: "Konforlu Oda & Süit" },
      { value: "9.2 / 10", label: "Misafir Memnuniyeti" }
    ],
    backgroundImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
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
        title: "1500 m² SPA & Yarı Olimpik Havuz",
        description: "Günün yorgunluğunu ısıtmalı kapalı havuzumuzda atın. Geleneksel Türk hamamı, Fin saunası, buhar odası ve uzman masöz kadromuz ile arının.",
        icon: "Waves",
        highlight: "Yarı Olimpik Havuz"
      },
      {
        id: "dining",
        title: "Kayseri Lezzetleri & Gurme Mutfak",
        description: "Geleneksel Kayseri pastırması, su böreği ve zengin açık büfe kahvaltı; akşamları ise Türk ve Dünya mutfağından seçkin A La Carte menüler.",
        icon: "Utensils",
        highlight: "Zengin Açık Büfe"
      },
      {
        id: "business",
        title: "Kongre & Toplantı Salonları",
        description: "Son teknoloji ses ve görüntü sistemleriyle donatılmış, 15 kişiden 400 kişiye kadar ağırlama kapasiteli çok amaçlı salonlar.",
        icon: "Briefcase",
        highlight: "400 Kişi Kapasite"
      },
      {
        id: "location",
        title: "Merkezi Konum & Ulaşım Kolaylığı",
        description: "Kayseri Havalimanı (ASR)'na 10 dakika, tren garına 3 dakika, Kayseri Organize Sanayi ve serbest bölge bağlantı yollarına doğrudan erişim.",
        icon: "Compass",
        highlight: "Havalimanına 10 Dk"
      },
      {
        id: "parking",
        title: "Ücretsiz Kapalı Otopark & Vale",
        description: "Konaklamanız boyunca 24 saat güvenlik kameralarıyla korunan kapalı otoparkımız ve profesyonel vale hizmetimiz tamamen ücretsizdir.",
        icon: "ShieldCheck",
        highlight: "24/7 Güvenlik"
      }
    ]
  },

  roomsSection: {
    sectionBadge: "KONAKLAMA SEÇENEKLERİ",
    title: "Ferah, Sessiz ve Çağdaş Odalar",
    subtitle: "En iyi fiyat garantisi ve şeffaf fiyatlandırma anlayışımızla; her ayrıntısı üstün konforunuz ve huzurlu bir dinlenme deneyimi için tasarlanmış odalar.",
    categories: [
      { id: "all", label: "Tüm Odalar" },
      { id: "standart", label: "Standart Odalar" },
      { id: "aile", label: "Aile Odaları" },
      { id: "suit", label: "Süit Odalar" }
    ],
    pricingNote: "Fiyatlara zengin açık büfe kahvaltı, 1500 m² SPA kullanımı ve KDV dahildir.",
    rooms: [
      {
        id: "standart-tek-cift",
        category: "standart",
        categoryLabel: "Standart Kategori",
        name: "Superior Standart Şehir Manzaralı Oda",
        pricePerNight: 2750,
        formattedPrice: "2.750 ₺",
        capacity: "1 - 2 Misafir",
        bedType: "1 Çift Kişilik King Size veya 2 Tek Kişilik Yatak",
        size: "28 m²",
        view: "Şehir / Cadde Manzarası",
        popular: false,
        tag: "En Çok Tercih Edilen İş Odası",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
        amenities: [
          "Yüksek Hızlı Wi-Fi 6",
          "Ortopedik Yatak & Yastık Menüsü",
          "43' Smart 4K TV & Uydu Kanalları",
          "Yağmur Duş Başlıklı Mermer Banyo",
          "Çay & Kahve İkram Seti",
          "Laptop Uyumlu Dijital Kasa",
          "Sessiz Mini Bar"
        ],
        shortDesc: "İş seyahatlerinizde sessiz bir çalışma masası, ergonomik konfor ve ferah şehir manzarası."
      },
      {
        id: "standart-erciyes",
        category: "standart",
        categoryLabel: "Standart Kategori",
        name: "Deluxe Erciyes Manzaralı Oda",
        pricePerNight: 3150,
        formattedPrice: "3.150 ₺",
        capacity: "2 Misafir",
        bedType: "1 Geniş King Size Yatak",
        size: "32 m²",
        view: "Panoramik Erciyes Dağı Manzarası",
        popular: true,
        tag: "Erciyes Manzarası Garantili",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        amenities: [
          "Erciyes Dağı Panoramik Manzara",
          "Geniş Oturma Köşesi",
          "Nespresso Kahve Makinesi",
          "Bornoz & Terlik Seti",
          "Yüksek Hızlı Wi-Fi",
          "Lüks Buklet Ürünleri",
          "Merkezi İklimlendirme"
        ],
        shortDesc: "Sabahları karlı Erciyes silüetine uyanmak isteyen çiftler ve kayak tutkunları için eşsiz seçenek."
      },
      {
        id: "aile-comfort",
        category: "aile",
        categoryLabel: "Aile Kategorisi",
        name: "Family Comfort Aile Odası",
        pricePerNight: 3850,
        formattedPrice: "3.850 ₺",
        capacity: "3 - 4 Misafir",
        bedType: "1 Çift Kişilik Yatak + 2 Tek Kişilik Ayrı Yatak",
        size: "44 m²",
        view: "Şehir & Bahçe Manzarası",
        popular: false,
        tag: "Geniş Aileler İçin İdeal",
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
        amenities: [
          "Bölmeli Yaşam Alanı",
          "2 Ayrı LED TV",
          "Geniş Aile Banyosu",
          "Çocuk Yatağı Ekleme İmkanı (Ücretsiz)",
          "Buzdolabı & Su Isıtıcı",
          "Özel Bagaj & Kayak Saklama Alanı",
          "Ses Yalıtımlı Akustik Kapılar"
        ],
        shortDesc: "Çocuklu ailelerin rahatlığı gözetilerek iki bağımsız yatak alanıyla tasarlanmış ferah mimari."
      },
      {
        id: "corner-suit",
        category: "suit",
        categoryLabel: "Süit Kategori",
        name: "Executive Corner Süit",
        pricePerNight: 5200,
        formattedPrice: "5.200 ₺",
        capacity: "2 - 3 Misafir",
        bedType: "1 Ultra-Lüks Super King Size Yatak",
        size: "55 m²",
        view: "Panoramik Çift Cephe & Erciyes",
        popular: true,
        tag: "Özel Jakuzili & VIP Servis",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        amenities: [
          "Özel Hidromasajlı Jakuzi",
          "Ayrı Oturma Odası & Çalışma Salonu",
          "VIP Hoş Geldiniz İkram Sepeti",
          "Odaya Ücretsiz Kahvaltı Servisi İmkanı",
          "Erciyes & Şehir Panoraması",
          "Özel Çamaşır / Ütü İndirimi",
          "Akıllı Oda Otomasyonu"
        ],
        shortDesc: "Kayseri'de üst düzey konfor arayan yöneticiler ve balayı çiftleri için hidromasajlı jakuzi ve özel salon."
      },
      {
        id: "presidential-suit",
        category: "suit",
        categoryLabel: "Süit Kategori",
        name: "Presidential City One Süit",
        pricePerNight: 6900,
        formattedPrice: "6.900 ₺",
        capacity: "2 - 4 Misafir",
        bedType: "King Bed + Özel Misafir Odası",
        size: "82 m²",
        view: "360 Derece Erciyes & Kayseri",
        popular: false,
        tag: "En Prestijli Konaklama",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        amenities: [
          "82 m² Bağımsız Kral Dairesi",
          "Toplantı & Yemek Masası",
          "Panoramik Jakuzi & Sauna",
          "Özel Vale & Karşılama Ekibi",
          "Sınırsız Mini Bar",
          "Erciyes Özel Transferi Dahil",
          "Özel Butler (Uşak) Hizmeti (Talep Üzerine)"
        ],
        shortDesc: "Protokol, iş insanları ve özel kutlamalar için tasarlanmış şehrin en seçkin süit deneyimi."
      }
    ]
  },

  spaSection: {
    sectionBadge: "SAĞLIK & WELLNESS",
    title: "1500 m² Termal Ruhlu SPA & Kapalı Havuz",
    subtitle: "Erciyes'te geçirdiğiniz soğuk kayak gününün veya yoğun iş toplantılarının ardından sıcak suların ve aromaterapinin huzuruna teslim olun.",
    stats: [
      { value: "1500 m²", label: "Toplam SPA Alanı" },
      { value: "28-30°C", label: "Isıtmalı Havuz Sıcaklığı" },
      { value: "12+", label: "Özel Masaj Terapisi" },
      { value: "07:00 - 22:00", label: "Hizmet Saatleri" }
    ],
    tabs: [
      {
        id: "pool",
        title: "Yarı Olimpik Kapalı Havuz",
        subtitle: "Dört mevsim sabit sıcaklıkta hijyenik yüzme keyfi",
        description: "Yarı olimpik ölçülerdeki kapalı yüzme havuzumuz, gelişmiş ozon dezenfeksiyon sistemi ve 28-30°C aralığında tutulan ideal su ısısıyla hem spor yapmak hem de gevşemek isteyen misafirlerimiz için kesintisiz açıktır.",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
          "Sabit 29°C su sıcaklığı",
          "Geniş şezlong dinlenme alanı",
          "Doğal ışık alan ferah mimari",
          "Çocuklar için güvenli sığ havuz bölümü"
        ]
      },
      {
        id: "hamam",
        title: "Geleneksel Türk Hamamı",
        subtitle: "Yüzyıllık Osmanlı arınma ritüelleri",
        description: "Doğal mermer göbek taşı, otantik kurna detayları ve sıcacık kubbesiyle Türk hamamımız, geleneksel kese-köpük masajı ve toksin atıcı ritüellerle vücudunuzu baştan aşağı yeniler.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
          "Geleneksel Kese & Köpük Masajı",
          "Isıtmalı Mermer Göbek Taşı",
          "Tarihi Türk Hamamı Mimarisi",
          "Özel Kurna ve Bitkisel Sabunlar"
        ]
      },
      {
        id: "sauna",
        title: "Fin Saunası & Buhar Odası",
        subtitle: "Doğal ahşap ve okaliptüs aromaterapisi",
        description: "Kuzey çamından inşa edilmiş geleneksel kuru Fin saunamız kaslarınızı gevşetirken, nem oranı yüksek okaliptüs buhar odamız solunum yollarınızı ferahlatır ve gözeneklerinizi açar.",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
          "85-90°C Ayarlı Fin Saunası",
          "Okaliptüs Esanslı Buhar Odası",
          "Şok Duşları ve Kar Çeşmesi",
          "Detox İçecek Barı"
        ]
      },
      {
        id: "massage",
        title: "Uzak Doğu & Medikal Masajlar",
        subtitle: "Sertifikalı yerli ve yabancı terapistler",
        description: "Bali masajından klasik İsveç masajına, aromaterapiden spor sonrası derin doku masajına kadar zengin masaj menümüzle tüm kas tutulmalarınızdan kurtulun.",
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
          "Bali & Thai Masajı",
          "Kayak Sonrası Derin Doku Terapisi",
          "Sıcak Volkanik Taş Masajı",
          "Çiftler İçin Özel VIP Masaj Odası"
        ]
      },
      {
        id: "fitness",
        title: "Modern Fitness & Cardio Merkezi",
        subtitle: "Sağlıklı yaşamdan ödün vermeyenler için",
        description: "En son model Technogym kardiyo cihazları, serbest ağırlık istasyonları ve pilates alanıyla donatılmış fitness salonumuz otel misafirlerimize ücretsizdir.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        bulletPoints: [
          "Modern Technogym Kardiyo Ekipmanları",
          "Serbest Ağırlık ve Dumbbell Parkuru",
          "Esneme ve Yoga Alanı",
          "Kişisel Eğitmen Danışmanlığı"
        ]
      }
    ]
  },

  skiSection: {
    sectionBadge: "KIŞ TURİZMİ & SPOR",
    title: "Erciyes Kayak Merkezi'ne 18 km: Kar Tatilinin En Konforlu Hali",
    subtitle: "Dağın dondurucu soğuğunda kalmak yerine, akşamları şehrin sıcaklığında, 1500 m² SPA ve lezzet dolu bir otelde konaklayın.",
    distance: "18 km",
    duration: "Yaklaşık 20 Dakika",
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
    ]
  },

  meetingsSection: {
    sectionBadge: "İŞ DÜNYASI & ETKİNLİK",
    title: "Prestijli Toplantı ve Kongre Salonları",
    subtitle: "15 kişiden 400 kişiye kadar; kurumsal kongreler, lansmanlar, seminerler ve gala yemekleri için kusursuz organizasyon.",
    halls: [
      {
        id: "erciyes-ballroom",
        name: "Erciyes Balo & Kongre Salonu",
        capacity: "350 - 400 Kişi",
        area: "420 m²",
        type: "Tiyatro / Gala / Sınıf Düzeni",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
        features: ["Kolonsuz Yüksek Tavan", "Lazer Projeksiyon & Çift Dev LED Ekran", "Simültane Çeviri Kabinleri", "Özel Fuaye & Kokteyl Alanı"]
      },
      {
        id: "argincik-hall",
        name: "Gevher Nesibe Seminer Salonu",
        capacity: "70 - 100 Kişi",
        area: "110 m²",
        type: "Sınıf / Blok / U Masa",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80",
        features: ["Akıllı Kürsü ve Ses Sistemi", "Ergonomik Konferans Koltukları", "Kesintisiz Yüksek Hızlı Fiber İnternet", "Kahve Molası Catering Hizmeti"]
      },
      {
        id: "vip-boardroom",
        name: "VIP Executive Yönetim Odası",
        capacity: "16 - 20 Kişi",
        area: "45 m²",
        type: "Yönetim Masası Düzeni",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
        features: ["Deri Yönetici Koltukları", "Ultra HD Video Konferans Sistemi", "Akustik Ses Yalıtımı", "Özel İkram Servisi"]
      }
    ]
  },

  diningSection: {
    sectionBadge: "GASTRONOMİ & RESTORAN",
    title: "Geleneksel Kayseri Tatları & Dünya Mutfağı",
    subtitle: "Usta şeflerimizin yorumuyla Kayseri'nin tescilli lezzetleri ve seçkin dünya mutfağı bir arada.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        title: "Zengin Serpme & Açık Büfe Kahvaltı",
        desc: "Hakiki Kayseri pastırması, su böreği, ev yapımı reçeller ve organik köy yumurtasıyla zenginleştirilmiş enerji dolu sabahlar."
      },
      {
        title: "La Brasserie A La Carte",
        desc: "Kayseri Yağlaması, meşhur mantı çeşitleri ve dry-aged dinlendirilmiş et menüleriyle lezzet şöleni."
      },
      {
        title: "Panorama Lobby & Patisserie",
        desc: "Taze demlenmiş özel kahveler, Erciyes manzarasına karşı günlük fırından çıkan pasta ve kurabiyeler."
      }
    ]
  },

  reviewsSection: {
    sectionBadge: "MİSAFİR DENEYİMLERİ",
    title: "Gerçek Misafirlerimizden Samimi Yorumlar",
    subtitle: "Kopya veya sahte yorumlar yerine, Erciyes kayak tatilcilerinin ve iş insanlarının gerçek deneyimleri.",
    ratingSummary: {
      average: "9.2",
      outOf: "10",
      totalVerified: "1.480+ Doğrulanmış Konaklama",
      cleanliness: "9.5",
      location: "9.4",
      service: "9.6",
      comfort: "9.3"
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
    phoneTitle: "Telefon & Rezervasyon",
    phones: ["+90 (352) 207 00 00", "+90 (506) 752 02 86"],
    emailTitle: "E-Posta İletişim",
    emails: ["info@cityonekayseri.com", "rezervasyon@cityonekayseri.com"],
    hoursTitle: "Resepsiyon Hizmeti",
    hoursText: "7 Gün 24 Saat Kesintisiz Açık",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.985651817743!2d35.47467657647228!3d38.72957197176044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1216503c72b1%3A0xe541da4fe08169d2!2sCity%20One%20Hotel!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
  },

  footer: {
    about: "City One Hotel Kayseri, modern mimarisi, 1500 m² termal ruhlu SPA merkezi ve Erciyes Kayak Merkezi'ne 18 km'lik yakınlığıyla 4 yıldızlı seçkin bir konaklama standardı sunar.",
    quickLinksTitle: "Hızlı Bağlantılar",
    roomsLinksTitle: "Konaklama",
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
    returnHomeButton: "Ana Sayfaya Dön"
  },

  floatingActions: {
    whatsappTooltip: "WhatsApp Hızlı Rezervasyon",
    whatsappMessage: "Merhaba, City One Hotel Kayseri için rezervasyon ve bilgi almak istiyorum.",
    phoneTooltip: "Hemen Ara: +90 (352) 207 00 00",
    backToTopTooltip: "Yukarı Çık"
  }
};
