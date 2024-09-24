export interface Experience {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

export interface Education {
  instituicao: string;
  curso: string;
  periodo: string;
  descricao: string;
  url: string;
}

export interface ProfileInterface {
  experiencia_profissional?: Experience[];
  educacao?: Education[];
}

export interface CoursesSectionProps {
  educacao?: Education[];
  openCourses: number | null;
  toggleCourseDetails: (index: number) => void;
}

export interface ExperienceSectionProps {
  experiencia_profissional?: Experience[];
}
