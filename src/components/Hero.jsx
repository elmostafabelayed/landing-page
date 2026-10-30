import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academyConfig } from '../config/academyConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, ArrowRight, ArrowLeft, CheckCircle2, MapPin, Sparkles, Shield, Clock, Users, BookOpen } from 'lucide-react';

export default function Hero() {
  const { lang, t, isRTL, ui } = useLanguage();

  const handleScrollToCourses = (e) => {
    e.preventDefault();
    const el = document.querySelector('#courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const heroWhatsAppUrl = getWhatsAppUrl(academyConfig.whatsappMessages.general[lang], lang);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800">
      {/* Subtle Moroccan Ambient Glows & Pattern */}
      <div className="absolute inset-0 bg-moroccan-pattern-dark opacity-35 pointer-events-none"></div>
      
      {/* Decorative Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{ui.heroBadge}</span>
              <span className="hidden sm:inline text-amber-400/40">|</span>
              <span className="hidden sm:inline text-slate-300 font-normal">
                {lang === 'fr' ? 'Sessions 2026 Ouvertes' : 'التسجيل مفتوح لدورات 2026'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              {lang === 'fr' ? (
                <>
                  L'Excellence en <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Langues Vivantes</span> & Soutien Scolaire à Fès
                </>
              ) : (
                <>
                  الريادة في <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">تعلم اللغات</span> والدعم المدرسي التخصصي بفاس
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              {t(academyConfig.academy.subtagline)}
            </p>

            {/* Value Checkpoints */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{lang === 'fr' ? 'Effectifs 8 à 12 max' : 'أفواج مصغرة 8 إلى 12'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{lang === 'fr' ? 'Test de niveau gratuit' : 'تقييم تشخيصي مجاني'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{lang === 'fr' ? 'Ville Nouvelle Fès' : 'المدينة الجديدة فاس'}</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <div className="relative">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-200"></span>
                  </span>
                </div>
                <span>{ui.ctaDiscussWhatsApp}</span>
              </a>

              <a
                href="#courses"
                onClick={handleScrollToCourses}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold text-base border border-slate-700 hover:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <span>{ui.ctaExploreCourses}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
            </div>

            {/* Response time micro note */}
            <p className="text-xs text-slate-400">
              💬 {t(academyConfig.contact.responseEstimate)}
            </p>
          </div>

          {/* Right Visual / Academic Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">
                      {lang === 'fr' ? 'Cadre Académique Idéal' : 'بيئة تعليمية متكاملة'}
                    </h2>
                    <p className="text-xs text-slate-400">
                      {lang === 'fr' ? 'Avenue Hassan II • Fès' : 'شارع الحسن الثاني • فاس'}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                  ✓ {lang === 'fr' ? 'Centre Agréé' : 'مقر معتمد'}
                </span>
              </div>

              {/* Feature Points */}
              <div className="py-5 space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {lang === 'fr' ? 'Petits Groupes Garantis' : 'أفواج مصغرة مضمونة'}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {lang === 'fr' ? '8 à 12 apprenants maximum par séance pour favoriser la prise de parole.' : 'من 8 إلى 12 متعلماً في القاعة لضمان التفاعل الدائم والتحدث الشفوي.'}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {lang === 'fr' ? 'Horaires Adaptés & Soirées' : 'توقيت ملائم وحصص مسائية'}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {lang === 'fr' ? 'Séances programmées après 18h30 pour les étudiants et actifs, et week-end.' : 'حصص مسائية بعد 18:30 للطلبة والموظفين، بالإضافة لأفواج نهاية الأسبوع.'}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {lang === 'fr' ? 'Orientation & Test Gratuit' : 'توجيه واختبار مستوى مجاني'}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {lang === 'fr' ? 'Bilan diagnostique complet sans frais avant toute inscription.' : 'تشخيص شامل للمكتسبات والمهارات بدون أي التزام مالي مسبق.'}
                    </div>
                  </div>
                </div>

              </div>

              {/* Card Footer WhatsApp Trigger */}
              <div className="pt-4 border-t border-slate-700/80">
                <a
                  href={getWhatsAppUrl(academyConfig.whatsappMessages.diagnosticTest[lang], lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-600/40 text-emerald-300 text-xs font-semibold transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>{lang === 'fr' ? 'Demander un test diagnostique' : 'طلب حجز اختبار تشخيصي مجاني'}</span>
                  </span>
                  {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Metrics Strip Below Hero */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {academyConfig.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  {t(metric.label)}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {t(metric.sub)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
