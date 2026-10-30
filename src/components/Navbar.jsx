import React, { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Globe2,
  Menu,
  MessageCircle,
  X,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import { academyConfig } from "../config/academyConfig";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const headerRef = useRef(null);
  const ar = lang === "ar";
  const links = [
    ["courses", ar ? "البرامج" : "Nos programmes"],
    ["benefits", ar ? "المنهجية" : "Notre approche"],
    ["process", ar ? "التسجيل" : "L’inscription"],
    ["faq", ar ? "الأسئلة الشائعة" : "FAQ"],
    ["contact", ar ? "تواصل معنا" : "Nous trouver"],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 1200px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    media.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      media.removeEventListener("change", onResize);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="container header-inner">
        <a
          className="brand"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label={t(academyConfig.academy.name)}
        >
          <span className="brand-mark">
            <BookOpen aria-hidden="true" />
          </span>
          <span className="brand-wordmark">
            <strong>{t(academyConfig.academy.shortName)}</strong>
            <small>
              {ar ? "اللغات والدعم المدرسي" : "LANGUES & SOUTIEN SCOLAIRE"}
            </small>
          </span>
        </a>
        <nav
          className="desktop-nav"
          aria-label={ar ? "التنقل الرئيسي" : "Navigation principale"}
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="language-switch"
            onClick={() => {
              toggleLanguage();
              setOpen(false);
            }}
            aria-label={ar ? "التبديل إلى الفرنسية" : "Passer en arabe"}
          >
            <Globe2 aria-hidden="true" />
            <span lang={ar ? "fr" : "ar"}>{ar ? "FR" : "العربية"}</span>
          </button>
          <a
            className="button button-gold header-cta"
            href={getWhatsAppUrl(
              academyConfig.whatsappMessages.general[lang],
              lang,
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ar ? "تواصل عبر واتساب" : "Nous contacter sur WhatsApp"}
          >
            <MessageCircle aria-hidden="true" />
            <span>{ar ? "تواصل معنا" : "Parlons de votre projet"}</span>
          </a>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={
              ar
                ? open
                  ? "إغلاق القائمة"
                  : "فتح القائمة"
                : open
                  ? "Fermer le menu"
                  : "Ouvrir le menu"
            }
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        hidden={!open}
        aria-label={ar ? "قائمة التنقل" : "Menu de navigation"}
      >
        <div className="container">
          {links.map(([id, label], i) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              <span className="nav-number">0{i + 1}</span>
              {label}
              <ArrowUpRight className="directional" aria-hidden="true" />
            </a>
          ))}
          <p>
            <MapPin aria-hidden="true" />
            {t(academyConfig.academy.neighborhood)}
          </p>
        </div>
      </nav>
    </header>
  );
}
