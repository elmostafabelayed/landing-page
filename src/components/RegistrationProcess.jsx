import React from "react";
import { ArrowUpRight } from "lucide-react";
import { academyConfig } from "../config/academyConfig";
import { useLanguage } from "../context/useLanguage";
import { getWhatsAppUrl } from "../utils/whatsapp";
export default function RegistrationProcess() {
  const { lang, t } = useLanguage();
  const ar = lang === "ar";
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-heading heading-split">
          <div>
            <p className="eyebrow">
              <span className="section-number">03 /</span>
              {ar ? "خطوات التسجيل" : "L’INSCRIPTION, SIMPLEMENT"}
            </p>
            <h2>
              {ar ? (
                <>
                  خطوة أولى.
                  <br />
                  <em>أفق جديد.</em>
                </>
              ) : (
                <>
                  Un premier pas.
                  <br />
                  <em>Un nouvel horizon.</em>
                </>
              )}
            </h2>
          </div>
          <p className="section-intro">
            {ar
              ? "أربع خطوات واضحة، من التواصل الأول إلى أول حصة. نبدأ بتحديد مستواك وأهدافك."
              : "Quatre étapes claires, du premier échange au premier cours. Nous commençons par votre niveau et vos objectifs."}
          </p>
        </div>
        <ol className="process-steps">
          {academyConfig.registrationSteps.map((step) => (
            <li key={step.step} className={`reveal-on-scroll stagger-${step.step}`}>
              <span className="step-number" aria-hidden="true">
                {step.number}
                <span />
              </span>
              <h3>{t(step.title)}</h3>
              <p>{t(step.description)}</p>
              <a
                className="text-link"
                href={
                  step.step === 3
                    ? "#courses"
                    : getWhatsAppUrl(
                        academyConfig.whatsappMessages[
                          step.step === 2 ? "diagnosticTest" : "general"
                        ][lang],
                        lang,
                      )
                }
                {...(step.step !== 3
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {t(step.actionText)}
                <ArrowUpRight className="directional" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
