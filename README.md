# NexLearn — Next-Gen Learning Dashboard

A futuristic, animated student dashboard prototype built with Next.js 16 (App Router), Supabase, Framer Motion, and Tailwind CSS v4.

---

## Architecture Choices

### Server / Client Split
* **Server Components**: Handles all data fetching (`CourseGrid`, `CatalogGrid`) to keep credentials secure, query the database directly, and stream HTML pages progressively.
* **Client Components**: Handles interactive UI blocks (`HeroTile`, `WeeklyGoalTile`, `CourseCard`, `ActivityTile`, `Sidebar`) that require event listeners, state, or Framer Motion animation APIs.
* **Suspense & Loading**: Built using CSS-only skeleton animations (`loading.tsx` and `SkeletonCard.tsx`) to prevent visual layout shifts while server data is streaming.

### Key Decisions
* **Spring Physics**: entrance and hover states use custom spring parameters (`stiffness` & `damping`) rather than linear durations for natural-feeling motion.
* **Shared-Layout Navigation**: Uses Framer Motion's `layoutId` to animate active background bubbles seamlessly as you switch pages.

---

## Project Structure

```text
├── app/
│   ├── layout.tsx          # Root layout (Metadata & Global styles)
│   ├── page.tsx            # Main dashboard shell (Suspense + Bento Grid)
│   ├── loading.tsx         # Full-page responsive skeleton loader
│   ├── error.tsx           # Error boundary with reset triggers
│   └── courses/
│       └── page.tsx        # Server-rendered course catalog page
├── components/
│   ├── Sidebar.tsx         # Responsive desktop/mobile shell navigation
│   ├── HeroTile.tsx        # Greeting banner with dynamic date & streak stats
│   ├── WeeklyGoalTile.tsx  # Track progress towards study targets
│   ├── CourseCard.tsx      # Individual course visual module card
│   ├── CourseGrid.tsx      # Server Component fetching active courses
│   ├── ActivityTile.tsx    # Contributions learning activity calendar
│   ├── ProgressBar.tsx     # Reusable custom animated bar component
│   └── SkeletonCard.tsx    # Reusable block loading skeleton
├── lib/
│   ├── supabase.ts         # Supabase connection & validation
│   ├── getCourses.ts       # Course database fetcher
│   └── getCoursesCatalog.ts# Catalog database fetcher
├── types/
│   └── course.ts           # Shared TypeScript interfaces
└── .env.example            # Sample configuration file
```

---

## Getting Started

### 1. Database Schema
Create the `courses` table in your Supabase SQL Editor:
```sql
CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  progress integer NOT NULL CHECK (progress >= 0 AND progress <= 100),
  icon_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'Atom'),
  ('System Design Fundamentals', 42, 'Database'),
  ('TypeScript Mastery', 90, 'Code2'),
  ('Machine Learning Basics', 28, 'Brain');
```

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/your-username/next-gen-learning-dashboard.git
cd next-gen-learning-dashboard

# Install dependencies
npm install

# Setup env variables
cp .env.example .env.local
# Edit .env.local with your Supabase URL & Anon Key

# Run development server
npm run dev
```

---

## Responsive Layouts
* **Desktop (> 1024px)**: Full sidebar visible; 4-column Bento grid.
* **Tablet (768px – 1024px)**: Collapsed icon sidebar; 2-column Bento grid.
* **Mobile (< 768px)**: Floating bottom navigation bar; 1-column vertical stack.

---

## Challenges Faced
1. **Tailwind v4 Migration**: Registered theme design tokens in `@theme inline` inside `globals.css` rather than using `tailwind.config.js`.
2. **Server/Client boundary**: kept animations fast by passing Server Component nodes directly inside client-wrapped layouts.
3. **Tree-Shaken Icons**: Structured a key-value mapper dictionary to match string names from Supabase (`icon_name`) directly with Lucide React component references.

---

## License
MIT
