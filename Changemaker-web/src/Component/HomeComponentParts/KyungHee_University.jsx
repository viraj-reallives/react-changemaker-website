import React from "react";
import Styles from "../../Component/HomeComponentParts/KyungHee_University.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import therd_slide_0 from "../../assets/Home-image/3-rd-workshop-first-image.jpeg";
import therd_slide_1 from "../../assets/Home-image/3-rd-workshop-image.png";
import therd_slide_2 from "../../assets/Home-image/3-rd-workshop-2.png";
import therd_slide_3 from "../../assets/Home-image/3-rd-workshop-3.png";
import therd_slide_4 from "../../assets/Home-image/3-rd-workshop-4.png";
import therd_logo_slide from "../../assets/Home-image/3-rd-workshop-logo.svg";
import sdg_logo_1 from "../../assets/Home-image/E-WEB-Goal-01.svg";
import sdg_logo_2 from "../../assets/Home-image/E-WEB-Goal-02.svg";
import sdg_logo_3 from "../../assets/Home-image/E-WEB-Goal-04.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const KyungHee_University = ({ theme }) => {
  const goToExternal = () => {
    window.location.href =
      "https://reallivesworld.com/reallives-website-main/license.html";
  };
  return (
    <div className={`${Styles.first_university_container} ${Styles[theme]}`}>
      <span className={Styles.section_flex_button}>
        <Link className={Styles.btn_top_slider} to="/our-impact">
          Impact Home
        </Link>

        <FaAngleRight />

        {/* <span class="material-symbols-outlined icon-arrwo-left margin-top-5">
                arrow_forward_ios
              </span> */}

        <button className={`${Styles.btn_top_slider} ${Styles.active_color}`}>
          KyungHee University SDG Workshop
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
              src={therd_slide_1}
              className={Styles.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src={therd_slide_0}
              className={Styles.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src={therd_slide_2}
              className={Styles.slider_img}
              alt="slide 2"
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src={therd_slide_3}
              className={Styles.slider_img}
              alt="slide 3"
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src={therd_slide_4}
              className={Styles.slider_img}
              alt="slide 3"
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
          SDG’s Alligned with this workshop
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
          <p className={Styles.student_testimonials_title}>Objective</p>

          <span class={Styles.text_data_content_1}>
            <p>
              To foster global citizenship and empathy development among Korean
              university students through experiential learning and
              cross-cultural understanding. The workshop aimed to expand
              students' perspectives on global challenges and sustainable
              development while developing their capacity for empathetic
              decision-making and changemaking skills through immersive life
              simulation experiences and structured reflection processes.
            </p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>Program Overview</p>

          <span class={Styles.text_data_content_1}>
            <p>
              RealLives Foundation conducted a comprehensive ChangeMaker
              workshop at Kyung Hee University in Seoul, South Korea, organized
              by Prof. Dr. Utak Chang, former Director of UNESCO APCEIU
              (Asia-Pacific Centre of Education for International
              Understanding), with assistance from Prof. Ms. Chanmi Kim. The
              program engaged 30 university students in an immersive educational
              experience designed to develop global awareness and empathy
              through the RealLives simulation platform. This collaboration with
              UNESCO's educational leadership demonstrated RealLives' alignment
              with international education standards and its effectiveness in
              promoting intercultural understanding and global citizenship
              development.
            </p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            Implementation & Methodology
          </p>

          <span class={Styles.text_data_content_1}>
            <p>
              The workshop utilized RealLives' integrated educational approach,
              enabling students to experience diverse life circumstances across
              different countries and socioeconomic backgrounds through
              text-based simulation. Participants navigated multiple lives
              lasting 30-45 minutes each, encountering real-world data and
              making critical life decisions that reflected authentic global
              challenges. The program incorporated structured reflection through
              the Empathy Canvas framework, allowing students to process their
              emotional responses and develop deeper understanding of global
              disparities. Students also generated personalized ChangeMaker
              Index reports, providing measurable insights into their
              development across key competencies including empathy, global
              awareness, and critical thinking skills.
            </p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>Outcomes & Impact</p>

          <span class={Styles.text_data_content_1}>
            <p>
              The workshop demonstrated significant engagement from Korean
              university students, who showed enhanced understanding of global
              development challenges and increased empathy for people from
              different cultural and economic backgrounds. Under the expert
              guidance of UNESCO-affiliated educators, students developed
              actionable insights into sustainable development goals and their
              personal roles as global changemakers. The program's success at
              Kyung Hee University, facilitated by internationally recognized
              education leaders, reinforces RealLives' effectiveness in diverse
              academic contexts and its potential for scaling intercultural
              education initiatives across Asia-Pacific educational
              institutions.
            </p>
          </span>
        </div>
      </div>

      <div className={Styles.span_imapct_colume}>
        <p className={Styles.participants_title_text}>Skills Developed</p>

        <div className={Styles.wapper_show_btn}>
          <button className={Styles.color_btn_font}>SDG Awareness</button>
          <button
            className={`${Styles.color_btn_font} ${Styles.empathy_btn_color}`}
          >
            ChangeMaking
          </button>
        </div>
      </div>

      <div
        className={`${Styles.wrapper_footer_tab_padding} ${Styles.first_tab_margin}`}
      >
        <div className={Styles.card_reallives_campus_box}>
          <p className={Styles.global_student_title}>
            Empower Your Students with Global Perspectives
          </p>
          <button onClick={goToExternal} className={Styles.larne_more_btn}>
            Begin Your ChangeMaking Journey
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KyungHee_University;
