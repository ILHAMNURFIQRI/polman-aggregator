/**
 * Polman Bandung Aggregator - Main Script
 * Version: 2.0.0
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================================
    // 1. Header Scroll Effect
    // ============================================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ============================================================
    // 2. Mobile Menu Toggle
    // ============================================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ============================================================
    // 3. Smooth Scrolling for Anchor Links
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }

                // Adjust for fixed header height
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================================
    // 4. Active Nav Link on Scroll
    // ============================================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - header.offsetHeight - 50;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });

    // ============================================================
    // 5. Realtime Calendar Widget
    // ============================================================
    let currentLang = localStorage.getItem('polman_lang') || 'id';

    const MONTH_NAMES = {
        'id': ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };

    // Agenda data for Polman Bandung
    const agendaData = [
        {
            date: '2026-06-15',
            title: { id: 'Ujian Akhir Semester (UAS) Genap', en: 'Even Semester Final Exam (UAS)' },
            time: '07:00 - Selesai',
            location: { id: 'Seluruh Ruang Kelas & Bengkel', en: 'All Classrooms & Workshops' },
            category: { id: 'Akademik', en: 'Academic' },
            categoryClass: 'akademik'
        },
        {
            date: '2026-06-20',
            title: { id: 'Sidang Tugas Akhir Gelombang 1', en: 'Final Project Defense Batch 1' },
            time: '08:00 - 17:00',
            location: { id: 'Ruang Sidang Lt. 3', en: 'Defense Room 3rd Floor' },
            category: { id: 'Akademik', en: 'Academic' },
            categoryClass: 'akademik'
        },
        {
            date: '2026-06-28',
            title: { id: 'Batas Akhir Penyerahan Nilai UAS', en: 'UAS Grade Submission Deadline' },
            time: 'Maks. 23:59 WIB',
            location: { id: 'Sistem Akademik (SIAK)', en: 'Academic System (SIAK)' },
            category: { id: 'Dosen/Staf', en: 'Lecturer/Staff' },
            categoryClass: 'dosen'
        },
        {
            date: '2026-07-05',
            title: { id: 'Rapat Koordinasi Penerimaan Mahasiswa Baru', en: 'New Student Admission Coordination Meeting' },
            time: '09:00 - 12:00',
            location: { id: 'Ruang Rapat Direktorat', en: 'Directorate Meeting Room' },
            category: { id: 'Umum', en: 'General' },
            categoryClass: 'umum'
        },
        {
            date: '2026-07-10',
            title: { id: 'Pengarahan Mahasiswa Baru Jalur SNBT', en: 'SNBT New Student Briefing' },
            time: '09:00 - 12:00',
            location: { id: 'Gedung Aula Polman Bandung', en: 'Polman Bandung Auditorium' },
            category: { id: 'Kemahasiswaan', en: 'Student Affairs' },
            categoryClass: 'kemahasiswaan'
        },
        {
            date: '2026-07-14',
            title: { id: 'Registrasi Ulang Mahasiswa Baru', en: 'New Student Re-registration' },
            time: '08:00 - 15:00',
            location: { id: 'Gedung BAAK Polman', en: 'BAAK Polman Building' },
            category: { id: 'Akademik', en: 'Academic' },
            categoryClass: 'akademik'
        },
        {
            date: '2026-07-21',
            title: { id: 'Pekan Pengenalan Kehidupan Kampus (PKKMB)', en: 'Campus Life Introduction Week (PKKMB)' },
            time: '07:00 - 16:00',
            location: { id: 'Kampus Polman Bandung', en: 'Polman Bandung Campus' },
            category: { id: 'Kemahasiswaan', en: 'Student Affairs' },
            categoryClass: 'kemahasiswaan'
        },
        {
            date: '2026-08-04',
            title: { id: 'Perkuliahan Semester Ganjil Dimulai', en: 'Odd Semester Classes Begin' },
            time: '07:00',
            location: { id: 'Seluruh Ruang Kelas & Bengkel', en: 'All Classrooms & Workshops' },
            category: { id: 'Akademik', en: 'Academic' },
            categoryClass: 'akademik'
        },
        {
            date: '2026-08-17',
            title: { id: 'Upacara Peringatan HUT RI ke-81', en: '81st Indonesian Independence Day Ceremony' },
            time: '07:00 - 10:00',
            location: { id: 'Lapangan Utama Polman', en: 'Main Field Polman' },
            category: { id: 'Umum', en: 'General' },
            categoryClass: 'umum'
        },
        {
            date: '2026-09-01',
            title: { id: 'Batas Akhir Pembayaran UKT Semester Ganjil', en: 'Odd Semester Tuition Fee Payment Deadline' },
            time: 'Maks. 23:59 WIB',
            location: { id: 'Bank Mitra / Portal Keuangan', en: 'Partner Bank / Finance Portal' },
            category: { id: 'Akademik', en: 'Academic' },
            categoryClass: 'akademik'
        }
    ];

    let currentDate = new Date();
    let displayMonth = currentDate.getMonth();
    let displayYear = currentDate.getFullYear();

    const calGrid = document.getElementById('cal-grid');
    const calMonthTitle = document.getElementById('cal-month-title');
    const calPrev = document.getElementById('cal-prev');
    const calNext = document.getElementById('cal-next');

    function getEventDates(month, year) {
        const dates = new Set();
        agendaData.forEach(event => {
            const d = new Date(event.date);
            if (d.getMonth() === month && d.getFullYear() === year) {
                dates.add(d.getDate());
            }
        });
        return dates;
    }

    function renderCalendar() {
        if (!calGrid || !calMonthTitle) return;

        calMonthTitle.textContent = `${MONTH_NAMES[currentLang][displayMonth]} ${displayYear}`;

        const firstDay = new Date(displayYear, displayMonth, 1).getDay();
        const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
        const daysInPrevMonth = new Date(displayYear, displayMonth, 0).getDate();

        const today = new Date();
        const todayDate = today.getDate();
        const todayMonth = today.getMonth();
        const todayYear = today.getFullYear();

        const eventDates = getEventDates(displayMonth, displayYear);

        let html = '';

        // Previous month's trailing days
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = daysInPrevMonth - i;
            html += `<div class="calendar-day other-month">${day}</div>`;
        }

        // Current month days
        for (let d = 1; d <= daysInMonth; d++) {
            let classes = 'calendar-day';
            if (d === todayDate && displayMonth === todayMonth && displayYear === todayYear) {
                classes += ' today';
            }
            if (eventDates.has(d)) {
                classes += ' has-event';
            }
            html += `<div class="${classes}">${d}</div>`;
        }

        // Next month's leading days
        const totalCells = firstDay + daysInMonth;
        const remaining = (7 - (totalCells % 7)) % 7;
        for (let i = 1; i <= remaining; i++) {
            html += `<div class="calendar-day other-month">${i}</div>`;
        }

        calGrid.innerHTML = html;
    }

    if (calPrev) {
        calPrev.addEventListener('click', () => {
            displayMonth--;
            if (displayMonth < 0) {
                displayMonth = 11;
                displayYear--;
            }
            renderCalendar();
        });
    }

    if (calNext) {
        calNext.addEventListener('click', () => {
            displayMonth++;
            if (displayMonth > 11) {
                displayMonth = 0;
                displayYear++;
            }
            renderCalendar();
        });
    }

    renderCalendar();

    // ============================================================
    // 6. Agenda List Rendering
    // ============================================================
    const agendaListEl = document.getElementById('agenda-list');

    function renderAgenda() {
        if (!agendaListEl) return;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Sort agenda by date
        const sorted = [...agendaData].sort((a, b) => new Date(a.date) - new Date(b.date));

        // Hanya tampilkan 5 agenda mendatang
        const upcomingEvents = sorted.filter(event => new Date(event.date) >= today).slice(0, 5);

        let html = '';
        upcomingEvents.forEach(event => {
            const eventDate = new Date(event.date);
            const isPast = eventDate < today;

            const day = eventDate.getDate();
            const month = MONTH_NAMES[currentLang][eventDate.getMonth()].substring(0, 3);
            
            const title = event.title[currentLang] || event.title.id;
            const location = event.location[currentLang] || event.location.id;
            const category = event.category[currentLang] || event.category.id;
            
            let time = event.time;
            if (currentLang === 'en') {
                time = time.replace('Selesai', 'Finish').replace('Maks.', 'Max.');
            }

            html += `
                <div class="agenda-item${isPast ? ' past' : ''}">
                    <div class="agenda-date">
                        <span class="agenda-date-day">${day}</span>
                        <span class="agenda-date-month">${month}</span>
                    </div>
                    <div class="agenda-details">
                        <h3 class="agenda-title">${title}</h3>
                        <div class="agenda-meta">
                            <span class="agenda-meta-item"><i class="far fa-clock"></i> ${time}</span>
                            <span class="agenda-meta-item"><i class="far fa-map"></i> ${location}</span>
                            <span class="agenda-category-badge ${event.categoryClass}">${category}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        agendaListEl.innerHTML = html;
    }

    renderAgenda();

    // ============================================================
    // 7. Search Overlay & Functionality
    // ============================================================
    const searchableServices = [
        {
            title: { id: 'Sistem Akademik', en: 'Academic System' },
            desc: { id: 'Portal informasi dan administrasi akademik bagi mahasiswa dan dosen.', en: 'Academic information and administration portal for students and lecturers.' },
            icon: 'fas fa-graduation-cap',
            url: 'https://akademik.polman-bandung.ac.id/',
            keywords: ['akademik', 'siak', 'krs', 'khs', 'nilai', 'mahasiswa', 'kuliah', 'academic', 'student', 'class', 'grade', 'score']
        },
        {
            title: { id: 'LMS Belajar Polman', en: 'Polman Learning LMS' },
            desc: { id: 'Learning Management System untuk pembelajaran daring.', en: 'Learning Management System for online learning.' },
            icon: 'fas fa-laptop-code',
            url: 'https://belajar.polman-bandung.ac.id/',
            keywords: ['lms', 'belajar', 'e-learning', 'kelas', 'daring', 'online', 'tugas', 'materi', 'learning', 'assignment', 'course']
        },
        {
            title: { id: 'Kepegawaian', en: 'Human Resources' },
            desc: { id: 'Sistem informasi pengelolaan data SDM dan presensi.', en: 'Information system for HR data management and attendance.' },
            icon: 'fas fa-id-badge',
            url: 'https://kepegawaian.polman-bandung.ac.id/',
            keywords: ['kepegawaian', 'sdm', 'pegawai', 'presensi', 'absensi', 'staf', 'dosen', 'hr', 'human resources', 'staff', 'employee', 'attendance']
        },
        {
            title: { id: 'Keuangan BAAK', en: 'BAAK Finance' },
            desc: { id: 'Portal administrasi keuangan dan informasi pembayaran UKT.', en: 'Financial administration portal and tuition fee payment information.' },
            icon: 'fas fa-file-invoice-dollar',
            url: 'https://keuangan.polman-bandung.ac.id/tentang-baak/',
            keywords: ['keuangan', 'baak', 'ukt', 'pembayaran', 'biaya', 'tagihan', 'finance', 'payment', 'tuition', 'fee', 'bill']
        },
        {
            title: { id: 'Sistem Logistik', en: 'Logistics System' },
            desc: { id: 'Pengelolaan inventaris dan peminjaman alat praktik.', en: 'Inventory management and practical equipment borrowing.' },
            icon: 'fas fa-boxes-stacked',
            url: 'https://logistik.polman-bandung.ac.id/',
            keywords: ['logistik', 'inventaris', 'alat', 'peminjaman', 'barang', 'gudang', 'logistics', 'inventory', 'tool', 'borrow', 'equipment', 'warehouse']
        },
        {
            title: { id: 'Panduan Pengguna', en: 'User Guide' },
            desc: { id: 'Dokumentasi lengkap penggunaan sistem digital Polman.', en: 'Complete documentation on using Polman digital systems.' },
            icon: 'fas fa-book',
            url: 'https://panduan.polman-bandung.ac.id/',
            keywords: ['panduan', 'manual', 'tutorial', 'bantuan', 'help', 'guide', 'dokumentasi', 'documentation']
        }
    ];

    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchCloseBtn = document.getElementById('search-close-btn');
    const searchBtn = document.querySelector('.search-btn');

    function openSearch() {
        if (!searchOverlay) return;
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            if (searchInput) searchInput.focus();
        }, 100);
    }

    function closeSearch() {
        if (!searchOverlay) return;
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
        if (searchInput) searchInput.value = '';
        renderSearchHint();
    }

    function renderSearchHint() {
        if (!searchResults) return;
        const hintHtml = i18n[currentLang] && i18n[currentLang]['search_hint'] ? i18n[currentLang]['search_hint'] : i18n['id']['search_hint'];
        searchResults.innerHTML = `
            <div class="search-hint">
                ${hintHtml}
            </div>
        `;
    }

    function renderSearchResults(query) {
        if (!searchResults) return;

        const q = query.toLowerCase().trim();

        if (!q) {
            renderSearchHint();
            return;
        }

        const results = searchableServices.filter(service => {
            const titleMatch = service.title.id.toLowerCase().includes(q) || service.title.en.toLowerCase().includes(q);
            const descMatch = service.desc.id.toLowerCase().includes(q) || service.desc.en.toLowerCase().includes(q);
            const inKeywords = service.keywords.some(k => k.includes(q));
            return titleMatch || descMatch || inKeywords;
        });

        if (results.length === 0) {
            const noResultsMsg = currentLang === 'en' 
                ? `<span>No services found for "<strong>${escapeHtml(query)}</strong>"</span>` 
                : `<span>Tidak ditemukan layanan untuk "<strong>${escapeHtml(query)}</strong>"</span>`;
                
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    ${noResultsMsg}
                </div>
            `;
            return;
        }

        let html = '';
        results.forEach(service => {
            const serviceTitle = service.title[currentLang];
            const serviceDesc = service.desc[currentLang];
            
            html += `
                <a href="${service.url}" target="_blank" class="search-result-item">
                    <div class="search-result-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <div class="search-result-info">
                        <div class="search-result-title">${highlightMatch(serviceTitle, q)}</div>
                        <div class="search-result-desc">${serviceDesc}</div>
                    </div>
                    <div class="search-result-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </a>
            `;
        });

        searchResults.innerHTML = html;
    }

    function highlightMatch(text, query) {
        const idx = text.toLowerCase().indexOf(query);
        if (idx === -1) return escapeHtml(text);
        const before = text.substring(0, idx);
        const match = text.substring(idx, idx + query.length);
        const after = text.substring(idx + query.length);
        return `${escapeHtml(before)}<strong style="color: var(--color-accent-600);">${escapeHtml(match)}</strong>${escapeHtml(after)}`;
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // Event listeners
    if (searchBtn) {
        searchBtn.addEventListener('click', openSearch);
    }

    if (searchCloseBtn) {
        searchCloseBtn.addEventListener('click', closeSearch);
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) closeSearch();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderSearchResults(e.target.value);
        });
    }

    // ============================================================
    // 8. Language Switcher & Accessibility Logic
    // ============================================================
    
    // Dictionary
    const i18n = {
        'id': {
            'nav_home': 'Beranda',
            'nav_services': 'Layanan & Aplikasi',
            'nav_news': 'Berita Terkini',
            'nav_agenda': 'Agenda',
            'hero_badge': 'Sistem Terpusat',
            'hero_title': 'Satu Pintu Untuk Semua <span>Layanan Digital</span> Polman',
            'hero_desc': 'Akses cepat dan mudah ke Sistem Informasi Akademik, Kepegawaian, Keuangan, Logistik, dan layanan digital lainnya di Politeknik Manufaktur Bandung.',
            'btn_explore_services': 'Jelajahi Layanan <i class="fas fa-arrow-right"></i>',
            'btn_view_guide': 'Lihat Panduan',
            'section_badge_directory': 'Direktori Sistem',
            'section_title_services': 'Layanan Akademik & Administrasi',
            'section_subtitle_services': 'Akses cepat ke berbagai aplikasi utama untuk menunjang kegiatan belajar mengajar dan administrasi di kampus.',
            'app_1_title': 'Sistem Akademik',
            'app_1_desc': 'Portal informasi dan administrasi akademik bagi mahasiswa dan dosen Politeknik Manufaktur Bandung.',
            'app_1_link': 'Akses Sistem <i class="fas fa-arrow-right"></i>',
            'app_2_title': 'LMS Belajar Polman',
            'app_2_desc': 'Learning Management System untuk mendukung proses pembelajaran daring yang interaktif dan efektif.',
            'app_2_link': 'Masuk ke Kelas <i class="fas fa-arrow-right"></i>',
            'app_3_title': 'Kepegawaian',
            'app_3_desc': 'Sistem informasi untuk pengelolaan data SDM, presensi, dan layanan administrasi kepegawaian internal.',
            'app_3_link': 'Akses Sistem <i class="fas fa-arrow-right"></i>',
            'app_4_title': 'Keuangan BAAK',
            'app_4_desc': 'Portal layanan administrasi keuangan, informasi pembayaran UKT, dan layanan kebendaharaan.',
            'app_4_link': 'Akses Sistem <i class="fas fa-arrow-right"></i>',
            'app_5_title': 'Sistem Logistik',
            'app_5_desc': 'Pengelolaan inventaris, peminjaman alat praktik, dan pengadaan barang kebutuhan kampus.',
            'app_5_link': 'Akses Sistem <i class="fas fa-arrow-right"></i>',
            'app_6_title': 'Panduan Pengguna',
            'app_6_desc': 'Dokumentasi lengkap dan tata cara penggunaan berbagai sistem digital di lingkungan Polman Bandung.',
            'app_6_link': 'Baca Panduan <i class="fas fa-arrow-right"></i>',
            'news_badge': 'Informasi Terkini',
            'news_title': 'Berita Seputar Kampus',
            'news_subtitle': 'Ikuti perkembangan terbaru, pengumuman penting, dan prestasi mahasiswa Politeknik Manufaktur Bandung.',
            'news_btn_all': 'Lihat Semua Berita <i class="fas fa-chevron-right"></i>',
            'news_1_cat': 'Akademik',
            'news_1_title': 'Pendaftaran Mahasiswa Baru Tahun Ajaran 2026/2027 Resmi Dibuka',
            'news_1_desc': 'Politeknik Manufaktur Bandung membuka penerimaan mahasiswa baru melalui beberapa jalur seleksi. Persiapkan diri Anda untuk bergabung bersama kampus vokasi manufaktur terbaik.',
            'news_read_more': 'Baca Selengkapnya <i class="fas fa-arrow-right"></i>',
            'news_2_cat': 'Prestasi',
            'news_2_title': 'Tim Robotik Polman Berhasil Meraih Juara 1 Tingkat Nasional',
            'news_2_desc': 'Keberhasilan luar biasa diraih oleh tim UKM Robotik pada ajang Kontes Robot Indonesia 2026. Ini membuktikan kualitas pendidikan vokasi unggul yang diterapkan.',
            'news_3_cat': 'Inovasi',
            'news_3_title': 'Peluncuran Sistem Terintegrasi Baru untuk Optimalisasi Layanan Publik',
            'news_3_desc': 'Sebagai bagian dari transformasi digital, Polman Bandung hari ini meresmikan platform layanan terpadu (SSO) untuk mempermudah akses sivitas akademika.',
            'agenda_badge': 'Kalender Akademik',
            'agenda_title': 'Kalender & Agenda Kampus',
            'agenda_subtitle': 'Pantau jadwal penting perkuliahan, ujian, dan kegiatan kampus secara realtime.',
            'agenda_upcoming': '<i class="fas fa-list-check"></i> Agenda Mendatang',
            'cal_sun': 'Min',
            'cal_mon': 'Sen',
            'cal_tue': 'Sel',
            'cal_wed': 'Rab',
            'cal_thu': 'Kam',
            'cal_fri': 'Jum',
            'cal_sat': 'Sab',
            'help_title': 'Butuh Bantuan Teknis?',
            'help_desc': 'Tim IT Support kami siap membantu Anda menyelesaikan masalah akses akun, lupa password, atau error pada sistem.',
            'help_btn_ticket': '<i class="fas fa-ticket-alt"></i> Buat Tiket Bantuan',
            'help_btn_chat': '<i class="fab fa-whatsapp"></i> Chat Admin IT',
            'footer_desc': 'Politeknik Manufaktur Bandung (Polman Bandung) merupakan institusi pendidikan tinggi vokasi negeri pertama di Indonesia yang berfokus pada teknologi manufaktur.',
            'footer_links_title': 'Tautan Cepat',
            'footer_link_main': 'Website Utama',
            'footer_link_pmb': 'PMB Polman',
            'footer_link_lib': 'Perpustakaan',
            'footer_link_career': 'Karir & Alumni',
            'footer_link_journal': 'Jurnal Ilmiah',
            'footer_sys_title': 'Layanan Sistem',
            'footer_contact_title': 'Hubungi Kami',
            'footer_copyright': '&copy; 2026 Politeknik Manufaktur Bandung. Hak Cipta Dilindungi.',
            'footer_privacy': 'Kebijakan Privasi',
            'footer_terms': 'Syarat & Ketentuan',
            'footer_sitemap': 'Sitemap',
            'search_placeholder': 'Cari layanan, sistem, atau informasi...',
            'search_hint': '<i class="fas fa-lightbulb"></i> <span>Ketik untuk mencari layanan seperti "Akademik", "LMS", "Keuangan"...</span>',
            'a11y_title': 'Menu Aksesibilitas (CTRL+U)',
            'a11y_contrast': 'Kontras +',
            'a11y_highlight': 'Sorot tautan',
            'a11y_bigger_text': 'Teks Lebih Besar',
            'a11y_spacing': 'Spasi teks',
            'a11y_pause': 'Animasi dijeda',
            'a11y_hide_img': 'Sembunyikan Gambar',
            'a11y_dyslexia': 'Ramah Disleksia',
            'a11y_cursor': 'Kursor',
            'a11y_tooltips': 'Keterangan alat',
            'a11y_line_height': 'Tinggi garis',
            'a11y_reset': 'Reset Pengaturan'
        },
        'en': {
            'nav_home': 'Home',
            'nav_services': 'Services & Apps',
            'nav_news': 'Latest News',
            'nav_agenda': 'Agenda',
            'hero_badge': 'Centralized System',
            'hero_title': 'One Gateway For All Polman <span>Digital Services</span>',
            'hero_desc': 'Fast and easy access to Academic Information Systems, HR, Finance, Logistics, and other digital services at Politeknik Manufaktur Bandung.',
            'btn_explore_services': 'Explore Services <i class="fas fa-arrow-right"></i>',
            'btn_view_guide': 'View Guide',
            'section_badge_directory': 'System Directory',
            'section_title_services': 'Academic & Administrative Services',
            'section_subtitle_services': 'Quick access to various main applications to support teaching, learning, and campus administration.',
            'app_1_title': 'Academic System',
            'app_1_desc': 'Academic information and administration portal for students and lecturers of Politeknik Manufaktur Bandung.',
            'app_1_link': 'Access System <i class="fas fa-arrow-right"></i>',
            'app_2_title': 'Polman Learning LMS',
            'app_2_desc': 'Learning Management System to support interactive and effective online learning processes.',
            'app_2_link': 'Enter Class <i class="fas fa-arrow-right"></i>',
            'app_3_title': 'Human Resources',
            'app_3_desc': 'Information system for HR data management, attendance, and internal HR administration services.',
            'app_3_link': 'Access System <i class="fas fa-arrow-right"></i>',
            'app_4_title': 'BAAK Finance',
            'app_4_desc': 'Financial administration services portal, tuition fee payment information, and treasury services.',
            'app_4_link': 'Access System <i class="fas fa-arrow-right"></i>',
            'app_5_title': 'Logistics System',
            'app_5_desc': 'Inventory management, practical equipment borrowing, and campus needs procurement.',
            'app_5_link': 'Access System <i class="fas fa-arrow-right"></i>',
            'app_6_title': 'User Guide',
            'app_6_desc': 'Complete documentation and usage procedures for various digital systems within Polman Bandung.',
            'app_6_link': 'Read Guide <i class="fas fa-arrow-right"></i>',
            'news_badge': 'Latest Information',
            'news_title': 'Campus News',
            'news_subtitle': 'Follow the latest developments, important announcements, and student achievements at Politeknik Manufaktur Bandung.',
            'news_btn_all': 'View All News <i class="fas fa-chevron-right"></i>',
            'news_1_cat': 'Academic',
            'news_1_title': 'New Student Registration for Academic Year 2026/2027 is Officially Open',
            'news_1_desc': 'Politeknik Manufaktur Bandung opens new student admissions through several selection paths. Prepare yourself to join the best manufacturing vocational campus.',
            'news_read_more': 'Read More <i class="fas fa-arrow-right"></i>',
            'news_2_cat': 'Achievement',
            'news_2_title': 'Polman Robotics Team Successfully Won 1st Place at National Level',
            'news_2_desc': 'An extraordinary success was achieved by the Robotics UKM team at the 2026 Indonesian Robot Contest. This proves the quality of superior vocational education applied.',
            'news_3_cat': 'Innovation',
            'news_3_title': 'Launch of New Integrated System for Public Service Optimization',
            'news_3_desc': 'As part of digital transformation, Polman Bandung today inaugurated an integrated service platform (SSO) to facilitate access for the academic community.',
            'agenda_badge': 'Academic Calendar',
            'agenda_title': 'Campus Calendar & Agenda',
            'agenda_subtitle': 'Monitor important class schedules, exams, and campus activities in realtime.',
            'agenda_upcoming': '<i class="fas fa-list-check"></i> Upcoming Agenda',
            'cal_sun': 'Sun',
            'cal_mon': 'Mon',
            'cal_tue': 'Tue',
            'cal_wed': 'Wed',
            'cal_thu': 'Thu',
            'cal_fri': 'Fri',
            'cal_sat': 'Sat',
            'help_title': 'Need Technical Help?',
            'help_desc': 'Our IT Support team is ready to help you resolve account access issues, forgotten passwords, or system errors.',
            'help_btn_ticket': '<i class="fas fa-ticket-alt"></i> Create Help Ticket',
            'help_btn_chat': '<i class="fab fa-whatsapp"></i> Chat IT Admin',
            'footer_desc': 'Politeknik Manufaktur Bandung (Polman Bandung) is the first state vocational higher education institution in Indonesia focusing on manufacturing technology.',
            'footer_links_title': 'Quick Links',
            'footer_link_main': 'Main Website',
            'footer_link_pmb': 'Polman Admissions',
            'footer_link_lib': 'Library',
            'footer_link_career': 'Career & Alumni',
            'footer_link_journal': 'Scientific Journals',
            'footer_sys_title': 'System Services',
            'footer_contact_title': 'Contact Us',
            'footer_copyright': '&copy; 2026 Politeknik Manufaktur Bandung. All Rights Reserved.',
            'footer_privacy': 'Privacy Policy',
            'footer_terms': 'Terms & Conditions',
            'footer_sitemap': 'Sitemap',
            'search_placeholder': 'Search for services, systems, or info...',
            'search_hint': '<i class="fas fa-lightbulb"></i> <span>Type to search for services like "Academic", "LMS", "Finance"...</span>',
            'a11y_title': 'Accessibility Menu (CTRL+U)',
            'a11y_contrast': 'Contrast +',
            'a11y_highlight': 'Highlight Links',
            'a11y_bigger_text': 'Bigger Text',
            'a11y_spacing': 'Text Spacing',
            'a11y_pause': 'Pause Animations',
            'a11y_hide_img': 'Hide Images',
            'a11y_dyslexia': 'Dyslexia Friendly',
            'a11y_cursor': 'Cursor',
            'a11y_tooltips': 'Tooltips',
            'a11y_line_height': 'Line Height',
            'a11y_reset': 'Reset Settings'
        }
    };

    // Language Logic
    const langBtns = document.querySelectorAll('.lang-btn');
    
    function setLanguage(lang) {
        if (!i18n[lang]) return;
        
        // Update buttons
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update texts
        const translatableElements = document.querySelectorAll('[data-i18n]');
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang][key]) {
                el.innerHTML = i18n[lang][key];
            }
        });
        
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (i18n[lang][key]) {
                el.placeholder = i18n[lang][key];
            }
        });

        localStorage.setItem('polman_lang', lang);
        currentLang = lang;
        
        if (typeof renderCalendar === 'function') renderCalendar();
        if (typeof renderAgenda === 'function') renderAgenda();
        if (typeof renderSearchHint === 'function' && (!searchInput || !searchInput.value)) renderSearchHint();
        if (typeof renderSearchResults === 'function' && searchInput && searchInput.value) renderSearchResults(searchInput.value);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Load saved lang
    const savedLang = localStorage.getItem('polman_lang');
    if (savedLang) setLanguage(savedLang);


    // Accessibility Logic
    const a11yToggleBtn = document.getElementById('a11y-toggle-btn');
    const a11yModal = document.getElementById('a11y-modal');
    const a11yCloseBtn = document.getElementById('a11y-close-btn');
    const a11yResetBtn = document.getElementById('a11y-reset-btn');
    const a11yFeatureBtns = document.querySelectorAll('.a11y-feature-btn');

    let a11ySettings = JSON.parse(localStorage.getItem('polman_a11y')) || {};

    function toggleA11yModal() {
        if (!a11yModal) return;
        a11yModal.classList.toggle('active');
    }

    function applyA11ySettings() {
        a11yFeatureBtns.forEach(btn => {
            const feature = btn.getAttribute('data-feature');
            const isActive = a11ySettings[feature];
            
            if (isActive) {
                btn.classList.add('active');
                document.body.classList.add(`a11y-${feature}`);
            } else {
                btn.classList.remove('active');
                document.body.classList.remove(`a11y-${feature}`);
            }
        });
    }

    function toggleFeature(feature) {
        a11ySettings[feature] = !a11ySettings[feature];
        localStorage.setItem('polman_a11y', JSON.stringify(a11ySettings));
        applyA11ySettings();
    }

    if (a11yToggleBtn) a11yToggleBtn.addEventListener('click', toggleA11yModal);
    if (a11yCloseBtn) a11yCloseBtn.addEventListener('click', toggleA11yModal);
    
    a11yFeatureBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleFeature(btn.getAttribute('data-feature'));
        });
    });

    if (a11yResetBtn) {
        a11yResetBtn.addEventListener('click', () => {
            a11ySettings = {};
            localStorage.removeItem('polman_a11y');
            applyA11ySettings();
        });
    }

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl+U to open accessibility modal
        if (e.ctrlKey && e.key.toLowerCase() === 'u') {
            e.preventDefault();
            toggleA11yModal();
        }
        
        // Ctrl+K or Cmd+K to open search
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (typeof openSearch === 'function') openSearch();
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            if (a11yModal && a11yModal.classList.contains('active')) {
                toggleA11yModal();
            }
            if (typeof closeSearch === 'function') {
                const searchOverlay = document.getElementById('search-overlay');
                if (searchOverlay && searchOverlay.classList.contains('active')) {
                    closeSearch();
                }
            }
        }
    });

    // Apply saved settings on load
    applyA11ySettings();

    // ============================================================
    // 9. Hero Slider Logic & Dots
    // ============================================================
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    
    if (heroSlides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        const showSlide = (index) => {
            heroSlides.forEach(slide => slide.classList.remove('active'));
            if (heroDots.length > 0) {
                heroDots.forEach(dot => {
                    dot.classList.remove('active');
                    dot.setAttribute('aria-selected', 'false');
                });
            }
            
            heroSlides[index].classList.add('active');
            if (heroDots.length > 0) {
                heroDots[index].classList.add('active');
                heroDots[index].setAttribute('aria-selected', 'true');
            }
            currentSlide = index;
        };

        const nextSlide = () => {
            let next = (currentSlide + 1) % heroSlides.length;
            showSlide(next);
        };

        // Initialize auto slide
        slideInterval = setInterval(nextSlide, 5000);

        // Dot click handlers
        if (heroDots.length > 0) {
            heroDots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    clearInterval(slideInterval); // stop auto play on manual click
                    showSlide(index);
                    slideInterval = setInterval(nextSlide, 5000); // restart auto play
                });
            });
        }
    }

    // ============================================================
    // 10. FAQ Accordion Logic
    // ============================================================
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.contains('open');

            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('open');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // If it wasn't open before, open it now
            if (!isOpen) {
                faqItem.classList.add('open');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

});
