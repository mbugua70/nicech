# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite + TypeScript project with a minimal setup for building a web application. The project uses Vite as the build tool and development server with TypeScript as the primary language.

## Build Commands

- `npm run dev` - Start Vite development server with hot module replacement
- `npm run build` - Type-check with TypeScript and build for production
- `npm run preview` - Preview the production build locally

## TypeScript Configuration

The project uses strict TypeScript settings with the following notable configurations:
- Target: ES2022
- Module resolution: bundler mode (Vite-specific)
- `noEmit: true` - TypeScript only used for type-checking, Vite handles compilation
- Strict mode enabled with additional linting flags (`noUnusedLocals`, `noUnusedParameters`)
- `verbatimModuleSyntax: true` - Enforces explicit type imports

## Project Structure

- `src/main.ts` - Application entry point, renders the main UI
- `src/counter.ts` - Contains utility functions (currently a counter example)
- `src/style.css` - Global styles with light/dark theme support
- `index.html` - HTML entry point that loads `/src/main.ts` as a module
- `public/` - Static assets served directly by Vite

## Development Notes

- The project uses ES modules (`"type": "module"` in package.json)
- Vite handles all bundling and HMR during development
- TypeScript files can import `.ts` extensions directly due to `allowImportingTsExtensions`
- No test runner is currently configured
