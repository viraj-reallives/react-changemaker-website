import Style from "../HomeComponentParts/Benifits.module.css";
import benfitsimage from "../../assets/Home-image/background-benifits-image.svg";
import userduotone from "../../assets/Home-image/user-duotone.svg";
import targetduotone from "../../assets/Home-image/chalkboard-teacher-duotone 1.svg";
import userthreeduotone from "../../assets/Home-image/users-three-duotone 1.svg";
import arrowup from "../../assets/Home-image/arrow-up.svg";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const BENEFIT_ICONS = [userduotone, targetduotone, userthreeduotone, arrowup];

const Benifites = ({ theme }) => {
  const { t, getMessage } = useMarketingTranslation();
  const benefitCards = getMessage("benefits.cards") ?? [];

  return (
    <div className={`${Style.Benfits_container} ${Style[theme]}`}>
      <img
        loading="lazy"
        decoding="async"
        className={Style.image_width}
        src={benfitsimage}
        alt=""
      />

      <div className={Style.benifites_content_container}>
        <div className={Style.top_content_container}>
          <p className={`${Style.title_text} ${Style[theme]}`}>
            {t("benefits.title")}
          </p>
          <p className={`${Style.descritpion_text} ${Style[theme]}`}>
            {t("benefits.description")}
          </p>
        </div>

        <div className={Style.bottom_content_container}>
          {benefitCards.map((card, idx) => (
            <div
              key={card.title ?? idx}
              className={`${Style.changemaker_grid_cards} ${Style[theme]}`}
            >
              <div className={`${Style.head_changer_tag} ${Style[theme]}`}>
                <div className={Style.icon_card}>
                  <img
                    loading="lazy"
                    decoding="async"
                    className={Style.icon_benifit_image}
                    src={BENEFIT_ICONS[idx]}
                    alt={t("common.alt.img")}
                  />
                </div>
                <p
                  className={`${Style.header_title_side_text} ${Style[theme]}`}
                >
                  {card.title}
                </p>
              </div>

              <div className={Style.description_tag_changer}>
                <p
                  className={`${Style.bottom_data_benifit_description} ${Style[theme]}`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benifites;
