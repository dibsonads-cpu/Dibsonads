import { rssResponse } from "@/lib/feed-xml";

export async function GET() {
  return rssResponse("/feed.xml");
}
