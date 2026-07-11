import Styels from "../HomeComponentParts/Featuresindex.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const IMPACT_IMAGES = [
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653482/Final_Business_with_Purpose_1_qhhlwu.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653467/fourth_workshop-1-min_j7e4y0.jpg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653472/second-workshop-4_ew4261.png",
];

const FEATURE_IMAGES = [
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653480/Student-Simulate_d4rryd.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653466/Decisions_Tracked_tvsg2f.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/Insights_Delivered_teervk.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/AI_Guidance_hztqmt.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653464/Actionable_Reports_v0mwoe.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653480/Personal_Growth_lele2n.png",
];

const Featuresindex = ({ theme }) => {
  const { t, getMessage } = useMarketingTranslation();
  const impactCards = getMessage("features.impactCards") ?? [];
  const featureCards = getMessage("features.featureCards") ?? [];

  return (
    <div className={`${Styels.feautures_main} ${Styels[theme]}`}>
      <div className={Styels.impact_section_container}>
        <p className={Styels.experience_text_reallives}>
          {t("features.ourImpact.title")}
        </p>
        <p className={Styels.description_features_bottom}>
          {t("features.ourImpact.descriptionLineBreak")} <br />
          {t("features.ourImpact.descriptionLineBreak2")}
        </p>

        <div className={Styels.inforamtion_card_container}>
          <div className={Styels.card_info_container}>
            {impactCards.map((card, idx) => (
              <Link
                key={card.link ?? idx}
                to={card.link}
                className={`${Styels.card_info_box} ${Styels.card_info_link}`}
              >
                <div className={Styels.university_image_box}>
                  <img
                    loading="lazy"
                    decoding="async"
                    className={Styels.image_fit_cover}
                    src={IMPACT_IMAGES[idx]}
                    alt={t("common.alt.changemakerIndexImage")}
                  />
                </div>

                <div className={Styels.content_data_text_box}>
                  <p className={Styels.title_university_name}>{card.title}</p>
                  <p className={Styels.description_university_text}>
                    {card.description}
                  </p>
                </div>

                <span className={Styels.larne_more_btn}>
                  {t("common.learnMore")} <FaArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className={Styels.btn_larne_more}>
          <Link className={Styels.text_decoration_none} to="/our-impact">
            <button className={Styels.inner_btn}>
              {t("features.ourImpact.exploreMore")} <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>

      <div className={Styels.feautures_inner_main}>
        <div className={Styels.top_features_box}>
          <p className={Styels.reallives_changemaker_text}>
            {t("features.changemakerFeatures.title")}
          </p>
          <p className={Styels.description_changemake_text}>
            {t("features.changemakerFeatures.descriptionLineBreak")} <br />
            {t("features.changemakerFeatures.descriptionLineBreak2")}
          </p>
        </div>

        <div className={Styels.features_card_container}>
          {featureCards.map((card, idx) => (
            <div key={card.title ?? idx} className={Styels.cards_features_box}>
              <div className={Styels.content_data_text_box}>
                <p className={Styels.features_text_card}>{card.title}</p>
                <p className={Styels.features_description_text}>
                  {card.description}
                </p>
              </div>

              <div className={Styels.image_width_mobile}>
                <img
                  loading="lazy"
                  decoding="async"
                  className={Styels.image_fit_cover}
                  src={FEATURE_IMAGES[idx]}
                  alt={t("common.alt.changemakerIndexImage")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featuresindex;
