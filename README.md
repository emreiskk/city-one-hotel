# 🏨 City One Hotel Kayseri — Kurumsal Web Platformu

> **Kayseri'nin Kalbinde, Erciyes'in Eteklerinde 4 Yıldızlı Prestij & Üst Segment Ağırlama Deneyimi**  
> Modern ön yüz mimarisi (React 18 + Vite + Tailwind CSS), 4 dilli (TR, EN, DE, RU) uluslararası yerelleştirme, Single Source of Truth veri yapısı ve lüks otelcilik sektörüne özel koyu tema estetiğiyle geliştirilmiş prodüksiyon seviyesinde web platformu.

---

## 🌟 Projeye Genel Bakış & Sektörel Değer Önerisi

Bu platform, Kayseri şehir merkezinde konumlanan 4 yıldızlı **City One Hotel** için tasarlanmış; OTA (Online Travel Agency) komisyon bağımlılığını azaltıp **doğrudan rezervasyon (direct booking)** hacmini artırmayı hedefleyen yeni nesil bir dijital vitrindir.

Erciyes Kayak Merkezi'ne 18 km mesafesiyle kış turizmini, 1500 m² termal SPA merkeziyle sağlık ve wellness turizmini, 500 ve 750 kişilik kolonsuz balo salonlarıyla ise Orta Anadolu'nun kurumsal kongre ve ziyafet potansiyelini tek bir akıcı deneyimde bir araya getirir.

---

## 🚀 Öne Çıkan Mimari & Sektörel Özellikler

### 1. 🌍 Çok Dilli Küresel Misafir Deneyimi (i18n - 4 Dil)
- **Türkçe (TR), İngilizce (EN), Almanca (DE), Rusça (RU)** dillerinde %100 yerelleştirilmiş içerik ve SEO başlıkları.
- Erciyes kış turizmi için kritik olan Rus ve Alman turist kitlelerine hitap eden özel terminoloji ve para birimi gösterimi.
- Tarayıcı dilini otomatik algılama ve `localStorage` ile kalıcı dil tercihi.

### 2. 🏛️ Otantik Marka Kimliği & Gerçek Medya Galerisi
- **Gerçek Logo Entegrasyonu:** Otelin resmi madalyon logosu, dışındaki beyaz alanlardan tamamen arındırılarak şeffaf PNG formatında navbar, mobil çekmece, modal ve sekme ikonuna (favicon) işlendi.
- **27 Parçalık Fotoğraf & Canlı Video Galerisi:** Otelin dış cephesi, lobisi, odaları, 1500 m² SPA'sı ve 750 kişilik Sini Restoranı için gerçek fotoğraflar ve video turları.
- **Fotoğraf Büyütme (Lightbox) & Video Oynatıcı:** Kategori filtrelemeli, klavye/dokunmatik kaydırma destekli, tam ekran medya deneyimi.

### 3. 🛎️ İnteraktif Rezervasyon & Doğrudan Dönüşüm Motoru
- Tarih seçici, misafir sayısı, oda kategorisi ve gerçek fiyat hesaplamalı çok adımlı rezervasyon süreci.
- Rezervasyon özeti, KDV/vergi dökümü ve benzersiz rezervasyon takip kodu (`C1-XXXXXX`) üretimi.
- Misafir talebini anında **WhatsApp** ve **Telefon santraline** yönlendiren yüksek dönüşüm odaklı çağrı butonları.

### 4. 🗺️ Kesintisiz Google Haritalar & Yol Tarifi Entegrasyonu
- Google Maps Search & Directions API standartlarıyla tam uyumlu; haritada oteli doğrudan seçili açan **"Google Haritalar'da Aç"** ve kullanıcının anlık konumundan rota başlatan **"Yol Tarifi Al"** aksiyonları.
- Kayseri Havalimanı (NAV) ve Erciyes Kayak Merkezi mesafelerini vurgulayan konum rozetleri.

### 5. 💎 Lüks Tasarım Sistemi & Mikro Etkileşimler
- Koyu otel teması (`#070C18`, `#0B0F17`) ve dengeli sıcak altın tonları (`#BF8431`, `#E5C388`).
- Masaüstünde mega-menü alt kategorileri; mobilde ise kaydırma çubuğu taşması olmayan, yatay akıcı ve ergonomik kategori kartları.
- Arka plan kaymasını ve sıçramasını (layout shift) sıfırlayan `useBodyScrollLock` hook mimarisi.

---

## 🛠️ Teknoloji Yığını

| Alan | Teknoloji / Kütüphane | Kullanım Amacı |
| :--- | :--- | :--- |
| **Çekirdek** | React 18 + React DOM | Deklaratif UI, Context API, Hooks mimarisi |
| **Build Aracı** | Vite 8 + ES Modules | 1 saniyenin altında production build ve anlık HMR |
| **Stil & CSS** | Tailwind CSS 3.4 + Vanilla CSS | Özel lüks tasarım tokenları, glassmorphism efektleri |
| **Tipografi** | Google Fonts | `Playfair Display` (Serif Başlıklar) + `Plus Jakarta Sans` (Gövde) |
| **İkon Seti** | Lucide React | Vektörel, hafif ve tutarlı arayüz ikonografisi |
| **Statik Analiz** | Oxlint | Yüksek performanslı JavaScript/JSX kalite denetimi |

---

## 📁 Proje Dizin Yapısı

```bash
city-one-hotel/
├── public/                  # Statik varlıklar, optimize edilmiş logo ve çoklu faviconlar
│   ├── assets/hotel/        # Gerçek otel görselleri (odalar, salonlar, spa, dış cephe, videolar)
│   ├── favicon-32x32.png    # Standart masaüstü tarayıcı sekme ikonu
│   ├── favicon.ico          # Legacy tarayıcı uyumlu favicon
│   └── apple-touch-icon.png # iOS/Android ana ekran ikonu
├── src/
│   ├── components/          # Yeniden kullanılabilir UI bileşenleri
│   │   ├── BookingModal.jsx # Dinamik fiyat dökümlü rezervasyon modalı
│   │   ├── LanguageSwitcher.jsx # 4 dilli lüks açılır menü
│   │   ├── Logo.jsx         # Otantik amblem bileşeni
│   │   ├── Navbar.jsx       # Masaüstü mega-menü & tam ekran mobil çekmece
│   │   ├── NewsletterBanner.jsx # City One Privilege Club bülteni
│   │   ├── PhotoLightboxModal.jsx # Tam ekran galeri büyütücü
│   │   └── VideoModal.jsx   # Canlı video tur modalı
│   ├── context/
│   │   └── LanguageContext.jsx # Reaktif çoklu dil sağlayıcısı
│   ├── data/
│   │   ├── galleryLocalization.js # 27 galeri medyasının 4 dildeki başlık ve açıklamaları
│   │   └── navigationSubItems.js  # Alt menü kategorileri ve açıklamaları
│   ├── design-system/       # Atomik tasarım bileşenleri (Button, Card, Typography)
│   ├── hooks/
│   │   └── useBodyScrollLock.js # iOS/Android/Masaüstü kaydırma kilitleyici
│   ├── locales/             # Çok dilli içerik veri tabanı (tr.js, en.js, de.js, ru.js)
│   ├── sections/            # Sayfa modülleri (Hero, Rooms, Spa, Ski, Meetings, Dining, Gallery, Contact, Footer)
│   ├── App.jsx              # Kök düzen ve sekmeler arası gezinme yöneticisi
│   ├── index.css            # Özel animasyonlar ve glassmorphism sınıfları
│   └── main.jsx             # React DOM başlangıç noktası
├── index.html               # Çoklu dil meta etiketleri, Open Graph ve font tanımları
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Kurulum ve Yerel Geliştirme

```bash
# 1. Depoyu klonlayın
git clone https://github.com/emreiskk/city-one-hotel.git

# 2. Proje dizinine geçin
cd city-one-hotel

# 3. Bağımlılıkları yükleyin
npm install

# 4. Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

### Üretim Derlemesi (Production Build)

```bash
# Optimize edilmiş prodüksiyon paketini derler (dist/)
npm run build

# Üretim paketini yerel olarak önizler
npm run preview
```

---

## 🎯 Mülakat & Sektörel Değerlendirme

Bu çalışma, front-end mühendisliği teknik yetkinliklerinin yanı sıra **otelcilik ve turizm sektörünün ticari dinamiklerini** (doğrudan rezervasyon dönüşümü, uluslararası misafir iletişimi, etkinlik/kongre teklif yönetimi) kavrayan bir vizyonla hayata geçirilmiştir. Temiz kod (Clean Code), performans, erişilebilirlik ve lüks marka konumlandırması ön planda tutulmuştur.
