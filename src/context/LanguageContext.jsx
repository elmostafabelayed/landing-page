import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const uiTranslations = {
  fr: {
    navHome: "Accueil",
    navCourses: "Formations & Niveaux",
    navBenefits: "Notre Pédagogie",
    navProcess: "Comment s'inscrire",
    navFaq: "FAQ",
    navContact: "Accès & Contact",
    whatsappDirect: "WhatsApp Direct",
    onlineBadge: "Conseillers en ligne",
    heroBadge: "Centre Pédagogique à Fès • Ville Nouvelle",
    ctaDiscussWhatsApp: "Discuter sur WhatsApp",
    ctaExploreCourses: "Explorer les programmes",
    allCategories: "Tous les programmes",
    courseDetailsBtn: "Demander sur WhatsApp",
    groupCapacity: "Effectif",
    scheduleLabel: "Horaires",
    levelLabel: "Niveau",
    targetLabel: "Public visé",
    keyPoints: "Points clés du programme :",
    builderTitle: "Générateur d'échange personnalisé",
    builderSubtitle: "Personnalisez votre demande pour recevoir une réponse rapide et précise de notre responsable pédagogique sur WhatsApp.",
    yourName: "Votre Nom / Prénom",
    selectCourse: "Programme souhaité",
    selectObjective: "Votre objectif principal",
    selectSchedule: "Créneau préféré",
    sendOnWhatsApp: "Ouvrir la conversation WhatsApp",
    builderPreview: "Aperçu du message WhatsApp généré :",
    objectiveExam: "Préparation d'un examen officiel (DELF, TOEFL, Goethe, Bac)",
    objectiveFluency: "Améliorer l'expression orale et la communication",
    objectiveTutoring: "Renforcement scolaire & préparation contrôles continus",
    objectiveTravel: "Projet d'études ou mobilité internationale",
    timeEvening: "Créneau du soir (18h30 - 20h30)",
    timeWeekend: "Samedi et/ou Dimanche",
    timeAfternoon: "Mercredi après-midi",
    stepBadge: "Étape",
    faqMoreQuestions: "Vous avez une autre question spécifique ?",
    faqWhatsAppAction: "Posez votre question directement sur WhatsApp",
    contactHeading: "Localisation & Coordonnées à Fès",
    contactSubheading: "Venez nous rencontrer en plein centre de la Ville Nouvelle ou contactez-nous instantanément.",
    addressTitle: "Adresse du Centre",
    hoursTitle: "Horaires d'Ouverture",
    transportTitle: "Accès & Transports",
    openInMaps: "Voir sur Google Maps",
    rightsReserved: "Tous droits réservés.",
    disclaimerDemo: "Démonstration institutionnelle pour académie de langues et soutien scolaire à Fès.",
    changeLang: "العربية"
  },
  ar: {
    navHome: "الرئيسية",
    navCourses: "الدورات والمستويات",
    navBenefits: "المميزات والمنهجية",
    navProcess: "خطوات التسجيل",
    navFaq: "الأسئلة الشائعة",
    navContact: "الموقع والاتصال",
    whatsappDirect: "تواصل عبر واتساب",
    onlineBadge: "مستشار التوجيه متصل",
    heroBadge: "مركز تربوي بفاس • المدينة الجديدة",
    ctaDiscussWhatsApp: "تواصل مباشرة عبر واتساب",
    ctaExploreCourses: "استكشف البرامج المتاحة",
    allCategories: "جميع البرامج",
    courseDetailsBtn: "استفسر عبر واتساب",
    groupCapacity: "سعة الفوج",
    scheduleLabel: "التوقيت",
    levelLabel: "المستوى",
    targetLabel: "الفئة المستهدفة",
    keyPoints: "أبرز محاور البرنامج:",
    builderTitle: "منشئ استفسار واتساب المخصص",
    builderSubtitle: "حدد الدورة والهدف المناسبين لتوليد رسالة استفسار دقيقة تفتح مباشرة في تطبيق واتساب.",
    yourName: "الاسم الكامل",
    selectCourse: "البرنامج المطلوب",
    selectObjective: "هدفك الأساسي",
    selectSchedule: "التوقيت المفضل",
    sendOnWhatsApp: "فتح المحادثة في واتساب",
    builderPreview: "معاينة رسالة واتساب المباشرة:",
    objectiveExam: "التحضير لامتحان رسمي (DELF، TOEFL، غوته، أو الباكالوريا)",
    objectiveFluency: "تطوير التعبير الشفوي وطلاقة التواصل",
    objectiveTutoring: "الدعم المدرسي والتقوية في المواد الأساسية",
    objectiveTravel: "متابعة الدراسة في الخارج أو الهجرة",
    timeEvening: "الحصص المسائية (18:30 - 20:30)",
    timeWeekend: "أيام نهاية الأسبوع (السبت و/أو الأحد)",
    timeAfternoon: "مساء الأربعاء",
    stepBadge: "المرحلة",
    faqMoreQuestions: "هل لديك سؤال أو استفسار خاص لم تجده هنا؟",
    faqWhatsAppAction: "اطرح سؤالك مباشرة عبر واتساب وسيجيبك فريقنا",
    contactHeading: "مقر المركز وبيانات الاتصال بفاس",
    contactSubheading: "تفضل بزيارتنا في قلب المدينة الجديدة أو تواصل معنا فوراً.",
    addressTitle: "عنوان المركز",
    hoursTitle: "مواقيت العمل",
    transportTitle: "الموقع والمواصلات",
    openInMaps: "فتح على خرائط Google",
    rightsReserved: "جميع الحقوق محفوظة.",
    disclaimerDemo: "عرض توضيحي لمشروع مركز تعليمي للغات والدعم المدرسي بفاس.",
    changeLang: "Français"
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('al_andalous_lang') || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('al_andalous_lang', lang);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'fr' ? 'ar' : 'fr'));
  };

  /**
   * Helper function to translate either a bilingual object { fr: "...", ar: "..." }
   * or a key from uiTranslations
   */
  const t = (item) => {
    if (!item) return '';
    if (typeof item === 'object') {
      return item[lang] || item.fr || '';
    }
    if (typeof item === 'string') {
      return uiTranslations[lang]?.[item] || uiTranslations.fr?.[item] || item;
    }
    return '';
  };

  const isRTL = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, isRTL, t, ui: uiTranslations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
