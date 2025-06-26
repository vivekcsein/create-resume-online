"use client";

import type React from "react";

import { useState } from "react";
import type { Project } from "@/types/resume";
import { Plus, Trash2, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import { Badge } from "@/components/ui/shadcn/badge";
import { useResume } from "@/components/providers/ResumeProvider";
import { Label } from "@/components/ui/shadcn/label";
import { Textarea } from "@/components/ui/shadcn/textarea";

export function ProjectsForm() {
  const { resumeData, addProject,  removeProject } = useResume();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<Project, "id">>({
    name: "",
    description: "",
    technologies: [],
    link: "",
  });
  const [techInput, setTechInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.description) {
      addProject({
        ...formData,
        id: Date.now().toString(),
      });
      setFormData({
        name: "",
        description: "",
        technologies: [],
        link: "",
      });
      setTechInput("");
      setShowForm(false);
    }
  };

  const addTechnology = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()],
      }));
      setTechInput("");
    }
  };

  const removeTechnology = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnology();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Projects
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowForm(!showForm)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {resumeData.projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-4 relative">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => removeProject(project.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <div className="pr-8">
              <h3 className="font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {project.description}
              </p>
              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
              {project.link && (
                <p className="text-sm text-blue-600 mt-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="border rounded-lg p-4 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectName">Project Name *</Label>
                <Input
                  id="projectName"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="E-commerce Website"
                />
              </div>
              <div>
                <Label htmlFor="projectLink">Project Link</Label>
                <Input
                  id="projectLink"
                  value={formData.link || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, link: e.target.value }))
                  }
                  placeholder="https://github.com/username/project"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="projectDescription">Description *</Label>
              <Textarea
                id="projectDescription"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Describe what the project does, your role, and key achievements..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="technologies">Technologies Used</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="technologies"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="React, Node.js, MongoDB..."
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addTechnology}
                >
                  Add
                </Button>
              </div>
              {formData.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {formData.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTechnology(tech)}
                        className="hover:text-red-500"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button type="submit">Add Project</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
