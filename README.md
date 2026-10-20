# SmartResume AI

SmartResume AI helps people create polished resumes and tailor them to a specific job description. This repository is being built in steps; the current step establishes the frontend foundation and responsive workspace shell.

## Step 1: Project setup

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Run locally

```powershell
npm install
npm run dev
```

Vite prints the local URL after the development server starts.

### Verify a production build

```powershell
npm run build
npm run preview
```

### Scaffold a fresh copy

The existing repository is already scaffolded. To create the same foundation in a new directory:

```powershell
npm create vite@latest smartresume-ai -- --template react-ts
cd smartresume-ai
npm install
npm install tailwindcss @tailwindcss/vite lucide-react
```

Then use this repository's `vite.config.ts`, `src/index.css`, and `src/` layout as the starting point.

## Architecture

```text
src/
  components/
    AppHeader.tsx       # Brand, workspace actions, and account affordance
    AppSidebar.tsx      # Primary workspace navigation
  App.tsx               # Responsive builder workspace composition
  index.css             # Tailwind entry point and app design tokens
  main.tsx              # React application entry point
```

As subsequent steps are implemented, the app can grow into:

```text
src/
  components/
    resume/              # Resume editor sections and ATS-friendly templates
    matching/            # JD input, match score, and optimization feedback
    ui/                  # Shared, accessible interface primitives
  features/
    resume/              # Resume types, state, persistence, and import/export
    matching/            # Matching and tailoring client logic
  lib/                   # Shared utilities and API client
  types/                 # Cross-feature TypeScript types
```

The current workspace is intentionally a visual foundation. Resume editing, persistence, PDF export, and job-description analysis will be added in their respective steps.
