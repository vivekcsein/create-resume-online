"use client";

import { useState } from "react";
import { Button } from "@/components/ui/shadcn/button";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import { Download, Eye, FileText } from "lucide-react";
import { useResume } from "../../providers/ResumeProvider";
import { ModernTemplate } from "./templates/ModernTemplate";
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate";
import { PersonalInfoForm } from "./forms/PersonalInfoForm";
import { WorkExperienceForm } from "./forms/WorkExperienceForm";
import { EducationForm } from "./forms/EducationForm";
import { SkillsForm } from "./forms/SkillsForm";
import { ProjectsForm } from "./forms/ProjectsForm";
// import Themes from "@/components/layouts/Themes";
import Link from "next/link";

export default function ResumeBuilder() {
  const { resumeData } = useResume();
  const [selectedTemplate, setSelectedTemplate] = useState<
    "modern" | "professional"
  >("modern");
  const [activeTab, setActiveTab] = useState("form");

  const handleDownload = () => {
    window.print();
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ModernTemplate data={resumeData} />;
      case "professional":
        return <ProfessionalTemplate data={resumeData} />;
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return (
    <div className="min-h-screen ">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <div className="flex items-center space-x-2">
                <FileText className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">
                  Resume Builder
                </h1>
              </div>
            </Link>
            <div className="bg-black">{/* <Themes /> */}</div>
            <div className="flex items-center space-x-4">
              <Select
                value={selectedTemplate}
                onValueChange={(value: "modern" | "professional") =>
                  setSelectedTemplate(value)
                }
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={handleDownload}
                className="flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="form" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Edit Resume</span>
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="flex items-center space-x-2"
            >
              <Eye className="h-4 w-4" />
              <span>Preview</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <PersonalInfoForm />
                <ProjectsForm />
                <WorkExperienceForm />
                <EducationForm />
              </div>
              <div className="space-y-6">
                <SkillsForm />
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Resume Preview
                    </h3>
                    <div className="border rounded-lg p-4 bg-white transform scale-50 origin-top-left w-[200%] h-96 overflow-hidden">
                      {renderTemplate()}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Resume Preview</h2>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("form")}
                  >
                    Edit Resume
                  </Button>
                  <Button onClick={handleDownload}>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden">
                {renderTemplate()}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
