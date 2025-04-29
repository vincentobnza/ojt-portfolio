import { NavLink } from "react-router-dom";
import { DotPatternBg } from "./dot-pattern-bg";
import { ThemeToggle } from "./theme-toggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface NavItem {
  name: string;
  path?: string;
}

const ChapterItems = () => {
  const [isOpen, setIsOpen] = useState(true);
  const chapters = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-sm">
        Chapters
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-2">
        <div className="mt-1 space-y-1 border-l border-zinc-200 dark:border-zinc-800 px-2">
          {chapters.map((chapter) => (
            <NavLink
              key={chapter}
              to={`/${chapter.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `block py-2 px-6 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-sm ${
                  isActive
                    ? "bg-zinc-100 dark:bg-gradient-to-l dark:from-zinc-900  dark:to-zinc-800 font-medium"
                    : ""
                }`
              }
            >
              {chapter}
            </NavLink>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const ContentItems = () => {
  const [isOpen, setIsOpen] = useState(true);
  const contents = [
    {
      name: "Title Page",
      path: "title-page",
    },
    {
      name: "Acknowledgement",
      path: "acknowledgement",
    },
    {
      name: "Student Trainee Prayer",
      path: "student-trainee-prayer",
    },
    {
      name: "Personal Philosophy",
      path: "personal-philosophy",
    },
    {
      name: "Career Plan",
      path: "career-plan",
    },
  ];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-sm">
        Contents
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-2">
        <div className="mt-1 space-y-1 border-l border-zinc-200 dark:border-zinc-800 px-2">
          {contents.map((content) => (
            <NavLink
              key={content.name}
              to={`/${content.path}`}
              className={({ isActive }) =>
                `block py-2 px-6 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-sm ${
                  isActive
                    ? "bg-zinc-100 dark:bg-gradient-to-l dark:from-zinc-900 dark:to-zinc-800 font-medium"
                    : ""
                }`
              }
            >
              {content.name}
            </NavLink>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const RenderNavItem = ({ item }: { item: NavItem }) => {
  if (item.name === "Contents") {
    return <ContentItems />;
  } else if (item.name === "Chapters") {
    return <ChapterItems />;
  } else {
    return (
      <NavLink
        to={item.path ?? "#"}
        className={({ isActive }) =>
          `block py-2 px-4 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-sm ${
            isActive
              ? "bg-zinc-100 dark:bg-gradient-to-l dark:from-zinc-900 dark:to-zinc-800 font-medium"
              : ""
          }`
        }
      >
        {item.name}
      </NavLink>
    );
  }
};

const sidebar_items = [
  {
    name: "Quick Overview",
    path: "/",
  },
  {
    name: "Contents",
  },
  {
    name: "Chapters",
  },
  {
    name: "E-Portfolio",
    path: "/e-portfolio",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export function AppSidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-8 justify-between w-80 bg-white dark:bg-zinc-900 relative">
      <DotPatternBg />
      <div className="flex-grow p-5 overflow-y-auto relative">
        <ul className="space-y-2">
          {sidebar_items.map((item) => (
            <li key={item.name}>
              <RenderNavItem item={item} />
            </li>
          ))}
        </ul>
      </div>
      <ThemeToggle />
    </aside>
  );
}
