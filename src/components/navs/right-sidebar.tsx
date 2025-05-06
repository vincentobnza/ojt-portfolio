import { Link, useLocation } from "react-router-dom";
import { onThisPage, PageData } from "@/data/on-this-page";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { ArrowUpRight, SquareArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
    <aside className="fixed top-0 right-0 h-screen hidden md:block w-80 bg-white dark:bg-zinc-900 z-10 overflow-y-auto p-6">
      <div className="mt-15 w-full  space-y-8 p-4">
        <div className="pb-5 border-b border-zinc-200 dark:border-zinc-800">
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
                        "text-zinc-700 dark:text-zinc-300 dark:hover:text-white cursor-pointer",
                        isActive && "text-zinc-800 dark:text-zinc-300 font-bold"
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

        {/* <FeedbackSection /> */}

        <div className="space-y-4">
          <Link
            to="https://github.com/vincentobnza/ojt-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
          >
            Give me stars on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <ScrollToTop />
        </div>
      </div>
    </aside>
  );
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleScrollToTop();
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-sm flex items-center gap-2 cursor-pointer"
          onClick={handleClick}
        >
          <SquareArrowUp className="h-4 w-4" />
          Scroll to Top
        </motion.button>
      )}
    </AnimatePresence>
  );
};
