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

test("security sanitization strips dangerous tags, protocol injections and limits length", async () => {
  const { sanitizeName, sanitizeMessage, isSafeWhatsAppUrl } = await import(
    "../src/utils/security.js"
  );

  // Strip script tags and XSS payloads
  assert.equal(
    sanitizeName("<script>alert('xss')</script>Karim"),
    "alert('xss')Karim"
  );
  assert.equal(
    sanitizeName("javascript:void(0)Salma"),
    "void(0)Salma"
  );

  // Preserve accented characters and Arabic text
  assert.equal(
    sanitizeName("  سارة العلمي & Réda  "),
    "سارة العلمي & Réda"
  );

  // Length enforcement
  const longString = "A".repeat(100);
  assert.equal(sanitizeName(longString, 30).length, 30);

  // WhatsApp endpoint validation
  assert.equal(
    isSafeWhatsAppUrl(`https://wa.me/${academyConfig.contact.whatsappNumber}?text=test`),
    true
  );
  assert.equal(isSafeWhatsAppUrl("https://evil-site.com/steal-data"), false);
  assert.equal(isSafeWhatsAppUrl("javascript:alert(1)"), false);
});

