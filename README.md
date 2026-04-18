# O2Health Landing Page

A high-performance, SEO-optimized landing page for O2Health - Smart Air Quality & Fire Safety System.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS with custom medical-tech theme
- 🌓 Dark/Light mode with next-themes
- ✨ Framer Motion animations
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🔥 Interactive fire response simulator
- 🏗️ Glassmorphism UI components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with CTA
│   ├── HowItWorks.tsx   # 5-layer architecture
│   ├── HardwareShowcase.tsx
│   ├── FireResponse.tsx # Interactive 3-level system
│   ├── TargetUsers.tsx  # User personas
│   ├── TechStack.tsx    # Technical specs
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ThemeProvider.tsx
└── tailwind.config.ts   # Custom theme configuration
```

## Color Palette

- Deep Medical Blue: `#0047AB`
- Oxygen Teal: `#008080`
- Emergency Red: `#FF4B2B`

## Build for Production

```bash
npm run build
npm start
```

## Technologies

- Next.js 14+
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- next-themes
