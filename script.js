/**
 * MB AGENCY (MASBROO AGENCY) - INTERACTIVE SCRIPT ENGINE
 * Includes:
 * 1. Multi-Language Switcher (ID / EN) for Header, Cards, Services, Portfolio Modals, Consultation Form, Calculator, and Footer
 * 2. Circular Pulsing WhatsApp Floating Button (Bilingual Pre-filled Text)
 * 3. Dynamic GitHub CMS Portfolio Engine (fetching data/portfolio.json)
 * 4. Portfolio Showcase Modal Popup with Touch Swipe, Carousel Navigation, & Multi-language Captions
 * 5. Integration of real showcase projects: The Rover Kerobokan & BYD Kota (BYD M6 DM Campaign)
 * 6. Multi-language pre-filled WhatsApp messaging (Calculator, Consultation Modal, Showcase Modal, Floating Button)
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '6281289653355';

  // --- Portfolio Data List (Fallback + Dynamic JSON CMS Data) ---
  let portfolioDataList = [
    {
      id: 'web-1',
      title: 'The Rover Kerobokan — Landing Page',
      categoryFilter: 'web',
      categoryID: 'Web Dev & Landing Page',
      categoryEN: 'Web Dev & Landing Page',
      year: '2026',
      images: [
        'assets/images/therover_showcase.jpg'
      ],
      descID: 'The Rover Kerobokan (<a href="https://therover.web.id" target="_blank" rel="noopener noreferrer" style="color: var(--accent-purple); font-weight: 700; text-decoration: underline;">therover.web.id 🔗</a>) — Website Landing Page interaktif untuk 24 exclusive Mezzanine dan Studio apartment suites di Bali. Dilengkapi sistem reservasi via WhatsApp, filter kamar, galeri foto, & lokasi Google Maps.',
      descEN: 'The Rover Kerobokan (<a href="https://therover.web.id" target="_blank" rel="noopener noreferrer" style="color: var(--accent-purple); font-weight: 700; text-decoration: underline;">therover.web.id 🔗</a>) — Interactive Landing Page website for 24 exclusive Mezzanine and Studio apartment suites in Bali. Built with direct WhatsApp booking, room filter, photo gallery, and Google Maps integration.',
      metricVal1: '24',
      metricLbl1ID: 'Apartment Suites',
      metricLbl1EN: 'Apartment Suites',
      metricVal2: '100%',
      metricLbl2ID: 'Mobile Responsive',
      metricLbl2EN: 'Mobile Responsive'
    },
    {
      id: 'byd-1',
      title: 'BYD Kota — Campaign BYD M6 DM',
      categoryFilter: 'smm',
      categoryID: 'Social Media Management',
      categoryEN: 'Social Media Management',
      year: '2026',
      images: [
        'assets/images/byd_showcase.png',
        'assets/images/byd_slide1.jpg',
        'assets/images/byd_slide2.jpg',
        'assets/images/byd_slide3.jpg',
        'assets/images/byd_slide4.jpg'
      ],
      descID: 'BYD Kota — Menerjemahkan brief client menjadi satu sistem visual yang siap melaju. Campaign BYD M6 DM meliputi aset sosial media, carousel 5 slide, poster promosi, dan ad banner Meta/Google.',
      descEN: 'BYD Kota — Translating client brief into a high-performance visual system. BYD M6 DM campaign featuring social media assets, 5-slide carousel, promo posters, and Meta/Google ad banners.',
      metricVal1: '5',
      metricLbl1ID: 'Slide Carousel',
      metricLbl1EN: 'Carousel Slides',
      metricVal2: '310M+',
      metricLbl2ID: 'Harga Mulai',
      metricLbl2EN: 'Starting Price'
    },
    {
      id: 'brand-1',
      title: 'Wanderlust.id — Brand & Social',
      categoryFilter: 'brand',
      categoryID: 'Desain Konten Sosial Media',
      categoryEN: 'Social Media Content Design',
      year: '2026',
      images: [
        'assets/images/brand_kit_showcase.jpg',
        'assets/images/brand_identity.jpg',
        'assets/images/hero_banner.jpg'
      ],
      descID: 'Wanderlust.id — platform tour dan travel. Desain untuk kebutuhan Social Media termasuk 6 Single Post, 1 Carousel, dan 5 Story (Total 16 design).',
      descEN: 'Wanderlust.id — tour & travel platform. Complete Social Media design kit including 6 Single Posts, 1 Carousel, and 5 Stories (Total 16 design assets).',
      metricVal1: '16',
      metricLbl1ID: 'Aset Desain',
      metricLbl1EN: 'Design Assets',
      metricVal2: 'Social',
      metricLbl2ID: 'Konten Sosmed',
      metricLbl2EN: 'Media Content'
    },
    {
      id: 'smm-1',
      title: 'Kopi Masbroo — Content Engine',
      categoryFilter: 'smm',
      categoryID: 'Social Media Management',
      categoryEN: 'Social Media Management',
      year: '2026',
      images: [
        'assets/images/smm_showcase.jpg',
        'assets/images/social_media_feed.jpg',
        'assets/images/hero_banner.jpg'
      ],
      descID: 'Pengembangan visual feed Instagram & TikTok Ads untuk Kopi Masbroo. Meningkatkan engagement hingga 3.2x dengan strategi konten AI + Human Direction.',
      descEN: 'Instagram feed & TikTok Ads visual development for Kopi Masbroo. Boosted engagement by 3.2x with AI + Human Direction content strategy.',
      metricVal1: '24',
      metricLbl1ID: 'Feed & Carousel',
      metricLbl1EN: 'Feed & Carousel',
      metricVal2: '3.2x',
      metricLbl2ID: 'Pertumbuhan Engagement',
      metricLbl2EN: 'Engagement Growth'
    },
    {
      id: 'poster-1',
      title: 'TechVision 2026 — Key Visual Poster',
      categoryFilter: 'poster',
      categoryID: 'Digital Image & Poster',
      categoryEN: 'Digital Image & Poster',
      year: '2026',
      images: [
        'assets/images/poster_kv.jpg',
        'assets/images/poster_ad_creative.jpg',
        'assets/images/hero_banner.jpg'
      ],
      descID: 'Desain Key Visual (KV) utama & poster peluncuran event teknologi nasional. Termasuk banner cetak high-res & set iklan Meta Ads.',
      descEN: 'Master Key Visual (KV) & promotional poster design for national tech event. Includes high-res print banner & Meta Ads campaign set.',
      metricVal1: '5',
      metricLbl1ID: 'Varian Spanduk',
      metricLbl1EN: 'Banner Variants',
      metricVal2: 'Key Visual',
      metricLbl2ID: 'Kreatif Utama',
      metricLbl2EN: 'Master Creative'
    },
    {
      id: 'brand-2',
      title: 'Aura Skincare — Brand Guidelines',
      categoryFilter: 'brand',
      categoryID: 'Brand Assets & Identity',
      categoryEN: 'Brand Assets & Identity',
      year: '2026',
      images: [
        'assets/images/brand_identity.jpg',
        'assets/images/brand_kit_showcase.jpg'
      ],
      descID: 'Identitas visual luxury skincare meliputi logo vektor, skema warna palet, tipografi khusus, dan kemasan produk.',
      descEN: 'Luxury skincare visual identity featuring vector logo, color palette swatches, custom typography, and product packaging.',
      metricVal1: '100%',
      metricLbl1ID: 'Presisi Vektor',
      metricLbl1EN: 'Vector Precision',
      metricVal2: 'Brand',
      metricLbl2ID: 'Panduan Identitas',
      metricLbl2EN: 'Identity Guidelines'
    },
    {
      id: 'smm-2',
      title: 'Lumina Fashion — Instagram Campaign',
      categoryFilter: 'smm',
      categoryID: 'Social Media Management',
      categoryEN: 'Social Media Management',
      year: '2026',
      images: [
        'assets/images/social_media_feed.jpg',
        'assets/images/smm_showcase.jpg'
      ],
      descID: 'Serial edukasi & kampanye koleksi pakaian musim panas dengan visual aesthetic modern dan copywriting converting.',
      descEN: 'Educational carousel series & summer fashion collection campaign with modern aesthetic visuals & high-converting copywriting.',
      metricVal1: '18',
      metricLbl1ID: 'Slide Komedi/Carousel',
      metricLbl1EN: 'Carousel Slides',
      metricVal2: 'Konversi',
      metricLbl2ID: 'Iklan Teroptimasi',
      metricLbl2EN: 'Optimized Ads'
    },
    {
      id: 'poster-2',
      title: 'NextGen Summit — Meta Ad Banner Set',
      categoryFilter: 'poster',
      categoryID: 'Digital Image & Poster',
      categoryEN: 'Digital Image & Poster',
      year: '2026',
      images: [
        'assets/images/poster_ad_creative.jpg',
        'assets/images/poster_kv.jpg'
      ],
      descID: 'Set spanduk digital untuk promosi media sosial & Google Display Network dengan format adaptif multi-perangkat.',
      descEN: 'Digital banner set for social media promotion & Google Display Network with multi-device adaptive formats.',
      metricVal1: '8',
      metricLbl1ID: 'Format Iklan',
      metricLbl1EN: 'Ad Formats',
      metricVal2: 'CTR Tinggi',
      metricLbl2ID: 'Visual Kreatif',
      metricLbl2EN: 'Creative Visual'
    }
  ];

  // --- Multi-language Translations (ID / EN) ---
  const translations = {
    ID: {
      navLayanan: 'Layanan',
      navWorkflow: 'Workflow Klien',
      navShowcase: 'Showcase',
      navHarga: 'Harga & Kalkulator',
      heroTitle: 'Tingkatkan Brand Anda Dengan <span class="lime-highlight">Aset Visual High-Impact</span> & <span class="purple-highlight">Content Engine</span>',
      heroSubtitle: 'Solusi pembuatan Brand Assets, Poster Digital Kreatif, dan Social Media Management (SMM) berstandar internasional untuk pasar lokal & global.',
      btnWA: '💬 Tanya WA',
      btnShowcase: 'Showcase',
      workflowTitle: 'Workflow <span class="purple-highlight">Klien</span>',
      workflowSub: 'Proses yang sederhana dan profesional dari ide ke hasil akhir.',
      wf01T: 'Konsultasi', wf01D: 'Klien kirim kebutuhan via WhatsApp atau DM.',
      wf02T: 'Brief', wf02D: 'Kebutuhan, audience, tujuan konten, dan aset dikumpulkan.',
      wf03T: 'Direction', wf03D: 'Studio menyusun arah visual dan draft konten untuk approval.',
      wf04T: 'Production', wf04D: 'Visual diproduksi dengan workflow AI yang tetap dikawal desain.',
      wf05T: 'Review', wf05D: 'Klien menerima preview, lalu revisi sesuai scope.',
      wf06T: 'Delivery', wf06D: 'File final dikirim sesuai format yang dibutuhkan.',
      srvTag: 'Layanan Utama',
      srvTitle: 'Aset Visual & Web Development Berkualitas Tinggi',
      srvSub: 'Setiap layanan dirancang untuk memberikan dampak visual yang kuat dan meningkatkan kredibilitas produk Anda.',
      srv1Title: 'Brand Assets & Identity',
      srv1Desc: 'Membangun identitas visual yang profesional, konsisten, dan mudah diingat oleh target audiens Anda.',
      srv1Item1: 'Logo Design & Vector Variants',
      srv1Item2: 'Brand Guidelines & Color Swatches',
      srv1Item3: 'Typography System & Iconography',
      srv1Item4: 'Company Profile & Stationary Kit',
      srv2Title: 'Digital Image & Poster',
      srv2Desc: 'Poster promosi, key visual iklan, dan fotografi produk berbasis AI dengan sentuhan desainer profesional.',
      srv2Item1: 'Key Visual (KV) Kampanye Iklan',
      srv2Item2: 'Poster Event & Launching Produk',
      srv2Item3: 'AI Product Photo Compositing',
      srv2Item4: 'Marketplace & Web Banner Ads',
      srv3Title: 'Web Dev & Landing Pages',
      srv3Desc: 'Landing page berkonversi tinggi. Dashboard yang scalable. Dirancang dengan presisi arsitektur, dibangun dengan akselerasi AI. Setiap piksel bertujuan — tanpa template yang membebani.',
      srv3Item1: 'SEO Mobile Score 100/100',
      srv3Item2: 'React / Next.js / HTML5 Tech Stack',
      srv3Item3: 'Custom API & Direct WA Integration',
      srv3Item4: 'Full Code Ownership & Support',
      showcaseTag: 'Showcase Hasil Karya',
      showcaseTitle: 'Portofolio Desain MB Agency',
      showcaseSub: 'Klik salah satu proyek untuk melihat rincian galeri karya lengkap.',
      ctaTitle: 'Punya kebutuhan <span class="purple-highlight">visual</span> untuk brand Anda?',
      ctaSub: 'Ceritakan project-nya, kami bantu rekomendasikan arah yang tepat.',
      btnCta: '💬 Konsultasi Projek',
      pricingTag: 'Penawaran Transparan',
      pricingTitle: 'Pilih Paket Layanan & Konfigurator',
      pricingSub: 'Lihat ringkasan paket SMM berikut, lalu kustomisasikan scope kebutuhan Anda pada kalkulator di bawah ini.',
      card1Badge: '10 Konten Sosial Media',
      card2Badge: '21 Konten Sosial Media',
      card3Badge: 'Monthly - Konten selama 1 bulan',
      featSingleCarousel: 'Instagram single post, carousel, story',
      featPosterAds: 'Poster, ads creative',
      featAiPhoto: 'Foto produk AI, dll',
      featFreeIdeas: 'Free ide konten',
      featMonthlyHandle: 'Handle kebutuhan konten selama 1 bulan',
      featTotal45: 'Total sampai 45 desain',
      featCaptionReady: '+ Ide konten dan caption ready',
      revisionNote: 'ℹ️ <strong>Catatan Revisi</strong>: Maksimal 3x revisi untuk paket Starter Micro & Growth. Revisi tambahan setelah 3x dikenakan charge Rp 50.000 ($5) per 1x revisi.',
      calcSelectLabel: 'PILIH BASELINE PAKET LAYANAN',
      calcAddonLabel: 'PILIH FITUR TAMBAHAN (ADD-ON)',
      calcRangeLabel: 'ESTIMASI RENTANG INVESTASI',
      calcDurationLabel: 'Estimasi Durasi Layanan',
      calcBookBtn: '💬 Pesan Konfigurasi Ini via WA',
      calcDisclaimer: '*Paket ini sudah termasuk riset visual kompetitor',
      footerBrandDesc: 'Layanan spesialis pengerjaan Brand Assets, Digital Image, Posters, SMM, & Web Development berstandar internasional.',
      footerTitleNav: 'Navigasi',
      footerTitleContact: 'Kontak Resmi',
      modalTitle: 'Form Konsultasi MB Agency',
      modalSub: 'Isi detail di bawah ini untuk terhubung langsung via WhatsApp.',
      lblClientName: 'Nama Anda *',
      lblClientBrand: 'Nama Brand / Usaha (Opsional)',
      lblSelectedPackage: 'Paket / Layanan Diminati',
      lblClientMessage: 'Detail Kebutuhan Singkat',
      btnFormSubmit: '<span>Buka WhatsApp</span> <span>→</span>',
      scWaBtnText: '<span>💬 Pesan Desain Serupa via WA</span> <span>→</span>'
    },
    EN: {
      navLayanan: 'Services',
      navWorkflow: 'Client Workflow',
      navShowcase: 'Showcase',
      navHarga: 'Pricing & Calculator',
      heroTitle: 'Elevate Your Brand With <span class="lime-highlight">High-Impact Visuals</span> & <span class="purple-highlight">Content Engine</span>',
      heroSubtitle: 'Empowering global & local brands with high-converting Brand Assets, Digital Poster Creatives, and Social Media Management (SMM).',
      btnWA: '💬 Ask via WA',
      btnShowcase: 'Showcase',
      workflowTitle: 'Client <span class="purple-highlight">Workflow</span>',
      workflowSub: 'A simple and professional process from concept to final delivery.',
      wf01T: 'Consultation', wf01D: 'Send your requirements via WhatsApp or direct message.',
      wf02T: 'Briefing', wf02D: 'Goals, audience, content target, and brand assets collected.',
      wf03T: 'Direction', wf03D: 'Studio prepares visual direction and content draft for approval.',
      wf04T: 'Production', wf04D: 'Visuals produced via AI workflow with human creative oversight.',
      wf05T: 'Review', wf05D: 'Client receives preview and requests revisions within scope.',
      wf06T: 'Delivery', wf06D: 'Final production files delivered in your required formats.',
      srvTag: 'Core Services',
      srvTitle: 'High-Impact Visual & Web Development Services',
      srvSub: 'Every service is engineered to create a strong visual impression & boost credibility.',
      srv1Title: 'Brand Assets & Identity',
      srv1Desc: 'Building professional, consistent, and memorable visual identities for your target audience.',
      srv1Item1: 'Logo Design & Vector Variants',
      srv1Item2: 'Brand Guidelines & Color Swatches',
      srv1Item3: 'Typography System & Iconography',
      srv1Item4: 'Company Profile & Stationary Kit',
      srv2Title: 'Digital Image & Poster',
      srv2Desc: 'Promotional posters, ad key visuals, and AI product photography with professional designer polish.',
      srv2Item1: 'Ad Campaign Key Visual (KV)',
      srv2Item2: 'Event & Product Launch Posters',
      srv2Item3: 'AI Product Photo Compositing',
      srv2Item4: 'Marketplace & Web Banner Ads',
      srv3Title: 'Web Dev & Landing Pages',
      srv3Desc: 'Landing pages that convert. Dashboards that scale. Designed with architectural precision, built with AI acceleration. Every pixel intentional — no template bloat.',
      srv3Item1: 'SEO Mobile Score 100/100',
      srv3Item2: 'React / Next.js / HTML5 Tech Stack',
      srv3Item3: 'Custom API & Direct WA Integration',
      srv3Item4: 'Full Code Ownership & Support',
      showcaseTag: 'Work Showcase',
      showcaseTitle: 'MB Agency Portfolio Showcase',
      showcaseSub: 'Click on any project to open full interactive gallery & details.',
      ctaTitle: 'Have a <span class="purple-highlight">visual</span> requirement for your brand?',
      ctaSub: 'Tell us about your project, we will help recommend the right direction.',
      btnCta: '💬 Discuss Project via WA',
      pricingTag: 'Transparent Pricing',
      pricingTitle: 'Choose Your Package & Configurator',
      pricingSub: 'Review the following SMM package overview, then customize your project scope using the calculator below.',
      card1Badge: '10 Social Media Posts',
      card2Badge: '21 Social Media Posts',
      card3Badge: 'Monthly - 1 Month Content Engine',
      featSingleCarousel: 'Instagram single post, carousel, story',
      featPosterAds: 'Poster & ads creative',
      featAiPhoto: 'AI product photos, etc.',
      featFreeIdeas: 'Free content ideas',
      featMonthlyHandle: 'Full 1-month content management',
      featTotal45: 'Total up to 45 designs',
      featCaptionReady: '+ Content ideas & ready captions',
      revisionNote: 'ℹ️ <strong>Revision Note</strong>: Max 3x revisions for Starter Micro & Growth packs. Additional revisions beyond 3x incur a Rp 50,000 ($5) fee per revision.',
      calcSelectLabel: 'SELECT BASELINE SERVICE PACKAGE',
      calcAddonLabel: 'INCLUDE EXTRA ADD-ONS',
      calcRangeLabel: 'ESTIMATED INVESTMENT RANGE',
      calcDurationLabel: 'Est. Service Duration',
      calcBookBtn: '💬 Book This Configuration via WA',
      calcDisclaimer: '*Includes competitor visual research',
      footerBrandDesc: 'Specialized agency for Brand Assets, Digital Image, Posters, SMM, & Web Development with international standards.',
      footerTitleNav: 'Navigation',
      footerTitleContact: 'Official Contact',
      modalTitle: 'MB Agency Consultation Form',
      modalSub: 'Fill in the details below to connect directly via WhatsApp.',
      lblClientName: 'Your Name *',
      lblClientBrand: 'Brand / Business Name (Optional)',
      lblSelectedPackage: 'Service / Package Interested',
      lblClientMessage: 'Brief Project Details',
      btnFormSubmit: '<span>Open WhatsApp</span> <span>→</span>',
      scWaBtnText: '<span>💬 Order Similar Design via WA</span> <span>→</span>'
    }
  };

  let currentLang = 'ID';
  const langToggleBtn = document.getElementById('langToggle');

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ID' ? 'EN' : 'ID';
      langToggleBtn.innerText = `🌐 ${currentLang}`;
      applyLanguage(currentLang);
      updateCurrencyPrices();
      renderPortfolioGrid();
      if (currentActiveItemData) {
        updateShowcaseModalLang();
      }
    });
  }

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    const nameInput = document.getElementById('clientName');
    const brandInput = document.getElementById('clientBrand');
    const msgInput = document.getElementById('clientMessage');

    if (nameInput) nameInput.placeholder = lang === 'EN' ? 'e.g. Alex Rivers' : 'Contoh: Alex Rivers';
    if (brandInput) brandInput.placeholder = lang === 'EN' ? 'e.g. MB Global Brand' : 'Contoh: MB Global Brand';
    if (msgInput) msgInput.placeholder = lang === 'EN' ? 'Briefly describe your concept or visual needs...' : 'Ceritakan konsep atau desain yang Anda butuhkan...';

    // Update Floating WA Button URL text
    const floatingWaBtn = document.querySelector('.floating-wa-btn');
    if (floatingWaBtn) {
      const waText = lang === 'EN'
        ? 'Hello MB Agency! I would like to consult regarding visual services.'
        : 'Halo MB Agency! Saya ingin konsultasi layanan visual.';
      floatingWaBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
    }

    // Directory Page Translations
    const dirHeroTitle = document.getElementById('dirHeroTitle');
    const dirHeroDesc = document.getElementById('dirHeroDesc');
    const backHomeLink = document.getElementById('backHomeLink');
    const sortLabel = document.getElementById('sortLabel');
    const optDefault = document.getElementById('optDefault');
    const optNewest = document.getElementById('optNewest');
    const optOldest = document.getElementById('optOldest');
    const optTitle = document.getElementById('optTitle');
    const tabAll = document.getElementById('tabAll');

    if (dirHeroTitle) dirHeroTitle.textContent = lang === 'EN' ? 'MB Agency Work Directory & Showcase' : 'Direktori Karya & Portofolio MB Agency';
    if (dirHeroDesc) dirHeroDesc.textContent = lang === 'EN' ? 'Explore all visual design works, social media campaigns, brand identities, and web developments we have crafted.' : 'Eksplorasi seluruh karya desain visual, kampanye sosial media, identitas brand, dan pengembangan web yang telah kami kerjakan.';
    if (backHomeLink) backHomeLink.textContent = lang === 'EN' ? '← Back to Main Home' : '← Kembali ke Beranda Utama';
    if (sortLabel) sortLabel.textContent = lang === 'EN' ? 'Sort By:' : 'Urutkan:';
    if (optDefault) optDefault.textContent = lang === 'EN' ? 'Custom CMS Order' : 'Urutan Kustom CMS';
    if (optNewest) optNewest.textContent = lang === 'EN' ? 'Newest → Oldest' : 'Terbaru → Terlama';
    if (optOldest) optOldest.textContent = lang === 'EN' ? 'Oldest → Newest' : 'Terlama → Terbaru';
    if (optTitle) optTitle.textContent = lang === 'EN' ? 'Project Title (A - Z)' : 'Judul (A - Z)';
    if (tabAll) tabAll.textContent = lang === 'EN' ? 'All Works' : 'Semua Karya';

    renderModalPackageOptions(lang);
    renderShowcaseDirectoryGrid();
  }

  function renderModalPackageOptions(lang) {
    const packageSelect = document.getElementById('selectedPackage');
    if (!packageSelect) return;

    const currentVal = packageSelect.value;
    const isEN = lang === 'EN';

    const modalPackageConfig = [
      { value: 'Konsultasi Umum', labelID: 'Konsultasi Umum', labelEN: 'General Consultation' },
      { value: 'Starter Pack (10 Konten - 190K / $22)', labelID: 'Starter Pack (10 Konten - 190K / $22)', labelEN: 'Starter Pack (10 Posts - $22 / Rp 190K)' },
      { value: 'Growth Pack (21 Konten - 370K / $36)', labelID: 'Growth Pack (21 Konten - 370K / $36)', labelEN: 'Growth Pack (21 Posts - $36 / Rp 370K)' },
      { value: 'Pro Business (Monthly 45 Desain - 1.000K / $100)', labelID: 'Pro Business (Monthly 45 Desain - 1.000K / $100)', labelEN: 'Pro Business (Monthly 45 Designs - $100 / Rp 1.000K)' },
      { value: 'Web Dev: Landing Page Express (5.760K / $320)', labelID: 'Web Dev: Landing Page Express (5.760K / $320)', labelEN: 'Web Dev: Express Landing Page ($320 / Rp 5.760K)' }
    ];

    packageSelect.innerHTML = '';
    modalPackageConfig.forEach(opt => {
      const option = document.createElement('option');
      option.value = isEN ? opt.labelEN : opt.value;
      option.textContent = isEN ? opt.labelEN : opt.labelID;
      packageSelect.appendChild(option);
    });

    if (currentVal) packageSelect.value = currentVal;
  }

  renderModalPackageOptions(currentLang);

  // --- Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (mobileToggle) mobileToggle.innerHTML = '☰';
      });
    });
  }

  // ==========================================================================
  // DYNAMIC GITHUB CMS PORTFOLIO RENDER ENGINE
  // ==========================================================================
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  let activeFilter = 'all';

  async function initPortfolioData() {
    try {
      const res = await fetch(`data/portfolio.json?v=${Date.now()}`);
      if (res.ok) {
        const json = await res.json();
        if (json && Array.isArray(json.items) && json.items.length > 0) {
          portfolioDataList = json.items;
        } else if (Array.isArray(json) && json.length > 0) {
          portfolioDataList = json;
        }
      }
    } catch (err) {
      console.warn('CMS JSON load fallback to embedded portfolio data:', err);
    }

    renderPortfolioGrid();
    renderShowcaseDirectoryGrid();
  }

  // --- Homepage Showcase Render Engine (Limit 9 Items) ---
  const viewAllShowcaseText = document.getElementById('viewAllShowcaseText');

  function renderPortfolioGrid() {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    const isEN = currentLang === 'EN';

    const matchingItems = portfolioDataList.filter(item => {
      const cat = item.categoryFilter || 'all';
      return activeFilter === 'all' || activeFilter === cat;
    });

    const HOMEPAGE_LIMIT = 9;
    const itemsToDisplay = matchingItems.slice(0, HOMEPAGE_LIMIT);

    itemsToDisplay.forEach((item) => {
      const filterCategory = item.categoryFilter || 'all';
      const categoryLabel = isEN ? (item.categoryEN || item.categoryID) : item.categoryID;
      const thumbImg = (item.images && item.images.length > 0) ? item.images[0] : 'assets/images/hero_banner.jpg';

      const itemCard = document.createElement('div');
      itemCard.className = 'portfolio-item';
      itemCard.setAttribute('data-category', filterCategory);
      itemCard.style.display = 'block';

      itemCard.innerHTML = `
        <img src="${thumbImg}" alt="${item.title}" class="portfolio-img" loading="lazy" />
        <div class="portfolio-info">
          <span class="portfolio-category">${categoryLabel}</span>
          <h4 class="portfolio-title">${item.title}</h4>
        </div>
      `;

      itemCard.addEventListener('click', () => {
        openShowcaseModal(item);
      });

      portfolioGrid.appendChild(itemCard);
    });

    if (viewAllShowcaseText) {
      viewAllShowcaseText.textContent = isEN ? 'View All Projects' : 'Lihat Semua Portofolio';
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeFilter = btn.getAttribute('data-filter');
      renderPortfolioGrid();
    });
  });

  // --- Dedicated Showcase Directory Page (/showcase) Engine ---
  const showcaseDirectoryGrid = document.getElementById('showcaseDirectoryGrid');
  const sortSelect = document.getElementById('sortSelect');
  const directoryFilterTabs = document.getElementById('directoryFilterTabs');
  let directoryActiveFilter = 'all';
  let directorySortMode = 'default';

  function renderShowcaseDirectoryGrid() {
    if (!showcaseDirectoryGrid) return;
    showcaseDirectoryGrid.innerHTML = '';

    const isEN = currentLang === 'EN';

    // Clone data for sorting
    let items = [...portfolioDataList];

    // Apply Sorting Mode
    if (directorySortMode === 'newest') {
      items.reverse();
    } else if (directorySortMode === 'oldest') {
      // Keep original order or reverse
    } else if (directorySortMode === 'title') {
      items.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Apply Category Filter
    const matchingItems = items.filter(item => {
      const cat = item.categoryFilter || 'all';
      return directoryActiveFilter === 'all' || directoryActiveFilter === cat;
    });

    matchingItems.forEach((item) => {
      const filterCategory = item.categoryFilter || 'all';
      const categoryLabel = isEN ? (item.categoryEN || item.categoryID) : item.categoryID;
      const thumbImg = (item.images && item.images.length > 0) ? item.images[0] : 'assets/images/hero_banner.jpg';

      const itemCard = document.createElement('div');
      itemCard.className = 'portfolio-item';
      itemCard.setAttribute('data-category', filterCategory);
      itemCard.style.display = 'block';

      itemCard.innerHTML = `
        <img src="${thumbImg}" alt="${item.title}" class="portfolio-img" loading="lazy" />
        <div class="portfolio-info">
          <span class="portfolio-category">${categoryLabel}</span>
          <h4 class="portfolio-title">${item.title}</h4>
        </div>
      `;

      itemCard.addEventListener('click', () => {
        openShowcaseModal(item);
      });

      showcaseDirectoryGrid.appendChild(itemCard);
    });
  }

  if (directoryFilterTabs) {
    directoryFilterTabs.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        directoryFilterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        directoryActiveFilter = btn.getAttribute('data-filter');
        renderShowcaseDirectoryGrid();
      });
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      directorySortMode = e.target.value;
      renderShowcaseDirectoryGrid();
    });
  }

  initPortfolioData();

  // --- Portfolio Showcase Modal Engine ---
  const showcaseModal = document.getElementById('showcaseModal');
  const showcaseClose = document.getElementById('showcaseClose');
  const scPrevBtn = document.getElementById('scPrevBtn');
  const scNextBtn = document.getElementById('scNextBtn');
  const scMainImg = document.getElementById('scMainImg');

  let currentActiveItemData = null;
  let currentCarouselIndex = 0;

  function openShowcaseModal(data) {
    currentActiveItemData = data;
    currentCarouselIndex = 0;

    // Instant Image Preloading Engine (Pre-caches all slides in memory for 0ms arrow response)
    if (data && data.images && Array.isArray(data.images)) {
      data.images.forEach(src => {
        const preImg = new Image();
        preImg.decoding = 'async';
        preImg.src = src;
      });
    }

    updateShowcaseModalLang();
    renderCarouselImage();
    if (showcaseModal) showcaseModal.classList.add('active');
  }

  function updateShowcaseModalLang() {
    if (!currentActiveItemData) return;
    const data = currentActiveItemData;
    const isEN = currentLang === 'EN';

    document.getElementById('scBadge').innerText = isEN ? (data.categoryEN || data.categoryID) : data.categoryID;
    document.getElementById('scYear').innerText = data.year;
    document.getElementById('scTitle').innerText = data.title;
    document.getElementById('scDesc').innerHTML = isEN ? (data.descEN || data.descID) : data.descID;
    document.getElementById('scVal1').innerText = data.metricVal1;
    document.getElementById('scLbl1').innerText = isEN ? (data.metricLbl1EN || data.metricLbl1ID) : data.metricLbl1ID;
    document.getElementById('scVal2').innerText = data.metricVal2;
    document.getElementById('scLbl2').innerText = isEN ? (data.metricLbl2EN || data.metricLbl2ID) : data.metricLbl2ID;
  }

  function renderCarouselImage() {
    if (!currentActiveItemData) return;
    const imgEl = document.getElementById('scMainImg');
    const dotsContainer = document.getElementById('scDotsContainer');

    const images = currentActiveItemData.images || [];
    imgEl.src = images[currentCarouselIndex] || images[0];

    dotsContainer.innerHTML = '';
    if (images.length > 1) {
      if (scPrevBtn) scPrevBtn.style.display = 'flex';
      if (scNextBtn) scNextBtn.style.display = 'flex';
      dotsContainer.style.display = 'flex';
      images.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `dot-item ${idx === currentCarouselIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => {
          currentCarouselIndex = idx;
          renderCarouselImage();
        });
        dotsContainer.appendChild(dot);
      });
    } else {
      if (scPrevBtn) scPrevBtn.style.display = 'none';
      if (scNextBtn) scNextBtn.style.display = 'none';
      dotsContainer.style.display = 'none';
    }
  }

  function nextSlide() {
    if (!currentActiveItemData) return;
    const images = currentActiveItemData.images || [];
    if (images.length <= 1) return;
    currentCarouselIndex = (currentCarouselIndex + 1) % images.length;
    renderCarouselImage();
  }

  function prevSlide() {
    if (!currentActiveItemData) return;
    const images = currentActiveItemData.images || [];
    if (images.length <= 1) return;
    currentCarouselIndex = (currentCarouselIndex - 1 + images.length) % images.length;
    renderCarouselImage();
  }

  if (scNextBtn) scNextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });
  if (scPrevBtn) scPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });
  if (scMainImg) scMainImg.addEventListener('click', () => { nextSlide(); });

  // Touch Swipe Gesture for Mobile Carousel
  let touchStartX = 0;
  let touchEndX = 0;
  const modalLeftContainer = document.querySelector('.showcase-modal-left');

  if (modalLeftContainer) {
    modalLeftContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modalLeftContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 35) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  if (showcaseClose && showcaseModal) {
    showcaseClose.addEventListener('click', () => {
      showcaseModal.classList.remove('active');
    });

    showcaseModal.addEventListener('click', (e) => {
      if (e.target === showcaseModal) {
        showcaseModal.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // TIER PRICING & CALCULATOR CONFIGURATOR ENGINE
  // ==========================================================================
  const cardPrices = {
    starter: { idrPrice: '190K', usdPrice: '$22', idrReg: '260K', usdReg: '$29' },
    growth: { idrPrice: '370K', usdPrice: '$36', idrReg: '470K', usdReg: '$45' },
    pro: { idrPrice: '1.000K', usdPrice: '$100', idrReg: '1.200K', usdReg: '$120' }
  };

  function updateCurrencyPrices() {
    const isUSD = currentLang === 'EN';
    document.querySelectorAll('[data-price-key]').forEach(el => {
      const key = el.getAttribute('data-price-key');
      if (cardPrices[key]) {
        el.innerText = isUSD ? cardPrices[key].usdPrice : cardPrices[key].idrPrice;
      }
    });

    document.querySelectorAll('[data-reg-key]').forEach(el => {
      const key = el.getAttribute('data-reg-key');
      if (cardPrices[key]) {
        el.innerText = isUSD ? cardPrices[key].usdReg : cardPrices[key].idrReg;
      }
    });
  }

  const calculatorConfig = {
    projectTypes: {
      starter_smm: { nameID: "Starter Pack: 10 Konten Sosial Media (190K / $22)", nameEN: "Starter Pack: 10 Social Media Posts ($22 / Rp 190K)", basePriceUSD: 22, baseIDR: 190000, durationID: "2 hari / cycle", durationEN: "2 Days / Cycle" },
      growth_smm: { nameID: "Growth Pack: 21 Konten Sosial Media (370K / $36)", nameEN: "Growth Pack: 21 Social Media Posts ($36 / Rp 370K)", basePriceUSD: 36, baseIDR: 370000, durationID: "3 hari / cycle", durationEN: "3 Days / Cycle" },
      pro_smm: { nameID: "Pro Business: Monthly Engine s/d 45 Desain + Caption (1.000K / $100)", nameEN: "Pro Business: Monthly Engine up to 45 Designs + Captions ($100 / Rp 1.000K)", basePriceUSD: 100, baseIDR: 1000000, durationID: "1 bulan / cycle", durationEN: "1 Month / Cycle" },
      brand_kit: { nameID: "Brand Identity Kit & Guidelines (890K / $60)", nameEN: "Brand Identity Kit & Guidelines ($60 / Rp 890K)", basePriceUSD: 60, baseIDR: 890000, durationID: "1 minggu / cycle", durationEN: "1 Week / Cycle" },
      web_landing: { nameID: "Web Dev: Landing Page Express (5.760K / $320)", nameEN: "Web Dev: Express Landing Page ($320 / Rp 5.760K)", basePriceUSD: 320, baseIDR: 5760000, durationID: "1 minggu / cycle", durationEN: "1 Week / Cycle" },
      web_saas: { nameID: "Web Dev: Growth SaaS MVP / Dashboard (21.600K / $1200)", nameEN: "Web Dev: Growth SaaS MVP / Web Dashboard ($1.200 / Rp 21.600K)", basePriceUSD: 1200, baseIDR: 21600000, durationID: "4 minggu / cycle", durationEN: "4 Weeks / Cycle" }
    },
    features: {
      copywriting: { nameID: "Creative Copywriting SEO & Captions", nameEN: "Creative Copywriting SEO & Captions", priceUSD: 50, priceIDR: 750000, weeks: 0 },
      video: { nameID: "Short Video / Reels Production (5 Videos)", nameEN: "Short Video / Reels Production (5 Videos)", priceUSD: 150, priceIDR: 2250000, weeks: 1 },
      retouch: { nameID: "AI Product Photo Studio Retouching (5 Photos)", nameEN: "AI Product Photo Studio Retouching (5 Photos)", priceUSD: 100, priceIDR: 1500000, weeks: 1 },
      ads_creative: { nameID: "Meta & Google Ads Banner Set (5 Formats)", nameEN: "Meta & Google Ads Banner Set (5 Formats)", priceUSD: 120, priceIDR: 1800000, weeks: 0 },
      seo_optim: { nameID: "Advanced Technical SEO & Meta Optimization", nameEN: "Advanced Technical SEO & Meta Optimization", priceUSD: 100, priceIDR: 1500000, weeks: 0 },
      express: { nameID: "Expedited Priority Fast Delivery", nameEN: "Expedited Priority Fast Delivery", priceUSD: 80, priceIDR: 1200000, weeks: 0 }
    }
  };

  function initCalculator() {
    const projectTypeSelect = document.getElementById('calc-project-type');
    const featuresContainer = document.getElementById('calc-features-list');
    const costDisplay = document.getElementById('calc-cost-range');
    const timelineDisplay = document.getElementById('calc-timeline');
    const usdIdrToggle = document.getElementById('currency-toggle');
    const bookBtn = document.getElementById('calc-book-btn');

    if (!projectTypeSelect || !featuresContainer || !costDisplay || !timelineDisplay) return;

    let currency = 'IDR';

    function renderSelectOptions() {
      const selectedVal = projectTypeSelect.value;
      projectTypeSelect.innerHTML = '';
      Object.keys(calculatorConfig.projectTypes).forEach(key => {
        const type = calculatorConfig.projectTypes[key];
        const option = document.createElement('option');
        option.value = key;
        option.textContent = currentLang === 'EN' ? type.nameEN : type.nameID;
        projectTypeSelect.appendChild(option);
      });
      if (selectedVal) projectTypeSelect.value = selectedVal;
    }

    function renderFeatures() {
      featuresContainer.innerHTML = '';
      Object.keys(calculatorConfig.features).forEach(key => {
        const feat = calculatorConfig.features[key];
        const checkboxWrapper = document.createElement('div');
        checkboxWrapper.className = 'feature-checkbox-card';
        const nameText = currentLang === 'EN' ? feat.nameEN : feat.nameID;
        checkboxWrapper.innerHTML = `
          <input type="checkbox" id="feat-${key}" value="${key}" class="calc-feature-checkbox">
          <label for="feat-${key}">
            <div class="checkbox-indicator"></div>
            <div class="feature-info">
              <span class="feature-name">${nameText}</span>
              <span class="feature-price" data-usd="${feat.priceUSD}" data-idr="${feat.priceIDR}">+Rp ${feat.priceIDR.toLocaleString('id-ID')}</span>
            </div>
          </label>
        `;
        featuresContainer.appendChild(checkboxWrapper);
      });
    }

    renderSelectOptions();
    renderFeatures();

    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', () => {
        renderSelectOptions();
        renderFeatures();
        calculate();
      });
    }

    function formatCurrency(amountUSD, amountIDR) {
      if (currency === 'IDR') {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumFractionDigits: 0
        }).format(amountIDR);
      } else {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0
        }).format(amountUSD);
      }
    }

    function calculate() {
      const selectedTypeKey = projectTypeSelect.value || 'starter_smm';
      const selectedType = calculatorConfig.projectTypes[selectedTypeKey];
      if (!selectedType) return;

      let totalUSD = selectedType.basePriceUSD;
      let totalIDR = selectedType.baseIDR;
      let totalWeeks = selectedType.baseWeeks;

      const checkedCheckboxes = document.querySelectorAll('.calc-feature-checkbox:checked');
      const selectedFeaturesList = [];

      checkedCheckboxes.forEach(cb => {
        const featKey = cb.value;
        const feat = calculatorConfig.features[featKey];
        if (feat) {
          totalUSD += feat.priceUSD;
          totalIDR += feat.priceIDR;
          totalWeeks += feat.weeks;
          const featName = currentLang === 'EN' ? feat.nameEN : feat.nameID;
          selectedFeaturesList.push(featName);
        }
      });

      const minCostUSD = Math.round(totalUSD * 0.95);
      const maxCostUSD = Math.round(totalUSD * 1.10);

      const minCostIDR = Math.round(totalIDR * 0.95);
      const maxCostIDR = Math.round(totalIDR * 1.10);

      costDisplay.innerHTML = `${formatCurrency(minCostUSD, minCostIDR)} - ${formatCurrency(maxCostUSD, maxCostIDR)}`;
      const durText = currentLang === 'EN' ? 'Est. Service Duration' : 'Estimasi Durasi Layanan';
      const durationVal = currentLang === 'EN' ? (selectedType.durationEN || '1 Week / Cycle') : (selectedType.durationID || '1 minggu / cycle');
      timelineDisplay.textContent = `${durText}: ${durationVal}`;

      if (bookBtn) {
        bookBtn.onclick = function() {
          const isEN = currentLang === 'EN';
          const typeName = isEN ? selectedType.nameEN : selectedType.nameID;
          
          let message = '';
          if (isEN) {
            message += `Hello MB Agency! 👋\nI have customized a project package on your Website Price Configurator:\n\n`;
            message += `📌 *Main Package*: ${typeName}\n`;
            if (selectedFeaturesList.length > 0) {
              message += `➕ *Selected Add-ons*:\n  - ` + selectedFeaturesList.join('\n  - ') + `\n`;
            } else {
              message += `➕ *Add-ons*: Standard Baseline\n`;
            }
            message += `💰 *Estimated Budget*: ${formatCurrency(minCostUSD, minCostIDR)} - ${formatCurrency(maxCostUSD, maxCostIDR)} (${currency})\n\n`;
            message += `Please let me know slot availability & technical details. Thank you!`;
          } else {
            message += `Halo MB Agency! 👋\nSaya menyusun kustomisasi paket di Price Configurator Website:\n\n`;
            message += `📌 *Paket Utama*: ${typeName}\n`;
            if (selectedFeaturesList.length > 0) {
              message += `➕ *Add-on Dipilih*:\n  - ` + selectedFeaturesList.join('\n  - ') + `\n`;
            } else {
              message += `➕ *Add-on*: Baseline Standar\n`;
            }
            message += `💰 *Estimasi Budget*: ${formatCurrency(minCostUSD, minCostIDR)} - ${formatCurrency(maxCostUSD, maxCostIDR)} (${currency})\n\n`;
            message += `Mohon info ketersediaan slot & diskusi teknis selanjutnya. Terima kasih!`;
          }

          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
        };
      }
    }

    projectTypeSelect.addEventListener('change', calculate);
    featuresContainer.addEventListener('change', (e) => {
      if (e.target && e.target.classList.contains('calc-feature-checkbox')) {
        calculate();
      }
    });

    if (usdIdrToggle) {
      usdIdrToggle.addEventListener('click', () => {
        currency = currency === 'USD' ? 'IDR' : 'USD';
        usdIdrToggle.textContent = currency === 'USD' ? 'Switch to IDR (Rp)' : 'Switch to USD ($)';

        const prices = featuresContainer.querySelectorAll('.feature-price');
        prices.forEach(priceSpan => {
          const usdVal = parseFloat(priceSpan.getAttribute('data-usd'));
          const idrVal = parseFloat(priceSpan.getAttribute('data-idr'));
          if (currency === 'IDR') {
            priceSpan.textContent = `+Rp ${idrVal.toLocaleString('id-ID')}`;
          } else {
            priceSpan.textContent = `+$${usdVal}`;
          }
        });
        calculate();
      });
    }

    calculate();
  }

  initCalculator();

  // --- General Consultation Form Modal ---
  const modalOverlay = document.getElementById('consultationModal');
  const modalClose = document.getElementById('modalClose');
  const consultationForm = document.getElementById('consultationForm');

  document.querySelectorAll('.open-consultation-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const packageName = btn.getAttribute('data-package') || (currentLang === 'EN' ? 'General Consultation' : 'Konsultasi Umum');
      const packageSelect = document.getElementById('selectedPackage');
      if (packageSelect) packageSelect.value = packageName;
      if (modalOverlay) modalOverlay.classList.add('active');
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName').value.trim();
      const brand = document.getElementById('clientBrand').value.trim();
      const service = document.getElementById('selectedPackage').value;
      const message = document.getElementById('clientMessage').value.trim();

      const isEN = currentLang === 'EN';
      let text = '';
      if (isEN) {
        text = `Hello MB Agency! 👋\n\nI would like to consult regarding:\n📌 *Service / Package*: ${service}\n👤 *Name*: ${name}\n🏢 *Brand / Business*: ${brand || '-'}\n💬 *Message*: ${message || 'Interested in more details.'}`;
      } else {
        text = `Halo MB Agency! 👋\n\nSaya ingin berkonsultasi mengenai:\n📌 *Layanan*: ${service}\n👤 *Nama*: ${name}\n🏢 *Brand*: ${brand || '-'}\n💬 *Pesan*: ${message || 'Ingin info selengkapnya.'}`;
      }

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
      if (modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  const scWaBtn = document.getElementById('scWaBtn');
  if (scWaBtn) {
    scWaBtn.addEventListener('click', () => {
      const isEN = currentLang === 'EN';
      const title = currentActiveItemData ? currentActiveItemData.title : 'Design Portfolio';
      const msg = isEN
        ? `Hello MB Agency! I am interested in your design project *${title}*. Could you share a similar proposal?`
        : `Halo MB Agency! Saya tertarik dengan contoh desain *${title}*. Boleh info penawaran serupa?`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }
});
