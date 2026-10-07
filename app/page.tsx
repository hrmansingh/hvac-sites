"use client";

import { useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "error">(
    "idle"
  );

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
          Object.fromEntries(new FormData(form) as any)
        ),
      });
      const data = await res.json();
      if (data?.success) {
        window.location.href = "thank-you.html";
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
      <nav>
        <div className="wrap nav">
          <a className="logo" href="#">
            NORTHDEMAND<span>.</span>
          </a>
          <div className="links">
            <a href="#system">How it works</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Review</a>
          </div>
          <a className="navbtn" href="#contact">
            Get the free review →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">
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
              <div className="eyebrow">The uncomfortable truth</div>
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
          <div className="work-head">
            <div>
              <div className="eyebrow">Proof of thinking</div>
              <h2>
                Don&apos;t believe me.
                <br />
                <em>Look at the work.</em>
              </h2>
            </div>
            <p>
              Three original demonstration projects. One fictional HVAC company.
              No fake results, reviews or made-up case studies.
            </p>
          </div>
          <div className="portfolio-grid">
            {/* Card 1 */}
            <a className="portfolio-card" href="comfortpeak-hvac-landing-page.html">
              <div className="card-top">
                <span>01 / CONVERSION</span>
                <b>↗</b>
              </div>
              <h3>Make the click convert.</h3>
              <p>A landing page built around the homeowner&apos;s decision to call.</p>
              <div className="mini-ui landing-mini">
                <div className="mini-title">
                  No heat tonight?
                  <br />
                  <em>Let&apos;s get it fixed today.</em>
                </div>
                <div className="mini-btn">Call ComfortPeak →</div>
              </div>
              <strong className="view">Open project →</strong>
            </a>

            {/* Card 2 */}
            <a className="portfolio-card" href="comfortpeak-google-ads-campaign.html">
              <div className="card-top">
                <span>02 / ACQUISITION</span>
                <b>↗</b>
              </div>
              <h3>Catch the demand.</h3>
              <p>
                A Google Search campaign built around high-intent HVAC searches.
              </p>
              <div className="mini-ui ads-mini">
                <div className="ad-label">SPONSORED · GOOGLE SEARCH</div>
                <div className="ad-row">
                  <strong>Furnace Repair Near You</strong>
                  <span>AD</span>
                </div>
                <div className="ad-copy">Same-day heating service · Call now</div>
                <div className="ad-url">comfortpeak-demo.com/furnace-repair</div>
                <div className="keyword-row">
                  <span className="keyword">furnace repair near me</span>
                  <span className="keyword">no heat dallas</span>
                </div>
              </div>
              <strong className="view">Open project →</strong>
            </a>

            {/* Card 3 */}
            <a className="portfolio-card" href="comfortpeak-acquisition-system.html">
              <div className="card-top">
                <span>03 / SYSTEM</span>
                <b>↗</b>
              </div>
              <h3>Make it work together.</h3>
              <p>The complete path from search to qualified opportunity.</p>
              <div className="mini-ui system-mini">
                <div>
                  <span>SEARCH</span>
                  <i>→</i>
                  <span>AD</span>
                  <i>→</i>
                  <span>PAGE</span>
                </div>
                <div className="system-result">QUALIFIED OPPORTUNITY</div>
              </div>
              <strong className="view">Open project →</strong>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="wrap about-grid">
          <div>
            <div className="eyebrow">Who&apos;s behind NorthDemand</div>
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

      {/* CONTACT SECTION */}
      <section id="contact" className="contact">
        <div className="wrap">
          <div className="contact-top">
            <div>
              <div className="eyebrow">Free HVAC Acquisition Review</div>
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
                  <input name="name" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </label>
                <label className="full">
                  Company website
                  <input
                    name="website"
                    type="url"
                    required
                    placeholder="https://yourcompany.com"
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
                <p
                  style={{
                    margin: "14px 0 0",
                    color: "#a23b2b",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
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
            <a href="privacy.html">Privacy</a>
          </span>
        </div>
      </footer>
    </>
  );
}
