import React from 'react';
import Portfolio from '../sections/Portfolio';
import Testimonials from '../sections/Testimonials';
import { useReveal } from '../hooks/useReveal';
import './Page.css';

export default function Projects() {
  useReveal();
  return (
    <main className="page">
      <div className="page__banner">
        <div className="page__banner-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1400&q=80)` }} />
        <div className="page__banner-overlay" />
        <div className="container page__banner-content">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Portfolio</p>
          <h1 className="page__banner-title">PROJECTS</h1>
          <p className="page__banner-sub">Surveying excellence across Tamil Nadu.</p>
        </div>
      </div>
      <Portfolio />
      <Testimonials />
    </main>
  );
}
