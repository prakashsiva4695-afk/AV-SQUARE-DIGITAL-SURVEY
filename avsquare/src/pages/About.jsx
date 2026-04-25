import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './Page.css';

const TEAM = [
  { name: 'Aravind V.', role: 'Founder & Lead Surveyor', initials: 'AV' },
  { name: 'Vijay Kumar', role: 'GIS Analyst', initials: 'VK' },
  { name: 'Meena S.', role: 'Drone Operations Lead', initials: 'MS' },
  { name: 'Karthik R.', role: 'Survey Technician', initials: 'KR' },
];

const MILESTONES = [
  { year: 'Apr 2024', event: 'Company incorporated in Tamil Nadu' },
  { year: 'May 2024', event: 'First topographic survey completed in Coimbatore' },
  { year: 'Jul 2024', event: 'Drone mapping unit established' },
  { year: 'Oct 2024', event: 'GIS division launched for spatial analytics' },
  { year: 'Jan 2025', event: 'Expanded operations to 5 districts' },
  { year: '2025+', event: 'Targeting statewide coverage and DGPS certification' },
];

export default function About() {
  useReveal();
  return (
    <main className="page">
      {/* Hero Banner */}
      <div className="page__banner">
        <div className="page__banner-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=1400&q=80)` }} />
        <div className="page__banner-overlay" />
        <div className="container page__banner-content">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Company</p>
          <h1 className="page__banner-title">ABOUT US</h1>
          <p className="page__banner-sub">Precision. Innovation. Integrity.</p>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about-page__story">
            <div className="reveal">
              <p className="section-label">Our Foundation</p>
              <h2 className="section-title">OUR<br />STORY</h2>
            </div>
            <div className="about-page__story-body reveal delay-2">
              <p>AV Square Digital Survey was incorporated on <strong>22 April 2024</strong> in Tamil Nadu with a singular mission: to modernize land surveying using cutting-edge digital tools and rigorous engineering standards.</p>
              <p>Founded by a team of certified surveyors and GIS professionals, we recognized that traditional surveying methods were leaving value on the table. Drone photogrammetry, RTK GNSS, and GIS analysis now allow us to deliver results that are faster, more accurate, and more actionable than ever before.</p>
              <p>In our first year alone, we completed surveys across 5 districts, covering over 2,000 acres of agricultural, residential, industrial, and coastal terrain.</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>Work With Us</Link>
            </div>
          </div>

          {/* Timeline */}
          <div className="about-page__timeline">
            <h2 className="section-title reveal" style={{ marginBottom: 48 }}>MILESTONES</h2>
            <div className="timeline">
              {MILESTONES.map((m, i) => (
                <div className={`timeline__item reveal delay-${(i % 3) + 1}`} key={i}>
                  <div className="timeline__year">{m.year}</div>
                  <div className="timeline__dot" />
                  <div className="timeline__event">{m.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="about-page__team">
            <p className="section-label reveal">People</p>
            <h2 className="section-title reveal delay-1">OUR TEAM</h2>
            <div className="team-grid">
              {TEAM.map((member, i) => (
                <div className={`team-card reveal delay-${(i % 4) + 1}`} key={member.name}>
                  <div className="team-card__avatar">{member.initials}</div>
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
