import Styles from "./Rcmiworks.module.css";
import chartpolar from "../../assets/Home-image/chart-polar-duotone 1.svg";
import key_icon from "../../assets/Home-image/key-duotone 2.svg";
import image_behind_rcmi from "../../assets/Home-image/atom-duotone 2.svg";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const STAGE_BG_COLORS = [
  "#e6f1da",
  "#daeac8",
  "#cde2b6",
  "#c1dba3",
  "#a8cd7f",
];

const HOW_IT_WORKS_IMAGES = [
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653475/RealLives_ChangeMaker_Index-1_by1edh.svg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653475/RealLives_ChangeMaker_Index-2_kw32ir.svg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653474/make-a-changemaker-journey_fofepi.svg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653470/graph-rcmi-image_nuyons.svg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/Comptencies-ss-image_xktwdl.svg",
];

function renderParagraphs(paragraphs, className, labelClassName) {
  if (!Array.isArray(paragraphs)) return null;

  return paragraphs.map((para, idx) => {
    if (typeof para === "string") {
      return (
        <p key={idx} className={className}>
          {para}
        </p>
      );
    }

    if (para && typeof para === "object") {
      return (
        <p key={idx} className={className}>
          <span className={labelClassName}>{para.label}</span>
          {para.text}
        </p>
      );
    }

    return null;
  });
}

const Rcmiworks = ({ theme }) => {
  const { t, getMessage } = useMarketingTranslation();
  const whatIsRcmi = getMessage("pages.rcmiWorks.whatIsRcmi") ?? {};
  const keyFeatures = getMessage("pages.rcmiWorks.keyFeatures") ?? {};
  const science = getMessage("pages.rcmiWorks.science") ?? {};
  const howItWorks = getMessage("pages.rcmiWorks.howItWorks") ?? {};
  const journey = getMessage("pages.rcmiWorks.journey") ?? {};
  const stages = journey.stages ?? [];
  const howSteps = howItWorks.steps ?? [];

  const become_change_btn = () => {
    window.open(
      "https://reallivesworld.com/reallives/university/pricing",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className={`${Styles.rcmimaincontainer} ${Styles[theme]}`}>
      <div className={Styles.competencies_Style_image}>
        <img
          loading="eager"
          decoding="async"
          src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653470/competencies-background-image_alcaka.svg"
          alt={t("common.alt.changemakerIndexImage")}
        />
      </div>

      <div className={Styles.data_container_rcmi_main}>
        <div className={Styles.rcmi_data_left_bar}>
          <div className={Styles.tow_box_rcmi}>
            <div className={Styles.top_benfit_header}>
              <div className={Styles.icon_card}>
                <img
                  className={Styles.image_fit_content}
                  src={chartpolar}
                  alt=""
                />
              </div>
              <p className={Styles.header_title_side_text}>
                {whatIsRcmi.title}
              </p>
            </div>
            <div
              className={`${Styles.bottom_data_benifit} ${Styles.flex_colume_what_rcmi}`}
            >
              {(whatIsRcmi.paragraphs ?? []).map((paragraph) => (
                <p key={paragraph} className={Styles.rcmi_info_data_text}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className={Styles.tow_box_rcmi}>
            <div className={Styles.top_benfit_header}>
              <div className={Styles.icon_card}>
                <img
                  loading="lazy"
                  decoding="async"
                  className={Styles.image_fit_content}
                  src={key_icon}
                  alt=""
                />
              </div>
              <p className={Styles.header_title_side_text}>
                {keyFeatures.title}
              </p>
            </div>

            <div
              className={`${Styles.bottom_data_benifit} ${Styles.flex_colume_what_rcmi}`}
            >
              {(keyFeatures.items ?? []).map((item) => (
                <p key={item.label} className={Styles.rcmi_info_data_text}>
                  <span className={Styles.title_description_mid}>
                    {item.label}
                  </span>
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className={Styles.rcmi_data_right_bar}>
          <div className={Styles.top_benfit_header}>
            <div className={Styles.icon_card}>
              <img
                loading="lazy"
                decoding="async"
                className={Styles.image_fit_content}
                src={image_behind_rcmi}
                alt=""
              />
            </div>
            <p className={Styles.header_title_side_text}>{science.title}</p>
          </div>

          <div
            className={`${Styles.bottom_data_benifit} ${Styles.flex_colume_what_rcmi}`}
          >
            <p className={Styles.rcmi_info_data_text}>{science.intro}</p>

            {(science.items ?? []).map((item) => (
              <p key={item.label} className={Styles.rcmi_info_data_text}>
                <span className={Styles.title_description_mid}>
                  {item.label}
                </span>
                {item.text}
              </p>
            ))}

            <p className={Styles.rcmi_info_data_text}>{science.closing}</p>
          </div>
        </div>
      </div>

      <div className={Styles.changemaker_how_works}>
        <div className={Styles.how_to_works_rcmi_container_inner}>
          <p className={Styles.first_title_how_to_work}>{howItWorks.title}</p>

          {howSteps.map((step, idx) => (
            <div key={step.title} className={Styles.container_event_main}>
              <div className={Styles.container_inner_child_left}>
                <p className={Styles.title_game_event}>{step.title}</p>
                {renderParagraphs(
                  step.paragraphs,
                  Styles.description_game_title,
                  Styles.title_description_mid,
                )}
              </div>

              <div
                className={`${Styles.container_inner_child_right} ${
                  idx >= 3 ? Styles.background_white : ""
                }`}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className={Styles.image_fit_content}
                  src={HOW_IT_WORKS_IMAGES[idx]}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={Styles.the_ChangeMaker_Journey_container}>
        <div className={Styles.top_child_changemaker}>
          <p className={Styles.text_changemaker_journey}>{journey.title}</p>
          <p className={Styles.changemaker_devlopement_text}>
            {journey.subtitle}
          </p>
          <p className={Styles.changemaker_devlopment_text}>
            {journey.description}
          </p>
        </div>

        <div className={Styles.changemaker_journey_background_image}>
          <img
            className={Styles.image_fit_content}
            src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653478/changemaker-journey-image_bdfof9.svg"
            alt=""
          />
        </div>

        <div className={Styles.point_cards_container}>
          {stages.slice(0, 3).map((stage, idx) => (
            <div
              className={Styles.point_cards_inner}
              style={{ backgroundColor: STAGE_BG_COLORS[idx] }}
              key={stage.head}
            >
              <p className={Styles.stage_title_text}>{stage.head}</p>
              <p className={Styles.stage_title_2}>{stage.quote}</p>
              <p className={Styles.stage_description_text}>
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        <div className={Styles.point_cards_container_2}>
          {stages.slice(3).map((stage, idx) => (
            <div
              className={Styles.point_cards_inner}
              style={{ backgroundColor: STAGE_BG_COLORS[idx + 3] }}
              key={stage.head}
            >
              <p className={Styles.stage_title_text}>{stage.head}</p>
              <p className={Styles.stage_title_2}>{stage.quote}</p>
              <p className={Styles.stage_description_text}>
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={Styles.make_decision_container}>
        <p className={Styles.make_decision_skill_text}>
          {t("pages.rcmiWorks.cta.text")}
        </p>

        <div className={Styles.becomechanage_maker} onClick={become_change_btn}>
          {t("pages.rcmiWorks.cta.button")}
        </div>
      </div>
    </div>
  );
};

export default Rcmiworks;
