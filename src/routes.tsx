import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { RootLayout } from "./layout/root-layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
