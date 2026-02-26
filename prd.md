# Collegiate Church Network — 2025 Annual Report Landing Page

## PRD (Product Requirements Document)

---

## Context

The Collegiate Church Network (CCN) is a nonprofit that plants gospel-centered churches on college campuses. Their tagline: "FROM THE CAMPUS. FOR THE KINGDOM." This project creates a web-based landing page for their 2025 Annual Impact Report — a shareable, visually compelling single-page experience designed for donors, partners, and supporters.

The full report content has been provided in `2025 Impact Report Collegiate Church Network.pdf`. All text, stats, stories, and church listings are finalized.

---

## Goals

- Present the 2025 report as a bold, editorial-style single-scroll page
- Reflect CCN's brand (green/grey palette, geometric logo mark, Montserrat typography)
- Static HTML/CSS/JS — no build tools, no framework, no navigation menu
- Responsive and performant across all devices
- Social-sharing optimized (Open Graph meta tags with preview image)

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid/flexbox) |
| Font | Google Fonts — **Montserrat** (multiple weights for hierarchy) |
| Interactivity | Vanilla JS (IntersectionObserver for animations, count-up counters) |
| Build tools | None — open `index.html` directly |
| Hosting | GitHub Pages (preferred) or Netlify. Squarespace is not ideal for a standalone custom page. |

---

## Brand Guidelines

- **Primary green**: `#4EA651` (logo mark)
- **Dark grey**: `#58595B` (logo text / dark backgrounds)
- **Light grey**: `#A7A9AC` (logo chevrons / secondary text)
- **Near-black**: `#2D2D2D` (dark section backgrounds)
- **Off-white**: `#F5F5F5` (light section backgrounds)
- **White**: `#FFFFFF`
- **Typography**: Montserrat — Light (300), Regular (400), SemiBold (600), Bold (700), ExtraBold (800)
- **Logo assets**: `/Logos/` — color stacked, color horizontal, white horizontal, white icon mark

---

## Design Direction

**Bold & editorial** with dark/light section contrast:

- Full-bleed hero with stock campus photography + dark overlay
- Oversized stat numbers with count-up animation on scroll
- Strong visual hierarchy: very large headings (Montserrat ExtraBold) vs. clean body text (Montserrat Regular)
- Alternating dark (charcoal) and light (white/off-white) section backgrounds for dramatic contrast
- Dark sections: Hero, Impact Stats, CTA, Footer
- Light sections: Letters, Stories, Why Campus Ministry, Churches, Financials
- Generous whitespace between sections
- Scroll-triggered fade-in animations
- Thin scroll progress bar at top of viewport
- Pull quotes and highlight text in green for emphasis

---

## Page Structure (13 Sections — Single Scroll)

Content is taken directly from the provided PDF report.

### 1. Hero
- **Background**: Full-bleed stock photo (campus/students) with dark overlay — **DARK**
- **Content**: White CCN logo (mark), "Annual Impact Report", "2025", tagline "From the Campus. For the Kingdom."
- Subtle scroll-down indicator

### 2. Letter from the Executive Director
- **Background**: WHITE
- **Content**: Jason Bennett's opening letter (full text from report)
- Jason's headshot (user will provide)
- Pull quote highlighted in green
- Signed: Jason Bennett | Executive Director

### 3. The Moment We're In: Why Campus Ministry Matters Now
- **Background**: OFF-WHITE
- **Content**: Full text from report explaining the strategic importance of campus ministry

### 4. Who We Are & Why We Exist
- **Background**: WHITE
- **Content**: Mission statement, network description, Scripture reference (Matthew 9:37-38)
- Three-pillar visual: Churches reaching campuses, Discipling students, Developing leaders

### 5. What God Has Been Doing This Year
- **Background**: OFF-WHITE
- **Content**: Year-in-review narrative from report

### 6. Stories of Transformation (5 stories, full text)
- **Background**: Alternating WHITE / OFF-WHITE per story
- **Story 1**: "From Empty to Found" — Fellowship Church / Texas A&M
- **Story 2**: "Generational Discipleship in Action" — H2O Church / University of Cincinnati
- **Story 3**: "From Despair to New Life" — H2O Church / Western Michigan University
- **Story 4**: "Forming Leaders Who Live Missionally" — Leadership Training
- **Story 5**: "From Campus to the Nations" — New Life Church / University of Michigan
- Layout: alternating left/right image-text blocks

### 7. Impact at a Glance
- **Background**: DARK (charcoal)
- **Stats** with count-up animation: 18 Churches, 1,600+ Attendance, ~70% Students, 93% Small Groups, 437 Leaders, 139 Baptisms + 65 Conversions, 2,000+ Mobilized

### 8. How We Steward What You Give
- **Background**: WHITE
- **Content**: Stewardship narrative, ECFA accreditation, three allocation pillars, $135,837 total highlighted

### 9. Our Partners in the Mission
- **Background**: OFF-WHITE
- SVG US map with green dots at church locations
- Regional grid: North (4), East (8), West (6) with church names, campuses, founding years
- Partner logos from collegiate.church

### 10. Looking Ahead
- **Background**: WHITE
- Full forward-looking text from report

### 11. How You Can Join Us (CTA)
- **Background**: DARK
- Three CTA cards: Pray, Give, Connect — each with button

### 12. With Gratitude and Expectation (Closing Letter)
- **Background**: WHITE
- Full closing letter from Jason Bennett

### 13. Footer
- **Background**: DARK (near-black)
- CCN logo, social links, copyright 2025

---

## Scroll Progress Bar

- Thin (3-4px) green bar fixed at top of viewport
- Expands left-to-right as user scrolls

---

## Imagery Strategy

| Asset | Source | Status |
|-------|--------|--------|
| Hero background | Stock photo | Placeholder |
| Jason Bennett headshot | User provides | Pending |
| Story photos (5) | User has some | Partial |
| Partner logos | collegiate.church | To extract |
| US map SVG | Custom build | To create |

---

## File Structure

```
Collegiate Annual Report/
├── index.html
├── styles.css
├── script.js
├── prd.md
├── Logos/
│   ├── Asset 1.png
│   ├── Horizontal Stacked.png
│   ├── White Horizontal Stack.png
│   └── White Mark.png
├── images/
│   ├── hero-bg.jpg
│   ├── jason-bennett.jpg
│   └── story-[1-5].jpg
└── 2025 Impact Report...pdf
```

---

## Implementation Plan

1. Create `prd.md` (this file)
2. Scaffold `index.html` with all sections and actual report content
3. Build `styles.css` — editorial design, dark/light sections, Montserrat, responsive
4. Build US map SVG with church location markers
5. Add `script.js` — progress bar, fade-in animations, count-up counters
6. Pull partner logos from collegiate.church
7. User provides remaining photos; swap placeholders
8. Test & verify across devices
