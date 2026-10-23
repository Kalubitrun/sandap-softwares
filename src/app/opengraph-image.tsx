import { ImageResponse } from "next/og";

export const alt = "Sandap Softwares — custom software for schools, hospitals, and businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f5f0e6",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-160px",
            top: "-200px",
            width: "620px",
            height: "620px",
            borderRadius: "999px",
            border: "1px solid rgba(20,18,15,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-120px",
            width: "440px",
            height: "440px",
            borderRadius: "999px",
            border: "1px solid rgba(20,18,15,0.06)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "16px",
              backgroundColor: "#14120f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                color: "#f5f0e6",
                fontSize: "38px",
                fontWeight: 600,
                fontFamily: "sans-serif",
                lineHeight: 1,
                marginTop: "-4px",
              }}
            >
              S
            </div>
            <div
              style={{
                position: "absolute",
                right: "11px",
                top: "11px",
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                backgroundColor: "#ad4f27",
                display: "flex",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "30px",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                color: "#14120f",
                lineHeight: 1,
              }}
            >
              sandap
            </div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.28em",
                color: "#7b7365",
                marginTop: "7px",
                textTransform: "uppercase",
              }}
            >
              softwares
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "74px",
              lineHeight: 1.02,
              letterSpacing: "-0.05em",
              color: "#14120f",
              fontWeight: 500,
              maxWidth: "960px",
            }}
          >
            Software built around your organisation.
          </div>
          <div
            style={{
              marginTop: "26px",
              fontSize: "21px",
              color: "#4c463d",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "999px",
                backgroundColor: "#ad4f27",
                display: "flex",
              }}
            />
            Custom systems for schools, hospitals, and businesses
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(20,18,15,0.14)",
            paddingTop: "22px",
            fontSize: "13px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#7b7365",
          }}
        >
          <span>sandapsoftwares.com</span>
          <span>Independent software studio · India</span>
        </div>
      </div>
    ),
    size,
  );
}
