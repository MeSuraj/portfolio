<div align="center">

# 💼 Suraj Kumar — Personal Portfolio Website

**A Modern, Responsive, and Interactive Personal Portfolio & Interactive Resume**

[![GitHub Pages](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=github)](https://mesuraj.github.io/portfolio/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/MeSuraj/portfolio)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

### 🌐 [Visit Live Portfolio](https://mesuraj.github.io/portfolio/) · [Download Resume](https://mesuraj.github.io/portfolio/files/Suraj_resume.pdf) · [Connect on LinkedIn](https://linkedin.com/in/mesuraj)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Website Structure](#-website-structure)
- [Directory Structure](#-directory-structure)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Features & Logic Mechanics](#-features--logic-mechanics)
- [Customization Guide](#-customization-guide)
- [Professional Background Summary](#-professional-background-summary)
- [License](#-license)
- [Contact](#-contact)

---

## 📖 Overview

This repository contains the source code for the personal portfolio website of **Suraj Kumar**, an *Audit & Acceptance Testing (AT) Engineer, MIS Specialist, and Operations Coordinator*. 

Built as a lightweight, high-performance Single-Page Application (SPA), the site showcases professional experience in telecom infrastructure, quality assurance, vendor coordination, and operations management. It features custom navigation animations, touch gesture support, and automatic system theme detection.

---

## 🔥 Key Features

- ⚡ **Single-Page Application (SPA):** Seamless section switching without full page reloads.
- 🌓 **Adaptive Light & Dark Mode:**
  - Automatic detection of OS/system theme preference (`prefers-color-scheme`).
  - Manual floating toggle button for instant dark/light mode switching.
- 🖱️ **Advanced Wheel & Touch Gesture Navigation:**
  - **Desktop:** Smart mouse-wheel navigation shifts between sections when reaching top/bottom boundaries.
  - **Mobile:** Touch swipe gestures enable fluid section transitions.
- 📊 **Animated Skill Metrics:** Dynamic progress bars highlighting key domains (Data Analysis, NC & DLP Management, Operations, etc.).
- ⏳ **Interactive Career Timeline:** Styled chronological history of professional roles and educational qualifications.
- 📱 **Fully Responsive Layout:** Optimized for all viewport sizes (Mobile, Tablet, Desktop) using Flexbox and CSS Grid.
- 📄 **Direct Resume Download:** One-click action button for instant CV retrieval (`.pdf`).

---

## 🛠️ Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic structure and accessible accessibility elements |
| **Styling** | CSS3 (Variables & Animations) | Custom theme engine, responsive breakpoints, smooth keyframes |
| **Scripting** | Vanilla JavaScript (ES6+) | Gesture handlers, theme toggling, scroll locks, DOM management |
| **Fonts & Icons** | Google Fonts & FontAwesome | *Poppins* typography & standard vector icons |
| **Deployment** | GitHub Pages | Continuous deployment and static site hosting |

---

## 📐 Website Structure

The portfolio is divided into 5 core interactive sections:

1. 🏠 **Home:** Hero section featuring intro, profile avatar, current title, and quick CV download button.
2. 👤 **About Me:** Professional summary, core skill progress indicators, and personal background.
3. 💼 **Experience:** Interactive timeline covering roles at **Airtel**, **GreyOrange**, and **V Protect India**.
4. 🎓 **Education:** Academic background and degree qualifications (**B.Tech Mechanical Engineering**).
5. ✉️ **Contact:** Direct channels (Phone, Email, Location, LinkedIn, GitHub).

---

## 📁 Directory Structure

```text
portfolio/
├── index.html            # Main HTML markup and structure
├── styles/
│   └── styles.css        # CSS variables, dark/light theme, layout, & keyframe rules
├── app.js                # JS logic (section switching, gesture scroll, theme handler)
├── files/
│   ├── Suraj_image.png   # Profile display image
│   └── Suraj_resume.pdf  # Downloadable PDF resume
├── LICENSE               # Project license
└── README.md             # Repository documentation
```

---

## ⚡ Getting Started & Local Setup

Because the application is built using pure native web technologies (Vanilla HTML, CSS, JavaScript), no Node.js installations, package managers (`npm`/`yarn`), or framework builders are required.

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MeSuraj/portfolio.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd portfolio
   ```

3. **Launch the application:**
   - Double-click `index.html` to view it in any modern web browser.
   - Or open using VS Code's **Live Server** extension.

---

## 🧠 Features & Logic Mechanics

### 1. Theme Engine
The JavaScript script automatically queries the user's operating system preferences on page load:
```javascript
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add("light-mode");
}
```
Users can override this theme preference at any time using the fixed top-right toggle button.

### 2. Scroll & Touch Gesture Control
Custom JavaScript handles page navigation without jitter:
- Evaluates `deltaY` on desktop `wheel` events.
- Evaluates vertical touch distances (`touchstart` vs `touchend`) on mobile devices.
- Implements a cooldown lock (`700ms`) during section transition animations to prevent rapid accidental scrolling.

---

## 🎨 Customization Guide

If you wish to fork this repository to build your own portfolio:

1. **Update Personal Info (`index.html`):** Replace text content inside the header, profile list, experience timeline, and contact sections.
2. **Modify Core Skills (`index.html`):** Edit the `<div class="progress-bar">` values and widths.
3. **Change Theme Colors (`styles/styles.css`):** Adjust primary and secondary accent colors inside CSS `:root`:
   ```css
   :root {
     --color-primary: #000000;
     --color-secondary: #27AE60; /* Accent Color */
     --color-white: #FFFFFF;
   }
   ```
4. **Replace Assets (`files/`):** Update `Suraj_image.png` with your photo and `Suraj_resume.pdf` with your CV.

---

## 👨‍💻 Professional Background Summary

**Suraj Kumar** — *Audit & AT Engineer | MIS Specialist | Operations Coordinator*

- 🏢 **Current Role:** Audit & AT Engineer at Airtel (Teamlease Ltd.)
- 🎯 **Specialization:** Pan-India Fiber Network Operations, DLP & NC Management, Vendor Coordination, SLA Compliance, Data Analysis (Excel/MIS).
- 📍 **Location:** Gurgaon, Haryana, India
- 📧 **Email:** surajxu@gmail.com
- 🔗 **LinkedIn:** [linkedin.com/in/mesuraj](https://linkedin.com/in/mesuraj)

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for details.

---

## 💬 Contact & Support

If you have any questions or feedback regarding this project, feel free to reach out via [Email](mailto:surajxu@gmail.com) or connect on [LinkedIn](https://linkedin.com/in/mesuraj).

⭐ **Don't forget to star the repository if you found this template helpful!**