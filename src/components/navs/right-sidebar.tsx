import { useLocation } from "react-router-dom";
import { onThisPage, PageData } from "../../data/on-this-page";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FeedbackSection } from "../feedback-section";

export function RightSidebar() {
  const location = useLocation();
  const [activeId, setActiveId] = useState<string | null>(null);

  const pageData = onThisPage.find(
    (page: PageData) => page.path === location.pathname
  );

  const shouldShowList = !!pageData;
  const pageList = pageData?.list || [];

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState({}, "", `${location.pathname}#${id}`);
      setActiveId(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    pageList.forEach((item) => {
      const id = item.toLowerCase().replace(/\s+/g, "-");
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [pageList]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveId(id);
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <aside className="hidden md:flex w-80 bg-white dark:bg-zinc-900 px-10 py-5">
      <div className="w-full h-full space-y-8 p-2">
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
          <h1 className="text-sm font-medium">On this Page</h1>
          {shouldShowList && pageList.length > 0 ? (
            <ul className="mt-5 text-sm space-y-3">
              {pageList.map((item: string, index: number) => {
                const id = item.toLowerCase().replace(/\s+/g, "-");
                const isActive = id === activeId;
                return (
                  <li key={index}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => handleScrollToSection(e, id)}
                      className={cn(
                        "text-zinc-700 dark:text-zinc-300 hover:underline cursor-pointer",
                        isActive && "text-zinc-800 dark:text-zinc-100 underline"
                      )}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="mt-5 text-sm text-zinc-500">
              No items to display.{" "}
              {location.pathname !== "/"
                ? "Current path doesn't match '/'."
                : ""}
            </div>
          )}
        </div>

        <FeedbackSection />
      </div>
    </aside>
  );
}
