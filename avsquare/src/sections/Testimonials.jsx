import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Civil Engineer, Coimbatore',
    quote: 'AV Square delivered topographic data for our 120-acre industrial site with exceptional accuracy. Their drone mapping saved us weeks of fieldwork and the GIS outputs integrated seamlessly with our AutoCAD workflow.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Subramaniam',
    role: 'Property Developer, Chennai',
    quote: 'We needed an urgent boundary survey for a disputed plot in Madurai. Their team resolved ambiguities quickly with certified documentation. Professional, prompt, and precise.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anand Selvam',
    role: 'Agricultural Consultant, Erode',
    quote: 'The GIS mapping for our 850-acre agricultural holding was detailed beyond expectations. Contour accuracy was spot-on and the final report was presentation-ready.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Kavitha Rajan',
    role: 'Urban Planner, Salem',
    quote: 'From initial contact to final delivery, the team was responsive and knowledgeable. Their drone-based orthorectified maps are now a key part of our planning submissions.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[current];

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__layout">
          <div className="testimonials__left">
            <p className="section-label reveal">Client Voices</p>
            <h2 className="section-title reveal delay-1">WHAT OUR<br />CLIENTS SAY</h2>
            <div className="testimonials__dots reveal delay-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="testimonials__nav reveal delay-3">
              <button
                className="testimonials__nav-btn"
                onClick={() => setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                className="testimonials__nav-btn"
                onClick={() => setCurrent(c => (c + 1) % TESTIMONIALS.length)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="testimonials__right">
            <div className="testimonials__card" key={t.id}>
              <div className="testimonials__quote-mark">"</div>
              <p className="testimonials__text">{t.quote}</p>
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>

            <div className="testimonials__counter">
              <span className="testimonials__counter-current">{String(current + 1).padStart(2, '0')}</span>
              <span className="testimonials__counter-sep" />
              <span className="testimonials__counter-total">{String(TESTIMONIALS.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
