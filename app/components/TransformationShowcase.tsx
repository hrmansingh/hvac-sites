"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { transformationProjects } from "../data/transformations";

export default function TransformationShowcase() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    transformationProjects[0]?.id || "mcguire-controls"
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalView, setModalView] = useState<"before" | "after">("after");
  const [deviceMode, setDeviceMode] = useState<"web" | "mobile">("web");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const activeProject =
    transformationProjects.find((p) => p.id === selectedProjectId) ||
    transformationProjects[0];

  const hasFullScreenshots = Boolean(
    activeProject.beforeFullScreenshot ||
      activeProject.afterFullScreenshot ||
      activeProject.fullScreenshot
  );

  const openModal = (view: "before" | "after") => {
    scrollPositionRef.current = window.scrollY;
    document.body.style.overflow = "hidden";
    setModalView(view);
    const isPhoneMode = typeof window !== "undefined" && window.innerWidth <= 768;
    setDeviceMode(isPhoneMode ? "mobile" : "web");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: "instant" as ScrollBehavior,
      });
    }
  };

  // Scroll to top of modal screenshot every time it opens or mode toggles, & focus close button
  useEffect(() => {
    if (isModalOpen) {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }
  }, [isModalOpen, modalView, deviceMode]);

  // Handle Escape key
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const getModalImageSrc = () => {
    if (modalView === "before") {
      return deviceMode === "mobile"
        ? (activeProject.beforeMobileScreenshot || activeProject.beforeImage)
        : (activeProject.beforeFullScreenshot || activeProject.beforeImage);
    } else {
      return deviceMode === "mobile"
        ? (activeProject.afterMobileScreenshot || activeProject.fullScreenshot || activeProject.afterImage)
        : (activeProject.afterFullScreenshot || activeProject.fullScreenshot || activeProject.afterImage);
    }
  };

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
            <a
              href={activeProject.originalUrl}
              target={hasFullScreenshots ? undefined : "_blank"}
              rel={hasFullScreenshots ? undefined : "noopener noreferrer"}
              title="Preview"
              onClick={(e) => {
                if (hasFullScreenshots) {
                  e.preventDefault();
                  openModal("before");
                }
              }}
              className="browser-preview-frame"
              aria-label="Preview original website"
              role={hasFullScreenshots ? "button" : undefined}
              aria-haspopup={hasFullScreenshots ? "dialog" : undefined}
            >
              <div className="browser-chrome-bar">
                <div className="chrome-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="open-ext-indicator" aria-hidden="true">
                  {hasFullScreenshots ? "⤢" : "↗"}
                </span>
              </div>
              <div className="preview-image-container">
                <img
                  src={activeProject.beforeImage}
                  alt={`Original website screenshot for ${activeProject.clientName}`}
                  className="preview-screenshot"
                  loading="lazy"
                />
                <div className="preview-hover-overlay">
                  <span className="overlay-btn">Preview</span>
                </div>
              </div>
            </a>
          </div>

          {/* CENTER VS BADGE */}
          <div className="comparison-vs-divider" aria-hidden="true">
            <span className="vs-badge">VS</span>
          </div>

          {/* AFTER COLUMN */}
          <div className="comparison-col">
            <a
              href={activeProject.redesignUrl}
              target={hasFullScreenshots ? undefined : "_blank"}
              rel={hasFullScreenshots ? undefined : "noopener noreferrer"}
              title="Preview"
              onClick={(e) => {
                if (hasFullScreenshots) {
                  e.preventDefault();
                  openModal("after");
                }
              }}
              className="browser-preview-frame after-frame"
              aria-label="Preview redesign"
              role={hasFullScreenshots ? "button" : undefined}
              aria-haspopup={hasFullScreenshots ? "dialog" : undefined}
            >
              <div className="browser-chrome-bar">
                <div className="chrome-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="open-ext-indicator after-icon" aria-hidden="true">
                  {hasFullScreenshots ? "⤢" : "↗"}
                </span>
              </div>
              <div className="preview-image-container">
                <img
                  src={activeProject.afterImage}
                  alt={`Redesigned modern website screenshot for ${activeProject.clientName}`}
                  className="preview-screenshot"
                  loading="lazy"
                />
                <div className="preview-hover-overlay after-overlay">
                  <span className="overlay-btn after-btn">Preview</span>
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

      {/* FULL-PAGE SCREENSHOT MODAL */}
      {isModalOpen && typeof document !== "undefined" && createPortal(
        <div
          className="screenshot-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          role="presentation"
        >
          <div
            className="screenshot-modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="screenshot-modal-title"
          >
            <div className="screenshot-modal-header">
              <div className="modal-header-left">
                <div className="modal-chrome-dots" aria-hidden="true">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span id="screenshot-modal-title" className="modal-header-title">
                  {modalView === "before" ? "ORIGINAL PREVIEW" : "REDESIGN PREVIEW"}
                </span>
              </div>

              {/* DEVICE MODE TOGGLE TABS (DESKTOP / MOBILE) */}
              <div className="modal-mode-tabs" role="tablist" aria-label="Device view switcher">
                <button
                  type="button"
                  role="tab"
                  aria-selected={deviceMode === "web"}
                  className={`modal-mode-btn ${deviceMode === "web" ? "active" : ""}`}
                  onClick={() => setDeviceMode("web")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <span>Desktop</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={deviceMode === "mobile"}
                  className={`modal-mode-btn ${deviceMode === "mobile" ? "active" : ""}`}
                  onClick={() => setDeviceMode("mobile")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                  <span>Mobile</span>
                </button>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="screenshot-modal-close-btn"
                aria-label="Close preview modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div
              ref={scrollContainerRef}
              className={`screenshot-modal-body ${deviceMode === "mobile" ? "mobile-viewport-body" : ""}`}
            >
              <div className={`modal-screenshot-wrap ${deviceMode === "mobile" ? "is-mobile-wrap" : ""}`}>
                <img
                  src={getModalImageSrc()}
                  alt={`${activeProject.clientName} ${modalView} ${deviceMode} preview`}
                  className="full-screenshot-img"
                />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
