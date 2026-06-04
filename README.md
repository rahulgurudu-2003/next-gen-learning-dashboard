# NexLearn — Next-Gen Learning Dashboard

A modern learning dashboard built with Next.js, TypeScript, Supabase, Tailwind CSS, and Framer Motion.

## Live Demo

https://next-gen-learning-dashboard-steel.vercel.app

## GitHub Repository

https://github.com/rahulgurudu-2003/next-gen-learning-dashboard

---

## Features

* Student Learning Dashboard
* Course Progress Tracking
* Weekly Goal Monitoring
* Course Catalog
* Responsive Design
* Loading Skeletons
* Smooth Animations with Framer Motion
* Supabase Integration

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React
* Vercel

---

## Architecture

### Server Components

Used for data fetching and page rendering.

* Dashboard data
* Course catalog data
* Improved performance and SEO

### Client Components

Used for interactive UI and animations.

* Sidebar
* Hero Section
* Course Cards
* Progress Bars
* Activity Components

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Local Setup

```bash
git clone https://github.com/rahulgurudu-2003/next-gen-learning-dashboard.git

cd next-gen-learning-dashboard

npm install

npm run dev
```

---

## Challenges Faced

* Managing the Server / Client Component boundary in Next.js App Router.
* Configuring Supabase Row Level Security (RLS) policies.
* Mapping Supabase course data dynamically to Lucide icons.
* Building a responsive dashboard layout across desktop, tablet, and mobile devices.

---

## Deployment

The application is deployed on Vercel and connected to GitHub for automatic deployments.
