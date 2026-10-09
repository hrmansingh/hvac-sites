"use client";

import React, { useState } from "react";
import { faqItems } from "../data/faq";

export default function FAQSection() {
  // Start with first item open so visitors immediately see the accordion behavior
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "01": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Divide into 2 balanced columns for desktop: 5 in column A, 5 in column B
  const midPoint = Math.ceil(faqItems.length / 2);
  const col1 = faqItems.slice(0, midPoint);
  const col2 = faqItems.slice(midPoint);

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="wrap">
        {/* SECTION HEADER */}
        <div className="faq-header">
          <div className="eyebrow-pill alt">Questions &amp; Clarity</div>
          <h2 id="faq-heading" className="faq-title">
            Frequently asked questions.
            <br />
            <em>Straight answers.</em>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about our approach, what the Free Acquisition Review covers, and what to expect when we work together.
          </p>
        </div>

        {/* TWO-COLUMN ACCORDION GRID */}
        <div className="faq-two-col-grid">
          {/* COLUMN 1 */}
          <div className="faq-column">
            {col1.map((item) => {
              const isOpen = Boolean(openItems[item.id]);
              return (
                <div
                  key={item.id}
                  className={`faq-accordion-item ${isOpen ? "open" : ""}`}
                >
                  <h3>
                    <button
                      id={`faq-btn-${item.id}`}
                      type="button"
                      className="faq-accordion-trigger"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                    >
                      <span className="faq-num">{item.number}</span>
                      <span className="faq-q-text">{item.question}</span>
                      <span className="faq-icon-pill" aria-hidden="true">
                        <span className={`faq-plus-minus ${isOpen ? "is-open" : ""}`}></span>
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      className="faq-accordion-panel expanded"
                    >
                      <div className="faq-answer-inner">
                        <p>
                          {item.highlightText ? (
                            <>
                              {item.answer.split(item.highlightText)[0]}
                              <strong>{item.highlightText}</strong>
                              {item.answer.split(item.highlightText)[1]}
                            </>
                          ) : (
                            item.answer
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* COLUMN 2 */}
          <div className="faq-column">
            {col2.map((item) => {
              const isOpen = Boolean(openItems[item.id]);
              return (
                <div
                  key={item.id}
                  className={`faq-accordion-item ${isOpen ? "open" : ""}`}
                >
                  <h3>
                    <button
                      id={`faq-btn-${item.id}`}
                      type="button"
                      className="faq-accordion-trigger"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                    >
                      <span className="faq-num">{item.number}</span>
                      <span className="faq-q-text">{item.question}</span>
                      <span className="faq-icon-pill" aria-hidden="true">
                        <span className={`faq-plus-minus ${isOpen ? "is-open" : ""}`}></span>
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      className="faq-accordion-panel expanded"
                    >
                      <div className="faq-answer-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CLOSING CTA CARD */}
        <div className="faq-closing-cta">
          <div className="closing-cta-content">
            <span className="closing-cta-eyebrow">READY TO UNCOVER HIDDEN DEMAND?</span>
            <h3 className="closing-cta-title">Find out where you&apos;re losing leads.</h3>
            <p className="closing-cta-desc">
              Request a free review of your customer acquisition journey. We&apos;ll identify the 3 biggest places where calls are being lost and explain exactly how to fix them.
            </p>
          </div>
          <div className="closing-cta-action">
            <a href="#contact" className="btn dark-btn closing-cta-btn">
              Get the free review →
            </a>
            <span className="closing-cta-badge">No obligation · 100% free review</span>
          </div>
        </div>
      </div>
    </section>
  );
}
