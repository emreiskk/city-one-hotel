/**
 * City One Hotel Kayseri - Deutsches Sprachwörterbuch (DE)
 * Erstklassiger Standard für deutschsprachige Gäste und Ski-Urlauber
 */

export const de = {
  langCode: "de",
  langLabel: "Deutsch",
  flag: "🇩🇪",

  hotel: {
    name: "City One Hotel",
    city: "Kayseri",
    stars: 4,
    starLabel: "4-Sterne Luxus Stadt- & Skihotel",
    tagline: "Am Fuße des Berges Erciyes, im Herzen von Kayseri",
    slogan: "Prestige für Geschäftsreisen, Herzlichkeit für Ihren Erciyes-Urlaub",
    phone: "+90 (352) 207 00 00",
    phoneRaw: "+903522070000",
    receptionPhone: "+90 352 207 00 00",
    receptionLabel: "Rezeption: +90 352 207 00 00",
    santralPhone: "+90 352 207 00 00",
    santralLabel: "Rezeption: +90 352 207 00 00",
    reservationPhone: "+90 (506) 752 02 86",
    whatsapp: "+90 506 752 02 86",
    whatsappRaw: "905067520286",
    whatsappLabel: "WhatsApp: +90 506 752 02 86",
    email: "info@cityonekayseri.com",
    reservationEmail: "reservation@cityonekayseri.com",
    address: "Eski Sanayi Bolgesi 2. Cadde No: 6002, Kocasinan / Kayseri, Türkei",
    locationHighlights: "6 km zum Flughafen Kayseri, 5 Min. zum Forum Kayseri, 18 km zum Skigebiet Erciyes",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    operationalHours: {
      spaWeekdays: "09:00 - 23:00 Uhr (Wochentags)",
      spaWeekend: "09:00 - 21:00 Uhr (Wochenende)",
      breakfast: "07:00 - 10:00 Uhr (Reichhaltiges Buffet)",
      dinner: "A-la-Carte-Service bis 00:00 Uhr",
      roomService: "24-Stunden-Zimmerservice (24/7)"
    },
    guestPrivileges: [
      "Kostenloser Valet-Service & Tiefgarage",
      "Kostenloses Tee-/Kaffeeset & tägliches Wasser",
      "Bügeleisen und Bügelbrett in jedem Zimmer",
      "Beheiztes halbolympisches Hallenbad",
      "Traditionelles Türkisches Hamam",
      "Finnisches Dampfbad & Trockensauna",
      "SPA-Whirlpool & Entspannungslounge",
      "Voll ausgestatteter Fitness- & Kraftraum",
      "24-Stunden-Zimmerservice rund um die Uhr"
    ],
    rating: {
      score: "4.1",
      totalReviews: "3.200+",
      label: "Google-Bewertung: 4.1 / 5.0 (3.2K+ Bewertungen)",
      googleScore: "4.1 / 5.0"
    }
  },

  navigation: [
    { id: "rooms", label: "Zimmer & Suiten", href: "#rooms" },
    { id: "spa", label: "SPA & Pool", href: "#spa" },
    { id: "ski", label: "Erciyes-Transfer", href: "#ski" },
    { id: "meetings", label: "Tagung & Kongress", href: "#meetings" },
    { id: "dining", label: "Gastronomie", href: "#dining" },
    { id: "gallery", label: "Galerie", href: "#gallery" },
    { id: "reviews", label: "Bewertungen", href: "#reviews" },
    { id: "contact", label: "Kontakt", href: "#contact" }
  ],

  hero: {
    badge: "KAYSERIS ERSTE ADRESSE",
    titlePrimary: "Eleganz, Komfort und",
    titleHighlight: "Erciyes-Panorama",
    description: "Im Herzen des Geschäfts- und Einkaufsviertels von Kayseri erwartet Sie im City One Hotel ein exklusiver 4-Sterne-Aufenthalt mit 1.500 m² SPA, halbolympischem Hallenbad und privatem VIP-Shuttle zum Skigebiet Erciyes.",
    ctaPrimary: "Jetzt Reservieren",
    ctaSecondary: "Zimmer Entdecken",
    ctaVirtualTour: "Hotel-Video Ansehen",
    featuresPills: [
      "18 km Erciyes Ski-Transfer & VIP-Shuttle",
      "1.500 m² SPA & Hallenbad (Wochentags bis 23:00 Uhr)",
      "07:00 - 10:00 Uhr Reichhaltiges Frühstücksbuffet",
      "Kostenloses Tee-Set, Wasser, Bügeleisen & Valet"
    ],
    stats: [
      { value: "18 km", label: "Zur Erciyes Skipiste" },
      { value: "1.500 m²", label: "Großzügiger SPA-Bereich" },
      { value: "120+", label: "Komfortable Zimmer & Suiten" },
      { value: "4.1 / 5", label: "Google-Bewertung (3.2K+)" }
    ],
    backgroundImage: "/assets/hotel/exterior/hero-aerial.jpg"
  },

  bookingBar: {
    title: "Direktbuchung mit Bestpreisgarantie",
    subtitle: "Bei Direktbuchung sind der SPA-Zugang und eine Willkommensaufmerksamkeit inbegriffen.",
    labels: {
      checkIn: "Anreisedatum",
      checkOut: "Abreisedatum",
      adults: "Erwachsene",
      children: "Kinder (0-12)",
      roomType: "Zimmertyp",
      submitButton: "Preise & Verfügbarkeit Prüfen",
      directBookingBadge: "10% Direktbuchungsrabatt angewendet"
    },
    defaultGuests: {
      adults: 2,
      children: 0
    }
  },

  keyFeatures: {
    sectionBadge: "UNSERE VORZÜGE",
    title: "Warum City One Hotel Kayseri?",
    subtitle: "Vom schnellen Rhythmus der Geschäftswelt bis zum Pulverschnee des Erciyes – genießen Sie erstklassigen Service.",
    items: [
      {
        id: "ski",
        title: "Erciyes Ski-Transfer & Beheizter Skiraum",
        description: "Nur 18 km vom Skigebiet Erciyes entfernt. Unser Hotel bietet regelmäßige VIP-Shuttles und einen beheizten Skiraum für Ihre Ausrüstung.",
        icon: "MountainSnow",
        highlight: "18 km / VIP-Shuttle"
      },
      {
        id: "spa",
        title: "1.500 m² SPA, Hallenbad & Türkisches Bad",
        description: "Beheiztes halbolympisches Hallenbad, Whirlpool, Hamam, finnisches Dampfbad und Sauna. Wochentags 09:00-23:00, am Wochenende 09:00-21:00 Uhr.",
        icon: "Waves",
        highlight: "Halbolympischer Pool & Hamam"
      },
      {
        id: "fitness",
        title: "Modernes Fitness- & Kraftstudio",
        description: "Laufbänder, Kardiogeräte und Freihantel-Stationen stehen unseren Hotelgästen für das tägliche Training kostenfrei zur Verfügung.",
        icon: "Dumbbell",
        highlight: "Kostenfreier Fitness-Zugang"
      },
      {
        id: "dining",
        title: "07:00-10:00 Frühstück & 750-Plätze-Restaurant",
        description: "Morgens reichhaltiges Buffet mit echtem Kayseri-Pastirma; abends erlesene A-la-Carte-Küche bis 00:00 Uhr im 750-Personen-Festsaal.",
        icon: "Utensils",
        highlight: "07:00 - 10:00 Uhr Buffet"
      },
      {
        id: "inroom",
        title: "Tee-Set, Wasser, Bügelset & 24/7 Zimmerservice",
        description: "In allen Zimmern kostenloses Tee-/Kaffeeset, tägliches Flaschenwasser, Bügeleisen mit Bügelbrett, Minibar und 24-Stunden-Zimmerservice.",
        icon: "Coffee",
        highlight: "24-Stunden-Zimmerservice"
      },
      {
        id: "parking",
        title: "Kostenlose Tiefgarage & Valet-Parken",
        description: "Kameraüberwachte sichere Tiefgarage rund um die Uhr und professioneller Valet-Service für unsere Übernachtungsgäste inklusive.",
        icon: "ShieldCheck",
        highlight: "Kostenloses Parken & Valet"
      }
    ]
  },

  roomsSection: {
    sectionBadge: "UNTERKUNFTSOPTIONEN",
    title: "Geräumige, Ruhige & Moderne Zimmer",
    subtitle: "Mit Bestpreisgarantie und transparenter Preisgestaltung: Bis ins Detail für höchsten Schlafkomfort konzipiert.",
    categories: [
      { id: "all", label: "Alle Zimmer" },
      { id: "standart", label: "Standard-Zimmer" },
      { id: "superior", label: "Superior-Zimmer" },
      { id: "double", label: "Doppelzimmer" },
      { id: "twin", label: "Twin-Zimmer" },
      { id: "aile", label: "Familienzimmer" },
      { id: "jakuzi", label: "Whirlpool-Suite" }
    ],
    pricingNote: "Die Preise verstehen sich inklusive Frühstücksbuffet, 1.500 m² SPA-Nutzung und MwSt.",
    ui: {
      photosCount: "Fotos",
      moreAmenities: "weitere Ausstattungen",
      bookRoom: "Zimmer Buchen",
      inspectDetails: "Details Ansehen",
      modalArea: "Fläche:",
      modalCapacity: "Kapazität:",
      modalBed: "Bett:",
      modalAmenitiesTitle: "Zimmerausstattung & Komfort-Vorteile",
      confirmBook: "Dieses Zimmer Buchen"
    },
    rooms: [
      {
        id: "standart-city",
        category: "standart",
        categoryLabel: "Standard-Kategorie",
        name: "Standard-Zimmer mit Stadtblick",
        pricePerNight: 2750,
        formattedPrice: "2.750 ₺",
        capacity: "1 - 2 Gäste",
        bedType: "1 Doppel- oder 2 orthopädische Einzelbetten",
        size: "27 m²",
        view: "Stadt- / Straßenblick",
        popular: false,
        tag: "Wirtschaftlich & Komfortabel",
        image: "/assets/hotel/rooms/standart-1.jpg",
        images: [
          "/assets/hotel/rooms/standart-1.jpg",
          "/assets/hotel/rooms/standart-2.jpg",
          "/assets/hotel/rooms/room-detail-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "27 m² modernes Stadtdesign",
          "Kostenloses Tee- & Kaffeeset im Zimmer",
          "Täglich kostenloses Flaschenwasser",
          "Bügeleisen und Bügelbrett im Zimmer",
          "Geräuscharme Minibar",
          "Highspeed Wi-Fi 6 Internet",
          "24-Stunden-Zimmerservice",
          "Marmorbad mit Regendusche"
        ],
        shortDesc: "Ruhiger Schreibtisch, kostenloses Tee-Set und ergonomischer Komfort für Geschäfts- und Urlaubsreisende."
      },
      {
        id: "superior-room",
        category: "superior",
        categoryLabel: "Superior-Kategorie",
        name: "Superior Komfort-Zimmer",
        pricePerNight: 3250,
        formattedPrice: "3.250 ₺",
        capacity: "2 Gäste",
        bedType: "1 Großes King-Size-Orthopädiebett",
        size: "43 m²",
        view: "Weitläufiger Stadtblick",
        popular: true,
        tag: "Beliebtestes Geschäfts- & Reise-Zimmer",
        image: "/assets/hotel/rooms/superior-1.jpg",
        images: [
          "/assets/hotel/rooms/superior-1.jpg",
          "/assets/hotel/rooms/superior-2.jpg",
          "/assets/hotel/rooms/room-detail-2.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "43 m² großzügiger Wohnbereich",
          "Großes King-Bett & bequeme Sitzecke",
          "Kostenloses Tee-Set & Nespresso-Station",
          "Täglich kostenloses Flaschenwasser",
          "Bügeleisen und Bügelbrett im Zimmer",
          "Geräuscharme Minibar",
          "Highspeed Wi-Fi 6 Internet",
          "24-Stunden-Zimmerservice"
        ],
        shortDesc: "43 m² Raumvolumen, moderne Architektur und erstklassiger Schlafkomfort für anspruchsvolle Gäste."
      },
      {
        id: "double-room",
        category: "double",
        categoryLabel: "Double-Kategorie",
        name: "Double Deluxe Doppelzimmer",
        pricePerNight: 3100,
        formattedPrice: "3.100 ₺",
        capacity: "2 Gäste",
        bedType: "1 Großes King-Size-Doppelbett",
        size: "35 m²",
        view: "Ruhiger Stadt- & Hofblick",
        popular: false,
        tag: "Ideal für Paare",
        image: "/assets/hotel/rooms/double-1.jpg",
        images: [
          "/assets/hotel/rooms/double-1.jpg",
          "/assets/hotel/rooms/room-detail-3.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "35 m² exklusives Doppelzimmer-Layout",
          "Großes King-Size-Orthopädiebett",
          "Kostenloses Tee-Set & Wasserkocher",
          "Täglich kostenloses Flaschenwasser",
          "Bügeleisen und Bügelbrett im Zimmer",
          "Geräuscharme Minibar",
          "Highspeed Wi-Fi 6 Internet",
          "24-Stunden-Zimmerservice"
        ],
        shortDesc: "Friedliche Atmosphäre mit großzügigem Bett, ideal für Paare und Erholungssuchende."
      },
      {
        id: "twin-room",
        category: "twin",
        categoryLabel: "Twin-Kategorie",
        name: "Twin Zweibettzimmer",
        pricePerNight: 2950,
        formattedPrice: "2.950 ₺",
        capacity: "2 Gäste",
        bedType: "2 getrennte orthopädische Einzelbetten",
        size: "41 m²",
        view: "Stadtblick",
        popular: false,
        tag: "Für Kollegen & Freunde",
        image: "/assets/hotel/rooms/standart-2.jpg",
        images: [
          "/assets/hotel/rooms/standart-2.jpg",
          "/assets/hotel/rooms/standart-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "41 m² geräumiger Zweibett-Bereich",
          "2 unabhängige orthopädische Einzelbetten",
          "Kostenloses Tee-Set & Wasserkocher",
          "Täglich kostenloses Flaschenwasser",
          "Bügeleisen und Bügelbrett im Zimmer",
          "Geräuscharme Minibar",
          "Highspeed Wi-Fi 6 Internet",
          "24-Stunden-Zimmerservice"
        ],
        shortDesc: "41 m² Fläche mit zwei getrennten Betten und komfortablem Arbeitsbereich für Reisepartner."
      },
      {
        id: "family-comfort",
        category: "aile",
        categoryLabel: "Familien-Kategorie",
        name: "Family Comfort Familienzimmer",
        pricePerNight: 3950,
        formattedPrice: "3.950 ₺",
        capacity: "3 - 4 Gäste",
        bedType: "1 Doppelbett + 2 getrennte Einzelbetten",
        size: "47 m²",
        view: "Stadt- & Gartenblick",
        popular: false,
        tag: "Familien & Skigruppen",
        image: "/assets/hotel/rooms/family-1.jpg",
        images: [
          "/assets/hotel/rooms/family-1.jpg",
          "/assets/hotel/rooms/room-detail-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "47 m² Mehrbett-Familienarchitektur",
          "1 Doppelbett + 2 Einzelbetten-Aufteilung",
          "Kostenloses Tee-Set & Wasserkocher",
          "Täglich kostenloses Flaschenwasser",
          "Bügeleisen und Bügelbrett im Zimmer",
          "Kühlschrank & Minibar",
          "Highspeed Wi-Fi 6 Internet",
          "24-Stunden-Zimmerservice"
        ],
        shortDesc: "47 m² geräumiges Wohnkonzept, speziell auf den Komfort von Familien mit Kindern und Skigruppen abgestimmt."
      },
      {
        id: "jakuzili-suit",
        category: "jakuzi",
        categoryLabel: "Suite-Kategorie",
        name: "Executive Whirlpool- & Flitterwochen-Suite",
        pricePerNight: 5400,
        formattedPrice: "5.400 ₺",
        capacity: "2 Gäste",
        bedType: "1 Ultra-Luxus Super King Size Bett",
        size: "53 m²",
        view: "Panoramablick auf Stadt & Berg Erciyes",
        popular: true,
        tag: "Privater Whirlpool & VIP-Service",
        image: "/assets/hotel/rooms/jakuzi-1.jpg",
        images: [
          "/assets/hotel/rooms/jakuzi-1.jpg",
          "/assets/hotel/rooms/jakuzi-2.jpg",
          "/assets/hotel/rooms/jakuzi-detail.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "53 m² Suite mit privatem Hydromassage-Whirlpool",
          "Getrenntes Wohnzimmer & Arbeitsbereich",
          "VIP-Willkommenskorb & Tee-Station",
          "Täglich kostenloses Flaschenwasser & Minibar",
          "Bügeleisen und Bügelbrett im Zimmer",
          "Kostenloses Frühstück auf dem Zimmer (optional)",
          "24-Stunden-Zimmerservice",
          "Erciyes-Berg- und Stadtpanorama"
        ],
        shortDesc: "53 m² private Whirlpool-Erfahrung mit separatem Wohnsalon für ein romantisches VIP-Erlebnis."
      }
    ]
  },

  spaSection: {
    sectionBadge: "WELLNESS & GESUNDHEIT",
    title: "1.500 m² SPA-Oase & Beheiztes Hallenbad",
    subtitle: "Nach einem eisigen Skitag auf dem Berg Erciyes oder anstrengenden Meetings können Sie in warmem Wasser, Türkischem Hamam und Fitness neue Energie tanken.",
    stats: [
      { value: "09:00 - 23:00", label: "Öffnungszeiten Wochentags" },
      { value: "09:00 - 21:00", label: "Öffnungszeiten Wochenende" },
      { value: "1.500 m²", label: "Gesamte SPA-Fläche" },
      { value: "28-30°C", label: "Beheiztes Hallenbad" }
    ],
    tabs: [
      {
        id: "pool",
        title: "Halbolympisches Hallenbad",
        subtitle: "Ganzjährig 29°C beheiztes, hygienisches Schwimmvergnügen",
        description: "Unser halbolympisches Hallenbad mit moderner Ozon-Desinfektion und angenehmer Wassertemperatur (28-30°C) steht Sportlern wie Erholungssuchenden offen.",
        image: "/assets/hotel/spa/havuz-1.jpg",
        bulletPoints: [
          "Konstante Wassertemperatur von 29°C",
          "Großzügige Liegebereiche zum Entspannen",
          "Lichtdurchflutete Wohlfühl-Architektur",
          "SPA-Whirlpool und Ruheecke"
        ]
      },
      {
        id: "hamam",
        title: "Traditionelles Türkisches Hamam",
        subtitle: "Jahrhundertealte osmanische Reinigungstradition",
        description: "Mit beheiztem Marmorstein, Kurna-Becken und warmer Kuppel sorgt unser traditionelles Hamam mit Peeling- und Schaummassage für vollkommene Regeneration.",
        image: "/assets/hotel/spa/hamam-1.jpg",
        images: ["/assets/hotel/spa/hamam-1.jpg", "/assets/hotel/spa/hamam-2.jpg"],
        bulletPoints: [
          "Klassische Kese- & Schaummassage",
          "Beheizter natürlicher Marmorstein",
          "Authentische osmanische Architektur",
          "Pflanzliche Seifen & traditionelle Schalen"
        ]
      },
      {
        id: "fitness",
        title: "Fitness & Krafttraining",
        subtitle: "Kardiozone, Laufbänder & Freihantelbereich",
        description: "Bleiben Sie auch im Urlaub oder auf Geschäftsreise fit: Unser Fitnessraum mit Kardiogeräten und Hanteln steht Hotelgästen kostenfrei zur Verfügung.",
        image: "/assets/hotel/spa/spa-1.jpg",
        bulletPoints: [
          "Moderne Laufbänder & Kardiogeräte",
          "Freihanteln & Hantelstationen",
          "Gymnastik-, Pilates- und Dehnbereich",
          "Kostenfreier Zugang für Hotelgäste"
        ]
      },
      {
        id: "vitamin",
        title: "SPA Vitamin-Bar & Detox",
        subtitle: "Frisch gepresste Säfte & Kräuteraufgüsse",
        description: "Füllen Sie Ihren Mineralhaushalt nach dem Training oder Saunagang auf: mit frischen Zitrussäften, aromatischen Tees und belebenden Smoothies.",
        image: "/assets/hotel/spa/vitamin-bar-1.jpg",
        bulletPoints: [
          "Frisch gepresste Obst- und Gemüsesäfte",
          "Aromatische Kräuter- & Detox-Tees",
          "Gesunde Eiweiß- & Mineralschüttler",
          "Ruhige Entspannungslounge"
        ]
      },
      {
        id: "sauna",
        title: "Finnisches Dampfbad & Trockensauna",
        subtitle: "Nordisches Kiefernholz & Eukalyptus-Aromatherapie",
        description: "Unsere finnische Trockensauna entspannt die Muskulatur, während das feuchte Eukalyptus-Dampfbad die Atemwege befreit und die Haut reinigt.",
        image: "/assets/hotel/spa/spa-1.jpg",
        bulletPoints: [
          "Trockene finnische Sauna (85-90°C)",
          "Finnisches Dampfbad mit Eukalyptus",
          "Schwallduschen & Eisbrunnen",
          "Detox-Getränkebar"
        ]
      },
      {
        id: "gelin",
        title: "Exklusives Braut-Hamam",
        subtitle: "Traditionelle Feierlichkeiten mit Musik und Köstlichkeiten",
        description: "Kombiniert anatolische Festbräuche mit modernem Luxus: Spezielle Musik, liebevoll zusammengestellte Platten und erfrischende Rituale für unvergessliche Momente.",
        image: "/assets/hotel/spa/gelin-hamami.jpg",
        video: "/assets/hotel/videos/gelin-hamami.mp4",
        bulletPoints: [
          "Individuelle Musik- und Feiergestaltung",
          "Traditionelle Henna- & Genusstabletts",
          "Persönliche Kese- & Schaummassagen",
          "Virtuelle Videotour zur Ansicht verfügbar"
        ]
      },
      {
        id: "massage",
        title: "Fernöstliche & Medizinische Massagen",
        subtitle: "Zertifizierte einheimische und internationale Therapeuten",
        description: "Von balinesischen Massagen bis hin zu schwedischer Klassik, Aromatherapie und regenerierender Tiefengewebsmassage nach dem Skifahren.",
        image: "/assets/hotel/spa/spa-2.jpg",
        bulletPoints: [
          "Authentische Bali- & Thai-Massagen",
          "Tiefengewebstherapie nach dem Skifahren",
          "Hot-Stone-Vulkansteinbehandlung",
          "Privater VIP-Paarbehandlungsraum"
        ]
      }
    ],
    videoTourButton: "Braut-Hamam Videotour Ansehen",
    infoLineButton: "SPA-Infolinie",
    hoursBadge: "Mo-Fr: 09:00 - 23:00 • Sa-So: 09:00 - 21:00 Uhr"
  },

  skiSection: {
    sectionBadge: "WINTERSPORT & SKI",
    title: "18 km zum Skigebiet Erciyes: Höchster Komfort für Ihren Winterurlaub",
    subtitle: "Statt in der Kälte auf dem Berggipfel zu übernachten, genießen Sie abends das Stadtleben, 1.500 m² SPA und erstklassiges Essen.",
    distance: "18 km",
    duration: "Ca. 20 Minuten",
    distanceLabel: "Entfernung zu den Erciyes-Pisten",
    durationLabel: "Fahrzeit",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1400&q=80",
    advantages: [
      {
        title: "VIP-Shuttle direkt zur Skipiste",
        desc: "Während der Skisaison regelmäßiger Shuttleservice direkt von unserem Hotel zu den Pisten Tekir und Develi am Berg Erciyes."
      },
      {
        title: "Beheizter Ski- & Skischuhraum",
        desc: "Sichere Aufbewahrung für Ski und Snowboard mit modernem Schuhtrocknungssystem für warme Füße am Morgen."
      },
      {
        title: "Skipass-Service & Ausrüstungsrabatt",
        desc: "Erhalten Sie Ihre Liftpässe ohne Warteschlange direkt an der Hotelrezeption und Vergünstigungen bei Partner-Skischulen."
      },
      {
        title: "Après-Ski-Lounge mit Kaminfeuer",
        desc: "Nach der Abfahrt erwarten Sie in der Lobby heißer türkischer Salep, frisches Gebäck und entspannende Musik am Kamin."
      }
    ],
    shuttleButton: "Ski-Transfer & Shuttle-Infos Erhalten"
  },

  meetingsSection: {
    sectionBadge: "BUSINESS & VERANSTALTUNGEN",
    title: "Repräsentative Tagungs- & Kongress-Säle",
    subtitle: "Von 15 bis 500 Personen: Perfekte Organisation für Firmenkongresse, Produktpräsentationen, Seminare, Hochzeiten und Galadinner.",
    contactForHalls: "Veranstaltungsangebot Anfordern",
    halls: [
      {
        id: "kayseri-ballroom",
        name: "Kayseri Festsaal",
        capacity: "450 - 500 Personen",
        area: "520 m²",
        type: "Ballsaal / Kongress / Gala-Dinner",
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
        features: ["Säulenfreie Decke & repräsentative Bühne", "Laserprojektion & zwei riesige LED-Wände", "Moderne Licht- & Soundsysteme", "Großzügiges Foyer für Empfänge"]
      },
      {
        id: "erciyes-ballroom",
        name: "Erciyes Kongress-Saal",
        capacity: "350 - 400 Personen",
        area: "420 m²",
        type: "Theater / Gala / Seminar-Bestuhlung",
        image: "/assets/hotel/halls/erciyes/erciyes-1.jpg",
        gallery: ["/assets/hotel/halls/erciyes/erciyes-1.jpg"],
        features: ["Säulenfreie hohe Decke", "HD-Laserbeamer & Akustikanlage", "Simultandolmetscher-Kabinen", "Separater Foyer-Bereich"]
      },
      {
        id: "yelken-hall",
        name: "Yelken Tagungsraum",
        capacity: "120 - 150 Personen",
        area: "160 m²",
        type: "Seminar / Workshop / U-Form",
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
        features: ["Helles Tageslicht-Design", "Ergonomische Konferenzstühle", "Schnelles Glasfaser-WLAN", "Kaffeepausen-Catering"]
      },
      {
        id: "efes-hall",
        name: "Efes Seminarraum",
        capacity: "80 - 100 Personen",
        area: "110 m²",
        type: "Schulung / Workshop / Blockform",
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
        features: ["Schallisolierte Akustik", "Ultra-HD-Projektion", "Modulare Tischanordnungen", "Individueller Erfrischungsservice"]
      },
      {
        id: "kapadokya-hall",
        name: "Kapadokya Tagungsraum",
        capacity: "60 - 80 Personen",
        area: "95 m²",
        type: "Schulung / Vorstand / Seminar",
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
        features: ["Interaktives Smartboard", "Automatisierte Mediensteuerung", "Schnelles Wi-Fi 6", "VIP-Catering"]
      },
      {
        id: "sini-hall",
        name: "Sini Bankettsaal",
        capacity: "150 Personen",
        area: "200 m²",
        type: "Bankett & Feierlichkeiten",
        image: "/assets/hotel/dining/sini-restaurant-750.jpg",
        video: "/assets/hotel/videos/sini-salonu.mp4",
        features: ["Bankett- & Hochzeitsbestuhlung", "Akustische Live-Musik-Infrastruktur", "Gourmet-Menüs unseres Küchenchefs", "VIP-Protokoll-Service"]
      }
    ]
  },

  diningSection: {
    sectionBadge: "GASTRONOMIE & RESTAURANT",
    title: "Traditionelle Spezialitäten & 750-Plätze-Restaurant Sini",
    subtitle: "Von 07:00 bis 10:00 Uhr reichhaltiges Frühstücksbuffet, Abendessen bis 00:00 Uhr und 24h-Zimmerservice.",
    image: "/assets/hotel/dining/sini-restaurant-750.jpg",
    capacityBadge: "Großrestaurant für 750 Gäste",
    hours: {
      breakfast: "07:00 - 10:00 Uhr (Buffet)",
      dinner: "Abendessen bis 00:00 Uhr",
      roomService: "24-Stunden-Zimmerservice (24/7)"
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
        title: "Sini Restaurant (750 Plätze Kapazität)",
        desc: "Eines der größten Veranstaltungsrestaurants in Kayseri; perfekt ausgestattet für Firmenbankette, Hochzeiten und Galas."
      },
      {
        title: "Reichhaltiges Frühstücksbuffet (07:00 - 10:00 Uhr)",
        desc: "Echter Kayseri-Pastirma, warmes Wassergebäck (Su Böregi), hausgemachte Konfitüren, regionale Käsesorten und frisches Gebäck."
      },
      {
        title: "La Brasserie A-la-Carte & 24/7 Zimmerservice",
        desc: "Abendessen bis Mitternacht und rund um die Uhr frisch zubereitete Köstlichkeiten direkt auf Ihr Zimmer serviert."
      }
    ],
    bookWithBreakfast: "Inklusive Frühstück Buchen",
    reserveTable: "Tisch Reservieren",
    tabBreakfast: "Reichhaltiges Frühstücksbuffet",
    tabSini: "Sini Restaurant",
    tabAlacarte: "A La Carte Restaurant",
    modes: {
      sini: {
        title: "Sini Restaurant für 750 Gäste",
        subtitle: "Kayseris größter Bankett- und Veranstaltungssaal",
        badge: "750 Plätze"
      },
      breakfast: {
        title: "Reichhaltiges Kayseri-Frühstücksbuffet",
        subtitle: "Echte Pastırma, warmes Börek & über 100 Köstlichkeiten",
        badge: "12 Fotos"
      },
      alacarte: {
        title: "La Brasserie A La Carte",
        subtitle: "Erlesene internationale & anatolische Spezialitäten",
        badge: "5 Fotos"
      }
    }
  },

  gallerySection: {
    sectionBadge: "AUTHENTISCHE EINDRÜCKE UNSERES HOTELS",
    title: "City One Hotel Foto- & Video-Galerie",
    subtitle: "Eleganz am Fuße des Berges Erciyes: Authentische Impressionen unserer Säle, Suiten, unseres 1.500 m² SPA-Bereichs und unserer Gastronomie.",
    zoomLabel: "Vergrößern",
    watchLabel: "Video Ansehen",
    categories: {
      all: "Gesamte Galerie",
      exterior: "Fassade & Lobby",
      rooms: "Zimmer & Suiten",
      halls: "Ball- & Kongress-Säle",
      spa: "SPA, Pool & Hamam",
      dining: "Restaurant & Buffet",
      videos: "Video-Touren"
    }
  },

  reviewsSection: {
    sectionBadge: "GÄSTEERFAHRUNGEN",
    title: "Echte Bewertungen Unserer Gäste",
    subtitle: "Erfahrungsberichte von Skitouristen am Erciyes und Geschäftsreisenden.",
    ratingSummary: {
      average: "4.1",
      outOf: "5",
      totalVerified: "3.200+ Google-Bewertungen",
      cleanliness: "4.2",
      location: "4.5",
      service: "4.1",
      comfort: "4.0"
    },
    labels: {
      cleanliness: "Sauberkeit",
      location: "Lage & Anbindung",
      service: "Service & Betreuung",
      comfort: "Zimmerkomfort",
      googleScore: "Google- & Hotelbewertung",
      verifiedGuest: "Verifizierter Gast"
    },
    reviews: [
      {
        id: "rev-1",
        name: "Ahmet Serdar K.",
        role: "Geschäftsmann - Istanbul",
        date: "Oktober 2026",
        rating: 5,
        title: "Meine feste Anlaufstelle in Kayseri",
        comment: "Für Besprechungen im Industriegebiet komme ich 6 bis 7 Mal im Jahr nach Kayseri. Die ruhigen Zimmer, das schnelle WLAN und das freundliche Personal übertreffen den 4-Sterne-Standard bei weitem. Das Frühstück mit Pastirma ist hervorragend.",
        roomStayed: "Superior Standard-Zimmer"
      },
      {
        id: "rev-2",
        name: "Elif & Murat Y.",
        role: "Familien-Skiurlaub - Ankara",
        date: "Januar 2026",
        rating: 5,
        title: "Die beste Entscheidung für unseren Erciyes-Urlaub",
        comment: "Wir haben uns entschieden, im City One statt auf dem Berg zu übernachten – eine fantastische Wahl! Die 18 km Fahrt dauerten nur 18 Minuten. Nach dem Skifahren in den 1.500 m² SPA-Pool und die Sauna zu gehen, war unbezahlbar. Das Familienzimmer war sehr geräumig.",
        roomStayed: "Family Comfort Familienzimmer"
      },
      {
        id: "rev-3",
        name: "Dr. Selim Tekinalp",
        role: "Kongressteilnehmer - Izmir",
        date: "September 2026",
        rating: 5,
        title: "Hervorragende Tagungsräume & Hallenbad",
        comment: "Ich war für ein medizinisches Symposium für 3 Nächte im Hotel. Akustik und Lüftung im Erciyes-Saal waren vorbildlich. Jeden Nachmittag konnte ich im halbolympischen Pool schwimmen. Auch die zentrale Stadtlage ist ein großer Pluspunkt.",
        roomStayed: "Deluxe Zimmer mit Erciyes-Blick"
      },
      {
        id: "rev-4",
        name: "Merve Celik",
        role: "Wochenendausflug - Adana",
        date: "November 2026",
        rating: 5,
        title: "Ecksuite und Whirlpool waren fantastisch",
        comment: "Für unseren Hochzeitstag haben wir die Executive Ecksuite gebucht. Der zweiseitige Erciyes-Blick und der Whirlpool waren sehr romantisch. Herzlichen Dank an das Team für den Überraschungs-Obstkorb.",
        roomStayed: "Executive Corner Suite"
      }
    ]
  },

  faqSection: {
    sectionBadge: "HÄUFIG GESTELLTE FRAGEN",
    title: "Alles, Was Sie Wissen Müssen",
    subtitle: "Wichtige Informationen zur optimalen Vorbereitung Ihres Aufenthalts.",
    items: [
      {
        q: "Wie sind die Check-in- und Check-out-Zeiten?",
        a: "Der Check-in ist ab 14:00 Uhr möglich, der Check-out erfolgt bis 12:00 Uhr mittags. Ein vorzeitiger Check-in oder später Check-out wird nach Verfügbarkeit gerne ermöglicht."
      },
      {
        q: "Wie funktioniert der Transfer zum Skigebiet Erciyes?",
        a: "Unser Hotel ist nur 18 km von den Pisten des Berges Erciyes entfernt. Während der Wintersaison bieten wir morgens und nachmittags regelmäßige VIP-Shuttles ab Hotellobby an. Reservierungen an der Rezeption."
      },
      {
        q: "Ist die Nutzung des 1.500 m² SPA und des Hallenbads inbegriffen?",
        a: "Ja. Alle Übernachtungsgäste können das beheizte Hallenbad, das Türkische Hamam, die finnische Sauna, das Dampfbad und das Fitnessstudio kostenfrei nutzen. Nur individuelle Massagen sind kostenpflichtig."
      },
      {
        q: "Gibt es einen Parkplatz und Valet-Service?",
        a: "Ja. Unsere kameraüberwachte Tiefgarage und der Valet-Parkdienst stehen allen Hotelgästen rund um die Uhr kostenlos zur Verfügung."
      },
      {
        q: "Ist das Frühstück im Zimmerpreis inbegriffen?",
        a: "Ja. Bei allen Buchungen über unsere offizielle Website ist unser reichhaltiges Frühstücksbuffet mit regionalen Spezialitäten im Preis enthalten."
      }
    ]
  },

  contactSection: {
    sectionBadge: "KONTAKT & LAGE",
    title: "Zentrale Erreichbarkeit im Herzen von Kayseri",
    subtitle: "Nur wenige Minuten von Flughafen, Bahnhof, Industriezonen und Einkaufszentren entfernt.",
    addressTitle: "Unsere Adresse",
    addressText: "Eski Sanayi Bolgesi 2. Cadde No: 6002, 38010 Kocasinan / Kayseri, Türkei",
    phoneTitle: "Telefon & Kontaktlinien",
    phones: [
      {
        label: "Hotel Rezeption & Reservierung",
        number: "+90 352 207 00 00",
        formatted: "+90 (352) 207 00 00",
        href: "tel:+903522070000",
        subtext: "24/7 Rezeption & Gästeauskunft",
        isWhatsapp: false
      },
      {
        label: "WhatsApp-Direktreservierung",
        number: "+90 506 752 02 86",
        formatted: "+90 (506) 752 02 86",
        href: "https://wa.me/905067520286?text=Hallo,%20ich%20moechte%20Informationen%20und%20eine%20Reservierung%20fuer%20das%20City%20One%20Hotel%20Kayseri%20erhalten.",
        subtext: "Schnelle Antwort & Unterstützung",
        isWhatsapp: true
      }
    ],
    emailTitle: "E-Mail-Kontakt",
    emails: ["info@cityonekayseri.com", "reservation@cityonekayseri.com"],
    hoursTitle: "Service- & Betriebszeiten",
    hoursText: "Rezeption & 24h-Zimmerservice rund um die Uhr",
    hoursList: [
      { label: "Rezeption & Empfang", time: "24 Stunden durchgehend (24/7)" },
      { label: "Zimmerservice", time: "24 Stunden durchgehend (24/7)" },
      { label: "SPA, Pool & Hamam", time: "Mo-Fr: 09:00 - 23:00 • Sa-So: 09:00 - 21:00 Uhr" },
      { label: "Frühstücksbuffet", time: "07:00 - 10:00 Uhr (Sini Restaurant)" },
      { label: "Abendessen", time: "A-la-Carte-Service bis 00:00 Uhr" }
    ],
    privilegesTitle: "Kostenlose Vorteile Ihres Aufenthalts",
    privileges: [
      "Kostenloses Tee- & Kaffeeset im Zimmer",
      "Täglich kostenloses Flaschenwasser",
      "Bügeleisen und Bügelbrett in jedem Zimmer",
      "Kostenloser Valet-Service & sichere Tiefgarage",
      "Beheiztes halbolympisches Hallenbad & Whirlpool",
      "Türkisches Hamam, finnisches Dampfbad & Sauna",
      "Modernes Fitness- & Kraftstudio",
      "Highspeed Wi-Fi 6 Internet im gesamten Hotel"
    ],
    quickForm: {
      title: "Schnellanfrage & Kontaktformular",
      subtitle: "Senden Sie uns eine Nachricht für Gruppenbuchungen, Konferenzen oder besondere Wünsche.",
      successMessage: "Ihre Nachricht ist eingegangen! Unser Gästeservice wird sich in Kürze bei Ihnen melden.",
      namePlaceholder: "Ihr Vor- und Nachname",
      phonePlaceholder: "Ihre Telefonnummer",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      messagePlaceholder: "Ihre Nachricht oder Buchungsanfrage...",
      submitButton: "Nachricht Senden"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.985651817743!2d35.47467657647228!3d38.72957197176044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1216503c72b1%3A0xe541da4fe08169d2!2sCity%20One%20Hotel!5e0!3m2!1sde!2str!4v1700000000000!5m2!1sde!2str"
  },

  newsletter: {
    badge: "CITY ONE PRIVILEGE CLUB",
    title: "Erfahren Sie als Erster von Exklusivangeboten & Erciyes-Ski-Aktionen",
    subtitle: "Frühbucherrabatte, 1.500 m² SPA-Specials und Events der anatolischen Küche direkt in Ihrem Postfach.",
    placeholder: "Ihre E-Mail-Adresse eingeben...",
    button: "Abonnieren",
    privacyNotice: "Kein Spam. Ihre Daten sind geschützt, Abmeldung jederzeit mit einem Klick möglich.",
    successTitle: "Herzlich Willkommen!",
    successMessage: "Vielen Dank für Ihre Anmeldung! Exklusive Angebote und Saison-Neuigkeiten senden wir direkt an Sie.",
    resetButton: "Eine andere E-Mail-Adresse eintragen"
  },

  footer: {
    about: "Das City One Hotel Kayseri bietet erstklassigen 4-Sterne-Komfort mit moderner Architektur, einem 1.500 m² SPA-Bereich und der bequemen 18 km Nähe zum Skigebiet Erciyes.",
    quickLinksTitle: "Schnellzugriff",
    roomsLinksTitle: "Unterkunft",
    privilegesTitle: "Vorteile",
    skiPerkTitle: "18 km Erciyes-Shuttle",
    skiPerkDesc: "Regelmäßige Transfers zu den Pisten & beheizter Skiraum.",
    spaPerkTitle: "1.500 m² SPA-Bereich",
    spaPerkDesc: "Hallenbad, Hamam und Sauna für Hotelgäste kostenfrei.",
    legalLinksTitle: "Rechtliches & Impressum",
    copyright: "© 2026 City One Hotel Kayseri. Alle Rechte vorbehalten.",
    legalNotice: "Handelskammer Kayseri Registernr: 41285. Alle Preise inkl. MwSt.",
    developerBadge: "Production-Ready Architecture | React 18 & Tailwind CSS"
  },

  bookingModal: {
    step1Title: "Buchungsübersicht & Gastdaten",
    step2Title: "Ihre Reservierungsanfrage ist eingegangen!",
    guestInfoLabel: "Kontaktdaten des Gastes",
    fullNamePlaceholder: "Vor- und Nachname",
    phonePlaceholder: "+49 170 0000000",
    emailPlaceholder: "name@beispiel.de",
    notesPlaceholder: "Besondere Wünsche (z. B. hohe Etage, Erciyes-Blick, Babybett)",
    pricingBreakdown: "Preisaufstellung",
    nightUnit: "Nacht",
    subtotal: "Zimmerpreis",
    taxes: "MwSt. & Tourismusabgaben (inbegriffen)",
    totalPrice: "Gesamtbetrag",
    perNightRate: "Preis pro Nacht",
    datesSummary: "Ausgewählte Reisedaten",
    guestsSummary: "Gäste",
    confirmButton: "Reservierung Bestätigen",
    cancelButton: "Schließen",
    successMessage: "Ihre Anfrage wurde an das Reservierungsteam des City One Hotels übermittelt. Unser Mitarbeiter wird sich zeitnah mit Ihnen in Verbindung setzen.",
    reservationCodeLabel: "Reservierungscode",
    returnHomeButton: "Zur Startseite",
    whatsappConfirmButton: "Per WhatsApp Bestätigen"
  },

  floatingActions: {
    whatsappTooltip: "WhatsApp Schnellanfrage",
    whatsappMessage: "Guten Tag, ich möchte Informationen und eine Reservierung für das City One Hotel Kayseri anfragen.",
    phoneTooltip: "Jetzt Anrufen: +90 (352) 207 00 00",
    backToTopTooltip: "Nach oben"
  }
};
