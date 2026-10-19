# Faiza Faisal — Updated Portfolio

A responsive React + Vite portfolio starter designed around:
- AI workflow automation
- AI assistants and RAG
- Full-stack web apps and integrations
- Lead research support
- Project case studies, delivery process, and a contact inquiry form

## Requirements
- Node.js 20+ recommended
- npm
- VS Code (recommended)

## Run locally
1. Extract this ZIP folder.
2. Open the extracted `faiza-portfolio-updated` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Create a production build
```bash
npm run build
npm run preview
```

## Portfolio content verification

The project cards link to matching public repositories. Live-site checks found:

| Project | Repository | Demo status |
| --- | --- | --- |
| Khidmat AI Assistant | [Ai-seekho](https://github.com/faizafaisal786/Ai-seekho) | The page loads; one request returned HTTP 402, so verify the AI/API service before claiming the orchestration works. |
| Physical AI Textbook RAG Chatbot | [Physical AI & Humanoid Robotics Textbook](https://github.com/faizafaisal786/-Physical-AI-and-Humanoid-Robotics-Textbook-) | The textbook and chat interface load; chatbot responses have not been tested. |
| AwaamFlow | [awaamflow](https://github.com/faizafaisal786/awaamflow) | The public deployment responds; verify individual orchestration flows before describing them as production-ready. |
| Velora Mall | [velora-mall](https://github.com/faizafaisal786/velora-mall) | The available Vercel preview redirects to login. Add a public production URL and verify cart/checkout before linking a demo. |
| AI Company | [AI-Company](https://github.com/faizafaisal786/AI-Company) | The public deployment loads; review the implemented features before making additional claims. |

Before publishing, confirm the email and LinkedIn URL in the `profile` object in `src/main.jsx`. The contact form uses `mailto:` and opens the visitor's email app; it does not store form submissions on a server.

The hero portrait is included at `public/assets/green-mask-pro.png`. Project-specific screenshots or short demo videos have not been added yet; use genuine captures from the working projects rather than illustrative placeholders.

The portfolio has been checked locally at desktop and mobile viewport sizes, and `npm run build` succeeds. Deploy only after confirming the contact details, outstanding project behavior, and the intended Vercel project/domain.

## Portfolio assistant

The floating chat assistant answers common questions about the profile, services, project links and verification notes, technologies, working process, and contact details. It uses a small, locally bundled knowledge base rather than a hosted AI service; it requires no API key, sends no chat messages to a server, and does not store conversations. Questions outside the published portfolio information receive a clear fallback instead of an invented answer.

## Deploy to Vercel
- Push the folder to a new GitHub repository.
- In Vercel, import the repository.
- Framework preset: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.
- No environment variables are required for this version.

## Notes
- The design uses a dark navy / teal visual system and responsive layouts.
- The portfolio avoids made-up client testimonials, revenue numbers, or performance claims.
- Project cards include a collapsible verification note for demo limitations and unverified behavior.
- This starter is separate from your current deployed website. It does not automatically modify the existing Vercel deployment.
