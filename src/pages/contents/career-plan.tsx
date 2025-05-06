import { ChaptersHeader } from "@/components/shared/chapters-header";
import { NextPageButton } from "@/components/shared/next-page-button";
import Paragraph from "@/components/shared/paragraph";

export default function CareerPlan() {
  return (
    <>
      <ChaptersHeader title="Career Plan" />
      <div className="px-5">
        {career_plan.map((career) => (
          <Paragraph>{career}</Paragraph>
        ))}
      </div>
      <NextPageButton
        nextRoute="chapter-1"
        label="Chapter 1"
        hasPreviousPage={true}
      />
    </>
  );
}

const career_plan: string[] = [
  "As a graduate of the Bachelor of Science in Information Technology (BSIT) program, my career goal is to become a front-end developer. I aim to use the knowledge and skills I’ve gained throughout my studies to build interactive, user-friendly, and accessible web applications that solve real-world problems and improve digital experiences.",

  "My interest in front-end development stems from a passion for both design and technology. I’m excited to work with modern web development tools and other frameworks that allow me to bring ideas to life on the web. I plan to continue honing my skills through real-world experience, constant learning, and staying updated with the latest trends in UI/UX and web development.",

  "Beyond coding, I value the importance of communication, teamwork, and problem-solving core skills that are essential in the tech industry. I believe in lifelong learning and am committed to continuously improving, whether through online courses, certifications, or mentorship.",

  "In the next 5 to 10 years, I envision myself in a stable and fulfilling role as a front-end developer, contributing to meaningful projects and collaborating with talented teams. I hope to grow into a senior role where I can lead projects, mentor aspiring developers, and make a positive impact in the tech community.",

  "Lastly, my goal is not just personal success, but to use my skills to create solutions that benefit others, support my family, and inspire fellow IT graduates to pursue their own path with passion and perseverance. With hard work, faith, and determination, I believe this vision is within reach.",
];
