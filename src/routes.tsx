import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { RootLayout } from "./layout/root-layout";
import { Chapter1 } from "./pages/chapters/chapter1";
import { Chapter2 } from "./pages/chapters/chapter2";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/chapter-1",
        element: <Chapter1 />,
      },
      {
        path: "/chapter-2",
        element: <Chapter2 />,
      },
    ],
  },
]);
