import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 80% 10%, #3b1d6e 0%, #0b0714 45%), radial-gradient(circle at 10% 90%, #4a3a08 0%, #0b0714 55%), #0b0714",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 22,
            background: "#8b5cf6",
            color: "white",
            fontSize: 44,
            fontWeight: 800,
          }}
        >
          TV
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            letterSpacing: -1,
          }}
        >
          Greek IPTV
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 32,
            color: "#a79bc4",
          }}
        >
          Premium Greek IPTV · 4K & Full HD
        </div>
      </div>
    ),
    { ...size }
  );
}
