# OpenCode Configuration

## Development Server

**CRITICAL**: The development server is already running and managed by Chipify.

- **Local Dev Server**: `http://127.0.0.1:5198`
- **Preview URL**: `https://api.chitterchat.co.uk/chipify/projects/2ac7da56-cc12-4265-9b7c-38388b9b24d4/preview`
- **Port**: `5198`

## Instructions for AI Agents

**DO NOT** attempt to start a development server. The server is:
- Already running when the project is created
- Managed by Chipify backend service
- Accessible via the preview URL above
- Automatically reloads on file changes (Vite HMR)

When working on this project:
1. **NEVER** run `npm run dev` - it's already running
2. **NEVER** start a new dev server process
3. Use the preview URL to view the application
4. File changes will automatically reload via Vite HMR
