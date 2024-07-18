export interface Profile {
  photo?: string;
  name?: string;
  job?: string;
  location?: string;
  phone?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  itsMe?: string;
  skills?: {
    hardSkills: {
      name?: string;
      logo?: string;
    };
    softSkills?: string;
    languages?: string;
  };
}
