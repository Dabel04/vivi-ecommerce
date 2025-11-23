// Basic e-commerce functionality
let cart = [];
let favorites = new Set();

// Cart functionality
function openCart() {
    document.getElementById('cartOverlay').classList.add('active');
    updateCartDisplay();
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('active');
}

function addToCart(productId) {
    const product = getProductById(productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartBadge();
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    updateCartBadge();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
            </div>
        `).join('');
    }
    
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartTotal.textContent = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartDisplay();
        updateCartBadge();
    }
}

function updateCartBadge() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-btn').textContent = totalItems;
}

// Favorites functionality
function toggleFavorite(button) {
    const productId = parseInt(button.closest('.card').querySelector('.add-to-cart').getAttribute('onclick').match(/\d+/)[0]);
    
    if (favorites.has(productId)) {
        favorites.delete(productId);
        button.classList.remove('favorited');
        button.textContent = '♡';
    } else {
        favorites.add(productId);
        button.classList.add('favorited');
        button.textContent = '❤️';
    }
    
    updateFavoritesCount();
}

function toggleFavorites() {
    alert(`You have ${favorites.size} favorite items`);
}

function updateFavoritesCount() {
    document.querySelector('.favorite-count').textContent = favorites.size;
}

// Search functionality
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');
    
    if (searchBar.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

// Product filtering
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            const products = document.querySelectorAll('.card');
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});

// Quick view modal
function quickView(productId) {
    const product = getProductById(productId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;">
            <div>
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 8px;">
            </div>
            <div>
                <h2 style="margin: 0 0 10px 0;">${product.name}</h2>
                <div class="price" style="font-size: 24px; margin-bottom: 15px;">$${product.price}</div>
                <p style="color: #666; margin-bottom: 20px;">${product.description}</p>
                <div class="card-actions">
                    <button class="add-to-cart" onclick="addToCart(${productId}); closeModal();" style="padding: 12px 24px; font-size: 16px;">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

// Newsletter
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    showNotification(`Thank you for subscribing with ${email}!`);
    event.target.reset();
}

// Utility functions
function getProductById(productId) {
    const products = {
        1: { id: 1, name: "Adidas X Pop Polo Shirt", price: 69.99, image: "./img/f3.jpg", description: "adidas X Pop Polo shirt, navy / blue" },
        2: { id: 2, name: "Adidas X Pop TRX Vintage", price: 69.99, image: "./img/f2.jpg", description: "adidas X Pop TRX Vintage, navy / white" },
        3: { id: 3, name: "Adidas X Pop Beckenbauer Track Jacket", price: 129.00, image: "./img/f1.jpg", description: "adidas X Pop Beckenbauer Track Jacket" },
        4: { id: 4, name: "Adidas X Pop Classic T-shirt", price: 120.00, image: "", description: "adidas X Pop Classic t-shirt, grey / navy" },
        5: { id: 5, name: "Adidas X Pop SL Cap", price: 59.00, image: "", description: "adidas X Pop SL Cap, navy / white" },
        6: { id: 6, name: "Butter Yard Pullover Hood", price: 120.00, image: "", description: "Butter Yard Pullover Hood, denim" },
        7: { id: 7, name: "Parra Rug Pull T-shirt", price: 60.00, image: "", description: "Parra Rug Pull t-shirt, white" },
        8: { id: 8, name: "Carhartt L/S Sweat", price: 130.00, image: "", description: "Carhartt L/S DeadKebab Knock Knock Sweat" }
    };
    return products[productId];
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #0f4f6e;
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        z-index: 4000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Close modals when clicking outside
document.addEventListener('click', function(event) {
    const cartOverlay = document.getElementById('cartOverlay');
    const modalOverlay = document.getElementById('productModal');
    
    if (event.target === cartOverlay) {
        closeCart();
    }
    
    if (event.target === modalOverlay) {
        closeModal();
    }
});

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    showNotification('Proceeding to checkout...');
    // In a real application, this would redirect to checkout page
}
// Mobile Menu Functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenuOverlay');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenuOverlay');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenuOverlay');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(event.target) && 
        !menuToggle.contains(event.target)) {
        closeMobileMenu();
    }
});

// Update mobile cart badge
function updateCartBadge() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-btn').textContent = totalItems;
    document.querySelector('.cart-badge-mobile').textContent = totalItems;
}

// Close mobile menu on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeMobileMenu();
    }
});

// Enhanced search functionality for mobile
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    const isActive = searchBar.classList.toggle('active');
    
    if (isActive) {
        document.getElementById('searchInput').focus();
        // Close mobile menu if open
        closeMobileMenu();
    }
}

// Update the existing updateCartBadge function to also update mobile badge
// Replace your existing updateCartBadge function with this:
function updateCartBadge() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-btn').textContent = totalItems;
    const mobileBadge = document.querySelector('.cart-badge-mobile');
    if (mobileBadge) {
        mobileBadge.textContent = totalItems;
    }
}