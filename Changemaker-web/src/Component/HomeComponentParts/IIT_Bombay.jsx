import React from "react";
import Styles from "../../Component/HomeComponentParts/IIT_Bombay.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useLocalePath } from "../../hooks/useLocalePath";
import fourth_slide_logo from "../../assets/Home-image/iit_bom_rl.svg";
import sdg_logo_1 from "../../assets/Home-image/E-WEB-Goal-01.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const IIT_Bombay = ({ theme }) => {
  const { t, getMessage } = useMarketingTranslation();
  const uni = getMessage("universities.iitBombay") ?? {};
  const skills = uni.skills ?? [];

  const localePath = useLocalePath();

  const goToExternal = () => {
    window.open(
      "https://reallivesworld.com/reallives/university/pricing",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className={`${Styles.first_university_container} ${Styles[theme]}`}>
      <span className={Styles.section_flex_button}>
        <Link className={Styles.btn_top_slider} to={localePath("/our-impact")}>
          {t("common.impact.impactHome")}
        </Link>

        <FaAngleRight />

        <button className={`${Styles.btn_top_slider} ${Styles.active_color}`}>
          {uni.breadcrumb}
        </button>
      </span>

      <div className={Styles.slider_wrapper}>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop={true}
          autoplay={false}
          speed={600}
          className={`${Styles.mySwiper} universitySlider`}
        >
          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653467/fourth_workshop-1-min_j7e4y0.jpg"
              className={Styles.slider_img}
              alt={t("common.alt.img")}
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653471/fourth_workshop-2-min_umblqv.jpg"
              className={Styles.slider_img}
              alt={t("common.alt.img")}
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653470/fourth_workshop-3-min_dqej4n.jpg"
              className={Styles.slider_img}
              alt={t("common.alt.img")}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={Styles.content_tab_container_imapct}>
        <div className={Styles.container_logo_box_impact}>
          <img src={fourth_slide_logo} alt="" />
        </div>
      </div>

      <div className={Styles.wrapper_professior_data}>
        <span className={Styles.span_imapct_colume_2}>
          <p className={Styles.university_text_title}>{uni.university}</p>
          <p className={Styles.participants_title_text}>{uni.department}</p>
        </span>

        <span className={Styles.flex_align_start}>
          <p className={Styles.participants_title_text}>
            {t("common.impact.inCollaborationWith")}
          </p>
          <p className={Styles.university_text_title}>{uni.collaborator}</p>
        </span>
      </div>

      <div className={Styles.sdg_container_imapct_tab}>
        <p className={Styles.student_testimonials_title}>
          {t("common.impact.sdgAligned")}
        </p>

        <div className={Styles.grid_sdg_card_imapct}>
          <div className={Styles.sdg_imapct}>
            <img src={sdg_logo_1} alt="" />
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
            {t("common.impact.outcomesImpact")}
          </p>

          <span className={Styles.text_data_content_1}>
            <p>{uni.outcomes}</p>
          </span>
        </div>
      </div>

      <div className={Styles.span_imapct_colume}>
        <p className={Styles.participants_title_text}>
          {t("common.impact.skillsDeveloped")}
        </p>

        <div className={Styles.wapper_show_btn}>
          {skills.map((skill, idx) => (
            <button
              key={skill}
              className={`${Styles.color_btn_font} ${idx === 1 ? Styles.empathy_btn_color : ""}`}
            >
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
          <button onClick={goToExternal} className={Styles.larne_more_btn}>
            {t("common.impact.beginChangeMakingJourney")}
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IIT_Bombay;
