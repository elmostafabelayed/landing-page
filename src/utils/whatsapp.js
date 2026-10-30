import { academyConfig } from "../config/academyConfig.js";
import { normalizeLanguage } from "./language.js";

/**
 * Generate a WhatsApp click-to-chat URL with pre-filled message
 * @param {string} customMessage - Optional customized message
 * @param {string} lang - 'fr' or 'ar'
 * @returns {string} Fully encoded WhatsApp URL
 */
export function getWhatsAppUrl(customMessage, lang = "fr") {
  lang = normalizeLanguage(lang);
  const number = academyConfig.contact.whatsappNumber;
  let text = customMessage;

  if (!text) {
    text =
      academyConfig.whatsappMessages.general[lang] ||
      academyConfig.whatsappMessages.general.fr;
  }

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encodedText}`;
}

/**
 * Generate a WhatsApp URL tailored for a specific course inquiry
 * @param {object} course - Course object from academyConfig
 * @param {string} lang - 'fr' or 'ar'
 * @returns {string} WhatsApp URL
 */
export function getCourseWhatsAppUrl(course, lang = "fr") {
  lang = normalizeLanguage(lang);
  const message =
    course.whatsappText?.[lang] ||
    course.whatsappText?.fr ||
    academyConfig.whatsappMessages.general[lang];
  return getWhatsAppUrl(message, lang);
}
