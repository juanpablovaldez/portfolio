// Strapi v5 Response Types (Flattened structure - no data.attributes nesting)

// Pagination metadata
interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// Response metadata
interface StrapiMeta {
  pagination?: StrapiPagination;
}

// Collection response wrapper
interface StrapiResponse<T> {
  data: T;
  meta: StrapiMeta;
}

// Single type response wrapper
interface StrapiSingleResponse<T> {
  data: T;
  meta: object;
}

// Shared Components
interface TextItem {
  id: number;
  text: string;
}

interface Technology {
  id: number;
  name: string;
}

interface SkillItem {
  id: number;
  name: string;
}

interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

// Content Types

interface WorkExperience {
  id: number;
  documentId: string;
  company: string;
  companyUrl?: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: TextItem[];
  technologies: Technology[];
  softSkills: SkillItem[];
  order: number;
}

interface StrapiProject {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  image?: StrapiMedia;
  features: TextItem[];
  technologies: Technology[];
  githubUrl: string;
  demoUrl: string;
  order: number;
}

interface Education {
  id: number;
  documentId: string;
  course: string;
  institution: string;
  date: string;
  achievements: TextItem[];
  order: number;
}

interface Certification {
  id: number;
  documentId: string;
  course: string;
  institution: string;
  certificateUrl?: string;
  projectUrl?: string;
  order: number;
}

interface Skill {
  id: number;
  documentId: string;
  name: string;
  category: "core" | "tools" | "languages";
  order: number;
}

interface Hero {
  id: number;
  documentId: string;
  title: string;
  bio: string;
  email: string;
  resume?: StrapiMedia;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
  yearsOfExperienceStart: number;
}
