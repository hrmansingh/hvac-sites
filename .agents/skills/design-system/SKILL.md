---
name: design-system
description: Guidelines, design tokens, responsive standards, and component patterns for creating ultra-attractive, premium, wowed, and mobile-friendly interfaces for NorthDemand HVAC acquisition web applications.
---

# NorthDemand Design System & Mobile UX Guidelines

This skill provides comprehensive instructions for designing and implementing high-converting, visually stunning, modern, and mobile-first user interfaces for NorthDemand.

---

## 1. Visual Aesthetics & Design Philosophy

### Core Aesthetic Principles
- **Modern & Premium Feel**: Avoid generic default browser styling or plain primary colors. Use curated HSL palette tokens, rich dark modes, subtle glassmorphism (`backdrop-filter: blur(12px)`), and smooth gradient accents.
- **Typography & Scale**: Pair strong display serif/sans headlines (`Libre Baskerville`, `Outfit`, `DM Sans`) with readable body fonts (`Inter`, `DM Sans`). Use dynamic fluid type with CSS `clamp()`.
- **Elevation & Depth**: Layer elements with layered soft box-shadows (`rgba(0, 0, 0, 0.05)` to `rgba(0, 0, 0, 0.2)`), subtle 1px border highlights, and dark-mode depth.
- **Micro-Animations**: Add subtle hover and active transitions (`transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`) for interactive buttons, input focus states, and card hover lifts.

---

## 2. Mobile-First & Responsive Standards

### Viewport & Layout
- **Mobile-First CSS**: Always write base CSS targeting mobile viewports (< 640px) first, then enhance for tablet (`@media (min-width: 768px)`) and desktop (`@media (min-width: 1024px)`).
- **Dynamic Viewport Height**: Use `100dvh` or `100svh` instead of static `100vh` to prevent mobile browser address bar layout jumps.
- **Tap Targets**: All buttons, links, select options, and form inputs must have a minimum touch target size of **44px x 44px** with adequate touch padding (`12px 18px`).
- **Horizontal Overflow Prevention**: Ensure `max-width: 100%` and `overflow-x: hidden` on root containers. Use `flex-wrap: wrap` or CSS Grid (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) to handle dynamic content gracefully.

### Mobile Navigation & Header
- **Sticky Header**: Implement a fixed top navigation bar with `backdrop-filter: blur(16px)` and translucent background (`rgba(15, 23, 42, 0.85)`).
- **Mobile Menu**: Provide a touch-friendly mobile drawer menu or full-screen overlay on smaller screens.

---

## 3. Color Tokens & Theme System

```css
:root {
  /* Brand Palette */
  --bg-primary: #0a0f1d;
  --bg-surface: #12192c;
  --bg-card: rgba(255, 255, 255, 0.04);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-glow: rgba(56, 189, 248, 0.3);

  /* Typography Colors */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;

  /* Accent & High Intent CTAs */
  --accent-primary: #0284c7;
  --accent-hover: #0369a1;
  --accent-glow: rgba(2, 132, 199, 0.4);
  --accent-warm: #f59e0b;

  /* Spacing Scale */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2.5rem;
  --space-2xl: 4rem;

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
}
```

---

## 4. Mobile Form Optimization & High Conversion CTAs

### Touch & Keyboard UX
- **Input Types & Attributes**: Set proper `type`, `inputmode`, `autoComplete`, and `autoCapitalize` attributes (e.g., `type="email" inputmode="email"`, `type="tel" inputmode="tel"`).
- **Focus Rings**: Never remove focus rings completely. Use custom high-contrast focus rings (`outline: 2px solid var(--accent-primary)` with `outline-offset: 2px`).
- **Interactive Feedback**: Show immediate feedback upon submission (sending state, success validation state, or helpful inline error message).

### Conversion Elements
- **Mobile Sticky CTA Bar**: On mobile viewports (< 768px), display a fixed bottom CTA bar for primary conversion actions ("Get Free Review →" / "Call Now").

---

## 5. Checklist for Any UI Modification
- [ ] Tested layout on 320px, 375px, 768px, and 1280px screen widths.
- [ ] No horizontal scrollbars or overflow issues.
- [ ] Touch targets are at least 44px tall and wide.
- [ ] Contrast ratio between text and background meets WCAG AA (>= 4.5:1).
- [ ] Hover and focus states are clearly visible with smooth transitions.
