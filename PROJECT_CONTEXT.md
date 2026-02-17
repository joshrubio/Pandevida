# Pandevida Project Context

This document provides a comprehensive overview of the Pandevida project to ensure consistency and efficiency for any agent or developer working on the codebase.

## 🚀 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4, Framer Motion for animations.
- **Languages**: TypeScript.
- **Sending Emails**: Resend API.
- **Internationalization**: Custom i18n implementation with middleware-based routing.

---

## 🌍 Internationalization (i18n)

### Supported Locales
- `english`
- `spanish`
- `arabic` (RTL support enabled)

### Key Files
- `i18n-config.ts`: Defines default (`arabic`) and supported locales.
- `middleware.ts`: Handles redirection based on browser language and path prefixes.
- `get-dictionary.ts`: Server-side logic to load JSON translation files.
- `dictionaries/`: Contains `.json` files for each language (`en.json`, `es.json`, `ar.json`).

### Routing Pattern
The app uses a dynamic segment `[lang]` in the `app` directory. All localized routes are under `app/[lang]/`.

---

## 🏗️ Project Structure

### Directory Layout
- `app/`: Routing and server actions.
- `components/`: UI components.
- `components/layout/`: Shared layout elements (Navbar, Footer).
- `components/sections/`: Modular sections used in the landing page.
- `components/ui/`: Reusable primitive components (buttons, cards, etc.).
- `public/`: Static assets like images and icons.

### Landing Page Section Order (`app/[lang]/page.tsx`)
1. **Navbar**: Navigation and language switcher.
2. **HeroSection**: Main headline and call to action.
3. **BibleReading**: Links to read/listen to the Bible.
4. **EvangelisticSection**: "Who is Jesus?" introduction.
5. **VideoGallery**: "Cinema & Collection" layout with featured video and grid.
6. **YourStorySection**: Resource for personal discovery.
7. **TestimoniesSection**: Social proof (currently Arabic focused but modular).
8. **GoodNews**: (Formerly `SpiritualJourneySection`) "Good News" / Gospel presentation.
9. **PastoralMessage**: Personal message/reflection.
10. **ContactForm**: Engagement point via Resend.
11. **Footer**: Links and credits.

---

## ✍️ Copywriting & Tone Guidelines

The tone of Pandevida is **welcoming, empathetic, and sincere**. It aims to be a safe space for spiritual exploration.

### Core Principles
- **Welcoming**: Use phrases like "You are welcome here" or "Find a safe place".
- **Compassionate**: Acknowledge the user's journey, questions, and need for hope.
- **Accessible Theology**: Use biblical terms (Bread of Life, Light of the World) but explain them in a way that is easy to understand for seekers.
- **Direct & Honest**: Clear presentation of the Gospel ("Good News") without being pushy.
- **Inspirational**: Focus on truth, love, and eternal hope.

### Language Specifics
- **Spanish**: Use a warm, community-oriented tone (*"queremos caminar contigo"*).
- **Arabic**: Ensure cultural sensitivity and proper RTL alignment.
- **English**: Maintain a clear and inviting tone.

---

## ⚙️ Logic & Data Handling
- **Server Actions**: Located in `app/actions.ts`. Currently handles contact form submissions via Resend.
- **Forms**: Use `useFormStatus` and server actions for a seamless UX.
- **Animations**: Subtle entry animations using `framer-motion` (e.g., `initial={{ opacity: 0, y: 20 }}`).

---

## 💡 Instructions for Future Agents
1. **Always check `dictionaries/`** before modifying any text. Do NOT hardcode strings in components.
2. **Maintain RTL compatibility** when adding or modifying UI components (check `dir={lang === 'arabic' ? 'rtl' : 'ltr'}`).
3. **Follow the section pattern**: New features should generally be implemented as a new component in `components/sections/` and then added to the `Home` component.
4. **Keep the tone consistent**: Use the guidelines above when generating or suggesting new copy.
5. **Update this document**: Always update `PROJECT_CONTEXT.md` when making structural changes or adding new components.
