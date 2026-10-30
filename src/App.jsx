import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Benefits from './components/Benefits';
import RegistrationProcess from './components/RegistrationProcess';
import InquiryBuilder from './components/InquiryBuilder';
import FAQ from './components/FAQ';
import LocationAndContact from './components/LocationAndContact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <Courses />
          <Benefits />
          <RegistrationProcess />
          <InquiryBuilder />
          <FAQ />
          <LocationAndContact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Sticky WhatsApp Floating Trigger */}
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
