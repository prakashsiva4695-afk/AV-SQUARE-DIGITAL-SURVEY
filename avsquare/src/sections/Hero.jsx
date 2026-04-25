import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const STATS = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Satisfied Clients' },
  { value: '5', label: 'Districts Covered' },
  { value: '2024', label: 'Established' },
];

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const text = el.textContent;
    el.innerHTML = text.split('').map((c, i) =>
      c === ' ' ? ' ' : `<span style="animation-delay:${i * 0.04}s">${c}</span>`
    ).join('');
  }, []);

  return (
    <section className="hero">
      {/* Decorative compass ring */}
      <div className="hero__compass" aria-hidden="true">
        <div className="hero__compass-ring hero__compass-ring--outer" />
        <div className="hero__compass-ring hero__compass-ring--inner" />
        <div className="hero__compass-cross">
          <span /><span /><span /><span />
        </div>
        <div className="hero__compass-label hero__compass-label--n">N</div>
        <div className="hero__compass-label hero__compass-label--s">S</div>
        <div className="hero__compass-label hero__compass-label--e">E</div>
        <div className="hero__compass-label hero__compass-label--w">W</div>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="section-label">Est. April 22, 2024</p>
          <h1 className="hero__title" ref={titleRef}>
            AV SQUARE DIGITAL SURVEY
          </h1>
          <p className="hero__tagline">
            Precision land surveying powered by<br />
            drone technology & GIS intelligence.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Get a Quote
            </Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80"
              alt="Aerial land survey"
            />
            <div className="hero__image-overlay" />
            <div className="hero__image-badge">
              <span className="hero__image-badge-av">AV²</span>
              <span>Digital<br />Survey</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__stats container">
        {STATS.map(s => (
          <div className="hero__stat" key={s.label}>
            <span className="hero__stat-value">{s.value}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="hero__scroll-hint">
        <span />
        <p>Scroll</p>
      </div>
    </section>
  );
}
