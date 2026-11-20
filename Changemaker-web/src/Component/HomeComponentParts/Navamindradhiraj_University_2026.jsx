import Styles from "./WorkshopDetail.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useLocalePath } from "../../hooks/useLocalePath";
import second_logo_slide from "../../assets/Home-image/second-logo-tab.svg";
import sdg_logo_1 from "../../assets/Home-image/E-WEB-Goal-01.svg";
import sdg_logo_2 from "../../assets/Home-image/E-WEB-Goal-02.svg";
import sdg_logo_3 from "../../assets/Home-image/E-WEB-Goal-04.svg";
import { FaArrowRight } from "react-icons/fa6";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useSignupModal } from "../../context/SignupModalContext";
import WorkshopIdentity from "./WorkshopIdentity";
import sessionClassroom from "../../assets/nmu-workshop-2026/session-classroom.jpg";
import sessionIntro from "../../assets/nmu-workshop-2026/session-intro.jpg";
import sessionAisle from "../../assets/nmu-workshop-2026/session-aisle.jpg";
import sessionBallroom from "../../assets/nmu-workshop-2026/session-ballroom.jpg";
import sessionSignup from "../../assets/nmu-workshop-2026/session-signup.jpg";
import sessionTablet from "../../assets/nmu-workshop-2026/session-tablet.jpg";

const SLIDER_IMAGES = [
  sessionClassroom,
  sessionIntro,
  sessionAisle,
  sessionBallroom,
  sessionSignup,
  sessionTablet,
];

const Navamindradhiraj_University_2026 = () => {
  const { t, getMessage } = useMarketingTranslation();
  const uni = getMessage("universities.navamindradhiraj2026") ?? {};
  const skills = uni.skills ?? [];

  const localePath = useLocalePath();
  const { openSignupModal } = useSignupModal();

  return (
    <div className={Styles.first_university_container}>
      <nav className={Styles.section_flex_button} aria-label="Breadcrumb">
        <Link className={Styles.btn_top_slider} to={localePath("/our-impact")}>
          {t("common.impact.impactHome")}
        </Link>
        <span className={Styles.crumbSep} aria-hidden="true">
          /
        </span>
        <span className={Styles.crumbCurrent}>{uni.breadcrumb}</span>
      </nav>

      <div className={Styles.slider_wrapper}>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          autoplay={false}
          speed={600}
          className={`${Styles.mySwiper} universitySlider`}
        >
          {SLIDER_IMAGES.map((src) => (
            <SwiperSlide key={src} className={Styles.swiperSlide}>
              <img src={src} className={Styles.slider_img} alt={t("common.alt.img")} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <WorkshopIdentity
        partnerLogo={second_logo_slide}
        cropClass="logoCropNav"
        university={uni.university}
        department={uni.department}
        collaborator={uni.collaborator}
      />

      <div className={Styles.resultsBanner}>
        <p className={Styles.resultsBannerText}>
          {t("common.impact.resultsBannerText")}
        </p>
        <Link
          to={localePath("/nmu-workshop-2026")}
          className={Styles.larne_more_btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("common.impact.resultsLinkText")}
          <FaArrowRight />
        </Link>
      </div>

      <div className={Styles.sdg_container_imapct_tab}>
        <p className={Styles.student_testimonials_title}>
          {t("common.impact.sdgAligned")}
        </p>

        <div className={Styles.grid_sdg_card_imapct}>
          <div className={Styles.sdg_imapct}>
            <img src={sdg_logo_1} alt="" />
          </div>
          <div className={Styles.sdg_imapct}>
            <img src={sdg_logo_2} alt="" />
          </div>
          <div className={Styles.sdg_imapct}>
            <img src={sdg_logo_3} alt="" />
          </div>
        </div>
      </div>

      <div className={Styles.first_tab_style}>
        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            {t("common.impact.objective")}
          </p>
          <span className={Styles.text_data_content_1}>
            <p>{uni.objective}</p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            {t("common.impact.programOverview")}
          </p>
          <span className={Styles.text_data_content_1}>
            <p>{uni.programOverview}</p>
            {uni.programOverviewHighlight ? (
              <p>
                <strong>
                  {uni.programOverviewHighlightLabel
                    ? `${uni.programOverviewHighlightLabel} `
                    : null}
                </strong>
                {uni.programOverviewHighlight}
              </p>
            ) : null}
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            {t("common.impact.implementationMethodology")}
          </p>
          <span className={Styles.text_data_content_1}>
            <p>{uni.implementation}</p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            {t("common.impact.crossCulturalExchange")}
          </p>
          <span className={Styles.text_data_content_1}>
            <p>{uni.crossCultural}</p>
            {uni.crossCulturalHighlight ? (
              <p>
                <strong>
                  {uni.crossCulturalHighlightLabel
                    ? `${uni.crossCulturalHighlightLabel} `
                    : null}
                </strong>
                {uni.crossCulturalHighlight}
              </p>
            ) : null}
          </span>
        </div>
      </div>

      <div className={Styles.span_imapct_colume}>
        <p className={Styles.participants_title_text}>
          {t("common.impact.skillsDeveloped")}
        </p>
        <div className={Styles.wapper_show_btn}>
          {skills.map((skill) => (
            <button key={skill} className={Styles.color_btn_font}>
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`${Styles.wrapper_footer_tab_padding} ${Styles.first_tab_margin}`}
      >
        <div className={Styles.card_reallives_campus_box}>
          <p className={Styles.global_student_title}>
            {t("common.impact.empowerStudents")}
          </p>
          <button onClick={openSignupModal} className={Styles.larne_more_btn}>
            {t("common.impact.beginChangeMakingJourney")}
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navamindradhiraj_University_2026;
