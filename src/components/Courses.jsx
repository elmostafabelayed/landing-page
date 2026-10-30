import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Users,
  CalendarDays,
  MessageCircle,
} from "lucide-react";
import { academyConfig } from "../config/academyConfig";
import { useLanguage } from "../context/useLanguage";
import { getCourseWhatsAppUrl } from "../utils/whatsapp";

const courseMarks = {
  "fr-delf": "Fr",
  "en-general": "En",
  "de-goethe": "De",
  "es-dele": "Es",
};
export default function Courses({ onChooseCourse }) {
  const { lang, t, ui } = useLanguage();
  const [category, setCategory] = useState("all");
  const ar = lang === "ar";
  const courses = academyConfig.courses.filter(
    (course) => category === "all" || course.category === category,
  );
  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        <div className="section-heading heading-split">
          <div>
            <p className="eyebrow">
              <span className="section-number">01 /</span>
              {ar ? "برامجنا التكوينية" : "NOS PROGRAMMES"}
            </p>
            <h2>
              {ar ? (
                <>
                  طموحك،
                  <br />
                  <em>مسار يناسبك.</em>
                </>
              ) : (
                <>
                  Votre ambition.
                  <br />
                  <em>Le bon programme.</em>
                </>
              )}
            </h2>
          </div>
          <p className="section-intro">
            {ar
              ? "لغات حية، دعم مدرسي وتحضير للمباريات. اختر البرنامج الذي يناسب أهدافك واكتشف تفاصيله."
              : "Langues vivantes, soutien scolaire ou préparation aux concours. Trouvez le parcours qui correspond à vos objectifs."}
          </p>
        </div>
        <div
          className="course-filters"
          role="group"
          aria-label={ar ? "تصفية البرامج" : "Filtrer les programmes"}
        >
          {academyConfig.categories.map((cat) => (
            <button
              key={cat.id}
              aria-pressed={category === cat.id}
              onClick={() => setCategory(cat.id)}
            >
              {t(cat.name)}
              <span>
                {cat.id === "all"
                  ? academyConfig.courses.length
                  : academyConfig.courses.filter((c) => c.category === cat.id)
                      .length}
              </span>
            </button>
          ))}
        </div>
        <p
          className="results-count"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {ar
            ? `${courses.length} برامج متاحة`
            : `${courses.length} programme${courses.length > 1 ? "s" : ""} à découvrir`}
        </p>
        <div className="course-grid">
          {courses.map((course, i) => (
            <article
              className={`course-card category-${course.category} reveal-on-scroll stagger-${(i % 3) + 1}`}
              key={course.id}
            >
              <div className="course-card-top">
                <span className="course-monogram" aria-hidden="true">
                  {courseMarks[course.id] ||
                    (course.category === "languages"
                      ? "Es"
                      : course.category === "tutoring"
                        ? "Σ"
                        : course.category === "concours"
                          ? "↗"
                          : "Aa")}
                </span>
                <span className="course-badge">{t(course.badge)}</span>
              </div>
              <p className="course-level">{t(course.level)}</p>
              <h3>{t(course.title)}</h3>
              <dl className="course-facts">
                <div>
                  <dt>
                    <Clock3 aria-hidden="true" />
                    <span>{ar ? "المدة" : "Durée"}</span>
                  </dt>
                  <dd>{t(course.duration)}</dd>
                </div>
                <div>
                  <dt>
                    <Users aria-hidden="true" />
                    <span>{ui.groupCapacity}</span>
                  </dt>
                  <dd>{t(course.groupSize)}</dd>
                </div>
              </dl>
              <details className="course-details">
                <summary>
                  {ar ? "تفاصيل البرنامج" : "Découvrir le programme"}
                  <ChevronDown aria-hidden="true" />
                </summary>
                <div className="course-details-content">
                  <p>{t(course.description)}</p>
                  <div className="course-schedule">
                    <CalendarDays aria-hidden="true" />
                    <div>
                      <strong>{ui.scheduleLabel}</strong>
                      <p>{t(course.schedule)}</p>
                    </div>
                  </div>
                  <div>
                    <strong>{ui.targetLabel}</strong>
                    <p>{t(course.target)}</p>
                  </div>
                  <strong>{ui.keyPoints}</strong>
                  <ul>
                    {course.features.map((feature, i) => (
                      <li key={i}>
                        <Check aria-hidden="true" />
                        {t(feature)}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="text-link"
                    href="#inquiry"
                    onClick={() => onChooseCourse(course.id)}
                  >
                    {ar ? "خصص طلبك لهذا البرنامج" : "Personnaliser ma demande"}
                    <ArrowUpRight className="directional" aria-hidden="true" />
                  </a>
                </div>
              </details>
              <a
                className="course-contact"
                href={getCourseWhatsAppUrl(course, lang)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ui.courseDetailsBtn} — ${t(course.title)}`}
              >
                <MessageCircle aria-hidden="true" />
                {ui.courseDetailsBtn}
                <ArrowUpRight className="directional" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <div className="courses-help">
          <span>
            {ar
              ? "متردد في اختيار البرنامج المناسب؟"
              : "Vous hésitez entre plusieurs programmes ?"}
          </span>
          <a className="text-link" href="#inquiry">
            {ar
              ? "لنحدد المسار المناسب معاً"
              : "Trouvons votre parcours ensemble"}
            <ArrowUpRight className="directional" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
