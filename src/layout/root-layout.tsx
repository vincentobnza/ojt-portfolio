import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";
import { RightSidebar } from "@/components/right-sidebar";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Main content with sidebars */}
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-auto py-2 px-12">
          <Outlet />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}
