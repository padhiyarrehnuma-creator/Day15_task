// ============================================
// script.js - GadgetPoint Day 15 (Final)
// Deep Navy Theme - All Features + Password Toggle + Search Fix
// ============================================

// ===== PRODUCT DATA =====
const products = [
    { id: 1, name: 'Galaxy S24 Ultra', price: 99999, desc: '200MP camera, 12GB RAM, 256GB', category: 'phones', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop&auto=format', badge: 'hot', discount: 15 },
    { id: 2, name: 'iPhone 15 Pro Max', price: 149900, desc: '48MP camera, 8GB RAM, 256GB', category: 'phones', img: 'images/phone1.png', badge: 'best', discount: 10 },
    { id: 3, name: 'OnePlus 12', price: 64999, desc: '50MP camera, 12GB RAM, 256GB', category: 'phones', img: 'images/phone2.png', badge: 'new', discount: 0 },
    { id: 4, name: 'Pixel 8 Pro', price: 84999, desc: '50MP camera, 12GB RAM, 128GB', category: 'phones', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop&auto=format', badge: 'sale', discount: 20 },
    { id: 5, name: 'MacBook Pro 14"', price: 159900, desc: 'M3 chip, 16GB, 512GB SSD', category: 'laptops', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop&auto=format', badge: 'best', discount: 5 },
    { id: 6, name: 'Dell XPS 16', price: 129900, desc: 'Intel Ultra 9, 32GB, 1TB SSD', category: 'laptops', img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300&h=300&fit=crop&auto=format', badge: 'sale', discount: 25 },
    { id: 7, name: 'Lenovo Yoga 9i', price: 89900, desc: 'Intel i7, 16GB, 512GB SSD', category: 'laptops', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300&h=300&fit=crop&auto=format', badge: 'new', discount: 0 },
    { id: 8, name: 'ASUS ROG Zephyrus', price: 149900, desc: 'RTX 4070, 32GB, 1TB SSD', category: 'laptops', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop&auto=format', badge: 'hot', discount: 12 },
    { id: 9, name: 'Apple Watch Ultra 2', price: 89900, desc: '49mm, GPS + Cellular, rugged', category: 'watches', img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=300&h=300&fit=crop&auto=format', badge: 'best', discount: 8 },
    { id: 10, name: 'Samsung Watch 6', price: 39900, desc: '40mm, AMOLED, ECG monitor', category: 'watches', img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&h=300&fit=crop&auto=format', badge: 'new', discount: 0 },
    { id: 11, name: 'Garmin Fenix 7', price: 69900, desc: '47mm, GPS, solar charging', category: 'watches', img: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=300&h=300&fit=crop&auto=format', badge: 'sale', discount: 18 },
    { id: 12, name: 'Pixel Watch 2', price: 34900, desc: '41mm, Fitbit integration', category: 'watches', img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&h=300&fit=crop&auto=format', badge: 'hot', discount: 10 },
    { id: 13, name: 'iPad Air M2', price: 59900, desc: '10.9", 64GB, Wi-Fi + 5G', category: 'tablets', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop&auto=format', badge: 'best', discount: 5 },
    { id: 14, name: 'Samsung Tab S9', price: 54900, desc: '11", 128GB, S Pen included', category: 'tablets', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop&auto=format', badge: 'new', discount: 0 },
    { id: 15, name: 'OnePlus Pad', price: 34900, desc: '11.6", 128GB, 144Hz display', category: 'tablets', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop&auto=format', badge: 'sale', discount: 15 },
    { id: 16, name: 'Sony WH-1000XM5', price: 29990, desc: 'Noise cancelling, 30h battery', category: 'headphones', img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop&auto=format', badge: 'best', discount: 10 },
    { id: 17, name: 'Bose QC 45', price: 24990, desc: 'Active noise cancelling, 24h battery', category: 'headphones', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&auto=format', badge: 'hot', discount: 8 },
    { id: 18, name: 'JBL Tune 770', price: 9990, desc: 'Wireless, 70h battery, lightweight', category: 'headphones', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&auto=format', badge: 'new', discount: 0 },
    { id: 19, name: 'AirPods Pro 2', price: 24900, desc: 'Active noise cancelling, H2 chip', category: 'earbuds', img: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300&h=300&fit=crop&auto=format', badge: 'best', discount: 5 },
    { id: 20, name: 'Samsung Galaxy Buds 2', price: 9990, desc: 'Noise cancelling, wireless charging', category: 'earbuds', img: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300&h=300&fit=crop&auto=format', badge: 'sale', discount: 20 },
    { id: 21, name: 'Nothing Ear 2', price: 14990, desc: 'Active noise cancelling, transparent design', category: 'earbuds', img: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300&h=300&fit=crop&auto=format', badge: 'new', discount: 0 },
    { id: 22, name: 'Jabra Elite 5', price: 12990, desc: 'Hybrid ANC, 7h battery, multipoint', category: 'earbuds', img: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300&h=300&fit=crop&auto=format', badge: 'hot', discount: 12 },
     { id: 23, name: 'Boat Rockerz 450', price: 1990, desc: 'Wireless, 15h battery, comfortable', category: 'handsfree', img: 'images/hand1.png', badge: 'hot', discount: 10 },
    { id: 24, name: 'Noise Buds VS104', price: 1490, desc: 'Bluetooth 5.0, 10m range, voice assistant', category: 'handsfree', img: 'images/hand2.png', badge: 'new', discount: 0 },
    { id: 25, name: 'pTron Bass 500', price: 799, desc: 'Wireless handsfree, 8h battery', category: 'handsfree', img: 'images/hand3.png', badge: 'sale', discount: 25 },
    { id: 26, name: 'Anker 65W Charger', price: 2499, desc: 'GaN, 3 ports, fast charging', category: 'chargers', img: 'images/charger1.png', badge: 'best', discount: 5 },
    { id: 27, name: 'Samsung 25W Adapter', price: 1499, desc: 'Super fast charging, USB-C', category: 'chargers', img: 'images/charger2.png', badge: 'hot', discount: 8 },
    { id: 28, name: 'Apple 20W Charger', price: 1999, desc: 'Fast charging, USB-C, compact', category: 'chargers', img: 'images/charger3.png', badge: 'new', discount: 0 },
    { id: 29, name: 'Spigen 100W Charger', price: 3499, desc: '4 ports, GaN technology, LED display', category: 'chargers', img: 'images/charger4.png', badge: 'sale', discount: 15 }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('electrohub_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('electrohub_wishlist')) || [];
let userRatings = JSON.parse(localStorage.getItem('electrohub_user_ratings')) || {};
let productComments = JSON.parse(localStorage.getItem('electrohub_comments')) || {};
let currentCategory = 'all';
let currentPriceFilter = 'all';
let currentSort = 'default';
let popupProductId = null;
let popupQuantity = 1;
let isLoggedIn = JSON.parse(localStorage.getItem('electrohub_logged_in')) || false;
let currentSlide = 0;
let totalSlides = 0;
let selectedPayment = 'cod';
let selectedAddress = 'home';
let couponApplied = false;
let couponDiscount = 0;
let addresses = JSON.parse(localStorage.getItem('electrohub_addresses')) || {
    home: '123, Main Street, Andheri East, Mumbai - 400001',
    office: '456, Business Park, BKC, Mumbai - 400051',
    other: '789, Lake View, Pune - 411001'
};

// ===== CHATBOT TOPICS (10) =====
const chatbotTopics = [
    { icon: '📦', label: 'Track Order', response: 'Please share your Order ID to track 📦' },
    { icon: '💳', label: 'Payment Help', response: 'We accept Credit/Debit Cards, UPI, Net Banking & Cash on Delivery 💳' },
    { icon: '🚚', label: 'Delivery Status', response: 'Free delivery in 2-3 business days 🚚' },
    { icon: '🔄', label: 'Return Policy', response: '30-day easy return policy. Visit Profile → Orders 🔄' },
    { icon: '📞', label: 'Contact Support', response: '📞 +91 74878 14056 📧 support@electrohub.com' },
    { icon: '🔐', label: 'Account Security', response: 'Keep your password secure. Never share OTP with anyone! 🔐' },
    { icon: '🛒', label: 'Order Cancellation', response: 'Orders can be cancelled within 1 hour of placing. Visit Profile → Orders 🛒' },
    { icon: '⭐', label: 'Product Reviews', response: 'Rate products after delivery. Your feedback helps us improve! ⭐' },
    { icon: '🎁', label: 'Gift Options', response: 'We offer gift wrapping for ₹99 on all orders! 🎁' },
    { icon: '🆘', label: 'Emergency Help', response: 'For urgent assistance, call us at +91 74878 14056 🆘' }
];

// =========================================================
// PASSWORD TOGGLE FUNCTION
// =========================================================
function setupPasswordToggle() {
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const input = document.getElementById(targetId);
            if (input) {
                if (input.type === 'password') {
                    input.type = 'text';
                    this.textContent = '🙈';
                } else {
                    input.type = 'password';
                    this.textContent = '👁️';
                }
            }
        });
    });
}

// =========================================================
// ACCOUNT MANAGEMENT
// =========================================================
function checkAccount() {
    const account = JSON.parse(localStorage.getItem('electrohub_account'));
    if (account) {
        isLoggedIn = true;
        document.getElementById('createAccountPage').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        document.getElementById('profileName').textContent = account.fullName || 'John Doe';
        document.getElementById('profileEmail').textContent = account.email || 'john@email.com';
        document.getElementById('profilePhone').textContent = account.phone || '+91 98765 43210';
        document.getElementById('editFullName').value = account.fullName || '';
        document.getElementById('editEmail').value = account.email || '';
        document.getElementById('editPhone').value = account.phone || '';
    } else {
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
    }
    renderAddresses();
}

document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = document.getElementById('accFullName').value.trim();
    const email = document.getElementById('accEmail').value.trim();
    const phone = document.getElementById('accPhone').value.trim();
    const password = document.getElementById('accPassword').value;
    const confirmPassword = document.getElementById('accConfirmPassword').value;

    if (!fullName || !email || !phone || !password || !confirmPassword) {
        showFeedback('⚠️ Please fill all fields', 'error');
        return;
    }
    if (password !== confirmPassword) {
        showFeedback('⚠️ Passwords do not match', 'error');
        return;
    }
    if (password.length < 6) {
        showFeedback('⚠️ Password must be at least 6 characters', 'error');
        return;
    }

    const accountData = { fullName, email, phone, password };
    localStorage.setItem('electrohub_account', JSON.stringify(accountData));
    localStorage.setItem('electrohub_logged_in', JSON.stringify(true));
    isLoggedIn = true;
    showFeedback('✅ Account created successfully! 🎉', 'success');
    this.reset();
    checkAccount();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const account = JSON.parse(localStorage.getItem('electrohub_account'));
    if (!account) {
        showFeedback('⚠️ No account found. Please sign up first.', 'error');
        return;
    }
    if (account.email === email && account.password === password) {
        localStorage.setItem('electrohub_logged_in', JSON.stringify(true));
        isLoggedIn = true;
        showFeedback('✅ Login successful!', 'success');
        this.reset();
        checkAccount();
    } else {
        showFeedback('⚠️ Invalid email or password', 'error');
    }
});

document.getElementById('showLoginPage').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.account-box:first-child').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
});
document.getElementById('showSignupPage').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginBox').style.display = 'none';
    document.querySelector('.account-box:first-child').style.display = 'block';
});

// ===== LOGOUT - COMPLETE FIX =====
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('electrohub_logged_in');
        localStorage.removeItem('electrohub_cart');
        localStorage.removeItem('electrohub_wishlist');
        isLoggedIn = false;
        cart = [];
        wishlist = [];
        updateCart();
        updateWishlist();
        showFeedback('🚪 Logged out successfully', 'info');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        document.getElementById('loginForm').reset();
        document.getElementById('createAccountForm').reset();
        document.querySelector('.account-box:first-child').style.display = 'block';
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('cartItems').innerHTML = '';
        document.getElementById('cartTotal').innerHTML = '';
        document.getElementById('cartOverlay').classList.remove('open');
        document.getElementById('wishlistOverlay').classList.remove('open');
        document.getElementById('productPopup').classList.remove('open');
        document.getElementById('orderPopup').classList.remove('open');
        document.getElementById('successPopup').classList.remove('open');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// =========================================================
// PROFILE - EDIT PROFILE
// =========================================================
document.getElementById('editProfileBtn').addEventListener('click', function() {
    document.getElementById('editProfileForm').style.display = 'block';
    document.getElementById('editProfileForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelProfileBtn').addEventListener('click', function() {
    document.getElementById('editProfileForm').style.display = 'none';
});
document.getElementById('saveProfileBtn').addEventListener('click', function() {
    const account = JSON.parse(localStorage.getItem('electrohub_account'));
    if (!account) { showFeedback('⚠️ No account found', 'error'); return; }
    const fullName = document.getElementById('editFullName').value.trim();
    const email = document.getElementById('editEmail').value.trim();
    const phone = document.getElementById('editPhone').value.trim();
    if (!fullName || !email || !phone) {
        showFeedback('⚠️ Please fill all fields', 'error');
        return;
    }
    account.fullName = fullName;
    account.email = email;
    account.phone = phone;
    localStorage.setItem('electrohub_account', JSON.stringify(account));
    document.getElementById('profileName').textContent = fullName;
    document.getElementById('profileEmail').textContent = email;
    document.getElementById('profilePhone').textContent = phone;
    document.getElementById('editProfileForm').style.display = 'none';
    showFeedback('✅ Profile updated successfully!', 'success');
});

// =========================================================
// PROFILE - CHANGE PASSWORD
// =========================================================
document.getElementById('changePasswordBtn').addEventListener('click', function() {
    document.getElementById('changePasswordForm').style.display = 'block';
    document.getElementById('changePasswordForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelPasswordBtn').addEventListener('click', function() {
    document.getElementById('changePasswordForm').style.display = 'none';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';
});
document.getElementById('savePasswordBtn').addEventListener('click', function() {
    const account = JSON.parse(localStorage.getItem('electrohub_account'));
    if (!account) { showFeedback('⚠️ No account found', 'error'); return; }
    const current = document.getElementById('currentPassword').value;
    const newPwd = document.getElementById('newPassword').value;
    const confirmPwd = document.getElementById('confirmNewPassword').value;
    if (current !== account.password) {
        showFeedback('⚠️ Current password is incorrect', 'error');
        return;
    }
    if (newPwd.length < 6) {
        showFeedback('⚠️ New password must be at least 6 characters', 'error');
        return;
    }
    if (newPwd !== confirmPwd) {
        showFeedback('⚠️ Passwords do not match', 'error');
        return;
    }
    account.password = newPwd;
    localStorage.setItem('electrohub_account', JSON.stringify(account));
    document.getElementById('changePasswordForm').style.display = 'none';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';
    showFeedback('✅ Password changed successfully!', 'success');
});

// =========================================================
// PROFILE - ADDRESS MANAGEMENT
// =========================================================
function renderAddresses() {
    const list = document.getElementById('addressList');
    if (!list) return;
    let html = '';
    const addressLabels = { home: '🏠 Home', office: '🏢 Office', other: '📍 Other' };
    const addressKeys = Object.keys(addresses);
    addressKeys.forEach(key => {
        html += `
            <div class="address-card" data-address="${key}">
                <div class="address-type">${addressLabels[key] || key}</div>
                <div class="address-detail">${addresses[key]}</div>
                ${key === 'home' ? '<span class="address-default">Default</span>' : ''}
                <button class="address-delete" onclick="deleteAddress('${key}')">🗑️</button>
            </div>
        `;
    });
    list.innerHTML = html || '<p style="color:var(--text-light);">No addresses added yet.</p>';
}

function deleteAddress(key) {
    if (key === 'home') {
        showFeedback('⚠️ Cannot delete default address', 'error');
        return;
    }
    if (confirm('Delete this address?')) {
        delete addresses[key];
        localStorage.setItem('electrohub_addresses', JSON.stringify(addresses));
        renderAddresses();
        showFeedback('✅ Address deleted', 'success');
    }
}

document.getElementById('showAddAddress').addEventListener('click', function() {
    document.getElementById('addAddressForm').style.display = 'block';
    document.getElementById('addAddressForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelAddressBtn').addEventListener('click', function() {
    document.getElementById('addAddressForm').style.display = 'none';
    document.getElementById('newAddressLabel').value = '';
    document.getElementById('newAddressDetail').value = '';
});
document.getElementById('saveAddressBtn').addEventListener('click', function() {
    const label = document.getElementById('newAddressLabel').value.trim();
    const detail = document.getElementById('newAddressDetail').value.trim();
    if (!label || !detail) {
        showFeedback('⚠️ Please fill all fields', 'error');
        return;
    }
    const key = label.toLowerCase().replace(/\s/g, '_');
    addresses[key] = detail;
    localStorage.setItem('electrohub_addresses', JSON.stringify(addresses));
    document.getElementById('addAddressForm').style.display = 'none';
    document.getElementById('newAddressLabel').value = '';
    document.getElementById('newAddressDetail').value = '';
    renderAddresses();
    showFeedback('✅ Address added successfully!', 'success');
});

// =========================================================
// SLIDER
// =========================================================
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    const dotsContainer = document.getElementById('sliderDots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.addEventListener('click', function() { goToSlide(parseInt(this.dataset.index)); });
        dotsContainer.appendChild(dot);
    }
    document.getElementById('prevSlide').addEventListener('click', function() {
        goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
    });
    document.getElementById('nextSlide').addEventListener('click', function() {
        goToSlide((currentSlide + 1) % totalSlides);
    });
    setInterval(function() {
        if (document.querySelector('.slider-container:hover')) return;
        goToSlide((currentSlide + 1) % totalSlides);
    }, 4000);
}

function goToSlide(index) {
    currentSlide = index;
    const wrapper = document.getElementById('sliderWrapper');
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.slide').forEach((s, i) => s.classList.toggle('active', i === index));
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

// =========================================================
// DOWN TO TOP BUTTON
// =========================================================
function setupDownToTop() {
    const btn = document.getElementById('downToTopBtn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =========================================================
// NAVIGATION
// =========================================================
function setupNavigation() {
    document.querySelectorAll('.nav-link, [data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionName = this.dataset.section;
            if (!sectionName) return;
            document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
            const target = document.getElementById(sectionName);
            if (target) target.classList.remove('hidden');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`.nav-link[data-section="${sectionName}"]`).forEach(l => l.classList.add('active'));
            const toggle = document.querySelector('.nav-toggle');
            if (toggle) toggle.checked = false;
            document.getElementById('cartOverlay').classList.remove('open');
            document.getElementById('wishlistOverlay').classList.remove('open');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// =========================================================
// PRODUCTS RENDER - FIXED
// =========================================================
function renderProducts(category = 'all', priceFilter = 'all', sort = 'default') {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    // ✅ FIX: Category filter - agar 'all' hai toh sare products show karo
    let filtered = [];
    if (category === 'all' || category === '' || category === undefined || !category) {
        filtered = [...products];
    } else {
        filtered = products.filter(p => p.category === category);
    }

    // Price filter
    if (priceFilter !== 'all') {
        filtered = filtered.filter(p => {
            if (priceFilter === '0-10000') return p.price <= 10000;
            if (priceFilter === '10000-50000') return p.price > 10000 && p.price <= 50000;
            if (priceFilter === '50000-100000') return p.price > 50000 && p.price <= 100000;
            if (priceFilter === '100000+') return p.price > 100000;
            return true;
        });
    }

    // Sort
    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') filtered.sort((a, b) => (userRatings[b.id] || 0) - (userRatings[a.id] || 0));

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="text-align:center;color:var(--text-light);padding:2rem;width:100%;">No products found.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const isWishlisted = wishlist.some(item => item.id === p.id);
        const userRating = userRatings[p.id] || 0;
        const fullStars = Math.floor(userRating);
        const emptyStars = 5 - fullStars;
        let starsHTML = '';
        for (let i = 0; i < fullStars; i++) starsHTML += '<span class="star active">★</span>';
        for (let i = 0; i < emptyStars; i++) starsHTML += '<span class="star">★</span>';

        let badgeClass = 'badge-sale';
        let badgeText = `${p.discount}% OFF`;
        if (p.badge === 'new' && p.discount === 0) { badgeClass = 'badge-new';
            badgeText = '✨ New'; } else if (p.badge === 'hot') { badgeClass = 'badge-hot';
            badgeText = `🔥 ${p.discount}% OFF`; } else if (p.badge === 'best') { badgeClass = 'badge-best';
            badgeText = `⭐ ${p.discount}% OFF`; } else if (p.badge === 'sale') { badgeClass = 'badge-sale';
            badgeText = `-${p.discount}% OFF`; }

        return `
            <div class="product-card" data-id="${p.id}" onclick="handleProductClick(${p.id})">
                ${p.discount > 0 ? `<span class="product-badge ${badgeClass}">${badgeText}</span>` : ''}
                <img src="${p.img}" alt="${p.name}" loading="lazy" />
                <h3>${p.name}</h3>
                <p class="description">${p.desc}</p>
                <div class="rating-section">
                    <div class="rating-stars" data-id="${p.id}">${starsHTML}</div>
                    <span class="rating-text">${userRating > 0 ? '★' + userRating : 'Rate'}</span>
                </div>
                <div class="price">₹${p.price.toLocaleString('en-IN')}</div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="event.stopPropagation(); handleAddToCart(${p.id})">Add to Cart</button>
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); handleWishlist(${p.id})">
                        ${isWishlisted ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Rating star click events
    document.querySelectorAll('.rating-stars').forEach(container => {
        const stars = container.querySelectorAll('.star');
        const productId = parseInt(container.dataset.id);
        stars.forEach((star, index) => {
            star.addEventListener('click', function(e) {
                e.stopPropagation();
                if (!isLoggedIn) {
                    showFeedback('⚠️ Please login to rate', 'error');
                    return;
                }
                const rating = index + 1;
                userRatings[productId] = rating;
                localStorage.setItem('electrohub_user_ratings', JSON.stringify(userRatings));
                showFeedback(`⭐ Rated ${rating} stars!`, 'success');
                renderProducts(currentCategory, currentPriceFilter, currentSort);
            });
        });
    });
}

// =========================================================
// PRODUCT CLICK HANDLER - FIXED
// =========================================================
function handleProductClick(productId) {
    // Agar account nahi hai toh login page dikhao
    if (!isLoggedIn) {
        showFeedback('⚠️ Please login to view product details', 'error');
        // Redirect to create account
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        return;
    }
    openPopup(productId);
}

function handleAddToCart(productId) {
    if (!isLoggedIn) { 
        showFeedback('⚠️ Please login to add items to cart', 'error');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        return; 
    }
    addToCart(productId);
}

function handleWishlist(productId) {
    if (!isLoggedIn) { 
        showFeedback('⚠️ Please login to add items to wishlist', 'error');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        return; 
    }
    toggleWishlist(productId);
}

// =========================================================
// CART FUNCTIONS
// =========================================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) { existing.quantity += 1; } else { cart.push({ ...product, quantity: 1 }); }
    updateCart();
    showFeedback('✅ Added to cart!', 'success');
    renderProducts(currentCategory, currentPriceFilter, currentSort);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    renderCart();
}

function updateCart() {
    localStorage.setItem('electrohub_cart', JSON.stringify(cart));
    document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const totalContainer = document.getElementById('cartTotal');
    const couponSection = document.querySelector('.coupon-section');
    const confirmBtn = document.getElementById('confirmOrderBtn');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-cart">🛒 Your cart is empty.</div>`;
        if (totalContainer) totalContainer.innerHTML = '';
        if (couponSection) couponSection.style.display = 'none';
        if (confirmBtn) confirmBtn.style.display = 'none';
        return;
    }
    
    if (couponSection) couponSection.style.display = 'flex';
    if (confirmBtn) confirmBtn.style.display = 'block';

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <img src="${item.img}" alt="${item.name}" />
                <div>
                    <div class="cart-item-name">${item.name}</div>
                    <div style="color:var(--text-light);font-size:0.85rem;">Qty: ${item.quantity}</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;gap:var(--space-sm);flex-wrap:wrap;">
                <span class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        </div>
    `).join('');

    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (couponApplied) total = total - couponDiscount;
    if (totalContainer) totalContainer.innerHTML = `Total: ₹${total.toLocaleString('en-IN')}`;
}

// =========================================================
// COUPON
// =========================================================
document.getElementById('applyCouponBtn').addEventListener('click', function() {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    if (code === 'SAVE10') { couponApplied = true;
        couponDiscount = 500;
        showFeedback('✅ Coupon SAVE10 applied! ₹500 off', 'success');
        renderCart(); } else if (code === 'ELECTRO20') { couponApplied = true;
        couponDiscount = 1000;
        showFeedback('✅ Coupon ELECTRO20 applied! ₹1000 off', 'success');
        renderCart(); } else if (code === '') { showFeedback('⚠️ Please enter a coupon code', 'error'); } else { showFeedback('⚠️ Invalid coupon code', 'error'); }
});

// =========================================================
// WISHLIST FUNCTIONS
// =========================================================
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) { wishlist.splice(index, 1);
        showFeedback('Removed from wishlist', 'info'); } else { wishlist.push({ ...product });
        showFeedback('❤️ Added to wishlist!', 'success'); }
    updateWishlist();
    renderProducts(currentCategory, currentPriceFilter, currentSort);
    renderWishlist();
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    updateWishlist();
    renderProducts(currentCategory, currentPriceFilter, currentSort);
    renderWishlist();
}

function updateWishlist() {
    localStorage.setItem('electrohub_wishlist', JSON.stringify(wishlist));
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

function renderWishlist() {
    const container = document.getElementById('wishlistItems');
    if (!container) return;
    if (wishlist.length === 0) {
        container.innerHTML = `<div class="empty-wishlist">❤️ Your wishlist is empty.</div>`;
        return;
    }
    container.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <div class="wishlist-item-info">
                <img src="${item.img}" alt="${item.name}" />
                <div>
                    <div class="wishlist-item-name">${item.name}</div>
                    <div class="wishlist-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                </div>
            </div>
            <button class="wishlist-item-remove" onclick="removeFromWishlist(${item.id})">🗑️</button>
        </div>
    `).join('');
}

// =========================================================
// PRODUCT POPUP
// =========================================================
function openPopup(productId) {
    if (!isLoggedIn) { 
        showFeedback('⚠️ Please login to view product details', 'error');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        return; 
    }
    const product = products.find(p => p.id === productId);
    if (!product) {
        showFeedback('⚠️ Product not found', 'error');
        return;
    }
    popupProductId = productId;
    popupQuantity = 1;
    document.getElementById('popupImg').src = product.img;
    document.getElementById('popupName').textContent = product.name;
    document.getElementById('popupDesc').textContent = product.desc;
    document.getElementById('popupPrice').textContent = '₹' + product.price.toLocaleString('en-IN');
    document.getElementById('qtyValue').textContent = 1;

    const userRating = userRatings[productId] || 0;
    const stars = document.querySelectorAll('#popupStars span');
    stars.forEach((star, index) => {
        star.classList.toggle('active', index < userRating);
        star.onclick = function() {
            if (!isLoggedIn) {
                showFeedback('⚠️ Please login to rate', 'error');
                return;
            }
            const rating = parseInt(this.dataset.value);
            userRatings[productId] = rating;
            localStorage.setItem('electrohub_user_ratings', JSON.stringify(userRatings));
            stars.forEach((s, i) => s.classList.toggle('active', i < rating));
            document.getElementById('popupRatingText').textContent = rating > 0 ? '★' + rating : 'Not rated';
            showFeedback(`⭐ Rated ${rating} stars!`, 'success');
            renderProducts(currentCategory, currentPriceFilter, currentSort);
        };
    });
    document.getElementById('popupRatingText').textContent = userRating > 0 ? '★' + userRating : 'Not rated';

    const commentsContainer = document.getElementById('popupComments');
    const productCommentsList = productComments[productId] || [];
    if (productCommentsList.length === 0) {
        commentsContainer.innerHTML = '<div class="comment-item">No comments yet. Be the first!</div>';
    } else {
        commentsContainer.innerHTML = productCommentsList.map(c => `<div class="comment-item">⭐ ${c.rating || ''} - ${c.comment}</div>`).join('');
    }
    document.getElementById('productPopup').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('productPopup').classList.remove('open');
    document.body.style.overflow = '';
}
document.getElementById('closePopup').addEventListener('click', closePopup);
document.getElementById('productPopup').addEventListener('click', function(e) { if (e.target === this) closePopup(); });

document.getElementById('qtyMinus').addEventListener('click', function() { if (popupQuantity > 1) { popupQuantity--;
        document.getElementById('qtyValue').textContent = popupQuantity; } });
document.getElementById('qtyPlus').addEventListener('click', function() { popupQuantity++;
    document.getElementById('qtyValue').textContent = popupQuantity; });

document.getElementById('popupAddToCart').addEventListener('click', function() {
    if (!isLoggedIn) { 
        showFeedback('⚠️ Please login to add to cart', 'error');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        return; 
    }
    if (popupProductId) {
        const product = products.find(p => p.id === popupProductId);
        if (product) {
            const existing = cart.find(item => item.id === popupProductId);
            if (existing) { existing.quantity += popupQuantity; } else { cart.push({ ...product, quantity: popupQuantity }); }
            updateCart();
            showFeedback(`✅ Added ${popupQuantity} × ${product.name} to cart!`, 'success');
            closePopup();
        }
    }
});

document.getElementById('popupSubmitComment').addEventListener('click', function() {
    if (!isLoggedIn) { 
        showFeedback('⚠️ Please login to comment', 'error');
        document.getElementById('createAccountPage').style.display = 'flex';
        document.getElementById('mainApp').style.display = 'none';
        return; 
    }
    const comment = document.getElementById('popupComment').value.trim();
    if (!comment) { showFeedback('⚠️ Please write a comment!', 'error'); return; }
    if (!popupProductId) return;
    if (!productComments[popupProductId]) productComments[popupProductId] = [];
    const userRating = userRatings[popupProductId] || 0;
    productComments[popupProductId].push({ comment, rating: userRating });
    localStorage.setItem('electrohub_comments', JSON.stringify(productComments));
    document.getElementById('popupComment').value = '';
    showFeedback('✅ Comment added!', 'success');
    const commentsContainer = document.getElementById('popupComments');
    const list = productComments[popupProductId] || [];
    commentsContainer.innerHTML = list.map(c => `<div class="comment-item">${c.rating > 0 ? '⭐' + c.rating + ' - ' : ''}${c.comment}</div>`).join('');
});

// =========================================================
// CATEGORY TABS & FILTERS
// =========================================================
function setupCategoryTabs() {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderProducts(currentCategory, currentPriceFilter, currentSort);
        });
    });
}

function setupFilters() {
    document.getElementById('priceFilter').addEventListener('change', function() {
        currentPriceFilter = this.value;
        renderProducts(currentCategory, currentPriceFilter, currentSort);
    });
    document.getElementById('sortFilter').addEventListener('change', function() {
        currentSort = this.value;
        renderProducts(currentCategory, currentPriceFilter, currentSort);
    });
}

// =========================================================
// OFFER TABS
// =========================================================
function setupOfferTabs() {
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.offer-tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });
}

// =========================================================
// PROFILE TABS
// =========================================================
function setupProfileTabs() {
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('tab-' + this.dataset.tab).classList.add('active');
        });
    });
}

// =========================================================
// SEARCH - COMPLETE FIX (No Autofill)
// =========================================================
function setupSearch() {
    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');

    if (!input) return;

    // Clear autofill
    input.value = '';
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('spellcheck', 'false');

    // Clear on focus
    input.addEventListener('focus', function() {
        setTimeout(() => {
            if (this.value === localStorage.getItem('email') || 
                this.value === localStorage.getItem('accEmail') ||
                this.value.includes('@')) {
                this.value = '';
            }
        }, 50);
    });

    // Clear on click
    input.addEventListener('click', function() {
        if (this.value === localStorage.getItem('email') || 
            this.value === localStorage.getItem('accEmail') ||
            this.value.includes('@')) {
            this.value = '';
        }
    });

    // Clear on input
    input.addEventListener('input', function() {
        if (this.value.includes('@') && this.value === localStorage.getItem('email')) {
            this.value = '';
        }
    });

    // Reset on page load
    setTimeout(() => {
        if (input.value.includes('@')) {
            input.value = '';
        }
    }, 100);

    setTimeout(() => {
        if (input.value.includes('@')) {
            input.value = '';
        }
    }, 500);

    // Search function
    function search() {
        const query = input.value.trim().toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        if (query === '') {
            productCards.forEach(card => card.style.display = 'flex');
            return;
        }
        
        productCards.forEach(card => {
            const name = card.querySelector('h3')?.innerText?.toLowerCase() || '';
            const desc = card.querySelector('.description')?.innerText?.toLowerCase() || '';
            const match = name.includes(query) || desc.includes(query);
            card.style.display = match ? 'flex' : 'none';
        });
    }

    if (btn) btn.addEventListener('click', search);
    if (input) {
        input.addEventListener('keyup', function(e) {
            if (this.value.includes('@') && this.value === localStorage.getItem('email')) {
                this.value = '';
            }
            search();
        });
    }
}

// =========================================================
// OVERLAYS
// =========================================================
function setupOverlays() {
    const cartOverlay = document.getElementById('cartOverlay');
    document.getElementById('cartIcon').addEventListener('click', function(e) {
        e.preventDefault();
        if (!isLoggedIn) { 
            showFeedback('⚠️ Please login to view cart', 'error');
            document.getElementById('createAccountPage').style.display = 'flex';
            document.getElementById('mainApp').style.display = 'none';
            return; 
        }
        cartOverlay.classList.add('open');
        renderCart();
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('closeCart').addEventListener('click', function() {
        cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });
    cartOverlay.addEventListener('click', function(e) { if (e.target === this) { cartOverlay.classList.remove('open');
            document.body.style.overflow = ''; } });

    const wishlistOverlay = document.getElementById('wishlistOverlay');
    document.getElementById('wishlistIcon').addEventListener('click', function(e) {
        e.preventDefault();
        if (!isLoggedIn) { 
            showFeedback('⚠️ Please login to view wishlist', 'error');
            document.getElementById('createAccountPage').style.display = 'flex';
            document.getElementById('mainApp').style.display = 'none';
            return; 
        }
        wishlistOverlay.classList.add('open');
        renderWishlist();
        document.body.style.overflow = 'hidden';
    });
    document.getElementById('closeWishlist').addEventListener('click', function() {
        wishlistOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });
    wishlistOverlay.addEventListener('click', function(e) { if (e.target === this) { wishlistOverlay.classList.remove('open');
            document.body.style.overflow = ''; } });
}

// =========================================================
// CONFIRM ORDER
// =========================================================
document.getElementById('confirmOrderBtn').addEventListener('click', function() {
    if (cart.length === 0) { showFeedback('⚠️ Your cart is empty!', 'error'); return; }
    const addressSelect = document.getElementById('orderAddressSelect');
    let html = '';
    const labels = { home: '🏠 Home', office: '🏢 Office', other: '📍 Other' };
    Object.keys(addresses).forEach(key => {
        const selected = key === 'home' ? 'selected' : '';
        html += `
            <div class="address-option ${selected}" data-address="${key}" onclick="selectOrderAddress('${key}')">
                <span>${labels[key] || key}</span>
                <p>${addresses[key]}</p>
            </div>
        `;
    });
    addressSelect.innerHTML = html;
    selectedAddress = 'home';
    document.getElementById('orderPopup').classList.add('open');
    document.body.style.overflow = 'hidden';
    goToOrderStep(1);
});

document.getElementById('closeOrderPopup').addEventListener('click', function() {
    document.getElementById('orderPopup').classList.remove('open');
    document.body.style.overflow = '';
});

function selectOrderAddress(key) {
    document.querySelectorAll('.address-option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`.address-option[data-address="${key}"]`).classList.add('selected');
    selectedAddress = key;
}

function selectPayment(method) {
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`.payment-option[data-method="${method}"]`).classList.add('selected');
    selectedPayment = method;
    document.getElementById('cardDetails').style.display = method === 'card' ? 'block' : 'none';
}

function goToOrderStep(step) {
    document.querySelectorAll('.order-step').forEach(s => s.style.display = 'none');
    document.getElementById('orderStep' + step).style.display = 'block';
}

function placeOrder() {
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (couponApplied) total = total - couponDiscount;
    const orderId = 'EL' + Date.now().toString().slice(-6);
    const addressDetail = addresses[selectedAddress] || addresses['home'];

    document.getElementById('successOrderId').textContent = orderId;
    document.getElementById('successDate').textContent = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('successAmount').textContent = '₹' + total.toLocaleString('en-IN');
    document.getElementById('successPayment').textContent = selectedPayment === 'card' ? 'Credit/Debit Card' :
        selectedPayment === 'netbanking' ? 'Net Banking' :
        selectedPayment === 'upi' ? 'UPI' : 'Cash on Delivery';
    document.getElementById('successAddress').textContent = addressDetail;

    document.getElementById('orderPopup').classList.remove('open');
    document.getElementById('successPopup').classList.add('open');
    launchConfetti();
    cart = [];
    updateCart();
    renderCart();
}

// =========================================================
// SUCCESS POPUP
// =========================================================
function closeSuccess() {
    document.getElementById('successPopup').classList.remove('open');
    document.body.style.overflow = '';
    document.querySelector('[data-section="home"]').click();
}

function closeSuccessAndGoProfile() {
    document.getElementById('successPopup').classList.remove('open');
    document.body.style.overflow = '';
    document.querySelector('[data-section="profile"]').click();
}

function downloadInvoice() {
    showFeedback('📥 Invoice downloaded! (Demo)', 'success');
}

// =========================================================
// CONFETTI
// =========================================================
function launchConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    const colors = ['#1E40AF', '#60A5FA', '#FBBF24', '#34D399', '#EC4899', '#F97316'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = (Math.random() * 8 + 4) + 'px';
        confetti.style.height = (Math.random() * 8 + 4) + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        confetti.style.animationDelay = (Math.random() * 1.5) + 's';
        container.appendChild(confetti);
    }
    setTimeout(() => { container.remove(); }, 4000);
}

// =========================================================
// CHATBOT - 10 TOPICS
// =========================================================
function setupChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const container = document.getElementById('chatbotContainer');
    const close = document.getElementById('chatbotClose');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');
    const messages = document.getElementById('chatbotMessages');
    const quickReplies = document.getElementById('chatbotQuickReplies');

    quickReplies.innerHTML = chatbotTopics.map(topic => `
        <button class="quick-reply" data-msg="${topic.label}">${topic.icon} ${topic.label}</button>
    `).join('');

    const botResponses = {};
    chatbotTopics.forEach(topic => {
        botResponses[topic.label] = topic.response;
    });

    toggle.addEventListener('click', function() { container.classList.toggle('open'); });
    close.addEventListener('click', function() { container.classList.remove('open'); });

    function addMessage(text, type) {
        const div = document.createElement('div');
        div.className = 'chatbot-msg ' + type;
        div.innerHTML = `<p>${text}</p>`;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        addMessage(text, 'user');
        input.value = '';
        setTimeout(() => {
            let response = 'I\'ll connect you to a human agent shortly! 🤖';
            for (const [key, value] of Object.entries(botResponses)) {
                if (text.includes(key) || text.includes(key.split(' ')[0])) { response = value; break; }
            }
            addMessage(response, 'bot');
        }, 500);
    }

    send.addEventListener('click', sendMessage);
    input.addEventListener('keypress', function(e) { if (e.key === 'Enter') sendMessage(); });

    document.querySelectorAll('.quick-reply').forEach(btn => {
        btn.addEventListener('click', function() {
            const msg = this.dataset.msg;
            addMessage(msg, 'user');
            setTimeout(() => {
                const response = botResponses[msg] || 'I\'ll connect you to a human agent shortly! 🤖';
                addMessage(response, 'bot');
            }, 500);
        });
    });
}

// =========================================================
// FEEDBACK
// =========================================================
function showFeedback(message, type = 'success') {
    const existing = document.querySelector('.feedback-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'feedback-toast';
    const color = type === 'success' ? 'var(--green)' : type === 'error' ? '#EF4444' : type === 'info' ? 'var(--secondary)' : 'var(--accent)';
    toast.style.cssText = `
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
        background: ${color}; color: #fff; padding: 12px 24px; border-radius: 8px;
        font-weight: 600; box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 9999; animation: fadeIn 0.3s ease; max-width: 90%; text-align: center;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300); }, 2500);
}

// =========================================================
// INIT
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 GadgetPoint Day 15 - Final');
    setupPasswordToggle();
    checkAccount();
    initSlider();
    setupNavigation();
    renderProducts('all', 'all', 'default');
    setupCategoryTabs();
    setupFilters();
    setupOfferTabs();
    setupProfileTabs();
    setupSearch();
    setupOverlays();
    setupChatbot();
    setupDownToTop();
    updateCart();
    updateWishlist();
    console.log(`📦 ${products.length} products loaded`);
    console.log(`🛒 ${cart.length} items in cart`);
    console.log(`❤️ ${wishlist.length} items in wishlist`);
    console.log(`🔐 Logged in: ${isLoggedIn}`);
});
