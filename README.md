# 🏨 City One Hotel Kayseri — Web Uygulaması

> **Kayseri'nin Kalbinde, Erciyes'in Eteklerinde 4 Yıldızlı Prestij ve Lüks Konaklama Deneyimi**  
> Modern ön yüz mimarisi (React 18 + Vite + Tailwind CSS), Single Source of Truth prensibi ve üst segment karanlık lüks tema estetiğiyle geliştirilmiş prodüksiyon seviyesinde otel prototipi.

---

## 🌟 Projeye Genel Bakış

Bu web uygulaması, Kayseri'nin seçkin 4 yıldızlı otellerinden **City One Hotel** için tasarlanmış, modern UI/UX standartlarını ve senior düzeyde front-end mimari prensiplerini sergileyen kapsamlı bir web platformudur.

Otel; iş seyahatleri, kongre turizmi, Erciyes kış sporları ve 1500 m²'lik yarı olimpik kapalı havuzlu SPA merkezi konseptlerini bünyesinde barındırır. Web sitesi tüm bu hizmetleri interaktif rezervasyon motoru, dinamik oda filtreleme ve anlık iletişim kanallarıyla ziyaretçilere sunar.

---

## 🚀 Öne Çıkan Özellikler

- **🏛️ Single Source of Truth (SSoT) Mimarisi:**  
  Tüm kurumsal metinler, oda bilgileri, fiyatlandırma, menüler, SSS ve gerçek iletişim bilgileri [`src/config/siteContent.js`](./src/config/siteContent.js) dosyasından merkezi olarak yönetilir. Kod içine hardcoded metin yazılmamıştır.
- **📱 Kusursuz Responsive & Tam Ekran Mobil Deneyimi:**  
  Mobil, tablet ve geniş masaüstü ekranlar için piksel hassasiyetinde optimize edilmiştir. Dar ekranlarda açılan menü ekranı tam kaplar, aksiyon butonları ve sosyal medya linkleri başparmak erişimine göre ergonomik olarak konumlandırılmıştır.
- **🔒 Bulletproof Body Scroll Lock:**  
  Modal ve mobil menüler açıldığında arka planın kaymasını engelleyen, hem iOS Safari hem de masaüstü tarayıcılarda kaydırma çubuğu genişliği zıplamasını (layout shift) sıfırlayan özel hook mimarisi (`useBodyScrollLock`).
- **🛎️ İnteraktif Rezervasyon Motoru:**  
  Tarih seçimi, misafir sayısı, oda tercihleri ve fiyat hesaplamalarını içeren çok adımlı rezervasyon modalı. Rezervasyon tamamlandığında tek tıkla WhatsApp ve telefon onayına bağlanan dinamik takip kodu üretir.
- **🎿 Erciyes VIP Kayak & Kış Turizmi:**  
  Otele 18 km mesafedeki Erciyes Kayak Merkezi için transfer saatleri, pist bilgileri ve ekipman odası detaylarını içeren özel bölüm.
- **🧖 1500 m² Termal SPA, Yarı Olimpik Havuz & Fitness:**  
  Türk hamamı, Fin saunası, buhar odası ve masaj terapilerini sergileyen kartlar ve interaktif randevu akışı.
- **🍽️ Kayseri Gastronomisi & Toplantı Salonları:**  
  Erciyes Balo Salonu ve Gevher Nesibe Seminer Salonu için kapasite tablosu; geleneksel mantı, pastırma ve dünya mutfağını sunan alakart restoran vitrini.
- **📍 %100 Gerçek Kurumsal İletişim & Canlı Harita:**  
  Otelin resmi santral numarası (`+90 352 207 00 00`), WhatsApp hattı (`+90 506 752 02 86`), e-posta adresleri ve Google Maps koordinatlarıyla tam entegre.

---

## 🛠️ Teknoloji Yığını

| Alan | Teknoloji / Kütüphane | Açıklama |
| :--- | :--- | :--- |
| **Çekirdek** | React 18 + React DOM | Fonksiyonel bileşenler, Hooks mimarisi |
| **Geliştirme / Build** | Vite 8 + ES Modules | Milisaniyeler mertebesinde HMR ve optimize üretim paketi |
| **Stil / CSS** | Tailwind CSS 3.4 + PostCSS | Özel renk paleti (Gold, Deep Navy), animasyonlar |
| **Tipografi** | Google Fonts | `Playfair Display` (Serif Başlıklar) + `Plus Jakarta Sans` (Gövde Metinleri) |
| **İkonografi** | Lucide React | Modern, minimalist vektörel arayüz ikonları |
| **Statik Analiz** | Oxlint | Yüksek hızlı kod kalitesi ve lint kontrolü |

---

## 📁 Proje Dizin Yapısı

```bash
city-one-hotel/
├── public/                  # Statik varlıklar ve favicon
├── src/
│   ├── assets/              # Logo ve görsel varlıklar
│   ├── components/          # Yeniden kullanılabilir UI bileşenleri
│   │   ├── BookingModal.jsx # Çok adımlı rezervasyon modalı
│   │   ├── FloatingActions.jsx # Sabit WhatsApp ve telefon butonları
│   │   ├── Navbar.jsx       # Masaüstü ve tam ekran mobil navigasyon
│   │   ├── SocialIcons.jsx  # Sosyal medya ikonları ve resmi profil linkleri
│   │   └── ...
│   ├── config/
│   │   └── siteContent.js   # Single Source of Truth (Tüm içerik ve veriler)
│   ├── design-system/       # Buton, Kart, Badge vb. atomik tasarım elemanları
│   ├── hooks/
│   │   └── useBodyScrollLock.js # Gelişmiş kaydırma kilidi hook'u
│   ├── sections/            # Ana sayfa modüler bölümleri
│   │   ├── HeroSection.jsx
│   │   ├── RoomsSection.jsx
│   │   ├── SpaSection.jsx
│   │   ├── SkiSection.jsx
│   │   ├── MeetingsSection.jsx
│   │   ├── DiningSection.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── FaqSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── FooterSection.jsx
│   ├── App.jsx              # Ana uygulama düzeni
│   ├── index.css            # Özel Tailwind utility sınıfları ve değişkenler
│   └── main.jsx             # React DOM kök girişi
├── index.html               # SEO meta etiketleri, Open Graph ve font bağlantıları
├── tailwind.config.js       # Özel renk ve gölge konfigürasyonu
├── vite.config.js           # Vite yapılandırması
└── package.json
```

---

## 💻 Kurulum ve Yerel Geliştirme

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# 1. Depoyu klonlayın
git clone <GITHUB_REPO_URL>

# 2. Proje dizinine geçin
cd city-one-hotel

# 3. Bağımlılıkları yükleyin
npm install

# 4. Yerel geliştirme sunucusunu başlatın
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde açılacaktır.

### Üretim Derlemesi (Production Build)

```bash
# Optimize edilmiş üretim dosyalarını oluşturur (dist/)
npm run build

# Üretim derlemesini yerel olarak önizler
npm run preview
```

---

## 👨‍💻 Geliştirici & Mülakat Notu

Bu proje; temiz kod prensipleri (Clean Code), bileşen ayrımı (Component Separation), Single Source of Truth veri yönetimi ve üst düzey görsel tasarım (Luxury Hospitality Theme) kabiliyetlerini sergilemek amacıyla hazırlanmıştır.
