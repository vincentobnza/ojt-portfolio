import { NavLink } from "react-router-dom";
import { DotPatternBg } from "../shared/dot-pattern-bg";
import { ThemeToggle } from "../theme/theme-toggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  ChevronRight,
  Zap,
  Rocket,
  File,
  Mail,
  Layers2,
  Table,
  FileText,
  Settings2,
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  name: string;
  path?: string;
  icon?: React.ReactNode;
  iconColor?: string;
}

const ChapterItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chapters = ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"];

  // Get the icon color from the sidebarGroups
  const chaptersItem = sidebarGroups
    .find((group) => group.label === "Portfolio")
    ?.items.find((item) => item.name === "Chapters");
  const iconColor = chaptersItem?.iconColor || "";

  return (
    <Collapsible className="w-full" open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm text-sm">
        <div className="flex items-center">
          <Layers2 className={`h-4 w-4 mr-2 ${iconColor}`} />
          Chapters
        </div>
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-2">
        <div className="mt-1 space-y-1 border-l border-zinc-200 dark:border-zinc-800 px-2">
          {chapters.map((chapter) => (
            <NavLink
              key={chapter}
              to={`/portfolio/${chapter.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `block py-2 px-6 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm text-sm ${
                  isActive
                    ? "bg-zinc-100 dark:bg-gradient-to-l dark:from-zinc-900 dark:to-zinc-800 font-medium"
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

const Appendices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const appendices = Array.from({ length: 18 }, (_, i) =>
    String.fromCharCode(i + 65)
  );

  // Get the icon color from the sidebarGroups
  const appendicesItem = sidebarGroups
    .find((group) => group.label === "Portfolio")
    ?.items.find((item) => item.name === "Appendices");
  const iconColor = appendicesItem?.iconColor || "";

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm text-sm">
        <div className="flex items-center">
          <FileText className={`h-4 w-4 mr-2 ${iconColor}`} />
          Appendices
        </div>
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-2">
        <div className="mt-1 space-y-1 border-l border-zinc-200 dark:border-zinc-800 px-2">
          {appendices.map((appendice) => (
            <NavLink
              key={appendice}
              to={`/portfolio/appendices/${appendice.toLowerCase()}`}
              className={({ isActive }) =>
                `block py-2 px-6 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm text-sm ${
                  isActive
                    ? "bg-zinc-100 dark:bg-gradient-to-l dark:from-zinc-900 dark:to-zinc-800 font-medium"
                    : ""
                }`
              }
            >
              Appendix {appendice}
            </NavLink>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const ContentItems = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contents = [
    {
      name: "Title Page",
      path: "portfolio/title-page",
    },
    {
      name: "Acknowledgement",
      path: "portfolio/acknowledgement",
    },
    {
      name: "Student Trainee Prayer",
      path: "portfolio/student-trainee-prayer",
    },
    {
      name: "Personal Philosophy",
      path: "portfolio/personal-philosophy",
    },
    {
      name: "Career Plan",
      path: "portfolio/career-plan",
    },
  ];

  // Get the icon color from the sidebarGroups
  const contentsItem = sidebarGroups
    .find((group) => group.label === "Portfolio")
    ?.items.find((item) => item.name === "Contents");
  const iconColor = contentsItem?.iconColor || "";

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm text-sm">
        <div className="flex items-center">
          <Table className={`h-4 w-4 mr-2 ${iconColor}`} />
          Contents
        </div>
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-2">
        <div className="mt-1 space-y-1 border-l border-zinc-200 dark:border-zinc-800 px-2">
          {contents.map((content) => (
            <NavLink
              key={content.name}
              to={`/${content.path}`}
              className={({ isActive }) =>
                `block py-2 px-6 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm text-sm ${
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

const sidebarGroups = [
  {
    label: "General",
    items: [
      {
        name: "Quick Overview",
        path: "overview",
        icon: <Zap className="h-4 w-4" />,
        iconColor: "text-violet-600 dark:text-violet-400",
      },
      {
        name: "Showcase",
        path: "showcase",
        icon: <Rocket className="h-4 w-4" strokeWidth={3} />,
        iconColor: "text-indigo-600 dark:text-indigo-400",
      },
    ],
  },
  {
    label: "Portfolio",
    items: [
      {
        name: "Contents",
        icon: <Table className="h-4 w-4" strokeWidth={3} />,
        iconColor: "text-blue-600 dark:text-blue-400",
      },
      {
        name: "Chapters",
        icon: <Layers2 className="h-4 w-4" strokeWidth={3} />,
        iconColor: "text-violet-600 dark:text-violet-400",
      },
      {
        name: "Appendices",
        icon: <FileText className="h-4 w-4" strokeWidth={3} />,
        iconColor: "text-violet-600 dark:text-violet-400",
      },
    ],
  },
  {
    label: "Links",
    items: [
      {
        name: "PDF File",
        path: "pdf",
        icon: <File className="h-4 w-4" strokeWidth={3} />,
        iconColor: "text-sky-600 dark:text-sky-400",
      },
      {
        name: "Contact",
        path: "contact",
        icon: <Mail className="h-4 w-4" strokeWidth={3} />,
        iconColor: "text-blue-600 dark:text-blue-400",
      },
    ],
  },
  {
    label: "System",
    items: [
      {
        name: "Settings",
        path: "settings",
        icon: <Settings2 className="h-4 w-4" strokeWidth={3} />,
        iconColor: "text-gray-600 dark:text-gray-300",
      },
    ],
  },
];

const RenderNavItem = ({ item }: { item: NavItem }) => {
  if (item.name === "Contents") {
    return <ContentItems />;
  } else if (item.name === "Chapters") {
    return <ChapterItems />;
  } else if (item.name === "Appendices") {
    return <Appendices />;
  } else {
    return (
      <NavLink
        to={item.path ?? "#"}
        className={({ isActive }) =>
          `block py-2 px-4 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm text-sm ${
            isActive
              ? "bg-zinc-100 dark:bg-gradient-to-l dark:from-zinc-900 dark:to-zinc-800 font-medium"
              : ""
          }`
        }
      >
        <div className="flex items-center">
          {/* Apply the color class to the icon wrapper */}
          <span className={item.iconColor}>{item.icon}</span>
          <span className="ml-2">{item.name}</span>
        </div>
      </NavLink>
    );
  }
};

export function AppSidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-8 justify-between w-80 bg-white dark:bg-zinc-900 relative">
      <DotPatternBg />
      <div className="flex-grow p-5 overflow-y-auto relative">
        {sidebarGroups.map((group, index) => (
          <div key={index} className="mb-6">
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-2 px-4">
              {group.label}
            </div>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.name}>
                  <RenderNavItem item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ThemeToggle />
    </aside>
  );
}
