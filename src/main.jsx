import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import WhereWeWork from "./Pages/WhereWeWork.jsx";
import { Layout } from "./Layout/Layout.jsx";
import { WhoWeAre } from "./Pages/WhoWeAre.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/where-we-work",
        element: <WhereWeWork></WhereWeWork>,
      },
      {
        path: "/who-we-are",
        element: <WhoWeAre></WhoWeAre>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
