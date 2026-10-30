import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { academyConfig } from "../config/academyConfig";
import { useLanguage } from "../context/useLanguage";
import { getWhatsAppUrl } from "../utils/whatsapp";
export default function FAQ() {
  const { lang, t, ui } = useLanguage();
  const [open, setOpen] = useState(0);
  const ar = lang === "ar";
  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-layout">
        <div>
          <p className="eyebrow">
            <span className="section-number">05 /</span>
            {ar ? "الأسئلة الشائعة" : "VOS QUESTIONS"}
          </p>
          <h2>
            {ar ? (
              <>
                كل ما تحتاج
                <br />
                <em>إلى معرفته.</em>
              </>
            ) : (
              <>
                Tout ce qu’il
                <br />
                faut <em>savoir.</em>
              </>
            )}
          </h2>
          <p className="section-intro">{ui.faqMoreQuestions}</p>
          <a
            className="text-link"
            href={getWhatsAppUrl(
              ar
                ? "السلام عليكم أكاديمية الأندلس فاس. لدي استفسار خاص لم أجده ضمن قائمة الأسئلة الشائعة."
                : "Bonjour Académie Al-Andalous Fès. J’ai une question spécifique qui ne figure pas dans votre FAQ.",
              lang,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ar ? "اطرح سؤالك عبر واتساب" : "Poser ma question sur WhatsApp"}
            <ArrowUpRight className="directional" aria-hidden="true" />
          </a>
        </div>
        <div className="faq-list">
          {academyConfig.faqs.map((faq, index) => (
            <div
              className={`faq-item ${open === index ? "is-open" : ""} reveal-on-scroll stagger-${(index % 4) + 1}`}
              key={index}
            >
              <h3>
                <button
                  id={`faq-question-${index}`}
                  aria-controls={`faq-answer-${index}`}
                  aria-expanded={open === index}
                  onClick={() => setOpen(open === index ? -1 : index)}
                >
                  <span>{t(faq.question)}</span>
                  {open === index ? (
                    <Minus aria-hidden="true" />
                  ) : (
                    <Plus aria-hidden="true" />
                  )}
                </button>
              </h3>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={open !== index}
              >
                <p>{t(faq.answer)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
