import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academyConfig } from '../config/academyConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, Send, Sparkles, User, BookOpen, Target, Clock } from 'lucide-react';

export default function InquiryBuilder() {
  const { lang, t, ui } = useLanguage();

  const [name, setName] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState(academyConfig.courses[0].id);
  const [selectedObjective, setSelectedObjective] = useState('objectiveExam');
  const [selectedSchedule, setSelectedSchedule] = useState('timeEvening');

  // Find selected course
  const currentCourse = academyConfig.courses.find(c => c.id === selectedCourseId) || academyConfig.courses[0];

  // Objectives map
  const objectives = [
    { id: 'objectiveExam', label: ui.objectiveExam },
    { id: 'objectiveFluency', label: ui.objectiveFluency },
    { id: 'objectiveTutoring', label: ui.objectiveTutoring },
    { id: 'objectiveTravel', label: ui.objectiveTravel },
  ];

  // Schedules map
  const schedules = [
    { id: 'timeEvening', label: ui.timeEvening },
    { id: 'timeWeekend', label: ui.timeWeekend },
    { id: 'timeAfternoon', label: ui.timeAfternoon },
  ];

  // Construct dynamic WhatsApp message in French or Arabic
  const generatedMessage = lang === 'fr'
    ? `Bonjour Académie Al-Andalous Fès.${name.trim() ? ` Je m'appelle ${name.trim()}.` : ''} Je souhaite me renseigner sur le programme : "${t(currentCourse.title)}". Mon objectif principal : ${ui[selectedObjective]}. Mon créneau souhaité : ${ui[selectedSchedule]}. Merci de m'indiquer les modalités d'inscription.`
    : `السلام عليكم أكاديمية الأندلس فاس.${name.trim() ? ` اسمي ${name.trim()}.` : ''} أود الاستفسار حول البرنامج: "${t(currentCourse.title)}". هدفي الأساسي: ${ui[selectedObjective]}. التوقيت المفضل لدي: ${ui[selectedSchedule]}. المرجو إفادتي بإجراءات التسجيل والمواعيد.`;

  const dynamicWhatsAppUrl = getWhatsAppUrl(generatedMessage, lang);

  return (
    <section className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-900/95 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{ui.builderTitle}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {lang === 'fr' 
                ? 'Préparez Votre Demande WhatsApp en 3 Clics' 
                : 'أنشئ رسالة استفسار واتساب مخصصة في ثوانٍ'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300">
              {ui.builderSubtitle}
            </p>
          </div>

          {/* Form Controls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 relative z-10">
            
            {/* Name Input */}
            <div className="space-y-1.5 sm:col-span-2">
              <label htmlFor="student-name" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span>{ui.yourName}</span>
                <span className="text-[11px] text-slate-500 font-normal">
                  ({lang === 'fr' ? 'Optionnel' : 'اختياري'})
                </span>
              </label>
              <input
                id="student-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === 'fr' ? 'Ex: Mohamed Alami / Salma Fassi' : 'مثال: محمد العلمي / سلمى الفاسي'}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-xs sm:text-sm transition-colors outline-none"
              />
            </div>

            {/* Course Selector */}
            <div className="space-y-1.5 sm:col-span-2">
              <label htmlFor="course-select" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>{ui.selectCourse}</span>
              </label>
              <select
                id="course-select"
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-xs sm:text-sm transition-colors outline-none cursor-pointer"
              >
                {academyConfig.courses.map((course) => (
                  <option key={course.id} value={course.id} className="bg-slate-900 text-white">
                    {t(course.title)} ({t(course.level)})
                  </option>
                ))}
              </select>
            </div>

            {/* Objective Selector */}
            <div className="space-y-1.5">
              <label htmlFor="objective-select" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>{ui.selectObjective}</span>
              </label>
              <select
                id="objective-select"
                value={selectedObjective}
                onChange={(e) => setSelectedObjective(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-xs sm:text-sm transition-colors outline-none cursor-pointer"
              >
                {objectives.map((obj) => (
                  <option key={obj.id} value={obj.id} className="bg-slate-900 text-white">
                    {obj.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Schedule Selector */}
            <div className="space-y-1.5">
              <label htmlFor="schedule-select" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{ui.selectSchedule}</span>
              </label>
              <select
                id="schedule-select"
                value={selectedSchedule}
                onChange={(e) => setSelectedSchedule(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-xs sm:text-sm transition-colors outline-none cursor-pointer"
              >
                {schedules.map((sch) => (
                  <option key={sch.id} value={sch.id} className="bg-slate-900 text-white">
                    {sch.label}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Live Message Preview Bubble */}
          <div className="mb-6 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 relative z-10">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{ui.builderPreview}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-emerald-200 text-xs sm:text-sm leading-relaxed font-sans">
              "{generatedMessage}"
            </div>
          </div>

          {/* Action Trigger */}
          <div className="text-center relative z-10">
            <a
              href={dynamicWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-950/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <Send className="w-4 h-4 fill-white" />
              <span>{ui.sendOnWhatsApp}</span>
            </a>
            
            <p className="mt-3 text-xs text-slate-400">
              ⚡ {t(academyConfig.contact.responseEstimate)}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
