# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm dev`
- **Build**: `pnpm build` 
- **Preview build**: `pnpm preview`
- **Generate static**: `pnpm generate`
- **Lint**: `pnpm lint` (use `pnpm lint:fix` to auto-fix)
- **Type check**: `pnpm typecheck`
- **ESLint config viewer**: `pnpm lint:view`

## Project Architecture

This is a **Nuxt 4** starter template configured for **Cloudflare Workers** deployment with TailwindCSS v4.

### Core Stack
- **Nuxt 4** - Full-stack Vue framework
- **TailwindCSS v4** - Utility-first CSS with new CSS-first architecture  
- **Pinia** - State management using composition API pattern
- **VueUse** - Vue composition utilities
- **ESLint** - Linting with @antfu/eslint-config + better-tailwindcss plugin

### Directory Structure
- `app/` - Main application code (Nuxt 4 uses `app/` instead of `src/`)
  - `components/` - Vue components
  - `pages/` - File-based routing pages
  - `layouts/` - Layout components
  - `stores/` - Pinia stores (uses composition API pattern)
  - `constants/` - Application constants
  - `assets/css/` - Global CSS and TailwindCSS entry point
- `server/api/` - Server API routes (Nitro)
- `public/` - Static assets

### Key Configuration Details

**Nuxt Config (`nuxt.config.ts`)**:
- Configured for Cloudflare Workers deployment (`nitro.preset: 'cloudflare-module'`)
- TailwindCSS v4 integrated via Vite plugin
- Pinia stores directory: `./app/stores/**`
- ESLint integration with standalone: false

**ESLint Config (`eslint.config.js`)**:
- Uses @antfu/eslint-config as base
- Custom TailwindCSS rules via eslint-plugin-better-tailwindcss
- TailwindCSS entry point: `./app/assets/css/main.css`
- Strict Vue template rules (max-attributes-per-line, html-self-closing)

**Package Manager**: 
- Uses **pnpm** exclusively (enforced via preinstall hook)
- Minimum pnpm version: 10.0.0

### Deployment
- Configured for **Cloudflare Workers** via wrangler.jsonc
- Build output: `.output/server/index.mjs`
- Static assets: `.output/public`

### State Management Pattern
Pinia stores use the composition API pattern with `defineStore(() => {})` syntax, not options API. All stores include HMR support via `acceptHMRUpdate`.