/**
 * City One Hotel - Merkezi Galeri ve Medya Veri Modeli
 * 31 Doğrulanmış Fotoğraf ve Canlı Video Öğesi
 */

export const RAW_GALLERY_ITEMS = [
  // 4K & Canlı Video Turları
  {
    id: 'v-kayseri',
    type: 'video',
    category: 'videos',
    thumbnail: '/assets/hotel/halls/kayseri/kayseri-1.jpg',
    videoUrl: '/assets/hotel/videos/kayseri-salonu.mp4'
  },
  {
    id: 'v-sini',
    type: 'video',
    category: 'videos',
    thumbnail: '/assets/hotel/dining/sini-restaurant-750.jpg',
    videoUrl: '/assets/hotel/videos/sini-salonu.mp4'
  },
  {
    id: 'v-gelin',
    type: 'video',
    category: 'videos',
    thumbnail: '/assets/hotel/spa/gelin-hamami.jpg',
    videoUrl: '/assets/hotel/videos/gelin-hamami.mp4'
  },
  {
    id: 'v-tour1',
    type: 'video',
    category: 'videos',
    thumbnail: '/assets/hotel/exterior/discephe-1.jpg',
    videoUrl: '/assets/hotel/videos/hotel-tour-04.mp4'
  },

  // Dış Cephe & Lobi
  {
    id: 'g-ext-1',
    type: 'photo',
    category: 'exterior',
    src: '/assets/hotel/exterior/discephe-1.jpg'
  },
  {
    id: 'g-ext-2',
    type: 'photo',
    category: 'exterior',
    src: '/assets/hotel/exterior/discephe-2.jpg'
  },
  {
    id: 'g-ext-3',
    type: 'photo',
    category: 'exterior',
    src: '/assets/hotel/exterior/discephe-3.jpg'
  },
  {
    id: 'g-lobby-1',
    type: 'photo',
    category: 'exterior',
    src: '/assets/hotel/lobby/lobi-1.jpg'
  },
  {
    id: 'g-lobby-2',
    type: 'photo',
    category: 'exterior',
    src: '/assets/hotel/lobby/lobi-2.jpg'
  },

  // Odalar & Süitler
  {
    id: 'g-room-standart',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/standart-1.jpg'
  },
  {
    id: 'g-room-superior',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/superior-1.jpg'
  },
  {
    id: 'g-room-double',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/double-1.jpg'
  },
  {
    id: 'g-room-family',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/family-1.jpg'
  },
  {
    id: 'g-room-jakuzi',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/jakuzi-1.jpg'
  },
  {
    id: 'g-room-jakuzi-det',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/jakuzi-detail.jpg'
  },
  {
    id: 'g-room-banyo',
    type: 'photo',
    category: 'rooms',
    src: '/assets/hotel/rooms/banyo-1.jpg'
  },

  // Balo & Kongre Salonları
  {
    id: 'g-hall-kayseri',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/kayseri/kayseri-1.jpg'
  },
  {
    id: 'g-hall-kayseri-2',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/kayseri/kayseri-2.jpg'
  },
  {
    id: 'g-hall-erciyes',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/erciyes/erciyes-1.jpg'
  },
  {
    id: 'g-hall-yelken',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/yelken/yelken-1.jpg'
  },
  {
    id: 'g-hall-efes',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/efes/efes-1.jpg'
  },
  {
    id: 'g-hall-kapadokya',
    type: 'photo',
    category: 'halls',
    src: '/assets/hotel/halls/kapadokya/kapadokya-1.jpg'
  },

  // 1500 m² SPA & Yarı Olimpik Havuz
  {
    id: 'g-spa-pool',
    type: 'photo',
    category: 'spa',
    src: '/assets/hotel/spa/havuz-1.jpg'
  },
  {
    id: 'g-spa-hamam-1',
    type: 'photo',
    category: 'spa',
    src: '/assets/hotel/spa/hamam-1.jpg'
  },
  {
    id: 'g-spa-gelin',
    type: 'photo',
    category: 'spa',
    src: '/assets/hotel/spa/gelin-hamami.jpg'
  },
  {
    id: 'g-spa-vitamin',
    type: 'photo',
    category: 'spa',
    src: '/assets/hotel/spa/vitamin-bar-1.jpg'
  },

  // Gastronomi & Restoran
  {
    id: 'g-dining-sini',
    type: 'photo',
    category: 'dining',
    src: '/assets/hotel/dining/sini-restaurant-750.jpg'
  },
  {
    id: 'g-dining-bk-1',
    type: 'photo',
    category: 'dining',
    src: '/assets/hotel/dining/breakfast/breakfast-1.jpg'
  },
  {
    id: 'g-dining-bk-2',
    type: 'photo',
    category: 'dining',
    src: '/assets/hotel/dining/breakfast/breakfast-2.jpg'
  },
  {
    id: 'g-dining-bk-3',
    type: 'photo',
    category: 'dining',
    src: '/assets/hotel/dining/breakfast/breakfast-3.jpg'
  },
  {
    id: 'g-dining-ala',
    type: 'photo',
    category: 'dining',
    src: '/assets/hotel/dining/alacarte/alacarte-1.jpg'
  }
];

// Ana Sayfa İçin 6 İmzalı Editoryal Vitrin Öğesi
export const SHOWCASE_ITEM_IDS = [
  'g-ext-1',          // 1. Dış Cephe & Gece Işıklandırması
  'g-room-jakuzi',     // 2. Jakuzili Balayı & Executive Süit
  'g-hall-kayseri',    // 3. Kayseri Balo Salonu (500 Kişi)
  'g-spa-pool',        // 4. Isıtmalı Yarı Olimpik Havuz
  'g-dining-sini',     // 5. Sini Restaurant & Açık Büfe
  'v-tour1'           // 6. Canlı Video Otel Turu
];

// Kategori Listesi Anahtarları
export const GALLERY_CATEGORY_KEYS = [
  { id: 'all', count: RAW_GALLERY_ITEMS.length },
  { id: 'exterior', count: RAW_GALLERY_ITEMS.filter(i => i.category === 'exterior').length },
  { id: 'rooms', count: RAW_GALLERY_ITEMS.filter(i => i.category === 'rooms').length },
  { id: 'halls', count: RAW_GALLERY_ITEMS.filter(i => i.category === 'halls').length },
  { id: 'spa', count: RAW_GALLERY_ITEMS.filter(i => i.category === 'spa').length },
  { id: 'dining', count: RAW_GALLERY_ITEMS.filter(i => i.category === 'dining').length },
  { id: 'videos', count: RAW_GALLERY_ITEMS.filter(i => i.category === 'videos').length }
];

