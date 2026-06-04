import { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import CourseCatalogCard from "@/components/CourseCatalogCard";
import { getCoursesCatalog } from "@/lib/getCoursesCatalog";
import SkeletonCard from "@/components/SkeletonCard";

async function CatalogGrid() {
  const courses = await getCoursesCatalog();

  if (!courses || courses.length === 0) {
    return (
      <div className="col-span-full rounded-2xl border border-zinc-800/40 bg-[#0b0b12] p-8 text-center">
        <p className="text-zinc-500">No courses available in the catalog yet.</p>
      </div>
    );
  }

  return (
    <>
      {courses.map((course) => (
        <CourseCatalogCard
          key={course.id}
          title={course.title}
          description={course.description}
          level={course.level}
          duration={course.duration}
          price={course.price}
          iconName={course.icon_name}
        />
      ))}
    </>
  );
}

function CatalogSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} className="h-72" />
      ))}
    </>
  );
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="pb-24 pt-6 px-4 md:pl-24 lg:pl-26 md:pr-6">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-white lg:text-5xl">
              Student Curriculum
            </h1>
            <p className="mt-3 text-zinc-400">
              Explore the courses offered by our platform and start your learning journey.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Suspense fallback={<CatalogSkeleton />}>
              <CatalogGrid />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}