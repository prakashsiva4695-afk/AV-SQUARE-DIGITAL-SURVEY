import React, { useEffect } from 'react';
import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import Portfolio from '../sections/Portfolio';
import Testimonials from '../sections/Testimonials';
import ContactForm from '../sections/ContactForm';
import { useReveal } from '../hooks/useReveal';

export default function Home() {
  useReveal();
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Portfolio />
      <Testimonials />
      <ContactForm />
    </>
  );
}
