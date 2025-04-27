import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider } from "./components/theme-provider";
export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
