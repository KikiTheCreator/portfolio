// Years since a "YYYY-MM" date, with one decimal, like "1.3". Used at build
// time and again in the browser (see Layout.astro), so the number stays
// right without a rebuild.
export function elapsed(since: string, now = new Date()) {
  const [year, month] = since.split("-").map(Number);
  const start = new Date(year, month - 1, 1);
  const years = (now.getTime() - start.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
  return years.toFixed(1);
}
