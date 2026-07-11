import Styles from "../HomeComponentParts/ChangeMakeraction.module.css";
import changemake_image_action from "../../assets/Home-image/changemaker-bg.png";
import Benifits from "../HomeComponentParts/Benifites";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import "../Footer/Footer.css";

const ChangeMakeraction = ({ theme, settheme }) => {
  const { t } = useMarketingTranslation();

  return (
    <div>
      <div className={Styles.change_maker_action_container}>
        <img
          loading="eager"
          decoding="async"
          className={Styles.image_fit_cover}
          src={changemake_image_action}
          alt=""
        />

        <div className={Styles.see_chnagemaker_index}>
          <p className={Styles.title_see_changemaker}>
            {t("changeMakerAction.title")}
          </p>
          <p className={Styles.title_discription_index}>
            {t("changeMakerAction.descriptionLineBreak")} <br />
            {t("changeMakerAction.descriptionLineBreak2")}
          </p>

          <div className="iframe_container">
            <div className="rcmi_embed_cdn">
              <iframe
                className="iframe-width width-100"
                src="https://demo.arcade.software/i527E8HZo4YlXdSC8arb?embed&amp;embed_mobile=tab&amp;embed_desktop=inline&amp;show_copy_link=true"
                frameBorder="0"
                title={t("common.alt.arcadeDemo")}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Benifits theme={theme} settheme={settheme} />
    </div>
  );
};

export default ChangeMakeraction;
