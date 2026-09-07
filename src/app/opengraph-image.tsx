import { ImageResponse } from "next/og";
import { siteUrl } from "@/lib/site";

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
          background: "linear-gradient(135deg, #0b192c 0%, #0284c7 62%, #22c55e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
          }}
        >
          <img
            src={`${siteUrl}/images/logo.png`}
            width={360}
            height={196}
            alt="SUNPOWER"
            style={{
              objectFit: "contain",
              objectPosition: "left center",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "20px", opacity: 0.8, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              Delhi NCR solar
            </div>
          </div>
        </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "880px" }}>
          <div style={{ fontSize: "66px", fontWeight: 700, lineHeight: 1.05 }}>
            SUNPOWER | SOLAR SOLUTIONS in Delhi NCR
          </div>
          <div style={{ fontSize: "28px", lineHeight: 1.4, opacity: 0.88 }}>
            Residential, commercial, subsidy-linked solar solutions
          </div>
        </div>
      </div>
    ),
    size,
  );
}
