import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Nav from "./Component/NavBarre/Nav";
import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/About/AboutPage";
import ServicePage from "./Pages/Service/ServicePage";
import ContactPage from "./Pages/Contact/ContactPage";
import TermsOfService from "./Pages/FooterLinks/TermsOfService/TermsOfService";
import PrivacyPolicy from "./Pages/FooterLinks/PrivacyPolicy/PrivacyPolicy";
import License from "./Pages/FooterLinks/License/License";
import Partnerships from "./Pages/FooterLinks/Partnerships/Partnerships";

const router = createHashRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/termsofservice",
        element: <TermsOfService />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/license",
        element: <License />,
      },
      {
        path: "/partnerships",
        element: <Partnerships />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
