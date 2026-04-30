import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          fontSize: 18,
          fontWeight: 400,
          color: "#111111",
          letterSpacing: "-0.03em",
        }}
      >
        bf
      </div>
    ),
    { ...size }
  );
}
