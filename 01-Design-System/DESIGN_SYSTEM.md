# POLMAN BANDUNG AGGREGATOR - DESIGN SYSTEM

## Version 1.0
**Date:** June 2026  
**Institution:** Politeknik Manufaktur Bandung (POLMAN Bandung)  
**Project:** Centralized Digital Services Aggregator Landing Page

---

## Table of Contents
1. [Introduction](#introduction)
2. [Color Palette](#color-palette)
3. [Typography System](#typography-system)
4. [Grid & Spacing System](#grid--spacing-system)
5. [Components Library](#components-library)
6. [Icon System](#icon-system)
7. [Accessibility Guidelines](#accessibility-guidelines)
8. [Motion & Interactions](#motion--interactions)
9. [Design Rationale](#design-rationale)

---

## 1. INTRODUCTION

### Project Vision
Create a unified, accessible, and user-centered digital hub for Polman Bandung that enables students, faculty, staff, and external visitors to seamlessly access institutional applications and information.

### Design Philosophy
- **Minimalist**: Remove unnecessary elements; focus on essential content
- **Modern**: Contemporary design with clean lines and purposeful whitespace
- **Professional**: Academic institutional aesthetic; trustworthy and authoritative
- **Accessible**: WCAG 2.1 AA compliant; inclusive for all users
- **Performance-First**: Optimized for fast loading; mobile-first approach

---

## 2. COLOR PALETTE

### Primary Colors

#### Primary Navy (Deep Blue)
- **Name:** Polman Navy
- **Hex:** #022a5e
- **RGB:** rgb(2, 42, 94)
- **HSL:** hsl(214, 96%, 19%)
- **Usage:** Main brand color, navigation, primary buttons, headings
- **Rationale:** Deep navy conveys trust, professionalism, and institutional authority. Reflects corporate reliability and academic excellence.

#### Primary Blue (Enhanced)
- **Name:** Polman Blue
- **Hex:** #023780
- **RGB:** rgb(2, 55, 120)
- **HSL:** hsl(215, 97%, 25%)
- **Usage:** Interactive elements, hover states, links, accents
- **Rationale:** Slightly lighter than primary navy; creates visual hierarchy and interactive feedback. Distinguishes interactive elements.

### Secondary Colors

#### Accent Yellow
- **Name:** Polman Gold
- **Hex:** #ffd13c
- **RGB:** rgb(255, 209, 60)
- **HSL:** hsl(46, 100%, 62%)
- **Usage:** Call-to-action buttons, highlights, badges, emphasis
- **Rationale:** Warm, energetic yellow provides strong contrast against navy. Draws attention to important actions and creates visual excitement while maintaining professionalism.

### Neutral Colors

#### Gray - Primary Neutral
- **Name:** Polman Gray
- **Hex:** #82878d
- **RGB:** rgb(130, 135, 141)
- **HSL:** hsl(213, 5%, 53%)
- **Usage:** Body text, secondary information, borders
- **Rationale:** Sophisticated gray that maintains readability while reducing visual weight. Complements navy and white.

#### Extended Neutral Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Off White | #f8f9fa | rgb(248, 249, 250) | Backgrounds, subtle sections |
| Light Gray | #e9ecef | rgb(233, 236, 239) | Borders, dividers, subtle backgrounds |
| Medium Gray | #6c757d | rgb(108, 117, 125) | Secondary text, disabled states |
| Dark Gray | #343a40 | rgb(52, 58, 64) | Primary text (body) |
| Pure White | #ffffff | rgb(255, 255, 255) | Cards, modals, primary backgrounds |
| Pure Black | #000000 | rgb(0, 0, 0) | High contrast text (optional) |

### Status Colors

| Status | Hex | Usage |
|--------|-----|-------|
| Success | #28a745 | Positive actions, confirmations |
| Warning | #ffc107 | Caution, pending states |
| Error | #dc3545 | Errors, critical alerts |
| Info | #17a2b8 | Information, neutral alerts |

### Color Accessibility
- Contrast ratio between primary navy (#022a5e) and white: **13.5:1** ✓ WCAG AAA
- Contrast ratio between primary blue (#023780) and white: **11.8:1** ✓ WCAG AAA
- Contrast ratio between gold (#ffd13c) and navy: **6.2:1** ✓ WCAG AA
- All text meets minimum contrast requirements for accessibility

---

## 3. TYPOGRAPHY SYSTEM

### Font Family

#### Primary Font: Inter
- **Purpose:** Main UI font; excellent for digital interfaces
- **Weights Used:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Fallback:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Rationale:** Modern, clean, highly readable on screens. Professional appearance. Excellent character spacing and metrics. Free and widely available.

#### Secondary Font: Georgia
- **Purpose:** Accent headings, quotes, editorial content
- **Style:** Serif (optional, for premium feel)
- **Fallback:** 'Times New Roman', serif
- **Rationale:** Adds warmth and tradition; appropriate for academic institution. Used sparingly for visual interest.

### Typography Hierarchy

#### Heading 1 (H1)
- **Font Size:** 48px (desktop) / 32px (mobile)
- **Weight:** 700 (Bold)
- **Line Height:** 1.2 (57.6px / 38.4px)
- **Letter Spacing:** -0.02em
- **Color:** #022a5e (Primary Navy)
- **Usage:** Page titles, hero section main headline
- **Margin:** 32px bottom

#### Heading 2 (H2)
- **Font Size:** 36px (desktop) / 24px (mobile)
- **Weight:** 700 (Bold)
- **Line Height:** 1.25 (45px / 30px)
- **Letter Spacing:** -0.01em
- **Color:** #022a5e (Primary Navy)
- **Usage:** Section titles, major dividers
- **Margin:** 28px bottom

#### Heading 3 (H3)
- **Font Size:** 28px (desktop) / 20px (mobile)
- **Weight:** 600 (Semibold)
- **Line Height:** 1.3 (36.4px / 26px)
- **Color:** #023780 (Primary Blue)
- **Usage:** Subsection titles, card titles
- **Margin:** 20px bottom

#### Heading 4 (H4)
- **Font Size:** 20px (desktop) / 18px (mobile)
- **Weight:** 600 (Semibold)
- **Line Height:** 1.4 (28px / 25.2px)
- **Color:** #343a40 (Dark Gray)
- **Usage:** Component titles, labels
- **Margin:** 16px bottom

#### Body Text
- **Font Size:** 16px (desktop) / 14px (mobile)
- **Weight:** 400 (Regular)
- **Line Height:** 1.6 (25.6px / 22.4px)
- **Letter Spacing:** 0
- **Color:** #343a40 (Dark Gray)
- **Usage:** Main content, paragraphs
- **Margin:** 16px bottom

#### Body Text Small
- **Font Size:** 14px
- **Weight:** 400 (Regular)
- **Line Height:** 1.5 (21px)
- **Color:** #6c757d (Medium Gray)
- **Usage:** Secondary information, captions
- **Margin:** 12px bottom

#### Button Text
- **Font Size:** 14px / 16px
- **Weight:** 600 (Semibold)
- **Line Height:** 1.4
- **Text Transform:** None (sentence case)
- **Letter Spacing:** 0.5px
- **Usage:** CTA buttons, interactive elements

#### Navigation Text
- **Font Size:** 14px
- **Weight:** 500 (Medium)
- **Color:** #022a5e (Primary Navy)
- **Hover:** #023780 (Primary Blue)

---

## 4. GRID & SPACING SYSTEM

### Grid System

**Type:** 12-column CSS Grid (Desktop)

#### Grid Breakpoints

| Device | Breakpoint | Columns | Container Width | Gutter |
|--------|-----------|---------|-----------------|--------|
| Mobile (XS) | < 576px | 1-2 | 100% | 16px |
| Small Tablet (SM) | 576px - 767px | 4 | 540px | 16px |
| Tablet (MD) | 768px - 991px | 6-8 | 720px | 20px |
| Desktop (LG) | 992px - 1199px | 12 | 960px | 24px |
| Large Desktop (XL) | 1200px + | 12 | 1140px | 32px |

### Spacing Scale (8px Base Unit)

```
Base Unit: 8px

xs  = 4px   (0.5 × base)
sm  = 8px   (1 × base)
md  = 16px  (2 × base)
lg  = 24px  (3 × base)
xl  = 32px  (4 × base)
xxl = 40px  (5 × base)
3xl = 48px  (6 × base)
4xl = 56px  (7 × base)
5xl = 64px  (8 × base)
```

### Margins & Padding Examples

| Component | Top | Right | Bottom | Left |
|-----------|-----|-------|--------|------|
| Section | 3xl (48px) | - | 3xl (48px) | - |
| Card | md (16px) | md (16px) | md (16px) | md (16px) |
| Button | md (16px) | xl (32px) | md (16px) | xl (32px) |
| Input Field | md (16px) | md (16px) | md (16px) | md (16px) |
| List Item | sm (8px) | 0 | sm (8px) | 0 |

---

## 5. COMPONENTS LIBRARY

### 5.1 Navigation Component

#### Navigation Bar
- **Height:** 72px (desktop) / 60px (mobile)
- **Background:** #ffffff (white) with subtle shadow
- **Shadow:** 0 2px 8px rgba(2, 42, 94, 0.1)

**Elements:**
- Logo: 40px × 40px (left aligned)
- Navigation Menu: Horizontal list (center)
- Search Icon: 24px × 24px
- Help Button: CTA button (right aligned)

**Navigation Item States:**
- **Default:** Color #022a5e, weight 500
- **Hover:** Color #023780, background transparent
- **Active:** Color #ffd13c with bottom border (2px)
- **Mobile:** Hamburger menu (3-line icon)

---

### 5.2 Button Component

#### Primary Button
- **Background:** #ffd13c (Gold)
- **Text Color:** #022a5e (Navy)
- **Border:** None
- **Padding:** md vertical (16px) × xl horizontal (32px)
- **Border Radius:** 4px
- **Font Weight:** 600
- **Font Size:** 16px
- **Shadow:** 0 4px 12px rgba(255, 209, 60, 0.3)

**States:**
- **Hover:** Background #ffcc1a, scale 1.02, shadow increase
- **Active:** Background #ffe652
- **Disabled:** Background #e9ecef, color #82878d, cursor not-allowed

#### Secondary Button
- **Background:** transparent
- **Text Color:** #023780 (Blue)
- **Border:** 2px solid #023780
- **Padding:** md vertical (16px) × xl horizontal (32px)
- **Border Radius:** 4px

**States:**
- **Hover:** Background rgba(2, 55, 128, 0.1)
- **Active:** Background rgba(2, 55, 128, 0.2)

#### Tertiary Button
- **Background:** transparent
- **Text Color:** #023780
- **Border:** None
- **Text Decoration:** Underline
- **Padding:** sm (8px)

---

### 5.3 Card Component

#### Standard Card
- **Background:** #ffffff
- **Border:** 1px solid #e9ecef
- **Border Radius:** 8px
- **Padding:** lg (24px)
- **Shadow:** 0 2px 8px rgba(2, 42, 94, 0.08)
- **Transition:** 0.3s ease all

**States:**
- **Hover:** Shadow increases to 0 8px 24px rgba(2, 42, 94, 0.15)
- **Hover:** Transform translateY(-2px)

#### Application Access Card (Specific)
- **Layout:** Icon (top) → Title → Description → Button (bottom)
- **Icon Size:** 48px × 48px
- **Title:** H3 style (20px, semibold, navy)
- **Description:** Body small (14px, medium gray)
- **Button Spacing:** 16px top margin

---

### 5.4 Input/Form Components

#### Text Input
- **Background:** #ffffff
- **Border:** 1px solid #e9ecef
- **Border Radius:** 4px
- **Padding:** md (16px)
- **Font Size:** 16px
- **Font Color:** #343a40

**States:**
- **Focus:** Border color #023780, shadow 0 0 0 3px rgba(2, 55, 128, 0.1)
- **Error:** Border color #dc3545
- **Disabled:** Background #f8f9fa, color #82878d

#### Search Bar
- **Background:** #f8f9fa
- **Border:** 1px solid #e9ecef
- **Border Radius:** 4px
- **Padding:** md (16px)
- **Icon:** Search icon (16px, gray)
- **Placeholder Text:** "Search applications..."

---

### 5.5 Badge Component

#### Small Badge
- **Background:** rgba(255, 209, 60, 0.2)
- **Text Color:** #ffc107 (Warning color)
- **Padding:** 4px 8px
- **Border Radius:** 2px
- **Font Size:** 12px
- **Font Weight:** 600

#### Status Badges
- **Success:** Green background
- **Pending:** Yellow background
- **Error:** Red background

---

## 6. ICON SYSTEM

### Icon Style Guidelines
- **Style:** Line icons (1.5px - 2px stroke width)
- **Format:** SVG (scalable, lightweight)
- **Size Scale:** 16px, 20px, 24px, 32px, 48px

### Common Icons Used
- Navigation: Menu, Search, Home, Help
- Applications: Academic (book), HR (people), Finance (money), Logistics (box)
- Social: Facebook, Instagram, Twitter
- UI: Arrow, Close, Check, Alert, Info

### Icon Implementation
- All icons use Primary Navy (#022a5e) as default
- On hover/active: Primary Blue (#023780)
- On CTA: Gold (#ffd13c)
- Maintain consistent stroke weight across set

---

## 7. ACCESSIBILITY GUIDELINES

### WCAG 2.1 Compliance: Level AA Target

#### Color Contrast
- All text must have minimum 4.5:1 contrast ratio
- Large text (18px+) requires 3:1 ratio
- Interface components (borders, icons): 3:1 ratio

#### Typography
- Minimum font size: 14px for body text
- Line height: minimum 1.5 for body text
- Avoid relying on color alone to convey information

#### Navigation
- Keyboard navigation fully supported (Tab order logical)
- Focus indicators visible (outline or highlight)
- ARIA labels for icon-only buttons
- Skip navigation link (hidden, revealed on focus)

#### Forms
- All inputs have associated labels
- Error messages clear and specific
- Form validation on blur (not on keystroke)

#### Images & Icons
- All images have descriptive alt text
- Icon-only buttons have aria-label or title attribute
- Decorative images marked with alt=""

#### Motion & Animation
- Respect prefers-reduced-motion media query
- Animation duration: maximum 3 seconds
- No autoplaying video with sound
- No flashing content (>3 times per second)

#### Structure
- Proper heading hierarchy (H1 → H2 → H3, no skipping)
- Semantic HTML (nav, main, footer, article, section)
- Lists marked with ul/ol/li
- Tables use th, caption, scope attributes

---

## 8. MOTION & INTERACTIONS

### Transition Timings
- **Fast:** 150ms (hover states, small elements)
- **Standard:** 300ms (component interactions)
- **Slow:** 500ms (page transitions, large movements)
- **Easing Function:** cubic-bezier(0.4, 0, 0.2, 1) (Material Design standard)

### Animation Examples

#### Button Hover
```css
transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
transform: scale(1.02);
box-shadow: 0 4px 12px rgba(255, 209, 60, 0.3);
```

#### Card Hover
```css
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
transform: translateY(-2px);
box-shadow: 0 8px 24px rgba(2, 42, 94, 0.15);
```

#### Link Underline
```css
transition: color 150ms ease;
text-decoration: underline;
text-decoration-thickness: 2px;
text-underline-offset: 4px;
```

### Interaction Patterns

#### Hover States
- Desktop: Scale up buttons (1.02), deepen shadows, slight color shift
- Mobile: No hover (use active/focus states instead)

#### Focus States
- Keyboard navigation: 2px solid outline (#023780)
- Outline offset: 2px
- Visible on all interactive elements

#### Loading States
- Spinner: Rotating icon animation
- Duration: Linear rotation, continuous
- Size: 24px × 24px

---

## 9. DESIGN RATIONALE

### Why This Color Palette?

1. **Primary Navy (#022a5e)**
   - Institutional authority and trust
   - High contrast with white and gold
   - Professional academic aesthetic
   - Polman's established brand color

2. **Primary Blue (#023780)**
   - Interactive element differentiation
   - Creates visual hierarchy
   - Maintains professional tone
   - Complements navy without competing

3. **Gold Accent (#ffd13c)**
   - Draws attention to CTAs
   - Warm, energetic, inviting
   - Strong contrast against navy
   - Creates visual rhythm and excitement
   - Hints of excellence and premium quality

4. **Neutral Gray (#82878d)**
   - Reduces visual weight
   - Professional sophistication
   - Maintains readability
   - Supports hierarchy through color

### Why Inter Typography?

- Designed specifically for digital interfaces
- Excellent screen rendering at all sizes
- Modern, clean, professional appearance
- Superior character metrics and spacing
- Accessibility-focused design
- Free and widely available

### Why This Grid System?

- 12-column grid (industry standard)
- 8px base unit (divisible, scalable)
- Mobile-first responsive approach
- Consistent spacing throughout
- Flexible for various content types

### Minimalist Design Rationale

1. **Reduced Cognitive Load:** Users focus on essential actions
2. **Performance:** Fewer visual elements = faster load times
3. **Professional Appearance:** Clean design conveys competence
4. **Accessibility:** Simple design easier to navigate
5. **Modern Aesthetic:** Aligns with current design trends

### Academic Institution Style

- Professional without being corporate
- Authoritative yet accessible
- Emphasizes education and excellence
- Clean lines suggest order and reliability
- Warm accents (gold) add approachability
- Modern typography suggests forward-thinking institution

---

## Implementation Notes

### CSS Variables (Root)

```css
:root {
  /* Colors */
  --color-primary-navy: #022a5e;
  --color-primary-blue: #023780;
  --color-accent-gold: #ffd13c;
  --color-neutral-gray: #82878d;
  --color-bg-light: #f8f9fa;
  --color-bg-lighter: #e9ecef;
  --color-text-primary: #343a40;
  --color-text-secondary: #6c757d;
  
  /* Typography */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-secondary: 'Georgia', 'Times New Roman', serif;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-xxl: 40px;
  --space-3xl: 48px;
  
  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-standard: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | June 2026 | Initial design system creation |

---

**Document Created:** June 2026  
**Design System Owner:** UI/UX Design Team  
**Status:** Active
