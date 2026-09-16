/**
 * CANAL VIEW HOUSING SCHEME & CANAL CITY - ALI PUR CHATTHA
 * Official Interactive Scripts - Updated with Pan & Zoom and Per-Marla Lakhs Calculator
 */

// Plot pricing and specs database (Benchmark average: Rs. 700,000 / 7 Lakhs per Marla)
const PLOT_DATA = {
  '3m-res': {
    name: '3 Marla Residential',
    nameUrdu: '3 مرلہ رہائشی',
    size: '3 Marla',
    marlas: 3,
    category: 'residential',
    dimensions: '20\' x 34\' (approx)',
    priceLakhsText: '21 Lakhs',
    priceLakhsUrdu: '21 لاکھ',
    features: ['GDA Approved Sector', '30ft Paved Street', 'Underground Electricity', 'Water Supply']
  },
  '5m-res': {
    name: '5 Marla Residential',
    nameUrdu: '5 مرلہ رہائشی',
    size: '5 Marla',
    marlas: 5,
    category: 'residential',
    dimensions: '25\' x 45\' (Standard)',
    priceLakhsText: '35 Lakhs',
    priceLakhsUrdu: '35 لاکھ',
    features: ['Prime Location Near Park', '40ft Wide Carpeted Road', 'Sui Gas & Water Connection', 'Ideal Family Home Size']
  },
  '7m-res': {
    name: '7 Marla Residential',
    nameUrdu: '7 مرلہ رہائشی',
    size: '7 Marla',
    marlas: 7,
    category: 'residential',
    dimensions: '30\' x 52\'-6"',
    priceLakhsText: '49 Lakhs',
    priceLakhsUrdu: '49 لاکھ',
    features: ['Executive Block Selection', 'Close to Grand Jamia Mosque', 'Underground Modern Utilities', 'Lush Green Frontage']
  },
  '10m-res': {
    name: '10 Marla Residential',
    nameUrdu: '10 مرلہ رہائشی',
    size: '10 Marla',
    marlas: 10,
    category: 'residential',
    dimensions: '34\'-8" x 65\' / 35\' x 65\'',
    priceLakhsText: '70 Lakhs',
    priceLakhsUrdu: '70 لاکھ',
    features: ['Luxury Executive Living', 'Near 14-Kanal Central Park', 'Direct Access to 80ft Boulevard', 'High Capital Appreciation']
  },
  '1k-res': {
    name: '1 Kanal Residential',
    nameUrdu: '1 کنال رہائشی',
    size: '1 Kanal (20 Marla)',
    marlas: 20,
    category: 'residential',
    dimensions: '50\' x 90\' / 50\' x 92\'-6"',
    priceLakhsText: '140 Lakhs (1.40 Crore)',
    priceLakhsUrdu: '1 کروڑ 40 لاکھ',
    features: ['Estate Mansion Living', 'Canal Bank Scenic View', 'VIP Gated Enclave', '80ft Main Boulevard Access']
  },
  '4m-comm': {
    name: '4 Marla Commercial',
    nameUrdu: '4 مرلہ کمرشل',
    size: '4 Marla',
    marlas: 4,
    category: 'commercial',
    dimensions: '22\'-6" x 40\'',
    priceLakhsText: '56 Lakhs (Base)',
    priceLakhsUrdu: '56 لاکھ (بنیادی)',
    features: ['Main Boulevard Frontage', 'G+3 Plaza Construction Permitted', '30ft Dedicated Customer Parking', 'High Commercial Footfall']
  }
};

// Official Blueprint Maps (3 Clean Tabs as Requested)
const BLUEPRINT_MAP = {
  'phase-1': {
    title: 'Canal View Phase 1 (Extension Master Plan)',
    titleUrdu: 'کینال ویو فیز 1 (ماسٹر لے آؤٹ پلان)',
    src: 'assets/images/master_plan_extension.jpg'
  },
  'phase-2': {
    title: 'Canal View Phase 2 ',
    titleUrdu: 'کینال ویو فیز 2 (تفصیلی ٹاؤن پلاننگ بلیو پرنٹ)',
    src: 'assets/images/canal_view_detailed_layout.jpg'
  },
  'canal-city': {
    title: 'Canal City (Official GDA Approved Amenities & Sector Plan)',
    titleUrdu: 'کینال سٹی (جی ڈی اے سے منظور شدہ سہولیات و منصوبہ)',
    src: 'assets/images/gda_features_banner.jpg'
  }
};

// Bilingual Dictionary
const TRANSLATIONS = {
  en: {
    nav_home: "Home",
    nav_about: "GDA Approval",
    nav_masterplan: "Master Plan",
    nav_plots: "Plots & Pricing",
    nav_calculator: "Calculator",
    nav_amenities: "Amenities",
    nav_location: "Location",
    nav_overseas: "Overseas Desk",
    nav_contact: "Contact",
    btn_book_tour: "Schedule Site Visit",
    btn_whatsapp_us: "WhatsApp Us",
    hero_badge_gda: "GDA Approved (NOC #1832)",
    hero_badge_canal: "Lower Chenab Canal Frontage",
    hero_badge_size: "378+ Kanals Master Planned",
    hero_title: "Where Luxury Meets Nature on the <span>Canal Bank</span>",
    hero_subtitle: "Experience Alipur Chattha's most prestigious gated community. Featuring 80ft wide main boulevard, underground utilities, Grand Jamia Mosque, 14-Kanal central park, and world-class security.",
    hero_btn_explore: "Explore Master Plan",
    hero_btn_calc: "Calculate Installment",
    stat_boulevard: "Main Boulevard",
    stat_security: "Security & CCTV",
    stat_park: "Central Park",
    stat_utilities: "Underground Utilities",
    gda_title: "100% GDA Approved & Legally Secure",
    gda_desc: "Officially sanctioned by Gujranwala Development Authority under NOC #1832. Mouza Kot Rehar, Tehsil Wazirabad, Alipur Chattha.",
    calc_title: "Interactive Installment Calculator",
    calc_subtitle: "Select plot size or enter custom per marla price to calculate down payment and monthly installments in Lakhs.",
    amenities_title: "World-Class Amenities & Features",
    amenities_subtitle: "Crafted to international standards, providing unmatched comfort, safety, and community lifestyle for your family."
  },
  ur: {
    nav_home: "مرکزی صفحہ",
    nav_about: "جی ڈی اے منظوری",
    nav_masterplan: "ماسٹر پلان",
    nav_plots: "پلاٹس و قیمتیں",
    nav_calculator: "اقساط کیلکولیٹر",
    nav_amenities: "سہولیات",
    nav_location: "مقام و نقشہ",
    nav_overseas: "اوورسیز پاکستانی",
    nav_contact: "رابطہ",
    btn_book_tour: "سائٹ وزٹ بک کریں",
    btn_whatsapp_us: "واٹس ایپ رابطہ",
    hero_badge_gda: "GDA سے منظور شدہ (این او سی #1832)",
    hero_badge_canal: "لوئر چناب کینال کا خوبصورت کنارہ",
    hero_badge_size: "378+ کنال پر مشتمل عظیم منصوبہ",
    hero_title: "جہاں جدید طرزِ زندگی <span>کینال کے قدرتی حسن</span> سے ملتا ہے",
    hero_subtitle: "علی پور چٹھہ کا سب سے پرتعیش اور محفوظ ترین رہائشی منصوبہ۔ 80 فٹ کشادہ مین بلیوارڈ، زیرِ زمین یوٹیلیٹیز، جامع مسجد، 14 کنال سینٹرل پارک اور 24 گھنٹے فول پروف سکیورٹی۔",
    hero_btn_explore: "ماسٹر پلان دیکھیں",
    hero_btn_calc: "اقساط کا حساب لگائیں",
    stat_boulevard: "مین بلیوارڈ",
    stat_security: "سکیورٹی و سی سی ٹی وی",
    stat_park: "عظیم الشان سینٹرل پارک",
    stat_utilities: "زیرِ زمین بجلی و گیس",
    gda_title: "جی ڈی اے (GDA) سے باقاعدہ منظور شدہ",
    gda_desc: "گوجرانوالہ ڈویلپمنٹ اتھارٹی (GDA) سے منظور شدہ۔ موضع کوٹ ریہڑ، تحصیل وزیر آباد، مین گوجرانوالہ روڈ علی پور چٹھہ۔",
    calc_title: "اقساط اور بکنگ کیلکولیٹر",
    calc_subtitle: "پلاٹ سائز یا فی مرلہ ریٹ تبدیل کر کے ڈاؤن پیمنٹ اور ماہانہ اقساط کا فوری تخمینہ لاکھ روپے میں لگائیں۔",
    amenities_title: "عالمی معیار کی بے مثال سہولیات",
    amenities_subtitle: "آپ کے خاندان کے لیے پرسکون، محفوظ اور پرتعیش ماحول کے ساتھ تمام جدید شہری سہولیات ایک ہی جگہ۔"
  }
};

let currentLang = 'en';
let selectedPlotKey = '5m-res';
let selectedTenureYears = 2;
let selectedDownPercent = 25;
let currentRatePerMarla = 700000; // 7 Lakhs per Marla default

// Helper: Format amount in Lakhs (or Crores if >= 1 Crore) and PKR
function formatInLakhs(amount) {
  const num = Number(amount);
  if (num >= 10000000) {
    const crore = (num / 10000000).toFixed(2);
    const lakhs = (num / 100000).toFixed(1);
    return `${crore} Crore (${lakhs} Lakhs)`;
  } else if (num >= 100000) {
    const lakhs = (num / 100000).toFixed(2);
    return `${lakhs} Lakhs`;
  } else {
    return 'PKR ' + num.toLocaleString('en-PK');
  }
}

function formatPKR(num) {
  return 'PKR ' + Number(num).toLocaleString('en-PK');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initBlueprintPanZoom();
  initPlotFilters();
  initCalculator();
  initBookingForm();
  initMobileDrawer();
  initSmoothScroll();
});

/* ----------------------------------------------------
   1. LANGUAGE SWITCHER
   ---------------------------------------------------- */
function initLanguage() {
  const savedLang = localStorage.getItem('canal_view_lang') || 'en';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('canal_view_lang', lang);

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');
  document.body.setAttribute('dir', lang === 'ur' ? 'rtl' : 'ltr');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Apply translations
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  updateCalculatorUI();
}

/* ----------------------------------------------------
   2. DYNAMIC PAN & ZOOM MASTER PLAN VIEWER
   ---------------------------------------------------- */
function initBlueprintPanZoom() {
  const tabBtns = document.querySelectorAll('.blueprint-tab-btn');
  const imgEl = document.getElementById('blueprint-img');
  const canvasWrapper = document.getElementById('blueprint-canvas-wrapper');
  const titleEl = document.getElementById('blueprint-title-text');
  const frameEl = document.getElementById('blueprint-frame');
  const zoomInBtn = document.getElementById('zoom-in-btn');
  const zoomOutBtn = document.getElementById('zoom-out-btn');
  const zoomResetBtn = document.getElementById('zoom-reset-btn');
  const zoomBadge = document.getElementById('zoom-level-badge');
  const openModalBtn = document.getElementById('open-modal-btn');

  // Modal elements
  const modal = document.getElementById('blueprint-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-blueprint-img');
  const modalCanvasWrapper = document.getElementById('modal-canvas-wrapper');
  const modalViewport = document.getElementById('modal-viewport');
  const modalTitle = document.getElementById('modal-blueprint-title');
  const modalZoomInBtn = document.getElementById('modal-zoom-in-btn');
  const modalZoomOutBtn = document.getElementById('modal-zoom-out-btn');
  const modalZoomResetBtn = document.getElementById('modal-zoom-reset-btn');
  const modalZoomBadge = document.getElementById('modal-zoom-badge');

  if (!imgEl || !canvasWrapper) return;

  // Pan and Zoom Controller Factory
  function createPanZoomController(viewport, canvas, badge) {
    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    function applyTransform() {
      canvas.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      if (badge) {
        badge.textContent = `${Math.round(scale * 100)}%`;
      }
    }

    function zoom(delta, originX = null, originY = null) {
      const prevScale = scale;
      scale = Math.min(Math.max(scale + delta, 1), 6.0); // 100% to 600%

      if (scale === 1) {
        translateX = 0;
        translateY = 0;
      } else if (originX !== null && originY !== null) {
        // Zoom towards mouse pointer
        const rect = viewport.getBoundingClientRect();
        const offsetX = originX - rect.left - rect.width / 2;
        const offsetY = originY - rect.top - rect.height / 2;
        const ratio = scale / prevScale;
        translateX = offsetX - (offsetX - translateX) * ratio;
        translateY = offsetY - (offsetY - translateY) * ratio;
      }
      applyTransform();
    }

    function reset() {
      scale = 1;
      translateX = 0;
      translateY = 0;
      applyTransform();
    }

    // Mouse events
    viewport.addEventListener('mousedown', (e) => {
      if (scale <= 1) return; // only pan when zoomed in
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      viewport.classList.add('grabbing');
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      applyTransform();
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        viewport.classList.remove('grabbing');
      }
    });

    // Touch events for mobile
    viewport.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1 && scale > 1) {
        isDragging = true;
        startX = e.touches[0].clientX - translateX;
        startY = e.touches[0].clientY - translateY;
      }
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        translateX = e.touches[0].clientX - startX;
        translateY = e.touches[0].clientY - startY;
        applyTransform();
      }
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Wheel zoom
    viewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.25 : -0.25;
      zoom(delta, e.clientX, e.clientY);
    }, { passive: false });

    // Double click to toggle zoom
    viewport.addEventListener('dblclick', (e) => {
      if (scale > 1.5) {
        reset();
      } else {
        zoom(1.5, e.clientX, e.clientY);
      }
    });

    return {
      zoomIn: () => zoom(0.4),
      zoomOut: () => zoom(-0.4),
      reset: reset,
      getScale: () => scale
    };
  }

  // Setup Page Controller
  const pageController = createPanZoomController(frameEl, canvasWrapper, zoomBadge);
  if (zoomInBtn) zoomInBtn.addEventListener('click', pageController.zoomIn);
  if (zoomOutBtn) zoomOutBtn.addEventListener('click', pageController.zoomOut);
  if (zoomResetBtn) zoomResetBtn.addEventListener('click', pageController.reset);

  // Setup Modal Controller
  let modalController = null;
  if (modalViewport && modalCanvasWrapper) {
    modalController = createPanZoomController(modalViewport, modalCanvasWrapper, modalZoomBadge);
    if (modalZoomInBtn) modalZoomInBtn.addEventListener('click', modalController.zoomIn);
    if (modalZoomOutBtn) modalZoomOutBtn.addEventListener('click', modalController.zoomOut);
    if (modalZoomResetBtn) modalZoomResetBtn.addEventListener('click', modalController.reset);
  }

  // Tab switcher
  let activeTabKey = 'phase-1';
  function switchTab(key) {
    const data = BLUEPRINT_MAP[key];
    if (!data) return;
    activeTabKey = key;

    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-blueprint') === key);
    });

    pageController.reset();
    imgEl.style.opacity = '0';
    setTimeout(() => {
      imgEl.src = data.src;
      imgEl.alt = data.title;
      if (modalImg) modalImg.src = data.src;
      if (titleEl) {
        titleEl.textContent = currentLang === 'ur' ? data.titleUrdu : data.title;
      }
      if (modalTitle) {
        modalTitle.textContent = currentLang === 'ur' ? data.titleUrdu : data.title;
      }
      imgEl.style.opacity = '1';
    }, 150);
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-blueprint');
      switchTab(key);
    });
  });

  // Modal Open/Close
  function openModal() {
    if (modal && modalImg) {
      const data = BLUEPRINT_MAP[activeTabKey];
      modalImg.src = data.src;
      if (modalTitle) modalTitle.textContent = currentLang === 'ur' ? data.titleUrdu : data.title;
      if (modalController) modalController.reset();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ----------------------------------------------------
   3. PLOT PORTFOLIO FILTER
   ---------------------------------------------------- */
function initPlotFilters() {
  const filterBtns = document.querySelectorAll('.plot-filter-btn');
  const plotCards = document.querySelectorAll('.plot-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      plotCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ----------------------------------------------------
   4. INSTALLMENT CALCULATOR (WITH PER MARLA PRICE & LAKHS)
   ---------------------------------------------------- */
function initCalculator() {
  const plotChips = document.querySelectorAll('.plot-chip');
  const downSlider = document.getElementById('calc-down-slider');
  const downValText = document.getElementById('calc-down-val');
  const tenureBtns = document.querySelectorAll('.tenure-btn');
  const rateInput = document.getElementById('calc-per-marla-input');
  const rateLakhsBadge = document.getElementById('calc-rate-lakhs-badge');
  const presetBtns = document.querySelectorAll('.preset-btn');

  // Handle Plot chip selection
  plotChips.forEach(chip => {
    chip.addEventListener('click', () => {
      plotChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedPlotKey = chip.getAttribute('data-plot-key');
      updateCalculatorUI();
    });
  });

  // Handle Per Marla Input change
  if (rateInput) {
    rateInput.value = currentRatePerMarla;
    rateInput.addEventListener('input', (e) => {
      const val = parseInt(e.target.value.replace(/\D/g, ''), 10);
      if (!isNaN(val) && val > 0) {
        currentRatePerMarla = val;
        if (rateLakhsBadge) {
          rateLakhsBadge.textContent = (val / 100000).toFixed(2) + ' Lakhs / Marla';
        }
        updateCalculatorUI();
      }
    });
  }

  // Handle Rate Presets
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = parseInt(btn.getAttribute('data-rate'), 10);
      currentRatePerMarla = val;
      if (rateInput) rateInput.value = val;
      if (rateLakhsBadge) {
        rateLakhsBadge.textContent = (val / 100000).toFixed(2) + ' Lakhs / Marla';
      }
      updateCalculatorUI();
    });
  });

  // Down Payment slider
  if (downSlider) {
    downSlider.addEventListener('input', (e) => {
      selectedDownPercent = parseInt(e.target.value, 10);
      if (downValText) downValText.textContent = selectedDownPercent + '%';
      updateCalculatorUI();
    });
  }

  // Tenure buttons
  tenureBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tenureBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTenureYears = parseInt(btn.getAttribute('data-years'), 10);
      updateCalculatorUI();
    });
  });

  updateCalculatorUI();
}

function updateCalculatorUI() {
  const plot = PLOT_DATA[selectedPlotKey];
  if (!plot) return;

  const marlas = plot.marlas;
  const totalAmount = marlas * currentRatePerMarla;
  const downPayment = Math.round(totalAmount * (selectedDownPercent / 100));
  const possessionCharge = Math.round(totalAmount * 0.10); // 10% on possession
  const balanceToFinance = totalAmount - downPayment - possessionCharge;

  const totalMonths = selectedTenureYears * 12;
  const totalQuarters = selectedTenureYears * 4;

  const monthlyInstallment = Math.round(balanceToFinance / totalMonths);
  const quarterlyInstallment = Math.round(balanceToFinance / totalQuarters);

  // Update DOM elements
  const elTotal = document.getElementById('calc-out-total');
  const elDown = document.getElementById('calc-out-down');
  const elMonthly = document.getElementById('calc-out-monthly');
  const elQuarterly = document.getElementById('calc-out-quarterly');
  const elPossession = document.getElementById('calc-out-possession');
  const elPlotName = document.getElementById('calc-out-plot-name');
  const waBtn = document.getElementById('calc-whatsapp-btn');

  const totalLakhs = formatInLakhs(totalAmount);
  const downLakhs = formatInLakhs(downPayment);
  const monthlyLakhs = formatInLakhs(monthlyInstallment);
  const quarterlyLakhs = formatInLakhs(quarterlyInstallment);
  const possessionLakhs = formatInLakhs(possessionCharge);

  if (elTotal) {
    elTotal.innerHTML = `${totalLakhs} <span class="amount-sub">${formatPKR(totalAmount)}</span>`;
  }
  if (elDown) {
    elDown.innerHTML = `${downLakhs} (${selectedDownPercent}%) <span class="amount-sub">${formatPKR(downPayment)}</span>`;
  }
  if (elMonthly) {
    elMonthly.innerHTML = `${monthlyLakhs} / mo <span class="amount-sub">${formatPKR(monthlyInstallment)}</span>`;
  }
  if (elQuarterly) {
    elQuarterly.innerHTML = `${quarterlyLakhs} / qtr <span class="amount-sub">${formatPKR(quarterlyInstallment)}</span>`;
  }
  if (elPossession) {
    elPossession.innerHTML = `${possessionLakhs} (10%) <span class="amount-sub">${formatPKR(possessionCharge)}</span>`;
  }
  if (elPlotName) {
    const pName = currentLang === 'ur' ? plot.nameUrdu : plot.name;
    const rateText = (currentRatePerMarla / 100000).toFixed(1) + ' Lakhs/Marla';
    elPlotName.textContent = `${pName} @ ${rateText}`;
  }

  // Pre-filled WhatsApp message
  if (waBtn) {
    const rateStr = `${(currentRatePerMarla / 100000).toFixed(2)} Lakhs per Marla (PKR ${currentRatePerMarla.toLocaleString('en-PK')})`;
    const msg = `Assalam-o-Alaikum Canal View Team, I am interested in booking *${plot.name}* at Canal View Housing Scheme Alipur Chattha.\n\n*My Customized Payment Plan:*\n- Rate: ${rateStr}\n- Total Price: ${totalLakhs} (${formatPKR(totalAmount)})\n- Down Payment: ${downLakhs} (${selectedDownPercent}%)\n- Tenure: ${selectedTenureYears} Years (${totalMonths} Months)\n- Monthly Installment: ${monthlyLakhs} (${formatPKR(monthlyInstallment)})\n- Quarterly Installment: ${quarterlyLakhs} (${formatPKR(quarterlyInstallment)})\n\nPlease share latest available plot numbers and official booking procedure.`;
    waBtn.href = `https://wa.me/923016444777?text=${encodeURIComponent(msg)}`;
  }
}

/* ----------------------------------------------------
   5. BOOKING & SITE VISIT FORM
   ---------------------------------------------------- */
function initBookingForm() {
  const form = document.getElementById('site-visit-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="client_name"]').value.trim();
    const phone = form.querySelector('[name="client_phone"]').value.trim();
    const city = form.querySelector('[name="client_city"]').value.trim() || 'Not specified';
    const plotType = form.querySelector('[name="plot_interest"]').value;
    const date = form.querySelector('[name="visit_date"]').value || 'Earliest available';
    const notes = form.querySelector('[name="client_notes"]').value.trim() || 'None';

    if (!name || !phone) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    const message = `*NEW SITE VISIT / CONSULTATION INQUIRY*\n*Canal View Housing Scheme Alipur Chattha*\n\n- *Name:* ${name}\n- *WhatsApp/Phone:* ${phone}\n- *City / Country:* ${city}\n- *Plot Interest:* ${plotType}\n- *Preferred Visit Date:* ${date}\n- *Notes:* ${notes}`;

    const waUrl = `https://wa.me/923016444777?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');

    alert('Thank you! Redirecting you to our official WhatsApp sales representative with your booking details.');
    form.reset();
  });
}

/* ----------------------------------------------------
   6. MOBILE NAVIGATION DRAWER
   ---------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');
  const links = document.querySelectorAll('.drawer-link');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  links.forEach(l => l.addEventListener('click', closeDrawer));
}

/* ----------------------------------------------------
   7. SMOOTH SCROLL & ACTIVE LINK SPY
   ---------------------------------------------------- */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
