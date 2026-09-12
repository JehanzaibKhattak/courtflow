# CourtFlow

**Justice, in motion.**

CourtFlow is a court operations workspace that brings case management, hearing schedules, and hearing records into one focused interface. Designed for court administrators and judicial teams, it helps organize daily work and keep the next step of each case visible.

The current release is a functional, browser-based prototype with a monochrome interface, fictional sample cases, and local data persistence.

## Features

| Area | Capabilities |
| --- | --- |
| Daily overview | Case counts, scheduled hearings, recent cases, and a sample activity timeline |
| Case management | Create cases, search parties and case numbers, filter by status, and update hearing details |
| Hearing calendar | Browse scheduled hearings by date, with courtroom details and Pakistan Standard Time |
| Hearing records | Create, edit, and download written hearing notes |
| Workspace assistant | Preview local summaries of hearing schedules, pending cases, and saved notes |
| Analytics | View case distribution by status, calculated from the current register |
| Export | Download the case register as CSV |
| Responsive design | Black, white, and grayscale layouts for desktop and mobile |

## Getting started

Requires **Node.js 18 or later**. No package installation or API key is needed.

```sh
git clone https://github.com/JehanzaibKhattak/courtflow.git
cd courtflow
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To use a different port:

```sh
PORT=3001 npm run dev
```

The development server listens on the local loopback interface (`127.0.0.1`).

## Technology and structure

CourtFlow uses HTML, CSS, and vanilla JavaScript, served locally by a small Node.js HTTP server. It has no third-party runtime dependencies. Deployment copies the three browser assets into `dist/` for static hosting.

```text
courtflow/
├── index.html    # Application shell and navigation layout
├── styles.css    # Responsive monochrome design
├── app.js        # Views, interactions, local storage, and exports
├── server.mjs    # Local HTTP server
├── build.mjs     # Copies browser assets into dist/
├── vercel.json   # Static deployment configuration
└── package.json  # Development, build, and validation commands
```

Google Fonts supplies DM Sans and Manrope when available; the interface falls back to system sans-serif fonts offline.

## Data and prototype scope

- All included cases, people, and hearing records are fictional. The overview uses **12 September 2026** as its sample date.
- Cases and notes are stored in this browser's `localStorage`. They are not synchronized between browsers or devices, and clearing browser data removes saved changes.
- The assistant generates deterministic local summaries. It is not connected to an AI model and does not provide legal analysis.
- The Transcripts section currently supports written hearing notes. Audio recording and speech-to-text transcription are not implemented.
- Authentication, role-based access, a server database, audit trails, and cloud backups are not implemented. This prototype is not intended for confidential court records or production judicial use.
- The original `nizam-workspace` storage key is retained to preserve records created before the CourtFlow rebrand.

## Validation

```sh
npm run check
```

This command validates the syntax of the application and server JavaScript. Browser checks during development covered case creation and updates, reload persistence, search, date filtering, hearing notes, downloads, assistant summaries, and mobile layout. The monochrome rebrand was also visually checked on desktop and mobile.

## Deployment

Run `npm run build` to generate the static site in `dist/`. Vercel uses the committed `vercel.json` configuration to run this command and publish that directory. The local Node.js server is not needed in production.

The hosted prototype continues to save records in browser localStorage. Data entered on localhost does not transfer to the deployed site's separate browser storage.

## Development direction

Future development can extend the prototype with authenticated workspaces, durable storage, document ingestion, audio transcription, and AI-assisted summaries with source references and human review. These capabilities are not part of the current release.
