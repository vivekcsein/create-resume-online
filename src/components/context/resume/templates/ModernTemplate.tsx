import DynamicSVG from "@/components/ui/helper/DynamicSVG";
import type { ResumeData } from "@/types/resume";

interface ModernTemplateProps {
  data: ResumeData;
}

export function ModernTemplate({ data }: ModernTemplateProps) {
  const {
    personalInfo,
    workExperience,
    education,
    skills,
    projects,
    certifications,
  } = data;

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString + "-01");
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div
      className="max-w-4xl mx-auto bg-white p-8 shadow-lg"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* Header */}
      <header className="text-center border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {personalInfo.fullName}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex justify-between items-center gap-1 text-[20px]">
            <DynamicSVG iconName="Mail" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex justify-between items-center gap-1 text-[20px]">
            <DynamicSVG iconName="Phone" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex justify-between items-center gap-1 text-[20px]">
            <DynamicSVG iconName="House" />
            {personalInfo.website && <span>{personalInfo.website}</span>}
          </div>
          <div className="flex justify-between items-center gap-1 text-[20px]">
            <DynamicSVG iconName="Linkedin" />
            {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          </div>
          <div className="flex justify-between items-center gap-1 text-[20px]">
            <DynamicSVG iconName="Github" />
            {personalInfo.github && <span>{personalInfo.github}</span>}
          </div>
          <div className="flex justify-between items-center gap-1 text-[20px]">
            <DynamicSVG iconName="MapPin" />
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            PROFESSIONAL EXPERIENCE
          </h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  {formatDate(exp.startDate)} -{" "}
                  {exp.current ? "Present" : formatDate(exp.endDate)}
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                {exp.description.map((desc, index) => (
                  <li key={index} className="mb-1">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            EDUCATION
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <p>{formatDate(edu.graduationDate)}</p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {Object.keys(groupedSkills).length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            SKILLS
          </h2>
          {Object.entries(groupedSkills).map(([category, skillList]) => (
            <div key={category} className="mb-2">
              <span className="font-semibold text-gray-800 capitalize">
                {category === "technical"
                  ? "Technical Skills"
                  : category === "soft"
                  ? "Soft Skills"
                  : "Languages"}
                :
              </span>
              <span className="ml-2 text-gray-700">{skillList.join(", ")}</span>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            PROJECTS
          </h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-3">
              <h3 className="font-semibold text-gray-800">{project.name}</h3>
              <p className="text-gray-700 mb-1">{project.description}</p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Technologies:</span>{" "}
                {project.technologies.join(", ")}
              </p>
              {project.link && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Link:</span> {project.link}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            CERTIFICATIONS
          </h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="mb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                </div>
                <p className="text-sm text-gray-500">{formatDate(cert.date)}</p>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
