import Styles from "./Certifiedinstitutes.module.css";
import goal1 from "../../assets/Home-image/E-WEB-Goal-01.svg";
import goal2 from "../../assets/Home-image/E-WEB-Goal-02.svg";
import goal3 from "../../assets/Home-image/E-WEB-Goal-04.svg";
import sustinablegoal from "../../assets/Home-image/Sustinable-goal-img.svg";
import national_image from "../../assets/Home-image/National-education.svg";
import quotes from "../../assets/Home-image/quote-svg.svg";
import orchid_school_logo from "../../assets/Home-image/orchid-reallives-logo.svg";
import changemaker_certificate from "../../assets/Home-image/changemaker-certificate.png";
import logowhite from "../../assets/logo-white.svg";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const WORKSHOP_IMAGES = [
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-5_kwmesy.png",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-2_hgvd1d.jpg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653480/orchid-3_zmamzk.jpg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653466/orchid-4_tnp54i.jpg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653468/orchid-1_ipbgc7.jpg",
  "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/orchid-6_filvzp.jpg",
];

const Certifiedinstitutes = ({ theme }) => {
  const { t, getMessage } = useMarketingTranslation();
  const page = getMessage("pages.certifiedInstitutes") ?? {};
  const hero = page.hero ?? {};
  const dashboard = page.dashboard ?? {};
  const workshop = page.workshop ?? {};
  const praise = page.praise ?? {};
  const certificate = page.certificate ?? {};
  const testimonials = praise.testimonials ?? [];

  return (
    <div className={`${Styles.Maincontainercertifide} ${Styles[theme]}`}>
      <div className={Styles.rallives_foundation_tab_box}>
        <img
          loading="eager"
          decoding="async"
          src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-background-img-2.jpeg_off002.png"
          alt={t("common.alt.changemakerIndexImage")}
        />

        <div className={Styles.inner_content_tab}>
          <h1 className={Styles.title_of_foundation}>
            {hero.titleLine1} <br />
            {hero.titleLine2}
          </h1>
        </div>

        <div className={Styles.logo_foundation_box}>
          <img src={orchid_school_logo} alt="" />
        </div>
      </div>

      <div className={`${Styles.dashboard_content_box} ${Styles[theme]}`}>
        <div className={Styles.changemaker_dashboard_title_d}>
          <h2 className={Styles.certifide_institutes_t_dashboard}>
            {dashboard.title}
          </h2>
          <p className={Styles.certifide_institutes_description}>
            {dashboard.description}
          </p>
        </div>

        <div className={`${Styles.wrapper_all_data_cards} ${Styles[theme]}`}>
          <div className={Styles.left_side_content_i_dashboard}>
            <div className={Styles.left_side_content_inner_top}>
              <div className={Styles.top_cards_dashboard}>
                <p className={Styles.title_cards_dashboard_in}>
                  {dashboard.overallScore?.title}
                </p>
                <p className={Styles.title_cards_description_in}>
                  {dashboard.overallScore?.description}
                </p>
                <div className={Styles.number_box_container}>
                  <p className={Styles.number_title_font}>
                    {dashboard.overallScore?.value}
                    <span className={Styles.second_number_title}>
                      {dashboard.overallScore?.suffix}
                    </span>
                  </p>
                </div>
              </div>

              <div className={Styles.top_cards_dashboard}>
                <p className={Styles.title_cards_dashboard_in}>
                  {dashboard.certifiedStudents?.title}
                </p>
                <p className={Styles.title_cards_description_in}>
                  {dashboard.certifiedStudents?.description}
                </p>
                <div className={Styles.number_box_container}>
                  <p className={Styles.number_title_font}>
                    {dashboard.certifiedStudents?.value}
                    <span className={Styles.second_number_title}>
                      {dashboard.certifiedStudents?.suffix}
                    </span>
                  </p>
                </div>
              </div>

              <div className={Styles.right_top_content_i}>
                <div className={Styles.image_student_changemaker}>
                  <img src={logowhite} alt="" />
                </div>

                <div className={Styles.student_description_changemaker}>
                  <p className={Styles.orchid_text_title}>
                    {dashboard.drivenBy?.title}
                  </p>
                  <p className={Styles.orchid_text_bottom}>
                    {dashboard.drivenBy?.description}
                  </p>
                </div>
              </div>
            </div>

            <div className={Styles.new_bottom_container}>
              <div className={Styles.left_side_content_inner}>
                <div className={Styles.title_bottom_left_container}>
                  <p className={Styles.sdg_title_first}>{dashboard.sdg?.title}</p>
                  <p className={Styles.sdg_description_title}>
                    {dashboard.sdg?.description}
                  </p>
                </div>

                <div className={Styles.sdg_image_left_bottom_container}>
                  <div className={Styles.sdg_img_box}>
                    <img loading="lazy" decoding="async" src={goal1} alt="" />
                  </div>
                  <div className={Styles.sdg_img_box}>
                    <img loading="lazy" decoding="async" src={goal2} alt="" />
                  </div>
                  <div className={Styles.sdg_img_box}>
                    <img loading="lazy" decoding="async" src={goal3} alt="" />
                  </div>
                </div>

                <div className={Styles.devlopement_goal_box}>
                  <img
                    className={Styles.image_fit}
                    src={sustinablegoal}
                    alt=""
                  />
                </div>
              </div>

              <div className={Styles.right_bottom_content_i}>
                <div className={Styles.national_education_image}>
                  <img src={national_image} alt="" />
                </div>

                <p className={Styles.notional_education_text}>
                  {dashboard.nep?.textLineBreak ?? dashboard.nep?.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${Styles.workshop_still_container} ${Styles[theme]}`}>
        <div className={Styles.button_container_workshop_still}>
          <button className={Styles.workshop_still_btn}>
            {workshop.button}
          </button>
        </div>

        <div className={Styles.foundation_description_box}>
          {(workshop.paragraphs ?? []).map((paragraph) => (
            <p key={paragraph} className={Styles.foundation_description_text}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={Styles.container_card_colume}>
          {WORKSHOP_IMAGES.map((img, idx) => (
            <div key={idx} className={Styles.card_data_add}>
              <img
                loading="lazy"
                decoding="async"
                className={Styles.image_fit}
                src={img}
                alt={t("common.alt.changemakerIndexImage")}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`${Styles.student_impact_container} ${Styles[theme]}`}>
        <div className={Styles.button_container_workshop_still}>
          <button className={Styles.workshop_still_btn}>{praise.button}</button>
        </div>

        <div className={Styles.student_impact_cards_container}>
          {testimonials.map((item) => (
            <div key={item.quote} className={Styles.inner_data_impact}>
              <div className={Styles.quotes_container}>
                <img src={quotes} alt="" />
              </div>

              <div className={Styles.inner_data_description}>
                <p>{item.quote}</p>
              </div>

              <div className={Styles.grade_student_detail}>
                <p>{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${Styles.changemaker_certificate_container} ${Styles[theme]}`}
      >
        <p className={Styles.changemaker_text_font}>{certificate.title}</p>

        <div className={Styles.changemaker_certificate}>
          <img
            loading="lazy"
            decoding="async"
            src={changemaker_certificate}
            alt={t("common.alt.changemakerIndexImage")}
          />
        </div>
      </div>
    </div>
  );
};

export default Certifiedinstitutes;
