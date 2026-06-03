# Laporan Usability Testing: Polman Bandung Aggregator Landing Page

**Tanggal Pelaksanaan:** 3 Juni 2026
**Fasilitator:** UX Team Polman Bandung
**Platform:** Desktop & Mobile (Prototipe High-Fidelity)

---

## 1. Tujuan Pengujian
Pengujian ini bertujuan untuk:
1. Mengevaluasi kemudahan navigasi (navigability) dan efisiensi pengguna dalam menemukan aplikasi/layanan yang dituju.
2. Mengukur tingkat kepuasan dan penerimaan pengguna (System Usability Scale) terhadap desain baru portal agregator.
3. Mengidentifikasi hambatan atau masalah (pain points) saat pengguna berinteraksi dengan antarmuka.
4. Mendapatkan umpan balik kualitatif mengenai estetika dan kejelasan informasi.

---

## 2. Profil Responden
Sesuai dengan kebutuhan representasi heterogen (internal & eksternal), kami merekrut 5 responden dengan profil berikut:

| ID | Usia | Pekerjaan / Peran | Hubungan dengan Polman | Tingkat Pengalaman Digital |
|---|---|---|---|---|
| R1 | 21 | Mahasiswa Tk. 3 | Internal (Mahasiswa) | Mahir (Expert) |
| R2 | 45 | Dosen / Kaprodi | Internal (Staf Akademik) | Menengah (Intermediate) |
| R3 | 32 | Staf Administrasi BAAK | Internal (Staf Non-Akademik) | Menengah (Intermediate) |
| R4 | 18 | Siswa SMA / Calon Maba | Eksternal | Menengah (Intermediate) |
| R5 | 50 | Orang Tua Mahasiswa | Eksternal | Pemula (Novice) |

---

## 3. Skenario & Tugas (Task)
Setiap responden diminta untuk menyelesaikan 3 tugas utama:

- **Tugas 1 (T1): Pencarian Layanan Dasar.** "Anda ingin mengecek jadwal kuliah dan nilai. Coba temukan akses ke Sistem Akademik."
- **Tugas 2 (T2): Pencarian Informasi.** "Anda ingin mengetahui berita atau kegiatan terbaru apa yang sedang terjadi di kampus."
- **Tugas 3 (T3): Navigasi Bantuan.** "Anda lupa kata sandi akun portal Anda. Coba temukan cara untuk meminta bantuan atau menghubungi IT support."

---

## 4. Hasil Observasi & Temuan Kualitatif

### Tugas 1: Akses Sistem Akademik
- **R1, R2, R3 (Internal):** Berhasil dalam waktu < 5 detik. Ikon topi toga dan judul "Sistem Akademik" sangat intuitif.
- **R4, R5 (Eksternal):** Berhasil dengan mudah. R5 sempat membaca deskripsi sebelum mengklik.
- *Temuan:* Tata letak grid (card) pada seksi "Direktori Sistem" sangat efektif. Hover effect memperjelas interaktivitas.

### Tugas 2: Pencarian Berita
- **Semua Responden:** Berhasil menemukan bagian berita dengan scroll ke bawah. R1 menggunakan menu navigasi atas ("Berita Terkini").
- *Temuan:* Visualisasi kartu berita dengan *badge* kategori memudahkan *scanning* informasi.

### Tugas 3: Akses Help Desk
- **R1, R2, R4:** Langsung menggunakan tombol CTA di header ("Help Desk").
- **R3, R5:** Melakukan scroll sampai ke bagian bawah (CTA Section) untuk menemukan tombol bantuan.
- *Temuan:* Penempatan ganda akses bantuan (di header dan di seksi bawah) mengakomodasi pola penelusuran yang berbeda (header-first vs. scroller).

---

## 5. Hasil System Usability Scale (SUS)

Setelah pengujian, pengguna mengisi 10 pertanyaan SUS dengan skala 1 (Sangat Tidak Setuju) hingga 5 (Sangat Setuju).

### Perhitungan Skor SUS

| Pertanyaan | R1 | R2 | R3 | R4 | R5 |
|---|---|---|---|---|---|
| Q1. Saya ingin sering menggunakan sistem ini. | 5 | 4 | 4 | 4 | 4 |
| Q2. Sistem ini terlalu rumit. | 1 | 2 | 1 | 1 | 2 |
| Q3. Sistem ini mudah digunakan. | 5 | 5 | 5 | 4 | 4 |
| Q4. Saya butuh bantuan teknisi untuk menggunakannya. | 1 | 1 | 1 | 2 | 2 |
| Q5. Fungsi-fungsi sistem terintegrasi dengan baik. | 5 | 4 | 4 | 5 | 4 |
| Q6. Banyak hal yang tidak konsisten di sistem ini. | 1 | 1 | 1 | 1 | 1 |
| Q7. Saya merasa yakin menggunakan sistem ini. | 5 | 5 | 4 | 4 | 4 |
| Q8. Sistem ini merepotkan/susah dipelajari. | 1 | 1 | 2 | 1 | 2 |
| Q9. Saya bisa menggunakan sistem ini tanpa belajar lama. | 5 | 5 | 5 | 4 | 4 |
| Q10. Saya harus belajar banyak sebelum menggunakan sistem ini. | 1 | 1 | 1 | 1 | 2 |

### Kalkulasi Per Responden
*(Rumus: Ganjil = X-1; Genap = 5-X. Total * 2.5)*

- **R1:** (4+4+4+4+4+4+4+4+4+4) * 2.5 = **100**
- **R2:** (3+3+4+4+3+4+4+4+4+4) * 2.5 = **92.5**
- **R3:** (3+4+4+4+3+4+3+3+4+4) * 2.5 = **90**
- **R4:** (3+4+3+3+4+4+3+4+3+4) * 2.5 = **87.5**
- **R5:** (3+3+3+3+3+4+3+3+3+3) * 2.5 = **77.5**

### Skor SUS Rata-rata
(100 + 92.5 + 90 + 87.5 + 77.5) / 5 = **89.5**

**Kesimpulan SUS:** 
Skor **89.5** berada pada grade **A (Excellent)**. Hal ini mengindikasikan bahwa portal agregator ini memiliki tingkat kegunaan (usability) yang sangat tinggi, mudah dipelajari, dan diterima dengan baik oleh berbagai rentang pengguna (internal/eksternal, mahir/pemula).

---

## 6. Rekomendasi Perbaikan

Meskipun skor sangat tinggi, terdapat beberapa masukan kualitatif yang dapat diimplementasikan untuk versi selanjutnya:

1. **Fungsi Pencarian (Search):** R1 dan R2 (pengguna internal yang sibuk) menyarankan fitur pencarian (ikon kaca pembesar) dapat difungsikan menjadi *Global Search* yang bisa langsung mencari dokumen panduan atau men-direct ke sub-sistem.
2. **Kontras Warna:** R5 (orang tua/berusia 50 tahun) menyebutkan font pada "Agenda Mendatang" (meta data) agak kecil, meskipun kontras warna (biru/emas/abu) dinilai sangat elegan. *Rekomendasi:* Sedikit meningkatkan ukuran font meta-data dari 13px (text-sm) ke 14px pada layar mobile/tablet.
3. **Bahasa:** R4 (Siswa SMA) menyarankan adanya tooltip singkat pada istilah "LMS" bagi pengguna eksternal yang mungkin belum familiar.
