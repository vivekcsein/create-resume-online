"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import { useResume } from "@/components/providers/ResumeProvider";
import type { PersonalInfo } from "@/types/resume";
import { Textarea } from "@/components/ui/shadcn/textarea";

export function PersonalInfoForm() {
  const { resumeData, updatePersonalInfo } = useResume();
  const [formData, setFormData] = useState<PersonalInfo>(
    resumeData.personalInfo
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    updatePersonalInfo(formData);
  }, [formData]);

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="Vivek CSE"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="gmail@email.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 8960 xxxxxxx "
            />
          </div>
          <div>
            <Label htmlFor="website">Website/Portfolio</Label>
            <Input
              id="website"
              value={formData.website || ""}
              onChange={(e) => handleChange("website", e.target.value)}
              placeholder="vivekcse.in"
            />
          </div>
          <div>
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              value={formData.linkedin || ""}
              onChange={(e) => handleChange("linkedin", e.target.value)}
              placeholder="linkedin.com/in/vivekcsein"
            />
          </div>
          <div>
            <Label htmlFor="github">Github</Label>
            <Input
              id="github"
              value={formData.github || ""}
              onChange={(e) => handleChange("github", e.target.value)}
              placeholder="github.com/vivekcsein"
            />
          </div>
          <div>
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="Delhi, India"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="summary">Professional Summary *</Label>
          <Textarea
            id="summary"
            value={formData.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
            placeholder="Brief professional summary highlighting your key skills and experience..."
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  );
}
