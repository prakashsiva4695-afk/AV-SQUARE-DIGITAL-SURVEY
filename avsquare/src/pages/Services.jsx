import React from 'react';
import { Link } from 'react-router-dom';
import ServicesSection from '../sections/ServicesSection';
import { useReveal } from '../hooks/useReveal';
import './Page.css';

export default function Services() {
  useReveal();
  return (
    <main className="page">
      <div className="page__banner">
        <div className="page__banner-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=1400&q=80)` }} />
        <div className="page__banner-overlay" />
        <div className="container page__banner-content">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>What We Do</p>
          <h1 className="page__banner-title">SERVICES</h1>
          <p className="page__banner-sub">Modern digital survey solutions for every terrain.</p>
        </div>
      </div>
      <ServicesSection />
      <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: 0 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title reveal" style={{ marginBottom: 16 }}>READY TO START?</h2>
          <p className="section-subtitle reveal delay-1" style={{ margin: '0 auto 32px' }}>
            Contact us today for a free consultation and quote on your survey project.
          </p>
          <Link to="/contact" className="btn btn-primary reveal delay-2">Get a Free Quote</Link>
        </div>
      </section>
    </main>
  );
}
