import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || "Dibs On Ads").slice(0, 140);
  const kicker = (searchParams.get("kicker") || "Verified paid media launches").slice(0, 90);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fff4ea",
          padding: "56px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 800, color: "#ff5d3a" }}>Dibs On Ads</div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#ffd23f",
              color: "#24124d",
              border: "4px solid #24124d",
              borderRadius: 999,
              padding: "8px 18px",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            VERIFIED
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 70 ? 54 : 68,
            fontWeight: 800,
            color: "#24124d",
            lineHeight: 1.05,
            letterSpacing: -1,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6d4aff", fontWeight: 700 }}>{kicker}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
