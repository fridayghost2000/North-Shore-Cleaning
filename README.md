# North Shore Cleaning Systems Inc. - Frontend Redesign

Modern, high-performance React + Tailwind CSS redesign for **North Shore Cleaning Systems Inc.** (Beverly, MA), engineered with **Feature-Based Architecture**.

## 🚀 Live Dev Server
- Local: [http://localhost:5173/](http://localhost:5173/)

---

## 🏗️ Feature-Based Architecture (Folder Structure)

```
north-shore-clean/
├── src/
│   ├── assets/                      # Static assets & iconography
│   ├── components/                  # Global shared UI components
│   │   ├── Badge.jsx                # Multi-color pill badges (CDC, Eco, OSHA, Ratings)
│   │   ├── Button.jsx               # Primary, Secondary, Outline, Accent buttons
│   │   ├── Modal.jsx                # Accessible modal overlay with backdrop blur
│   │   ├── SectionHeading.jsx       # Standardized section headings
│   │   └── Toast.jsx                # Temporary feedback alerts
│   ├── context/
│   │   └── AppContext.jsx           # Global state for modals, active quote, alerts
│   ├── features/                    # Feature modules (Domain-driven)
│   │   ├── navigation/              # TopBar, Navbar, MobileMenu drawer, Footer
│   │   ├── hero/                    # HeroSection, TrustBadges, HeroFeatureCard
│   │   ├── about/                   # WelcomeSection, Day 1 Walkthrough Blueprint
│   │   ├── services/                # ServicesGrid, ServiceCard, ServiceDetailModal, servicesData
│   │   ├── industries/              # IndustriesGrid, IndustryCard, IndustryDetailModal, industriesData
│   │   ├── testimonials/            # TestimonialsGrid, TestimonialCard, testimonialsData
│   │   ├── estimate-calculator/     # FreeEstimateForm, InstantCalculator (slider), DualIntakeSection
│   │   ├── booking/                 # BookNowForm, EmergencyDispatchCard, BookingModal
│   │   ├── areas-served/            # AreasServedSection, areasData (Essex County towns)
│   │   └── coupons/                 # CouponsModal, CouponCard, couponsData
│   ├── layouts/
│   │   └── MainLayout.jsx           # Master layout binding Header, Main, Footer & Modals
│   ├── App.jsx                      # Root application assembling feature sections
│   ├── index.css                    # Tailwind CSS v4 design tokens and utilities
│   └── main.jsx                     # React DOM entry point
├── index.html                       # Plus Jakarta Sans & Material Symbols setup
├── tailwind.config.js / vite.config.js
└── package.json
```

---

## 🎨 Design System Specifications (DESIGN.md Compliance)

- **Primary Navy (`#0B2545`):** Corporate authority, dominant containers, executive anchors.
- **Active Cyan (`#0088CC` / `#0284C7`):** Clean sanitization, interactive buttons, highlight accents.
- **Amber Gold (`#D97706` / `#FEF3C7`):** Trust badges, 5-star review ratings, promotional coupons.
- **Cool Slate Surfaces (`#F8FAFC`, `#F1F5F9`, `#E2E8F0`):** Crisp, clinical backdrop isolation.
- **Typography:** **Plus Jakarta Sans** (400, 500, 600, 700, 800) with tight tracking on headlines.
- **Icons:** Google Material Symbols Outlined.

---

## ✨ Interactive Features Implemented

1. **Top Bar & Sticky Navigation:**
   - Quick phone call link to Jerry: `978-809-5533`
   - Real-time active dispatch indicator (`Mon-Sat 24 Hours`)
   - Dropdown menus for *About Us*, *Our Services*, and *Industries Served*
   - Mobile slide-out drawer with accordion submenus
2. **Ambient Hero Section:**
   - Visual badges: Fully Insured & Bonded, 24/7 Availability, Essex County Top Rated
   - Dual primary CTAs for instant Free Estimate and Walkthrough Booking
   - Quick-access service teasers for Carpet & Floor Waxing
3. **Services Suite with Category Tabs & Detail Modals:**
   - Filter by *All*, *Commercial & Janitorial*, *Floors/Carpet*, *Eco & Disinfection*
   - Clicking any service opens technical specifications, scope checklists, and quote actions
4. **Interactive Cost & Square Footage Calculator:**
   - Dynamic square-footage slider (500 sq ft to 30,000 sq ft)
   - Archetype selector (Office, Medical, Dental, School, Warehouse, Residential)
   - Frequency multipliers and add-ons (Stripping/Waxing, CDC Misting)
   - Real-time estimated bracket feedback and estimated crew hours
5. **Dual Intake Section:**
   - Comprehensive Free Estimate Form with reCAPTCHA anti-spam protection
   - Emergency 24/7 Dispatch banner with direct call-through
   - Day 1 Walkthrough booking form with date and time pickers
6. **Promotional Coupons Modal:**
   - One-click copy coupon codes (`NORTHSHORE50`, `GLOSS15`, `CLEANSAFE`)
   - Toast notifications on copy and form submission
7. **Client Testimonials:**
   - Cathy (Branch Administrator), Jordan (Clinic Owner), Jennifer (Salon), Matt (CEO), Naomi, etc.
8. **Essex County Regional Footprint:**
   - Interactive town pills (Beverly, Danvers, Marblehead, Peabody, Salem, Swampscott, etc.)

---

## 🛠️ CLI Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
