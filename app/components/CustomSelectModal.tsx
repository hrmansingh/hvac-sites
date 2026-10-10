"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface CustomSelectModalProps {
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  modalTitle?: string;
  id?: string;
  hasError?: boolean;
}

export default function CustomSelectModal({
  name,
  options,
  value,
  onChange,
  placeholder = "Select an option…",
  required = false,
  modalTitle = "Select Option",
  id,
  hasError = false,
}: CustomSelectModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect mobile viewport (<= 768px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lock body scroll on mobile when modal sheet is open
  useEffect(() => {
    if (isOpen && isMobile) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, isMobile]);

  // Handle click outside to close desktop dropdown
  useEffect(() => {
    if (!isOpen || isMobile) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isMobile]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const fieldId = id || `custom-select-${name}`;

  return (
    <div ref={containerRef} className="custom-select-container">
      {/* Hidden input for standard form submission and validation */}
      <input
        type="text"
        name={name}
        value={value}
        required={required}
        readOnly
        tabIndex={-1}
        aria-hidden="true"
        className="custom-select-hidden-input"
        onChange={() => {}}
      />

      {/* Trigger Button */}
      <button
        ref={triggerRef}
        id={fieldId}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`custom-select-trigger ${isOpen ? "is-open" : ""} ${
          !value ? "is-placeholder" : ""
        } ${hasError && !value ? "is-invalid" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="custom-select-trigger-text">
          {value || placeholder}
        </span>
        <span className="custom-select-chevron" aria-hidden="true">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>

      {/* DESKTOP POPOVER DROPDOWN */}
      {isOpen && !isMobile && (
        <div className="custom-select-dropdown" role="listbox" tabIndex={-1}>
          <div className="custom-select-options-list">
            {options.map((opt) => {
              const isSelected = opt === value;
              return (
                <button
                  key={opt}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`custom-select-option ${
                    isSelected ? "is-selected" : ""
                  }`}
                  onClick={() => handleSelect(opt)}
                >
                  <span className="option-text">{opt}</span>
                  {isSelected && (
                    <span className="option-check-icon" aria-hidden="true">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM SHEET MODAL */}
      {isOpen &&
        isMobile &&
        mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="option-modal-backdrop"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
            role="presentation"
          >
            <div
              className="option-modal-sheet"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${fieldId}-title`}
            >
              {/* Grab handle */}
              <div className="option-modal-handle" aria-hidden="true"></div>

              {/* Header */}
              <div className="option-modal-header">
                <div>
                  <span className="option-modal-eyebrow">Select Option</span>
                  <h3 id={`${fieldId}-title`} className="option-modal-title">
                    {modalTitle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="option-modal-close-btn"
                  aria-label="Close option picker"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Options List */}
              <div
                className="option-modal-list"
                role="listbox"
                aria-label={modalTitle}
              >
                {options.map((opt) => {
                  const isSelected = opt === value;
                  return (
                    <button
                      key={opt}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      className={`option-modal-item ${
                        isSelected ? "is-selected" : ""
                      }`}
                      onClick={() => handleSelect(opt)}
                    >
                      <span className="option-item-text">{opt}</span>
                      {isSelected ? (
                        <span
                          className="option-item-check active"
                          aria-hidden="true"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      ) : (
                        <span
                          className="option-item-check radio-circle"
                          aria-hidden="true"
                        ></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
