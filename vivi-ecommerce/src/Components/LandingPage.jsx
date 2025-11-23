import React from 'react'
import './style.css'
import f1 from './img/f1.jpg';
import f2 from './img/f2.jpg';
import f3 from './img/f3.jpg';

function LandingPage() {
  return (
    <>
    <header className="nav">
      <div className="logo">Mixtas</div>
      <nav className="menu">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Pages</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className="icons">
        <div className="small">🔍</div>
        <div className="small">♡</div>
        <div className="small">👤</div>
        <div className="badge">0</div>
      </div>
   </header>

   
  <section className="hero">
    <div className="hero-inner">
      <div className="hero-left">
        <div className="label">URBAN EDGE</div>
        <h1>Jackets for the<br/>Modern Man</h1>
        <p className="small">Discover a fresh selection of jackets — crafted for contemporary comfort and style.</p>
        <a href="#" className="cta">Discovery Now</a>
      </div>
    </div>
  </section>

  <section className="section">
    <h2>New Arrivals</h2>
    <div className="tabs">
      <div>WOMEN</div>
      <div>MEN</div>
      <div>SHOES</div>
      <div>BAGS</div>
      <div>ACCESSORIES</div>
    </div>

    <div className="grid">
      <div className="card">
        <div className="img"><img src={f3}/></div>
        <div className="title">JACKETS<span className="small">adidas X Pop Polo shirt, navy / blue</span></div>
        <div className="price">$69.99</div>
      </div>

      <div className="card">
        <div className="img"><img src={f2}/></div>
        <div className="title">JACKETS<span className="small">adidas X Pop TRX Vintage, navy / white</span></div>
        <div className="price">$69.99</div>
      </div>

      <div className="card">
        <div className="img"><img src={f1}/></div>
        <div className="title">JACKETS<span className="small">adidas X Pop Beckenbauer Track Jacket</span></div>
        <div className="price">$129.00</div>
      </div>

      <div className="card">
        <div className="img"><img src="/images/logo.png" alt="My logo" className="logo-img" /></div>
        <div className="title">JACKETS<span className="small">adidas X Pop ClassNameic t-shirt, grey / navy</span></div>
        <div className="price">$120.00</div>
      </div>

      <div className="card">
        <div className="img"><img src="/images/logo.png" alt="My logo" className="logo-img" /></div>
        <div className="title">JACKETS<span className="small">adidas X Pop SL Cap, navy / white</span></div>
        <div className="price">$59.00</div>
      </div>

      <div className="card">
        <div className="img"><img src="/images/logo.png" alt="My logo" className="logo-img" /></div>
        <div className="title">JACKETS<span className="small">Butter Yard Pullover Hood, denim</span></div>
        <div className="price">$120.00</div>
      </div>

      <div className="card">
        <div className="img"><img src="/images/logo.png" alt="My logo" className="logo-img" /></div>
        <div className="title">JACKETS<span className="small">Parra Rug Pull t-shirt, white</span></div>
        <div className="price">$60.00</div>
      </div>

      <div className="card">
        <div className="img"><img src="/images/logo.png" alt="My logo" className="logo-img" /></div>
        <div className="title">JACKETS<span className="small">Carhartt L/S DeadKebab Knock Knock Sweat</span></div>
        <div className="price">$130.00</div>
      </div>
    </div>

    <div className="promo-wrap">
      <div className="promo-left">
        <div className="promo" style={{background:"#f4f6f7"}}>
          <h3>Where Dreams Meet Couture</h3>
          <p className="small">Ethereal Elegance</p>
          <a className="btn" href="#">Shop Now</a>
        </div>
        <div className="promo" style={{background:"#fff"}}>
          <h3>Enchanting Styles for Every Woman</h3>
          <p className="small">Radiant Revere</p>
          <a className="btn" href="#">Shop Now</a>
        </div>
      </div>

      <div className="promo" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3>Trendsetting Bags for Her</h3>
        <div style={{fontSize:"48px",fontWeight:"700",margin:"12px 0"}}>50%</div>
        <a className="btn" href="#">Shop Now</a>
      </div>
    </div>
  </section>
    </>
  )
}

export default LandingPage