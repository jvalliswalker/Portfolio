import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import components
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import About from "./pages/About/About.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Resume from "./pages/Resume/Resume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
