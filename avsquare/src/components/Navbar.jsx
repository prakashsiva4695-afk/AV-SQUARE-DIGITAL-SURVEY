import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';
import logo from "../assets/images/final.png"
// import darklogo from "../assets/images/logo.png"


const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner container">
        {/* <Link to="/" className="navbar__logo">
          <span className="navbar__logo-av">AV²</span>
          <span className="navbar__logo-text">SQUARE<br /><em>DIGITAL SURVEY</em></span>
        </Link> */}
        <img src={logo} className='img-fluid logoimage'/>

          {/* {theme === 'light' ? (
        <img src={logo} className='img-fluid logoimage'/>
      ):(
        <img src={darklogo} className='img-fluid logoimage'/>

        )} */}

        <ul className="navbar__links">
          {navLinks.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>
          <Link to="/contact" className="btn btn-primary navbar__cta">Get a Quote</Link>
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--active' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`navbar__mobile-link ${location.pathname === l.to ? 'active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24, alignSelf: 'flex-start' }}>
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
