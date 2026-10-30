import test from "node:test";
import assert from "node:assert/strict";
import { getWhatsAppUrl, getCourseWhatsAppUrl } from "../src/utils/whatsapp.js";
import { normalizeLanguage, readSavedLanguage } from "../src/utils/language.js";
import { academyConfig } from "../src/config/academyConfig.js";

test("saved language accepts supported values and rejects stale or invalid settings", () => {
  assert.equal(normalizeLanguage("ar"), "ar");
  for (const value of ["en", "", null, undefined, "undefined"]) {
    assert.equal(readSavedLanguage({ getItem: () => value }), "fr");
  }
});

test("blocked storage does not prevent the page from choosing a language", () => {
  assert.equal(
    readSavedLanguage({
      getItem() {
        throw new Error("SecurityError");
      },
    }),
    "fr",
  );
});

test("WhatsApp messages round-trip Arabic, accented names, line breaks and URL delimiters", () => {
  const message = "Salma & سلمى — français?\nProgramme #1 + IELTS = 100%";
  const url = new URL(getWhatsAppUrl(message, "ar"));
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, `/${academyConfig.contact.whatsappNumber}`);
  assert.equal(url.searchParams.get("text"), message);
  assert.equal([...url.searchParams].length, 1);
});

test("unsupported language falls back to a usable inquiry instead of an empty message", () => {
  assert.equal(
    new URL(getWhatsAppUrl(undefined, "unknown")).searchParams.get("text"),
    academyConfig.whatsappMessages.general.fr,
  );
});

test("each program keeps its own bilingual inquiry and correct recipient", () => {
  for (const course of academyConfig.courses) {
    for (const lang of ["fr", "ar"]) {
      const url = new URL(getCourseWhatsAppUrl(course, lang));
      assert.equal(url.searchParams.get("text"), course.whatsappText[lang]);
      assert.equal(url.pathname, `/${academyConfig.contact.whatsappNumber}`);
    }
  }
});
