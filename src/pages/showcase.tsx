import { ChaptersHeader } from "@/components/shared/chapters-header";
import { NextPageButton } from "@/components/shared/next-page-button";
import { SectionContent } from "@/components/shared/section-content";
import {
  FaReact,
  FaJava,
  FaBootstrap,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssLine, RiSupabaseFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import { DotPatternBg } from "@/components/shared/dot-pattern-bg";
import { GrGraphQl } from "react-icons/gr";
import { SiPrisma, SiCanva } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import {
  PiMicrosoftWordLogo,
  PiMicrosoftExcelLogo,
  PiMicrosoftPowerpointLogo,
  PiMicrosoftOutlookLogo,
} from "react-icons/pi";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function ShowCase() {
  return (
    <section className="w-full flex flex-col items-start justify-start space-y-1">
      <ChaptersHeader title="Showcase" />
      <WebProgrammingSkills />
      <OtherProgrammingSkills />
      <DesignTools />
      <MicrosoftTools />

      <ProgrammngCertificates />
      <NextPageButton label="Title Page" nextRoute="title-page" />
    </section>
  );
}
const WebProgrammingSkills = () => {
  const tech_stack = [
    {
      name: "JavaScript",
      exp: 3,
      icon: IoLogoJavascript,
      iconColor: "text-amber-700 dark:text-amber-400",
    },
    {
      name: "TypeScript",
      exp: 1,
      icon: BiLogoTypescript,
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "GraphQL",
      exp: 1,
      icon: GrGraphQl,
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      name: "Prisma",
      exp: 1,
      icon: SiPrisma,
      iconColor: "text-violet-600 dark:text-violet-400",
    },
    {
      name: "PostgreSQL",
      exp: 1,
      icon: BiLogoPostgresql,
      iconColor: "text-sky-600 dark:text-sky-400",
    },
    {
      name: "Shadcn UI",
      exp: 2,
      icon: SiShadcnui,
      iconColor: "text-zinc-600 dark:text-zinc-200",
    },
    {
      name: "React",
      exp: 3,
      icon: FaReact,
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      name: "Tailwind CSS",
      exp: 3,
      icon: RiTailwindCssLine,
      iconColor: "text-sky-500 dark:text-sky-400",
    },
    {
      name: "Supabase",
      exp: 2,
      icon: RiSupabaseFill,
      iconColor: "text-violet-600 dark:text-violet-400",
    },
    {
      name: "Bootstrap",
      exp: 1,
      icon: FaBootstrap,
      iconColor: "text-violet-600 dark:text-violet-400",
    },
    {
      name: "Node JS",
      exp: 2,
      icon: FaNodeJs,
      iconColor: "text-violet-600 dark:text-violet-400",
    },
  ];
  return (
    <>
      <SectionContent title="Web Programming Skills" description="" />
      <div className="w-full grid md:grid-cols-3 gap-4 px-5">
        {tech_stack.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            exp={item.exp}
            icon={item.icon}
            iconColor={item.iconColor}
          />
        ))}
      </div>
    </>
  );
};

const OtherProgrammingSkills = () => {
  const other_tech_stack = [
    {
      name: "VB.Net",
      exp: 1,
      icon: DiVisualstudio,
      iconColor: "text-violet-600 dark:text-violet-400",
    },
    {
      name: "Java",
      exp: 1,
      icon: FaJava,
      iconColor: "text-red-600 dark:text-red-400",
    },
  ];
  return (
    <>
      <SectionContent title="Other Programming Skills" />
      <div className="w-full grid md:grid-cols-3 gap-4 px-5">
        {other_tech_stack.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            exp={item.exp}
            icon={item.icon}
            iconColor={item.iconColor}
          />
        ))}
      </div>
    </>
  );
};

const DesignTools = () => {
  const design_tools = [
    {
      name: "Figma",
      exp: 2,
      icon: FaFigma,
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      name: "Canva",
      exp: 3,
      icon: SiCanva,
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
  ];
  return (
    <>
      <SectionContent title="Design Tools" description="" />
      <div className="w-full grid md:grid-cols-3 gap-4 px-5">
        {design_tools.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            exp={item.exp}
            icon={item.icon}
            iconColor={item.iconColor}
          />
        ))}
      </div>
    </>
  );
};

const MicrosoftTools = () => {
  const microsoft_tech_stack = [
    {
      name: "Word",
      exp: 3,
      icon: PiMicrosoftWordLogo,
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Excel",
      exp: 3,
      icon: PiMicrosoftExcelLogo,
      iconColor: "text-violet-600 dark:text-violet-400",
    },
    {
      name: "PowerPoint",
      exp: 3,
      icon: PiMicrosoftPowerpointLogo,
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      name: "Outlook",
      exp: 3,
      icon: PiMicrosoftOutlookLogo,
      iconColor: "text-sky-600 dark:text-sky-400",
    },
  ];
  return (
    <>
      <SectionContent title="Microsoft Tools" />
      <div className="w-full grid md:grid-cols-3 gap-4 px-5">
        {microsoft_tech_stack.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            exp={item.exp}
            icon={item.icon}
            iconColor={item.iconColor}
          />
        ))}
      </div>
    </>
  );
};

const ProgrammngCertificates = () => {
  return (
    <>
      <SectionContent title="Programming Certificates" description="" />
      <Container>
        <div className="w-full p-5 rounded-lg relative bg-white dark:bg-gradient-to-br dark:from-zinc-900 dark:to-violet-900 border border-zinc-200 dark:border-violet-300/30">
          <DotPatternBg />

          <img
            src="https://cdn-icons-png.flaticon.com/128/5021/5021780.png"
            alt="award"
            className="absolute top-2 right-4 w-24 opacity-50"
          />
          <h1 className="text-xl font-medium mb-3">
            CHAMPION OF THE WEB DESIGNING - IT DAY 2024
          </h1>
          <p className="opacity-50">
            8th day of March 2024, at OMSC - San Jose Campus, San Jose,
            Occidental Mindoro
          </p>

          <div className="flex items-center gap-4 mt-8">
            <Button className="h-8 text-xs " variant="outline">
              <ArrowUpRight />
              View Certificate
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

const Card = ({
  title,
  exp,
  icon: Icon,
  iconColor,
}: {
  title: string;
  exp: number;
  icon: IconType;
  iconColor: string;
}) => {
  return (
    <div className="bg-white dark:bg-zinc-800/10 rounded p-4 flex items-center justify-between border border-zinc-200 dark:border-zinc-700/40 relative">
      <div className="flex items-center gap-4">
        <Icon className={`text-xl ${iconColor}`} />
        <h2 className="text-md font-semibold text-zinc-800 dark:text-zinc-200">
          {title}
        </h2>
      </div>
      <p className="text-xs font-medium opacity-50">
        {exp} {exp > 1 ? "yrs" : "yr"} +
      </p>
    </div>
  );
};
