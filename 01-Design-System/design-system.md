# Polman Bandung - Design System Documentation

Dokumen ini adalah referensi *Design System* yang dibangun untuk proyek portal agregator Polman Bandung. Design System ini diimplementasikan menggunakan CSS Variables (`:root`) di dalam `design-system.css`.

## 1. Filosofi & Pendekatan

Sistem desain ini dibangun dengan filosofi **"Professional, Clean, & Academic Modern"**.
Tujuannya adalah menciptakan antarmuka institusi pendidikan tinggi yang tidak kaku, melainkan dinamis, bersih, dan memancarkan wibawa teknologi (khas manufaktur/politeknik).

---

## 2. Palet Warna (Color Palette)

Palet warna diturunkan secara langsung dari identitas merek (Brand Identity) Polman Bandung yang diberikan oleh pengguna.

### Primary Palette (Deep Navy)
Warna ini mendominasi latar belakang hero, footer, dan tipografi utama. Mewakili keandalan, teknologi, dan profesionalisme akademik.
- **Brand Primary Dark (Color 1):** `#022a5e` (Digunakan untuk teks judul dan latar belakang pekat)
- **Brand Primary (Color 2):** `#023780` (Digunakan untuk tombol utama, ikon, dan aksen)
- *Variasi:* Dilengkapi dengan skala turunan (50 hingga 950) untuk interaksi *hover* dan *background shading*.

### Accent Palette (Gold)
Warna kontras yang kuat. Sangat efektif untuk menarik perhatian mata ke *Call to Action* (CTA).
- **Brand Accent (Color 4):** `#ffd13c` (Digunakan untuk tombol CTA, *underline* aktif, dan sorotan ikon)

### Neutral Palette (Gray)
Digunakan untuk struktur, batasan (*border*), teks sekunder, dan latar belakang seksi.
- **Brand Neutral (Color 3):** `#82878d` (Digunakan untuk teks sekunder/deskripsi)
- **Backgrounds:** `#f8fafc` (Slate muda) dan `#ffffff` (Putih murni).

### Semantic Colors
Warna standar UI untuk *feedback*.
- **Success:** Hijau (`#10b981`)
- **Warning:** Oranye (`#f59e0b`)
- **Error:** Merah (`#ef4444`)
- **Info:** Biru Muda (`#3b82f6`)

---

## 3. Tipografi (Typography)

- **Keluarga Font Utama:** `Poppins` (Google Fonts).
- **Alasan Pemilihan:** Poppins adalah font geometris sans-serif yang modern, sangat terbaca di layar digital, dan memberikan sentuhan *friendly* namun tetap rapi dan terstruktur—sangat cocok untuk portal modern.
- **Hierarki Skala:** Menggunakan rasio *Major Third* (1.25).
  - Base text (p): `15px` / `16px`
  - H3 (Card Titles): `1.25rem` (20px)
  - H2 (Section Titles): `2.25rem` (36px)
  - H1 (Hero Title): `3rem` (48px) hingga `3.75rem` (60px)

---

## 4. Spasi & Grid (Spacing & Layout)

Sistem *spacing* menggunakan skala berbasis **4px** (`0.25rem`), standar emas dalam modern *framework* seperti Tailwind dan Material Design.
- **Micro-spacing:** 4px, 8px, 12px (Untuk jarak ikon dan teks)
- **Macro-spacing:** 24px, 32px, 64px, 80px (Untuk padding antar seksi dan *container*)
- **Grid Container:** Maksimal lebar `1440px` untuk *desktop ultra-wide*, turun ke `1024px`, `768px`, dan 100% dengan padding pada *mobile*.

---

## 5. Komponen UI (UI Components)

### Buttons (Tombol)
Tombol didesain dengan bentuk yang solid (menggunakan *border-radius* sedang/besar) dan memiliki efek transisi *lift-up* (`transform: translateY(-2px)`) beserta *shadow* saat di-*hover*.
- `.btn-primary`: Latar navy, teks putih.
- `.btn-accent`: Latar emas, teks navy gelap (Aksesibilitas kontras tinggi).
- `.btn-outline`: Border berwarna, latar transparan.

### Cards (Kartu Layanan/Berita)
Menggunakan latar putih bersih dengan *subtle shadow* (bayangan berwarna navy, bukan hitam) berintensitas rendah.
- **Interaksi:** Saat di-*hover*, kartu akan sedikit terangkat dan *shadow* melebar (`--shadow-xl`), memberikan rasa kedalaman (depth) 3D yang elegan. Terdapat aksen garis kuning di bagian atas (*top border transform*) sebagai *micro-interaction*.

### Badges (Lencana)
Komponen kecil berbentuk pil (*pill-shape*) untuk meta-data, kategori berita, atau penanda seksi. Menggunakan warna latar tembus pandang (opacity 10-15%) dari warna teks utamanya.

---

## 6. Micro-Interactions & Animasi

Sistem desain ini menghindari animasi berlebihan yang mengganggu kinerja, melainkan berfokus pada *micro-interactions*:
- Transisi seragam `200ms ease-out` untuk perubahan warna dan tombol.
- Navigasi menu (*Underline expand*) dari tengah/kiri saat *hover*.
- Ikon pada *link* layanan bergeser ke kanan (panah maju) saat kartu di-*hover*, memancing pengguna untuk mengklik.
