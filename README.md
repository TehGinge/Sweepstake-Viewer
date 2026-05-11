# Sweepstake Viewer

A minimalist web app for running friends-and-family football sweepstakes. Assign teams, enter match results, follow group tables, and watch the leaderboard update live as the tournament progresses.

## Features

- **Local & Offline Mode**: Run entirely in the browser using local state.
- **Live Sharing**: Sync game state instantly with friends using Firebase Realtime Database.
- **Host Controls**: Create games, manage scores, and safely delete your hosted games.
- **Dynamic Leaderboard**: Automatically calculates points based on match results.
- **PWA & SEO Ready**: Includes standard metadata, social preview images (Open Graph), and webmanifest.

## Setup & Run Locally

Prerequisite: [Node.js](https://nodejs.org/)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local Vite URL shown in your terminal.

*Note: You can run the app locally without any Firebase configuration. It will default to Local Mode.*

## Live Sharing (Firebase Configuration)

To enable live, sharable links (`#game=<id>`), you'll need to connect the app to a Firebase project.

### 1. Firebase Project Setup
- Go to the [Firebase Console](https://console.firebase.google.com/) and create a project.
- **Authentication**: Enable **Anonymous** sign-in (Build > Authentication > Sign-in method).
- **Realtime Database**: Create a database (Build > Realtime Database).

### 2. Environment Variables
Copy `.env.example` to `.env` and fill in your app's Firebase configuration values:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.europe-west1.firebasedatabase.app/
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Database Rules
Copy the rules from `firebase.database.rules.json` into your Realtime Database Rules tab in the Firebase console.
These rules ensure that:
- Anyone can read the games (so viewers can see the scores).
- Only the anonymous user who originally created the game (the Host) can update or delete it.

## Deployment (e.g. GitHub Pages)

Sweepstake Viewer is a static Vite application, making it easy to deploy.

**Important for Deployments:**
Firebase relies on environment variables (`VITE_FIREBASE_...`) at build time. Ensure you add your Firebase credentials to your deployment platform's Secrets/Environment Variables setting (e.g. GitHub Repository Secrets) so they are injected when `npm run build` runs.

**Authorizing your Domain:**
If deploying to a domain other than `localhost`, you must add that domain to your Firebase Authorized Domains so Authentication succeeds:
1. Firebase Console > Authentication > Settings > Authorized domains.
2. Click **Add domain** and enter your deployment URL (e.g., `yourusername.github.io`).

## How to Use

1. **Setup**: Add players, assign teams (manually or randomly), and tweak scoring rules.
2. **Start Live Game**: In the Setup tab, click *Start Live Game* to generate a shareable `#game=...` URL. Your browser profile becomes the Host.
3. **Groups / Knockouts**: Enter match results as the tournament unfolds.
4. **Home**: View the live-updating leaderboard and team assignments.
5. **Manage**: As the Host, you can update settings or completely delete the live game from the cloud from the Setup tab.
