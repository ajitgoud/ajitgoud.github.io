import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";
import Blogs from "./pages/Blogs.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> },
        // { path: "/projects/:projectId", element: <Project /> },
        // { path: "/blogs", element: <Blogs /> },
        // { path: "/blogs/:blogId", element: <Blog /> },
        { path: "/*", element: <div>Invalid page</div> },
      ],
    },
  ],
  { basename: "https://ajitgoud.github.io/" }
);

export default function App() {
  return <RouterProvider router={router} />;
}
