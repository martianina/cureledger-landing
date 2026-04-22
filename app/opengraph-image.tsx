import { ImageResponse } from "next/og";

export const alt = "Cureledger — patient-sovereign rare disease data";
export const size = { width: 1200, height: 630 };
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #0a1628 0%, #0d1b30 45%, #132240 100%)",
          color: "#f0f4f8",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 64px",
            maxWidth: 1000,
            gap: 20,
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em" }}>Cureledger</div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(240, 244, 248, 0.88)",
              fontWeight: 500,
            }}
          >
            Patient-owned data for rare disease. End rare disease.
          </div>
          <div
            style={{
              marginTop: 12,
              width: 120,
              height: 4,
              borderRadius: 2,
              background: "linear-gradient(90deg, #56c5fb, #fd9905)",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
