import React from 'react'
import { useState } from 'react'

function Header({cartNumber, cartTotal, cartItems}) {
    const [isActive, setIsActive] = useState(false)
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
                          {/* <button className="remove-item" onClick={() => removeFromCart(ci.id)}>x</button> */}
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

        {/* Bootstrap Navbar - Fixed */}
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
        <div className="container-fluid">
          <div className="mobile-left-section">
            <button 
                className="navbar-toggler navbar-toggler-custom d-lg-none" 
                type="button"
                // onClick={toggleMobileMenu}
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
                  {/* {
                  favorites.size > 0 && (
                      <span className="custom-cart-badge">{favorites.size}</span>
                  )} */}
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
    </>
  )
}

export default Header