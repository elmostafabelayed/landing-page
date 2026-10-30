import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academyConfig } from '../config/academyConfig';
import { getCourseWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, Clock, Users, Target, BookOpen, Check, Layers, Sparkles } from 'lucide-react';

export default function Courses() {
  const { lang, t, isRTL, ui } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCourses = activeCategory === 'all'
    ? academyConfig.courses
    : academyConfig.courses.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-20 md:py-28 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>{ui.navCourses}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fr' 
              ? 'Nos Formations & Niveaux d\'Excellence à Fès' 
              : 'دوراتنا وبرامجنا التكوينية المتميزة في فاس'}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {lang === 'fr'
              ? 'Découvrez nos cursus de langues certifiantes et nos modules de soutien scolaire en effectifs réduits (8 à 12 personnes max).'
              : 'اكتشف برامجنا اللغوية التأهيلية وحصص الدعم المدرسي في أفواج صغرى تضمن الاستفادة القصوى والمتابعة المستمرة.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {academyConfig.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-950/30 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                }`}
              >
                {t(cat.name)}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => {
            const courseWhatsAppUrl = getCourseWhatsAppUrl(course, lang);

            return (
              <div
                key={course.id}
                className="group flex flex-col justify-between rounded-2xl bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden hover:-translate-y-1"
              >
                {/* Card Top / Header */}
                <div className="p-6 sm:p-7 space-y-4">
                  
                  {/* Badge & Level */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Sparkles className="w-3 h-3" />
                      <span>{t(course.badge)}</span>
                    </span>

                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-700 text-slate-300">
                      {t(course.level)}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {t(course.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {t(course.description)}
                  </p>

                  {/* Metadata Chips */}
                  <div className="pt-2 border-t border-slate-700/60 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-slate-400">{ui.groupCapacity} :</span>
                      <span className="font-medium text-white">{t(course.groupSize)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-slate-400">{ui.scheduleLabel} :</span>
                      <span className="font-medium text-slate-200 line-clamp-1">{t(course.schedule)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="text-slate-400">{ui.targetLabel} :</span>
                      <span className="font-medium text-slate-200 line-clamp-1">{t(course.target)}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="pt-2 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {ui.keyPoints}
                    </div>
                    {course.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{t(feat)}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Action Button (Direct WhatsApp) */}
                <div className="p-6 pt-0">
                  <a
                    href={courseWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-950/30 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 group/btn"
                  >
                    <MessageCircle className="w-4 h-4 fill-white group-hover/btn:scale-110 transition-transform" />
                    <span>{ui.courseDetailsBtn}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom helper prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            {lang === 'fr' 
              ? 'Besoin d\'un créneau sur mesure ou d\'une formule individuelle (one-to-one) ?' 
              : 'هل تحتاج إلى توقيت خاص أو صيغة تدريب فردية خاصة؟'}{' '}
            <a 
              href="#contact" 
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
            >
              {lang === 'fr' ? 'Consultez notre équipe sur WhatsApp' : 'تواصل مع مستشارنا عبر واتساب'}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
