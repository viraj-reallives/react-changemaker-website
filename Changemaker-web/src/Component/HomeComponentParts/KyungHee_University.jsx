import React from "react";
import Styles from "../../Component/HomeComponentParts/KyungHee_University.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useLocalePath } from "../../hooks/useLocalePath";
import therd_logo_slide from "../../assets/Home-image/3-rd-workshop-logo.svg";
import sdg_logo_1 from "../../assets/Home-image/E-WEB-Goal-01.svg";
import sdg_logo_2 from "../../assets/Home-image/E-WEB-Goal-02.svg";
import sdg_logo_3 from "../../assets/Home-image/E-WEB-Goal-04.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const KyungHee_University = ({ theme }) => {
  const { t, getMessage } = useMarketingTranslation();
  const uni = getMessage("universities.kyunghee") ?? {};
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
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653479/3-rd-workshop-image_jwd7ay.png"
              className={Styles.slider_img}
              alt={t("common.alt.img")}
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653472/3-rd-workshop-first-image_y34mx3.jpg"
              className={Styles.slider_img}
              alt={t("common.alt.img")}
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/3-rd-workshop-2_ktwj7o.png"
              className={Styles.slider_img}
              alt={t("common.alt.img")}
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653464/3-rd-workshop-3_wegcf0.png"
              className={Styles.slider_img}
              alt={t("common.alt.img")}
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653468/3-rd-workshop-4_ea6we5.png"
              className={Styles.slider_img}
              alt={t("common.alt.img")}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={Styles.content_tab_container_imapct}>
        <div className={Styles.container_logo_box_impact}>
          <img src={therd_logo_slide} alt="" />
        </div>
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

export default KyungHee_University;
