# 🌿 Sarah Richardson Psychotherapy - Site Structure

## Visual Flow

```
┌─────────────────────────────────────────────┐
│  NAVIGATION (Fixed)                         │
│  Sarah Richardson | Home About Services     │
│                     FAQ [Book Consultation] │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  HERO SECTION                               │
│  ┌──────────────┬───────────────────┐       │
│  │              │                   │       │
│  │  Find        │   [Photo:         │       │
│  │  Clarity,    │    sarah-bench    │       │
│  │  Connection, │    circular       │       │
│  │  and Peace   │    crop]          │       │
│  │              │                   │       │
│  │  Subtitle... │                   │       │
│  │  Intro...    │                   │       │
│  │              │                   │       │
│  │  [Book Now]  │                   │       │
│  └──────────────┴───────────────────┘       │
│  Background: Cream → White gradient         │
│  Decorative: Leaf pattern (bottom right)    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  ABOUT SECTION                              │
│  ┌─────────────────────────────────────┐   │
│  │  [FULL-WIDTH PHOTO: sarah-couch]    │   │
│  │  Dark overlay with "About Sarah"     │   │
│  │  (Parallax effect - moves on scroll) │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Bio paragraphs...                          │
│  Credentials...                             │
│  Background: White                          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  SERVICES SECTION                           │
│  How I Can Help                             │
│                                             │
│  ┌─────────┬─────────┬─────────┐          │
│  │ Anxiety │ Depress │Relation │          │
│  │ & Stress│ ion &   │ship     │          │
│  │         │Low Mood │Issues   │          │
│  └─────────┴─────────┴─────────┘          │
│  ┌─────────┬─────────┬─────────┐          │
│  │ Life    │Self-Est.│ Trauma  │          │
│  │Transiti │& Identity│& Healing│          │
│  │ons      │         │         │          │
│  └─────────┴─────────┴─────────┘          │
│                                             │
│  ┌─────────────────────────────┐           │
│  │  SESSION INFORMATION        │           │
│  │  • 50 minutes               │           │
│  │  • Virtual or in-person     │           │
│  │  • Free consultation        │           │
│  │  (Forest green box)         │           │
│  └─────────────────────────────┘           │
│  Background: Taupe                          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  GROUNDING IMAGE SECTION                    │
│  [FULL-BLEED PHOTO: sarah-outdoors]         │
│  (Beach, driftwood, golden hour)            │
│  Dark gradient overlay at bottom            │
│  "Therapy is a space to pause, reflect..."  │
│  (Italicized quote in white)                │
│  Height: 600px                              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  FAQ SECTION                                │
│  Frequently Asked Questions                 │
│                                             │
│  ► How do I know if therapy is right?       │
│  ► What can I expect in first session?      │
│  ► How long does therapy take?              │
│  ► Do you offer virtual sessions?           │
│  ► What are your fees and insurance?        │
│  ► Is what we talk about confidential?      │
│                                             │
│  (Accordion - click to expand)              │
│  Background: White                          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CONTACT SECTION                            │
│  Let's Connect                              │
│                                             │
│  ┌────────────────┬──────────────────┐     │
│  │  CONTACT FORM  │  [Photo:         │     │
│  │                │   sarah-         │     │
│  │  Name          │   restaurant     │     │
│  │  Email         │   circular]      │     │
│  │  Phone         │                  │     │
│  │  Contact Pref  │  Get In Touch    │     │
│  │  Message       │  Email: ...      │     │
│  │                │  Phone: ...      │     │
│  │  [Send]        │  Location: ...   │     │
│  └────────────────┴──────────────────┘     │
│  Background: Cream                          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  FOOTER                                     │
│  Sarah Richardson, MA, RP                   │
│  Registered Psychotherapist                 │
│  CRPO Registration #[...]                   │
│                                             │
│  Home | About | Services | FAQ | Contact    │
│                                             │
│  © 2024 Sarah Richardson Psychotherapy      │
│  Crisis disclaimer...                       │
│  Background: Dark charcoal                  │
└─────────────────────────────────────────────┘
```

## Color Usage Map

| Element | Color | Hex |
|---------|-------|-----|
| Page background | Cream | #EDE6DC |
| Section alternates | White | #F5F0E8 |
| Services section | Taupe | #D4CFC4 |
| Text | Charcoal | #2C2824 |
| CTA buttons | Sand | #B8A582 |
| CTA hover | Forest | #556B35 |
| Links | Olive | #6D8055 |
| Link hover | Sage | #8B9B6E |
| Dark accents | Forest | #556B35 |
| Session info box | Forest | #556B35 |
| Footer | Charcoal | #2C2824 |

## Typography

**Headings:**
- Font: Cormorant Garamond (serif)
- Weights: 300 (light), 400 (regular), 600 (semibold)
- H1: 3.5rem (hero), 3rem (mobile)
- H2: 2.5rem
- H3: 2rem

**Body:**
- Font: Lato (sans-serif)
- Weights: 300, 400, 700
- Base: 1rem (16px)
- Line height: 1.7

## Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adjusted grid)
- **Mobile**: 320px-767px (single column, stacked)

## Interactive Elements

1. **Navigation**
   - Sticky header (always visible)
   - Smooth scroll to sections
   - Mobile hamburger menu
   - Scroll-based styling change

2. **FAQ Accordion**
   - Click to expand/collapse
   - One open at a time
   - Smooth height transition
   - Keyboard accessible

3. **Contact Form**
   - Real-time validation
   - Submit handler (needs backend)
   - Focus states
   - Radio button selection

4. **Animations**
   - Fade-in on scroll (all sections)
   - Parallax effect (about hero image)
   - Hover effects (buttons, cards)
   - Smooth transitions throughout

## File Sizes & Performance

- HTML: ~15 KB
- CSS: ~11 KB
- JavaScript: ~5 KB
- Images: Variable (optimize before launch)
- Total assets: ~31 KB (excluding photos)

**Recommended image optimization:**
- Compress JPGs to 80-85% quality
- Resize to max 2000px width
- Use WebP format for better compression (optional)

## Browser Features Used

- CSS Grid (main layouts)
- CSS Flexbox (navigation, cards)
- CSS Custom Properties (colors, fonts)
- CSS Transforms (hover effects)
- Intersection Observer (scroll animations)
- CSS background-attachment (parallax)

## Accessibility Score (Estimated)

- ✅ Semantic HTML5
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast (WCAG AA)
- ✅ Alt text on images
- ✅ Responsive text sizing
- ⚠️ Need to test with screen reader

**Estimated Score: 95/100**

## Load Time (Estimated)

- First Contentful Paint: <1s
- Time to Interactive: <2s
- Full Page Load: <3s (depends on image sizes)

## What Makes This Site Special

1. **Real Photography**: Four beautiful, professional photos of Sarah
2. **Warm Palette**: Botanical-inspired colors create trust and calm
3. **Visual Breathing Room**: Generous whitespace, not cramped
4. **Elegant Typography**: Sophisticated serif + clean sans-serif pairing
5. **Smooth Experience**: Parallax, fade-ins, smooth scroll
6. **Human & Grounded**: Barefoot-on-beach energy throughout
7. **Professional Yet Approachable**: Balances credibility with warmth

---

Built with intention 🤖
