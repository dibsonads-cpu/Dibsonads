import type { Explainer, ExplainerSection } from "@/lib/explain";

const sections: { key: Exclude<keyof Explainer, "inferred">; label: string }[] = [
  { key: "oneLine", label: "In one line" },
  { key: "whatItIs", label: "What it is" },
  { key: "onPlatform", label: "What it means on the platform" },
  { key: "agencies", label: "What agencies can do" },
  { key: "brands", label: "What brands can do" },
  { key: "amplify", label: "How to use it to amplify campaigns and optimise" },
];

export default function ExplainerSections({ explainer }: { explainer: Explainer }) {
  return (
    <div className="space-y-4">
      {sections.map((section) => {
        const suggested = explainer.inferred.includes(section.key as ExplainerSection);
        return (
          <section key={section.key}>
            <h3 className="text-xs font-bold uppercase tracking-wide text-ink/50">
              {section.label}
              {suggested ? <span className="ml-2 normal-case tracking-normal text-violet">Suggestion</span> : null}
            </h3>
            <p className="mt-1 text-sm leading-6">{explainer[section.key]}</p>
          </section>
        );
      })}
    </div>
  );
}
