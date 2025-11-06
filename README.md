
# Nexolive

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-skyblue?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.7.0-blue?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-blue?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![LiveKit](https://img.shields.io/badge/LiveKit-1.15-purple?style=for-the-badge)](https://livekit.io/)
[![Uploadthing](https://img.shields.io/badge/Uploadthing-7.7.4-orange?style=for-the-badge)](https://uploadthing.com/)
[![Clerk](https://img.shields.io/badge/Clerk-4.29.1-pink?style=for-the-badge)](https://clerk.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## Overview

Nexolive is a **live streaming platform** built with **Next.js, React, Tailwind CSS**, and **PostgreSQL**. It allows creators to **broadcast live**, interact with their audience in **real-time**, and manage their streams efficiently.  

This project focuses on **performance, user experience**, and **feature-rich streaming functionalities**.

---

## Key Features

### 📡 Live Streaming
- **Protocols:** Supports **RTMP & WHIP** for reliable streaming.
- **OBS Integration:** Connect your **Next.js app to OBS** for broadcasting.

### 🔐 Authentication
- Managed via **Clerk** for secure **sign-in, sign-up**, and **user sessions**.

### 📸 Thumbnail Upload
- Users can upload stream thumbnails via **Uploadthing**.

### 👀 Live Viewer Count
- See the **number of viewers** currently watching a live stream in real-time.

### 🚦 Live Statuses
- **Stream status indicators**: live, offline, or scheduled.

### 💬 Real-time Chat
- Live chat during streams using **WebSockets**.
- Each viewer gets a **unique chat color** for better readability.

### 👥 Following System
- Users can **follow their favorite creators** to get notified when they go live.

### 🚫 Blocking System
- **Block users** from interacting in chat or seeing your profile.

### 👢 Kick Participants
- Creators can **kick viewers** from the stream in real-time.

### 🎛️ Streamer Dashboard
- Comprehensive dashboard for **managing streams, viewers, and chat settings**.

### 🐢 Slow Chat Mode
- Enable slow chat to **limit message frequency** for large streams.

### 🔒 Followers-only Chat
- Restrict chat participation to **followers only**.

### 📴 Chat Controls
- Creators can **enable or disable chat** at any time.

### 🔽 Collapsible Layout
- **Hide sidebars, chat, or enable theatre mode** for an immersive experience.

### 📚 Sidebar: Following & Recommendations
- Discover new streams and follow **recommended creators** easily.

### 🏠 Home Page
- **Shows live streams first** and personalized recommendations.

### 🔍 Search Results Page
- Displays **streams and users** in a clean layout.

### 🔄 Webhooks
- **Sync user info** and **live status** to the database automatically.

### 🤝 Community Tab
- Engage with community content and events directly within the app.

### 🎨 Design & Performance
- Beautiful UI with **fast performance**, **SSR**, and **grouped layouts**.

### 📄 Progressive Web App (PWA)
- Offline support and **home screen installable app**.
- Cached assets and routes for smoother offline experience.

---


## Environment Variables

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
CLERK_WEBHOOK_SECRET=
DATABASE_URL=
LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

---

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/m-mohammad-d/nexolive.git
cd nexolive
```

2. Install dependencies:

```bash
npm install
```

3. Set environment variables in a `.env` file.

4. Run Prisma migrations:

```bash
npx prisma db push
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Production

```bash
npm run build
npm start
```

---

## Tech Stack

* **Next.js** – SSR and routing
* **React** – Frontend components
* **Tailwind CSS** – Styling
* **Prisma** – ORM for MySQL
* **LiveKit** – Real-time streaming & voice
* **Uploadthing** – File uploads
* **Clerk** – Authentication
* **TypeScript** – Type safety

---

## Notes

* This project is optimized for **fast performance** and **high interactivity**.
* Key focus is on **streaming experience** and **community interaction**.
* **Offline support** (PWA) ensures users can browse cached content when not connected.


