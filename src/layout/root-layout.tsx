import { AppSidebar } from "@/components/navs/app-sidebar";
import { Navbar } from "@/components/navs/navbar";
import { RightSidebar } from "@/components/navs/right-sidebar";
import { Outlet, ScrollRestoration } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="flex flex-col h-screen text-zinc-800 dark:text-zinc-200">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-auto py-2 px-12">
          <Outlet />
        </main>
        <RightSidebar />
      </div>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
    </div>
  );
}
