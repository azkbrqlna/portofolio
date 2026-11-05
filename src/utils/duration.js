/**
 * Calculates human-readable year range and duration automatically from a period string.
 * Supports:
 *  - Exact calendar dates: "2 May 2023 to 2 November 2023" / "May 2, 2023 to November 2, 2023" -> "2023 (6 Months)"
 *  - Month-only spans: "February 2025 to March 2025" -> "2025 (2 Months)"
 *  - Ongoing spans: "January 2025 to Present" -> "2025 – Present (X Months)"
 */

const MONTHS_MAP = {
  january: 1, jan: 1, januari: 1,
  february: 2, feb: 2, februari: 2,
  march: 3, mar: 3, maret: 3,
  april: 4, apr: 4,
  may: 5, mei: 5,
  june: 6, jun: 6, juni: 6,
  july: 7, jul: 7, juli: 7,
  august: 8, aug: 8, agustus: 8,
  september: 9, sep: 9, sept: 9,
  october: 10, oct: 10, oktober: 10,
  november: 11, nov: 11,
  december: 12, dec: 12, desember: 12,
};

function parsePeriodPart(str) {
  if (!str) return null;
  const s = str.trim().toLowerCase();

  if (s === "present" || s === "now" || s === "current" || s === "sekarang") {
    const now = new Date();
    return {
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
      hasDay: true,
      isPresent: true,
    };
  }

  const monthMatch = s.match(
    /(january|february|march|april|may|june|july|august|september|october|november|december|januari|februari|maret|mei|juni|juli|agustus|oktober|desember|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec)/i
  );
  const yearMatch = s.match(/\b(19\d{2}|20\d{2})\b/);

  if (!monthMatch || !yearMatch) return null;

  const month = MONTHS_MAP[monthMatch[1].toLowerCase()];
  const year = parseInt(yearMatch[1], 10);

  // Look for day numbers (1-31) that aren't the year
  const dayMatches = Array.from(s.matchAll(/\b([1-9]|[12]\d|3[01])(?:st|nd|rd|th)?\b/g));
  let day = null;
  for (const m of dayMatches) {
    const val = parseInt(m[1], 10);
    if (val !== year) {
      day = val;
      break;
    }
  }

  const hasDay = day !== null;
  return {
    day: hasDay ? day : 1,
    month,
    year,
    hasDay,
    isPresent: false,
  };
}

export function formatExperienceDuration(periodStr) {
  if (!periodStr || typeof periodStr !== "string") return "";

  // Split by "to", "-", "–", "hingga", "sampai"
  const parts = periodStr.split(/\s+(?:to|-|–|hingga|sampai)\s+/i);
  if (parts.length < 2) return periodStr;

  const start = parsePeriodPart(parts[0]);
  const end = parsePeriodPart(parts[1]);

  if (!start || !end) return periodStr;

  let totalMonths;

  if (start.hasDay && end.hasDay) {
    // When exact start and end days are known (e.g. 2 May to 2 November):
    // Full months = month difference. If end day < start day, minus 1 month.
    let diff = (end.year - start.year) * 12 + (end.month - start.month);
    if (end.day < start.day) {
      diff -= 1;
    }
    totalMonths = Math.max(1, diff);
  } else {
    // When only months are given (e.g. February to March):
    // Inclusive count of both months (Feb + Mar = 2 months)
    totalMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  }

  if (totalMonths <= 0) return periodStr;

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  let durationText = "";
  if (years > 0 && remainingMonths > 0) {
    durationText = `${years} ${years === 1 ? "Year" : "Years"} ${remainingMonths} ${remainingMonths === 1 ? "Month" : "Months"}`;
  } else if (years > 0) {
    durationText = `${years} ${years === 1 ? "Year" : "Years"}`;
  } else {
    durationText = `${totalMonths} ${totalMonths === 1 ? "Month" : "Months"}`;
  }

  // Year range label
  let yearLabel = "";
  if (end.isPresent) {
    yearLabel = `${start.year} – Present`;
  } else if (start.year === end.year) {
    yearLabel = `${start.year}`;
  } else {
    yearLabel = `${start.year} – ${end.year}`;
  }

  return `${yearLabel} (${durationText})`;
}
