import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academyConfig } from '../config/academyConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, Globe, MapPin, Phone, Mail, ChevronUp } from 'lucide-react';

export default function Footer() {
  const { lang, toggleLanguage, t, ui } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: "#courses", label: ui.navCourses },
    { href: "#benefits", label: ui.navBenefits },
    { href: "#process", label: ui.navProcess },
    { href: "#faq", label: ui.navFaq },
    { href: "#contact", label: ui.navContact },
  ];

  const whatsappFooterUrl = getWhatsAppUrl(academyConfig.whatsappMessages.general[lang], lang);

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Presentation (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  <polygon points="12 6 13.5 9 17 9.5 14.5 12 15 15.5 12 13.8 9 15.5 9.5 12 7 9.5 10.5 9" fill="#09172a" stroke="#09172a" strokeWidth="0.5"/>
                </svg>
              </div>
              <div>
                <span className="text-lg font-extrabold text-white font-serif block">
                  {t(academyConfig.academy.name)}
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  {t(academyConfig.academy.tagline)}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {t(academyConfig.academy.subtagline)}
            </p>

            <div className="pt-2">
              <a
                href={whatsappFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp : {academyConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'fr' ? 'Navigation Rapide' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practical Info & Coordinates (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'fr' ? 'Coordonnées & Horaires' : 'معلومات الاتصال والمواعيد'}
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{t(academyConfig.academy.neighborhood)}, Fès</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Fixe : {academyConfig.contact.landlineDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{academyConfig.contact.email}</span>
              </div>
              <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                🕒 {t(academyConfig.contact.openingHours)}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {t(academyConfig.academy.name)}. {ui.rightsReserved}
            <span className="block sm:inline sm:ml-2 text-[11px] text-slate-400">
              ({ui.disclaimerDemo})
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs border border-slate-800 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{ui.changeLang}</span>
            </button>

            <button
              onClick={scrollToTop}
              aria-label="Remonter en haut de page"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
