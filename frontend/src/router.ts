import { createBrowserRouter, type RouteObject } from "react-router";
import { PublicLayout } from "./layouts/PublicLayout";
import { AccessPage } from "./pages/AccessPage";
import { DesignSystemPage } from "./pages/DesignSystemPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

// Development-only tools: they never reach the production build.
const developmentRoutes: RouteObject[] = import.meta.env.DEV
  ? [{ path: "design-system", Component: DesignSystemPage }]
  : [];

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },
      { path: "entrar", Component: AccessPage },
      ...developmentRoutes,
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
