import React from 'react';
import ContactForm from '../sections/ContactForm';
import { useReveal } from '../hooks/useReveal';
import './Page.css';

export default function Contact() {
  useReveal();
  return (
    <main className="page">
      <div className="page__banner">
        <div className="page__banner-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1400&q=80)` }} />
        <div className="page__banner-overlay" />
        <div className="container page__banner-content">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Talk to Us</p>
          <h1 className="page__banner-title">CONTACT</h1>
          <p className="page__banner-sub">Get your survey project started today.</p>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
