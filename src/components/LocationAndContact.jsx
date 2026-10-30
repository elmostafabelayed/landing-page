import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Bus,
  ArrowUpRight,
  Navigation,
  Building2,
} from "lucide-react";
import { academyConfig } from "../config/academyConfig";
import { useLanguage } from "../context/useLanguage";
export default function LocationAndContact() {
  const { lang, t, ui } = useLanguage();
  const ar = lang === "ar";
  const { academy, contact } = academyConfig;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${academy.coordinates.lat},${academy.coordinates.lng}`;
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-heading heading-split">
          <div>
            <p className="eyebrow">
              <span className="section-number">06 /</span>
              {ar ? "نلتقي في فاس" : "RENDEZ-VOUS À FÈS"}
            </p>
            <h2>
              {ar ? (
                <>
                  في قلب المدينة،
                  <br />
                  <em>قريبون منك.</em>
                </>
              ) : (
                <>
                  Au cœur de la ville.
                  <br />
                  <em>À vos côtés.</em>
                </>
              )}
            </h2>
          </div>
          <p className="section-intro">{ui.contactSubheading}</p>
        </div>
        <div className="contact-layout">
          <div className="contact-details reveal-on-scroll">
            <div className="contact-row">
              <MapPin aria-hidden="true" />
              <div>
                <h3>{ui.addressTitle}</h3>
                <address>{t(academy.fullAddress)}</address>
                <p className="landmark">{t(academy.landmark)}</p>
              </div>
            </div>
            <div className="contact-row">
              <Clock aria-hidden="true" />
              <div>
                <h3>{ui.hoursTitle}</h3>
                <p>{t(contact.openingHours)}</p>
              </div>
            </div>
            <div className="contact-row">
              <Bus aria-hidden="true" />
              <div>
                <h3>{ui.transportTitle}</h3>
                <p>{t(academy.transportGuide)}</p>
              </div>
            </div>
            <div className="contact-links">
              <a href={`tel:${contact.landlineDisplay.replace(/[^+\d]/g, "")}`}>
                <Phone aria-hidden="true" />
                <bdi>{contact.landlineDisplay}</bdi>
              </a>
              <a href={`mailto:${contact.email}`}>
                <Mail aria-hidden="true" />
                <bdi>{contact.email}</bdi>
              </a>
            </div>
          </div>
          <div className="location-card reveal-on-scroll stagger-2">
            <div className="location-card-top">
              <span>
                <MapPin aria-hidden="true" />
                {t(academy.city)}
              </span>
              <span>{ar ? "المدينة الجديدة" : "VILLE NOUVELLE"}</span>
            </div>
            <div className="location-illustration" aria-hidden="true">
              <span className="map-road road-one" />
              <span className="map-road road-two" />
              <span className="map-block block-one" />
              <span className="map-block block-two" />
              <span className="map-block block-three" />
              <span className="map-place place-one">
                {ar ? "ساحة فلورنسا" : "Place Florence"}
              </span>
              <span className="map-place place-two">
                {ar ? "شارع الحسن الثاني" : "Avenue Hassan II"}
              </span>
              <span className="map-place place-three">
                {ar ? "فندق أطلس وليلي" : "Hôtel Atlas Volubilis"}
              </span>
              <span className="academy-pin animate-subtle-float">
                <Building2 />
                <span>{t(academy.shortName)}</span>
              </span>
              <span className="map-compass">
                <Navigation />
              </span>
            </div>
            <p className="map-caption">
              {ar
                ? "رسم توضيحي للمعالم، غير معتمد للملاحة. افتح الخرائط لتحديد المسار."
                : "Repères illustratifs, hors échelle. Ouvrez la carte pour votre itinéraire."}
            </p>
            <div className="location-card-bottom">
              <div>
                <strong>{ar ? "نرحب بزيارتك" : "Venez nous rencontrer"}</strong>
                <small dir="ltr">
                  {academy.coordinates.lat}, {academy.coordinates.lng}
                </small>
              </div>
              <a
                className="button button-navy"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ui.openInMaps}
                <ArrowUpRight className="directional" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
