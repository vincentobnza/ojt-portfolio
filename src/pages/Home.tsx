import { Container } from "@/components/container";
import Profile from "../assets/profile.jpg";
import { ImageWrapper } from "@/components/image-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail } from "lucide-react";
import { SectionContent } from "@/components/section-content";
import { Link } from "react-router-dom";
import { NextPageButton } from "@/components/next-page-button";

export default function Home() {
  return (
    <section className="flex flex-col items-start justify-start space-y-1">
      <Header />
      <div id="introduction">
        <SectionContent
          title="Introduction"
          description="This portfolio is created to showcase the skills, knowledge, and various projects I have developed throughout my On-the-Job Training (OJT) internship. It reflects the experiences, challenges, and learnings I gained while working in a professional environment, highlighting my growth as an aspiring professional."
        />
      </div>
      <TableOfContents />
      <Chapters />
      <Appendices />
      <NextPageButton label="Title Page" nextRoute="/title-page" />
    </section>
  );
}

const Header = () => {
  return (
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
  );
};

const TableOfContents = () => {
  const TABLE_OF_CONTENTS = [
    {
      name: "Title Page",
      path: "/title-page",
    },
    {
      name: "Acknowledgement",
      path: "/acknowledgement",
    },
    {
      name: "Student Trainee Prayer",
      path: "/student-prayer",
    },
    {
      name: "Personal Philosophy",
      path: "/personal-philosophy",
    },
    {
      name: "Career Plan",
      path: "/career-plan",
    },
  ];
  return (
    <div className="p-5 flex flex-col gap-2" id="table-of-contents">
      <h1 className="text-2xl font-bold">Table of Contents</h1>
      <ul className="mt-5 list-disc text-sm">
        {TABLE_OF_CONTENTS.map((item) => (
          <>
            <Link to={item.path} key={item.name}>
              <li className="flex items-center gap-2 text-sm py-1 underline opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out cursor-pointer ">
                <ArrowUpRight size={14} />
                {item.name}
              </li>
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
};

const Chapters = () => {
  return (
    <div className="p-5 flex flex-col gap-2" id="appendices">
      <h1 className="text-2xl font-bold">Chapters</h1>
      <ul className="mt-5 list-disc text-sm">
        {Array.from({ length: 4 }, (_, index) => index + 1).map((chapter) => (
          <li
            key={chapter}
            className="flex items-center gap-2 text-sm py-1 underline opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out cursor-pointer "
          >
            <ArrowUpRight size={14} />
            <Link to={`/chapter-${chapter}`}>Chapter {chapter}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Appendices = () => {
  const APPENDICES_LETTERS = Array.from({ length: 18 }, (_, i) =>
    String.fromCharCode(i + 65)
  );
  return (
    <div className="p-5 flex flex-col gap-2" id="appendices">
      <h1 className="text-2xl font-bold">Appendices</h1>
      <ul className="mt-5 list-disc text-sm">
        {APPENDICES_LETTERS.map((letter, index) => (
          <li
            key={letter}
            className="flex items-center gap-2 text-sm py-1 underline opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out cursor-pointer "
          >
            <ArrowUpRight size={14} />
            <Link to={`/appendix-${letter.toLowerCase()}`}>
              Appendix {letter}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
