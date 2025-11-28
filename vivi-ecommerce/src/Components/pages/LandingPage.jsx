import React, { useState } from 'react'
import '../styles/style.css'
import products from '../products.json'
import Notification from '../pages/Notification'
import { Link } from 'react-router'
import { useEffect } from 'react'

function LandingPage() {
  const [cartItems, setCartItems] = useState([])
  const [notification, setNotification] = useState(null) 
  const [isActive, setIsActive] = useState(false)
  const [favorites, setFavorites] = useState(new Set())
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function showNotification(message) {
    setNotification(message)
  }

  function updateCart(item) {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === item.id)
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p)
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, image: item.image, quantity: 1 }]
    })
    showNotification(`${item.name} added to cart!`)
  }

  function removeFromCart(id) {
    setCartItems(prev => prev.filter(p => p.id !== id))
  }

  const toggleFavorite = (id) => {
    const updatedFavorites = new Set(favorites)
    if (updatedFavorites.has(id)) {
        updatedFavorites.delete(id)
    } else {
        updatedFavorites.add(id)
    }
    setFavorites(updatedFavorites)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleBackdropClick = (event) => {
      if (event.target.classList.contains('mobile-backdrop')) {
        closeMobileMenu()
      }
    }

    document.addEventListener('click', handleBackdropClick)
    return () => document.removeEventListener('click', handleBackdropClick)
  }, [])

  const cartNumber = cartItems.reduce((s, i) => s + (i.quantity || 0), 0)
  const cartTotal = cartItems.reduce((s, i) => s + (i.price || 0) * (i.quantity || 0), 0).toFixed(2)

  return (
    <>
        {/* Cart Sidebar */}
        <div id="cartOverlay" className={`cart-overlay ${isActive ? 'active' : ''}`}>
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

        {/* Mobile Menu Backdrop */}
        <div 
          className={`mobile-backdrop ${isMobileMenuOpen ? 'show' : ''}`}
          onClick={closeMobileMenu}
        ></div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'show' : ''}`}>
            <nav className="mobile-nav-menu">
                <a href="#" className="active" onClick={closeMobileMenu}>Home</a>
                <a href="#shop" onClick={closeMobileMenu}>Shop</a>
                <a href="#new-arrivals" onClick={closeMobileMenu}>New Arrivals</a>
                <a href="#about" onClick={closeMobileMenu}>About</a>
                <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            </nav>
        </div>

        {/* Bootstrap Navbar - Fixed */}
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
            <div className="container-fluid">
                <div className="mobile-left-section">
                    <button 
                        className="navbar-toggler navbar-toggler-custom d-lg-none" 
                        type="button"
                        onClick={toggleMobileMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand navbar-brand-custom" href="#">
                        Mixtas
                    </a>
                </div>

                <div className="d-lg-none d-flex align-items-center">
                    <button className="btn btn-link text-decoration-none p-2 position-relative" style={{color: 'var(--background-color)'}}>
                        👤
                    </button>
                    <button 
                        className="btn btn-link text-decoration-none p-2 position-relative" 
                        style={{color: 'var(--background-color)'}}
                        onClick={() => setIsActive(true)}
                    >
                        🛒
                        {cartNumber > 0 && (
                            <span className="custom-cart-badge">{cartNumber}</span>
                        )}
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav desktop-menu-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#new-arrivals">New Arrivals</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                    <div className="desktop-icons-right">
                        <button className="btn btn-link text-decoration-none p-2 position-relative" style={{color: 'var(--background-color)'}}>
                            ♡
                            {favorites.size > 0 && (
                                <span className="custom-cart-badge">{favorites.size}</span>
                            )}
                        </button>
                        
                        <button className="btn btn-link text-decoration-none p-2 position-relative" style={{color: 'var(--background-color)'}}>
                            👤
                        </button>
                        
                        <button 
                            className="btn btn-link text-decoration-none p-2 position-relative" 
                            style={{color: 'var(--background-color)'}}
                            onClick={() => setIsActive(true)}
                        >
                            🛒
                            {cartNumber > 0 && (
                                <span className="custom-cart-badge">{cartNumber}</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        {/* Mobile Search Bar - Below Navbar */}
        <div className="mobile-search-container">
            <div className="mobile-search-bar">
                <input 
                    type="text" 
                    placeholder="Search products..." 
                />
                <button type="button">
                    🔍
                </button>
            </div>
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
                       <Link to={`/products/${item.id}`}>                   
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
                      </Link>
                    </div>
                  ))}
              </div>      

=======
            {/* Products Section - Responsive (Grid on Desktop, Horizontal Scroll on Mobile) */}
            <div className="desktop-grid">
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
                        <button className="quick-view-btn" style={{background: '#2d5a3d'}}>Quick View</button>
                        <button className="add-to-cart" onClick={() => updateCart(item)} style={{background: '#e74c3c'}}>Add to Cart</button>
                    </div>
                    </div>
                ))}
            </div>

            <div className="mobile-scroll">
                <div className="scroll-container">
                    {products.map((item) => (
                        <div className="scroll-card" key={item.id}>
                        <img src={item.image} alt={item.description} />
                        <button 
                            className={`favorite-btn ${favorites.has(item.id) ? 'favorited' : ''}`}
                            onClick={() => toggleFavorite(item.id)}
                        >
                            {favorites.has(item.id) ? '❤️' : '♡'}
                        </button>
                        <div className="title">JACKETS<span className="small">{item.name}</span></div>
                        <div className="price">${item.price}</div>
                        <div className="card-actions">
                            <button className="quick-view-btn" style={{background: '#2d5a3d'}}>Quick View</button>
                            <button className="add-to-cart" onClick={() => updateCart(item)} style={{background: '#e74c3c'}}>Add to Cart</button>
                        </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="promo promo-large" style={{background: "#f0edd9"}}>
                <h3>Trendsetting Bags for Her</h3>
                <div className="discount-badge">50%</div>
                <a className="btn" href="#shop">Shop Now</a>
            </div>
        </section>

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