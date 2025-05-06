import { Link, NavLink, useLocation } from "react-router-dom";
import { DotPatternBg } from "../shared/dot-pattern-bg";
import { SearchBar } from "../search-bar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { IoExitOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { RiMenuFill } from "react-icons/ri";
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-xl grid place-items-center">
      <DotPatternBg />
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between items-center px-6 md:px-8">
        <div className="flex items-center gap-8">
          <div className="flex md:hidden" onClick={() => setOpen(true)}>
            <RiMenuFill
              size={25}
              className="text-zinc-600 dark:text-zinc-100"
            />
          </div>
          <NavLink to="/" className="flex items-center gap-4 p-1">
            <div className="flex flex-col">
              <h1 className="font-medium text-lg paytone dark:bg-gradient-to-br text-zinc-600 dark:from-zinc-500 dark:to-slate-100 dark:bg-clip-text dark:text-transparent">
                OJT PORTFOLIO
              </h1>
            </div>
          </NavLink>
        </div>

        <div className="flex md:hidden">
          <ToggleTheme />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="https://drive.google.com/file/d/1jlkobDJjz5-cl6Fsbkc19x8diVOxJsBE/view?usp=sharing"
            className={buttonVariants({ variant: "ghost" })}
          >
            View PDF File
            <ArrowUpRight />
          </Link>

          <SearchBar />
          <Link to="https://github.com/vincentobnza">
            <FaGithub size={25} />
          </Link>
          <Link to="https://www.linkedin.com/in/vincent-obenza-761b472a3/">
            <FaLinkedin size={25} />
          </Link>
        </div>
      </div>

      <MobileMenu open={open} setIsOpen={setOpen} />
    </header>
  );
}

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun strokeWidth={3} className="text-zinc-600 dark:text-zinc-400" />
      ) : (
        <Moon strokeWidth={3} className="text-zinc-600 dark:text-zinc-400" />
      )}
    </Button>
  );
};

type MenuItem = {
  label: string;
  items: { name: string; link: string }[];
};

const MobileMenu = ({
  open,
  setIsOpen,
}: {
  open?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();

  useEffect(() => {
    if (open) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const menuItems: MenuItem[] = [
    {
      label: "General",
      items: [
        {
          name: "Quick Overview",
          link: "/overview",
        },
        {
          name: "Showcase",
          link: "/showcase",
        },
      ],
    },
    {
      label: "Contents",
      items: [
        {
          name: "Title Page",
          link: "/overview",
        },
        {
          name: "Acknowledgement",
          link: "/acknowledgement",
        },
        {
          name: "Student Trainee Prayer",
          link: "/student-trainee-prayer",
        },
        {
          name: "Personal Philosophy",
          link: "/personal-philosophy",
        },
        {
          name: "Career Plan",
          link: "/career-plan",
        },
      ],
    },
  ];

  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="fixed inset-0 bg-white dark:bg-zinc-900 z-50"
        >
          <div className="w-full border-b border-zinc-200 dark:border-zinc-800 p-5 flex justify-end">
            <div
              onClick={() => setIsOpen(false)}
              className="p-3 text-xl bg-zinc-100 dark:bg-zinc-800 rounded-lg grid place-items-center"
            >
              <IoExitOutline strokeWidth={5} />
            </div>
          </div>

          <div className="relative w-full flex flex-col items-start p-5">
            <DotPatternBg />
            <ul>
              {menuItems.map((item) => (
                <li key={item.label} className="mb-10">
                  <motion.h1
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className=" text-violet-500 dark:text-violet-400 font-bold mb-4"
                  >
                    {item.label}
                  </motion.h1>
                  <ul className="flex flex-col gap-2">
                    {item.items.map((subItem, index) => (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.7, delay: index * 0.3 }}
                        key={subItem.name}
                        className="py-[2px]"
                      >
                        <NavLink to={`/portfolio${subItem.link}`}>
                          {subItem.name}
                        </NavLink>
                      </motion.li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
};
