import React, { useState } from 'react';
import './Portfolio.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Coimbatore Industrial Zone',
    category: 'Topographic',
    area: '120 Acres',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=700&q=80',
    year: '2024',
  },
  {
    id: 2,
    title: 'Salem Residential Layout',
    category: 'Subdivision',
    area: '45 Acres',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    year: '2024',
  },
  {
    id: 3,
    title: 'Nilgiris Terrain Mapping',
    category: 'Drone',
    area: '300 Acres',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80',
    year: '2024',
  },
  {
    id: 4,
    title: 'Chennai Coastal Survey',
    category: 'Boundary',
    area: '18 Km',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80',
    year: '2025',
  },
  {
    id: 5,
    title: 'Erode Agricultural Survey',
    category: 'GIS',
    area: '850 Acres',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80',
    year: '2025',
  },
  {
    id: 6,
    title: 'Madurai Road Corridor',
    category: 'Layout',
    area: '32 Km',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80',
    year: '2025',
  },
];

const FILTERS = ['All', 'Topographic', 'Drone', 'Boundary', 'Subdivision', 'GIS', 'Layout'];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <section className="portfolio section" id="projects">
      <div className="container">
        <p className="section-label reveal">Our Work</p>
        <h2 className="section-title reveal delay-1">FEATURED<br />PROJECTS</h2>

        <div className="portfolio__filters reveal delay-2">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`portfolio__filter ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((p, i) => (
            <div className={`portfolio__card reveal delay-${(i % 3) + 1}`} key={p.id}>
              <div className="portfolio__card-img">
                <img src={p.img} alt={p.title} />
                <div className="portfolio__card-overlay">
                  <span className="portfolio__card-category">{p.category}</span>
                </div>
              </div>
              <div className="portfolio__card-body">
                <div className="portfolio__card-meta">
                  <span>{p.area}</span>
                  <span>{p.year}</span>
                </div>
                <h3>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
