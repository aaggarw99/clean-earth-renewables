# Clean Earth Renewables Website

A modern, professional website for Clean Earth Renewables - a company that helps businesses, landowners, and individuals unlock clean energy savings through solar development, financing, and subscriptions.

## 🚀 Features

- **Modern Design**: Clean, minimalist layout with black background, white text, and orange accents
- **Responsive**: Fully responsive design that works on mobile, tablet, and desktop
- **Performance**: Built with Next.js 15 and optimized for speed
- **Accessibility**: Keyboard navigable with proper semantic HTML
- **Typography**: Uses Bricolage Grotesque font family
- **Components**: Built with shadcn/ui for consistent, accessible components

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Deployment**: Vercel (ready for deployment)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and color scheme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── NavBar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── BenefitsSection.tsx  # Benefits showcase
│   ├── ServicesSection.tsx  # Services overview
│   ├── FeaturedProject.tsx  # Featured project showcase
│   ├── StatsSection.tsx     # Animated statistics
│   ├── AboutSection.tsx     # About and differentiators
│   ├── FinalCTA.tsx         # Final call-to-action
│   └── Footer.tsx           # Footer with links and newsletter
```

## 🎨 Design System

- **Colors**: 
  - Background: Black (`oklch(0.05 0 0)`)
  - Text: White (`oklch(0.98 0 0)`)
  - Accent: Orange (`oklch(0.6 0.15 45)`)
- **Typography**: Bricolage Grotesque (Google Fonts)
- **Spacing**: Consistent padding and margins using Tailwind's spacing scale
- **Components**: Rounded corners, subtle shadows, and hover effects

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
```bash
npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📱 Pages Structure

- **Home** (`/`) - Landing page with hero, benefits, services, project showcase, stats, about, and CTA
- **Services** (`/services`) - Overview of all services (planned)
- **About** (`/about`) - Mission, team, credentials (planned)
- **Contact** (`/contact`) - Contact form and information (planned)

## 🎯 Key Sections

1. **Hero Section**: Bold headline with value proposition and CTAs
2. **Benefits**: Three key benefits (Lower Costs, Carbon Reduced, Turnkey Solutions)
3. **Services**: Four main services (Wind, Solar, Storage, O&M)
4. **Featured Project**: Showcase of a 350kW solar farm project
5. **Stats**: Animated counters showing impact metrics
6. **About**: Mission statement and key differentiators
7. **Final CTA**: Energy audit request with trust indicators
8. **Footer**: Links, contact info, and newsletter signup

## 🔧 Development

- **Type Checking**: `npx tsc --noEmit`
- **Linting**: `npm run lint`
- **Build**: `npm run build`

## 🚀 Deployment

The project is ready for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

## 📝 Content Management

Currently using static content in components. Future plans include:
- MDX for content management
- CMS integration
- Dynamic content loading

## 🎨 Customization

- Colors can be modified in `src/app/globals.css`
- Components are modular and easily customizable
- Font can be changed by updating the Google Fonts import
- Icons are SVG and can be replaced with custom designs

---

Built with ❤️ for Clean Earth Renewables
