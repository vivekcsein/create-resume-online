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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import type { Skill, SkillCategory } from "@/types/resume";
import { Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/shadcn/badge";
import { useResume } from "@/components/providers/ResumeProvider";

export function SkillsForm() {
  const { resumeData, addSkill, removeSkill } = useResume();
  const [skillName, setSkillName] = useState("");
  const [skillCategory, setSkillCategory] = useState<
    "technical" | "soft" | "language"
  >("technical");

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (skillName.trim()) {
      addSkill({
        id: Date.now().toString(),
        name: skillName.trim(),
        category: skillCategory,
      });
      setSkillName("");
    }
  };

  const groupedSkills = resumeData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleAddSkill} className="flex gap-2">
          <div className="flex-1">
            <Input
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              placeholder="Enter a skill"
            />
          </div>
          <Select
            value={skillCategory}
            onValueChange={(value: SkillCategory) => setSkillCategory(value)}
          >
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technical">Technical</SelectItem>
              <SelectItem value="soft">Soft Skills</SelectItem>
              <SelectItem value="language">Language</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </form>

        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="font-medium mb-2 capitalize">
              {category === "technical"
                ? "Technical Skills"
                : category === "soft"
                ? "Soft Skills"
                : "Languages"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill.id}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {skill.name}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill.id)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
