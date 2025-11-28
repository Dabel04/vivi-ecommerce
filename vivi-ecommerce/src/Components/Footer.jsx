import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Mixtas</h3>
          <p>Celebrating African heritage through contemporary fashion. Authentic pieces crafted with tradition and modern elegance.</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <span>📘</span>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <span>📷</span>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <span>🐦</span>
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <span>📽️</span>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Shop</h4>
          <ul className="footer-links">
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#dashikis">Dashikis</a></li>
            <li><a href="#ankara">Ankara Prints</a></li>
            <li><a href="#kente">Kente Collection</a></li>
            <li><a href="#accessories">Accessories</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#returns">Returns & Exchanges</a></li>
            <li><a href="#size-guide">Size Guide</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>
              <span className="icon">📧</span>
              <span>hello@mixtas.com</span>
            </li>
            <li>
              <span className="icon">📞</span>
              <span>+1 (555) 123-AFRICA</span>
            </li>
            <li>
              <span className="icon">📍</span>
              <span>African Heritage District<br/>Fashion Avenue, NY 10001</span>
            </li>
          </ul>
          
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address"/>
            <button type="submit">→</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © 2024 Mixtas. Celebrating African Heritage. All rights reserved.
          </div>
          <ul className="footer-bottom-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#accessibility">Accessibility</a></li>
          </ul>
          <div className="payment-methods">
            <span>We accept:</span>
            <div className="payment-icons">
              <div className="payment-icon">VISA</div>
              <div className="payment-icon">MC</div>
              <div className="payment-icon">PP</div>
              <div className="payment-icon">AMEX</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;