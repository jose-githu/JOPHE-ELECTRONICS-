/* ─── Johpe Electronics — script.js v3.0 ─── */
'use strict';

// ═══════════════════════════════════════════════════════════════
// 1. PRODUCT DATABASE — EXPANDED 5-CATEGORY CATALOG
// ═══════════════════════════════════════════════════════════════
const PRODUCTS = [

  // ── HOT PROMOS ──
  {
    id: 'promo-01', name: 'Samsung Galaxy A54',
    category: 'promo', type: 'phone', icon: '📱',
    specs: '6.4" AMOLED · 128GB · 5000mAh · 5G',
    price: 34500, oldPrice: 42000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['smartphones', 'budget-mid'],
  },
  {
    id: 'promo-02', name: 'Dell Latitude 5490',
    category: 'promo', type: 'laptop', icon: '💻',
    specs: 'Core i5 8th Gen · 8GB RAM · 256GB SSD · 14"',
    price: 28000, oldPrice: 36000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['laptops', 'budget-mid', 'work', 'student'],
  },
  {
    id: 'promo-03', name: 'Redmi Note 13 Pro',
    category: 'promo', type: 'phone', icon: '📱',
    specs: '6.67" AMOLED · 256GB · 200MP · 67W Fast Charge',
    price: 22000, oldPrice: 27500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['smartphones', 'budget-low', 'budget-mid'],
  },
  {
    id: 'promo-04', name: 'JBL Charge 5',
    category: 'promo', type: 'speaker', icon: '🔊',
    specs: '30W · IP67 Waterproof · 20hr battery · PartyBoost',
    price: 12500, oldPrice: 16000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['audio', 'budget-low'],
  },
  {
    id: 'promo-05', name: 'Anker 20000mAh PowerCore',
    category: 'promo', type: 'powerbank', icon: '🔋',
    specs: '65W PD · Dual USB-A · Fast Charge · LCD Display',
    price: 4800, oldPrice: 6500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 18-month warranty',
    tags: ['power', 'budget-low'],
  },

  // ── SMARTPHONES & TABLETS ──
  {
    id: 'phone-01', name: 'iPhone 15 Pro Max',
    category: 'smartphones', type: 'phone', icon: '📱',
    specs: '6.7" Super Retina · 256GB · A17 Pro · Titanium',
    price: 145000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['smartphones', 'budget-premium'],
  },
  {
    id: 'phone-02', name: 'iPhone 13 Pro',
    category: 'smartphones', type: 'phone', icon: '📱',
    specs: '6.1" ProMotion · 128GB · Triple Camera · 5G',
    price: 75000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['smartphones', 'budget-high'],
  },
  {
    id: 'phone-03', name: 'Samsung S23 Ultra',
    category: 'smartphones', type: 'phone', icon: '📱',
    specs: '6.8" Dynamic AMOLED · 256GB · S-Pen · 200MP',
    price: 98000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['smartphones', 'budget-high', 'budget-premium'],
  },
  {
    id: 'phone-04', name: 'Samsung Galaxy A35',
    category: 'smartphones', type: 'phone', icon: '📱',
    specs: '6.6" Super AMOLED · 128GB · 50MP · 5000mAh',
    price: 27500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['smartphones', 'budget-mid'],
  },
  {
    id: 'phone-05', name: 'iPhone 12 (Ex-UK)',
    category: 'smartphones', type: 'phone', icon: '📱',
    specs: '6.1" OLED · 64GB · Ceramic Shield · 5G',
    price: 42000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 4-month warranty',
    tags: ['smartphones', 'budget-mid'],
  },
  {
    id: 'phone-06', name: 'Samsung Galaxy Tab A9+',
    category: 'smartphones', type: 'tablet', icon: '📟',
    specs: '11" LCD · 128GB · Snapdragon 695 · Wi-Fi + 5G',
    price: 38000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['smartphones', 'budget-mid'],
  },
  {
    id: 'phone-07', name: 'iPad 10th Gen',
    category: 'smartphones', type: 'tablet', icon: '📟',
    specs: '10.9" Liquid Retina · 64GB · A14 Bionic · Wi-Fi',
    price: 62000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['smartphones', 'budget-high'],
  },
  {
    id: 'phone-08', name: 'iPhone 11 (Ex-UK)',
    category: 'smartphones', type: 'phone', icon: '📱',
    specs: '6.1" Liquid Retina · 64GB · Dual Camera · Face ID',
    price: 28000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 3-month warranty',
    tags: ['smartphones', 'budget-mid'],
  },

  // ── LAPTOPS & COMPUTING ──
  {
    id: 'laptop-01', name: 'HP EliteBook 840 G6',
    category: 'laptops', type: 'laptop', icon: '💻',
    specs: 'Core i7 8th Gen · 16GB RAM · 512GB SSD · FHD',
    price: 45000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['laptops', 'budget-mid', 'work'],
  },
  {
    id: 'laptop-02', name: 'Lenovo ThinkPad X1 Carbon',
    category: 'laptops', type: 'laptop', icon: '💻',
    specs: 'Core i7 10th Gen · 16GB · 512GB SSD · 14" FHD',
    price: 68000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['laptops', 'budget-high', 'work'],
  },
  {
    id: 'laptop-03', name: 'MacBook Air M2',
    category: 'laptops', type: 'laptop', icon: '💻',
    specs: 'M2 Chip · 8GB · 256GB SSD · 13.6" Liquid Retina',
    price: 115000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['laptops', 'budget-premium', 'work', 'student'],
  },
  {
    id: 'laptop-04', name: 'Dell XPS 13 (Ex-UK)',
    category: 'laptops', type: 'laptop', icon: '💻',
    specs: 'Core i5 11th Gen · 8GB · 256GB SSD · 13.4" FHD+',
    price: 52000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['laptops', 'budget-high', 'work', 'student'],
  },
  {
    id: 'laptop-05', name: 'HP 250 G8 (New)',
    category: 'laptops', type: 'laptop', icon: '💻',
    specs: 'Core i3 11th Gen · 8GB · 256GB SSD · 15.6" HD',
    price: 35000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['laptops', 'budget-mid', 'student'],
  },
  {
    id: 'laptop-06', name: 'Lenovo ThinkPad T470',
    category: 'laptops', type: 'laptop', icon: '💻',
    specs: 'Core i5 7th Gen · 8GB · 256GB SSD · 14" HD',
    price: 26000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['laptops', 'budget-mid', 'work'],
  },
  {
    id: 'laptop-07', name: 'Samsung T7 1TB SSD',
    category: 'laptops', type: 'storage', icon: '💾',
    specs: 'USB 3.2 · 1050MB/s Read · Shock-Resistant · Portable',
    price: 12000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 3-year warranty',
    tags: ['laptops', 'budget-low'],
  },
  {
    id: 'laptop-08', name: 'WD Elements 2TB HDD',
    category: 'laptops', type: 'storage', icon: '💾',
    specs: 'USB 3.0 · 2TB · Plug & Play · Compatible all OS',
    price: 5800,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 2-year warranty',
    tags: ['laptops', 'budget-low'],
  },

  // ── SMART AUDIO & SOUND ──
  {
    id: 'audio-01', name: 'Sony WH-1000XM5',
    category: 'audio', type: 'headphones', icon: '🎧',
    specs: 'ANC · 30hr battery · Hi-Res Audio · Bluetooth 5.2',
    price: 28000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['audio', 'budget-mid'],
  },
  {
    id: 'audio-02', name: 'JBL Charge 5',
    category: 'audio', type: 'speaker', icon: '🔊',
    specs: '30W · IP67 Waterproof · 20hr battery · PartyBoost',
    price: 12500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['audio', 'budget-low'],
  },
  {
    id: 'audio-03', name: 'Samsung Galaxy Buds2 Pro',
    category: 'audio', type: 'earphones', icon: '🎵',
    specs: 'ANC · 360 Audio · IPX7 · 29hr total battery',
    price: 15000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['audio', 'budget-low', 'budget-mid'],
  },
  {
    id: 'audio-04', name: 'Sonos Era 100',
    category: 'audio', type: 'speaker', icon: '🔊',
    specs: 'Wi-Fi + Bluetooth · Stereo Sound · Alexa · Trueplay',
    price: 24000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['audio', 'budget-mid'],
  },
  {
    id: 'audio-05', name: 'Yamaha YST-SW012 Subwoofer',
    category: 'audio', type: 'subwoofer', icon: '🔉',
    specs: '100W · Advanced YST · 20Hz-200Hz · Front-Firing Port',
    price: 14500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['audio', 'budget-low', 'budget-mid'],
  },
  {
    id: 'audio-06', name: 'Apple AirPods Pro (2nd Gen)',
    category: 'audio', type: 'earphones', icon: '🎵',
    specs: 'ANC + Transparency · H2 Chip · MagSafe · 30hr case',
    price: 22000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['audio', 'budget-mid'],
  },
  {
    id: 'audio-07', name: 'JBL Partybox 110',
    category: 'audio', type: 'speaker', icon: '🔊',
    specs: '160W · IPX4 · Light Show · PartyBoost · Guitar/Mic In',
    price: 32000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['audio', 'budget-mid'],
  },

  // ── POWER & SOLAR SOLUTIONS ──
  {
    id: 'power-01', name: 'Anker 20000mAh PowerCore',
    category: 'power', type: 'powerbank', icon: '🔋',
    specs: '65W PD · Dual USB-A · Fast Charge · LCD Display',
    price: 4800,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 18-month warranty',
    tags: ['power', 'budget-low'],
  },
  {
    id: 'power-02', name: 'Baseus 30000mAh Powerbank',
    category: 'power', type: 'powerbank', icon: '🔋',
    specs: '65W PD · 4 Ports · Digital Display · Quick Charge 4.0',
    price: 6500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['power', 'budget-low'],
  },
  {
    id: 'power-03', name: 'Jackery Explorer 240',
    category: 'power', type: 'solar', icon: '☀️',
    specs: '240Wh · 200W Output · MPPT Solar Ready · AC/DC/USB',
    price: 28000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 24-month warranty',
    tags: ['power', 'budget-mid'],
  },
  {
    id: 'power-04', name: 'EcoFlow River 2 Pro',
    category: 'power', type: 'solar', icon: '☀️',
    specs: '768Wh · 800W AC · X-Stream Charge · Solar Compatible',
    price: 52000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 24-month warranty',
    tags: ['power', 'budget-high'],
  },
  {
    id: 'power-05', name: '100W Solar Panel Kit',
    category: 'power', type: 'solar', icon: '☀️',
    specs: 'Monocrystalline · Foldable · MC4 Connector · IP65',
    price: 9500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['power', 'budget-low'],
  },
  {
    id: 'power-06', name: 'Anker 737 GaNPrime 120W',
    category: 'power', type: 'charger', icon: '⚡',
    specs: '120W · 3 Ports · GaN Tech · Smart Charge · Compact',
    price: 5500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 18-month warranty',
    tags: ['power', 'budget-low'],
  },

  // ── DAILY TECH ACCESSORIES ──
  {
    id: 'acc-01', name: 'Original Apple 20W Charger',
    category: 'accessories', type: 'charger', icon: '⚡',
    specs: 'USB-C · PD Fast Charge · iPhone 15/14/13 Compatible',
    price: 2500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ Genuine Apple',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-02', name: 'Samsung 65W PD Charger',
    category: 'accessories', type: 'charger', icon: '⚡',
    specs: 'USB-C · Super Fast Charge 2.0 · S23/S24 Compatible',
    price: 3200,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ Genuine Samsung',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-03', name: 'Anker Kevlar USB-C Cable 2m',
    category: 'accessories', type: 'cable', icon: '🔌',
    specs: '240W · Braided Kevlar · USB 3.2 Gen 2 · 10Gbps',
    price: 1800,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ Lifetime warranty',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-04', name: 'Apple MFi Lightning Cable 2m',
    category: 'accessories', type: 'cable', icon: '🔌',
    specs: 'MFi Certified · Braided · iPhone 12/11/X Compatible',
    price: 1500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ MFi Certified',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-05', name: 'SanDisk 256GB microSD A2',
    category: 'accessories', type: 'memory', icon: '💳',
    specs: 'UHS-I · 190MB/s Read · A2 App Performance · 4K Video',
    price: 3500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ Lifetime warranty',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-06', name: 'Samsung Pro Plus 128GB SD',
    category: 'accessories', type: 'memory', icon: '💳',
    specs: 'UHS-I · 180MB/s · U3 V30 · 4K UHD Ready',
    price: 2200,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 10-year limited warranty',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-07', name: 'Logitech MX Master 3S',
    category: 'accessories', type: 'peripheral', icon: '🖱️',
    specs: '8000 DPI · Bluetooth + USB · 70-day battery · Silent',
    price: 9500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['accessories', 'laptops', 'budget-low'],
  },
  {
    id: 'acc-08', name: 'UGREEN 7-in-1 USB-C Hub',
    category: 'accessories', type: 'peripheral', icon: '🔌',
    specs: 'HDMI 4K · 3×USB 3.0 · SD/TF · 100W PD · Aluminum',
    price: 3800,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 18-month warranty',
    tags: ['accessories', 'laptops', 'budget-low'],
  },
];

// ═══════════════════════════════════════════════════════════════
// 2. ENGINE STATE
// ═══════════════════════════════════════════════════════════════
let activeCategory = 'all';
let searchQuery    = '';
let activeTab      = 'discover'; // discover | categories | bag | support

const WHATSAPP_NUMBER = '254799776990';
const WHATSAPP_BASE   = `https://wa.me/${WHATSAPP_NUMBER}`;

const CATEGORY_META = {
  all:         { icon: '✦',  title: 'All Products',               sub: 'Complete catalog — all devices & accessories' },
  promo:       { icon: '🔥', title: "Today's Hot Deals",          sub: 'Flash promos — limited stock, save big now' },
  smartphones: { icon: '📱', title: 'Phones & Tablets',           sub: 'iPhones, Samsung, Redmi, iPads — every unit inspected' },
  laptops:     { icon: '💻', title: 'Laptops & Computing',        sub: 'Business laptops, external drives — tested & verified' },
  audio:       { icon: '🎵', title: 'Smart Audio & Sound',        sub: 'Speakers, earphones, subwoofers — premium sound' },
  power:       { icon: '⚡', title: 'Power & Solar',              sub: 'Fast chargers, power banks & solar kits' },
  accessories: { icon: '🔌', title: 'Daily Tech Accessories',     sub: 'Cables, memory cards, chargers & peripherals' },
};

const HELPER_FILTER_MAP = {
  'budget-low':     { label: 'Under KES 25,000',  test: p => p.price < 25000 },
  'budget-mid':     { label: 'KES 25k – 60k',     test: p => p.price >= 25000 && p.price <= 60000 },
  'budget-high':    { label: 'KES 60k – 100k',    test: p => p.price > 60000 && p.price <= 100000 },
  'budget-premium': { label: 'KES 100k+',         test: p => p.price > 100000 },
  'use-phone':      { label: 'Smartphones',       test: p => p.type === 'phone' || p.type === 'tablet' },
  'use-work':       { label: 'Work Laptops',      test: p => p.tags.includes('work') },
  'use-student':    { label: 'Student Picks',     test: p => p.tags.includes('student') },
  'use-promo':      { label: 'Flash Deals',       test: p => p.category === 'promo' },
};

const SUPPORT_MESSAGES = {
  location: "Hi Johpe Electronics 👋, I'd like to know your physical location and delivery options to my area.",
  warranty: "Hi Johpe Electronics 👋, could you explain your hand-verification process and warranty terms for your devices?",
  tradein:  "Hi Johpe Electronics 👋, I'm interested in trading in my current device for an upgrade. Can you walk me through the process?",
  agent:    "Hi Johpe Electronics 👋, I'd like to speak with a customer care agent, please.",
  mpesa:    "Hi Johpe Electronics 👋, I'd like to confirm your M-Pesa Till Number and payment process before placing an order.",
};

// ═══════════════════════════════════════════════════════════════
// 3. CART STATE
// ═══════════════════════════════════════════════════════════════
const cart = {};

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  cart[productId] ? cart[productId].qty++ : (cart[productId] = { product, qty: 1 });
  updateCartUI();
  updateAddButtons();
  showToast(`${product.name} added to bag`);
}

function removeFromCart(productId) {
  delete cart[productId];
  updateCartUI();
  updateAddButtons();
  renderCartModal();
}

const getCartTotal = () =>
  Object.values(cart).reduce((s, { product, qty }) => s + product.price * qty, 0);

const getCartCount = () =>
  Object.values(cart).reduce((s, { qty }) => s + qty, 0);

const formatKES = n => 'KES ' + n.toLocaleString('en-KE');

// ═══════════════════════════════════════════════════════════════
// 4. BUILD CARD HTML
// ═══════════════════════════════════════════════════════════════
function buildCard(product) {
  const inCart = !!cart[product.id];
  const oldPriceHTML = product.oldPrice
    ? `<span class="card-old-price">${formatKES(product.oldPrice)}</span>` : '';
  const promoStrip = (product.category === 'promo')
    ? `<div class="promo-strip">🔥 Save ${formatKES(product.oldPrice - product.price)}</div>` : '';

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="card-img">
        <span class="device-icon">${product.icon}</span>
        <span class="badge badge-${product.badgeType}">${product.badge}</span>
        ${promoStrip}
      </div>
      <div class="card-body">
        <p class="card-title">${product.name}</p>
        <p class="card-specs">${product.specs}</p>
        <p class="card-price">${formatKES(product.price)}${oldPriceHTML}</p>
        <p class="card-warranty">${product.warranty}</p>
        <button class="add-btn ${inCart ? 'in-cart' : ''}"
          onclick="addToCart('${product.id}')"
          data-btn-id="${product.id}"
          aria-label="${inCart ? 'Already in bag' : 'Add to bag'}">
          ${inCart ? '✓ In Bag' : '+ Add to Bag'}
        </button>
      </div>
    </div>`;
}

function updateAddButtons() {
  document.querySelectorAll('[data-btn-id]').forEach(btn => {
    const inCart = !!cart[btn.dataset.btnId];
    btn.textContent = inCart ? '✓ In Bag' : '+ Add to Bag';
    btn.classList.toggle('in-cart', inCart);
    btn.setAttribute('aria-label', inCart ? 'Already in bag' : 'Add to bag');
  });
}

// ═══════════════════════════════════════════════════════════════
// 5. SHELF BUILDER
// ═══════════════════════════════════════════════════════════════
function buildShelf(icon, title, subtitle, products) {
  if (!products.length) return '';
  const cards = products.map(buildCard).join('');
  return `
    <div class="shelf-block">
      <div class="shelf-header">
        <div class="shelf-title-group">
          <h2 class="shelf-title">${icon} ${title}</h2>
          <span class="shelf-subtitle">${subtitle}</span>
        </div>
        <span class="shelf-count-pill">${products.length} items</span>
      </div>
      <div class="horizontal-scroll-track">${cards}</div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// 6. FEED RENDERER
// ═══════════════════════════════════════════════════════════════
function renderFeed() {
  const feed      = document.getElementById('catalog-feed');
  const noResults = document.getElementById('no-results');
  const catHeader = document.getElementById('category-header');
  const feedLabel = document.getElementById('feed-label');
  const feedCount = document.getElementById('feed-count');
  const isFiltered = activeCategory !== 'all' || searchQuery.trim() !== '';

  if (!isFiltered) {
    catHeader.classList.add('hidden');
    feedLabel.textContent = '✦ Discovery Feed';
    noResults.classList.add('hidden');

    const promos  = PRODUCTS.filter(p => p.category === 'promo');
    const phones  = PRODUCTS.filter(p => p.category === 'smartphones');
    const laptops = PRODUCTS.filter(p => p.category === 'laptops');
    const audio   = PRODUCTS.filter(p => p.category === 'audio');
    const power   = PRODUCTS.filter(p => p.category === 'power');
    const accs    = PRODUCTS.filter(p => p.category === 'accessories');
    const total   = promos.length + phones.length + laptops.length + audio.length + power.length + accs.length;
    feedCount.textContent = `${total} items`;

    feed.classList.remove('catalog-grid');
    feed.classList.add('catalog-shelves');
    feed.classList.add('feed-transitioning');
    requestAnimationFrame(() => {
      setTimeout(() => {
        feed.innerHTML =
          buildShelf('🔥', 'Hot Deals',          'Flash promos — limited stock',              promos)  +
          buildShelf('📱', 'Phones & Tablets',   'Hand-verified every unit',                  phones)  +
          buildShelf('💻', 'Laptops & Computing','Business machines — tested & verified',      laptops) +
          buildShelf('🎵', 'Smart Audio',        'Premium speakers, earphones & subwoofers',  audio)   +
          buildShelf('⚡', 'Power & Solar',      'Fast chargers, power banks & solar kits',   power)   +
          buildShelf('🔌', 'Accessories',        'Cables, memory, chargers & peripherals',    accs);
        feed.classList.remove('feed-transitioning');
      }, 140);
    });

  } else {
    const pool = PRODUCTS.filter(
      p => matchesCategory(p, activeCategory) && matchesQuery(p, searchQuery)
    );

    catHeader.classList.remove('hidden');
    const meta = CATEGORY_META[activeCategory] || {};
    document.getElementById('category-header-icon').textContent  = meta.icon || '🔍';
    document.getElementById('category-header-title').textContent = searchQuery
      ? `Results for "${searchQuery}"` : (meta.title || activeCategory);
    document.getElementById('category-header-sub').textContent   = searchQuery
      ? `${pool.length} product${pool.length !== 1 ? 's' : ''} found`
      : (meta.sub || '');
    feedLabel.textContent = searchQuery
      ? '🔍 Search Results' : `${meta.icon || ''} ${meta.title || ''}`;
    feedCount.textContent = pool.length > 0 ? `${pool.length} items` : '';

    feed.classList.remove('catalog-shelves');
    feed.classList.add('catalog-grid');

    if (pool.length === 0) {
      feed.innerHTML = '';
      noResults.classList.remove('hidden');
      return;
    }
    noResults.classList.add('hidden');
    feed.classList.add('feed-transitioning');
    requestAnimationFrame(() => {
      setTimeout(() => {
        feed.innerHTML = pool.map(buildCard).join('');
        feed.classList.remove('feed-transitioning');
      }, 140);
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 7. FILTER HELPERS
// ═══════════════════════════════════════════════════════════════
function matchesCategory(product, cat) {
  switch (cat) {
    case 'all':         return true;
    case 'promo':       return product.category === 'promo';
    case 'smartphones': return product.category === 'smartphones';
    case 'laptops':     return product.category === 'laptops';
    case 'audio':       return product.category === 'audio';
    case 'power':       return product.category === 'power';
    case 'accessories': return product.category === 'accessories';
    case 'new':         return product.badgeType === 'new';
    case 'exuk':        return product.badgeType === 'exuk';
    default:            return true;
  }
}

function matchesQuery(product, query) {
  if (!query.trim()) return true;
  const q = query.toLowerCase();
  return (
    product.name.toLowerCase().includes(q)     ||
    product.specs.toLowerCase().includes(q)    ||
    product.badge.toLowerCase().includes(q)    ||
    product.type.toLowerCase().includes(q)     ||
    product.category.toLowerCase().includes(q)
  );
}

// ═══════════════════════════════════════════════════════════════
// 8. CATEGORY PILL SELECTION
// ═══════════════════════════════════════════════════════════════
function selectCategory(cat) {
  activeCategory = cat;
  searchQuery    = '';

  const input = document.getElementById('search-input');
  if (input) input.value = '';
  document.getElementById('search-clear').classList.add('hidden');

  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.cat === cat);
  });

  renderFeed();
  document.getElementById('discovery').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ═══════════════════════════════════════════════════════════════
// 9. SEARCH
// ═══════════════════════════════════════════════════════════════
let searchDebounce = null;

function handleSearchInput(value) {
  searchQuery = value;
  document.getElementById('search-clear').classList.toggle('hidden', value === '');

  if (value.trim() !== '') {
    activeCategory = 'all';
    document.querySelectorAll('.cat-pill').forEach(pill => pill.classList.remove('active'));
  } else {
    activeCategory = 'all';
    const allPill = document.querySelector('[data-cat="all"]');
    if (allPill) allPill.classList.add('active');
  }

  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(renderFeed, 120);
}

function clearSearch() {
  searchQuery    = '';
  activeCategory = 'all';

  const input = document.getElementById('search-input');
  if (input) input.value = '';
  document.getElementById('search-clear').classList.add('hidden');

  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.cat === 'all');
  });

  renderFeed();
}

// ═══════════════════════════════════════════════════════════════
// 10. HELPER / CATEGORIES MODAL FILTER
// ═══════════════════════════════════════════════════════════════
function applyHelperFilter(filterKey) {
  const filter = HELPER_FILTER_MAP[filterKey];
  if (!filter) return;

  activeCategory = 'all';
  searchQuery    = '';
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));

  const input = document.getElementById('search-input');
  if (input) input.value = '';
  document.getElementById('search-clear').classList.add('hidden');

  document.querySelectorAll('.helper-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[onclick="applyHelperFilter('${filterKey}')"]`);
  if (btn) btn.classList.add('active');

  const pool      = PRODUCTS.filter(filter.test);
  const feed      = document.getElementById('catalog-feed');
  const noResults = document.getElementById('no-results');
  const catHeader = document.getElementById('category-header');
  const feedLabel = document.getElementById('feed-label');
  const feedCount = document.getElementById('feed-count');

  feed.classList.remove('catalog-shelves');
  feed.classList.add('catalog-grid');
  catHeader.classList.remove('hidden');
  document.getElementById('category-header-icon').textContent  = '🎯';
  document.getElementById('category-header-title').textContent = filter.label;
  document.getElementById('category-header-sub').textContent   =
    `${pool.length} matching product${pool.length !== 1 ? 's' : ''}`;
  feedLabel.textContent = `🎯 ${filter.label}`;
  feedCount.textContent = `${pool.length} items`;

  if (pool.length === 0) {
    feed.innerHTML = '';
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
    feed.classList.add('feed-transitioning');
    setTimeout(() => {
      feed.innerHTML = pool.map(buildCard).join('');
      feed.classList.remove('feed-transitioning');
    }, 140);
  }

  closeHelper();
  setTimeout(() =>
    document.getElementById('discovery').scrollIntoView({ behavior: 'smooth', block: 'start' }),
    200
  );
}

// Category shortcut from categories tab
function jumpToCategory(cat) {
  closeCategoriesModal();
  selectCategory(cat);
  setActiveTab('discover');
}

// ═══════════════════════════════════════════════════════════════
// 11. CART UI
// ═══════════════════════════════════════════════════════════════
function updateCartUI() {
  const count = getCartCount();

  // Header badge
  const badge = document.getElementById('cart-count-badge');
  if (badge) { badge.textContent = count; badge.classList.toggle('hidden', count === 0); }

  // Bottom nav badge
  const navBadge = document.getElementById('nav-cart-badge');
  if (navBadge) { navBadge.textContent = count; navBadge.classList.toggle('hidden', count === 0); }

  // Cart total label
  const totalLabel = document.getElementById('cart-total-label');
  if (totalLabel) totalLabel.textContent = formatKES(getCartTotal());
}

function renderCartModal() {
  const list       = document.getElementById('cart-items-list');
  const empty      = document.getElementById('cart-empty');
  const footer     = document.getElementById('cart-footer');
  const grandTotal = document.getElementById('cart-grand-total');
  const items      = Object.values(cart);

  list.innerHTML = '';

  if (items.length === 0) {
    empty.classList.remove('hidden');
    footer.classList.add('hidden');
    return;
  }

  empty.classList.add('hidden');
  footer.classList.remove('hidden');

  items.forEach(({ product, qty }) => {
    list.insertAdjacentHTML('beforeend', `
      <div class="cart-item-row">
        <span class="cart-item-icon">${product.icon}</span>
        <div class="cart-item-info">
          <p class="cart-item-name">${product.name}</p>
          <p class="cart-item-qty">Qty: ${qty} · ${product.badge}</p>
        </div>
        <span class="cart-item-price">${formatKES(product.price * qty)}</span>
        <button class="cart-remove-btn" onclick="removeFromCart('${product.id}')" aria-label="Remove">×</button>
      </div>`);
  });

  grandTotal.textContent = formatKES(getCartTotal());
}

// ═══════════════════════════════════════════════════════════════
// 12. BOTTOM NAV TAB SWITCHING
// ═══════════════════════════════════════════════════════════════
function setActiveTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.nav-tab').forEach(el => {
    el.classList.toggle('nav-tab--active', el.dataset.tab === tab);
  });
}

function handleNavTab(tab) {
  setActiveTab(tab);
  switch (tab) {
    case 'discover':
      closeAllModals();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'categories':
      closeAllModals();
      openCategoriesModal();
      break;
    case 'bag':
      closeAllModals();
      openCart();
      break;
    case 'support':
      closeAllModals();
      openHelper();
      break;
  }
}

// ═══════════════════════════════════════════════════════════════
// 13. MODAL CONTROLS
// ═══════════════════════════════════════════════════════════════
function closeAllModals() {
  document.getElementById('helper-modal').classList.add('hidden');
  document.getElementById('cart-modal').classList.add('hidden');
  document.getElementById('categories-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

function openHelper() {
  closeAllModals();
  document.getElementById('helper-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeHelper() {
  document.getElementById('helper-modal').classList.add('hidden');
  document.body.style.overflow = '';
  setActiveTab('discover');
}

function openCart() {
  renderCartModal();
  closeAllModals();
  document.getElementById('cart-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-modal').classList.add('hidden');
  document.body.style.overflow = '';
  setActiveTab('discover');
}

function openCategoriesModal() {
  closeAllModals();
  document.getElementById('categories-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCategoriesModal() {
  document.getElementById('categories-modal').classList.add('hidden');
  document.body.style.overflow = '';
  setActiveTab('discover');
}

function handleOverlayClick(event, modalId) {
  if (event.target === event.currentTarget) {
    if (modalId === 'cart-modal')       closeCart();
    else if (modalId === 'helper-modal') closeHelper();
    else if (modalId === 'categories-modal') closeCategoriesModal();
  }
}

// ═══════════════════════════════════════════════════════════════
// 14. WHATSAPP CHECKOUT
// ═══════════════════════════════════════════════════════════════
function checkoutWhatsApp() {
  const items = Object.values(cart);
  if (items.length === 0) return;

  const lines = items.map(({ product, qty }) =>
    `  • ${product.name} (${product.badge})\n    Qty: ${qty} × ${formatKES(product.price)} = ${formatKES(product.price * qty)}`
  );

  const now = new Date().toLocaleString('en-KE', { dateStyle: 'medium', timeStyle: 'short' });

  const message = [
    `🛍️ *NEW ORDER — Johpe Electronics*`,
    `📅 ${now}`,
    ``,
    `*Order Summary:*`,
    ...lines,
    ``,
    `━━━━━━━━━━━━━━━━━━━`,
    `💰 *TOTAL: ${formatKES(getCartTotal())}*`,
    `━━━━━━━━━━━━━━━━━━━`,
    ``,
    `📦 Please confirm availability & delivery details.`,
    `💳 Ready to pay via M-Pesa.`,
    ``,
    `_Order placed via Johpe Electronics online store_`,
  ].join('\n');

  window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`, '_blank');
}

// ═══════════════════════════════════════════════════════════════
// 15. SUPPORT HUB ROUTER
// ═══════════════════════════════════════════════════════════════
function openSupportChat(intent) {
  const message = SUPPORT_MESSAGES[intent] || 'Hi Johpe Electronics 👋, I have a general inquiry.';
  window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`, '_blank');
}

// ═══════════════════════════════════════════════════════════════
// 16. TOAST
// ═══════════════════════════════════════════════════════════════
let toastTimer = null;

function showToast(msg = 'Added to bag') {
  const toast = document.getElementById('toast');
  toast.textContent = '';
  toast.dataset.msg = msg;
  // Re-trigger animation by removing and re-adding class
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

// ═══════════════════════════════════════════════════════════════
// 17. HEADER SCROLL SHRINK
// ═══════════════════════════════════════════════════════════════
let lastScroll = 0;
function handleScroll() {
  const header = document.getElementById('app-header');
  const y = window.scrollY;
  header.classList.toggle('header--scrolled', y > 20);
  lastScroll = y;
}

// ═══════════════════════════════════════════════════════════════
// 18. INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderFeed();
  updateCartUI();

  // Close buttons
  const closeCartBtn = document.getElementById('close-cart-btn');
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

  const closeHelperBtn = document.getElementById('close-helper-btn');
  if (closeHelperBtn) closeHelperBtn.addEventListener('click', closeHelper);

  const closeCatBtn = document.getElementById('close-categories-btn');
  if (closeCatBtn) closeCatBtn.addEventListener('click', closeCategoriesModal);

  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllModals();
  });

  // Scroll handler
  window.addEventListener('scroll', handleScroll, { passive: true });
});
