import { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import WeeklyGoalTile from "@/components/WeeklyGoalTile";
import ActivityTile from "@/components/ActivityTile";
import CourseGrid from "@/components/CourseGrid";
import CoursesSkeleton from "@/components/CoursesSkeleton";
import DashboardContainer from "@/components/DashboardContainer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="pb-28 pt-8 px-4 md:pl-24 lg:pl-26 md:pr-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
                Learning Console
              </h1>
              <p className="text-xs text-zinc-500 font-medium mt-0.5">
                Monitor your curriculum progression, weekly targets, and coding activities. Drag tiles to reorganize.
              </p>
            </div>
            <div className="flex items-center gap-2 select-none self-start sm:self-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#101815] border border-emerald-800/30 px-3 py-1 text-xs font-bold text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync
              </span>
            </div>
          </header>

          <DashboardContainer
            hero={<HeroTile />}
            goal={<WeeklyGoalTile />}
            courses={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
                <Suspense fallback={<CoursesSkeleton />}>
                  <CourseGrid />
                </Suspense>
              </div>
            }
            activity={<ActivityTile />}
          />
        </div>
      </main>
    </div>
  );
}