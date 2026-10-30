import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academyConfig } from '../config/academyConfig';
import { 
  Users, 
  ClipboardCheck, 
  BookOpenCheck, 
  Clock, 
  Building2, 
  ShieldCheck, 
  Award,
  Sparkles 
} from 'lucide-react';

const iconMap = {
  Users,
  ClipboardCheck,
  BookOpenCheck,
  Clock,
  Building2,
  ShieldCheck,
};

export default function Benefits() {
  const { lang, t, ui } = useLanguage();

  return (
    <section id="benefits" className="py-20 md:py-28 bg-slate-950 text-white relative border-y border-slate-800">
      
      {/* Decorative ambient patterns */}
      <div className="absolute inset-0 bg-moroccan-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{ui.navBenefits}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {lang === 'fr' 
              ? 'Une Méthodologie Pédagogique Fondée sur la Rigueur' 
              : 'منهجية تربوية قائمة على الدقة والنتائج الملموسة'}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {lang === 'fr'
              ? 'À Fès, notre académie privilégie la pratique active, des effectifs réellement maîtrisés et une transparence totale avec les familles.'
              : 'نعتمد في مركزنا بفاس على الممارسة الفعالة، والتحكم الفعلي في أعداد التلاميذ، والشفافية التامة مع أولياء الأمور.'}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academyConfig.benefits.map((benefit) => {
            const IconComponent = iconMap[benefit.iconName] || Users;

            return (
              <div
                key={benefit.id}
                className="group relative p-7 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                {/* Glow accent on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 group-hover:bg-amber-500/10 rounded-bl-full transition-colors pointer-events-none"></div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {t(benefit.title)}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t(benefit.description)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Institutional Commitment Note */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              {lang === 'fr' 
                ? 'Engagement Qualité & Respect des Programmes Officiels' 
                : 'التزام تام بالجودة ومطابقة المناهج الرسمية'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              {lang === 'fr'
                ? 'Chaque inscription fait l\'objet d\'une convention claire détaillant le volume horaire, les objectifs et les dates d\'évaluations.'
                : 'يخضع كل تسجيل لميثاق بيداغوجي واضح يحدد الحجم الساعي، والأهداف المسطرة، ومواعيد التقييمات الدورية.'}
            </p>
          </div>
          
          <a
            href="#process"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold text-xs sm:text-sm border border-slate-700 hover:border-amber-500/40 transition-colors"
          >
            {lang === 'fr' ? 'Découvrir les étapes d\'inscription' : 'مراحل التسجيل بالتفصيل'}
          </a>
        </div>

      </div>
    </section>
  );
}
