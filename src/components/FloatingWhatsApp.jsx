import React from "react";
import { MessageCircle } from "lucide-react";
import { academyConfig } from "../config/academyConfig";
import { useLanguage } from "../context/useLanguage";
import { getWhatsAppUrl } from "../utils/whatsapp";
export default function FloatingWhatsApp() {
  const { lang } = useLanguage();
  return (
    <a
      className="floating-whatsapp"
      href={getWhatsAppUrl(academyConfig.whatsappMessages.general[lang], lang)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        lang === "ar"
          ? "تواصل مباشرة عبر واتساب"
          : "Discuter directement sur WhatsApp"
      }
    >
      <MessageCircle aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
