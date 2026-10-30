import React from "react";
import {
  Users,
  ClipboardCheck,
  BookOpenCheck,
  Clock,
  Building2,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { academyConfig } from "../config/academyConfig";
import { useLanguage } from "../context/useLanguage";
const icons = {
  Users,
  ClipboardCheck,
  BookOpenCheck,
  Clock,
  Building2,
  ShieldCheck,
};
export default function Benefits() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";
  return (
    <section id="benefits" className="section approach-section">
      <div className="container approach-layout">
        <div className="approach-intro">
          <p className="eyebrow">
            <span className="section-number">02 /</span>
            {ar ? "المنهجية" : "NOTRE APPROCHE"}
          </p>
          <h2>
            {ar ? (
              <>
                التعلّم الجيد،
                <br />
                <em>يبدأ بالاهتمام.</em>
              </>
            ) : (
              <>
                Bien apprendre,
                <br />
                <em>
                  ça commence
                  <br />
                  par être écouté.
                </em>
              </>
            )}
          </h2>
          <p className="section-intro">
            {ar
              ? "ممارسة فعالة، أفواج مصغرة وتواصل واضح مع العائلات. بيئة تساعدك على التقدم، خطوة بخطوة."
              : "De la pratique, des groupes à taille humaine et un dialogue ouvert avec les familles. Un cadre pour avancer, à votre rythme."}
          </p>
          <a href="#process" className="text-link">
            {ar ? "اكتشف مراحل التسجيل" : "Comment nous rejoindre"}
            <ArrowUpRight className="directional" aria-hidden="true" />
          </a>
          <div className="approach-seal" aria-hidden="true">
            <BookOpenCheck />
            <span>
              AL-ANDALOUS
              <br />
              FÈS
            </span>
          </div>
        </div>
        <div className="benefits-list">
          {academyConfig.benefits.map((benefit, i) => {
            const Icon = icons[benefit.iconName] || Users;
            return (
              <article className="benefit" key={benefit.id}>
                <span className="benefit-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <span className="benefit-index">0{i + 1}</span>
                  <h3>{t(benefit.title)}</h3>
                  <p>{t(benefit.description)}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="quality-note">
          <ShieldCheck aria-hidden="true" />
          <div>
            <h3>
              {ar
                ? "التزام بالجودة ومطابقة المناهج الرسمية"
                : "Engagement qualité & respect des programmes officiels"}
            </h3>
            <p>
              {ar
                ? "يخضع كل تسجيل لميثاق بيداغوجي واضح يحدد الحجم الساعي، والأهداف المسطرة، ومواعيد التقييمات الدورية."
                : "Chaque inscription fait l’objet d’une convention claire détaillant le volume horaire, les objectifs et les dates d’évaluations."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
