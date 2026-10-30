import { academyConfig } from "../config/academyConfig.js";

/**
 * Sanitize single-line text (e.g. user names) to prevent script/tag injection
 * @param {string} input - Raw input string
 * @param {number} maxLength - Maximum allowable length (default 50)
 * @returns {string} Sanitized string safe for display and URI parameters
 */
export function sanitizeName(input, maxLength = 50) {
  if (typeof input !== "string") return "";

  return input
    // Strip HTML tags and angle brackets
    .replace(/<[^>]*>/g, "")
    // Remove control characters (except standard spaces)
    .replace(/[\x00-\x1F\x7F]/g, "")
    // Remove dangerous URI protocols
    .replace(/javascript:/gi, "")
    .replace(/data:/gi, "")
    .replace(/vbscript:/gi, "")
    // Collapse consecutive whitespace
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/**
 * Sanitize multi-line message text while preserving valid characters and newlines
 * @param {string} input - Raw message string
 * @param {number} maxLength - Maximum allowable length (default 1000)
 * @returns {string} Cleaned message
 */
export function sanitizeMessage(input, maxLength = 1000) {
  if (typeof input !== "string") return "";

  return input
    .replace(/<[^>]*>/g, "")
    // Remove control chars but preserve \n (0x0A) and \r (0x0D)
    .replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/data:/gi, "")
    .replace(/vbscript:/gi, "")
    .trim()
    .slice(0, maxLength);
}

/**
 * Validate that a URL strictly targets the official academy WhatsApp endpoint
 * @param {string} urlString - URL string to validate
 * @returns {boolean} True if safe and matches authorized WhatsApp origin
 */
export function isSafeWhatsAppUrl(urlString) {
  try {
    const parsed = new URL(urlString);
    const expectedNumber = academyConfig.contact.whatsappNumber;

    // Strict validation: must be HTTPS, wa.me domain, and official phone number path
    return (
      parsed.protocol === "https:" &&
      parsed.hostname === "wa.me" &&
      parsed.pathname === `/${expectedNumber}`
    );
  } catch {
    return false;
  }
}
