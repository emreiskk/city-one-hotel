/**
 * City One Hotel Kayseri - Русский словарь локализации (RU)
 * Высокий стандарт гостеприимства для русскоязычных гостей и лыжников Эрджиеса
 */

export const ru = {
  langCode: "ru",
  langLabel: "Русский",
  flag: "🇷🇺",

  hotel: {
    name: "City One Hotel",
    city: "Кайсери",
    stars: 4,
    starLabel: "4-звездочный отель городского и горнолыжного отдыха",
    tagline: "У подножия горы Эрджиес, в самом сердце Кайсери",
    slogan: "Престиж для деловых поездок, уют для отдыха в Эрджиесе",
    phone: "+90 (352) 207 00 00",
    phoneRaw: "+903522070000",
    receptionPhone: "+90 352 207 00 00",
    receptionLabel: "Ресепшн: +90 352 207 00 00",
    santralPhone: "+90 352 207 00 00",
    santralLabel: "Ресепшн: +90 352 207 00 00",
    reservationPhone: "+90 (506) 752 02 86",
    whatsapp: "+90 506 752 02 86",
    whatsappRaw: "905067520286",
    whatsappLabel: "WhatsApp: +90 506 752 02 86",
    email: "info@cityonekayseri.com",
    reservationEmail: "reservation@cityonekayseri.com",
    address: "Eski Sanayi Bolgesi 2. Cadde No: 6002, Коджасинан / Кайсери, Турция",
    locationHighlights: "6 км от аэропорта Кайсери, 5 минут до Forum Kayseri, 18 км до горнолыжного курорта Эрджиес",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    operationalHours: {
      spaWeekdays: "09:00 - 23:00 (будни)",
      spaWeekend: "09:00 - 21:00 (выходные)",
      breakfast: "07:00 - 10:00 (шведский стол)",
      dinner: "Обслуживание A La Carte до 00:00",
      roomService: "Круглосуточное обслуживание в номерах (24/7)"
    },
    guestPrivileges: [
      "Бесплатный валет-паркинг и крытая автостоянка",
      "Бесплатный чайный/кофейный набор и ежедневная вода",
      "Утюг и гладильная доска в каждом номере",
      "Крытый подогреваемый полуолимпийский бассейн",
      "Традиционный турецкий хаммам",
      "Финская паровая баня и сухая сауна",
      "Гидромассажное джакузи и релакс-зона",
      "Тренажерный и силовой зал (фитнес)",
      "Круглосуточный рум-сервис (24 часа)"
    ],
    rating: {
      score: "4.1",
      totalReviews: "3 200+",
      label: "Рейтинг Google: 4.1 / 5.0 (3.2K+ отзывов)",
      googleScore: "4.1 / 5.0"
    }
  },

  navigation: [
    { id: "rooms", label: "Номера и люксы", href: "#rooms" },
    { id: "spa", label: "СПА и бассейн", href: "#spa" },
    { id: "ski", label: "Трансфер Эрджиес", href: "#ski" },
    { id: "meetings", label: "Конференции и залы", href: "#meetings" },
    { id: "dining", label: "Гастрономия", href: "#dining" },
    { id: "gallery", label: "Галерея", href: "#gallery" },
    { id: "reviews", label: "Отзывы", href: "#reviews" },
    { id: "contact", label: "Контакты", href: "#contact" }
  ],

  hero: {
    badge: "ПРЕСТИЖНЫЙ ОТЕЛЬ КАЙСЕРИ",
    titlePrimary: "Элегантность, комфорт и",
    titleHighlight: "Панорама Эрджиеса",
    description: "Расположенный в эпицентре деловой и торговой жизни Кайсери, City One Hotel предлагает безупречный 4-звездочный сервис, СПА-комплекс площадью 1500 м² с подогреваемым бассейном и VIP-трансфер на горнолыжный курорт Эрджиес.",
    ctaPrimary: "Забронировать номер",
    ctaSecondary: "Выбрать номер",
    ctaVirtualTour: "Смотреть видео об отеле",
    featuresPills: [
      "18 км до Эрджиеса и регулярный VIP-трансфер",
      "1500 м² СПА и крытый бассейн (в будни до 23:00)",
      "07:00 - 10:00 богатый завтрак «шведский стол»",
      "Бесплатный чайный набор, вода, утюг и парковка"
    ],
    stats: [
      { value: "18 км", label: "До лыжных трасс Эрджиес" },
      { value: "1500 м²", label: "Пространство СПА и релакса" },
      { value: "120+", label: "Комфортабельных номеров" },
      { value: "4.1 / 5", label: "Рейтинг Google (3.2K+)" }
    ],
    backgroundImage: "/assets/hotel/exterior/hero-aerial.jpg"
  },

  bookingBar: {
    title: "Бронирование с гарантией лучшей цены",
    subtitle: "При прямом бронировании бесплатный доступ в СПА и приветственный комплимент включены.",
    labels: {
      checkIn: "Дата заезда",
      checkOut: "Дата выезда",
      adults: "Взрослые",
      children: "Дети (0-12)",
      roomType: "Тип номера",
      submitButton: "Проверить цены и наличие",
      directBookingBadge: "Скидка 10% за прямое бронирование на сайте"
    },
    defaultGuests: {
      adults: 2,
      children: 0
    }
  },

  keyFeatures: {
    sectionBadge: "НАШИ ПРЕИМУЩЕСТВА",
    title: "Почему гости выбирают City One Hotel?",
    subtitle: "От динамичного ритма бизнеса до свежего снега Эрджиеса — сервис европейского класса.",
    items: [
      {
        id: "ski",
        title: "Трансфер в Эрджиес и лыжная комната",
        description: "Всего 18 км от всемирно известного горнолыжного курорта Эрджиес. Регулярный трансфер от дверей отеля и теплая комната для сушки экипировки.",
        icon: "MountainSnow",
        highlight: "18 км / VIP-трансфер"
      },
      {
        id: "spa",
        title: "1500 м² СПА, бассейн и хаммам",
        description: "Подогреваемый полуолимпийский бассейн, турецкий хаммам, финская парная и сауна. В будни с 09:00 до 23:00, в выходные с 09:00 до 21:00.",
        icon: "Waves",
        highlight: "Крытый бассейн и хаммам"
      },
      {
        id: "fitness",
        title: "Современный фитнес- и силовой зал",
        description: "Беговые дорожки, кардиотренажеры и гантельный ряд для поддержания формы доступны гостям отеля бесплатно.",
        icon: "Dumbbell",
        highlight: "Бесплатный фитнес"
      },
      {
        id: "dining",
        title: "Завтрак 07:00-10:00 и ресторан на 750 мест",
        description: "Утренний шведский стол с настоящей пастурмой из Кайсери; ужины A La Carte до полуночи в грандиозном зале ресторана Sini.",
        icon: "Utensils",
        highlight: "07:00 - 10:00 шведский стол"
      },
      {
        id: "inroom",
        title: "Чайный набор, утюг, вода и рум-сервис 24/7",
        description: "Бесплатный чай и кофе, чайник, ежедневная питьевая вода, утюг с гладильной доской и круглосуточная доставка блюд в номер.",
        icon: "Coffee",
        highlight: "Круглосуточный сервис"
      },
      {
        id: "parking",
        title: "Крытый паркинг и услуги валета",
        description: "Охраняемая 24 часа в сутки подземная парковка с видеонаблюдением и бесплатный сервис парковщика для всех постояльцев.",
        icon: "ShieldCheck",
        highlight: "Бесплатная парковка"
      }
    ]
  },

  roomsSection: {
    sectionBadge: "ВАРИАНТЫ РАЗМЕЩЕНИЯ",
    title: "Просторные, тихие и современные номера",
    subtitle: "Гарантия лучшей стоимости: каждая деталь создана для вашего безмятежного отдыха и глубокого сна.",
    categories: [
      { id: "all", label: "Все номера" },
      { id: "standart", label: "Стандартный номер" },
      { id: "superior", label: "Супериор" },
      { id: "double", label: "Двуспальный номер" },
      { id: "twin", label: "Твин (2 кровати)" },
      { id: "aile", label: "Семейный номер" },
      { id: "jakuzi", label: "Люкс с джакузи" }
    ],
    pricingNote: "В стоимость включен завтрак «шведский стол», посещение СПА-зоны 1500 м² и все налоги.",
    ui: {
      photosCount: "фото",
      moreAmenities: "доп. удобств",
      bookRoom: "Забронировать",
      inspectDetails: "Подробнее",
      modalArea: "Площадь:",
      modalCapacity: "Вместимость:",
      modalBed: "Кровать:",
      modalAmenitiesTitle: "Удобства номера и привилегии",
      confirmBook: "Забронировать этот номер"
    },
    rooms: [
      {
        id: "standart-city",
        category: "standart",
        categoryLabel: "Категория Стандарт",
        name: "Стандартный номер с видом на город",
        pricePerNight: 2750,
        formattedPrice: "2 750 ₺",
        capacity: "1 - 2 гостя",
        bedType: "1 двуспальная или 2 ортопедические раздельные кровати",
        size: "27 м²",
        view: "Вид на город и проспект",
        popular: false,
        tag: "Экономично и комфортно",
        image: "/assets/hotel/rooms/standart-1.jpg",
        images: [
          "/assets/hotel/rooms/standart-1.jpg",
          "/assets/hotel/rooms/standart-2.jpg",
          "/assets/hotel/rooms/room-detail-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "27 м² продуманного городского дизайна",
          "Бесплатный чайный и кофейный набор в номере",
          "Ежедневная бесплатная бутилированная вода",
          "Утюг и гладильная доска в номере",
          "Бесшумный мини-бар",
          "Высокоскоростной Wi-Fi 6 интернет",
          "Круглосуточное обслуживание в номерах (24/7)",
          "Мраморная ванная с тропическим душем"
        ],
        shortDesc: "Тихое рабочее место, бесплатный чайный набор и эргономичное размещение для деловых поездок."
      },
      {
        id: "superior-room",
        category: "superior",
        categoryLabel: "Категория Супериор",
        name: "Номер повышенной комфортности Superior",
        pricePerNight: 3250,
        formattedPrice: "3 250 ₺",
        capacity: "2 гостя",
        bedType: "1 большая ортопедическая кровать King Size",
        size: "43 м²",
        view: "Широкая панорама города",
        popular: true,
        tag: "Самый популярный выбор для бизнеса и отдыха",
        image: "/assets/hotel/rooms/superior-1.jpg",
        images: [
          "/assets/hotel/rooms/superior-1.jpg",
          "/assets/hotel/rooms/superior-2.jpg",
          "/assets/hotel/rooms/room-detail-2.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "43 м² просторного жилого пространства",
          "Большая кровать King Size и уютная лаунж-зона",
          "Бесплатный чайный набор и кофемашина",
          "Ежедневная бесплатная бутилированная вода",
          "Утюг и гладильная доска в номере",
          "Бесшумный мини-бар",
          "Высокоскоростной Wi-Fi 6 интернет",
          "Круглосуточный рум-сервис"
        ],
        shortDesc: "43 м² объема, современный интерьер и премиальное качество сна для взыскательных гостей."
      },
      {
        id: "double-room",
        category: "double",
        categoryLabel: "Категория Double",
        name: "Номер Double Deluxe с двуспальной кроватью",
        pricePerNight: 3100,
        formattedPrice: "3 100 ₺",
        capacity: "2 гостя",
        bedType: "1 большая двуспальная кровать King Size",
        size: "35 м²",
        view: "Спокойный вид на город",
        popular: false,
        tag: "Идеально для пар",
        image: "/assets/hotel/rooms/double-1.jpg",
        images: [
          "/assets/hotel/rooms/double-1.jpg",
          "/assets/hotel/rooms/room-detail-3.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "35 м² продуманной планировки для двоих",
          "Ортопедическая кровать King Size",
          "Бесплатный чайный набор и чайник",
          "Ежедневная бесплатная бутилированная вода",
          "Утюг и гладильная доска в номере",
          "Бесшумный мини-бар",
          "Высокоскоростной Wi-Fi 6 интернет",
          "Круглосуточное обслуживание в номере"
        ],
        shortDesc: "Умиротворяющая атмосфера для пар с просторной кроватью и расслабляющим дизайном."
      },
      {
        id: "twin-room",
        category: "twin",
        categoryLabel: "Категория Twin",
        name: "Номер Twin с двумя раздельными кроватями",
        pricePerNight: 2950,
        formattedPrice: "2 950 ₺",
        capacity: "2 гостя",
        bedType: "2 раздельные ортопедические односпальные кровати",
        size: "41 м²",
        view: "Вид на город",
        popular: false,
        tag: "Для коллег и друзей",
        image: "/assets/hotel/rooms/standart-2.jpg",
        images: [
          "/assets/hotel/rooms/standart-2.jpg",
          "/assets/hotel/rooms/standart-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "41 м² комфортного пространства с двумя кроватями",
          "2 независимые ортопедические кровати",
          "Бесплатный чайный набор и чайник",
          "Ежедневная бесплатная бутилированная вода",
          "Утюг и гладильная доска в номере",
          "Бесшумный мини-бар",
          "Высокоскоростной Wi-Fi 6 интернет",
          "Круглосуточный рум-сервис"
        ],
        shortDesc: "41 м² площади с двумя отдельными спальными местами и удобным рабочим столом."
      },
      {
        id: "family-comfort",
        category: "aile",
        categoryLabel: "Категория Семейный",
        name: "Семейный номер Family Comfort",
        pricePerNight: 3950,
        formattedPrice: "3 950 ₺",
        capacity: "3 - 4 гостя",
        bedType: "1 двуспальная кровать + 2 раздельные кровати",
        size: "47 м²",
        view: "Вид на город и сад",
        popular: false,
        tag: "Для семей и горнолыжных компаний",
        image: "/assets/hotel/rooms/family-1.jpg",
        images: [
          "/assets/hotel/rooms/family-1.jpg",
          "/assets/hotel/rooms/room-detail-1.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "47 м² многоместной семейной планировки",
          "Конфигурация: 1 двуспальная + 2 раздельные кровати",
          "Бесплатный чайный набор и чайник",
          "Ежедневная бесплатная бутилированная вода",
          "Утюг и гладильная доска в номере",
          "Холодильник и мини-бар",
          "Высокоскоростной Wi-Fi 6 интернет",
          "Круглосуточный рум-сервис"
        ],
        shortDesc: "Просторные 47 м² планировки, созданной специально для комфортного отдыха семей с детьми."
      },
      {
        id: "jakuzili-suit",
        category: "jakuzi",
        categoryLabel: "Категория Люкс",
        name: "Представительский люкс с джакузи для молодоженов",
        pricePerNight: 5400,
        formattedPrice: "5 400 ₺",
        capacity: "2 гостя",
        bedType: "1 ультра-роскошная кровать Super King Size",
        size: "53 м²",
        view: "Панорама на город и гору Эрджиес",
        popular: true,
        tag: "Приватное джакузи и VIP-сервис",
        image: "/assets/hotel/rooms/jakuzi-1.jpg",
        images: [
          "/assets/hotel/rooms/jakuzi-1.jpg",
          "/assets/hotel/rooms/jakuzi-2.jpg",
          "/assets/hotel/rooms/jakuzi-detail.jpg",
          "/assets/hotel/rooms/banyo-1.jpg"
        ],
        amenities: [
          "53 м² люкс с личной гидромассажной ванной-джакузи",
          "Отдельная гостиная комната и кабинетная зона",
          "VIP приветственная корзина фруктов и угощений",
          "Ежедневная бесплатная вода и мини-бар",
          "Утюг и гладильная доска в номере",
          "Бесплатный завтрак в номер (по запросу)",
          "Круглосуточное обслуживание в номере",
          "Панорамный обзор вулкана Эрджиес"
        ],
        shortDesc: "53 м² приватного гидромассажного джакузи и отдельная гостиная для романтического отдыха VIP-уровня."
      }
    ]
  },

  spaSection: {
    sectionBadge: "ЗДОРОВЬЕ И ВЕЛНЕС",
    title: "СПА-комплекс 1500 м² и крытый бассейн",
    subtitle: "После морозного лыжного дня на Эрджиесе или насыщенных деловых встреч погрузитесь в тепло термальных вод, хаммама и сауны.",
    stats: [
      { value: "09:00 - 23:00", label: "Часы работы в будние дни" },
      { value: "09:00 - 21:00", label: "Часы работы в выходные дни" },
      { value: "1500 м²", label: "Общая площадь СПА" },
      { value: "28-30°C", label: "Температура бассейна" }
    ],
    tabs: [
      {
        id: "pool",
        title: "Полуолимпийский крытый бассейн",
        subtitle: "Круглогодичное гигиеничное плавание при температуре 29°C",
        description: "Крытый бассейн полуолимпийского формата с озоновой очисткой воды и стабильной температурой 28-30°C открыт для тренировок и релаксации.",
        image: "/assets/hotel/spa/havuz-1.jpg",
        bulletPoints: [
          "Стабильная температура воды 29°C",
          "Просторная зона отдыха с шезлонгами",
          "Архитектура с естественным освещением",
          "Гидромассажное джакузи у бассейна"
        ]
      },
      {
        id: "hamam",
        title: "Традиционный турецкий хаммам",
        subtitle: "Многовековые османские ритуалы очищения",
        description: "Мраморный теплый чебек-таши, купольные своды и традиционные курны: пилинг кесе и пенный массаж снимут накопившуюся усталость.",
        image: "/assets/hotel/spa/hamam-1.jpg",
        images: ["/assets/hotel/spa/hamam-1.jpg", "/assets/hotel/spa/hamam-2.jpg"],
        bulletPoints: [
          "Классический пилинг кесе и пенный массаж",
          "Подогреваемый камень из цельного мрамора",
          "Аутентичная турецкая банная архитектура",
          "Натуральное растительное мыло и чаши"
        ]
      },
      {
        id: "fitness",
        title: "Тренажерный и силовой зал (фитнес)",
        subtitle: "Кардиозона, беговые дорожки и силовые снаряды",
        description: "Беговые дорожки, эллипсоиды и зона свободных весов позволят продолжать тренировки во время отдыха или командировки бесплатно.",
        image: "/assets/hotel/spa/spa-1.jpg",
        bulletPoints: [
          "Современные беговые дорожки и кардиолиния",
          "Свободные веса и гантельный ряд",
          "Зона растяжки, пилатеса и ОФП",
          "Бесплатный вход для гостей отеля"
        ]
      },
      {
        id: "vitamin",
        title: "СПА Витамин-бар и детокс",
        subtitle: "Свежевыжатые соки и целебные сборы",
        description: "Восстановите водно-солевой баланс после заплыва или сауны натуральными цитрусовыми фрешами, фиточаями и витаминными смузи.",
        image: "/assets/hotel/spa/vitamin-bar-1.jpg",
        bulletPoints: [
          "Свежевыжатые фруктовые и овощные соки",
          "Ароматные травяные и детокс-чаи",
          "Освежающие белково-минеральные шейки",
          "Спокойная зона лаундж-отдыха"
        ]
      },
      {
        id: "sauna",
        title: "Финская паровая баня и сухая сауна",
        subtitle: "Натуральная сосна и эвкалиптовая ароматерапия",
        description: "Сухая финская сауна глубоко прогревает мышцы, а эвкалиптовая влажная паровая комната очищает дыхание и раскрывает поры.",
        image: "/assets/hotel/spa/spa-1.jpg",
        bulletPoints: [
          "Финская сухая сауна (85-90°C)",
          "Влажная эвкалиптовая парная",
          "Шоковый душ и ледяная чаша",
          "Детокс-бар с напитками"
        ]
      },
      {
        id: "gelin",
        title: "Торжественный свадебный хаммам",
        subtitle: "Праздничный ритуал с музыкой и угощениями",
        description: "Традиции восточного свадебного хаммама в современном люксовом исполнении: музыкальное сопровождение, угощения и спа-ритуалы.",
        image: "/assets/hotel/spa/gelin-hamami.jpg",
        video: "/assets/hotel/videos/gelin-hamami.mp4",
        bulletPoints: [
          "Индивидуальное звуковое оформление",
          "Праздничные подносы со сладостями",
          "Персональный пенный массаж",
          "Доступен живой видеотур зала"
        ]
      },
      {
        id: "massage",
        title: "Восточные и лечебные массажи",
        subtitle: "Сертифицированные мастера международного уровня",
        description: "От балийского массажа до классического европейского, ароматерапии и глубокого спортивного восстановления после лыжного катания.",
        image: "/assets/hotel/spa/spa-2.jpg",
        bulletPoints: [
          "Традиционный балийский и тайский массаж",
          "Глубокотканный массаж после лыжных спусков",
          "Стоун-терапия горячими вулканическими камнями",
          "Приватный VIP-сьют для парного массажа"
        ]
      }
    ],
    videoTourButton: "Смотреть видеотур хаммама",
    infoLineButton: "Справка по СПА",
    hoursBadge: "Пн-Пт: 09:00 - 23:00 • Сб-Вс: 09:00 - 21:00"
  },

  skiSection: {
    sectionBadge: "ЗИМНИЙ СПОРТ И ЛЫЖИ",
    title: "18 км до Эрджиеса: идеальный лыжный отпуск с максимальным комфортом",
    subtitle: "Вместо того чтобы мерзнуть на холодной вершине, наслаждайтесь городским теплом, 1500 м² СПА и изысканной кухней каждый вечер.",
    distance: "18 км",
    duration: "Около 20 минут",
    distanceLabel: "Расстояние до склонов Эрджиеса",
    durationLabel: "Время в пути",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1400&q=80",
    advantages: [
      {
        title: "VIP-трансфер из отеля прямо к подъемникам",
        desc: "В течение всего лыжного сезона организован регулярный трансфер от отеля к станциям Tekir Kapi и Develi Kapi на курорте Эрджиес."
      },
      {
        title: "Теплая комната для лыж и ботинок",
        desc: "Безопасное хранилище для лыж и сноубордов с системой сушки ботинок, чтобы каждое утро начиналось в тепле и сухости."
      },
      {
        title: "Ски-пассы и прокат со скидкой",
        desc: "Приобретайте ски-пассы прямо на ресепшн без очередей у касс подъемников и пользуйтесь скидками в партнерских лыжных школах."
      },
      {
        title: "Апре-ски у камина в лобби отеля",
        desc: "После спусков вас ждут горячий турецкий салеп, свежая домашняя выпечка и расслабляющая музыка у камина в лобби."
      }
    ],
    shuttleButton: "Узнать расписание трансфера"
  },

  meetingsSection: {
    sectionBadge: "КОНФЕРЕНЦИИ И МЕРОПРИЯТИЯ",
    title: "Престижные залы для конгрессов и торжеств",
    subtitle: "От 15 до 500 человек: безупречная организация симпозиумов, презентаций, семинаров, банкетов и свадеб.",
    contactForHalls: "Запросить расчет мероприятия",
    halls: [
      {
        id: "kayseri-ballroom",
        name: "Большой бальный зал Kayseri",
        capacity: "450 - 500 человек",
        area: "520 м²",
        type: "Банкет / Конгресс / Гала-ужин",
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
        features: ["Высокие потолки без колонн и сцена", "Лазерный проектор и два гигантских LED-экрана", "Умные световые и аудиосистемы", "Просторное фойе для приветственных коктейлей"]
      },
      {
        id: "erciyes-ballroom",
        name: "Конгресс-зал Erciyes",
        capacity: "350 - 400 человек",
        area: "420 м²",
        type: "Театр / Гала / Класс",
        image: "/assets/hotel/halls/erciyes/erciyes-1.jpg",
        gallery: ["/assets/hotel/halls/erciyes/erciyes-1.jpg"],
        features: ["Потолки без колонн", "Лазерная проекция и мощный звук", "Кабины синхронного перевода", "Отдельная зона фойе"]
      },
      {
        id: "yelken-hall",
        name: "Конференц-зал Yelken",
        capacity: "120 - 150 человек",
        area: "160 м²",
        type: "Семинар / Презентация / Круглый стол",
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
        features: ["Естественный дневной свет", "Эргономичные кресла", "Оптоволоконный Wi-Fi", "Кофе-брейк кейтеринг"]
      },
      {
        id: "efes-hall",
        name: "Зал для семинаров Efes",
        capacity: "80 - 100 человек",
        area: "110 м²",
        type: "Класс / Тренинг / Воркшоп",
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
        features: ["Акустическая шумоизоляция", "Ultra HD проекция", "Модульная расстановка столов", "Индивидуальный сервис"]
      },
      {
        id: "kapadokya-hall",
        name: "Зал совещаний Kapadokya",
        capacity: "60 - 80 человек",
        area: "95 м²",
        type: "Обучение / Совет директоров",
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
        features: ["Интерактивная смарт-панель", "Автоматизация мультимедиа", "Wi-Fi 6", "VIP-кофе-брейк"]
      },
      {
        id: "sini-hall",
        name: "Банкетный зал Sini",
        capacity: "150 человек",
        area: "200 м²",
        type: "Банкетная и свадебная рассадка",
        image: "/assets/hotel/dining/sini-restaurant-750.jpg",
        video: "/assets/hotel/videos/sini-salonu.mp4",
        features: ["Торжественная банкетная рассадка", "Живая музыка и звук", "Авторское меню шеф-повара", "VIP-обслуживание"]
      }
    ]
  },

  diningSection: {
    sectionBadge: "ГАСТРОНОМИЯ И РЕСТОРАН",
    title: "Традиционные вкусы и ресторан Sini на 750 персон",
    subtitle: "Шведский стол с 07:00 до 10:00, ужин A La Carte до полуночи и круглосуточная доставка в номер 24/7.",
    image: "/assets/hotel/dining/sini-restaurant-750.jpg",
    capacityBadge: "Вместимость зала 750 гостей",
    hours: {
      breakfast: "07:00 - 10:00 (шведский стол)",
      dinner: "Ужин до 00:00",
      roomService: "Круглосуточный рум-сервис (24/7)"
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
        title: "Ресторан Sini (на 750 мест)",
        desc: "Один из крупнейших ресторанов Кайсери: идеальная площадка для корпоративных банкетов, свадеб и гала-ужинов."
      },
      {
        title: "Богатый завтрак «шведский стол» (07:00 - 10:00)",
        desc: "Настоящая пастурма из Кайсери, горячий пирог су-берек, домашнее варенье, сырные ассорти и свежая выпечка."
      },
      {
        title: "La Brasserie A La Carte и рум-сервис 24/7",
        desc: "Ужины до полуночи и круглосуточная доставка горячих ресторанных блюд прямо в ваш номер."
      }
    ],
    bookWithBreakfast: "Забронировать с завтраком",
    reserveTable: "Заказать столик",
    tabBreakfast: "Завтрак 'шведский стол'",
    tabSini: "Ресторан Sini",
    tabAlacarte: "Ресторан A La Carte",
    modes: {
      sini: {
        title: "Ресторан Sini на 750 мест",
        subtitle: "Крупнейший банкетный зал в Кайсери",
        badge: "Вместимость 750"
      },
      breakfast: {
        title: "Богатый завтрак 'шведский стол' по-кайсерийски",
        subtitle: "Настоящая пастурма, горячий бёрек и 100+ блюд",
        badge: "12 фото"
      },
      alacarte: {
        title: "La Brasserie A La Carte",
        subtitle: "Изысканная международная и местная кухня",
        badge: "5 фото"
      }
    }
  },

  gallerySection: {
    sectionBadge: "ФОТОГРАФИИ И ВИДЕО НАШЕГО ОТЕЛЯ",
    title: "Фото- и видеогалерея City One Hotel",
    subtitle: "Элегантность у подножия горы Эрджиес: подлинные кадры залов, номеров, СПА-центра 1500 м² и богатой кухни отеля.",
    zoomLabel: "Увеличить",
    watchLabel: "Смотреть видео",
    categories: {
      all: "Вся галерея",
      exterior: "Фасад и лобби",
      rooms: "Номера и сьюты",
      halls: "Банкетные и конференц-залы",
      spa: "СПА, бассейн и хаммам",
      dining: "Ресторан и шведский стол",
      videos: "Видеотуры"
    }
  },

  reviewsSection: {
    sectionBadge: "ОТЗЫВЫ ГОСТЕЙ",
    title: "Честные впечатления наших постояльцев",
    subtitle: "Реальный опыт горнолыжников Эрджиеса и деловых путешественников со всего мира.",
    ratingSummary: {
      average: "4.1",
      outOf: "5",
      totalVerified: "3 200+ отзывов в Google",
      cleanliness: "4.2",
      location: "4.5",
      service: "4.1",
      comfort: "4.0"
    },
    labels: {
      cleanliness: "Чистота",
      location: "Расположение",
      service: "Сервис и персонал",
      comfort: "Комфорт номеров",
      googleScore: "Оценка Google и отеля",
      verifiedGuest: "Проверенный гость"
    },
    reviews: [
      {
        id: "rev-1",
        name: "Ахмет Сердар К.",
        role: "Бизнесмен - Стамбул",
        date: "Октябрь 2026",
        rating: 5,
        title: "Мой постоянный выбор в Кайсери",
        comment: "Приезжаю в промышленную зону Кайсери 6-7 раз в год. Тишина в номерах, скоростной Wi-Fi и гостеприимный персонал намного превосходят стандарты 4 звезд. Завтрак с пастурмой великолепен.",
        roomStayed: "Номер Superior Standard"
      },
      {
        id: "rev-2",
        name: "Элиф и Мурат Й.",
        role: "Семейный лыжный отдых - Анкара",
        date: "Январь 2026",
        rating: 5,
        title: "Лучшее решение для катания на Эрджиесе",
        comment: "Решили остановиться в городе в City One вместо дорогих отелей на горе и остались в восторге. Дорога в 18 км занимала всего 18 минут. После лыж прийти в СПА 1500 м² и сауну — бесценно. Семейный номер очень просторный.",
        roomStayed: "Номер Family Comfort"
      },
      {
        id: "rev-3",
        name: "Д-р Селим Текиналп",
        role: "Делегат медицинского конгресса - Измир",
        date: "Сентябрь 2026",
        rating: 5,
        title: "Отличный конференц-зал и бассейн",
        comment: "Жил 3 дня во время национального симпозиума. Акустика и кондиционирование в зале Erciyes идеальные. Каждый вечер плавал в полуолимпийском бассейне. Центр города в шаговой доступности.",
        roomStayed: "Номер Deluxe с видом на Эрджиес"
      },
      {
        id: "rev-4",
        name: "Мерве Челик",
        role: "Поездка на выходные - Адана",
        date: "Ноябрь 2026",
        rating: 5,
        title: "Угловой люкс и джакузи прекрасны",
        comment: "Арендовали представительский угловой люкс на годовщину свадьбы. Панорамный вид на Эрджиес с двух сторон и джакузи невероятно романтичны. Спасибо персоналу за сюрприз в виде корзины фруктов.",
        roomStayed: "Executive Corner Suite"
      }
    ]
  },

  faqSection: {
    sectionBadge: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
    title: "Ответы на популярные вопросы",
    subtitle: "Все важные детали перед вашим комфортным заездом.",
    items: [
      {
        q: "Во сколько заезд (Check-in) и выезд (Check-out)?",
        a: "Время заезда — с 14:00, время выезда — до 12:00 дня. При наличии свободных номеров ранний заезд или поздний выезд предоставляются с удовольствием."
      },
      {
        q: "Как организован трансфер на горнолыжный курорт Эрджиес?",
        a: "Отель находится всего в 18 км от подъемников Эрджиеса. В сезон катания каждое утро от отеля отправляется комфортабельный трансфер к склонам, а вечером обратно. Запись на ресепшн."
      },
      {
        q: "Входит ли в стоимость посещение СПА 1500 м² и бассейна?",
        a: "Да. Все гости отеля бесплатно пользуются крытым подогреваемым бассейном, турецким хаммамом, финской сауной, паровой комнатой и фитнес-залом. Отдельно оплачиваются только индивидуальные массажи."
      },
      {
        q: "Есть ли парковка и услуга парковщика?",
        a: "Да. Охраняемый крытый паркинг с круглосуточным видеонаблюдением и бесплатный валет-сервис включены в проживание."
      },
      {
        q: "Включен ли завтрак в стоимость проживания?",
        a: "Да. При бронировании на нашем официальном сайте богатый завтрак «шведский стол» с региональными деликатесами включен в стоимость."
      }
    ]
  },

  contactSection: {
    sectionBadge: "КОНТАКТЫ И ЛОКАЦИЯ",
    title: "Удобный доступ в самом центре Кайсери",
    subtitle: "В нескольких минутах от аэропорта, вокзала, промышленных кластеров и торговых центров.",
    addressTitle: "Наш адрес",
    addressText: "Eski Sanayi Bolgesi 2. Cadde No: 6002, 38010 Коджасинан / Кайсери, Турция",
    phoneTitle: "Телефоны и связь",
    phones: [
      {
        label: "Ресепшн отеля",
        number: "+90 352 207 00 00",
        formatted: "+90 (352) 207 00 00",
        href: "tel:+903522070000",
        subtext: "Круглосуточная телефонная линия 24/7",
        isWhatsapp: false
      },
      {
        label: "WhatsApp бронирование",
        number: "+90 506 752 02 86",
        formatted: "+90 (506) 752 02 86",
        href: "https://wa.me/905067520286?text=Здравствуйте,%20я%20хочу%20узнать%20подробности%20и%20забронировать%20номер%20в%20City%20One%20Hotel.",
        subtext: "Быстрый ответ и консультация",
        isWhatsapp: true
      }
    ],
    emailTitle: "Электронная почта",
    emails: ["info@cityonekayseri.com", "reservation@cityonekayseri.com"],
    hoursTitle: "График работы служб",
    hoursText: "Ресепшн и обслуживание в номерах круглосуточно 24/7",
    hoursList: [
      { label: "Ресепшн и размещение", time: "Круглосуточно (24/7)" },
      { label: "Рум-сервис в номера", time: "Круглосуточно (24/7)" },
      { label: "СПА, бассейн и хаммам", time: "Пн-Пт: 09:00 - 23:00 • Сб-Вс: 09:00 - 21:00" },
      { label: "Завтрак «шведский стол»", time: "07:00 - 10:00 (ресторан Sini)" },
      { label: "Ужин A La Carte", time: "Обслуживание до 00:00" }
    ],
    privilegesTitle: "Бесплатные привилегии вашего проживания",
    privileges: [
      "Бесплатный чайный и кофейный набор в номере",
      "Ежедневное пополнение питьевой воды",
      "Утюг и гладильная доска в каждом номере",
      "Бесплатный валет-сервис и крытый паркинг",
      "Подогреваемый полуолимпийский бассейн и джакузи",
      "Турецкий хаммам, финская паровая и сауна",
      "Современный тренажерный и силовой зал (фитнес)",
      "Высокоскоростной Wi-Fi 6 на всей территории"
    ],
    quickForm: {
      title: "Форма быстрой связи и запросов",
      subtitle: "Отправьте нам сообщение по групповым заездам, конференциям или особым пожеланиям.",
      successMessage: "Ваше сообщение получено! Служба заботы о гостях свяжется с вами в ближайшее время.",
      namePlaceholder: "Ваше имя и фамилия",
      phonePlaceholder: "Номер телефона",
      emailPlaceholder: "Адрес электронной почты",
      messagePlaceholder: "Ваш вопрос или пожелания по бронированию...",
      submitButton: "Отправить запрос"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.985651817743!2d35.47467657647228!3d38.72957197176044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1216503c72b1%3A0xe541da4fe08169d2!2sCity%20One%20Hotel!5e0!3m2!1sru!2str!4v1700000000000!5m2!1sru!2str"
  },

  newsletter: {
    badge: "CITY ONE PRIVILEGE CLUB",
    title: "Узнавайте первыми об эксклюзивных предложениях и сезоне в Эрджиесе",
    subtitle: "Скидки раннего бронирования, пакеты СПА 1500 м² и гастрономические события прямо на вашу почту.",
    placeholder: "Введите ваш e-mail...",
    button: "Подписаться",
    privacyNotice: "Без спама. Ваши данные надежно защищены, отписаться можно в любой момент.",
    successTitle: "Добро пожаловать в Privilege Club!",
    successMessage: "Спасибо за подписку! Специальные предложения и сезонные анонсы будут отправлены на ваш e-mail.",
    resetButton: "Подписать другой e-mail"
  },

  footer: {
    about: "City One Hotel Kayseri предлагает премиальный 4-звездочный комфорт с современной архитектурой, термальным СПА-комплексом 1500 м² и удобной близостью 18 км к склонам Эрджиеса.",
    quickLinksTitle: "Быстрый переход",
    roomsLinksTitle: "Номера",
    privilegesTitle: "Привилегии",
    skiPerkTitle: "18 км трансфер на Эрджиес",
    skiPerkDesc: "Регулярный шаттл к подъемникам и теплая лыжная комната.",
    spaPerkTitle: "1500 м² СПА-комплекс",
    spaPerkDesc: "Бассейн, хаммам и сауна бесплатны для всех гостей отеля.",
    legalLinksTitle: "Юридическая информация",
    copyright: "© 2026 City One Hotel Kayseri. Все права защищены.",
    legalNotice: "Торговая палата Кайсери рег. № 41285. Все цены включают НДС.",
    developerBadge: "Production-Ready Architecture | React 18 & Tailwind CSS"
  },

  bookingModal: {
    step1Title: "Детали бронирования и гостя",
    step2Title: "Ваш запрос на бронирование принят!",
    guestInfoLabel: "Контактные данные гостя",
    fullNamePlaceholder: "Имя и Фамилия",
    phonePlaceholder: "+7 999 000-00-00",
    emailPlaceholder: "name@example.com",
    notesPlaceholder: "Особые пожелания (высокий этаж, вид на Эрджиес, детская кроватка)",
    pricingBreakdown: "Расчет стоимости",
    nightUnit: "ночь",
    subtotal: "Стоимость проживания",
    taxes: "НДС и туристический сбор (включены)",
    totalPrice: "Итого к оплате",
    perNightRate: "Стоимость за ночь",
    datesSummary: "Выбранные даты",
    guestsSummary: "Гости",
    confirmButton: "Подтвердить бронирование",
    cancelButton: "Закрыть",
    successMessage: "Ваш запрос передан в отдел бронирования City One Hotel. Наш сотрудник свяжется с вами в самое ближайшее время.",
    reservationCodeLabel: "Код отслеживания брони",
    returnHomeButton: "На главную страницу",
    whatsappConfirmButton: "Подтвердить через WhatsApp"
  },

  floatingActions: {
    whatsappTooltip: "Быстрое бронирование в WhatsApp",
    whatsappMessage: "Здравствуйте, я хочу узнать подробнее и забронировать номер в City One Hotel Kayseri.",
    phoneTooltip: "Позвонить: +90 (352) 207 00 00",
    backToTopTooltip: "Наверх"
  }
};
