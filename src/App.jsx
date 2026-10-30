import React, { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { useLanguage } from "./context/useLanguage";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Benefits from "./components/Benefits";
import RegistrationProcess from "./components/RegistrationProcess";
import InquiryBuilder from "./components/InquiryBuilder";
import FAQ from "./components/FAQ";
import LocationAndContact from "./components/LocationAndContact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function AcademyPage() {
  const { lang } = useLanguage();
  const [selectedCourseId, setSelectedCourseId] = useState("fr-delf");
  return (
    <div className="academy-page">
      <a className="skip-link" href="#main">
        {lang === "ar" ? "انتقل إلى المحتوى" : "Aller au contenu"}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Courses onChooseCourse={setSelectedCourseId} />
        <Benefits />
        <RegistrationProcess />
        <InquiryBuilder
          selectedCourseId={selectedCourseId}
          onCourseChange={setSelectedCourseId}
        />
        <FAQ />
        <LocationAndContact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AcademyPage />
    </LanguageProvider>
  );
}
