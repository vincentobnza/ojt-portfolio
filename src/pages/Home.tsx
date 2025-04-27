import { Container } from "@/components/container";
import Profile from "../assets/profile.jpg";
import { ImageWrapper } from "@/components/image-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";
import { SectionContent } from "@/components/section-content";

export default function Home() {
  return (
    <section className="flex flex-col items-start justify-start space-y-1">
      <Container>
        <div className="flex w-full justify-between  gap-5">
          <div className="flex items-start gap-8">
            <ImageWrapper url={Profile} alt="profile" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">
                Hello, I am Vincent Obenza 👋
              </h1>

              <p className="text-sm opacity-60 my-2">
                Bachelor of Science in Information Technology
              </p>

              <div className="flex mt-5 gap-3">
                <Button className="text-xs font-bold h-7">
                  <ArrowUpRight />
                  View Resume
                </Button>
                <Button className="text-xs font-bold h-7" variant="outline">
                  <Mail />
                  Email Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <SectionContent
        label="Introduction"
        title="Introduction"
        description="This portfolio is created to showcase the skills, knowledge, and various projects I have developed throughout my On-the-Job Training (OJT) internship. It reflects the experiences, challenges, and learnings I gained while working in a professional environment, highlighting my growth as an aspiring professional."
      />

      <TableOfContents />
    </section>
  );
}

const TableOfContents = () => {
  return (
    <div className="p-5 flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Table of Contents</h1>
      <ul className="mt-5 list-disc pl-5 text-sm space-y-2">
        <li className="underline">Introduction</li>
        <li className="underline">About Me</li>
        <li className="underline">Skills</li>
        <li className="underline">Projects</li>
        <li className="underline">Experience</li>
        <li className="underline">Contact Me</li>
      </ul>
    </div>
  );
};
