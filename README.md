# Sweepstake Viewer

Sweepstake Viewer is a static football tournament tracker for running a friends-and-family sweepstake. It lets you assign teams to players, enter match results, follow group tables, and watch the leaderboard update as teams progress through the tournament.

The app currently supports World Cup 2026 as the main tournament view, along with Euro 2028 for testing and comparison.

## Run locally

Prerequisite: Node.js

1. Install dependencies:
   `npm install`
2. Start the development server:
   `npm run dev`
3. Open the local Vite URL shown in the terminal.

No environment variables are required for local use.

## Live sharing with Firebase (optional)

The app now supports live game sharing through Firebase Realtime Database.
Host changes sync immediately to viewers on the same game URL.

### 1. Create Firebase project

Enable:
- Authentication: Anonymous sign-in
- Realtime Database

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your Firebase web config values.

### 3. Apply database rules

Use `firebase.database.rules.json` as your Realtime Database rules.

These rules allow:
- Public read access for viewers
- Writes only by the anonymous authenticated owner who created the game

### 4. Start a live game in the app

In `Setup`, click `Start Live Game & Copy Link`.
This creates a unique game URL (`#game=<id>`), copies it, and begins real-time sync.

Notes:
- If Firebase is not configured, the app still runs in local browser mode.
- The host can edit from the browser profile that created the live game (anonymous auth identity).

## How to use the app

1. Go to `Setup` to add players, adjust scoring settings, and assign teams manually or at random.
2. Use `Home` to view the live leaderboard and each player's assigned teams.
3. Enter group-stage results in `Groups` to update standings and qualification.
4. Move to `Knockouts` to enter bracket results once teams progress beyond the groups.
5. Optionally enable the built-in simulation controls in Settings for testing scenarios.

App state is stored in the browser, so players, scores, and tournament settings persist locally between visits on the same device.