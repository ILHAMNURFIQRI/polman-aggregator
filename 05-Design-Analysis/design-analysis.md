# Analisis Desain: Polman Bandung Aggregator

Dokumen ini menguraikan keputusan strategis di balik desain UI/UX untuk landing page agregator Polman Bandung, memastikan bahwa setiap elemen visual memiliki fungsi dan mendukung *user experience* (UX).

---

## 1. Pemenuhan Kebutuhan Pengguna (User Needs)

Portal ini dirancang sebagai **"Single Point of Truth"** atau pintu gerbang tunggal menuju ekosistem digital kampus.
- **Masalah sebelumnya:** Pengguna (terutama mahasiswa baru atau pihak eksternal) sering kebingungan mencari link aplikasi yang terpisah-pisah.
- **Solusi Desain:** Menerapkan pendekatan **Aggregator Card-Based UI**. Semua layanan utama ditempatkan pada satu section ("Layanan Akademik & Administrasi") menggunakan model kartu (card) dengan ikon besar yang representatif. Ini memangkas *cognitive load* pengguna saat mencari sistem yang dituju.

## 2. Arsitektur Informasi & Hierarki Visual

Struktur halaman disusun berdasarkan skala prioritas penggunaan:

1. **Hero Section:** Menegaskan *value proposition* (Sistem Terpusat) dengan orientasi yang jelas.
2. **Direktori Aplikasi (Core Feature):** Ditempatkan tepat di bawah Hero. Ini adalah alasan utama >80% pengguna mengunjungi portal.
3. **Berita (Informasi Dinamis):** Untuk menjaga *engagement* dan memberikan update terkini.
4. **Kalender/Agenda:** Kebutuhan sekunder yang penting untuk *awareness* waktu akademik.
5. **Help Desk (Support):** Ditempatkan di bawah sebagai *safety net* jika pengguna gagal menemukan apa yang dicari.

**Hierarki Visual:**
- Penggunaan **skala tipografi (Major Third - 1.25x)** memastikan perbedaan tegas antara Judul Halaman (H1), Judul Seksi (H2), Judul Kartu (H3), dan Teks Paragraf (p).
- Warna **Accent Gold (#ffd13c)** digunakan sangat selektif hanya untuk tombol CTA utama dan hover state penting, secara alami mengarahkan mata pengguna (F-Pattern/Z-Pattern scanning).

## 3. Efisiensi Navigasi

- **Sticky Header dengan Blur Effect:** Navigasi utama selalu tersedia di atas tanpa menutupi konten (efek glassmorphism/blur menjaga konteks *scroll*).
- **Smooth Anchor Scrolling:** Navigasi satu halaman (one-page) menggunakan JavaScript *smooth scroll* mengurangi waktu *loading* antar halaman.
- **Quick Links (Footer):** Menyediakan rute pintas alternatif bagi *power users* yang sering langsung men-scroll ke dasar halaman.

## 4. Aksesibilitas (Accessibility)

- **Kontras Warna:** Kombinasi teks Putih/Kuning di atas latar Navy (#022a5e), dan teks Gelap di atas latar Putih/Abu (#f8fafc) memenuhi standar kontras **WCAG AA**.
- **Focus States:** Diimplementasikan `:focus-visible` outline pada komponen interaktif (tombol, link, input) untuk navigasi berbasis keyboard.
- **Target Sentuh (Touch Targets):** Semua tombol dan link pada *mobile* memiliki tinggi minimum **44px**, mematuhi panduan antarmuka *mobile* (Apple HIG/Material Design) untuk mencegah salah klik (fat-finger errors).

## 5. Responsivitas (Responsive Design)

Menggunakan pendekatan **Mobile-First / Fluid Grid**:
- **Desktop (1024px+):** Menggunakan grid multi-kolom (mis. 3 kolom untuk kartu layanan, 2 kolom untuk hero).
- **Tablet (768px-1024px):** Grid menyesuaikan menjadi 2 kolom, elemen hero disejajarkan ke tengah (center-aligned).
- **Mobile (<768px):** Menu berubah menjadi pola hamburger, semua grid runtuh menjadi 1 kolom vertical (stacking) untuk keterbacaan optimal di layar kecil. Padding disesuaikan (dikurangi) agar menghemat ruang.

## 6. Konsistensi dengan Design System

Penerapan *Design System* CSS variables (`--color-primary`, `--space-4`, `--radius-lg`, dll) menjamin:
- **Kohesi Visual:** Tidak ada warna "liar" di luar palet. Semua bayangan (shadow) menggunakan *base color* biru dongker, bukan abu-abu/hitam murni, sehingga portal terasa eksklusif dan menyatu.
- **Konsistensi Jarak:** Menggunakan sistem *spacing* berbasis 4px (misal: 16px, 24px, 32px) menciptakan ritme vertikal yang konsisten, membuat tata letak terlihat rapi, bersih, dan profesional.

## 7. Penerapan Prinsip Clean, Modern & Minimalist

- **Clean:** Penggunaan *whitespace* (ruang negatif) yang luas pada `padding` section dan *card*. Teks tidak berjejal.
- **Modern:** Implementasi *Subtle Shadow* (bayangan lembut), border radius (sudut melengkung), transisi hover halus, dan ilustrasi berbasis geometri/vektor (memanfaatkan SVG geometri dari *brand*).
- **Minimalist:** Membuang ornamen yang tidak perlu. Tidak ada *border* tebal yang mengganggu. Pembagian informasi dilakukan melalui warna latar (*background shading*) antar seksi (Putih -> Abu sangat muda -> Putih).
