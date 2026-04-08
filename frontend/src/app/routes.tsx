import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import VerifyInternship from "./pages/VerifyInternship";
import InternshipDetails from "./pages/InternshipDetails";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "verify", Component: VerifyInternship },
      { path: "verify/:id", Component: InternshipDetails },
      { path: "*", Component: NotFound },
    ],
  },
]);
