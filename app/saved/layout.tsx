import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Saved launches",
  description: "Launches you saved on this device.",
  path: "/saved",
  kicker: "Saved",
});

export default function SavedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
