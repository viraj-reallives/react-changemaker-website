import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollTop from "./ScrollTop/ScrollTop";
import "./Component/Global_css/Global.css";
import { useMarketingTranslation } from "./context/MarketingLocaleContext";
import LocaleGate from "./components/routing/LocaleGate";
import RootLocaleRedirect from "./components/routing/RootLocaleRedirect";
import LegacyLocaleRedirect from "./components/routing/LegacyLocaleRedirect";
import LegacyPrefixRedirect from "./components/routing/LegacyPrefixRedirect";

const Starter = lazy(() => import("./Starter"));
const Layout = lazy(() => import("./Component/Layout"));
const Home = lazy(() => import("./Component/Pages/Home"));
const Certifiedinstitutes = lazy(() =>
  import("./Component/Pages/Certifiedinstitutes"),
);
const Ourimpact = lazy(() => import("./Component/Pages/Ourimpact"));
const Rcmiworks = lazy(() => import("./Component/Pages/Rcmiworks"));
const Contact = lazy(() => import("./Component/Pages/Contact"));
const GetRcmiReport = lazy(() => import("./Component/Pages/GetRcmiReport"));
const NotFound = lazy(() => import("./Component/Not-Founnd-page/NotFound"));
const University = lazy(() =>
  import("./Component/HomeComponentParts/University"),
);
const Navamindradhiraj_University = lazy(() =>
  import("./Component/HomeComponentParts/Navamindradhiraj_University"),
);
const KyungHee_University = lazy(() =>
  import("./Component/HomeComponentParts/KyungHee_University"),
);
const IIT_Bombay = lazy(() =>
  import("./Component/HomeComponentParts/IIT_Bombay"),
);
const Chulalongkorn_University = lazy(() =>
  import("./Component/HomeComponentParts/Chulalongkorn_University"),
);

const PageFallback = () => (
          <div className="simple_loader" aria-hidden="true">
    <div className="loading" />
  </div>
);

const App = () => {
  const { t } = useMarketingTranslation();
  const [showAlert, setShowAlert] = useState(false);

  const triggerAlert = useCallback(() => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  }, []);

  useEffect(() => {
    const handleContextMenu = (e) => {
      const isMedia =
        e.target.tagName === "IMG" ||
        e.target.tagName === "VIDEO" ||
        e.target.closest("img") ||
        e.target.closest("video");

      if (isMedia) {
        e.preventDefault();
        triggerAlert();
      }
    };

    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
        (e.ctrlKey && e.keyCode === 85)
      ) {
        e.preventDefault();
        triggerAlert();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [triggerAlert]);

  return (
    <div className="container">
      {showAlert && (
        <div className="custom-protection-alert">
          <div className="alert-content">
            <span>{t("common.app.contentProtected")}</span>
          </div>
        </div>
      )}

      <ScrollTop />

      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<RootLocaleRedirect />} />

          {/* Current format: language code last — /certified-institutes/en */}
          <Route element={<Layout />}>
            <Route path="home/:locale" element={<LocaleGate />}>
              <Route index element={<Home />} />
            </Route>

            <Route path="certified-institutes/:locale" element={<LocaleGate />}>
              <Route index element={<Certifiedinstitutes />} />
            </Route>

            <Route
              path="our-impact/eth-university/:locale"
              element={<LocaleGate />}
            >
              <Route index element={<University />} />
            </Route>

            <Route
              path="our-impact/navamindradhiraj-university/:locale"
              element={<LocaleGate />}
            >
              <Route index element={<Navamindradhiraj_University />} />
            </Route>

            <Route
              path="our-impact/kyunghee-university/:locale"
              element={<LocaleGate />}
            >
              <Route index element={<KyungHee_University />} />
            </Route>

            <Route
              path="our-impact/iit-bombay/:locale"
              element={<LocaleGate />}
            >
              <Route index element={<IIT_Bombay />} />
            </Route>

            <Route
              path="our-impact/chulalongkorn-university/:locale"
              element={<LocaleGate />}
            >
              <Route index element={<Chulalongkorn_University />} />
            </Route>

            <Route path="our-impact/:locale" element={<LocaleGate />}>
              <Route index element={<Ourimpact />} />
            </Route>

            <Route path="how-rcmi-works/:locale" element={<LocaleGate />}>
              <Route index element={<Rcmiworks />} />
            </Route>

            <Route path="contact/:locale" element={<LocaleGate />}>
              <Route index element={<Contact />} />
            </Route>

            <Route path="get-rcmi-report/:locale" element={<LocaleGate />}>
              <Route index element={<GetRcmiReport />} />
            </Route>
          </Route>

          {/* Portal: /en */}
          <Route path="/:locale" element={<LocaleGate />}>
            <Route index element={<Starter />} />
          </Route>

          {/* Legacy prefix: /en/certified-institutes → /certified-institutes/en */}
          <Route path="/:locale/*" element={<LegacyPrefixRedirect />} />

          {/* Paths missing a language code */}
          <Route path="/home" element={<LegacyLocaleRedirect />} />
          <Route path="/Home" element={<LegacyLocaleRedirect />} />
          <Route
            path="/certified-institutes"
            element={<LegacyLocaleRedirect />}
          />
          <Route
            path="/Certified-Institutes"
            element={<LegacyLocaleRedirect />}
          />
          <Route path="/our-impact" element={<LegacyLocaleRedirect />} />
          <Route
            path="/our-impact/eth-university"
            element={<LegacyLocaleRedirect />}
          />
          <Route
            path="/our-impact/navamindradhiraj-university"
            element={<LegacyLocaleRedirect />}
          />
          <Route
            path="/our-impact/kyunghee-university"
            element={<LegacyLocaleRedirect />}
          />
          <Route
            path="/our-impact/iit-bombay"
            element={<LegacyLocaleRedirect />}
          />
          <Route
            path="/our-impact/chulalongkorn-university"
            element={<LegacyLocaleRedirect />}
          />
          <Route path="/how-rcmi-works" element={<LegacyLocaleRedirect />} />
          <Route path="/How-RCMI-Works" element={<LegacyLocaleRedirect />} />
          <Route path="/contact" element={<LegacyLocaleRedirect />} />
          <Route path="/Contact" element={<LegacyLocaleRedirect />} />
          <Route path="/get-rcmi-report" element={<LegacyLocaleRedirect />} />

          <Route element={<Layout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
