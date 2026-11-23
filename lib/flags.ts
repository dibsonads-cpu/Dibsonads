export function flagEmoji(code: string) {
  if (!/^[A-Za-z]{2}$/.test(code)) return "";
  return String.fromCodePoint(...code.toUpperCase().split("").map((char) => 127397 + char.charCodeAt(0)));
}

export function coverageFlag(coverage: string, countries: string[], region: string) {
  if (countries.length === 1) return flagEmoji(countries[0]);
  if (countries.length > 1) return countries.slice(0, 3).map(flagEmoji).join(" ");
  if (coverage === "global") return "🌍";
  if (region === "eu" || coverage === "region") return "🇪🇺";
  return "🌐";
}
