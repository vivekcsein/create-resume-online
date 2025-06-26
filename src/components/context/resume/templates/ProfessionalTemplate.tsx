import type { ResumeData } from "@/types/resume";

interface ProfessionalTemplateProps {
  data: ResumeData;
}

export function ProfessionalTemplate({ data }: ProfessionalTemplateProps) {
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
      className="max-w-4xl mx-auto bg-white shadow-lg"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="grid grid-cols-3 gap-0">
        {/* Left Sidebar */}
        <div className="bg-gray-100 p-6 col-span-1">
          {/* Contact Info */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-400 pb-1">
              CONTACT
            </h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
              {personalInfo.linkedin && <p>{personalInfo.linkedin}</p>}
              {personalInfo.website && <p>{personalInfo.website}</p>}
            </div>
          </div>

          {/* Skills */}
          {Object.keys(groupedSkills).length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-400 pb-1">
                SKILLS
              </h2>
              {Object.entries(groupedSkills).map(([category, skillList]) => (
                <div key={category} className="mb-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 capitalize">
                    {category === "technical"
                      ? "TECHNICAL"
                      : category === "soft"
                      ? "SOFT SKILLS"
                      : "LANGUAGES"}
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {skillList.map((skill, index) => (
                      <li key={index}>• {skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-400 pb-1">
                EDUCATION
              </h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-3 text-sm">
                  <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.field}</p>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500">
                    {formatDate(edu.graduationDate)}
                  </p>
                  {edu.gpa && <p className="text-gray-500">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-400 pb-1">
                CERTIFICATIONS
              </h2>
              {certifications.map((cert) => (
                <div key={cert.id} className="mb-3 text-sm">
                  <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <p className="text-gray-500">{formatDate(cert.date)}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="col-span-2 p-6">
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {personalInfo.fullName}
            </h1>
            {personalInfo.summary && (
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-400 pb-1">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>
            )}
          </header>

          {/* Work Experience */}
          {workExperience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-400 pb-1">
                PROFESSIONAL EXPERIENCE
              </h2>
              {workExperience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {exp.position}
                      </h3>
                      <p className="text-gray-600 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">
                      {formatDate(exp.startDate)} -{" "}
                      {exp.current ? "Present" : formatDate(exp.endDate)}
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                    {exp.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-400 pb-1">
                PROJECTS
              </h2>
              {projects.map((project) => (
                <div key={project.id} className="mb-4">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-600 mb-1">
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
        </div>
      </div>
    </div>
  );
}
