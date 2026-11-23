import { countryNames } from "@/lib/country-ids";
import { regionLabel, type FeedRegionId } from "@/lib/taxonomy";

export function countryName(code: string) {
  return countryNames[code] ?? code;
}

export function defaultMarkets(entry: {
  region: FeedRegionId;
  countries: string[];
  regionNote?: string;
  coverage: string;
}) {
  if (entry.countries.length > 0) return entry.countries.map(countryName);
  if (entry.regionNote) return [entry.regionNote.replace(/\.$/, "")];
  if (entry.coverage === "global" || entry.region === "global") {
    return ["Worldwide. The source says it is global and does not list every country."];
  }
  if (entry.region === "not-stated" || entry.coverage === "unknown") {
    return ["The source does not name the countries."];
  }
  return [regionLabel(entry.region)];
}

export function marketsLine(markets: string[]) {
  return markets.join(" · ");
}
