import React from 'react';
import './ServicesSection.css';

const SERVICES = [
  {
    id: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/>
        <path d="M12 3v18M3 7l9 4 9-4"/>
      </svg>
    ),
    title: 'Topographic Survey',
    desc: 'High-precision 3D terrain mapping with contour generation for engineering and planning projects.',
    tags: ['Contour Mapping', '3D Terrain', 'Civil Engineering'],
  },
  {
    id: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
      </svg>
    ),
    title: 'Boundary Survey',
    desc: 'Legal boundary demarcation with official documentation for property registration and disputes.',
    tags: ['Legal Demarcation', 'Title Survey', 'Property'],
  },
  {
    id: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Drone Mapping',
    desc: 'UAV-based aerial photogrammetry delivering orthophotos, DSMs, and point clouds at scale.',
    tags: ['UAV / Drone', 'Orthophoto', 'Point Cloud'],
  },
  {
    id: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'GIS Mapping',
    desc: 'Geographic Information Systems integration for spatial analysis, asset management, and urban planning.',
    tags: ['Spatial Analysis', 'GIS Data', 'Urban Planning'],
  },
  {
    id: '05',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Land Subdivision',
    desc: 'Accurate subdivision layouts for residential, commercial, and agricultural developments.',
    tags: ['Plot Layout', 'Subdivision', 'Development'],
  },
  {
    id: '06',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Construction Layout',
    desc: 'Setting-out services for buildings, roads, and infrastructure with millimeter precision.',
    tags: ['Setting Out', 'Infrastructure', 'Roads'],
  },
];

export default function ServicesSection() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__header">
          <div>
            <p className="section-label reveal">What We Do</p>
            <h2 className="section-title reveal delay-1">OUR<br />SERVICES</h2>
          </div>
          <p className="section-subtitle reveal delay-2">
            From traditional boundary surveying to cutting-edge drone mapping —
            we cover the full spectrum of digital land survey services.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div className={`service-card reveal delay-${(i % 3) + 1}`} key={s.id}>
              <div className="service-card__header">
                <span className="service-card__num">{s.id}</span>
                <div className="service-card__icon">{s.icon}</div>
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__tags">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
