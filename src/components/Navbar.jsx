import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academyConfig } from '../config/academyConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, Menu, X, Globe, Phone, MapPin, Compass } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLanguage, t, isRTL, ui } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#courses", label: ui.navCourses },
    { href: "#benefits", label: ui.navBenefits },
    { href: "#process", label: ui.navProcess },
    { href: "#faq", label: ui.navFaq },
    { href: "#contact", label: ui.navContact },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = getWhatsAppUrl(academyConfig.whatsappMessages.general[lang], lang);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3' 
        : 'bg-slate-900/80 backdrop-blur-sm py-4 border-b border-slate-800/40'
    }`}>
      {/* Top micro bar for Fez location & WhatsApp quick line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden md:flex items-center justify-between text-xs text-slate-300 border-b border-slate-800/50 pb-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-400 font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t(academyConfig.academy.neighborhood)} - {t(academyConfig.academy.city)}</span>
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">{t(academyConfig.contact.openingHours)}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {ui.onlineBadge}
          </span>
          <a 
            href={`tel:${academyConfig.contact.landlineDisplay}`}
            className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-300"
          >
            <Phone className="w-3 h-3" />
            <span>{academyConfig.contact.landlineDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-md shadow-amber-950/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <polygon points="12 6 13.5 9 17 9.5 14.5 12 15 15.5 12 13.8 9 15.5 9.5 12 7 9.5 10.5 9" fill="#09172a" stroke="#09172a" strokeWidth="0.5"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold tracking-tight text-white font-serif">
                  {t(academyConfig.academy.shortName)}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  FÈS
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:block">
                {t(academyConfig.academy.tagline)}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label={`Changer de langue vers ${ui.changeLang}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{ui.changeLang}</span>
            </button>

            {/* Direct WhatsApp Action Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter l'académie sur WhatsApp"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-950/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">{ui.whatsappDirect}</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800 space-y-2 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 px-3">
              <span className="flex items-center gap-1.5 text-amber-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t(academyConfig.academy.neighborhood)}</span>
              </span>
              <span>{academyConfig.contact.phoneDisplay}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
