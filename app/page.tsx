"use client";

import { useState, useEffect } from "react";
import TransformationShowcase from "./components/TransformationShowcase";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "error">(
    "idle"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll and handle keyboard accessibility when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Automatically close mobile menu if viewport resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      if (targetId === "top" || targetId === "") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 60);
      }
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(
          Object.fromEntries(new FormData(form))
        ),
      });
      const data = await res.json();
      if (data?.success) {
        window.location.href = "/thank-you";
      } else {
        throw new Error("failed");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      {/* NAV */}
      <nav className={`navbar-header ${mobileMenuOpen ? "mobile-nav-active" : ""}`}>
        <div className="wrap nav">
          <a
            className="logo"
            href="#"
            onClick={(e) => handleNavClick(e, "#top")}
            aria-label="NorthDemand Home"
          >
            NORTHDEMAND<span className="logo-dot">.</span>
          </a>

          {/* DESKTOP NAV LINKS */}
          <div className="links desktop-links">
            <a href="#system">How it works</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#testimonials">Feedback</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Review</a>
          </div>

          <div className="nav-actions">
            <a className="navbtn" href="#contact">
              Get the free review →
            </a>
            <button
              className={`mobile-toggle ${mobileMenuOpen ? "is-open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <span className="hamburger-box">
                <span className="hamburger-line line-1"></span>
                <span className="hamburger-line line-2"></span>
                <span className="hamburger-line line-3"></span>
              </span>
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        <div
          id="mobile-nav-drawer"
          className={`mobile-drawer ${mobileMenuOpen ? "drawer-open" : ""}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mobile-drawer-inner">
            <div className="mobile-nav-section-label">Navigation</div>
            <div className="mobile-nav-list" role="navigation">
              <a
                href="#system"
                className="mobile-nav-item"
                onClick={(e) => handleNavClick(e, "#system")}
              >
                <div className="mobile-nav-item-content">
                  <span className="mobile-nav-num">01</span>
                  <span className="mobile-nav-text">How it works</span>
                </div>
                <span className="mobile-nav-arrow">→</span>
              </a>
              <a
                href="#work"
                className="mobile-nav-item"
                onClick={(e) => handleNavClick(e, "#work")}
              >
                <div className="mobile-nav-item-content">
                  <span className="mobile-nav-num">02</span>
                  <span className="mobile-nav-text">Work & Redesigns</span>
                </div>
                <span className="mobile-nav-arrow">→</span>
              </a>
              <a
                href="#about"
                className="mobile-nav-item"
                onClick={(e) => handleNavClick(e, "#about")}
              >
                <div className="mobile-nav-item-content">
                  <span className="mobile-nav-num">03</span>
                  <span className="mobile-nav-text">About Dhruv</span>
                </div>
                <span className="mobile-nav-arrow">→</span>
              </a>
              <a
                href="#testimonials"
                className="mobile-nav-item"
                onClick={(e) => handleNavClick(e, "#testimonials")}
              >
                <div className="mobile-nav-item-content">
                  <span className="mobile-nav-num">04</span>
                  <span className="mobile-nav-text">Verified Feedback</span>
                </div>
                <span className="mobile-nav-arrow">→</span>
              </a>
              <a
                href="#faq"
                className="mobile-nav-item"
                onClick={(e) => handleNavClick(e, "#faq")}
              >
                <div className="mobile-nav-item-content">
                  <span className="mobile-nav-num">05</span>
                  <span className="mobile-nav-text">FAQ</span>
                </div>
                <span className="mobile-nav-arrow">→</span>
              </a>
              <a
                href="#contact"
                className="mobile-nav-item"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                <div className="mobile-nav-item-content">
                  <span className="mobile-nav-num">06</span>
                  <span className="mobile-nav-text">Free Review Request</span>
                </div>
                <span className="mobile-nav-arrow">→</span>
              </a>
            </div>

            <div className="mobile-drawer-cta">
              <a
                href="#contact"
                className="mobile-drawer-btn"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                <span>Get the free review</span>
                <span className="btn-arrow">→</span>
              </a>
              <div className="mobile-drawer-status">
                <span className="pulse-dot"></span>
                <span>Direct Google search & conversion for U.S. residential HVAC</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE BACKDROP OVERLAY */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? "backdrop-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow-pill">
                <span className="pulse-dot"></span>
                Customer acquisition for U.S. residential HVAC
              </div>
              <h1>
                A homeowner near you is searching for HVAC help{" "}
                <em>right now.</em>
              </h1>
              <p className="hero-copy">
                In winter it&apos;s &quot;furnace not working.&quot; In summer
                it&apos;s &quot;AC not cooling.&quot; Either way, they call one
                company, not five.
                <br />
                <strong>
                  The question is whether it&apos;s you or your competitor.
                </strong>
              </p>
              <div className="actions">
                <a className="btn dark-btn" href="#contact">
                  Show me where I&apos;m losing demand →
                </a>
                <a className="btn light-btn" href="#work">
                  See the work
                </a>
              </div>
            </div>
            <aside className="hero-note">
              <div className="eyebrow">The NorthDemand job</div>
              <h3>
                Catch the search.
                <br />
                Earn the call.
              </h3>
              <p>
                Google Search. Better conversion. Clean tracking. Constant
                improvement. One path from intent to opportunity.
              </p>
            </aside>
          </div>
          <div className="hero-bottom">
            <span>
              <strong>Built for residential HVAC</strong>
            </span>
            <span>Google Search + conversion</span>
            <span>Calls and enquiries, not vanity metrics</span>
          </div>
        </div>
      </header>

      {/* TRUTH SECTION */}
      <section id="system" className="truth">
        <div className="wrap">
          <div className="truth-grid">
            <div>
              <div className="eyebrow-pill alt">
                The uncomfortable truth
              </div>
              <h2>
                More traffic won&apos;t save a <em>leaky funnel.</em>
              </h2>
              <div className="truth-copy">
                <p>
                  A homeowner doesn&apos;t care about your campaign structure or
                  your CTR.
                </p>
                <p>
                  They care about one thing:{" "}
                  <strong>&quot;Can you fix my heat today?&quot;</strong>
                </p>
                <p className="truth-punch">
                  Every click is a chance to win the job — or hand it to the
                  company down the road.
                </p>
              </div>
            </div>
            <div className="truth-list">
              <div>
                <b>01</b>
                <div>
                  <strong>They search</strong>
                  <span>
                    &quot;Furnace repair near me.&quot; The need already exists.
                    Your job is to show up when it matters.
                  </span>
                </div>
                <div className="moment">
                  <b>THE MOMENT</b>Demand is born
                </div>
              </div>
              <div>
                <b>02</b>
                <div>
                  <strong>They click</strong>
                  <span>
                    Your ad makes a promise. Your page has seconds to make that
                    promise believable.
                  </span>
                </div>
                <div className="moment">
                  <b>THE TEST</b>Trust is earned
                </div>
              </div>
              <div>
                <b>03</b>
                <div>
                  <strong>They hesitate</strong>
                  <span>
                    Confusing copy, weak proof or friction gives them a reason
                    to open the next result.
                  </span>
                </div>
                <div className="moment">
                  <b>THE LEAK</b>The sale slips away
                </div>
              </div>
              <div>
                <b>04</b>
                <div>
                  <strong>They call — or they don&apos;t</strong>
                  <span>
                    Track what actually turns into conversations and qualified
                    opportunities. Then fix what isn&apos;t.
                  </span>
                </div>
                <div className="moment">
                  <b>THE OUTCOME</b>Win the call
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="work">
        <div className="wrap">
          {/* BEFORE & AFTER WEBSITE TRANSFORMATION SHOWCASE */}
          <TransformationShowcase />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="wrap about-grid">
          <div>
            <div className="eyebrow-pill alt">Who&apos;s behind NorthDemand</div>
            <h2>Hi, I&apos;m Dhruv.</h2>
          </div>
          <div className="about-copy">
            <p>
              I write ads, landing pages and email funnels for a living.
              NorthDemand is where I apply that to one industry: residential
              HVAC.
            </p>
            <p>
              I&apos;m early, and I&apos;d rather say so. I&apos;m taking on a
              small number of founding HVAC clients, which means you work
              directly with me, not an account manager. I&apos;m based in India
              and take calls during US mornings.
            </p>
            <p>
              The demo work above is original and clearly labeled. No invented
              results, reviews or case studies.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* FAQ SECTION */}
      <FAQSection />

      {/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <div className="wrap">
          <div className="contact-top">
            <div>
              <div className="eyebrow-pill alt">Free HVAC Acquisition Review</div>
              <h2>
                Maybe you&apos;re leaving good customers <em>on the table.</em>
              </h2>
            </div>
            <p>
              Send your website and email. I&apos;ll look at your site and how
              you show up on Google, then send back the three biggest places I
              see calls being lost. If I don&apos;t see a real opportunity,
              I&apos;ll tell you that too.
            </p>
          </div>
          <div className="contact-card">
            <form
              className="form-side"
              id="acquisition-form"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="af9e49c9-1a88-45ec-b212-93369a0fdb77"
              />
              <input
                type="hidden"
                name="subject"
                value="New HVAC review request - NorthDemand"
              />
              <input
                type="hidden"
                name="from_name"
                value="NorthDemand website"
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="form-grid">
                <label>
                  Name
                  <input name="name" required placeholder="Your name" autoComplete="name" />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    inputMode="email"
                    required
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </label>
                <label className="full">
                  Company website
                  <input
                    name="website"
                    type="text"
                    inputMode="url"
                    required
                    placeholder="yourcompany.com"
                    autoComplete="url"
                  />
                </label>
                <label className="full">
                  What&apos;s costing you the most right now?
                  <select name="biggest-issue">
                    <option>Not enough calls</option>
                    <option>Too many poor-quality leads</option>
                    <option>Leads are too expensive</option>
                    <option>Website isn&apos;t converting</option>
                    <option>I&apos;m not sure</option>
                  </select>
                </label>
              </div>
              <button
                className="btn dark-btn form-submit"
                type="submit"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending"
                  ? "Sending…"
                  : "Request My Free Acquisition Review →"}
              </button>
              {formStatus === "error" && (
                <p className="form-error">
                  The form didn&apos;t send. Please try again in a moment.
                </p>
              )}
              <p className="form-footnote">No pitch if there isn&apos;t a fit.</p>
            </form>
            <aside className="booking">
              <div className="eyebrow">What happens next</div>
              <h3>One form. Three steps.</h3>
              <ol className="next-list">
                <li>
                  I review your website and how you show up on Google.
                </li>
                <li>
                  I email you the three biggest places calls are being lost.
                </li>
                <li>
                  If it&apos;s worth talking about, we book a free 20-minute
                  call.
                </li>
              </ol>
              <p className="booking-note">
                Free · No obligation · No pitch if there isn&apos;t a fit
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap foot">
          <span>NORTHDEMAND · HVAC CUSTOMER ACQUISITION</span>
          <span>
            Original demonstration work · No fabricated client results ·{" "}
            <a href="/privacy">Privacy</a>
          </span>
        </div>
      </footer>

      {/* MOBILE STICKY CTA BAR */}
      <div className={`mobile-cta-bar ${mobileMenuOpen ? "cta-bar-hidden" : ""}`}>
        <a
          href="#contact"
          className="btn dark-btn mobile-cta-btn"
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          Get Free HVAC Review →
        </a>
      </div>
    </>
  );
}
