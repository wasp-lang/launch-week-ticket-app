# Wasp Launch Week Ticket App – Vertical Slice Implementation Plan

## 1. Project Setup & Planning
- [x] Review and update project dependencies if needed
- [x] Create a new feature directory for the ticket app (e.g., `src/ticket`)
- [x] Add placeholder assets (e.g., Da Boi fallback image)

## 2. Auth: Enable GitHub Login
- [x] Update `main.wasp` to enable GitHub Auth (add provider, set up env vars)
- [x] Add GitHub client ID/secret to `.env.server` (or Fly.io secrets for deployment)
- [x] Test login flow and ensure user info (name) is available after login

## 3. Landing Page
- [x] Add prominent CTA: "Log in with GitHub"
- [x] Route unauthenticated users to the landing page
- [x] Style the page to match the app's look and feel
- [ ] Remove Login and Signup pages

## 4. Ticket Generation Flow
- [x] Create a protected ticket page (only accessible when logged in)
- [x] Add "Generate my ticket" button
- [x] Add a nice placeholder for the "empty" ticket
- [x] Implement a Wasp action for ticket generation:
  - [x] Get user's name from Auth context
  - [x] Generate a unique ticket number (sequential or random)
  - [x] Call AI image API for Da Boi action (mock/fallback for first iteration)
  - [x] Return ticket data to the client
- [ ] Display the ticket: user's name, ticket number, mascot image
- [ ] Handle errors (login failure, image generation failure)

## Next:
- Each generated ticket gets its own public page (with OG image)
- Create more boi images

## 5. (Optional, Preferred) Download/Share
- [ ] Add a button to download or share the ticket (can be stubbed initially)

## 6. Responsiveness & Accessibility
- [ ] Ensure all new pages/components are responsive
- [ ] Add accessibility features (alt text, keyboard navigation, etc.)

## 7. Polish & Error Handling
- [ ] Add user feedback for errors (e.g., image generation fallback, login issues)
- [ ] Refine UI/UX for consistency and appeal

## 8. (Optional) Deployment
- [ ] Test the app locally end-to-end
- [ ] Deploy to Fly.io using Wasp CLI
