I kept forgetting things that annoyed me — a coworker pattern, a company screwing me over repeatedly, situations I kept tolerating. By the time I actually needed to do something about it, I had no record. Just a feeling.

Gripe is a small web app where you log frustrations fast (under 10 seconds), and over time it shows you the pattern — what keeps coming up, how often, how bad. When something builds up enough, you can export it as a clean PDF timeline.

Not a journal. Not a habit tracker. Just a place to put the friction.

Stack — MERN, Chart.js, pdf-lib, JWT auth
Deployment — Vercel (client) + Render (server)
No paid APIs used

Run locally
git clone https://github.com/yourusername/gripe-app
cd gripe-app

# backend
cd server && npm install
# add .env → MONGO_URI, JWT_SECRET, PORT=5000
npm run dev

# frontend
cd ../client && npm install && npm start
Things I still want to add — shareable case links, a browser extension for one-click logging, recurring pattern alerts. Building in public, PRs welcome.