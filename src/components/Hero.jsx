import React from "react";
import { ArrowUpRight, ArrowDown, BookOpen, Check, MapPin } from "lucide-react";
import { academyConfig } from "../config/academyConfig";
import { useLanguage } from "../context/useLanguage";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function Hero() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";
  return (
    <section id="home" className="hero dark-section">
      <div className="hero-lines" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="small-line" />
              {ar ? "أكاديمية الأندلس · فاس" : "ACADÉMIE AL-ANDALOUS · FÈS"}
            </p>
            <h1>
              {ar ? (
                <>
                  الريادة في <em>تعلم اللغات،</em>
                  <br />
                  والدعم المدرسي بفاس.
                </>
              ) : (
                <>
                  L’excellence en
                  <br />
                  <em>langues vivantes.</em>
                  <br />
                  Et en soutien scolaire.
                </>
              )}
            </h1>
            <p className="hero-description">
              {t(academyConfig.academy.subtagline)}
            </p>
            <div className="hero-actions">
              <a
                className="button button-gold"
                href={getWhatsAppUrl(
                  academyConfig.whatsappMessages.diagnosticTest[lang],
                  lang,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ar ? "احجز اختبارك المجاني" : "Réserver mon test gratuit"}
                <ArrowUpRight className="directional" aria-hidden="true" />
              </a>
              <a className="hero-explore" href="#courses">
                {ar ? "اكتشف البرامج" : "Découvrir les programmes"}
                <ArrowDown aria-hidden="true" />
              </a>
            </div>
            <p className="hero-reassurance">
              <Check aria-hidden="true" />
              {ar
                ? "بدون التزام · توجيه حسب مستواك"
                : "Sans engagement. Un parcours adapté à votre niveau."}
            </p>
          </div>
          <div className="hero-visual">
            <div className="academy-arch">
              <div className="arch-caption">
                <BookOpen aria-hidden="true" />
                <span>
                  {ar
                    ? "لغات تفتح لك آفاقاً جديدة"
                    : "LES LANGUES OUVRENT DES HORIZONS"}
                </span>
              </div>
              <div className="language-art" aria-hidden="true">
                <span>
                  Bonjour<span className="art-period">.</span>
                </span>
                <span>
                  Hello<span className="art-period">.</span>
                </span>
                <span lang="ar" className="arabic-greeting">
                  مرحباً<span className="art-period">.</span>
                </span>
              </div>
              <div className="arch-footer">
                <span>
                  {ar ? "تعلم. تواصل. تقدم." : "Apprendre. Échanger. Avancer."}
                </span>
                <span className="arch-star" aria-hidden="true">
                  ✳
                </span>
              </div>
            </div>
            <div className="session-card">
              <span className="session-mark">
                <BookOpen aria-hidden="true" />
              </span>
              <div>
                <strong>
                  {ar ? "التسجيل مفتوح لدورات 2026" : "Sessions 2026 ouvertes"}
                </strong>
                <span>
                  <MapPin aria-hidden="true" />
                  {t(academyConfig.academy.neighborhood)}
                </span>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="hero-metrics">
          {academyConfig.metrics.map((metric, index) => (
            <div key={index} className="metric">
              <strong>
                {ar && index === 2
                  ? "مجاني"
                  : ar && index === 3
                    ? "6 / 7"
                    : metric.value}
              </strong>
              <div>
                <span>{t(metric.label)}</span>
                <small>{t(metric.sub)}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
