import { AppSidebar } from "@/components/navs/app-sidebar";
import { Navbar } from "@/components/navs/navbar";
import { RightSidebar } from "@/components/navs/right-sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense } from "react";
import { PageLoading } from "@/components/page-loading";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen text-zinc-800 dark:text-zinc-200">
      <Toaster />
      <Navbar />
      <div className="flex flex-1 relative">
        <AppSidebar />
        <motion.main
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 md:mx-[360px] overflow-y-auto p-2"
        >
          <Suspense fallback={<PageLoading />}>
            <Outlet />
          </Suspense>
        </motion.main>

        <RightSidebar />
      </div>

      <ScrollRestoration />
    </div>
  );
}
