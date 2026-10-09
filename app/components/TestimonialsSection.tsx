"use client";

import React from "react";
import { testimonialsData } from "../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="wrap">
        {/* SECTION HEADER */}
        <div className="testimonials-header-clean">
          <div className="eyebrow-pill alt">
            <span className="pulse-dot"></span>
            Verified Client Feedback
          </div>
          <h2 id="testimonials-heading">
            What HVAC operators say <em>about working with us.</em>
          </h2>
          <p className="testimonials-subheading">
            Residential heating and air conditioning contractors across the U.S. who turned high-intent Google searches into qualified service calls.
          </p>

          <div className="aggregate-trust-strip">
            <div className="aggregate-stars">★★★★★</div>
            <span className="aggregate-score">5.0 / 5.0 Rating</span>
            <span className="aggregate-separator">·</span>
            <span className="aggregate-label">Independent Residential HVAC Owners Across the USA</span>
          </div>
        </div>

        {/* 3-COLUMN TESTIMONIAL CARDS */}
        <div className="testimonials-cards-grid">
          {testimonialsData.map((item) => (
            <article key={item.id} className="testimonial-card-clean">
              <div className="card-top-row">
                <div className="card-stars" aria-label={`${item.rating} out of 5 stars`}>
                  {"★".repeat(item.rating)}
                </div>
                <div className="verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Verified Client</span>
                </div>
              </div>

              <blockquote className="card-quote">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="card-highlight">
                <span className="highlight-icon">✓</span>
                <span className="highlight-text">{item.highlight}</span>
              </div>

              <footer className="card-author-info">
                <div className="author-avatar-clean" aria-hidden="true">
                  {item.initials}
                </div>
                <div className="author-meta">
                  <cite className="author-name-clean">{item.author}</cite>
                  <span className="author-role-company">
                    {item.role}, <strong>{item.company}</strong>
                  </span>
                  <span className="author-location">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {item.location}
                  </span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
