import { createBrowserRouter } from "react-router";
import { PublicLayout } from "./layouts/PublicLayout";
import { DesignSystemPage } from "./pages/DesignSystemPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: [{ index: true, Component: DesignSystemPage }],
  },
]);
