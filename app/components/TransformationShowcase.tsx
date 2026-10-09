"use client";

import React, { useState } from "react";
import { transformationProjects } from "../data/transformations";

export default function TransformationShowcase() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    transformationProjects[0]?.id || "mcguire-controls"
  );

  const activeProject =
    transformationProjects.find((p) => p.id === selectedProjectId) ||
    transformationProjects[0];

  return (
    <div className="transformation-showcase-section">
      {/* SECTION HEADER */}
      <div className="transformation-head">
        <div>
          <div className="eyebrow-pill alt">Proof of thinking</div>
          <h2 className="transformation-title">
            Same business.
            <br />
            <em>A better first impression.</em>
          </h2>
        </div>
        <div className="transformation-head-right">
          <p className="transformation-desc">
            See how we turn outdated HVAC websites into clearer, more conversion-focused experiences.
          </p>

          {/* PROJECT SWITCHER TABS */}
          {transformationProjects.length > 1 && (
            <div className="transformation-project-tabs" role="tablist" aria-label="Select transformation showcase">
              {transformationProjects.map((proj) => {
                const isActive = proj.id === activeProject.id;
                return (
                  <button
                    key={proj.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`transformation-card-${proj.id}`}
                    className={`project-tab-btn ${isActive ? "active" : ""}`}
                    onClick={() => setSelectedProjectId(proj.id)}
                  >
                    <span className="tab-num">{proj.projectNumber.slice(0, 2)}</span>
                    <span className="tab-client">{proj.clientName}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* COMPARISON SHOWCASE CARD */}
      <div
        id={`transformation-card-${activeProject.id}`}
        className="transformation-card"
        role="region"
        aria-label={`Website transformation case study for ${activeProject.clientName}`}
      >
        {/* CARD TOP BAR */}
        <div className="transformation-card-top">
          <span className="transformation-meta-left">{activeProject.projectNumber}</span>
        </div>

        {/* COMPARISON FRAMES GRID */}
        <div className="comparison-grid">
          {/* BEFORE COLUMN */}
          <div className="comparison-col">
            <div className="comparison-label-wrap">
              <span className="comparison-badge before-badge">BEFORE</span>
              <span className="comparison-hint">Click to inspect legacy site</span>
            </div>

            <a
              href={activeProject.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="browser-preview-frame"
              aria-label={`Open original website for ${activeProject.clientName} (${activeProject.originalDisplayUrl}) in a new tab`}
            >
              <div className="browser-chrome-bar">
                <div className="chrome-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="chrome-url-pill">
                  <span className="lock-icon" aria-hidden="true">🔒</span>
                  <span className="url-text">{activeProject.originalDisplayUrl}</span>
                </div>
                <span className="open-ext-indicator" aria-hidden="true">↗</span>
              </div>
              <div className="preview-image-container">
                <img
                  src={activeProject.beforeImage}
                  alt={`Original website screenshot for ${activeProject.clientName}`}
                  className="preview-screenshot"
                  loading="lazy"
                />
                <div className="preview-hover-overlay">
                  <span className="overlay-btn">Open Original Site ↗</span>
                </div>
              </div>
            </a>
          </div>

          {/* CENTER TRANSFORMATION ARROW */}
          <div className="comparison-arrow-divider" aria-hidden="true">
            <div className="arrow-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>

          {/* AFTER COLUMN */}
          <div className="comparison-col">
            <div className="comparison-label-wrap">
              <span className="comparison-badge after-badge">AFTER</span>
              <span className="comparison-hint">Click to inspect live redesigned site</span>
            </div>

            <a
              href={activeProject.redesignUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="browser-preview-frame after-frame"
              aria-label={`Open redesigned website for ${activeProject.clientName} (${activeProject.redesignDisplayUrl}) in a new tab`}
            >
              <div className="browser-chrome-bar">
                <div className="chrome-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="chrome-url-pill">
                  <span className="lock-icon" aria-hidden="true">🔒</span>
                  <span className="url-text">{activeProject.redesignDisplayUrl}</span>
                </div>
                <span className="open-ext-indicator after-icon" aria-hidden="true">↗</span>
              </div>
              <div className="preview-image-container">
                <img
                  src={activeProject.afterImage}
                  alt={`Redesigned modern website screenshot for ${activeProject.clientName}`}
                  className="preview-screenshot"
                  loading="lazy"
                />
                <div className="preview-hover-overlay after-overlay">
                  <span className="overlay-btn after-btn">Open Live Redesign ↗</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* CARD BOTTOM SUMMARY BAR */}
        <div className="transformation-card-bottom">
          <div className="bottom-summary-left">
            <span className="the-redesign-tag">THE REDESIGN</span>
            <p className="redesign-summary-text">{activeProject.summary}</p>
          </div>
          <a
            href={activeProject.redesignUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn dark-btn view-live-action"
          >
            View live site ↗
          </a>
        </div>
      </div>

      {/* SUB-POINTS BELOW CARD */}
      <div className="transformation-subpoints">
        <div className="subpoint-item">
          <strong className="subpoint-num">01</strong>
          <span className="subpoint-text">{activeProject.keyPoints[0]}</span>
        </div>
        <div className="subpoint-item">
          <strong className="subpoint-num">02</strong>
          <span className="subpoint-text">{activeProject.keyPoints[1]}</span>
        </div>
      </div>
    </div>
  );
}
