"use client";
import type React from "react"
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import { Button } from "@/components/ui/shadcn/button";
import type { Education } from "@/types/resume";
import { Plus, Trash2 } from "lucide-react";
import { useResume } from "@/components/providers/ResumeProvider";

export function EducationForm() {
  const { resumeData, addEducation, removeEducation } = useResume();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<Education, "id">>({
    institution: "",
    degree: "",
    field: "",
    graduationDate: "",
    gpa: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.institution && formData.degree && formData.field) {
      addEducation({
        ...formData,
        id: Date.now().toString(),
      });
      setFormData({
        institution: "",
        degree: "",
        field: "",
        graduationDate: "",
        gpa: "",
      });
      setShowForm(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Education
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowForm(!showForm)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Education
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {resumeData.education.map((education) => (
          <div key={education.id} className="border rounded-lg p-4 relative">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => removeEducation(education.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <div className="pr-8">
              <h3 className="font-semibold">
                {education.degree} in {education.field}
              </h3>
              <p className="text-sm text-gray-600">{education.institution}</p>
              <p className="text-sm text-gray-500">
                {education.graduationDate}
                {education.gpa && ` • GPA: ${education.gpa}`}
              </p>
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
                <Label htmlFor="institution">Institution *</Label>
                <Input
                  id="institution"
                  value={formData.institution}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      institution: e.target.value,
                    }))
                  }
                  placeholder="University of California"
                />
              </div>
              <div>
                <Label htmlFor="degree">Degree *</Label>
                <Input
                  id="degree"
                  value={formData.degree}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, degree: e.target.value }))
                  }
                  placeholder="Bachelor of Science"
                />
              </div>
              <div>
                <Label htmlFor="field">Field of Study *</Label>
                <Input
                  id="field"
                  value={formData.field}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, field: e.target.value }))
                  }
                  placeholder="Computer Science"
                />
              </div>
              <div>
                <Label htmlFor="graduationDate">Graduation Date</Label>
                <Input
                  id="graduationDate"
                  type="month"
                  value={formData.graduationDate}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      graduationDate: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="gpa">GPA (Optional)</Label>
                <Input
                  id="gpa"
                  value={formData.gpa || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, gpa: e.target.value }))
                  }
                  placeholder="3.8"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button type="submit">Add Education</Button>
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
