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
import TermsUse from "./Components/TermsUse.jsx";
import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Cooky from "./Pages/Cooky.jsx";

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
      {
        path: "/term-use",
        element: <TermsUse></TermsUse>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/cooky",
        element: <Cooky></Cooky>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
