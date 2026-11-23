export type ExplainerSection = "agencies" | "brands" | "amplify";

export type Explainer = {
  oneLine: string;
  whatItIs: string;
  onPlatform: string;
  agencies: string;
  brands: string;
  amplify: string;
  inferred: ExplainerSection[];
};

export function fallbackExplainer(entry: {
  headline: string;
  bullets: string[];
  platform: string;
  sourceName: string;
  regionNote?: string;
}): Explainer {
  const facts = entry.bullets.join(" ");
  return {
    oneLine: entry.bullets[0] ?? entry.headline,
    whatItIs: facts,
    onPlatform: entry.regionNote
      ? `On ${entry.platform}, ${entry.regionNote.charAt(0).toLowerCase()}${entry.regionNote.slice(1)}`
      : `This sits on ${entry.platform}. The description above is taken from ${entry.sourceName}.`,
    agencies: "Brief the team with the one-line summary, then read the source before you change a live campaign or a client deck.",
    brands: "Ask whether this is switched on in the markets you buy, and what asset it needs, before you promise it in a plan.",
    amplify: "Try it next to the campaign you already run, and judge it on the job the announcement says it is for.",
    inferred: ["agencies", "brands", "amplify"],
  };
}

export function explain(entry: Omit<Explainer, "inferred"> & { inferred?: ExplainerSection[] }): Explainer {
  return { inferred: entry.inferred ?? ["agencies", "brands", "amplify"], ...entry };
}
