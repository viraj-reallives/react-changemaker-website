import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout"; // Aapka Layout component
import Home from "./Component/Pages/Home";
import Certifiedinstitutes from "./Component/Pages/Certifiedinstitutes";
import Ourimpact from "./Component/Pages/Ourimpact";
import Rcmiworks from "./Component/Pages/Rcmiworks";
import Contact from "./Component/Pages/Contact";
import NotFound from "./Component/Not-Founnd-page/NotFound";
import "./App.css";
import ScrollTop from "./ScrollTop/ScrollTop";
import University from "./Component/HomeComponentParts/University";
import Navamindradhiraj_University from "./Component/HomeComponentParts/Navamindradhiraj_University";
import KyungHee_University from "./Component/HomeComponentParts/KyungHee_University";
import IIT_Bombay from "./Component/HomeComponentParts/IIT_Bombay";
import "./Component/Global_css/Global.css";

const App = () => {
  const [theme, settheme] = useState("light");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className={`simple_loader ${theme}`}>
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <div className={`container ${theme}`}>
      <ScrollTop></ScrollTop>

      <Routes>
        <Route path="/" element={<Layout theme={theme} settheme={settheme} />}>
          <Route index element={<Home theme={theme} settheme={settheme} />} />

          <Route
            path="Home"
            element={<Home theme={theme} settheme={settheme} />}
          />
          <Route
            path="Certified-Institutes"
            element={<Certifiedinstitutes theme={theme} settheme={settheme} />}
          />

          <Route
            path="our-impact"
            element={<Ourimpact theme={theme} settheme={settheme} />}
          />

          <Route
            path="our-impact/ETH-University"
            element={<University theme={theme} />}
          />
          <Route
            path="our-impact/Navamindradhiraj_University"
            element={<Navamindradhiraj_University theme={theme} />}
          ></Route>

          <Route
            path="our-impact/KyungHee_University"
            element={<KyungHee_University theme={theme} />}
          />

          <Route
            path="our-impact/IIT_Bombay"
            element={<IIT_Bombay theme={theme} />}
          />

          <Route path="/How-RCMI-Works" element={<Rcmiworks theme={theme} />} />

          <Route
            path="/Contact"
            element={<Contact theme={theme} settheme={settheme} />}
          />

          <Route
            path="*"
            element={<NotFound theme={theme} settheme={settheme} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
