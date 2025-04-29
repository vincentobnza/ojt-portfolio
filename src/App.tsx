import {
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { RootLayout } from "./layout/root-layout";
import { lazy } from "react";
// ROUTES

const TitlePage = lazy(() => import("./pages/contents/title-page"));
const CareerPlan = lazy(() => import("./pages/contents/career-plan"));
const StudentTraineePrayer = lazy(
  () => import("./pages/contents/student-trainee-prayer")
);
const PersonalPhilosophy = lazy(
  () => import("./pages/contents/personal-philosophy")
);
const Acknowledgement = lazy(() => import("./pages/contents/acknowledgement"));
const Chapter1 = lazy(() => import("./pages/chapters/chapter1"));
const Chapter2 = lazy(() => import("./pages/chapters/chapter2"));
const Chapter3 = lazy(() => import("./pages/chapters/chapter3"));
const Chapter4 = lazy(() => import("./pages/chapters/chapter4"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="acknowledgement" element={<Acknowledgement />} />
      <Route path="student-trainee-prayer" element={<StudentTraineePrayer />} />
      <Route path="personal-philosophy" element={<PersonalPhilosophy />} />
      <Route path="title-page" element={<TitlePage />} />
      <Route path="career-plan" element={<CareerPlan />} />
      <Route path="chapter-1" element={<Chapter1 />} />
      <Route path="chapter-2" element={<Chapter2 />} />
      <Route path="chapter-3" element={<Chapter3 />} />
      <Route path="chapter-4" element={<Chapter4 />} />
    </Route>
  )
);

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
