import React, { useState } from 'react'
import '../styles/style.css'
import products from '../products.json'
import Notification from '../pages/Notification'

function LandingPage() {
  // store cart items with quantity so we know exactly what was added
  const [cartItems, setCartItems] = useState([]); // array of { id, name, price, image, quantity }
  const [notification, setNotification] = useState(null); 
  const [isActive, setIsActive] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  function showNotification(message) {
    setNotification(message);
  }

  // add item object (from products) to cart, increment quantity if present
  function updateCart(item) {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, image: item.image, quantity: 1 }];
    });
    showNotification(`${item.name} added to cart!`);
  }

  function removeFromCart(id) {
    setCartItems(prev => prev.filter(p => p.id !== id));
  }

  const toggleFavorite = (id) => {
    const updatedFavorites = new Set(favorites);
    if (updatedFavorites.has(id)) {
        updatedFavorites.delete(id);
    } else {
        updatedFavorites.add(id);
    }
    setFavorites(updatedFavorites);
  };

  const baseClass = 'cart-overlay'
  const openCart = isActive ? `active ${baseClass}` : baseClass

  // derived values
  const cartNumber = cartItems.reduce((s, i) => s + (i.quantity || 0), 0);
  const cartTotal = cartItems.reduce((s, i) => s + (i.price || 0) * (i.quantity || 0), 0).toFixed(2);

  return (
    <>
        {/* Cart Sidebar */}
        <div id="cartOverlay" className={openCart}>
            <div className="cart-sidebar">
                <div className="cart-header">
                    <h3>Your Cart (<span id="cartCount">{cartNumber}</span>)</h3>
                    <button className="close-cart" onClick={() => setIsActive(false)}>×</button>
                </div>
                
                <div className="cart-items" id="cartItems">
                    {cartItems.length === 0 ? (
                      <p className="empty-cart">Your cart is empty</p>
                    ) : (
                      cartItems.map(ci => (
                        <div className="cart-item" key={ci.id}>
                          <img src={ci.image} alt={ci.name} />
                          <div className='item-details'>
                            <h4>{ci.name}</h4>
                            <div className="small">Qty: {ci.quantity} • ${ (ci.price * ci.quantity).toFixed(2) }</div>
                          </div>
                          <button className="remove-item" onClick={() => removeFromCart(ci.id)}>x</button>
                        </div>
                      ))
                    )}
                </div>
                
                <div className="cart-footer">
                    <div className="cart-total">
                        <strong>Total: $<span id="cartTotal">{cartTotal}</span></strong>
                    </div>
                    <button className="checkout-btn">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>

        {/* Quick View Modal */}
        <div id="productModal" className="modal-overlay">
            <div className="modal-content">
                <button className="close-modal">×</button>
                <div className="modal-body" id="modalBody">
                    {/* Product details will be injected here */}
                </div>
            </div>
        </div>

        <header className="nav">
            <div className="logo">Mixtas</div>
            
            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className="menu" id="mainMenu">
                <a href="#" className="active">Home</a>
                <a href="#shop">Shop</a>
                <a href="#new-arrivals">New Arrivals</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact Us</a>
            </nav>
            
            <div className="icons">
                <div className="small icon-btn search-btn">🔍</div>
                <div className="small icon-btn favorite-btn">
                    ♡ <span className="favorite-count">{favorites.size}</span>
                </div>
                <div className="small icon-btn">👤</div>
                <div className="badge icon-btn cart-btn" onClick={() => setIsActive(true)}>{cartNumber}</div>
            </div>
            
            {/* Search Bar */}
            <div className="search-bar" id="searchBar">
                <input type="text" placeholder="Search products..." id="searchInput"/>
                <button className="search-close">×</button>
            </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div className="mobile-menu-overlay" id="mobileMenuOverlay">
            <nav className="mobile-menu">
                <a href="#" className="active">Home</a>
                <a href="#shop">Shop</a>
                <a href="#new-arrivals">New Arrivals</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact Us</a>
                
                <div className="mobile-menu-icons">
                    <div className="icon-btn">🔍 Search</div>
                    <div className="icon-btn">♡ Favorites</div>
                    <div className="icon-btn">👤 Account</div>
                    <div className="icon-btn">🛒 Cart (<span className="cart-badge-mobile">{cartNumber}</span>)</div>
                </div>
            </nav>
        </div>

        <section className="hero">
            <div className="hero-inner">
                <div className="hero-left">
                    <div className="label">URBAN EDGE</div>
                    <h1>Jackets for the<br/>Modern Man</h1>
                    <p className="small">Discover a fresh selection of jackets — crafted for contemporary comfort and style.</p>
                    <a href="#new-arrivals" className="cta">Discover Now</a>
                </div>
            </div>
        </section>

        <section className="section" id="new-arrivals">
            <h2>New Arrivals</h2>
            
            {/* Category Tabs */}
            <div className="tabs">
                <div className="tab active" data-category="all">ALL</div>
                <div className="tab" data-category="women">WOMEN</div>
                <div className="tab" data-category="men">MEN</div>
                <div className="tab" data-category="shoes">SHOES</div>
                <div className="tab" data-category="bags">BAGS</div>
                <div className="tab" data-category="accessories">ACCESSORIES</div>
            </div>

            {/* Product Grid */}
            <div className='grid'>
                {products.map((item) => (
                  <div className='card' key={item.id}>
                    <div>
                      <img src={item.image} alt={item.description} />
                      <button 
                        className={`favorite-btn ${favorites.has(item.id) ? 'favorited' : ''}`}
                        onClick={() => toggleFavorite(item.id)}
                      >
                        {favorites.has(item.id) ? '❤️' : '♡'}
                      </button>
                    </div>
                    <div className="title">JACKETS<span className="small">{item.name}</span></div>
                    <div className="price">${item.price}</div>
                    <div className="card-actions">
                        <button className="quick-view-btn">Quick View</button>
                        <button className="add-to-cart" onClick={() => updateCart(item)}>Add to Cart</button>
                    </div>
                  </div>
                ))}
            </div>

            <div className="promo promo-large" style={{background: "#f0edd9"}}>
                <h3>Trendsetting Bags for Her</h3>
                <div className="discount-badge">50%</div>
                <a className="btn" href="#shop">Shop Now</a>
            </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter">
            <div className="newsletter-content">
                <h3>Stay Updated</h3>
                <p>Subscribe to get special offers, free giveaways, and new arrivals</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" required/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
        {notification && (
            <Notification message={notification} onClose={() => setNotification(null)} />
        )}
    </>
  )
}

export default LandingPage