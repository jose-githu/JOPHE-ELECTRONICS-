/* ─── Johpe Electronics — script.js v5.0 ─── */
/* SPA View-Pane Router · Kimana, Kajiado     */
'use strict';

// ═══════════════════════════════════════════════════════════════
// 1. PRODUCT DATABASE — FULL CATALOG
// ═══════════════════════════════════════════════════════════════
const PRODUCTS = [

  // ── HOT PROMOS ──
  {
    id: 'promo-01',
    name: 'Samsung Galaxy A54',
    category: 'promo', type: 'phone', icon: '📱', image: '',
    specs: '6.4" AMOLED · 128GB · 5000mAh · 5G Ready',
    price: 34500, oldPrice: 42000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['smartphones', 'budget-mid'],
  },
  {
    id: 'promo-02',
    name: 'Dell Latitude 5490',
    category: 'promo', type: 'laptop', icon: '💻', image: '',
    specs: 'Core i5 8th Gen · 8GB RAM · 256GB SSD · 14"',
    price: 28000, oldPrice: 36000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '6-Month Store Warranty',
    tags: ['laptops', 'budget-mid', 'work', 'student'],
  },
  {
    id: 'promo-03',
    name: 'Redmi Note 13 Pro',
    category: 'promo', type: 'phone', icon: '📱', image: '',
    specs: '6.67" AMOLED · 256GB · 200MP · 67W Fast Charge',
    price: 22000, oldPrice: 27500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['smartphones', 'budget-low', 'budget-mid'],
  },
  {
    id: 'promo-04',
    name: 'JBL Charge 5',
    category: 'promo', type: 'speaker', icon: '🔊', image: '',
    specs: '30W · IP67 Waterproof · 20hr Battery · PartyBoost',
    price: 12500, oldPrice: 16000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['audio', 'budget-low'],
  },
  {
    id: 'promo-05',
    name: 'Anker 20000mAh PowerCore',
    category: 'promo', type: 'powerbank', icon: '🔋', image: '',
    specs: '65W PD · Dual USB-A · Fast Charge · LCD Display',
    price: 4800, oldPrice: 6500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '18-Month Hardware Warranty',
    tags: ['power', 'budget-low'],
  },

  // ── SMARTPHONES & TABLETS ──
  {
    id: 'phone-01',
    name: 'iPhone 15 Pro Max',
    category: 'smartphones', type: 'phone', icon: '📱', image: '',
    specs: '6.7" Super Retina · 256GB · A17 Pro · Titanium Frame',
    price: 145000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['smartphones', 'budget-premium'],
  },
  {
    id: 'phone-02',
    name: 'iPhone 13 Pro',
    category: 'smartphones', type: 'phone', icon: '📱', image: '',
    specs: '6.1" ProMotion · 128GB · Triple Camera · 5G',
    price: 75000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '6-Month Store Warranty',
    tags: ['smartphones', 'budget-high'],
  },
  {
    id: 'phone-03',
    name: 'Samsung S23 Ultra',
    category: 'smartphones', type: 'phone', icon: '📱', image: '',
    specs: '6.8" Dynamic AMOLED · 256GB · S-Pen · 200MP',
    price: 98000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['smartphones', 'budget-high', 'budget-premium'],
  },
  {
    id: 'phone-04',
    name: 'Samsung Galaxy A35',
    category: 'smartphones', type: 'phone', icon: '📱', image: '',
    specs: '6.6" Super AMOLED · 128GB · 50MP · 5000mAh',
    price: 27500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['smartphones', 'budget-mid'],
  },
  {
    id: 'phone-05',
    name: 'iPhone 12 (Ex-UK)',
    category: 'smartphones', type: 'phone', icon: '📱', image: '',
    specs: '6.1" OLED · 64GB · Ceramic Shield · 5G',
    price: 42000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '4-Month Store Warranty',
    tags: ['smartphones', 'budget-mid'],
  },
  {
    id: 'phone-06',
    name: 'Samsung Galaxy Tab A9+',
    category: 'smartphones', type: 'tablet', icon: '📟', image: '',
    specs: '11" LCD · 128GB · Snapdragon 695 · Wi-Fi + 5G',
    price: 38000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['smartphones', 'budget-mid'],
  },
  {
    id: 'phone-07',
    name: 'iPad 10th Generation',
    category: 'smartphones', type: 'tablet', icon: '📟', image: '',
    specs: '10.9" Liquid Retina · 64GB · A14 Bionic · Wi-Fi',
    price: 62000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['smartphones', 'budget-high'],
  },
  {
    id: 'phone-08',
    name: 'iPhone 11 (Ex-UK)',
    category: 'smartphones', type: 'phone', icon: '📱', image: '',
    specs: '6.1" Liquid Retina · 64GB · Dual Camera · Face ID',
    price: 28000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '3-Month Store Warranty',
    tags: ['smartphones', 'budget-mid'],
  },

  // ── LAPTOPS & COMPUTING ──
  {
    id: 'laptop-01',
    name: 'HP EliteBook 840 G6',
    category: 'laptops', type: 'laptop', icon: '💻', image: '',
    specs: 'Core i7 8th Gen · 16GB RAM · 512GB SSD · FHD',
    price: 45000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '6-Month Store Warranty',
    tags: ['laptops', 'budget-mid', 'work'],
  },
  {
    id: 'laptop-02',
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'laptops', type: 'laptop', icon: '💻', image: '',
    specs: 'Core i7 10th Gen · 16GB · 512GB SSD · 14" FHD',
    price: 68000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '6-Month Store Warranty',
    tags: ['laptops', 'budget-high', 'work'],
  },
  {
    id: 'laptop-03',
    name: 'MacBook Air M2',
    category: 'laptops', type: 'laptop', icon: '💻', image: '',
    specs: 'M2 Chip · 8GB · 256GB SSD · 13.6" Liquid Retina',
    price: 115000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['laptops', 'budget-premium', 'work', 'student'],
  },
  {
    id: 'laptop-04',
    name: 'Dell XPS 13 (Ex-UK)',
    category: 'laptops', type: 'laptop', icon: '💻', image: '',
    specs: 'Core i5 11th Gen · 8GB · 256GB SSD · 13.4" FHD+',
    price: 52000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '6-Month Store Warranty',
    tags: ['laptops', 'budget-high', 'work', 'student'],
  },
  {
    id: 'laptop-05',
    name: 'HP 250 G8 (Brand New)',
    category: 'laptops', type: 'laptop', icon: '💻', image: '',
    specs: 'Core i3 11th Gen · 8GB · 256GB SSD · 15.6" HD',
    price: 35000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['laptops', 'budget-mid', 'student'],
  },
  {
    id: 'laptop-06',
    name: 'Lenovo ThinkPad T470',
    category: 'laptops', type: 'laptop', icon: '💻', image: '',
    specs: 'Core i5 7th Gen · 8GB · 256GB SSD · 14" HD',
    price: 26000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '6-Month Store Warranty',
    tags: ['laptops', 'budget-mid', 'work'],
  },
  {
    id: 'laptop-07',
    name: 'Samsung T7 1TB SSD',
    category: 'laptops', type: 'storage', icon: '💾', image: '',
    specs: 'USB 3.2 · 1050MB/s Read · Shock-Resistant · Portable',
    price: 12000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '36-Month Hardware Warranty',
    tags: ['laptops', 'budget-low'],
  },
  {
    id: 'laptop-08',
    name: 'WD Elements 2TB HDD',
    category: 'laptops', type: 'storage', icon: '💾', image: '',
    specs: 'USB 3.0 · 2TB · Plug & Play · All OS Compatible',
    price: 5800,
    badge: 'Brand New', badgeType: 'new',
    warranty: '24-Month Hardware Warranty',
    tags: ['laptops', 'budget-low'],
  },

  // ── SMART AUDIO & SOUND ──
  {
    id: 'audio-01',
    name: 'Sony WH-1000XM5',
    category: 'audio', type: 'headphones', icon: '🎧', image: '',
    specs: 'Active Noise Cancellation · 30hr Battery · Hi-Res · BT 5.2',
    price: 28000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['audio', 'budget-mid'],
  },
  {
    id: 'audio-02',
    name: 'JBL Charge 5',
    category: 'audio', type: 'speaker', icon: '🔊', image: '',
    specs: '30W · IP67 Waterproof · 20hr Battery · PartyBoost',
    price: 12500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['audio', 'budget-low'],
  },
  {
    id: 'audio-03',
    name: 'Samsung Galaxy Buds2 Pro',
    category: 'audio', type: 'earphones', icon: '🎵', image: '',
    specs: 'Active ANC · 360 Audio · IPX7 · 29hr Total Battery',
    price: 15000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['audio', 'budget-low', 'budget-mid'],
  },
  {
    id: 'audio-04',
    name: 'Sonos Era 100',
    category: 'audio', type: 'speaker', icon: '🔊', image: '',
    specs: 'Wi-Fi + Bluetooth · Stereo Sound · Alexa · Trueplay Tuning',
    price: 24000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['audio', 'budget-mid'],
  },
  {
    id: 'audio-05',
    name: 'Yamaha YST-SW012 Subwoofer',
    category: 'audio', type: 'subwoofer', icon: '🔉', image: '',
    specs: '100W · Advanced YST · 20Hz–200Hz · Front-Firing Port',
    price: 14500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['audio', 'budget-low', 'budget-mid'],
  },
  {
    id: 'audio-06',
    name: 'Apple AirPods Pro (2nd Gen)',
    category: 'audio', type: 'earphones', icon: '🎵', image: '',
    specs: 'ANC + Transparency Mode · H2 Chip · MagSafe · 30hr Case',
    price: 22000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['audio', 'budget-mid'],
  },
  {
    id: 'audio-07',
    name: 'JBL Partybox 110',
    category: 'audio', type: 'speaker', icon: '🔊', image: '',
    specs: '160W · IPX4 · Light Show · PartyBoost · Guitar/Mic Input',
    price: 32000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['audio', 'budget-mid'],
  },

  // ── POWER & SOLAR SOLUTIONS ──
  {
    id: 'power-01',
    name: 'Anker 20000mAh PowerCore',
    category: 'power', type: 'powerbank', icon: '🔋', image: '',
    specs: '65W PD · Dual USB-A · Fast Charge · LCD Display',
    price: 4800,
    badge: 'Brand New', badgeType: 'new',
    warranty: '18-Month Hardware Warranty',
    tags: ['power', 'budget-low'],
  },
  {
    id: 'power-02',
    name: 'Baseus 30000mAh Powerbank',
    category: 'power', type: 'powerbank', icon: '🔋', image: '',
    specs: '65W PD · 4 Ports · Digital Display · Quick Charge 4.0',
    price: 6500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['power', 'budget-low'],
  },
  {
    id: 'power-03',
    name: 'Jackery Explorer 240',
    category: 'power', type: 'solar', icon: '☀️', image: '',
    specs: '240Wh · 200W Output · MPPT Solar Ready · AC/DC/USB',
    price: 28000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '24-Month Hardware Warranty',
    tags: ['power', 'budget-mid'],
  },
  {
    id: 'power-04',
    name: 'EcoFlow River 2 Pro',
    category: 'power', type: 'solar', icon: '☀️', image: '',
    specs: '768Wh · 800W AC · X-Stream Charge · Solar Compatible',
    price: 52000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '24-Month Hardware Warranty',
    tags: ['power', 'budget-high'],
  },
  {
    id: 'power-05',
    name: '100W Solar Panel Kit',
    category: 'power', type: 'solar', icon: '☀️', image: '',
    specs: 'Monocrystalline · Foldable · MC4 Connector · IP65 Rated',
    price: 9500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['power', 'budget-low'],
  },
  {
    id: 'power-06',
    name: 'Anker 737 GaNPrime 120W',
    category: 'power', type: 'charger', icon: '⚡', image: '',
    specs: '120W · 3 Ports · GaN Technology · Smart Charge · Compact',
    price: 5500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '18-Month Hardware Warranty',
    tags: ['power', 'budget-low'],
  },

  // ── DAILY TECH ACCESSORIES ──
  {
    id: 'acc-01',
    name: 'Original Apple 20W Charger',
    category: 'accessories', type: 'charger', icon: '⚡', image: '',
    specs: 'USB-C · PD Fast Charge · iPhone 15/14/13 Compatible',
    price: 2500,
    badge: 'Brand New', badgeType: 'new',
    warranty: 'Genuine Apple Hardware',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-02',
    name: 'Samsung 65W PD Charger',
    category: 'accessories', type: 'charger', icon: '⚡', image: '',
    specs: 'USB-C · Super Fast Charge 2.0 · S23/S24 Compatible',
    price: 3200,
    badge: 'Brand New', badgeType: 'new',
    warranty: 'Genuine Samsung Hardware',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-03',
    name: 'Anker Kevlar USB-C Cable 2m',
    category: 'accessories', type: 'cable', icon: '🔌', image: '',
    specs: '240W · Braided Kevlar · USB 3.2 Gen 2 · 10Gbps Data',
    price: 1800,
    badge: 'Brand New', badgeType: 'new',
    warranty: 'Lifetime Replacement Warranty',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-04',
    name: 'Apple MFi Lightning Cable 2m',
    category: 'accessories', type: 'cable', icon: '🔌', image: '',
    specs: 'MFi Certified · Braided Nylon · iPhone 12/11/X Compatible',
    price: 1500,
    badge: 'Brand New', badgeType: 'new',
    warranty: 'MFi Certified Hardware',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-05',
    name: 'SanDisk 256GB microSD A2',
    category: 'accessories', type: 'memory', icon: '💳', image: '',
    specs: 'UHS-I · 190MB/s Read · A2 App Performance · 4K Video',
    price: 3500,
    badge: 'Brand New', badgeType: 'new',
    warranty: 'Lifetime Replacement Warranty',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-06',
    name: 'Samsung Pro Plus 128GB SD',
    category: 'accessories', type: 'memory', icon: '💳', image: '',
    specs: 'UHS-I · 180MB/s · U3 V30 · 4K UHD Ready',
    price: 2200,
    badge: 'Brand New', badgeType: 'new',
    warranty: '10-Year Limited Warranty',
    tags: ['accessories', 'budget-low'],
  },
  {
    id: 'acc-07',
    name: 'Logitech MX Master 3S',
    category: 'accessories', type: 'peripheral', icon: '🖱️', image: '',
    specs: '8000 DPI · Bluetooth + USB · 70-Day Battery · Silent Clicks',
    price: 9500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '12-Month Hardware Warranty',
    tags: ['accessories', 'laptops', 'budget-low'],
  },
  {
    id: 'acc-08',
    name: 'UGREEN 7-in-1 USB-C Hub',
    category: 'accessories', type: 'peripheral', icon: '🔌', image: '',
    specs: 'HDMI 4K · 3×USB 3.0 · SD/TF · 100W PD · Aluminium Body',
    price: 3800,
    badge: 'Brand New', badgeType: 'new',
    warranty: '18-Month Hardware Warranty',
    tags: ['accessories', 'laptops', 'budget-low'],
  },
];

// ═══════════════════════════════════════════════════════════════
// 2. ENGINE STATE
// ═══════════════════════════════════════════════════════════════
let activeCategory = 'all';
let searchQuery    = '';
let currentPane    = 'pane-home';

const WHATSAPP_NUMBER = '254799776990';
const WHATSAPP_BASE   = `https://wa.me/${WHATSAPP_NUMBER}`;

const CATEGORY_META = {
  all:         { icon: '✦',  title: 'All Devices',             sub: 'Complete showroom — all categories' },
  promo:       { icon: '🔥', title: "Today's Showroom Deals",  sub: 'Flash offers — limited stock, save big' },
  smartphones: { icon: '📱', title: 'Phones & Tablets',        sub: 'iPhones, Samsung, Redmi, iPads — every unit 12-point tested' },
  laptops:     { icon: '💻', title: 'Laptops & Computing',     sub: 'Business & student machines — tested & store-warranted' },
  audio:       { icon: '🎵', title: 'Smart Audio & Sound',     sub: 'Speakers, earphones, subwoofers — premium sound' },
  power:       { icon: '⚡', title: 'Power & Solar',           sub: 'Fast chargers, power banks & solar solutions' },
  accessories: { icon: '🔌', title: 'Daily Tech Accessories',  sub: 'Cables, memory, chargers & peripherals' },
};

// ═══════════════════════════════════════════════════════════════
// 3. VIEW-PANE ROUTER
// ═══════════════════════════════════════════════════════════════
function switchView(targetPaneId) {
  // Guard: don't re-render same pane
  if (currentPane === targetPaneId) return;

  // Deactivate all panes
  document.querySelectorAll('.view-pane').forEach(pane => {
    pane.classList.remove('pane-active');
  });

  // Activate target pane
  const target = document.getElementById(targetPaneId);
  if (!target) return;
  target.classList.add('pane-active');
  currentPane = targetPaneId;

  // Update bottom nav active state
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.toggle('nav-tab--active', tab.dataset.pane === targetPaneId);
  });

  // Scroll to top of viewport
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // If switching to cart pane, refresh cart render
  if (targetPaneId === 'pane-cart') {
    renderCartPane();
  }
}

// ═══════════════════════════════════════════════════════════════
// 4. CART STATE
// ═══════════════════════════════════════════════════════════════
const cart = {};

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (cart[productId]) {
    cart[productId].qty++;
  } else {
    cart[productId] = { product, qty: 1 };
  }
  updateCartBadges();
  updateAddButtons();
  showToast(`${product.name} secured in bag`);
}

function removeFromCart(productId) {
  delete cart[productId];
  updateCartBadges();
  updateAddButtons();
  renderCartPane();
}

function adjustQty(productId, delta) {
  if (!cart[productId]) return;
  cart[productId].qty += delta;
  if (cart[productId].qty <= 0) {
    delete cart[productId];
  }
  updateCartBadges();
  updateAddButtons();
  renderCartPane();
}

const getCartTotal = () =>
  Object.values(cart).reduce((s, { product, qty }) => s + product.price * qty, 0);

const getCartCount = () =>
  Object.values(cart).reduce((s, { qty }) => s + qty, 0);

const formatKES = n => 'KES ' + n.toLocaleString('en-KE');

// ═══════════════════════════════════════════════════════════════
// 5. CART BADGES
// ═══════════════════════════════════════════════════════════════
function updateCartBadges() {
  const count = getCartCount();

  // Header badge
  const headerBadge = document.getElementById('header-cart-badge');
  if (headerBadge) {
    headerBadge.textContent = count;
    headerBadge.classList.toggle('hidden', count === 0);
  }

  // Bottom nav badge
  const navBadge = document.getElementById('nav-cart-badge');
  if (navBadge) {
    navBadge.textContent = count;
    navBadge.classList.toggle('hidden', count === 0);
  }
}

function updateAddButtons() {
  document.querySelectorAll('[data-btn-id]').forEach(btn => {
    const inCart = !!cart[btn.dataset.btnId];
    btn.textContent = inCart ? '✓ In Bag' : 'Add to Bag';
    btn.classList.toggle('in-cart', inCart);
    btn.setAttribute('aria-label', inCart ? 'Already in bag' : 'Add to bag');
  });
}

// ═══════════════════════════════════════════════════════════════
// 6. CART PANE RENDERER
// ═══════════════════════════════════════════════════════════════
function renderCartPane() {
  const itemsContainer = document.getElementById('cart-pane-items');
  const emptyState     = document.getElementById('cart-pane-empty');
  const footer         = document.getElementById('cart-pane-footer');
  const countEl        = document.getElementById('cart-pane-item-count');
  const subtotalEl     = document.getElementById('cart-subtotal-val');
  const grandTotalEl   = document.getElementById('cart-grand-total-val');
  const deliveryLabel  = document.getElementById('delivery-label-row');

  const items = Object.values(cart);
  const count = getCartCount();
  const total = getCartTotal();

  if (countEl) {
    countEl.textContent = count > 0 ? `${count} item${count !== 1 ? 's' : ''}` : '';
  }

  if (items.length === 0) {
    itemsContainer.innerHTML = '';
    emptyState.classList.remove('hidden');
    footer.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  footer.classList.remove('hidden');

  // Build item rows
  itemsContainer.innerHTML = items.map(({ product, qty }) => `
    <div class="cart-item-row" data-id="${product.id}">
      <div class="cart-item-icon-wrap">
        <span class="cart-item-icon" aria-hidden="true">${product.icon}</span>
      </div>
      <div class="cart-item-body">
        <p class="cart-item-name">${product.name}</p>
        <p class="cart-item-specs">${product.specs}</p>
        <p class="cart-item-badge-row">
          <span class="cart-item-badge cart-item-badge--${product.badgeType}">${product.badge}</span>
          <span class="cart-item-warranty">✓ ${product.warranty}</span>
        </p>
      </div>
      <div class="cart-item-right">
        <p class="cart-item-price">${formatKES(product.price * qty)}</p>
        <p class="cart-item-unit-price">${formatKES(product.price)} / unit</p>
        <div class="qty-adjuster" role="group" aria-label="Quantity for ${product.name}">
          <button class="qty-btn qty-btn--minus" onclick="adjustQty('${product.id}', -1)" aria-label="Reduce quantity">−</button>
          <span class="qty-value" aria-live="polite">${qty}</span>
          <button class="qty-btn qty-btn--plus" onclick="adjustQty('${product.id}', 1)" aria-label="Increase quantity">+</button>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart('${product.id}')" aria-label="Remove ${product.name}">Remove</button>
      </div>
    </div>
  `).join('');

  // Update subtotals
  if (subtotalEl)   subtotalEl.textContent   = formatKES(total);
  if (grandTotalEl) grandTotalEl.textContent = formatKES(total);

  // Update delivery row label based on selector
  const deliverySelect = document.getElementById('delivery-route');
  if (deliveryLabel && deliverySelect) {
    deliveryLabel.textContent = deliverySelect.value === 'naekana'
      ? 'Naekana Sacco Delivery'
      : 'Kimana Pickup';
  }
}

// ═══════════════════════════════════════════════════════════════
// 7. WHATSAPP CHECKOUT ENGINE — ORDER COMPILER
// ═══════════════════════════════════════════════════════════════
function sendWhatsAppCheckout() {
  const items = Object.values(cart);
  if (items.length === 0) {
    showToast('Your bag is empty — add items first');
    return;
  }

  const deliverySelect = document.getElementById('delivery-route');
  const deliveryOption = deliverySelect ? deliverySelect.value : 'pickup';
  const deliveryText   = deliveryOption === 'naekana'
    ? '📦 Naekana Sacco Parcel Delivery (Kenya-Wide)'
    : '🏪 Local Showroom Pickup — Kimana Town (FREE)';

  const now = new Date().toLocaleString('en-KE', { dateStyle: 'long', timeStyle: 'short' });
  const total = getCartTotal();
  const count = getCartCount();

  // Build individual order line strings
  const orderLines = items.map(({ product, qty }, i) => {
    const lineTotal = product.price * qty;
    return [
      `${i + 1}. *${product.name}*`,
      `   ${product.badge} · ${product.specs}`,
      `   Qty: ${qty} × ${formatKES(product.price)} = *${formatKES(lineTotal)}*`,
      `   Coverage: ${product.warranty}`,
    ].join('\n');
  });

  // Compose full manifest
  const manifest = [
    `🛍️ *NEW ORDER — JOHPE ELECTRONICS*`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `📅 Date: ${now}`,
    `📍 Store: Johpe Electronics, Kimana Town, Kajiado County`,
    `📞 Contact: +254 799 776 990`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `🧾 *ORDER MANIFEST (${count} item${count !== 1 ? 's' : ''})*`,
    ``,
    ...orderLines.map(line => line + '\n'),
    `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `💰 *ORDER TOTAL: ${formatKES(total)}*`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `🚚 *Delivery Route:*`,
    deliveryText,
    ``,
    `📌 *Next Steps:*`,
    `1. Please confirm stock availability for all items listed above.`,
    `2. Share your M-Pesa Till Number for payment verification.`,
    `3. ${deliveryOption === 'naekana' ? 'Provide parcel pickup details and delivery address.' : 'Confirm walk-in date and time for Kimana showroom pickup.'}`,
    ``,
    `_Order placed via Johpe Electronics online showroom._`,
    `_Powered by Flynn Technologies._`,
  ].join('\n');

  // Encode and redirect — direct WhatsApp endpoint, no tel: dialer
  const encodedText = encodeURIComponent(manifest);
  window.open(`${WHATSAPP_BASE}?text=${encodedText}`, '_blank', 'noopener,noreferrer');
}

// ═══════════════════════════════════════════════════════════════
// 8. DELIVERY SELECTOR CHANGE HANDLER
// ═══════════════════════════════════════════════════════════════
function handleDeliveryChange() {
  renderCartPane();
}

// ═══════════════════════════════════════════════════════════════
// 9. CARD BUILDER
// ═══════════════════════════════════════════════════════════════
function buildCardImageArea(product) {
  const hasImage = product.image && product.image.trim() !== '';
  if (hasImage) {
    return `<img
      class="card-product-img"
      src="${product.image}"
      alt="${product.name}"
      loading="lazy"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
    /><span class="device-icon" style="display:none">${product.icon}</span>`;
  }
  return `<span class="device-icon">${product.icon}</span>`;
}

function buildCard(product) {
  const inCart = !!cart[product.id];

  const savingsStrip = (product.category === 'promo' && product.oldPrice)
    ? `<div class="promo-strip">🔥 Save ${formatKES(product.oldPrice - product.price)}</div>` : '';

  const oldPriceHtml = product.oldPrice
    ? `<span class="card-old-price">${formatKES(product.oldPrice)}</span>` : '';

  return `
    <div class="product-card" data-id="${product.id}" role="listitem">
      <div class="card-img">
        ${buildCardImageArea(product)}
        <span class="badge badge-${product.badgeType}">${product.badge}</span>
        ${savingsStrip}
      </div>
      <div class="card-body">
        <p class="card-title">${product.name}</p>
        <p class="card-verified-label">Verified Configuration</p>
        <p class="card-specs">${product.specs}</p>
        <div class="card-price-block">
          <p class="card-price">${formatKES(product.price)} ${oldPriceHtml}</p>
        </div>
        <p class="card-warranty">✓ ${product.warranty}</p>
        <button
          class="add-btn ${inCart ? 'in-cart' : ''}"
          onclick="addToCart('${product.id}')"
          data-btn-id="${product.id}"
          aria-label="${inCart ? 'Already in bag' : 'Add to bag'}"
        >${inCart ? '✓ In Bag' : 'Add to Bag'}</button>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// 10. SHELF / TRACK BUILDER
// ═══════════════════════════════════════════════════════════════
function buildTrack(icon, title, subtitle, products, categoryKey) {
  if (!products.length) return '';
  const cards = products.map(buildCard).join('');
  return `
    <div class="shelf-block">
      <div class="shelf-header">
        <div class="shelf-title-group">
          <h2 class="shelf-title">${icon} ${title}</h2>
          <span class="shelf-subtitle">${subtitle}</span>
        </div>
        <button class="shelf-see-all" onclick="selectCategory('${categoryKey}')" aria-label="See all ${title}">
          See All <span aria-hidden="true">→</span>
        </button>
      </div>
      <div class="horizontal-scroll-track">${cards}</div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// 11. FEED RENDERER
// ═══════════════════════════════════════════════════════════════
function renderFeed() {
  const feed      = document.getElementById('catalog-feed');
  const noResults = document.getElementById('no-results');
  const catHeader = document.getElementById('category-header');
  const feedLabel = document.getElementById('feed-label');
  const feedCount = document.getElementById('feed-count');
  const isFiltered = activeCategory !== 'all' || searchQuery.trim() !== '';

  if (!isFiltered) {
    // Discovery Mode: Netflix tracks
    catHeader.classList.add('hidden');
    feedLabel.textContent = '✦ Discovery Showroom';
    noResults.classList.add('hidden');

    const promos  = PRODUCTS.filter(p => p.category === 'promo');
    const phones  = PRODUCTS.filter(p => p.category === 'smartphones');
    const laptops = PRODUCTS.filter(p => p.category === 'laptops');
    const audio   = PRODUCTS.filter(p => p.category === 'audio');
    const power   = PRODUCTS.filter(p => p.category === 'power');
    const accs    = PRODUCTS.filter(p => p.category === 'accessories');
    const total   = promos.length + phones.length + laptops.length + audio.length + power.length + accs.length;

    feedCount.textContent = `${total} devices`;

    feed.className = 'catalog-tracks';
    feed.classList.add('feed-transitioning');

    requestAnimationFrame(() => {
      setTimeout(() => {
        feed.innerHTML =
          buildTrack('🔥', 'Hot Deals',          'Flash offers — limited stock',              promos,  'promo')       +
          buildTrack('📱', 'Phones & Tablets',   '12-point tested, store-warranted',          phones,  'smartphones') +
          buildTrack('💻', 'Laptops & Computing','Business machines — tested & verified',     laptops, 'laptops')     +
          buildTrack('🎵', 'Smart Audio',        'Premium speakers, earphones & subwoofers', audio,   'audio')       +
          buildTrack('⚡', 'Power & Solar',      'Fast chargers, power banks & solar kits',  power,   'power')       +
          buildTrack('🔌', 'Accessories',        'Cables, memory, chargers & peripherals',   accs,    'accessories');
        feed.classList.remove('feed-transitioning');
      }, 140);
    });

  } else {
    // Filtered Mode: Grid
    const pool = PRODUCTS.filter(
      p => matchesCategory(p, activeCategory) && matchesQuery(p, searchQuery)
    );

    catHeader.classList.remove('hidden');
    const meta = CATEGORY_META[activeCategory] || {};
    document.getElementById('category-header-icon').textContent  = meta.icon || '🔍';
    document.getElementById('category-header-title').textContent = searchQuery
      ? `Results for "${searchQuery}"` : (meta.title || activeCategory);
    document.getElementById('category-header-sub').textContent = searchQuery
      ? `${pool.length} device${pool.length !== 1 ? 's' : ''} found`
      : (meta.sub || '');

    feedLabel.textContent = searchQuery
      ? '🔍 Search Results' : `${meta.icon || ''} ${meta.title || ''}`;
    feedCount.textContent = pool.length > 0 ? `${pool.length} devices` : '';

    feed.className = 'catalog-grid';

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
// 12. FILTER HELPERS
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
    product.category.toLowerCase().includes(q) ||
    product.warranty.toLowerCase().includes(q)
  );
}

// ═══════════════════════════════════════════════════════════════
// 13. CATEGORY & SEARCH
// ═══════════════════════════════════════════════════════════════
function selectCategory(cat) {
  activeCategory = cat;
  searchQuery    = '';

  const input = document.getElementById('search-input');
  if (input) input.value = '';
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.classList.add('hidden');

  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.cat === cat);
  });

  renderFeed();
}

let searchDebounce = null;

function handleSearchInput(value) {
  searchQuery = value;
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.classList.toggle('hidden', value === '');

  if (value.trim() !== '') {
    activeCategory = 'all';
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
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
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.classList.add('hidden');

  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.cat === 'all');
  });

  renderFeed();
}

// ═══════════════════════════════════════════════════════════════
// 14. TOAST
// ═══════════════════════════════════════════════════════════════
let toastTimer = null;

function showToast(msg = 'Done') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = '';
  toast.classList.remove('show');
  void toast.offsetWidth; // reflow
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

// ═══════════════════════════════════════════════════════════════
// 15. HEADER SCROLL SHRINK
// ═══════════════════════════════════════════════════════════════
function handleScroll() {
  const header = document.getElementById('app-header');
  if (header) header.classList.toggle('header--scrolled', window.scrollY > 20);
}

// ═══════════════════════════════════════════════════════════════
// 16. INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Initial feed render
  renderFeed();
  updateCartBadges();

  // Delivery selector change binding
  const deliverySelect = document.getElementById('delivery-route');
  if (deliverySelect) {
    deliverySelect.addEventListener('change', handleDeliveryChange);
  }

  // Scroll handler
  window.addEventListener('scroll', handleScroll, { passive: true });

  // ESC key — return to home pane
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && currentPane !== 'pane-home') {
      switchView('pane-home');
    }
  });
});
