import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — NorthDemand",
  description:
    "Privacy policy and data governance for NorthDemand HVAC customer acquisition services.",
};

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      {/* NAVBAR */}
      <nav className="navbar-header">
        <div className="wrap nav">
          <Link className="logo" href="/" aria-label="NorthDemand Home">
            NORTHDEMAND<span className="logo-dot">.</span>
          </Link>
          <div className="links">
            <Link
              href="/"
              className="btn dark-btn"
              style={{
                padding: "8px 18px",
                fontSize: "12.5px",
                borderRadius: "8px",
              }}
            >
              ← Back to NorthDemand
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="privacy-hero">
        <div className="wrap">
          <div className="privacy-hero-content">
            <div className="eyebrow-pill alt">Data Transparency & Governance</div>
            <h1 className="privacy-title">
              Clear, simple privacy.
              <br />
              <em>No surprises.</em>
            </h1>
            <p className="privacy-subtitle">
              How NorthDemand collects, uses, and protects your information when you
              request a review or explore our HVAC acquisition services.
            </p>
            <div className="privacy-updated-badge">
              <span className="dot green"></span>
              <span>Last updated: October 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT CARD */}
      <main className="privacy-content-wrap">
        <div className="wrap">
          <div className="privacy-card-container">
            {/* 01 / WHAT WE COLLECT */}
            <article className="privacy-section-block">
              <div className="privacy-section-header">
                <span className="privacy-section-num">01 / Collection</span>
                <h2 className="privacy-section-title">What we collect</h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  When you request a Free HVAC Acquisition Review through our website,
                  we collect only the details you explicitly submit in our form:
                </p>
                <ul>
                  <li>Your full name and contact information</li>
                  <li>Work email address</li>
                  <li>Company website address (URL)</li>
                  <li>Biggest acquisition challenge or bottleneck</li>
                  <li>Monthly marketing budget tier (in USD)</li>
                  <li>Any optional project background notes or goals you provide</li>
                </ul>
                <p>
                  We also collect basic, non-personally identifiable visit data (such
                  as pages viewed, general geographic region, and device type) through
                  standard website analytics to measure and optimize site performance.
                </p>
              </div>
            </article>

            {/* 02 / HOW WE USE IT */}
            <article className="privacy-section-block">
              <div className="privacy-section-header">
                <span className="privacy-section-num">02 / Purpose</span>
                <h2 className="privacy-section-title">How we use it</h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  Your information is used strictly to evaluate your current online
                  presence, identify the three biggest opportunities where you may be
                  losing calls or leads, deliver your actionable review, and schedule
                  a discussion call if appropriate.
                </p>
                <div className="privacy-highlight-box">
                  <strong>Our Promise:</strong> We never sell, rent, monetize, or share
                  your contact information or company data with data brokers or
                  unaffiliated third parties.
                </div>
              </div>
            </article>

            {/* 03 / PROCESSORS & THIRD PARTIES */}
            <article className="privacy-section-block">
              <div className="privacy-section-header">
                <span className="privacy-section-num">03 / Infrastructure</span>
                <h2 className="privacy-section-title">Who processes it</h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  We rely on trusted, industry-standard third-party providers to securely
                  run our business operations:
                </p>
                <ul>
                  <li>
                    <strong>Web3Forms:</strong> Processes contact form submissions over
                    encrypted HTTPS and delivers lead notifications directly to our email.
                  </li>
                  <li>
                    <strong>Cal.com:</strong> Facilitates seamless booking of advisory and
                    review calls without double-booking.
                  </li>
                  <li>
                    <strong>Cloudflare &amp; Netlify:</strong> High-performance, secure
                    cloud hosting infrastructure delivering content globally with DDoS
                    protection.
                  </li>
                </ul>
                <p>
                  These platforms process your data solely on our behalf under strict
                  contractual data processing terms.
                </p>
              </div>
            </article>

            {/* 04 / EMAIL COMMUNICATIONS */}
            <article className="privacy-section-block">
              <div className="privacy-section-header">
                <span className="privacy-section-num">04 / Communication</span>
                <h2 className="privacy-section-title">Email policy</h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  We dislike spam as much as you do. When you request a review, you will
                  receive direct, human communication regarding your specific HVAC
                  website analysis.
                </p>
                <p>
                  If you ever decide you no longer wish to hear from us, reply
                  &ldquo;unsubscribe&rdquo; to any email, and we will promptly cease all
                  future correspondence.
                </p>
              </div>
            </article>

            {/* 05 / YOUR RIGHTS & CHOICES */}
            <article className="privacy-section-block">
              <div className="privacy-section-header">
                <span className="privacy-section-num">05 / Control</span>
                <h2 className="privacy-section-title">Your choices</h2>
              </div>
              <div className="privacy-section-body">
                <p>
                  You maintain full control over the personal information you share with us.
                  You have the right at any time to:
                </p>
                <ul>
                  <li>Request a copy of the information we have on file for you.</li>
                  <li>Request corrections to any inaccurate business or personal information.</li>
                  <li>Request immediate and permanent deletion of your data from our systems.</li>
                </ul>
                <p>
                  To exercise any of these choices, simply reply to any email sent to you
                  by NorthDemand, and we will fulfill your request without hesitation.
                </p>
              </div>
            </article>

            {/* BOTTOM CALLOUT BANNER */}
            <div className="privacy-cta-banner">
              <div className="privacy-cta-left">
                <h3>Ready to improve your HVAC customer acquisition?</h3>
                <p>Get your free, actionable 3-point website breakdown in your inbox.</p>
              </div>
              <div className="privacy-cta-actions">
                <Link href="/#contact" className="privacy-cta-btn-lime">
                  Get Free HVAC Review →
                </Link>
                <Link href="/" className="privacy-cta-btn-ghost">
                  Explore Showcase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap foot">
          <span>NORTHDEMAND · HVAC CUSTOMER ACQUISITION</span>
          <span>
            Original demonstration work · No fabricated client results ·{" "}
            <Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
