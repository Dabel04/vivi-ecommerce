import React, { useState } from 'react';
import '../styles/productdetails.css';
import '../styles/style.css';
import { useParams } from 'react-router-dom';
import products from '../products.json';


function ProductDetails({updateCart}) { 
    const [activeTab, setActiveTab] = useState('description');
    const { Id } = useParams();
    const numericId = parseInt(Id)

    const product = products.find(p => p.id == numericId)

    if (!product) {
        return <h1>404 NOT FOUND{Id}</h1>
        
    }

    // --- added: active tab state and handler ---
  
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
      // optionally scroll into view or other actions
    };
    // --- end added ---
  return (
    <>
    <header className="nav">
        <div className="logo">
        </div>
        
        {/* Mobile Menu Toggle */}

        
        {/* Search Bar */}
        <div className="search-bar" id="searchBar">
            <input type="text" placeholder="Search products..." id="searchInput"/>
            <button className="search-close">×</button>
        </div>
    </header>

    {/* Mobile Menu Overlay */}
    <div className="mobile-menu-overlay" id="mobileMenuOverlay">
        <nav className="mobile-menu">
            <a href="index.html">Home</a>
            <a href="index.html#shop">Shop</a>
            <a href="index.html#new-arrivals">New Arrivals</a>
            <a href="index.html#blog">Blog</a>
            <a href="index.html#contact">Contact Us</a>
            
            <div className="mobile-menu-icons">
                <div className="icon-btn">🔍 Search</div>
                <div className="icon-btn">♡ Favorites (<span className="favorite-count-mobile">0</span>)</div>
                <div className="icon-btn">👤 Account</div>
                <div className="icon-btn">🛒 Cart (<span className="cart-badge-mobile">0</span>)</div>
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
                        {/* <img id="mainProductImage" src="" alt="Product Image" /> */}
                    </div>
                    <div className="image-thumbnails" id="imageThumbnails">
                        {/* Thumbnails will be populated by JavaScript */}
                    </div>
                </div>

                {/* Product Info */}
                <div className="product-info">
                    <h1 id="productTitle">{product.name}</h1>
                    <div className="price-section">
                        <span className="current-price" id="currentPrice">${product.price}</span>
                        <span className="original-price" id="originalPrice">${product.originalPrice}</span>
                        <span className="discount-badge" id="discountBadge"></span>
                    </div>
                    
                    <div className="rating">
                        <div className="stars">
                            ⭐⭐⭐⭐⭐
                        </div>
                        <span className="review-count">(128 reviews)</span>
                    </div>

                    <p className="product-description" id="productDescription">
                        {product.description}
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
                            <button className="quantity-btn">-</button>
                            <input type="number" id="quantity" min="1" max="10"/>
                            <button className="quantity-btn">+</button>
                        </div>
                        <span className="stock-info" id="stockInfo">In Stock</span>
                    </div>

                    {/* Add to Cart */}
                    <div className="action-buttons">
                        <button className="add-to-cart-btn" onClick={() => updateCart(product)}>
                            Add to Cart
                        </button>
                        <button className="buy-now-btn">
                            Buy Now
                        </button>
                        <button className="wishlist-btn">
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
                    <button
                      className={`tab-header${activeTab === 'description' ? ' active' : ''}`}
                      onClick={() => handleTabClick('description')}
                    >
                      Description
                    </button>
                    <button
                      className={`tab-header${activeTab === 'specifications' ? ' active' : ''}`}
                      onClick={() => handleTabClick('specifications')}
                    >
                      Specifications
                    </button>
                    <button
                      className={`tab-header${activeTab === 'reviews' ? ' active' : ''}`}
                      onClick={() => handleTabClick('reviews')}
                    >
                      Reviews
                    </button>
                    <button
                      className={`tab-header${activeTab === 'shipping' ? ' active' : ''}`}
                      onClick={() => handleTabClick('shipping')}
                    >
                      Shipping & Returns
                    </button>
                </div>

                <div className="tab-content">
                    <div id="description" className={`tab-pane${activeTab === 'description' ? ' active' : ''}`}>
                        <h3>Product Description</h3>
                        <p id="fullDescription">{product.fullDescription}</p>
                    </div>

                    <div id="specifications" className={`tab-pane${activeTab === 'specifications' ? ' active' : ''}`}>
                        <h3>Product Specifications</h3>
                        <div className="specs-grid" id="specsGrid">
                            {/* Specifications will be populated by JavaScript */}
                        </div>
                    </div>

                    <div id="reviews" className={`tab-pane${activeTab === 'reviews' ? ' active' : ''}`}>
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

                    <div id="shipping" className={`tab-pane${activeTab === 'shipping' ? ' active' : ''}`}>
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

    </>
  )
}

export default ProductDetails