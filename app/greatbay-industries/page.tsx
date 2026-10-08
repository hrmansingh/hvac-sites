"use client";

import { useState } from "react";

export default function GreatBayIndustriesPage() {
  const [view, setView] = useState<"before" | "after">("before");

  return (
    <>
      <style jsx global>{`
        :root {
          --orange: #f26522;
          --orange-dark: #d94e0e;
          --orange-light: #fff7ed;
          --orange-glow: rgba(242, 101, 34, 0.25);
          --navy: #0f2942;
          --navy-dark: #0a1c2e;
          --navy-light: #163656;
          --ink: #0f172a;
          --muted: #475569;
          --muted-light: #64748b;
          --line: #e2e8f0;
          --paper: #f8fafc;
          --white: #ffffff;
          --shadow-card: 0 10px 30px rgba(15, 41, 66, 0.06);
          --shadow-float: 0 20px 40px rgba(15, 41, 66, 0.15);
          --radius-sm: 8px;
          --radius-md: 12px;
          --radius-lg: 20px;
          --radius-full: 9999px;
          --max-width: 1240px;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--ink);
          background: var(--white);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        a { text-decoration: none; color: inherit; transition: all 0.2s ease; }
        .container { width: min(calc(100% - 40px), var(--max-width)); margin: 0 auto; }

        /* CASE STUDY TOP STRIP */
        .case-study-bar {
          background: #0a192f;
          color: #fff;
          padding: 12px 0;
          position: sticky;
          top: 0;
          z-index: 200;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .case-study-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .case-study-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          font-weight: 700;
        }
        .pill-tag {
          background: rgba(242, 101, 34, 0.25);
          border: 1px solid var(--orange);
          color: #ff9d66;
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .toggle-controls {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.08);
          padding: 4px;
          border-radius: 99px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .toggle-btn {
          padding: 7px 18px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 750;
          border: none;
          background: transparent;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .toggle-btn.active {
          background: var(--orange);
          color: #fff;
          box-shadow: 0 2px 10px rgba(242, 101, 34, 0.4);
        }
        .toggle-btn.active-before {
          background: #dc2626;
          color: #fff;
          box-shadow: 0 2px 10px rgba(220, 38, 38, 0.4);
        }

        /* BEFORE VIEW (LEGACY WEBSITE) */
        .before-view-container {
          background: #e2e8f0;
          min-height: 750px;
          padding: 36px 20px;
        }

        /* HEADER */
        .header {
          position: sticky;
          top: 50px;
          z-index: 100;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
        }
        .header-inner {
          height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--navy) 0%, #16385c 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          font-weight: 900;
          font-size: 22px;
        }
        .logo-text {
          font-size: 20px;
          font-weight: 850;
          letter-spacing: -0.03em;
          color: var(--navy);
          line-height: 1.1;
          display: flex;
          flex-direction: column;
        }
        .logo-text span { font-size: 11px; font-weight: 800; letter-spacing: 0.12em; color: var(--muted-light); }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          font-size: 14px;
          font-weight: 600;
          color: #334155;
        }
        .nav-links a:hover { color: var(--orange); }
        .nav-dropdown::after { content: ' ▾'; font-size: 10px; color: #94a3b8; }

        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .phone-cta {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 800;
          color: var(--navy);
        }
        .phone-cta small { display: block; font-size: 11px; color: var(--muted-light); font-weight: 500; }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-orange {
          background: var(--orange);
          color: var(--white);
          border: 1px solid var(--orange);
          box-shadow: 0 4px 14px rgba(242, 101, 34, 0.3);
        }
        .btn-orange:hover {
          background: var(--orange-dark);
          border-color: var(--orange-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(242, 101, 34, 0.4);
        }
        .btn-dark-glass {
          background: rgba(15, 41, 66, 0.85);
          backdrop-filter: blur(12px);
          color: var(--white);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
        }
        .btn-dark-glass:hover {
          background: var(--navy);
          border-color: var(--orange);
          color: var(--orange);
        }

        /* HERO SECTION */
        .hero {
          position: relative;
          min-height: 600px;
          background: linear-gradient(90deg, rgba(15, 41, 66, 0.92) 0%, rgba(15, 41, 66, 0.5) 100%),
                      url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
          color: var(--white);
          padding: 80px 0 100px;
          display: flex;
          align-items: center;
        }
        .hero-content {
          max-width: 680px;
        }
        .hero-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #ff9d66;
          margin-bottom: 16px;
        }
        .hero h1 {
          font-size: clamp(44px, 5.5vw, 68px);
          line-height: 1.02;
          letter-spacing: -0.04em;
          font-weight: 800;
          margin-bottom: 20px;
        }
        .hero h1 span.dot { color: var(--orange); }
        .hero-desc {
          font-size: 18px;
          line-height: 1.6;
          color: #e2e8f0;
          margin-bottom: 32px;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }

        /* TRUST BAR */
        .trust-bar {
          background: var(--white);
          border-bottom: 1px solid var(--line);
          padding: 24px 0;
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .trust-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-right: 20px;
          border-right: 1px solid var(--line);
        }
        .trust-card:last-child { border-right: 0; }
        .trust-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--orange-light);
          border: 1px solid #ffedd5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--orange);
          font-size: 20px;
          flex-shrink: 0;
        }
        .trust-title { font-size: 14px; font-weight: 800; color: var(--navy); margin-bottom: 2px; }
        .trust-sub { font-size: 12px; color: var(--muted-light); }

        /* SERVICES SECTION */
        .services-section {
          padding: 96px 0;
          background: #f8fafc;
        }
        .section-top-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: flex-end;
          margin-bottom: 48px;
        }
        .section-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 10px;
        }
        .section-title {
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.08;
          letter-spacing: -0.04em;
          font-weight: 800;
          color: var(--navy);
        }
        .section-desc { font-size: 16px; color: var(--muted); line-height: 1.6; }

        .promo-banner {
          background: linear-gradient(135deg, var(--navy) 0%, #163656 100%);
          border-radius: var(--radius-md);
          padding: 32px;
          color: var(--white);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: center;
          margin-bottom: 40px;
          box-shadow: var(--shadow-card);
        }
        .promo-banner h3 { font-size: 24px; font-weight: 800; margin-bottom: 8px; }
        .promo-banner p { font-size: 14px; color: #cbd5e1; line-height: 1.5; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .service-card {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }
        .service-card:hover {
          transform: translateY(-6px);
          border-color: #ffc7a8;
          box-shadow: 0 20px 40px rgba(242, 101, 34, 0.12);
        }
        .service-img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          display: block;
        }
        .service-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .service-icon-sm {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--orange-light);
          color: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .service-card h4 { font-size: 17px; font-weight: 800; color: var(--navy); margin-bottom: 8px; }
        .service-card p { font-size: 13px; color: var(--muted); line-height: 1.5; margin-bottom: 16px; }
        .service-link { font-size: 12px; font-weight: 800; color: var(--orange); margin-top: auto; display: inline-flex; align-items: center; gap: 4px; }

        /* WHY SECTION */
        .why-section {
          padding: 96px 0;
          background: var(--white);
          border-top: 1px solid var(--line);
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: start;
        }
        .why-lead { font-size: 15px; color: var(--muted); line-height: 1.65; margin-bottom: 28px; }
        .profiles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 32px;
        }
        .profile-card {
          background: #f8fafc;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          padding: 20px;
        }
        .profile-head { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
        .profile-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--orange);
        }
        .profile-name { font-size: 16px; font-weight: 800; color: var(--navy); }
        .profile-role { font-size: 12px; color: var(--orange); font-weight: 700; }
        .profile-exp { font-size: 11px; color: var(--muted-light); }
        .profile-bio { font-size: 12px; color: var(--muted); line-height: 1.5; }

        .why-features {
          display: grid;
          gap: 16px;
          background: #f8fafc;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          padding: 28px;
        }
        .why-feature-row { display: flex; gap: 14px; align-items: center; }
        .why-feature-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: var(--orange-light);
          color: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }
        .why-feature-row h5 { font-size: 14px; font-weight: 800; color: var(--navy); }
        .why-feature-row p { font-size: 12px; color: var(--muted); }

        /* TESTIMONIAL BANNER */
        .testimonial-banner {
          position: relative;
          background: linear-gradient(90deg, rgba(15, 41, 66, 0.95) 0%, rgba(15, 41, 66, 0.85) 100%),
                      url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
          color: var(--white);
          padding: 80px 0;
        }
        .quote-box {
          max-width: 860px;
          background: rgba(15, 41, 66, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-md);
          padding: 36px 40px;
        }
        .quote-mark { font-size: 48px; line-height: 1; color: var(--orange); font-family: Georgia, serif; }
        .quote-text { font-size: 19px; line-height: 1.6; font-weight: 600; color: #f1f5f9; margin-bottom: 20px; }
        .quote-author { font-size: 14px; font-weight: 800; color: var(--white); }
        .quote-location { font-size: 12px; color: #94a3b8; }
        .stars { color: #f59e0b; margin-top: 6px; font-size: 14px; }

        /* CONTACT FORM & DETAILS */
        .contact-section {
          padding: 96px 0;
          background: #f8fafc;
          border-top: 1px solid var(--line);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 48px;
          align-items: start;
        }
        .form-box {
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          padding: 36px;
          box-shadow: var(--shadow-card);
        }
        .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .field-full { grid-column: 1 / -1; }
        .field-label { font-size: 12px; font-weight: 800; color: var(--navy); margin-bottom: 6px; display: block; }
        .field-input, .field-select, .field-textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 14px;
          color: var(--ink);
          transition: all 0.2s ease;
        }
        .field-input:focus, .field-select:focus, .field-textarea:focus {
          outline: none;
          border-color: var(--orange);
          box-shadow: 0 0 0 3px rgba(242, 101, 34, 0.15);
        }
        .field-textarea { min-height: 90px; resize: vertical; }

        .contact-info { display: grid; gap: 24px; padding: 12px; }
        .info-row { display: flex; gap: 16px; align-items: flex-start; }
        .info-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--orange-light);
          color: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .info-title { font-size: 16px; font-weight: 800; color: var(--navy); margin-bottom: 2px; }
        .info-desc { font-size: 13px; color: var(--muted); }

        /* BOTTOM BANNER */
        .footer-banner {
          background: var(--navy);
          color: var(--white);
          padding: 48px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-banner-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: 1fr 1fr 1fr; }
          .trust-grid { grid-template-columns: 1fr 1fr; }
          .trust-card { border-right: 0; }
          .why-grid, .contact-grid, .section-top-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
          .nav-links { display: none; }
          .header-right { gap: 10px; }
          .phone-cta { font-size: 13px; }
          .form-grid-2 { grid-template-columns: 1fr; }
          .header { top: 60px; }
        }
      `}</style>

      {/* TOP CASE STUDY STRIP SWITCHER */}
      <div className="case-study-bar">
        <div className="container case-study-inner">
          <div className="case-study-badge">
            <span className="pill-tag">Redesign Showcase</span>
            <span>Great Bay Industries Audit: Legacy Site vs Modern NorthDemand System</span>
          </div>
          <div className="toggle-controls">
            <button
              className={`toggle-btn ${view === "before" ? "active-before" : ""}`}
              onClick={() => setView("before")}
            >
              Original Site (Before)
            </button>
            <button
              className={`toggle-btn ${view === "after" ? "active" : ""}`}
              onClick={() => setView("after")}
            >
              Redesigned System (After)
            </button>
          </div>
        </div>
      </div>

      {/* BEFORE VIEW (EXACT LIVE WEBSITE: https://greatbayindustries.com/) */}
      {view === "before" && (
        <div className="before-view-container">
          <div className="container" style={{ maxWidth: "1140px" }}>
            {/* BROWSER FRAME FOR EXACT LIVE WEBSITE */}
            <div
              style={{
                background: "#1e293b",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
                border: "1px solid #334155",
                marginBottom: "32px",
              }}
            >
              {/* TOOLBAR */}
              <div
                style={{
                  background: "#0f172a",
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  borderBottom: "1px solid #334155",
                }}
              >
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }}></span>
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }}></span>
                  <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981", display: "inline-block" }}></span>
                </div>
                <div
                  style={{
                    flex: 1,
                    maxWidth: "600px",
                    background: "#1e293b",
                    borderRadius: "6px",
                    padding: "6px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "#94a3b8",
                    fontFamily: "monospace",
                  }}
                >
                  <span style={{ color: "#10b981" }}>🔒</span>
                  <span style={{ color: "#f8fafc", fontWeight: "bold" }}>https://greatbayindustries.com/</span>
                </div>
                <a
                  href="https://greatbayindustries.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "#334155",
                    color: "#fff",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Open Live Site ↗
                </a>
              </div>

              {/* LIVE EMBEDDED IFRAME OF GREATBAYINDUSTRIES.COM */}
              <div style={{ position: "relative", width: "100%", height: "720px", background: "#fff" }}>
                <iframe
                  src="https://greatbayindustries.com/"
                  title="Original Great Bay Industries Website"
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </div>

            {/* AUDIT SUMMARY CARD */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #cbd5e1",
                borderRadius: "12px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f2942", marginBottom: "12px" }}>
                🔍 Original Website (greatbayindustries.com) Audit Findings:
              </h3>
              <ul style={{ paddingLeft: "20px", color: "#475569", fontSize: "14px", lineHeight: "1.7" }}>
                <li>
                  <strong>Missing Sticky Mobile Navigation &amp; Direct Phone Action:</strong> Standard desktop links without persistent click-to-call buttons lose high-intent mobile searchers.
                </li>
                <li>
                  <strong>Unstructured Content Hierarchy:</strong> Long vertical image blocks and generic text without prominent trust badges or clear service card breakdown.
                </li>
                <li>
                  <strong>Lack of Local Team Verification &amp; Social Proof:</strong> Founder profiles and customer quotes are buried or omitted, missing opportunities to establish Maine local trust.
                </li>
                <li>
                  <strong>Slow Mobile Conversion Funnel:</strong> Form lacks service selection routing and instant estimation callouts.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* AFTER VIEW (NEW REDESIGNED WEBSITE) */}
      {view === "after" && (
        <div>
          {/* HEADER */}
          <header className="header">
            <div className="container header-inner">
              <div className="logo-wrap">
                <div className="logo-icon">▲</div>
                <div className="logo-text">
                  GREAT BAY
                  <span>INDUSTRIES, LLC</span>
                </div>
              </div>
              <nav className="nav-links">
                <a href="#">Home</a>
                <a href="#services" className="nav-dropdown">Services</a>
                <a href="#about">About</a>
                <a href="#about">Service Area</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
              </nav>
              <div className="header-right">
                <div className="phone-cta">
                  <span>📞 (207) 555-0187</span>
                  <small>Call Today</small>
                </div>
                <a href="#contact" className="btn btn-orange">
                  Request a Quote →
                </a>
              </div>
            </div>
          </header>

          {/* HERO SECTION */}
          <section className="hero">
            <div className="container">
              <div className="hero-content">
                <div className="hero-eyebrow">RESIDENTIAL &amp; COMMERCIAL HVAC SERVICES</div>
                <h1>
                  Comfort Built for Maine<span className="dot">.</span>
                </h1>
                <p className="hero-desc">
                  From efficient heating and cooling to advanced HVAC systems, Great Bay Industries delivers reliable comfort for homes and businesses across Southern and Central Maine.
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="btn btn-orange">
                    Request a Quote →
                  </a>
                  <a href="#contact" className="btn btn-dark-glass">
                    📅 Schedule Service
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* TRUST BAR */}
          <div className="trust-bar">
            <div className="container trust-grid">
              <div className="trust-card">
                <div className="trust-icon-box">🏠</div>
                <div>
                  <div className="trust-title">Residential</div>
                  <div className="trust-sub">Homes &amp; Families</div>
                </div>
              </div>
              <div className="trust-card">
                <div className="trust-icon-box">🏢</div>
                <div>
                  <div className="trust-title">Commercial</div>
                  <div className="trust-sub">Businesses &amp; Facilities</div>
                </div>
              </div>
              <div className="trust-card">
                <div className="trust-icon-box">📍</div>
                <div>
                  <div className="trust-title">Southern &amp; Central Maine</div>
                  <div className="trust-sub">Local &amp; Trusted</div>
                </div>
              </div>
              <div className="trust-card">
                <div className="trust-icon-box">👷</div>
                <div>
                  <div className="trust-title">Experienced Technicians</div>
                  <div className="trust-sub">Skilled &amp; Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES SECTION */}
          <section id="services" className="services-section">
            <div className="container">
              <div className="section-top-grid">
                <div>
                  <div className="section-eyebrow">OUR SERVICES</div>
                  <h2 className="section-title">Complete HVAC Solutions</h2>
                </div>
                <p className="section-desc">
                  We provide a full range of heating, cooling and ventilation services to keep your property comfortable, efficient and running at its best.
                </p>
              </div>

              <div className="promo-banner">
                <div>
                  <h3>Quality Work. Lasting Comfort.</h3>
                  <p>Professional HVAC services backed by experience and a commitment to our Maine community.</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <a href="#contact" className="btn btn-orange">
                    Get Started Today →
                  </a>
                </div>
              </div>

              <div className="services-grid">
                <div className="service-card">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
                    alt="Heat Pumps"
                    className="service-img"
                  />
                  <div className="service-body">
                    <div className="service-icon-sm">🌀</div>
                    <h4>Heat Pumps</h4>
                    <p>Energy-efficient heating and cooling for year-round comfort.</p>
                    <a href="#contact" className="service-link">
                      Learn More →
                    </a>
                  </div>
                </div>

                <div className="service-card">
                  <img
                    src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80"
                    alt="HVAC Design & Installation"
                    className="service-img"
                  />
                  <div className="service-body">
                    <div className="service-icon-sm">⚙</div>
                    <h4>HVAC Design &amp; Installation</h4>
                    <p>Custom systems designed for your space and budget.</p>
                    <a href="#contact" className="service-link">
                      Learn More →
                    </a>
                  </div>
                </div>

                <div className="service-card">
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80"
                    alt="Hydronic Heating"
                    className="service-img"
                  />
                  <div className="service-body">
                    <div className="service-icon-sm">💧</div>
                    <h4>Hydronic Heating</h4>
                    <p>Reliable, efficient and comfortable radiant heating systems.</p>
                    <a href="#contact" className="service-link">
                      Learn More →
                    </a>
                  </div>
                </div>

                <div className="service-card">
                  <img
                    src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80"
                    alt="Natural Gas & Propane"
                    className="service-img"
                  />
                  <div className="service-body">
                    <div className="service-icon-sm">🔥</div>
                    <h4>Natural Gas &amp; Propane</h4>
                    <p>Safe, efficient fuel solutions for your heating needs.</p>
                    <a href="#contact" className="service-link">
                      Learn More →
                    </a>
                  </div>
                </div>

                <div className="service-card">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                    alt="Commercial VRF"
                    className="service-img"
                  />
                  <div className="service-body">
                    <div className="service-icon-sm">🏢</div>
                    <h4>Commercial VRF</h4>
                    <p>Flexible, high-efficiency climate control for large buildings.</p>
                    <a href="#contact" className="service-link">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHY GREAT BAY INDUSTRIES SECTION */}
          <section id="about" className="why-section">
            <div className="container why-grid">
              <div>
                <div className="section-eyebrow">WHY GREAT BAY INDUSTRIES</div>
                <h2 className="section-title">Experience. Expertise. Local Commitment.</h2>
                <p className="why-lead">
                  Led by Ian Archibald and Bill Fenderson, Great Bay Industries brings 30+ years of combined HVAC experience to every project. With deep knowledge in refrigeration, heating, and cooling systems, we deliver reliable solutions for residential and commercial clients throughout Southern and Central Maine.
                </p>
                <a href="#contact" className="btn btn-orange" style={{ marginBottom: "32px" }}>
                  Learn More About Us →
                </a>

                <div className="profiles-grid">
                  <div className="profile-card">
                    <div className="profile-head">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                        alt="Ian Archibald"
                        className="profile-avatar"
                      />
                      <div>
                        <div className="profile-name">Ian Archibald</div>
                        <div className="profile-role">Refrigeration Expertise</div>
                        <div className="profile-exp">15+ Years in Industry</div>
                      </div>
                    </div>
                    <div className="profile-bio">
                      Specializes in refrigeration systems, heat pumps and advanced HVAC solutions.
                    </div>
                  </div>

                  <div className="profile-card">
                    <div className="profile-head">
                      <img
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
                        alt="Bill Fenderson"
                        className="profile-avatar"
                      />
                      <div>
                        <div className="profile-name">Bill Fenderson</div>
                        <div className="profile-role">Design &amp; Installation</div>
                        <div className="profile-exp">15+ Years in Industry</div>
                      </div>
                    </div>
                    <div className="profile-bio">
                      Focuses on heating and cooling design, installation and system optimization.
                    </div>
                  </div>
                </div>
              </div>

              <div className="why-features">
                <div className="why-feature-row">
                  <div className="why-feature-icon">🛡</div>
                  <div>
                    <h5>Licensed &amp; Insured</h5>
                    <p>For Your Peace of Mind</p>
                  </div>
                </div>
                <div className="why-feature-row">
                  <div className="why-feature-icon">🔧</div>
                  <div>
                    <h5>High-Quality</h5>
                    <p>Equipment &amp; Materials</p>
                  </div>
                </div>
                <div className="why-feature-row">
                  <div className="why-feature-icon">👥</div>
                  <div>
                    <h5>Friendly, Local Team</h5>
                    <p>That Cares</p>
                  </div>
                </div>
                <div className="why-feature-row">
                  <div className="why-feature-icon">🍃</div>
                  <div>
                    <h5>Energy-Efficient</h5>
                    <p>Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TESTIMONIAL BANNER */}
          <section id="testimonials" className="testimonial-banner">
            <div className="container">
              <div className="quote-box">
                <div className="quote-mark">“</div>
                <p className="quote-text">
                  Great Bay Industries did an amazing job installing our heat pump system. The team was professional, on time and explained everything. Our home is more comfortable than ever, and we&apos;ve already noticed a big difference in our energy bills!
                </p>
                <div className="quote-author">— Sarah M.</div>
                <div className="quote-location">Homeowner, Southern Maine</div>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="contact-section">
            <div className="container contact-grid">
              <div className="form-box">
                <div className="section-eyebrow">GET IN TOUCH</div>
                <h2 style={{ fontSize: "28px", fontWeight: "800", color: "var(--navy)", marginBottom: "8px" }}>
                  Request a Quote or Schedule Service
                </h2>
                <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "24px" }}>
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); alert("Demo quote request submitted!"); }}>
                  <div className="form-grid-2">
                    <div>
                      <label className="field-label">Full Name *</label>
                      <input className="field-input" required placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="field-label">Phone Number *</label>
                      <input className="field-input" type="tel" required placeholder="(207) 555-0187" />
                    </div>
                    <div>
                      <label className="field-label">Email Address *</label>
                      <input className="field-input" type="email" required placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="field-label">Service Needed *</label>
                      <select className="field-select" required>
                        <option>Select a service</option>
                        <option>Heat Pumps</option>
                        <option>HVAC Installation</option>
                        <option>Hydronic Heating</option>
                        <option>Gas &amp; Propane</option>
                        <option>Commercial VRF</option>
                      </select>
                    </div>
                    <div className="field-full">
                      <label className="field-label">Message (Optional)</label>
                      <textarea className="field-textarea" placeholder="Tell us about your project..."></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-orange" style={{ width: "100%" }}>
                    Send Request →
                  </button>
                </form>
              </div>

              <div className="contact-info">
                <div className="info-row">
                  <div className="info-icon">📞</div>
                  <div>
                    <div className="info-title">(207) 555-0187</div>
                    <div className="info-desc">Call Today</div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-icon">📍</div>
                  <div>
                    <div className="info-title">Serving Southern &amp; Central Maine</div>
                    <div className="info-desc">Local. Reliable. Trusted.</div>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-icon">⏰</div>
                  <div>
                    <div className="info-title">Mon – Fri: 7:00 AM – 5:00 PM</div>
                    <div className="info-desc">Emergency Service Available</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER BANNER */}
          <div className="footer-banner">
            <div className="container footer-banner-inner">
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "4px" }}>Ready for Better Comfort?</h3>
                <p style={{ fontSize: "14px", color: "#94a3b8" }}>
                  Let Great Bay Industries bring reliable, efficient HVAC solutions to your home or business.
                </p>
              </div>
              <a href="#contact" className="btn btn-orange">
                Request a Quote →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
