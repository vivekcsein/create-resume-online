export interface PersonalInfo {
    fullName: string
    email: string
    phone: string
    location: string
    linkedin?: string
    github?: string
    website?: string
    summary: string
}

export interface WorkExperience {
    id: string
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    description: string[]
}

export interface Education {
    id: string
    institution: string
    degree: string
    field: string
    graduationDate: string
    gpa?: string
}

export interface Skill {
    id: string
    name: string
    category: SkillCategory;
}

export type SkillCategory = "technical" | "soft" | "language";

export interface Project {
    id: string
    name: string
    description: string
    technologies: string[]
    link?: string
}

export interface Certification {
    id: string
    name: string
    issuer: string
    date: string
    link?: string
}

export interface ResumeData {
    personalInfo: PersonalInfo
    workExperience: WorkExperience[]
    education: Education[]
    skills: Skill[]
    projects: Project[]
    certifications: Certification[]
}
