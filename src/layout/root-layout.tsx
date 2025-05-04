import { AppSidebar } from "@/components/navs/app-sidebar";
import { Navbar } from "@/components/navs/navbar";
import { RightSidebar } from "@/components/navs/right-sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense } from "react";
import { PageLoading } from "@/components/page-loading";

export function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen text-zinc-800 dark:text-zinc-200">
      <Navbar />

      <div className="flex flex-1 relative">
        <AppSidebar />

        <main className="flex-1 md:mx-[360px] overflow-y-auto p-2">
          <Suspense fallback={<PageLoading />}>
            <Outlet />
          </Suspense>
        </main>

        <RightSidebar />
      </div>

      <ScrollRestoration />
    </div>
  );
}
