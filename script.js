/* ─── Johpe Electronics — script.js (Discovery + Intent Engine) ─── */
'use strict';

// ═══════════════════════════════════════════════════════════════
// 1. PRODUCT DATABASE
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
    tags: ['phone', 'budget-mid'],
  },
  {
    id: 'promo-02', name: 'Dell Latitude 5490',
    category: 'promo', type: 'laptop', icon: '💻',
    specs: 'Core i5 8th Gen · 8GB RAM · 256GB SSD · 14"',
    price: 28000, oldPrice: 36000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['laptop', 'budget-mid', 'work', 'student'],
  },
  {
    id: 'promo-03', name: 'Redmi Note 13 Pro',
    category: 'promo', type: 'phone', icon: '📱',
    specs: '6.67" AMOLED · 256GB · 200MP · 67W Fast Charge',
    price: 22000, oldPrice: 27500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['phone', 'budget-low', 'budget-mid'],
  },
  // ── SMARTPHONES ──
  {
    id: 'phone-01', name: 'iPhone 15 Pro Max',
    category: 'phone', type: 'phone', icon: '📱',
    specs: '6.7" Super Retina · 256GB · A17 Pro · Titanium',
    price: 145000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['phone', 'budget-premium'],
  },
  {
    id: 'phone-02', name: 'iPhone 13 Pro',
    category: 'phone', type: 'phone', icon: '📱',
    specs: '6.1" ProMotion · 128GB · Triple Camera · 5G',
    price: 75000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['phone', 'budget-high'],
  },
  {
    id: 'phone-03', name: 'Samsung S23 Ultra',
    category: 'phone', type: 'phone', icon: '📱',
    specs: '6.8" Dynamic AMOLED · 256GB · S-Pen · 200MP',
    price: 98000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['phone', 'budget-high', 'budget-premium'],
  },
  {
    id: 'phone-04', name: 'Samsung Galaxy A35',
    category: 'phone', type: 'phone', icon: '📱',
    specs: '6.6" Super AMOLED · 128GB · 50MP · 5000mAh',
    price: 27500,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['phone', 'budget-mid'],
  },
  {
    id: 'phone-05', name: 'iPhone 12 (Ex-UK)',
    category: 'phone', type: 'phone', icon: '📱',
    specs: '6.1" OLED · 64GB · Ceramic Shield · 5G',
    price: 42000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 4-month warranty',
    tags: ['phone', 'budget-mid'],
  },
  // ── LAPTOPS ──
  {
    id: 'laptop-01', name: 'HP EliteBook 840 G6',
    category: 'laptop', type: 'laptop', icon: '💻',
    specs: 'Core i7 8th Gen · 16GB RAM · 512GB SSD · FHD',
    price: 45000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['laptop', 'budget-mid', 'work'],
  },
  {
    id: 'laptop-02', name: 'Lenovo ThinkPad X1 Carbon',
    category: 'laptop', type: 'laptop', icon: '💻',
    specs: 'Core i7 10th Gen · 16GB · 512GB SSD · 14" FHD',
    price: 68000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['laptop', 'budget-high', 'work'],
  },
  {
    id: 'laptop-03', name: 'MacBook Air M2',
    category: 'laptop', type: 'laptop', icon: '💻',
    specs: 'M2 Chip · 8GB · 256GB SSD · 13.6" Liquid Retina',
    price: 115000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['laptop', 'budget-premium', 'work', 'student'],
  },
  {
    id: 'laptop-04', name: 'Dell XPS 13 (Ex-UK)',
    category: 'laptop', type: 'laptop', icon: '💻',
    specs: 'Core i5 11th Gen · 8GB · 256GB SSD · 13.4" FHD+',
    price: 52000,
    badge: 'Premium Ex-UK', badgeType: 'exuk',
    warranty: '✓ 6-month warranty',
    tags: ['laptop', 'budget-high', 'work', 'student'],
  },
  {
    id: 'laptop-05', name: 'HP 250 G8 (New)',
    category: 'laptop', type: 'laptop', icon: '💻',
    specs: 'Core i3 11th Gen · 8GB · 256GB SSD · 15.6" HD',
    price: 35000,
    badge: 'Brand New', badgeType: 'new',
    warranty: '✓ 12-month warranty',
    tags: ['laptop', 'budget-mid', 'student'],
  },
];

// ═══════════════════════════════════════════════════════════════
// 2. FISHER-YATES SHUFFLE
// ═══════════════════════════════════════════════════════════════
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ═══════════════════════════════════════════════════════════════
// 3. ENGINE STATE
// ═══════════════════════════════════════════════════════════════
let shuffledFeed  = [];    // randomized master array, set at init
let activeCategory = 'all'; // current category pill selection
let searchQuery    = '';     // current search string

const CATEGORY_META = {
  all:    { icon: '✦',  title: 'All Products',         sub: 'Complete catalog — all devices' },
  promo:  { icon: '🔥', title: 'Today\'s Hot Promos',  sub: 'Flash deals — limited stock, save big' },
  phone:  { icon: '📱', title: 'Hand-Vetted Smartphones', sub: 'iPhones, Samsung, Redmi — every unit inspected' },
  laptop: { icon: '💻', title: 'Pro Laptops',           sub: 'Tested Ex-UK & Brand New business machines' },
  new:    { icon: '🟢', title: 'Brand New Devices',     sub: 'Fresh sealed stock with full manufacturer warranty' },
  exuk:   { icon: '🔵', title: 'Premium Ex-UK',         sub: 'Certified used — UK-origin, fully tested & verified' },
};

const HELPER_FILTER_MAP = {
  'budget-low':     { label: 'Under KES 25,000',  test: p => p.price < 25000 },
  'budget-mid':     { label: 'KES 25k – 60k',     test: p => p.price >= 25000 && p.price <= 60000 },
  'budget-high':    { label: 'KES 60k – 100k',    test: p => p.price > 60000 && p.price <= 100000 },
  'budget-premium': { label: 'KES 100k+',          test: p => p.price > 100000 },
  'use-phone':      { label: 'Smartphones',        test: p => p.type === 'phone' },
  'use-work':       { label: 'Work Laptops',       test: p => p.tags.includes('work') },
  'use-student':    { label: 'Student Picks',      test: p => p.tags.includes('student') },
  'use-promo':      { label: 'Flash Deals',        test: p => p.category === 'promo' },
};

// ═══════════════════════════════════════════════════════════════
// 4. CART STATE
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

const getCartTotal = () => Object.values(cart).reduce((s, { product, qty }) => s + product.price * qty, 0);
const getCartCount = () => Object.values(cart).reduce((s, { qty }) => s + qty, 0);
const formatKES    = n  => 'KES ' + n.toLocaleString('en-KE');

// ═══════════════════════════════════════════════════════════════
// 5. BUILD CARD HTML
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
          data-btn-id="${product.id}">
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
  });
}

// ═══════════════════════════════════════════════════════════════
// 6. FEED RENDERER — The Core Engine
// ═══════════════════════════════════════════════════════════════
function renderFeed() {
  const feed       = document.getElementById('catalog-feed');
  const noResults  = document.getElementById('no-results');
  const catHeader  = document.getElementById('category-header');
  const feedLabel  = document.getElementById('feed-label');
  const feedCount  = document.getElementById('feed-count');
  const isFiltered = activeCategory !== 'all' || searchQuery.trim() !== '';

  // ── Determine which products to show ──
  let pool;

  if (!isFiltered) {
    // DISCOVERY MODE: shuffled master feed
    pool = shuffledFeed;
  } else {
    // INTENT MODE: filter from full PRODUCTS array
    pool = PRODUCTS.filter(p => {
      const matchesCat = matchesCategory(p, activeCategory);
      const matchesSearch = matchesQuery(p, searchQuery);
      return matchesCat && matchesSearch;
    });
  }

  // ── Update header meta ──
  if (!isFiltered) {
    catHeader.classList.add('hidden');
    feedLabel.textContent = '✦ Discovery Feed — Shuffled';
  } else {
    catHeader.classList.remove('hidden');
    const meta = CATEGORY_META[activeCategory] || {};
    document.getElementById('category-header-icon').textContent  = meta.icon  || '🔍';
    document.getElementById('category-header-title').textContent = searchQuery
      ? `Results for "${searchQuery}"` : (meta.title || activeCategory);
    document.getElementById('category-header-sub').textContent   = searchQuery
      ? `${pool.length} product${pool.length !== 1 ? 's' : ''} found` : (meta.sub || '');
    feedLabel.textContent = searchQuery ? '🔍 Search Results' : `${meta.icon || ''} ${meta.title || ''}`;
  }

  feedCount.textContent = pool.length > 0 ? `${pool.length} items` : '';

  // ── No results ──
  if (pool.length === 0) {
    feed.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  // ── Animate out → swap → animate in ──
  feed.classList.add('feed-transitioning');
  requestAnimationFrame(() => {
    setTimeout(() => {
      feed.innerHTML = pool.map(buildCard).join('');
      feed.classList.remove('feed-transitioning');
    }, 140);
  });
}

// ═══════════════════════════════════════════════════════════════
// 7. FILTER HELPERS
// ═══════════════════════════════════════════════════════════════
function matchesCategory(product, cat) {
  switch (cat) {
    case 'all':    return true;
    case 'promo':  return product.category === 'promo';
    case 'phone':  return product.type === 'phone';
    case 'laptop': return product.type === 'laptop';
    case 'new':    return product.badgeType === 'new';
    case 'exuk':   return product.badgeType === 'exuk';
    default:       return true;
  }
}

function matchesQuery(product, query) {
  if (!query.trim()) return true;
  const q = query.toLowerCase();
  return (
    product.name.toLowerCase().includes(q)    ||
    product.specs.toLowerCase().includes(q)   ||
    product.badge.toLowerCase().includes(q)   ||
    product.type.toLowerCase().includes(q)    ||
    product.category.toLowerCase().includes(q)
  );
}

// ═══════════════════════════════════════════════════════════════
// 8. CATEGORY PILL SELECTION
// ═══════════════════════════════════════════════════════════════
function selectCategory(cat) {
  activeCategory = cat;
  searchQuery = '';

  // Clear search input
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  document.getElementById('search-clear').classList.add('hidden');

  // Update pill active states
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.cat === cat);
  });

  renderFeed();

  // Scroll discovery section into view smoothly
  document.getElementById('discovery').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ═══════════════════════════════════════════════════════════════
// 9. SEARCH INPUT HANDLER
// ═══════════════════════════════════════════════════════════════
let searchDebounce = null;

function handleSearchInput(value) {
  searchQuery = value;

  // Show/hide clear button
  document.getElementById('search-clear').classList.toggle('hidden', value === '');

  // If typing a search, deactivate category pills (go to "all" context)
  if (value.trim() !== '') {
    activeCategory = 'all';
    document.querySelectorAll('.cat-pill').forEach(pill => pill.classList.remove('active'));
  } else {
    // Empty search → back to "All" pill active, discovery mode
    activeCategory = 'all';
    const allPill = document.querySelector('[data-cat="all"]');
    if (allPill) allPill.classList.add('active');
  }

  // Debounce rendering by 120ms for instant feel without jank
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(renderFeed, 120);
}

function clearSearch() {
  searchQuery = '';
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
// 10. HELPER MODAL FILTER (budget/use-case buttons)
// ═══════════════════════════════════════════════════════════════
function applyHelperFilter(filterKey) {
  const filter = HELPER_FILTER_MAP[filterKey];
  if (!filter) return;

  // Reset standard state
  activeCategory = 'all';
  searchQuery    = '';
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  document.getElementById('search-clear').classList.add('hidden');

  // Mark helper btn active
  document.querySelectorAll('.helper-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[onclick="applyHelperFilter('${filterKey}')"]`);
  if (btn) btn.classList.add('active');

  // Override pool rendering with custom filter test
  const pool = PRODUCTS.filter(filter.test);
  const feed        = document.getElementById('catalog-feed');
  const noResults   = document.getElementById('no-results');
  const catHeader   = document.getElementById('category-header');
  const feedLabel   = document.getElementById('feed-label');
  const feedCount   = document.getElementById('feed-count');

  catHeader.classList.remove('hidden');
  document.getElementById('category-header-icon').textContent  = '🎯';
  document.getElementById('category-header-title').textContent = filter.label;
  document.getElementById('category-header-sub').textContent   = `${pool.length} matching product${pool.length !== 1 ? 's' : ''}`;
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
  setTimeout(() => document.getElementById('discovery').scrollIntoView({ behavior: 'smooth', block: 'start' }), 180);
}

// ═══════════════════════════════════════════════════════════════
// 11. CART UI
// ═══════════════════════════════════════════════════════════════
function updateCartUI() {
  const count = getCartCount();
  const badge = document.getElementById('cart-count-badge');
  badge.textContent = count;
  badge.classList.toggle('hidden', count === 0);
  badge.classList.toggle('flex', count > 0);
  document.getElementById('cart-total-label').textContent = formatKES(getCartTotal());
}

function renderCartModal() {
  const list      = document.getElementById('cart-items-list');
  const empty     = document.getElementById('cart-empty');
  const footer    = document.getElementById('cart-footer');
  const grandTotal = document.getElementById('cart-grand-total');
  const items     = Object.values(cart);

  list.innerHTML = '';

  if (items.length === 0) {
    empty.classList.remove('hidden');
    empty.classList.add('flex');
    footer.classList.add('hidden');
    return;
  }
  empty.classList.add('hidden');
  empty.classList.remove('flex');
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
        <button class="cart-remove-btn" onclick="removeFromCart('${product.id}')">×</button>
      </div>`);
  });

  grandTotal.textContent = formatKES(getCartTotal());
}

// ═══════════════════════════════════════════════════════════════
// 12. MODAL CONTROLS
// ═══════════════════════════════════════════════════════════════
function openHelper() {
  document.getElementById('helper-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeHelper() {
  document.getElementById('helper-modal').classList.add('hidden');
  document.body.style.overflow = '';
}
function openCart() {
  renderCartModal();
  document.getElementById('cart-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════════════════════════
// 13. WHATSAPP CHECKOUT
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

  window.open(`https://wa.me/254729331163?text=${encodeURIComponent(message)}`, '_blank');
}

// ═══════════════════════════════════════════════════════════════
// 14. TOAST
// ═══════════════════════════════════════════════════════════════
let toastTimer = null;
function showToast(msg = 'Added to bag') {
  const toast = document.getElementById('toast');
  toast.textContent = `✓ ${msg}`;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ═══════════════════════════════════════════════════════════════
// 15. INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  shuffledFeed = shuffle(PRODUCTS);   // randomize once on load
  renderFeed();                        // render discovery grid
  updateCartUI();                      // sync cart UI
});
