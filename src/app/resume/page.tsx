import ResumeBuilder from "@/components/context/resume/ResumeBuilder";
import { ResumeProvider } from "@/components/providers/ResumeProvider";

const page = () => {
  return (
    <ResumeProvider>
      <ResumeBuilder />
    </ResumeProvider>
  );
};

export default page;
