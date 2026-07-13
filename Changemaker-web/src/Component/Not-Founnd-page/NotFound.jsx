import "../Not-Founnd-page/NotFound.css";
import { Link } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useLocalePath } from "../../hooks/useLocalePath";

const NotFound = () => {
  const { t } = useMarketingTranslation();
  const localePath = useLocalePath();

  return (
    <section className="page_404">
      <div className="page_404_container">
        <div className="four_zero_four_bg"></div>

        <div className="contant_box_404">
          <h3>{t("common.notFound.title")}</h3>
          <p>{t("common.notFound.description")}</p>

          <Link to={localePath("/home")} className="link_404">
            {t("common.notFound.homeLink")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
