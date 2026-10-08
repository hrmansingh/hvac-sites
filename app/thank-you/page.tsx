import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review request received — NorthDemand",
  description: "Thank you for submitting your HVAC acquisition review request.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main
      style={{
        margin: 0,
        background: "#f4f6f4",
        color: "#111518",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "20px",
      }}
    >
      <div
        className="card"
        style={{
          width: "min(620px, 100%)",
          background: "#ffffff",
          border: "1px solid #e2e7e8",
          borderRadius: "16px",
          padding: "48px 42px",
          boxShadow: "0 15px 45px rgba(15, 22, 25, 0.08)",
        }}
      >
        <div
          className="eyebrow"
          style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 800,
            color: "#748d0d",
            marginBottom: "12px",
          }}
        >
          NorthDemand
        </div>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 46px)",
            lineHeight: 0.98,
            letterSpacing: "-0.05em",
            margin: "12px 0 18px",
            fontWeight: 850,
          }}
        >
          Got it. I&apos;m on it.
        </h1>
        <p
          style={{
            color: "#55626a",
            lineHeight: 1.65,
            fontSize: "16px",
            margin: "0 0 24px",
          }}
        >
          I&apos;ll review your website and email you the three biggest places I
          see calls being lost. If you&apos;d rather talk it through, you can also
          pick a time for a free 20-minute call.
        </p>
        <a
          className="btn"
          href="https://cal.com/dhrvmehta/free-hvac-review"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "8px",
            background: "#0f1619",
            color: "#ffffff",
            padding: "14px 22px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "13px",
            letterSpacing: "0.02em",
            boxShadow: "0 4px 16px rgba(15, 22, 25, 0.2)",
            transition: "all 0.2s ease",
          }}
        >
          BOOK A 20-MINUTE CALL →
        </a>
      </div>
    </main>
  );
}
