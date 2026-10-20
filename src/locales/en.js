/**
 * City One Hotel Kayseri - English Locale Dictionary (EN)
 * High-end international hospitality standard
 */

export const en = {
  langCode: "en",
  langLabel: "English",
  flag: "🇬🇧",

  hotel: {
    name: "City One Hotel",
    city: "Kayseri",
    stars: 4,
    starLabel: "4-Star Luxury City & Ski Hotel",
    tagline: "At the Foothills of Mount Erciyes, in the Heart of Kayseri",
    slogan: "Prestige for Business, Warmth for Your Erciyes Getaway",
    phone: "+90 (352) 207 00 00",
    phoneRaw: "+903522070000",
    receptionPhone: "+90 352 207 00 00",
    receptionLabel: "Reception: +90 352 207 00 00",
    santralPhone: "+90 352 207 00 00",
    santralLabel: "Reception: +90 352 207 00 00",
    reservationPhone: "+90 (506) 752 02 86",
    whatsapp: "+90 506 752 02 86",
    whatsappRaw: "905067520286",
    whatsappLabel: "WhatsApp: +90 506 752 02 86",
    email: "info@cityonekayseri.com",
    reservationEmail: "reservation@cityonekayseri.com",
    address: "Eski Sanayi Bolgesi 2. Cadde No: 6002, Kocasinan / Kayseri, Turkey",
    locationHighlights: "6 km from Kayseri Airport, 5 mins from Forum Kayseri, 18 km from Erciyes Ski Resort",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    operationalHours: {
      spaWeekdays: "09:00 - 23:00 (Weekdays)",
      spaWeekend: "09:00 - 21:00 (Weekends)",
      breakfast: "07:00 - 10:00 (Open Buffet)",
      dinner: "A La Carte Service Until 00:00",
      roomService: "24-Hour Continuous (24/7)"
    },
    guestPrivileges: [
      "Complimentary Valet & Indoor Parking",
      "Complimentary In-Room Tea Setup & Daily Water",
      "Iron & Ironing Board in Every Room",
      "Semi-Olympic Heated Indoor Pool",
      "Traditional Turkish Bath (Hamam)",
      "Finnish Steam Bath & Dry Sauna",
      "SPA Whirlpool Jacuzzi & Relaxation Lounge",
      "Fully Equipped Fitness & Weight Gym",
      "24-Hour Round-the-Clock Room Service"
    ],
    rating: {
      score: "4.1",
      totalReviews: "3,200+",
      label: "Google Rating: 4.1 / 5.0 (3.2K+ Reviews)",
      googleScore: "4.1 / 5.0"
    }
  },

  navigation: [
    { id: "rooms", label: "Rooms & Suites", href: "#rooms" },
    { id: "spa", label: "SPA & Pool", href: "#spa" },
    { id: "ski", label: "Erciyes Ski Shuttle", href: "#ski" },
    { id: "meetings", label: "Meetings & Events", href: "#meetings" },
    { id: "dining", label: "Gastronomy", href: "#dining" },
    { id: "gallery", label: "Gallery", href: "#gallery" },
    { id: "reviews", label: "Reviews", href: "#reviews" },
    { id: "contact", label: "Contact", href: "#contact" }
  ],

  hero: {
    badge: "KAYSERI'S PRESTIGE DESTINATION",
    titlePrimary: "Elegance, Comfort and",
    titleHighlight: "Erciyes Panorama",
    description: "Located in the heart of Kayseri's commercial and shopping district, City One Hotel offers a premier 4-star experience featuring a 1,500 m² semi-Olympic pool SPA and dedicated VIP transfers to Mount Erciyes Ski Resort.",
    ctaPrimary: "Book Your Stay",
    ctaSecondary: "Explore Rooms",
    ctaVirtualTour: "Watch Hotel Video",
    featuresPills: [
      "18 km Erciyes Ski Transfer & VIP Shuttle",
      "1,500 m² SPA & Semi-Olympic Pool (Open until 23:00)",
      "07:00 - 10:00 Rich Open Buffet Breakfast",
      "Complimentary In-Room Tea Setup, Water, Iron & Valet"
    ],
    stats: [
      { value: "18 km", label: "To Erciyes Ski Slopes" },
      { value: "1,500 m²", label: "Holistic Wellness SPA" },
      { value: "120+", label: "Comfortable Rooms & Suites" },
      { value: "4.1 / 5", label: "Google Rating (3.2K+)" }
    ],
    backgroundImage: "/assets/hotel/exterior/hero-aerial.jpg"
  },

  bookingBar: {
    title: "Best Rate Guarantee Direct Reservation",
    subtitle: "Direct bookings include complimentary SPA access and a special welcome amenity.",
    labels: {
      checkIn: "Check-in Date",
      checkOut: "Check-out Date",
      adults: "Adults",
      children: "Children (0-12)",
      roomType: "Room Type",
      submitButton: "Check Rates & Availability",
      directBookingBadge: "10% Direct Website Booking Discount Applied"
    },
    defaultGuests: {
      adults: 2,
      children: 0
    }
  },

  keyFeatures: {
    sectionBadge: "OUR PRIVILEGES",
    title: "Why Choose City One Hotel Kayseri?",
    subtitle: "From the fast pace of regional business to the powder snow of Mount Erciyes, discover bespoke 4-star hospitality.",
    items: [
      {
        id: "ski",
        title: "Erciyes Ski Shuttle & Heated Ski Room",
        description: "Only 18 km from world-class Mount Erciyes Ski Resort. Enjoy scheduled VIP transfers and heated ski gear storage.",
        icon: "MountainSnow",
        highlight: "18 km / VIP Shuttle"
      },
      {
        id: "spa",
        title: "1,500 m² SPA, Pool & Turkish Hamam",
        description: "Heated semi-Olympic pool, Turkish hamam, Finnish steam room, dry sauna and jacuzzi open on weekdays 09:00-23:00 and weekends 09:00-21:00.",
        icon: "Waves",
        highlight: "Semi-Olympic Pool & Hamam"
      },
      {
        id: "fitness",
        title: "Fully Equipped Fitness & Gym",
        description: "Stay energized during your business trip or ski holiday with modern treadmills, cardio machines, and free weights.",
        icon: "Dumbbell",
        highlight: "Complimentary Fitness Access"
      },
      {
        id: "dining",
        title: "07:00-10:00 Buffet & 750-Seat Restaurant",
        description: "Authentic Kayseri pastrami open breakfast buffet from 07:00 to 10:00; refined A La Carte dining served until midnight in our grand 750-guest hall.",
        icon: "Utensils",
        highlight: "07:00 - 10:00 Open Buffet"
      },
      {
        id: "inroom",
        title: "Tea Setup, Water, Ironing & 24/7 Room Service",
        description: "Complimentary tea and coffee station, daily bottled water, in-room iron and ironing board, minibar, and 24/7 round-the-clock room service.",
        icon: "Coffee",
        highlight: "24-Hour Room Service"
      },
      {
        id: "parking",
        title: "Free Indoor Parking & Valet Service",
        description: "24-hour CCTV-monitored secure indoor parking garage and professional complimentary valet service for all staying guests.",
        icon: "ShieldCheck",
        highlight: "Free Valet & Parking"
      }
    ]
  },

  roomsSection: {
    sectionBadge: "ACCOMMODATION OPTIONS",
    title: "Spacious, Quiet & Contemporary Rooms",
    subtitle: "Transparent best rate guarantee with every architectural detail engineered for superior comfort and restful sleep.",
    categories: [
      { id: "all", label: "All Rooms" },
      { id: "standart", label: "Standard Room" },
      { id: "superior", label: "Superior Room" },
      { id: "double", label: "Double Room" },
      { id: "twin", label: "Twin Room" },
      { id: "aile", label: "Family Room" },
      { id: "jakuzi", label: "Jacuzzi Suite" }
    ],
    pricingNote: "Rates include open buffet breakfast, 1,500 m² SPA access and all taxes.",
    ui: {
      photosCount: "Photos",
      moreAmenities: "more amenities",
      bookRoom: "Book Room",
      inspectDetails: "View Details",
      modalArea: "Area:",
      modalCapacity: "Capacity:",
      modalBed: "Bed:",
      modalAmenitiesTitle: "Room Amenities & Comfort Privileges",
      confirmBook: "Book This Room"
    },
    rooms: [
      {
        id: "standart-city",
        category: "standart",
        categoryLabel: "Standard Category",
        name: "Standard City View Room",
        pricePerNight: 2750,
        formattedPrice: "2,750 ₺",
        capacity: "1 - 2 Guests",
        bedType: "1 Double or 2 Single Orthopedic Beds",
        size: "27 m²",
        view: "City & Boulevard View",
        popular: false,
        tag: "Comfortable & Economical",
        image: "/assets/hotel/rooms/standart-1.jpg",
        images: [
          "/assets/hotel/rooms/standart-1.jpg",
          "/assets/hotel/rooms/standart-2.jpg",
          "/assets/hotel/rooms/room-detail-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "27 m² Contemporary Urban Design",
          "Complimentary In-Room Tea & Coffee Setup",
          "Daily Complimentary Bottled Water",
          "In-Room Iron & Ironing Board",
          "Silent Mini Bar",
          "High-Speed Wi-Fi 6 Internet",
          "24-Hour Continuous Room Service",
          "Rain Shower Marble Bathroom"
        ],
        shortDesc: "Quiet workstation, free tea setup, and ergonomic comfort for business and city travelers."
      },
      {
        id: "superior-room",
        category: "superior",
        categoryLabel: "Superior Category",
        name: "Superior Comfort Room",
        pricePerNight: 3250,
        formattedPrice: "3,250 ₺",
        capacity: "2 Guests",
        bedType: "1 Spacious King Size Orthopedic Bed",
        size: "43 m²",
        view: "Expansive City Panorama",
        popular: true,
        tag: "Most Preferred Business & Leisure Room",
        image: "/assets/hotel/rooms/superior-1.jpg",
        images: [
          "/assets/hotel/rooms/superior-1.jpg",
          "/assets/hotel/rooms/superior-2.jpg",
          "/assets/hotel/rooms/room-detail-2.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "43 m² Generous Living Space",
          "King Bed & Elegant Lounge Corner",
          "Complimentary Tea Setup & Nespresso",
          "Daily Complimentary Bottled Water",
          "In-Room Iron & Ironing Board",
          "Silent Mini Bar",
          "High-Speed Wi-Fi 6 Internet",
          "24-Hour Continuous Room Service"
        ],
        shortDesc: "43 m² generous layout, modern aesthetics and premium sleeping comfort for discerning guests."
      },
      {
        id: "double-room",
        category: "double",
        categoryLabel: "Double Category",
        name: "Double Deluxe Room",
        pricePerNight: 3100,
        formattedPrice: "3,100 ₺",
        capacity: "2 Guests",
        bedType: "1 Large Double King Size Bed",
        size: "35 m²",
        view: "Relaxing City & Courtyard View",
        popular: false,
        tag: "Ideal for Couples",
        image: "/assets/hotel/rooms/double-1.jpg",
        images: [
          "/assets/hotel/rooms/double-1.jpg",
          "/assets/hotel/rooms/room-detail-3.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "35 m² Tailored Double Layout",
          "King Size Premium Orthopedic Bed",
          "Complimentary Tea Setup & Electric Kettle",
          "Daily Complimentary Bottled Water",
          "In-Room Iron & Ironing Board",
          "Silent Mini Bar",
          "High-Speed Wi-Fi 6 Internet",
          "24-Hour Continuous Room Service"
        ],
        shortDesc: "Peaceful atmosphere designed for couples with a generous king bed and soothing décor."
      },
      {
        id: "twin-room",
        category: "twin",
        categoryLabel: "Twin Category",
        name: "Twin Two-Bed Room",
        pricePerNight: 2950,
        formattedPrice: "2,950 ₺",
        capacity: "2 Guests",
        bedType: "2 Separate Single Orthopedic Beds",
        size: "41 m²",
        view: "City View",
        popular: false,
        tag: "Ideal for Colleagues & Friends",
        image: "/assets/hotel/rooms/standart-2.jpg",
        images: [
          "/assets/hotel/rooms/standart-2.jpg",
          "/assets/hotel/rooms/standart-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "41 m² Spacious Twin Bed Area",
          "2 Independent Single Orthopedic Beds",
          "Complimentary Tea Setup & Kettle",
          "Daily Complimentary Bottled Water",
          "In-Room Iron & Ironing Board",
          "Silent Mini Bar",
          "High-Speed Wi-Fi 6 Internet",
          "24-Hour Continuous Room Service"
        ],
        shortDesc: "41 m² space with two independent beds and a comfortable workstation for traveling companions."
      },
      {
        id: "family-comfort",
        category: "aile",
        categoryLabel: "Family Category",
        name: "Family Comfort Room",
        pricePerNight: 3950,
        formattedPrice: "3,950 ₺",
        capacity: "3 - 4 Guests",
        bedType: "1 Double Bed + 2 Single Beds",
        size: "47 m²",
        view: "City & Garden View",
        popular: false,
        tag: "Families & Ski Groups",
        image: "/assets/hotel/rooms/family-1.jpg",
        images: [
          "/assets/hotel/rooms/family-1.jpg",
          "/assets/hotel/rooms/room-detail-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "47 m² Multi-Bed Family Architecture",
          "1 Double + 2 Single Bed Configuration",
          "Complimentary In-Room Tea Setup",
          "Daily Complimentary Bottled Water",
          "In-Room Iron & Ironing Board",
          "Mini Refrigerator & Bar",
          "High-Speed Wi-Fi 6 Internet",
          "24-Hour Continuous Room Service"
        ],
        shortDesc: "Spacious 47 m² multi-bed layout crafted specifically for families with children and ski groups."
      },
      {
        id: "jakuzili-suit",
        category: "jakuzi",
        categoryLabel: "Suite Category",
        name: "Executive Jacuzzi & Honeymoon Suite",
        pricePerNight: 5400,
        formattedPrice: "5,400 ₺",
        capacity: "2 Guests",
        bedType: "1 Ultra-Luxury Super King Size Bed",
        size: "53 m²",
        view: "Panoramic Dual-Aspect & Mount Erciyes",
        popular: true,
        tag: "Private In-Room Jacuzzi & VIP Service",
        image: "/assets/hotel/rooms/jakuzi-1.jpg",
        images: [
          "/assets/hotel/rooms/jakuzi-1.jpg",
          "/assets/hotel/rooms/jakuzi-2.jpg",
          "/assets/hotel/rooms/jakuzi-detail.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "53 m² Private Hydromassage Jacuzzi Suite",
          "Separate Living Room & Executive Desk",
          "VIP Welcome Amenity Basket & Tea Setup",
          "Daily Complimentary Water & Mini Bar",
          "In-Room Iron & Ironing Board",
          "Optional Complimentary In-Room Breakfast",
          "24-Hour Continuous Room Service",
          "Erciyes Mountain & City Skyline Views"
        ],
        shortDesc: "53 m² private hydromassage jacuzzi and independent living lounge for a romantic VIP retreat."
      }
    ]
  },

  spaSection: {
    sectionBadge: "HEALTH & WELLNESS",
    title: "1,500 m² Thermal-Inspired SPA & Indoor Pool",
    subtitle: "After an invigorating ski day on Mount Erciyes or intense corporate meetings, immerse yourself in warm waters, Turkish hamam rituals, and fitness.",
    stats: [
      { value: "09:00 - 23:00", label: "Weekday Operational Hours" },
      { value: "09:00 - 21:00", label: "Weekend Operational Hours" },
      { value: "1,500 m²", label: "Total Wellness SPA Area" },
      { value: "28-30°C", label: "Heated Semi-Olympic Pool" }
    ],
    tabs: [
      {
        id: "pool",
        title: "Semi-Olympic Indoor Pool",
        subtitle: "Year-round 29°C heated hygienic swimming experience",
        description: "Our semi-Olympic indoor heated swimming pool operates continuously with state-of-the-art ozone disinfection and water temperature kept at 28-30°C.",
        image: "/assets/hotel/spa/havuz-1.jpg",
        bulletPoints: [
          "Constant 29°C water temperature",
          "Expansive sun lounger rest area",
          "Sunlit architectural ambiance",
          "SPA Jacuzzi & relaxation corner"
        ]
      },
      {
        id: "hamam",
        title: "Traditional Turkish Bath (Hamam)",
        subtitle: "Centuries-old Ottoman cleansing rituals",
        description: "With heated natural marble stone, authentic marble basins and a soaring dome, our traditional hamam rejuvenates body and spirit with peel-and-foam therapies.",
        image: "/assets/hotel/spa/hamam-1.jpg",
        images: ["/assets/hotel/spa/hamam-1.jpg", "/assets/hotel/spa/hamam-2.jpg"],
        bulletPoints: [
          "Traditional Exfoliating & Foam Massage",
          "Heated Natural Marble Center Stone",
          "Authentic Ottoman Hamam Architecture",
          "Botanical Soaps & Authentic Basins"
        ]
      },
      {
        id: "fitness",
        title: "Fitness & Weight Training Gym",
        subtitle: "Cardio zone, treadmills & free weight station",
        description: "Equipped with modern treadmills, cross-trainers, and free dumbbell sets, our fitness center is complimentary for all in-house guests to maintain their routine.",
        image: "/assets/hotel/spa/spa-1.jpg",
        bulletPoints: [
          "Modern Treadmills & Cardio Circuit",
          "Free Weights & Dumbbell Training Station",
          "Stretching, Pilates & Conditioning Area",
          "Complimentary Access for Hotel Guests"
        ]
      },
      {
        id: "vitamin",
        title: "SPA Vitamin Bar & Detox",
        subtitle: "Freshly squeezed juices and herbal detox infusions",
        description: "Replenish essential minerals after your pool, sauna, or workout session with freshly squeezed citrus blends, aromatic teas, and healthy smoothies.",
        image: "/assets/hotel/spa/vitamin-bar-1.jpg",
        bulletPoints: [
          "Freshly Squeezed Fruit & Vegetable Juices",
          "Aromatic Herbal & Detox Teas",
          "Healthy Protein & Mineral Shakes",
          "Tranquil Relaxation Lounge"
        ]
      },
      {
        id: "sauna",
        title: "Finnish Steam Bath & Dry Sauna",
        subtitle: "Natural Nordic pine timber & eucalyptus aromatherapy",
        description: "Our natural pine dry Finnish sauna eases muscular tension while our high-humidity eucalyptus steam room clears airways and purifies the skin.",
        image: "/assets/hotel/spa/spa-1.jpg",
        bulletPoints: [
          "85-90°C Temperature-Regulated Dry Sauna",
          "Finnish Steam Bath / Eucalyptus Inhalation",
          "Shock Showers and Ice Fountain",
          "Detox Beverage Bar"
        ]
      },
      {
        id: "gelin",
        title: "Bridal Hamam Celebration",
        subtitle: "Exclusive celebratory ritual with music & treats",
        description: "Blending Anatolian bridal traditions with modern luxury, our private ceremonial hamam offers music, curated catering platters, and uplifting wellness.",
        image: "/assets/hotel/spa/gelin-hamami.jpg",
        video: "/assets/hotel/videos/gelin-hamami.mp4",
        bulletPoints: [
          "Custom Sound & Musical Arrangements",
          "Traditional Henna & Culinary Trays",
          "Personalized Exfoliating & Foam Rituals",
          "Virtual Video Tour Available"
        ]
      },
      {
        id: "massage",
        title: "Far East & Therapeutic Massages",
        subtitle: "Certified international and local therapists",
        description: "From classic Balinese massage to Swedish techniques, soothing aromatherapy, and post-ski deep tissue relief, dissolve all muscular soreness.",
        image: "/assets/hotel/spa/spa-2.jpg",
        bulletPoints: [
          "Authentic Balinese & Thai Massage",
          "Post-Ski Deep Tissue Recovery",
          "Hot Volcanic Stone Therapy",
          "Private Couples VIP Treatment Suite"
        ]
      }
    ],
    videoTourButton: "Watch Bridal Hamam Video Tour",
    infoLineButton: "SPA Information Line",
    hoursBadge: "Mon-Fri: 09:00 - 23:00 • Sat-Sun: 09:00 - 21:00"
  },

  skiSection: {
    sectionBadge: "WINTER SPORTS & SKI",
    title: "18 km to Mount Erciyes: The Ultimate Ski Holiday Comfort",
    subtitle: "Instead of staying on the freezing mountain summit, enjoy city warmth, a 1,500 m² SPA, and exquisite dining each evening.",
    distance: "18 km",
    duration: "Approx. 20 Minutes",
    distanceLabel: "Distance to Erciyes Slopes",
    durationLabel: "Travel Duration",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1400&q=80",
    advantages: [
      {
        title: "Hotel-to-Piste VIP Transfers",
        desc: "Scheduled shuttle transfers directly from our lobby to Mount Erciyes Tekir and Develi ski lift stations."
      },
      {
        title: "Heated Ski & Boot Storage",
        desc: "Secure ski and snowboard lockers with advanced boot-drying systems so you start each morning warm and ready."
      },
      {
        title: "Skipass & Equipment Discounts",
        desc: "Collect your lift passes directly at reception without queues, with discounted equipment rental at partner ski schools."
      },
      {
        title: "Cozy Fireside Après-Ski Lounge",
        desc: "Return from the slopes to hot Turkish salep, fresh oven pastries, and relaxing acoustic music in our fireside lobby."
      }
    ],
    shuttleButton: "Get Ski Transfer & Shuttle Details"
  },

  meetingsSection: {
    sectionBadge: "BUSINESS & CONFERENCES",
    title: "Prestigious Meeting & Event Halls",
    subtitle: "From 15 to 500 guests; flawless organization for corporate congresses, product launches, seminars, weddings, and galas.",
    contactForHalls: "Request Meeting & Event Proposal",
    halls: [
      {
        id: "kayseri-ballroom",
        name: "Kayseri Grand Ballroom",
        capacity: "450 - 500 Guests",
        area: "520 m²",
        type: "Ballroom / Congress / Gala Dinner",
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
        features: ["Pillar-Free High Ceiling & Elevated Stage", "Laser Projection & Dual Giant LED Screens", "Intelligent Robotic Lighting & Acoustics", "Spacious Foyer & Cocktail Reception Area"]
      },
      {
        id: "erciyes-ballroom",
        name: "Erciyes Congress Hall",
        capacity: "350 - 400 Guests",
        area: "420 m²",
        type: "Theater / Gala / Classroom Setup",
        image: "/assets/hotel/halls/erciyes/erciyes-1.jpg",
        gallery: ["/assets/hotel/halls/erciyes/erciyes-1.jpg"],
        features: ["Pillar-Free High Ceiling", "HD Laser Projection & Surround Audio", "Simultaneous Translation Booths", "Dedicated Event Foyer"]
      },
      {
        id: "yelken-hall",
        name: "Yelken Meeting Hall",
        capacity: "120 - 150 Guests",
        area: "160 m²",
        type: "Seminar / Workshop / U-Shape Setup",
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
        features: ["Daylight-Infused Design", "Ergonomic Conference Seating", "High-Speed Fiber Wi-Fi", "Coffee Break Catering Station"]
      },
      {
        id: "efes-hall",
        name: "Efes Seminar Hall",
        capacity: "80 - 100 Guests",
        area: "110 m²",
        type: "Classroom / Boardroom / Workshop",
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
        features: ["Acoustic Soundproofing", "Ultra HD Projection", "Modular Table Layouts", "Bespoke Refreshment Service"]
      },
      {
        id: "kapadokya-hall",
        name: "Kapadokya Executive Room",
        capacity: "60 - 80 Guests",
        area: "95 m²",
        type: "Corporate Training / Seminar",
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
        features: ["Interactive Smart Screen", "Audio/Visual Automation", "Fast Wi-Fi 6 Connection", "VIP Executive Catering"]
      },
      {
        id: "sini-hall",
        name: "Sini Banquet Hall",
        capacity: "150 Guests",
        area: "200 m²",
        type: "Banquet & Private Dining Setup",
        image: "/assets/hotel/dining/sini-restaurant-750.jpg",
        video: "/assets/hotel/videos/sini-salonu.mp4",
        features: ["Banqueting & Wedding Dining Arrangement", "Live Music Acoustic Infrastructure", "Master Chef Gourmet Menus", "VIP Protocol Service"]
      }
    ]
  },

  diningSection: {
    sectionBadge: "GASTRONOMY & RESTAURANT",
    title: "Traditional Flavors & 750-Seat Sini Restaurant",
    subtitle: "Artfully curated 07:00 - 10:00 rich open buffet breakfast, dinner served until 00:00, and 24/7 in-room dining.",
    image: "/assets/hotel/dining/sini-restaurant-750.jpg",
    capacityBadge: "750-Guest Grand Restaurant Capacity",
    hours: {
      breakfast: "07:00 - 10:00 (Open Buffet)",
      dinner: "Dinner Service Until 00:00",
      roomService: "24-Hour Continuous (24/7)"
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
        title: "Sini Restaurant (750-Guest Capacity)",
        desc: "One of Kayseri's largest dining venues, perfectly appointed for corporate banquets, wedding receptions, and gala events."
      },
      {
        title: "Rich Open Buffet Breakfast (07:00 - 10:00)",
        desc: "Authentic cured pastrami, warm water pastry, artisanal jams, regional cheese selections, and freshly baked goods."
      },
      {
        title: "La Brasserie A La Carte & 24/7 Room Service",
        desc: "Dinner service until midnight and around-the-clock room service delivered in the privacy of your suite."
      }
    ],
    bookWithBreakfast: "Book with Breakfast Included",
    reserveTable: "Reserve a Dining Table",
    tabBreakfast: "Open Buffet Breakfast",
    tabSini: "Sini Restaurant",
    tabAlacarte: "A La Carte Restaurant",
    modes: {
      sini: {
        title: "750-Seat Sini Restaurant",
        subtitle: "Kayseri's Largest Banquet & Event Dining Hall",
        badge: "750 Capacity"
      },
      breakfast: {
        title: "Rich Kayseri Open Buffet Breakfast",
        subtitle: "Authentic Pastrami, Hot Pastries & 100+ Varieties",
        badge: "12 Photos"
      },
      alacarte: {
        title: "La Brasserie A La Carte",
        subtitle: "Exquisite International & Kayseri Cuisine",
        badge: "5 Photos"
      }
    }
  },

  gallerySection: {
    sectionBadge: "AUTHENTIC HOTEL GALLERY",
    title: "City One Hotel Photo & Video Showcase",
    subtitle: "Elegance rising at the foot of Mount Erciyes: authentic glimpses of our grand halls, suites, 1,500 m² SPA, and rich culinary experience.",
    zoomLabel: "Zoom",
    watchLabel: "Watch Video",
    categories: {
      all: "All Gallery",
      exterior: "Exterior & Lobby",
      rooms: "Rooms & Suites",
      halls: "Event & Ballrooms",
      spa: "SPA, Pool & Hamam",
      dining: "Restaurant & Buffet",
      videos: "Live Video Tours"
    }
  },

  reviewsSection: {
    sectionBadge: "GUEST EXPERIENCES",
    title: "Authentic Reviews from Real Guests",
    subtitle: "Real stories from Erciyes ski vacationers and regional business professionals.",
    ratingSummary: {
      average: "4.1",
      outOf: "5",
      totalVerified: "3,200+ Verified Google Reviews",
      cleanliness: "4.2",
      location: "4.5",
      service: "4.1",
      comfort: "4.0"
    },
    labels: {
      cleanliness: "Cleanliness",
      location: "Location & Access",
      service: "Service & Staff",
      comfort: "Room Comfort",
      googleScore: "Google Rating",
      verifiedGuest: "Verified Guest"
    },
    reviews: [
      {
        id: "rev-1",
        name: "Ahmet Serdar K.",
        role: "Business Executive - Istanbul",
        date: "October 2026",
        rating: 5,
        title: "My indispensable business stop in Kayseri",
        comment: "I visit Kayseri 6 to 7 times a year for corporate meetings in the Organized Industrial Zone. City One's quiet rooms, fast Wi-Fi, and courteous team genuinely exceed 4-star standards. The breakfast pastrami and fresh pastries are exceptional.",
        roomStayed: "Superior Standard Room"
      },
      {
        id: "rev-2",
        name: "Elif & Murat Y.",
        role: "Family Ski Vacation - Ankara",
        date: "January 2026",
        rating: 5,
        title: "The smartest choice for our Erciyes trip",
        comment: "We preferred staying in the city at City One instead of mountain hotels and were thrilled. The 18 km drive took only 18 minutes. Soaking in the 1,500 m² SPA pool and sauna after a full ski day was priceless. The family room was very spacious.",
        roomStayed: "Family Comfort Room"
      },
      {
        id: "rev-3",
        name: "Dr. Selim Tekinalp",
        role: "Medical Congress Delegate - Izmir",
        date: "September 2026",
        rating: 5,
        title: "Flawless convention facilities & pool",
        comment: "Stayed 3 nights for a national medical symposium hosted at the hotel. Erciyes Hall's acoustics and ventilation were perfect. Enjoyed swimming in the semi-Olympic pool each afternoon. Great proximity to city highlights as well.",
        roomStayed: "Deluxe Erciyes View Room"
      },
      {
        id: "rev-4",
        name: "Merve Celik",
        role: "Weekend Getaway - Adana",
        date: "November 2026",
        rating: 5,
        title: "Corner Suite and Jacuzzi were magnificent",
        comment: "Booked the Executive Corner Suite for our wedding anniversary. The dual-aspect Erciyes panorama and private jacuzzi were truly romantic. Sincere thanks to the staff for the welcome fruit basket surprise.",
        roomStayed: "Executive Corner Suite"
      }
    ]
  },

  faqSection: {
    sectionBadge: "FREQUENTLY ASKED QUESTIONS",
    title: "Everything You Need to Know",
    subtitle: "Helpful details to prepare for your seamless stay.",
    items: [
      {
        q: "What are the Check-in and Check-out times?",
        a: "Check-in begins at 14:00 and check-out is until 12:00 noon. Early check-in or late check-out requests are gladly accommodated subject to availability."
      },
      {
        q: "How does transportation to Mount Erciyes Ski Resort work?",
        a: "Our hotel is located just 18 km from Mount Erciyes ski slopes. During ski season, we operate regular morning and afternoon VIP shuttle transfers directly from the hotel lobby. Reservations can be made at reception."
      },
      {
        q: "Is access to the 1,500 m² SPA and Semi-Olympic Pool included?",
        a: "Yes. All in-house guests enjoy complimentary access to our heated indoor pool, traditional Turkish hamam, Finnish sauna, steam room, and fitness center. Personalized massage treatments are subject to an additional fee."
      },
      {
        q: "Is parking and valet service available?",
        a: "Yes. Our 24-hour CCTV-monitored secure indoor parking garage and professional valet parking service are completely free of charge for all staying guests."
      },
      {
        q: "Is breakfast included in the room rate?",
        a: "Yes. All bookings made directly through our official website include a rich open buffet breakfast showcasing renowned regional delicacies."
      }
    ]
  },

  contactSection: {
    sectionBadge: "CONTACT & LOCATION",
    title: "Effortless Access in the Heart of Kayseri",
    subtitle: "Just minutes away from Kayseri Airport, train station, industrial zones, and major shopping destinations.",
    addressTitle: "Our Address",
    addressText: "Eski Sanayi Bolgesi 2. Cadde No: 6002, 38010 Kocasinan / Kayseri, Turkey",
    phoneTitle: "Telephone & Contact Lines",
    phones: [
      {
        label: "Hotel Reception & Reservations",
        number: "+90 352 207 00 00",
        formatted: "+90 (352) 207 00 00",
        href: "tel:+903522070000",
        subtext: "24/7 Continuous Reception & Concierge",
        isWhatsapp: false
      },
      {
        label: "WhatsApp Direct Reservation",
        number: "+90 506 752 02 86",
        formatted: "+90 (506) 752 02 86",
        href: "https://wa.me/905067520286?text=Hello,%20I%20would%20like%20to%20get%20information%20and%20book%20a%20stay%20at%20City%20One%20Hotel.",
        subtext: "Instant Response & Booking Support",
        isWhatsapp: true
      }
    ],
    emailTitle: "Email Inquiries",
    emails: ["info@cityonekayseri.com", "reservation@cityonekayseri.com"],
    hoursTitle: "Service & Operating Hours",
    hoursText: "Front Desk & 24/7 Continuous Room Service",
    hoursList: [
      { label: "Front Desk & Reception", time: "24 Hours Continuous (24/7)" },
      { label: "Room Service", time: "24 Hours Continuous (24/7)" },
      { label: "SPA, Pool & Hamam", time: "Mon-Fri: 09:00 - 23:00 • Sat-Sun: 09:00 - 21:00" },
      { label: "Open Buffet Breakfast", time: "07:00 - 10:00 (Sini Restaurant)" },
      { label: "Dinner Service", time: "A La Carte Until 00:00" }
    ],
    privilegesTitle: "Complimentary Inclusions with Your Stay",
    privileges: [
      "Complimentary In-Room Tea & Coffee Setup",
      "Daily Complimentary Bottled Water",
      "In-Room Iron & Ironing Board in Every Room",
      "Free Valet Service & Secure Covered Parking",
      "Heated Semi-Olympic Indoor Pool & Jacuzzi",
      "Traditional Turkish Hamam, Finnish Steam & Sauna",
      "Fully Equipped Fitness & Weight Training Gym",
      "High-Speed Wi-Fi 6 Internet Connectivity"
    ],
    quickForm: {
      title: "Quick Inquiry & Request Form",
      subtitle: "Send a direct message to our team for meetings, congresses, group rates, or special inquiries.",
      successMessage: "Your message has been received! Our guest relations team will contact you shortly.",
      namePlaceholder: "Your Full Name",
      phonePlaceholder: "Your Phone Number",
      emailPlaceholder: "Your Email Address",
      messagePlaceholder: "Your message or accommodation requirements...",
      submitButton: "Send Inquiry"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.985651817743!2d35.47467657647228!3d38.72957197176044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1216503c72b1%3A0xe541da4fe08169d2!2sCity%20One%20Hotel!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str"
  },

  newsletter: {
    badge: "CITY ONE PRIVILEGE CLUB",
    title: "Be the First to Discover Exclusive Offers & Erciyes Ski Deals",
    subtitle: "Receive early booking privileges, 1,500 m² SPA packages, and Kayseri gastronomic events directly to your inbox.",
    placeholder: "Enter your email address...",
    button: "Subscribe",
    privacyNotice: "We respect your privacy. No spam guaranteed, unsubscribe at any time.",
    successTitle: "Welcome to Privilege Club!",
    successMessage: "Thank you for subscribing! Exclusive offers and seasonal announcements will be sent to your inbox.",
    resetButton: "Subscribe another email"
  },

  footer: {
    about: "City One Hotel Kayseri offers distinguished 4-star hospitality characterized by modern architecture, a 1,500 m² thermal-inspired SPA center, and 18 km proximity to Mount Erciyes Ski Resort.",
    quickLinksTitle: "Quick Links",
    roomsLinksTitle: "Accommodation",
    privilegesTitle: "Privileges",
    skiPerkTitle: "18 km Erciyes Shuttle",
    skiPerkDesc: "Scheduled shuttle transfers to ski slopes & heated ski gear room.",
    spaPerkTitle: "1,500 m² SPA Center",
    spaPerkDesc: "Complimentary pool, hamam, and sauna for all hotel guests.",
    legalLinksTitle: "Corporate & Legal",
    copyright: "© 2026 City One Hotel Kayseri. All rights reserved.",
    legalNotice: "Kayseri Chamber of Commerce Reg. No: 41285. All rates include VAT.",
    developerBadge: "Production-Ready Architecture | React 18 & Tailwind CSS"
  },

  bookingModal: {
    step1Title: "Reservation Summary & Guest Details",
    step2Title: "Your Reservation Request is Received!",
    guestInfoLabel: "Guest Contact Information",
    fullNamePlaceholder: "Full Name",
    phonePlaceholder: "+1 555 000 0000",
    emailPlaceholder: "name@example.com",
    notesPlaceholder: "Special requests (e.g. high floor, Erciyes view, baby cot)",
    pricingBreakdown: "Price Breakdown",
    nightUnit: "night",
    subtotal: "Room Rate",
    taxes: "VAT & Tourism Taxes (Included)",
    totalPrice: "Total Amount Payable",
    perNightRate: "Per Night Rate",
    datesSummary: "Selected Dates",
    guestsSummary: "Guests",
    confirmButton: "Confirm Reservation",
    cancelButton: "Close",
    successMessage: "Your request has been forwarded to the City One Hotel reservation desk. A representative will contact you shortly.",
    reservationCodeLabel: "Reservation Tracking Code",
    returnHomeButton: "Return to Homepage",
    whatsappConfirmButton: "Confirm via WhatsApp"
  },

  floatingActions: {
    whatsappTooltip: "WhatsApp Quick Booking",
    whatsappMessage: "Hello, I would like to get information and make a reservation for City One Hotel Kayseri.",
    phoneTooltip: "Call Now: +90 (352) 207 00 00",
    backToTopTooltip: "Back to Top"
  }
};
