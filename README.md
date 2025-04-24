# ✨ WaveTip Website ✨

<div align="center">
  <img src="logo_wavetip.png" alt="WaveTip Logo" width="200"/>
  <p><em>The official showcase website for the WaveTip Discord Bot.</em></p>
  <p>
    <a href="https://wavetip.vercel.app/" target="_blank" rel="noopener noreferrer"><strong>Visit the Live Site →</strong></a>
  </p>
</div>

## 🌐 Overview

This repository contains the source code for the official website of **WaveTip**, a powerful Discord bot enabling users to send and receive RLUSD tokens on the XRP Ledger (XRPL). This website serves as a landing page, feature showcase, and command reference for the bot.

The site is built with modern web technologies, focusing on performance, responsiveness, and a polished user experience.

➡️ **Find the WaveTip Discord Bot repository here:** [https://github.com/WaveTip/wavetip-xrpl](https://github.com/WaveTip/wavetip-xrpl)

## 🚀 Website Key Features

*   **Visually Engaging Hero Section:** With animated backgrounds to capture attention.
*   **Detailed Feature Showcase:** Highlighting the bot's core functionalities with interactive elements.
*   **"How It Works" Guide:** Clear, step-by-step instructions for users.
*   **Comprehensive Commands Page:** Lists all bot commands, grouped by category, with a search/filter feature.
*   **Responsive Design:** Adapts smoothly to all screen sizes, from mobile to desktop.
*   **Light/Dark Theme:** User-selectable theme preference stored locally.
*   **Smooth Animations:** Subtle animations on scroll and hover using Framer Motion.
*   **Modern Stack:** Built with Vite, React, TypeScript, and Tailwind CSS for a fast and maintainable codebase.
*   **Modular Structure:** Clearly organized components for easy maintenance and scalability.
*   **Legal Pages:** Includes placeholders for Terms of Service and Privacy Policy.
*   **404 Page:** Custom "Not Found" page for better user experience.

## 🛠️ Tech Stack

*   **Framework:** React (v19)
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM
*   **Animation:** Framer Motion
*   **Icons:** React Icons (Heroicons v2)
*   **Deployment:** Vercel

## 🚦 Getting Started

Follow these instructions to set up the project locally for development or contributions.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/WaveTip/wavetip-website.git
    cd WaveTip-Website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Locally

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the port specified in the terminal).

### Building for Production

1.  **Create a production build:**
    ```bash
    npm run build
    ```
    This command generates optimized static assets in the `dist/` folder.

## 📁 Project Structure

The project follows a modular structure within the `src/` directory to ensure maintainability:

```
src/
├── assets/            # Static assets (images, fonts)
├── components/        # Reusable React components
│   ├── features/      # Components specific to website features (Sections, Cards)
│   ├── hero/          # Modular components for the Hero section
│   ├── layout/        # Structural components (Header, Footer)
│   └── ui/            # Generic UI elements (Button, Logo, Icons, etc.)
├── constants/         # Global constants (links, command data, etc.)
├── contexts/          # React Context providers (e.g., ThemeContext)
├── hooks/             # Custom React hooks (e.g., useTheme)
├── pages/             # Components representing entire pages/views
├── router/            # Routing configuration (react-router-dom)
├── styles/            # Global styles, Tailwind base
├── types/             # TypeScript type definitions (interfaces, types)
└── App.tsx            # Main application component orchestrating layout and routes
└── main.tsx           # Application entry point (renders App into the DOM)
```

## 🚀 Deployment

*   **Live Site:** [https://wavetip.vercel.app/](https://wavetip.vercel.app/)
*   **Build Command:** `npm run build`
*   **Output Directory:** `dist`