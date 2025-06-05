import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { HomePage, AboutPage, DocsPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: "/docs",
    element: (
      <Layout>
        <DocsPage />
      </Layout>
    ),
  },
]);

export default router;
