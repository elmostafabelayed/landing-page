import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { academyConfig } from '../config/academyConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Bus, 
  Car, 
  MessageCircle, 
  ExternalLink,
  Building
} from 'lucide-react';

export default function LocationAndContact() {
  const { lang, t, ui } = useLanguage();

  const whatsappContactUrl = getWhatsAppUrl(
    lang === 'fr'
      ? "Bonjour. Je souhaite visiter vos locaux à l'Avenue Hassan II à Fès cette semaine. Pouvez-vous m'accueillir ?"
      : "السلام عليكم. أود زيارة مركزكم بشارع الحسن الثاني بفاس هذا الأسبوع للتعرف على القاعات والبرامج.",
    lang
  );

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>{ui.navContact}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {ui.contactHeading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {ui.contactSubheading}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                    {ui.addressTitle}
                  </h3>
                  <div className="text-xs text-slate-400">
                    {t(academyConfig.academy.neighborhood)}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {t(academyConfig.academy.fullAddress)}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <Navigation className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>{t(academyConfig.academy.landmark)}</span>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">
                    {ui.hoursTitle}
                  </h3>
                  <div className="text-xs text-slate-400">
                    {t(academyConfig.contact.responseEstimate)}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-200 font-semibold">
                {t(academyConfig.contact.openingHours)}
              </p>
            </div>

            {/* Transport & Access Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
                    {ui.transportTitle}
                  </h3>
                  <div className="text-xs text-slate-400">
                    {lang === 'fr' ? 'Accès en transports à Fès' : 'طرق الوصول ووسائل النقل'}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t(academyConfig.academy.transportGuide)}
              </p>
            </div>

            {/* Quick Action Contact Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-950/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp : {academyConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${academyConfig.contact.landlineDisplay}`}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Fixe : {academyConfig.contact.landlineDisplay}</span>
              </a>
            </div>

          </div>

          {/* Interactive Fez Map Card */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 shadow-xl space-y-6">
            
            {/* Map Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">
                  {lang === 'fr' ? 'Plan du Centre-Ville de Fès' : 'موقع المركز بوسط مدينة فاس'}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === 'fr' ? 'Repères clés à Ville Nouvelle' : 'معالم بارزة بالمدينة الجديدة'}
                </p>
              </div>

              <a
                href={academyConfig.academy.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <span>{ui.openInMaps}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Simulated Clean Stylized Cartography of Fez Ville Nouvelle */}
            <div className="relative h-72 sm:h-80 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center p-4">
              
              {/* Background grid representing city avenues */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
              </div>

              {/* Major Roads representation */}
              <div className="absolute top-1/2 left-0 right-0 h-10 bg-slate-800/60 -translate-y-1/2 flex items-center px-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  Avenue Hassan II (شارع الحسن الثاني)
                </span>
              </div>
              <div className="absolute top-0 bottom-0 left-1/3 w-8 bg-slate-800/40 flex items-center justify-center">
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 [writing-mode:vertical-lr] rotate-180">
                  Bd. Mohammed V
                </span>
              </div>

              {/* Academy Landmark Pin */}
              <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                <div className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold shadow-lg shadow-amber-500/30 flex items-center gap-1.5 mb-1">
                  <Building className="w-3.5 h-3.5" />
                  <span>{t(academyConfig.academy.shortName)}</span>
                </div>
                <div className="w-3 h-3 bg-amber-500 rotate-45 -mt-2"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400 ring-4 ring-amber-400/30"></div>
              </div>

              {/* Nearby reference points */}
              <div className="absolute top-6 left-8 p-2 rounded-lg bg-slate-900/90 border border-slate-700 text-[10px] text-slate-400">
                🏛️ {lang === 'fr' ? 'Place Florence (150m)' : 'ساحة فلورنسا (150م)'}
              </div>

              <div className="absolute bottom-6 right-8 p-2 rounded-lg bg-slate-900/90 border border-slate-700 text-[10px] text-slate-400">
                🏨 {lang === 'fr' ? 'Hôtel Atlas Volubilis' : 'فندق أطلس وليلي'}
              </div>

              <div className="absolute bottom-6 left-8 p-2 rounded-lg bg-slate-900/90 border border-slate-700 text-[10px] text-slate-400">
                🚆 {lang === 'fr' ? 'Gare Fès-Ville (7 min)' : 'محطة قطار فاس (7 دقائق)'}
              </div>

            </div>

            {/* Direct Google Maps CTA */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs">
              <span className="text-slate-300">
                📍 {lang === 'fr' ? 'Coordonnées GPS : 34.03388, -5.00167' : 'الإحداثيات الجغرافية: 34.03388, -5.00167'}
              </span>
              <a
                href={academyConfig.academy.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-bold underline underline-offset-2 flex items-center gap-1"
              >
                <span>{lang === 'fr' ? 'Itinéraire' : 'مسار الطريق'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
