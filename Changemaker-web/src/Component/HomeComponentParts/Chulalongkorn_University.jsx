import React from "react";
import Styles from "./WorkshopDetail.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useLocalePath } from "../../hooks/useLocalePath";
import chulaLogo from "../../assets/chula-workshop/logo-Chula-1.webp";
import sdg_logo_1 from "../../assets/Home-image/E-WEB-Goal-01.svg";
import slide1 from "../../assets/chula-workshop/fifth-work-shop-4.png";
import slide2 from "../../assets/chula-workshop/fifth-work-shop-2.png";
import slide3 from "../../assets/chula-workshop/fifth-work-shop-3.png";
import slide4 from "../../assets/chula-workshop/fifth-work-shop-5.png";
import slide5 from "../../assets/chula-workshop/fifth-work-shop.png";
import empathyCanvas1 from "../../assets/chula-workshop/first-goal-img-1.png";
import empathyCanvas2 from "../../assets/chula-workshop/second-goal-img-2.png";
import empathyCanvas3 from "../../assets/chula-workshop/therd-goal-img-3.png";
import { FaArrowRight } from "react-icons/fa6";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useSignupModal } from "../../context/SignupModalContext";
import WorkshopIdentity from "./WorkshopIdentity";

const SLIDER_IMAGES = [slide1, slide2, slide3, slide4, slide5];
const EMPATHY_CANVAS_IMAGES = [empathyCanvas1, empathyCanvas2, empathyCanvas3];

const Chulalongkorn_University = () => {
  const { t, getMessage } = useMarketingTranslation();
  const uni = getMessage("universities.chulalongkorn") ?? {};
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
              <img
                src={src}
                className={Styles.slider_img}
                alt={t("common.alt.img")}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

        <WorkshopIdentity
          partnerLogo={chulaLogo}
          university={uni.university}
          department={uni.department}
          collaborator={uni.collaborator}
        />

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

      <div className={Styles.container_student_impact_data}>
        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            {uni.professorSectionTitle}
          </p>

          <div className={Styles.testimonial_video}>
            <iframe
              src="https://www.youtube.com/embed/70nSMII7IYQ"
              title="Chulalongkorn University professor workshop reflection"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className={Styles.container_student_impact_data}>
        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            {uni.empathyCanvasSectionTitle}
          </p>

          <div className={Styles.empathy_canvas_grid}>
            {EMPATHY_CANVAS_IMAGES.map((src) => (
              <img
                key={src}
                src={src}
                className={Styles.empathy_canvas_image}
                alt={t("common.alt.img")}
              />
            ))}
          </div>
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
              className={`${Styles.color_btn_font} ${
                idx === 1
                  ? Styles.empathy_btn_color
                  : idx === 2
                    ? Styles.critical_thinking_btn_color
                    : ""
              }`}
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
          <button onClick={openSignupModal} className={Styles.larne_more_btn}>
            {t("common.impact.beginChangeMakingJourney")}
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chulalongkorn_University;
