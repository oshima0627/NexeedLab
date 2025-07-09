# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Testing
No specific test framework is configured. When implementing tests, check with the user about their preferred testing setup.

## Architecture Overview

This is a **Next.js 14 full-stack application** using the App Router pattern, built for Nexeed Lab's corporate website. The application integrates both frontend and backend functionality with email capabilities.

### Key Technologies
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** + **Shadcn/ui** for styling
- **Radix UI** for accessible components
- **Framer Motion** for animations
- **Nodemailer** for email functionality
- **Zod** for validation

### Project Structure
```
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── contact/       # Contact form API
│   │   └── portfolios/    # Portfolio data API
│   ├── [pages]/           # Page components
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── layout/           # Header/Footer
│   ├── sections/         # Page sections
│   ├── animations/       # Animation components
│   └── ui/               # Shadcn/ui components
├── lib/                  # Utilities
│   ├── email.ts          # Email service
│   ├── utils.ts          # General utilities
│   └── metadata.ts       # SEO metadata
└── hooks/                # Custom React hooks
```

## Important Implementation Details

### Email System
- Uses Gmail SMTP via Nodemailer
- Requires environment variables: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- Sends both admin notifications and customer auto-replies
- Extensive logging for debugging (in `/lib/email.ts`)

### API Routes
- `POST /api/contact` - Contact form submission with Zod validation
- `GET /api/portfolios` - Portfolio data retrieval
- All API routes use proper error handling and TypeScript

### Styling System
- **Tailwind CSS** with custom configuration
- **CSS Variables** for theme system (light/dark mode)
- **Shadcn/ui** components with customizable design tokens
- Path aliasing: `@/` maps to project root

### Configuration Files
- `next.config.js` - Custom webpack config, image optimization, API routes enabled
- `tailwind.config.ts` - Extended theme with custom colors and animations
- `components.json` - Shadcn/ui configuration
- `tsconfig.json` - TypeScript config with path aliases

## Development Guidelines

### Adding New Components
1. Use existing Shadcn/ui components from `components/ui/`
2. Follow the established folder structure in `components/`
3. Use TypeScript interfaces for props
4. Import utilities with `@/` path alias

### API Development
1. Create routes in `app/api/[route]/route.ts`
2. Use Zod for request validation
3. Follow the error handling pattern in existing routes
4. Return proper HTTP status codes

### Styling
1. Use Tailwind classes primarily
2. Leverage CSS variables for theming
3. Use `cn()` utility from `lib/utils.ts` for conditional classes
4. Follow the existing color scheme in `tailwind.config.ts`

### Environment Variables
Required for email functionality:
- `SMTP_HOST` - Gmail SMTP server
- `SMTP_PORT` - SMTP port (587)
- `SMTP_USER` - Gmail address
- `SMTP_PASS` - Gmail app password
- `NEXT_PUBLIC_SITE_URL` - Site URL for metadata

## Email Debugging
If email issues occur, check:
1. Environment variables are set correctly
2. Gmail app password is valid
3. SMTP settings match Gmail requirements
4. Review detailed logs in email service

## Notes
- Japanese language support is built-in
- SEO metadata is configured for production
- Dark/light theme system is implemented
- No test framework is currently configured
- ESLint errors are ignored during builds (`ignoreDuringBuilds: true`)