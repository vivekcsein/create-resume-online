"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import { useResume } from "@/components/providers/ResumeProvider";
import type { WorkExperience } from "@/types/resume";
import { Plus, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/shadcn/label";
import { Textarea } from "@/components/ui/shadcn/textarea";
import { Checkbox } from "@/components/ui/shadcn/checkbox";

export function WorkExperienceForm() {
  const { resumeData, addWorkExperience, removeWorkExperience } = useResume();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<WorkExperience, "id">>({
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: [""],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company && formData.position) {
      addWorkExperience({
        ...formData,
        id: Date.now().toString(),
        description: formData.description.filter((desc) => desc.trim() !== ""),
      });
      setFormData({
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: [""],
      });
      setShowForm(false);
    }
  };

  const addDescriptionPoint = () => {
    setFormData((prev) => ({
      ...prev,
      description: [...prev.description, ""],
    }));
  };

  const updateDescriptionPoint = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      description: prev.description.map((desc, i) =>
        i === index ? value : desc
      ),
    }));
  };

  const removeDescriptionPoint = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      description: prev.description.filter((_, i) => i !== index),
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Work Experience
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowForm(!showForm)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {resumeData.workExperience.map((experience) => (
          <div key={experience.id} className="border rounded-lg p-4 relative">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => removeWorkExperience(experience.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <div className="pr-8">
              <h3 className="font-semibold">{experience.position}</h3>
              <p className="text-sm text-gray-600">
                {experience.company} • {experience.location}
              </p>
              <p className="text-sm text-gray-500">
                {experience.startDate} -{" "}
                {experience.current ? "Present" : experience.endDate}
              </p>
              <ul className="mt-2 text-sm list-disc list-inside">
                {experience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
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
                <Label htmlFor="position">Position *</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      position: e.target.value,
                    }))
                  }
                  placeholder="Software Engineer"
                />
              </div>
              <div>
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                  placeholder="Tech Corp"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  placeholder="San Francisco, CA"
                />
              </div>
              <div>
                <Label htmlFor="startDate">Start Date *</Label>
                <Input
                  id="startDate"
                  type="month"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      startDate: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="current"
                  checked={formData.current}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      current: checked as boolean,
                    }))
                  }
                />
                <Label htmlFor="current">Currently working here</Label>
              </div>
              {!formData.current && (
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    type="month"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        endDate: e.target.value,
                      }))
                    }
                  />
                </div>
              )}
            </div>

            <div>
              <Label>Job Description</Label>
              {formData.description.map((desc, index) => (
                <div key={index} className="flex gap-2 mt-2">
                  <Textarea
                    value={desc}
                    onChange={(e) =>
                      updateDescriptionPoint(index, e.target.value)
                    }
                    placeholder="• Describe your responsibilities and achievements..."
                    rows={2}
                  />
                  {formData.description.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeDescriptionPoint(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={addDescriptionPoint}
                className="mt-2"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Point
              </Button>
            </div>

            <div className="flex gap-2">
              <Button type="submit">Add Experience</Button>
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
