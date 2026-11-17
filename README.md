# LogKaro Website & Enterprise Backend

Official 2026 flagship web platform and client-side application for **LogKaro (`logkaro.com`)** — The Intelligent Operating System for Commercial Taxi Fleets, EduRide School Transit, and CorpDrive Corporate Mobility.

---

## 🌟 Key Features

* **Commercial Taxi Fleet OS**: Autonomous Live DRS Dispatch, Guest Fuel Netting Simulator, and Outside Partner Fleet Exchange.
* **EduRide School Transit**: RFID Student Tap Telemetry, Campus Geofencing, Speed Governor Audits, and Instant Parent WhatsApp Alerts.
* **CorpDrive Enterprise**: Dynamic Shift Rosters, Automated Cab Pooling, and B2B GST Invoicing.
* **Fleet Maintenance & Tyres**: 4-Wheel Tyre Wear Monitoring, Workshop Ledgers, and 1-Click Corporate Bank Settlement.
* **Multi-Page Architecture**: High-performance React Router architecture with smooth top-of-viewport scrolling.
* **High-Resolution Photography**: Clean, editorial-grade visual assets for transport, luxury sedans, buses, and tech parks.

---

## 🚀 Quick Start

### 1. Development Server (Vite)
```bash
npm install
npm run dev
```
Runs at `http://localhost:5174/`

### 2. Production Build
```bash
npm run build
```
Generates production assets in `dist/`.

### 3. Production Server
```bash
npm start
```
Starts Express server serving the `dist/` directory on port `5174` (or `PORT` environment variable).

---

## 📁 Project Structure

```
├── dist/                  # Pre-compiled production build (HTML, CSS, JS, assets)
├── public/                # Static public assets & brand icons
│   ├── images/            # Real mobility photography
│   └── logkaro_512.png    # Official brand icon
├── src/
│   ├── components/        # Reusable UI components & mockups
│   ├── pages/             # Dedicated multi-page views
│   ├── App.jsx            # Route declarations
│   ├── index.css          # Cyber-Luxury 2026 design system
│   └── main.jsx           # React & Router entry point
├── server.js              # Production Express static & API server
└── package.json
```

© 2026 LogKaro Technologies Private Limited. All Rights Reserved.
