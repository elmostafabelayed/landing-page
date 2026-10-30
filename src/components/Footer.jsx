import React from "react";
import { BookOpen, ArrowUp, ArrowUpRight, MessageCircle } from "lucide-react";
import { academyConfig } from "../config/academyConfig";
import { useLanguage } from "../context/useLanguage";
import { getWhatsAppUrl } from "../utils/whatsapp";
export default function Footer() {
  const { lang, t, ui, toggleLanguage } = useLanguage();
  const ar = lang === "ar";
  return (
    <footer className="site-footer dark-section">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="eyebrow">{t(academyConfig.academy.tagline)}</p>
            <h2>
              {ar ? (
                <>
                  مستقبلك يستحق
                  <br />
                  <em>أن تبدأ اليوم.</em>
                </>
              ) : (
                <>
                  La suite s’écrit
                  <br />
                  <em>avec vous.</em>
                </>
              )}
            </h2>
          </div>
          <a
            className="button button-gold"
            href={getWhatsAppUrl(
              academyConfig.whatsappMessages.general[lang],
              lang,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            {ui.ctaDiscussWhatsApp}
            <ArrowUpRight className="directional" aria-hidden="true" />
          </a>
        </div>
        <div className="footer-main">
          <a className="brand" href="#home">
            <span className="brand-mark">
              <BookOpen aria-hidden="true" />
            </span>
            <span className="brand-wordmark">
              <strong>{t(academyConfig.academy.shortName)}</strong>
              <small>{t(academyConfig.academy.city)}</small>
            </span>
          </a>
          <nav
            aria-label={ar ? "روابط أسفل الصفحة" : "Navigation de pied de page"}
          >
            {[
              ["courses", ui.navCourses],
              ["benefits", ui.navBenefits],
              ["process", ui.navProcess],
              ["faq", ui.navFaq],
              ["contact", ui.navContact],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="footer-phone"
            href={`tel:+${academyConfig.contact.whatsappNumber}`}
            dir="ltr"
          >
            {academyConfig.contact.phoneDisplay}
          </a>
        </div>
        <div className="footer-bottom">
          <div>
            <p>
              © {new Date().getFullYear()} {t(academyConfig.academy.name)}.{" "}
              {ui.rightsReserved}
            </p>
            <p className="demo-note">{ui.disclaimerDemo}</p>
          </div>
          <div className="footer-tools">
            <button
              onClick={toggleLanguage}
              lang={ar ? "fr" : "ar"}
              aria-label={ar ? "التبديل إلى الفرنسية" : "Passer en arabe"}
            >
              {ui.changeLang}
            </button>
            <a
              href="#home"
              aria-label={
                ar ? "العودة إلى أعلى الصفحة" : "Retour en haut de page"
              }
            >
              <ArrowUp aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
