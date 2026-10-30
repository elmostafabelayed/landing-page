import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academyConfig } from '../config/academyConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, CheckCircle, ArrowRight, ArrowLeft, Calendar, FileText, Sparkles } from 'lucide-react';

export default function RegistrationProcess() {
  const { lang, t, isRTL, ui } = useLanguage();

  return (
    <section id="process" className="py-20 md:py-28 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{ui.navProcess}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {lang === 'fr' 
              ? 'Comment S\'inscrire à l\'Académie Al-Andalous ?' 
              : 'كيفية التسجيل في أكاديمية الأندلس؟'}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {lang === 'fr'
              ? 'Un processus simple en 4 étapes transparentes, pensé pour évaluer votre niveau avec justesse avant de commencer.'
              : 'مسار بسيط وواضح في 4 خطوات عملية تهدف إلى تشخيص مستواك الحقيقي قبل الانضمام.'}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {academyConfig.registrationSteps.map((stepItem, index) => {
            // Determine custom WhatsApp message per step
            let stepUrl = getWhatsAppUrl(academyConfig.whatsappMessages.general[lang], lang);
            if (stepItem.step === 2) {
              stepUrl = getWhatsAppUrl(academyConfig.whatsappMessages.diagnosticTest[lang], lang);
            }

            return (
              <div
                key={stepItem.step}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/40 transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Step Number Top Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-amber-400 font-mono tracking-tighter">
                      {stepItem.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                      {ui.stepBadge} {stepItem.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-3 leading-snug">
                    {t(stepItem.title)}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t(stepItem.description)}
                  </p>
                </div>

                {/* Step Action Button */}
                <div className="pt-6 mt-4 border-t border-slate-700/60">
                  {stepItem.step === 3 ? (
                    <a
                      href="#courses"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <span>{t(stepItem.actionText)}</span>
                      {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </a>
                  ) : (
                    <a
                      href={stepUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
                      <span>{t(stepItem.actionText)}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}

        </div>

        {/* Quick WhatsApp Registration CTA Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-emerald-950/80 border border-emerald-600/30 text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Accompagnement Rapide' : 'استقبال وتوجيه فوري'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {lang === 'fr' 
                ? 'Besoin d\'un conseil pour orienter votre choix ?' 
                : 'هل تحتاج إلى استشارة لمساعدتك في اختيار البرنامج المناسب؟'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {lang === 'fr'
                ? 'Notre conseiller pédagogique vous répond directement sur WhatsApp sous 15 à 30 minutes.'
                : 'مستشارنا التربوي رهن إشارتكم للإجابة عن تساؤلاتكم عبر واتساب في غضون 15 إلى 30 دقيقة.'}
            </p>
          </div>

          <a
            href={getWhatsAppUrl(academyConfig.whatsappMessages.general[lang], lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{ui.ctaDiscussWhatsApp}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
