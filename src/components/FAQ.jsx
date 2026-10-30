import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academyConfig } from '../config/academyConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const { lang, t, ui } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0); // Open first question by default

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  const whatsappFaqUrl = getWhatsAppUrl(
    lang === 'fr' 
      ? "Bonjour Académie Al-Andalous Fès. J'ai une question spécifique qui ne figure pas dans votre FAQ."
      : "السلام عليكم أكاديمية الأندلس فاس. لدي استفسار خاص لم أجده ضمن قائمة الأسئلة الشائعة.",
    lang
  );

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-900/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{ui.navFaq}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {lang === 'fr' 
              ? 'Foire Aux Questions Fréquentes' 
              : 'الأسئلة الشائعة حول برامجنا والتسجيل'}
          </h2>

          <p className="text-base text-slate-300">
            {lang === 'fr'
              ? 'Toutes les réponses claires sur nos effectifs, nos méthodes de travail et les modalités pratiques à Fès.'
              : 'إجابات واضحة ودقيقة حول نظام الدراسة، المناهج المعتمدة، وشروط التسجيل بمركزنا.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {academyConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-800/70 border border-slate-700/80 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-start focus:outline-none focus:ring-2 focus:ring-amber-400/50 hover:bg-slate-800/90 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">
                    {t(faq.question)}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-700/60 text-slate-300 transform transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-amber-400 bg-amber-500/10' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-700/40 pt-4 animate-in fade-in duration-200">
                    {t(faq.answer)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Question CTA Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-850 border border-slate-800 text-center space-y-3">
          <p className="text-sm font-semibold text-slate-200">
            {ui.faqMoreQuestions}
          </p>
          <div>
            <a
              href={whatsappFaqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-950/40 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{ui.faqWhatsAppAction}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
