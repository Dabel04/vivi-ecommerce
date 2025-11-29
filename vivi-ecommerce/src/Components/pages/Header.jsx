import React from 'react'

function Header({cartNumber}) {
  return (
    <>
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
                // onClick={() => setIsActive(true)}
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
                  // onClick={() => setIsActive(true)}
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