import React from 'react';
import './AboutSection.css';

const VALUES = [
  { icon: '◎', title: 'Precision', desc: 'Sub-centimeter accuracy using RTK GNSS and total station instruments.' },
  { icon: '⬡', title: 'Innovation', desc: 'Drone photogrammetry and LiDAR for hard-to-reach terrain mapping.' },
  { icon: '◈', title: 'Integrity', desc: 'Every boundary, every contour, certified to legal and engineering standards.' },
];

export default function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__left">
          <p className="section-label reveal">Our Story</p>
          <h2 className="section-title reveal delay-1">SURVEY<br />REIMAGINED<br /><em>DIGITALLY</em></h2>
          <p className="about__body reveal delay-2">
            AV Square Digital Survey was incorporated on <strong>22 April 2024</strong> with a singular vision:
            to bring modern digital precision to land surveying in Tamil Nadu and beyond.
          </p>
          <p className="about__body reveal delay-3">
            Founded by certified survey engineers, we combine classical surveying discipline
            with next-generation tools — drone-based photogrammetry, RTK GPS, and GIS analysis —
            to deliver data that engineers, developers, and legal teams can truly rely on.
          </p>

          <div className="about__cert reveal delay-4">
            <div className="about__cert-badge">
              <span className="about__cert-year">2024</span>
              <span className="about__cert-label">Incorporated</span>
            </div>
            <div className="about__cert-badge">
              <span className="about__cert-year">DGPS</span>
              <span className="about__cert-label">Certified</span>
            </div>
            <div className="about__cert-badge">
              <span className="about__cert-year">GIS</span>
              <span className="about__cert-label">Enabled</span>
            </div>
          </div>
        </div>

        <div className="about__right">
          <div className="about__image-stack">
            <div className="about__image about__image--back reveal-right">
              <img
                src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=600&q=80"
                alt="Survey equipment"
              />
            </div>
            <div className="about__image about__image--front reveal-right delay-2">
              <img
                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=600&q=80"
                alt="Drone mapping"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about__values container">
        {VALUES.map((v, i) => (
          <div className={`about__value reveal delay-${i + 1}`} key={v.title}>
            <span className="about__value-icon">{v.icon}</span>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
