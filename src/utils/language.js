export const normalizeLanguage = (value) => (value === "ar" ? "ar" : "fr");

export function readSavedLanguage(storage) {
  try {
    return normalizeLanguage(storage.getItem("al_andalous_lang"));
  } catch {
    return "fr";
  }
}
