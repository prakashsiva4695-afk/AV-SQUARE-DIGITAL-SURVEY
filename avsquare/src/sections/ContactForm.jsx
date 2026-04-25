import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="section-label reveal">Reach Us</p>
          <h2 className="section-title reveal delay-1">GET A<br />FREE QUOTE</h2>
          <p className="contact__desc reveal delay-2">
            Have a survey project in mind? Get in touch — we'll get back within 24 hours
            with a detailed estimate.
          </p>

          <div className="contact__details reveal delay-3">
            <a href="tel:+919566864254" className="contact__detail">
              <div className="contact__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail-label">Mobile</span>
                <strong>+91 95668 64254</strong>
              </div>
            </a>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail-label">Location</span>
                <strong>Tamil Nadu, India</strong>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div>
                <span className="contact__detail-label">Incorporated</span>
                <strong>22 April 2024</strong>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="contact__map reveal delay-4">
            <iframe
              title="Tamil Nadu Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31549.29!2d78.6869!3d10.7905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa1f0bebf5f6bd%3A0x4b6a85ad8c9c2!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact__form-wrap reveal-right">
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message Received!</h3>
              <p>Thank you for reaching out. We'll be in touch within 24 hours with a detailed quote.</p>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <h3 className="contact__form-title">Project Enquiry</h3>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="contact__field">
                  <label>Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select service...</option>
                    <option>Topographic Survey</option>
                    <option>Boundary Survey</option>
                    <option>Drone Mapping</option>
                    <option>GIS Mapping</option>
                    <option>Land Subdivision</option>
                    <option>Construction Layout</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="contact__field">
                <label>Project Details *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your survey requirements — area size, location, purpose, timeline..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
