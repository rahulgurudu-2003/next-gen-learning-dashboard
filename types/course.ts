export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export interface CourseCatalog {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  price: number;
  icon_name: string;
  created_at: string;
}