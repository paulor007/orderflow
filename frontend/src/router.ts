import { createBrowserRouter } from "react-router";
import { DesignSystemPage } from "./pages/DesignSystemPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DesignSystemPage,
  },
]);
