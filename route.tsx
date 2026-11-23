import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Ad Update";
  const platform = searchParams.get("platform") || "Platform";
  const country = searchParams.get("country") || "Global";
  const channel = searchParams.get("channel") || "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          color: "white",
          padding: "48px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div
            style={{
              background: "#38bdf8",
              color: "#0f172a",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            {platform}
          </div>
          <div
            style={{
              background: "#1e293b",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {country}
          </div>
          {channel && (
            <div
              style={{
                background: "#334155",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "16px",
              }}
            >
              {channel}
            </div>
          )}
        </div>
        <div
          style={{
            fontSize: "42px",
            fontWeight: 800,
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: "18px", opacity: 0.7 }}>{siteConfig.name}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
