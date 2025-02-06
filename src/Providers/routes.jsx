import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../routes/Home";
import Portfolio from "../routes/Portfolio";
import About from "../routes/About";
import ContactUs from "../routes/ContactUs";
import ServiceDetails from "../routes/ServiceDetails";
import ProjectDetails from "../routes/ProjectDetails";
import BlogDetails from "../routes/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "service-details",
        element: <ServiceDetails />,
      },
      {
        path: "blog-details",
        element: <BlogDetails />,
      },
      {
        path: "project-details",
        element: <ProjectDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);
