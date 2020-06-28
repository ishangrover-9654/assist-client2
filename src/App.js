import "./App.scss";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
//import ScrollToTop from "./utils/ScrollToTop";

import React, { lazy, useState } from "react";
import { Helmet } from "react-helmet";
//import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
//import useDarkMode from "use-dark-mode";

const Home = lazy(() =>
  import("./components/home" /* webpackChunkName: "Home" */)
);
const FAQ = lazy(() => import("./components/faq"));
const Medical = lazy(() => import("./components/medical/medicalItem"));

const schemaMarkup = {
  "@context": "http://schema.org/",
  "@type": "NGO",
  name: "Coronavirus Outbreak in India: Latest Map and Case Count",
  alternateName: "COVID-19 Tracker",
  url: "https://www.covid19india.org/",
  image: "https://www.covid19india.org/thumbnail.png",
};

function App() {
  //const darkMode = useDarkMode(false);
  //const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);

  const pages = [
    {
      pageLink: "/",
      view: Home,
      displayName: "Home",
      showInNavbar: true,
    },
    {
      pageLink: "/medical",
      view: Medical,
      displayName: "Medical ",
      showInNavbar: true,
    },
    {
      pageLink: "/about",
      view: FAQ,
      displayName: "About",
      showInNavbar: true,
    },
    // {
    //   pageLink: "/createPrescription",
    //   view: createPrescription,
    //   displayName: "Create Prescription",
    //   showInNavbar: false,
    // },
    /*{
      pageLink: "/state/:stateCode",
      view: State,
      displayName: t("State"),
      showInNavbar: false,
    },*/
  ];

  return (
    <div className="App">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Router>
        <Route
          render={({ location }) => (
            <React.Fragment>
              <Navbar pages={pages} />
              <Switch location={location}>
                {pages.map((page, index) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      render={({ match }) => <page.view key={index} />}
                      key={index}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            </React.Fragment>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
