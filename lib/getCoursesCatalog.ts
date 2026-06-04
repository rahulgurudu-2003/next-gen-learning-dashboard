import { supabase } from "@/lib/supabase";
import type { CourseCatalog } from "@/types/course";

export async function getCoursesCatalog(): Promise<CourseCatalog[]> {
  const { data, error } = await supabase
    .from("courses_catalog")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch course catalog: ${error.message}`);
  }

  return (data as CourseCatalog[]) ?? [];
}