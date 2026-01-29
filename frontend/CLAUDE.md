# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for a Frontend Engineer built with Next.js 15, React 19, TypeScript 5, and SCSS.

## Commands

```bash
npm run dev      # Development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint with accessibility rules (jsx-a11y)
npm run analyze  # Bundle size analysis (ANALYZE=true)
```

## Architecture

**Single-page portfolio** composed of section components in `/src/app/(pages)/`:
- Summary, Experience, Education, Projects, Contact, Skills

**State Management**: React Context API
- `ThemeProvider` - Light/dark theme with server-side cookie persistence
- `MenuProvider` - Mobile navigation state

**Theme System**:
- Server action in `/src/app/actions.ts` sets theme cookie
- CSS variables in `/src/scss/_variables.scss` define color palettes
- `data-theme` attribute on `<html>` controls active theme

**Content Data**: Static constants in `/src/constants/` (projects, experience, education, certifications)

## Key Patterns

- **Path alias**: `@/*` maps to `./src/*`
- **SCSS**: BEM naming convention (`.btn__icon`, `.nav__logo`)
- **Accessibility**: Enforced via ESLint jsx-a11y plugin - all interactive elements need ARIA labels, images need alt text
- **Server Components**: Root layout is async server component that reads theme cookie for SSR
- **Components**: `/components/specific/` for portfolio-specific, `/components/common/` for reusable
