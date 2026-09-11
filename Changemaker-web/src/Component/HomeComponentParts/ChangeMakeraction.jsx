import Styles from "../HomeComponentParts/ChangeMakeraction.module.css";
import Benifits from "../HomeComponentParts/Benifites";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const ChangeMakeraction = ({ theme, settheme }) => {
  const { t } = useMarketingTranslation();

  return (
    <div>
      <section className={Styles.section}>
        <div className={Styles.inner}>
          <header className={Styles.head}>
            <h2 className={Styles.title}>{t("changeMakerAction.title")}</h2>
            <p className={Styles.subtitle}>{t("changeMakerAction.description")}</p>
          </header>

          <div className={Styles.embed}>
            <iframe
              src="https://demo.arcade.software/i527E8HZo4YlXdSC8arb?embed&amp;embed_mobile=tab&amp;embed_desktop=inline&amp;show_copy_link=true"
              title={t("common.alt.arcadeDemo")}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <Benifits theme={theme} settheme={settheme} />
    </div>
  );
};

export default ChangeMakeraction;
