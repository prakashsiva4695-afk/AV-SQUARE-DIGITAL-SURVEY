import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-av">AV²</span>
            <span className="footer__logo-text">SQUARE<br /><em>DIGITAL SURVEY</em></span>
          </div>
          <p className="footer__tagline">
            Precision surveying powered by<br />cutting-edge digital technology.
          </p>
          <p className="footer__inc">Incorporated: 22 April 2024</p>
        </div>

        <div className="footer__col">
          <h4>Navigation</h4>
          <ul>
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map(p => (
              <li key={p}><Link to={`/${p === 'Home' ? '' : p.toLowerCase()}`}>{p}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {['Topographic Survey', 'Boundary Survey', 'Drone Mapping', 'Land Subdivision', 'GIS Mapping'].map(s => (
              <li key={s}><Link to="/services">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+919566864254">+91 95668 64254</a></li>
            <li><a href="mailto:info@avsquaresurvey.com">info@avsquaresurvey.com</a></li>
            <li className="footer__address">Tamil Nadu, India</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} AV Square Digital Survey. All rights reserved.</p>
        <p className="footer__credit">CIN: U74999TN2024</p>
      </div>
    </footer>
  );
}
