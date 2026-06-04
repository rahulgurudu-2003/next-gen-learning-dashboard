import { getCourses } from "@/lib/getCourses";
import CourseCard from "@/components/CourseCard";
import type { Course } from "@/types/course";

export default async function CourseGrid() {
  const courses: Course[] = await getCourses();

  if (courses.length === 0) {
    return (
      <div className="col-span-full rounded-2xl border border-zinc-800/40 bg-[#0b0b12] p-8 text-center">
        <p className="text-zinc-500">No courses found. Add some courses to your Supabase database.</p>
      </div>
    );
  }

  return (
    <>
      {courses.map((course, index) => (
        <CourseCard
          key={course.id}
          title={course.title}
          progress={course.progress}
          iconName={course.icon_name}
          index={index}
        />
      ))}
    </>
  );
}
