import React, { useState, useEffect } from "react";
import { normalizeLanguage, readSavedLanguage } from "../utils/language.js";
import { LanguageContext } from "./useLanguage.js";
import { uiTranslations } from "./translations.js";

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return readSavedLanguage(window.localStorage);
    } catch {
      return "fr";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("al_andalous_lang", lang);
    } catch {
      /* Language works without persistent storage. */
    }
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
    document.title =
      lang === "ar"
        ? "أكاديمية الأندلس فاس | اللغات والدعم المدرسي"
        : "Académie Al-Andalous Fès | Langues Vivantes & Soutien Scolaire d'Excellence";
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "fr" ? "ar" : "fr"));
  };

  /**
   * Helper function to translate either a bilingual object { fr: "...", ar: "..." }
   * or a key from uiTranslations
   */
  const t = (item) => {
    if (!item) return "";
    if (typeof item === "object") {
      return item[lang] || item.fr || "";
    }
    if (typeof item === "string") {
      return uiTranslations[lang]?.[item] || uiTranslations.fr?.[item] || item;
    }
    return "";
  };

  const isRTL = lang === "ar";

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: (value) => setLang(normalizeLanguage(value)),
        toggleLanguage,
        isRTL,
        t,
        ui: uiTranslations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
