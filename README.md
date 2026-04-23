# Kreativ Saharaa — 3D & Animation Portfolio

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.dot-js&logoColor=white)](https://threejs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A premium, interactive portfolio showcasing high-end **3D Modeling**, **Character Animation (Maya)**, and **WebGL-driven Web Experiences**. This project combines professional 3D artistry with modern web engineering to deliver a "wow" experience for potential clients and partners.

---

## 🚀 WebGL & Animation Implementation

The core of this portfolio's interactivity is powered by **WebGL** and **Three.js**, ensuring high-performance 3D rendering directly in the browser.

### 1. Three.js Interactive Playground
Located in the `/playground` route, this implementation features:
- **Real-time Rendering**: A dedicated `WebGLRenderer` with anti-aliasing and alpha transparency for seamless UI integration.
- **Dynamic Camera Control**: Perspective camera setup optimized for different viewing heights.
- **Object Manipulation**: Direct interaction with 3D primitives, serving as a foundation for embedding complex Maya-exported GLTF/GLB models.
- **Lifecycle Management**: Efficient scene disposal and window resizing logic to prevent memory leaks and ensure responsive 3D viewports.

### 2. Framer Motion Integration
To bridge the gap between static UI and 3D space, we use **Framer Motion**:
- **Laser-Typewriter Effects**: Advanced stagger animations that simulate high-tech scanning/typing.
- **Micro-interactions**: Smooth transitions and hover states that mirror the fluidity of 3D animations.
- **Scroll-triggered Reveals**: Dynamic entry animations for service cards and sections.

### 3. High-Fidelity 3D Assets (FT. Maya)
The portfolio is designed to showcase professional output from **Autodesk Maya**:
- **2D & 3D Animation**: Specialized rendering techniques to preserve character detail and movement fluidity.
- **Model Integration**: Support for GLB/GLTF formats with high-quality textures.
- **Video Rendering**: Integration of pre-rendered 4K animation reels as backgrounds or embedded displays.

---

## 🎨 Design System

The project follows a **Sleek Dark Mode / Glassmorphism** aesthetic:
- **Typography**: Modern, geometric fonts (Inter/Outfit) for a premium feel.
- **Color Palette**: Deep obsidian backgrounds with vibrant neon accents (Accent Primary: `#6c63ff`, Accent Secondary: High-contrast cyan).
- **Glassmorphism**: Backdrop blur effects (`backdrop-blur-[20px]`) and semi-transparent surfaces (`bg-surface-glass`) for a sophisticated layered look.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) for ultra-fast builds.
- **3D Engine**: [Three.js](https://threejs.org/) for WebGL implementations.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with customized design tokens.
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for UI logic.
- **Routing**: [React Router](https://reactrouter.com/) for seamless page transitions.

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/3DportfolioFTmaya.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

## 📄 License
This project is for portfolio display purposes. All 3D assets and animations are property of **Kreativ Saharaa**.

---

*“Bring your imagination to life through the power of 3D.”*
