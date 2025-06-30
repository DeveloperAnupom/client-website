import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import { Layout } from "./Layout/Layout.jsx";
import { WhoWeAre } from "./Pages/WhoWeAre.jsx";
import AnnualReports from "./Components/AnnualReports.jsx";
import GlobalBoard from "./Components/GlobalBoard.jsx";
import WhatWeDo from "./Pages/WhatWeDo.jsx";
import JobWeOffer from "./Pages/JobWeOffer.jsx";

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
        path: "/who-we-are",
        element: <WhoWeAre></WhoWeAre>,
      },
      {
        path: "/annual-reports",
        element: <AnnualReports></AnnualReports>,
      },
      {
        path: "/global-board",
        element: <GlobalBoard></GlobalBoard>,
      },
      {
        path: "/what-we-do",
        element: <WhatWeDo></WhatWeDo>,
      },
      {
        path: "/social-development",
        element: <WhatWeDo></WhatWeDo>,
      },
      {
        path: "/job-we-offer",
        element: <JobWeOffer></JobWeOffer>,
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
