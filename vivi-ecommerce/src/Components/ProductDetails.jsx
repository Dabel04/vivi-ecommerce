import React from 'react'

function ProductDetails() {
  return (
    <>
    {/* Cart Sidebar */}
    <div id="cartOverlay" className="cart-overlay">
        <div className="cart-sidebar">
            <div className="cart-header">
                <h3>Your Cart (<span id="cartCount">0</span>)</h3>
                <button className="close-cart" onclick="closeCart()">×</button>
            </div>
            
            <div className="cart-items" id="cartItems">
                <p className="empty-cart">Your cart is empty</p>
            </div>
            
            <div className="cart-footer">
                <div className="cart-total">
                    <strong>Total: $<span id="cartTotal">0.00</span></strong>
                </div>
                <button className="checkout-btn" onclick="proceedToCheckout()">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </div>

    <header className="nav">
        <div className="logo">
            {/* <a href="index.html" style={{color: 'inherit' text-decoration: 'none'}}>Mixtas</a> */}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onclick="toggleMobileMenu()">
            <span></span>
            <span></span>
            <span></span>
        </button>

        {/* Original Navigation Structure */}
        <nav className="menu">
            <a href="index.html">Home</a>
            <a href="index.html#shop">Shop</a>
            <a href="index.html#new-arrivals">New Arrivals</a>
            <a href="index.html#blog">Blog</a>
            <a href="index.html#contact">Contact Us</a>
        </nav>
        
        <div className="icons">
            <div className="small icon-btn search-btn" onclick="toggleSearch()">🔍</div>
            <div className="small icon-btn favorite-btn" onclick="toggleFavorites()">
                ♡ <span className="favorite-count">0</span>
            </div>
            <div className="small icon-btn">👤</div>
            <div className="badge icon-btn cart-btn" onclick="openCart()">0</div>
        </div>
        
        {/* Search Bar */}
        <div className="search-bar" id="searchBar">
            <input type="text" placeholder="Search products..." id="searchInput"/>
            <button className="search-close" onclick="toggleSearch()">×</button>
        </div>
    </header>

    {/* Mobile Menu Overlay */}
    <div className="mobile-menu-overlay" id="mobileMenuOverlay">
        <nav className="mobile-menu">
            <a href="index.html" onclick="closeMobileMenu()">Home</a>
            <a href="index.html#shop" onclick="closeMobileMenu()">Shop</a>
            <a href="index.html#new-arrivals" onclick="closeMobileMenu()">New Arrivals</a>
            <a href="index.html#blog" onclick="closeMobileMenu()">Blog</a>
            <a href="index.html#contact" onclick="closeMobileMenu()">Contact Us</a>
            
            <div className="mobile-menu-icons">
                <div className="icon-btn" onclick="toggleSearch(); closeMobileMenu();">🔍 Search</div>
                <div className="icon-btn" onclick="toggleFavorites(); closeMobileMenu();">♡ Favorites (<span className="favorite-count-mobile">0</span>)</div>
                <div className="icon-btn" onclick="closeMobileMenu();">👤 Account</div>
                <div className="icon-btn" onclick="openCart(); closeMobileMenu();">🛒 Cart (<span className="cart-badge-mobile">0</span>)</div>
            </div>
        </nav>
    </div>

    {/* Product Details Section */}
    <section className="product-details-section">
        <div className="container">
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <a href="index.html">Home</a> / 
                <a href="index.html#new-arrivals">New Arrivals</a> / 
                <span id="breadcrumb-product">Product</span>
            </div>

            <div className="product-details">
                {/* Product Images */}
                <div className="product-images">
                    <div className="main-image">
                        <img id="mainProductImage" src="" alt="Product Image" />
                    </div>
                    <div className="image-thumbnails" id="imageThumbnails">
                        {/* Thumbnails will be populated by JavaScript */}
                    </div>
                </div>

                {/* Product Info */}
                <div className="product-info">
                    <h1 id="productTitle">Product Title</h1>
                    <div className="price-section">
                        <span className="current-price" id="currentPrice">$0.00</span>
                        <span className="original-price" id="originalPrice"></span>
                        <span className="discount-badge" id="discountBadge"></span>
                    </div>
                    
                    <div className="rating">
                        <div className="stars">
                            ⭐⭐⭐⭐⭐
                        </div>
                        <span className="review-count">(128 reviews)</span>
                    </div>

                    <p className="product-description" id="productDescription">
                        Product description will appear here...
                    </p>

                    {/* Size Selection */}
                    <div className="option-section">
                        <label className="option-label">Size:</label>
                        <div className="size-options" id="sizeOptions">
                            {/* Size options will be populated by JavaScript */}
                        </div>
                    </div>

                    {/* Color Selection */}
                    <div className="option-section">
                        <label className="option-label">Color:</label>
                        <div className="color-options" id="colorOptions">
                            {/* Color options will be populated by JavaScript */}
                        </div>
                    </div>

                    {/* Quantity Selection */}
                    <div className="option-section">
                        <label className="option-label">Quantity:</label>
                        <div className="quantity-selector">
                            <button className="quantity-btn" onclick="decreaseQuantity()">-</button>
                            <input type="number" id="quantity" value="1" min="1" max="10"/>
                            <button className="quantity-btn" onclick="increaseQuantity()">+</button>
                        </div>
                        <span className="stock-info" id="stockInfo">In Stock</span>
                    </div>

                    {/* Add to Cart */}
                    <div className="action-buttons">
                        <button className="add-to-cart-btn" onclick="addToCartFromDetails()">
                            Add to Cart
                        </button>
                        <button className="buy-now-btn" onclick="buyNow()">
                            Buy Now
                        </button>
                        <button className="wishlist-btn" onclick="addToWishlist()">
                            ♡ Add to Wishlist
                        </button>
                    </div>

                    {/* Product Features */}
                    <div className="product-features">
                        <div className="feature">
                            <strong>✓ Free Shipping</strong> on orders over $50
                        </div>
                        <div className="feature">
                            <strong>✓ 30-Day Returns</strong> easy returns policy
                        </div>
                        <div className="feature">
                            <strong>✓ Secure Payment</strong> protected by encryption
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Tabs */}
            <div className="product-tabs">
                <div className="tab-headers">
                    <button className="tab-header active" onclick="openTab('description')">Description</button>
                    <button className="tab-header" onclick="openTab('specifications')">Specifications</button>
                    <button className="tab-header" onclick="openTab('reviews')">Reviews</button>
                    <button className="tab-header" onclick="openTab('shipping')">Shipping & Returns</button>
                </div>

                <div className="tab-content">
                    <div id="description" className="tab-pane active">
                        <h3>Product Description</h3>
                        <p id="fullDescription">Full product description will appear here...</p>
                    </div>

                    <div id="specifications" className="tab-pane">
                        <h3>Product Specifications</h3>
                        <div className="specs-grid" id="specsGrid">
                            {/* Specifications will be populated by JavaScript */}
                        </div>
                    </div>

                    <div id="reviews" className="tab-pane">
                        <h3>Customer Reviews</h3>
                        <div className="reviews-summary">
                            <div className="average-rating">
                                <div className="rating-score">4.8</div>
                                <div className="rating-stars">⭐⭐⭐⭐⭐</div>
                                <div className="rating-count">Based on 128 reviews</div>
                            </div>
                        </div>
                        <div className="reviews-list">
                            {/* Reviews will be populated dynamically */}
                            <div className="review">
                                <div className="review-header">
                                    <span className="reviewer">John D.</span>
                                    <span className="review-date">March 15, 2024</span>
                                </div>
                                <div className="review-rating">⭐⭐⭐⭐⭐</div>
                                <p className="review-text">Excellent quality and perfect fit! Highly recommended.</p>
                            </div>
                        </div>
                    </div>

                    <div id="shipping" className="tab-pane">
                        <h3>Shipping & Returns</h3>
                        <div className="shipping-info">
                            <h4>Shipping Information</h4>
                            <ul>
                                <li>Free standard shipping on orders over $50</li>
                                <li>Express shipping available for $9.99</li>
                                <li>Delivery within 3-5 business days</li>
                                <li>International shipping available</li>
                            </ul>
                            
                            <h4>Return Policy</h4>
                            <ul>
                                <li>30-day return policy</li>
                                <li>Items must be in original condition</li>
                                <li>Free returns for store credit</li>
                                <li>Refunds processed within 5 business days</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="related-products">
                <h2>You May Also Like</h2>
                <div className="related-grid" id="relatedGrid">
                    {/* Related products will be populated by JavaScript */}
                </div>
            </div>
        </div>
    </section>

        {/* Store Features */}
    <section className="store-features">
        <div className="features-grid">
            <div className="feature-item">
                <div className="feature-icon">🚚</div>
                <h4>Free Shipping</h4>
                <p>Free delivery on orders over $50</p>
            </div>
            <div className="feature-item">
                <div className="feature-icon">↩️</div>
                <h4>Easy Returns</h4>
                <p>30-day return policy</p>
            </div>
            <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <h4>Secure Payment</h4>
                <p>100% secure payment processing</p>
            </div>
            <div className="feature-item">
                <div className="feature-icon">💝</div>
                <h4>Quality Guarantee</h4>
                <p>Premium quality products</p>
            </div>
        </div>
    </section>

    {/* Newsletter Section */}
    <section className="newsletter">
        <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Subscribe to get special offers, free giveaways, and new arrivals</p>
            <form className="newsletter-form" onsubmit="subscribeNewsletter(event)">
                <input type="email" placeholder="Enter your email" required/>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>

    {/* Footer */}
    <footer className="footer">
        <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
                <h3>Mixtas</h3>
                <p>Discover contemporary fashion crafted for modern comfort and style. We bring you the latest trends with quality you can trust.</p>
                <div className="social-links">
                    <a href="#" className="social-link" aria-label="Facebook">📘</a>
                    <a href="#" className="social-link" aria-label="Instagram">📷</a>
                    <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                    <a href="#" className="social-link" aria-label="Pinterest">📌</a>
                </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html#shop">Shop</a></li>
                    <li><a href="index.html#new-arrivals">New Arrivals</a></li>
                    <li><a href="index.html#blog">Blog</a></li>
                    <li><a href="index.html#contact">Contact Us</a></li>
                </ul>
            </div>

            {/* Customer Service */}
            <div className="footer-section">
                <h4>Customer Service</h4>
                <ul className="footer-links">
                    <li><a href="#">Shipping Information</a></li>
                    <li><a href="#">Returns & Exchanges</a></li>
                    <li><a href="#">Size Guide</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Track Your Order</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
                <h4>Contact Us</h4>
                <ul className="contact-info">
                    <li>
                        <span className="icon">📍</span>
                        <span>123 Fashion Street, Style City, SC 12345</span>
                    </li>
                    <li>
                        <span className="icon">📞</span>
                        <span>+1 (555) 123-4567</span>
                    </li>
                    <li>
                        <span className="icon">✉️</span>
                        <span>hello@mixtas.com</span>
                    </li>
                    <li>
                        <span className="icon">🕒</span>
                        <span>Mon-Fri: 9AM-6PM EST</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="footer-bottom-content">
                <div className="copyright">
                    &copy; 2024 Mixtas. All rights reserved.
                </div>
                <ul className="footer-bottom-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
                <div className="payment-methods">
                    <span>We Accept:</span>
                    <div className="payment-icons">
                        <div className="payment-icon">VISA</div>
                        <div className="payment-icon">MC</div>
                        <div className="payment-icon">PP</div>
                        <div className="payment-icon">AE</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    {/* Back to Top Button */}
    <button className="back-to-top" onclick="scrollToTop()" aria-label="Back to top">↑</button>
    </>
  )
}

export default ProductDetails