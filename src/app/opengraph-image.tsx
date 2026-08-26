import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at top left, rgba(255,214,10,0.56), transparent 32%), linear-gradient(135deg, #081a39 0%, #1c68f2 62%, #4cb369 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              height: "72px",
              width: "72px",
              borderRadius: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.12)",
              fontSize: "38px",
            }}
          >
            ☀
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "42px", fontWeight: 700 }}>Sun Power</div>
            <div style={{ fontSize: "20px", opacity: 0.8, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              Delhi NCR solar
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "880px" }}>
          <div style={{ fontSize: "66px", fontWeight: 700, lineHeight: 1.05 }}>
            Rooftop solar that feels clear before it ever feels technical.
          </div>
          <div style={{ fontSize: "28px", lineHeight: 1.4, opacity: 0.88 }}>
            Residential, commercial, industrial, subsidy guidance, batteries, inverters, and MMS contracting.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
