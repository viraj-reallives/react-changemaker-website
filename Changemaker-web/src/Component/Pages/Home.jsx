import Styles from "./Home.module.css";
import Featuresindex from "../HomeComponentParts/Featuresindex";
import waterflow_image from "../../assets/Home-image/Water-flow-image.svg";
import ChangeMakeraction from "../HomeComponentParts/ChangeMakeraction";
import { Link } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useLocalePath } from "../../hooks/useLocalePath";

const Home = ({ theme, settheme }) => {
  const { t } = useMarketingTranslation();
  const localePath = useLocalePath();

  const become_change_btn = () => {
    window.open(
      "https://reallivesworld.com/reallives/university/pricing",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className={`${Styles.homecontainer} ${Styles[theme]}`}>
      <div className={Styles.first_content_structure}>
        <div className={Styles.content_left_bar}>
          <div className={Styles.top_heading_container_main}>
            <div className={Styles.wrapper_heading}>
              <h1 className={Styles.title_section_1}>
                {t("home.hero.titleLine1")} <br /> {t("home.hero.titleLine2")}
              </h1>

              <div className={Styles.image_description}>
                <img
                  loading="eager"
                  decoding="async"
                  src={waterflow_image}
                  alt={t("common.alt.changemakerIndexImage")}
                />

                <p className={Styles.top_description_title}>
                  {t("home.hero.description")}
                </p>
              </div>
            </div>
          </div>

          <div className={Styles.container_btn}>
            <button className={Styles.redirect_btn} onClick={become_change_btn}>
              {t("home.hero.beginJourney")}
            </button>

            <Link
              className={Styles.text_decoration_none}
              to={localePath("/how-rcmi-works")}
            >
              <button className={Styles.How_works}>
                {t("home.hero.howThisWorks")}
              </button>
            </Link>
          </div>
        </div>

        <div className={Styles.content_image_right}>
          <img
            loading="eager"
            decoding="async"
            className={Styles.image_hight_rem}
            src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653479/first-section-image_f9elve.png"
            alt={t("common.alt.changemakerIndexImage")}
          />
        </div>
      </div>

      <Featuresindex theme={theme} settheme={settheme} />

      <ChangeMakeraction theme={theme} settheme={settheme} />
    </div>
  );
};

export default Home;
