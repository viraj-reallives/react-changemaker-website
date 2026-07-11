import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/portal-tokens.css";
import "./index.css";
import "./Component/Global_css/Global.css";

import { MarketingLocaleProvider } from "./context/MarketingLocaleContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MarketingLocaleProvider>
      <App />
    </MarketingLocaleProvider>
  </BrowserRouter>,
);
