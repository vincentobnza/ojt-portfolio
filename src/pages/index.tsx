import { NavLink } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";
import GridPatternBg from "@/components/shared/grid-pattern-bg";
import Memoji from "@/assets/memoji.png";
import { motion } from "framer-motion";
import { IoSunnySharp } from "react-icons/io5";

export default function Index() {
  return (
    <section className="flex flex-col items-center min-h-screen py-2 bg-white dark:bg-zinc-900 space-y-4 relative text-zinc-800 dark:text-zinc-200">
      <GridPatternBg />
      <Navbar />
      <Hero />
    </section>
  );
}

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="w-full p-5 flex justify-between max-w-screen-xl mx-auto">
      {/* logo */}
      <NavLink
        to="/"
        className="text-3xl font-bold paytone size-20 grid place-items-center rounded-full bg-zinc-100 dark:bg-zinc-800 tracking-wider"
      >
        VO
      </NavLink>

      <div className="flex items-center justify-center gap-10">
        <NavLink
          to="/portfolio/overview"
          className="text-lg py-3 px-8 rounded-full border-3 border-zinc-600 dark:border-violet-500 text-zinc-800 dark:text-violet-400 dark:hover:scale-105 transition ease-in-out duration-300 paytone"
        >
          DASHBOARD
        </NavLink>

        <div>
          {theme === "dark" ? (
            <Button
              onClick={() => setTheme("light")}
              variant="ghost"
              size="icon"
              className="text-zinc-900 dark:text-zinc-200 cursor-pointer"
            >
              <IoSunnySharp className="size-7" />
            </Button>
          ) : (
            <Button
              onClick={() => setTheme("dark")}
              variant="ghost"
              size="icon"
              className="text-zinc-900 dark:text-zinc-200 cursor-pointer"
            >
              <FaRegMoon className="size-7" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto flex justify-center items-center px-10">
      <div className="max-w-lg mx-auto text-center flex flex-col gap-3">
        <motion.div
          className="p-1 bg-zinc-100 dark:bg-zinc-800 self-center rounded-full relative"
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={Memoji} alt="profile" className="size-40 mx-auto" />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-5xl paytone leading-snug text-zinc-800 dark:text-violet-50 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            className="paytone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            WELCOME TO MY{" "}
          </motion.span>
          <motion.span
            className="text-violet-500 dark:text-violet-400 text-4xl md:text-5xl paytone"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.7,
              type: "spring",
              stiffness: 100,
            }}
          >
            PORTFOLIO,{" "}
          </motion.span>
          <motion.span
            className="paytone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            FRIEND{" "}
          </motion.span>
        </motion.h1>

        <motion.p
          className="dark:opacity-70 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          This portfolio showcases the skills and projects I developed during my
          OJT internship.
        </motion.p>
      </div>
    </section>
  );
};
