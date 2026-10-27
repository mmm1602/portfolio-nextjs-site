# 🌐 Developer Portfolio – Miguel Angel Hurtado Gomez

[Live Site →](https://miguelhurtado.software)

My personal portfolio, built with **Next.js**, **Tailwind CSS**, and **Framer Motion**, showcasing aerospace, robotics, and software engineering work. Three.js dependencies and model assets are available for future 3D features.

---

## 🔧 Technologies Used

- **React / Next.js** – Static site generation and optimized routing
- **Three.js** – 3D rendering and interactive models
- **GSAP / SplitText** – 3D wheel navigation, animated zoom transitions, and chapter text reveals
- **Framer Motion** – Interactive cards, dialogs, and navigation motion
- **Tailwind CSS** – Utility-first CSS framework for fast UI styling
- **Vercel** – Deployment and performance optimization

---

## 🧠 Features

- 💼 Project showcase with descriptions and GitHub links
- 🧍 About section with engineering background and approach
- 🎨 Centered hero with subtle motion and an engineering grid background
- 🧭 Full-screen 3D flight log with a persistent chapter sidebar
- 🖼️ Two-row project gallery with pause controls and project detail dialogs
- 🌓 Persistent light/dark themes and reduced-motion support
- 📱 Fully responsive design
- ⚡ Fast loading and SEO-optimized
- 🧩 Modular codebase for easy content updates

---

## Layout and styling

The flight log is the single way to explore the portfolio. Six live sections sit on a full-screen vertical 3D wheel, with a minimal sidebar showing the current chapter. Scrolling or swiping rotates the wheel; after scrolling stops, it snaps to the nearest chapter. A 1.8-second pause after snapping expands the chapter, or you can click its card or “Open” immediately. The pause/play icon toggles automatic opening. The surrounding interface contains only chapter navigation, a theme toggle, and Open/Index controls; section content stays intact.

Wheel input retargets a persistent GSAP tween with a short follow time, followed by a gentle snap after input settles. Rotation and zoom can be interrupted by new input, allowing continuous scrolling and direction changes without waiting for transitions to finish.

Expanded chapters fill the available screen beside the sidebar. Scrolling zooms back out and continues rotating the wheel. Tall chapters can scroll their content first and return to the wheel at their scroll boundary, keeping all content accessible on smaller screens. Project galleries retain horizontal scrolling and interactive detail dialogs. Scroll events inside an open project dialog stay within that dialog.

Arrow keys and Page Up/Down select chapters, Home/End select the first/last chapter, and Escape returns to the index. Sidebar buttons and the Enter/Back control work with a keyboard. Section links and URL hashes open the corresponding chapter through the same wheel interface. Inactive content is inert and hidden from assistive technology. Reduced motion opens chapters directly and removes animated rotation, zoom, automatic expansion, and text reveals.

The controller lives in `src/components/FlightLog.jsx`. `IDLE_DELAY` controls the pause before expansion; `OVERVIEW_SCALE` controls the zoomed-out size. GSAP reveals chapter headings when expanded, with component-scoped cleanup. The UI adapts to a narrow numbered sidebar on mobile.

Shared section, panel, heading, and button styles live in `src/styles/globals.css`. Update project content and media in `src/data/projects.js`.

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/mmm1602/portfolio-nextjs-site.git
   cd portfolio-nextjs-site
   npm install
   npm run dev
   ```

2. Open [localhost:3000](http://localhost:3000).

3. Validate the site:
   ```bash
   npm run lint
   npm run build
   ```

To preview the production build, run `npm start` after building.
