import React, { useState } from "react";
import { ArrowUpRight, Check, MessageCircle, ChevronDown, ShieldCheck } from "lucide-react";
import { academyConfig } from "../config/academyConfig";
import { useLanguage } from "../context/useLanguage";
import { getWhatsAppUrl } from "../utils/whatsapp";
import { sanitizeName } from "../utils/security";

export default function InquiryBuilder({ selectedCourseId, onCourseChange }) {
  const { lang, t, ui } = useLanguage();
  const [name, setName] = useState("");
  const [objective, setObjective] = useState("objectiveExam");
  const [schedule, setSchedule] = useState("timeEvening");
  const ar = lang === "ar";
  const course =
    academyConfig.courses.find((c) => c.id === selectedCourseId) ||
    academyConfig.courses[0];
  const cleanName = sanitizeName(name, 50);
  const message = ar
    ? `السلام عليكم أكاديمية الأندلس فاس.${cleanName ? ` اسمي ${cleanName}.` : ""} أود الاستفسار حول البرنامج: "${t(course.title)}". هدفي الأساسي: ${ui[objective]}. التوقيت المفضل لدي: ${ui[schedule]}. المرجو إفادتي بإجراءات التسجيل والمواعيد.`
    : `Bonjour Académie Al-Andalous Fès.${cleanName ? ` Je m'appelle ${cleanName}.` : ""} Je souhaite me renseigner sur le programme : "${t(course.title)}". Mon objectif principal : ${ui[objective]}. Mon créneau souhaité : ${ui[schedule]}. Merci de m'indiquer les modalités d'inscription.`;
  return (
    <section id="inquiry" className="section inquiry-section dark-section">
      <div className="container inquiry-layout">
        <div className="inquiry-intro reveal-on-scroll">
          <p className="eyebrow">
            <span className="section-number">04 /</span>
            {ar ? "لنتحدث عن أهدافك" : "PARLONS DE VOTRE PROJET"}
          </p>
          <h2>
            {ar ? (
              <>
                المسار المناسب،
                <br />
                <em>يبدأ بمحادثة.</em>
              </>
            ) : (
              <>
                Le bon parcours
                <br />
                commence par
                <br />
                <em>une conversation.</em>
              </>
            )}
          </h2>
          <p>{ui.builderSubtitle}</p>
          <ul className="inquiry-promises">
            <li>
              <Check aria-hidden="true" />
              {ar
                ? "اختر برنامجك وتوقيتك المفضل"
                : "Votre programme, vos disponibilités"}
            </li>
            <li>
              <Check aria-hidden="true" />
              {ar
                ? "راجع رسالتك قبل الإرسال"
                : "Un message que vous pouvez relire"}
            </li>
            <li>
              <Check aria-hidden="true" />
              {ar
                ? "تواصل مباشرة مع فريقنا"
                : "Un échange direct avec notre équipe"}
            </li>
          </ul>
          <div className="inquiry-contact">
            <MessageCircle aria-hidden="true" />
            <div>
              <strong dir="ltr">{academyConfig.contact.phoneDisplay}</strong>
              <span>{t(academyConfig.contact.responseEstimate)}</span>
              <small>{t(academyConfig.contact.openingHours)}</small>
            </div>
          </div>
        </div>
        <div className="inquiry-panel reveal-on-scroll stagger-2">
          <div className="panel-heading">
            <span className="panel-icon">
              <MessageCircle aria-hidden="true" />
            </span>
            <div>
              <h3>
                {ar
                  ? "طلبك في خطوات بسيطة"
                  : "Votre demande, en quelques clics"}
              </h3>
              <p>
                {ar
                  ? "اختر ما يناسبك، ونحن نرشدك."
                  : "Dites-nous ce que vous recherchez."}
              </p>
            </div>
          </div>
          <div className="inquiry-fields">
            <div className="field">
              <label htmlFor="student-name">
                {ui.yourName}
                <span>{ar ? "اختياري" : "Facultatif"}</span>
              </label>
              <input
                id="student-name"
                name="name"
                autoComplete="name"
                maxLength={50}
                value={name}
                onChange={(event) => setName(event.target.value.slice(0, 50))}
                placeholder={ar ? "مثال: سلمى الفاسي" : "Ex. Salma Fassi"}
              />
            </div>
            <div className="field">
              <label htmlFor="course-select">{ui.selectCourse}</label>
              <select
                id="course-select"
                value={course.id}
                onChange={(event) => onCourseChange(event.target.value)}
              >
                {academyConfig.courses.map((item) => (
                  <option key={item.id} value={item.id}>
                    {t(item.title)}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="objective-select">{ui.selectObjective}</label>
              <select
                id="objective-select"
                value={objective}
                onChange={(event) => setObjective(event.target.value)}
              >
                {[
                  "objectiveExam",
                  "objectiveFluency",
                  "objectiveTutoring",
                  "objectiveTravel",
                ].map((id) => (
                  <option key={id} value={id}>
                    {ui[id]}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="schedule-select">{ui.selectSchedule}</label>
              <select
                id="schedule-select"
                value={schedule}
                onChange={(event) => setSchedule(event.target.value)}
              >
                {["timeEvening", "timeWeekend", "timeAfternoon"].map((id) => (
                  <option key={id} value={id}>
                    {ui[id]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <details className="message-preview">
            <summary>
              {ar ? "معاينة رسالتك" : "Relire mon message"}
              <ChevronDown aria-hidden="true" />
            </summary>
            <p>{message}</p>
          </details>
          <a
            className="button button-green inquiry-submit"
            href={getWhatsAppUrl(message, lang)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ui.sendOnWhatsApp}
            <ArrowUpRight className="directional" aria-hidden="true" />
          </a>
          <p className="form-note">
            {ar
              ? "يفتح واتساب برسالة جاهزة. الإرسال يتم بموافقتك داخل واتساب."
              : "WhatsApp s’ouvre avec votre message. Vous choisissez ensuite de l’envoyer."}
          </p>
          <div className="security-badge" role="note">
            <ShieldCheck aria-hidden="true" />
            <span>
              {ar
                ? "محادثة مشفرة وآمنة من طرف لطرف عبر واتساب"
                : "Échange direct sécurisé & chiffré de bout en bout"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
