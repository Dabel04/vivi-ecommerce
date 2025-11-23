import React, { useState } from 'react'
import './style.css'
// import f1 from './img/f1.jpg';
// import f2 from './img/f2.jpg';
// import f3 from './img/f3.jpg';
import products from './products.json'

function LandingPage() {
  const [cartNumber, setCartNumber] = useState(0)
  // const [index, setIndex] = useState(0)

  function updateCart() {
    setCartNumber(cartNumber + 1)
  }

  console.log(products.id)

  return (
    <>
        {/* Cart Sidebar  */}
           {/* Cart Sidebar */}
    <div id="cartOverlay" className="cart-overlay">
        <div className="cart-sidebar">
            <div className="cart-header">
                <h3>Your Cart (<span id="cartCount">{cartNumber}</span>)</h3>
                <button className="close-cart">×</button>
            </div>
            
            <div className="cart-items" id="cartItems">
                <p className="empty-cart">Your cart is empty</p>
            </div>
            
            <div className="cart-footer">
                <div className="cart-total">
                    <strong>Total: $<span id="cartTotal">0.00</span></strong>
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
                ♡ <span className="favorite-count">0</span>
            </div>
            <div className="small icon-btn">👤</div>
            <div className="badge icon-btn cart-btn">0</div>
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
                <div className="icon-btn" >🔍 Search</div>
                <div className="icon-btn">♡ Favorites</div>
                <div className="icon-btn">👤 Account</div>
                <div className="icon-btn">🛒 Cart (<span className="cart-badge-mobile">0</span>)</div>
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
        <div className="grid">
            <div className="card" data-category="men">
                <div className="img">
                    <img src="./img/f3.jpg" alt="Adidas X Pop Polo Shirt"/>
                    <button className="favorite-btn">♡</button>
                </div>
                <div className="title">JACKETS<span className="small">adidas X Pop Polo shirt, navy / blue</span></div>
                <div className="price">$69.99</div>
                <div className="card-actions">
                    <button className="quick-view-btn">Quick View</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <div className="card" data-category="men">
                <div className="img">
                    <img src="./img/f2.jpg" alt="Adidas X Pop TRX Vintage"/>
                    <button className="favorite-btn">♡</button>
                </div>
                <div className="title">JACKETS<span className="small">adidas X Pop TRX Vintage, navy / white</span></div>
                <div className="price">$69.99</div>
                <div className="card-actions">
                    <button className="quick-view-btn">Quick View</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <div className="card" data-category="men">
                <div className="img">
                    <img src="./img/f1.jpg" alt="Adidas X Pop Beckenbauer Track Jacket"/>
                    <button className="favorite-btn">♡</button>
                </div>
                <div className="title">JACKETS<span className="small">adidas X Pop Beckenbauer Track Jacket</span></div>
                <div className="price">$129.00</div>
                <div className="card-actions">
                    <button className="quick-view-btn">Quick View</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <div className="card" data-category="women">
                <div className="img">
                    <div className="skeleton" style={{width:"100%", height:"140px"}}></div>
                    <button className="favorite-btn">♡</button>
                </div>
                <div className="title">JACKETS<span className="small">adidas X Pop classNameic t-shirt, grey / navy</span></div>
                <div className="price">$120.00</div>
                <div className="card-actions">
                    <button className="quick-view-btn" >Quick View</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <div className="card" data-category="accessories">
                <div className="img">
                    <div className="skeleton" style={{width:"100%", height:"140px"}}></div>
                    <button className="favorite-btn">♡</button>
                </div>
                <div className="title">JACKETS<span className="small">adidas X Pop SL Cap, navy / white</span></div>
                <div className="price">$59.00</div>
                <div className="card-actions">
                    <button className="quick-view-btn">Quick View</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <div className="card" data-category="women">
                <div className="img">
                    <div className="skeleton" style={{width:"100%", height:"140px"}}></div>
                    <button className="favorite-btn">♡</button>
                </div>
                <div className="title">JACKETS<span className="small">Butter Yard Pullover Hood, denim</span></div>
                <div className="price">$120.00</div>
                <div className="card-actions">
                    <button className="quick-view-btn">Quick View</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <div className="card" data-category="men">
                <div className="img">
                    <div className="skeleton" style={{width:"100%", height:"140px"}}></div>
                    <button className="favorite-btn">♡</button>
                <div className="sale-badge">SALE</div>
                </div>
                <div className="title">JACKETS<span className="small">Parra Rug Pull t-shirt, white</span></div>
                <div className="price">$60.00 <span className="original-price">$80.00</span></div>
                <div className="card-actions">
                    <button className="quick-view-btn">Quick View</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>

            <div className="card" data-category="men">
                <div className="img">
                    <div className="skeleton" style={{width:"100%", height:"140px"}}></div>
                    <button className="favorite-btn">♡</button>
                </div>
                <div className="title">JACKETS<span className="small">Carhartt L/S DeadKebab Knock Knock Sweat</span></div>
                <div className="price">$130.00</div>
                <div className="card-actions">
                    <button className="quick-view-btn">Quick View</button>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </div>
        </div>

        {/* Promotional Banners */}
        <div className="promo-wrap">
            <div className="promo-left">
                <div className="promo" style={{background:"#f8f5e6"}}>
                    <h3>Where Dreams Meet Couture</h3>
                    <p className="small">Ethereal Elegance</p>
                    <a className="btn" href="#shop">Shop Now</a>
                </div>
                <div className="promo" style={{background:"#fffcdc"}}>
                    <h3>Enchanting Styles for Every Woman</h3>
                    <p className="small">Radiant Revere</p>
                    <a className="btn" href="#shop">Shop Now</a>
                </div>
            </div>

            <div className="promo promo-large" style={{background: "#f0edd9"}}>
                <h3>Trendsetting Bags for Her</h3>
                <div className="discount-badge">50%</div>
                <a className="btn" href="#shop">Shop Now</a>
            </div>
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
    </>
  )
}

export default LandingPage