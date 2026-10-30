import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academyConfig } from '../config/academyConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { lang, t, isRTL, ui } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = getWhatsAppUrl(academyConfig.whatsappMessages.general[lang], lang);

  return (
    <div 
      className={`fixed bottom-6 z-50 flex items-center gap-3 transition-all duration-300 ${
        isRTL ? 'left-6 flex-row-reverse' : 'right-6 flex-row'
      }`}
    >
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/95 text-white text-xs border border-slate-700 shadow-xl backdrop-blur-md animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold">
            {lang === 'fr' ? 'Une question ? Écrivez-nous sur WhatsApp' : 'تواصل معنا مباشرة عبر واتساب'}
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Fermer le message d'aide"
            className="text-slate-400 hover:text-white ml-1 p-0.5"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter directement sur WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-2xl shadow-emerald-950/60 transform hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Radar ping ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 pointer-events-none"></span>

        <MessageCircle className="w-7 h-7 fill-white group-hover:rotate-12 transition-transform duration-200" />
      </a>
    </div>
  );
}
