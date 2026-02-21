import React from "react";
import Styles from "../../Component/HomeComponentParts/IIT_Bombay.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
// import fourth_slide_1 from "../../assets/Home-image/fourth_workshop-1-min.jpg";
// import fourth_slide_2 from "../../assets/Home-image/fourth_workshop-2-min.jpg";
// import fourth_slide_3 from "../../assets/Home-image/fourth_workshop-3-min.jpg";
import fourth_slide_logo from "../../assets/Home-image/iit_bom_rl.svg";
import sdg_logo_1 from "../../assets/Home-image/E-WEB-Goal-01.svg";
// import sdg_logo_2 from "../../assets/Home-image/E-WEB-Goal-02.svg";
// import sdg_logo_3 from "../../assets/Home-image/E-WEB-Goal-04.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const IIT_Bombay = ({ theme }) => {
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
          IIT Bombay India
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
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653471/fourth_workshop-2-min_umblqv.jpg"
              className={Styles.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653470/fourth_workshop-3-min_dqej4n.jpg"
              className={Styles.slider_img}
              alt="slide 2"
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
          <p className={Styles.university_text_title}>IIT Bombay, India</p>
          <p className={Styles.participants_title_text}>
            Department - IDC School of Design
          </p>
        </span>

        <span className={Styles.flex_align_start}>
          <p className={Styles.participants_title_text}>
            In collaboration with:
          </p>
          <p className={Styles.university_text_title}>India HCI 2024</p>
        </span>
      </div>

      <div className={Styles.sdg_container_imapct_tab}>
        <p className={Styles.student_testimonials_title}>
          SDG’s Alligned with this workshop
        </p>

        <div className={Styles.grid_sdg_card_imapct}>
          <div className={Styles.sdg_imapct}>
            <img src={sdg_logo_1} alt="" />
          </div>
        </div>
      </div>

      <div className={Styles.first_tab_style}>
        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>Objective</p>

          <span class={Styles.text_data_content_1}>
            <p>
              To develop empathetic global citizens through experiential
              learning by enabling students at IIT Bombay to experience diverse
              life circumstances through RealLives simulation, process their
              emotional responses through structured reflection, and channel
              their newfound empathy into actionable social business solutions.
              The comprehensive ChangeMaker Program aimed to bridge the gap
              between awareness and action while fostering critical thinking
              about sustainable development goals and global challenges.
            </p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>Program Overview</p>

          <span class={Styles.text_data_content_1}>
            <p>
              RealLives Foundation successfully conducted a comprehensive
              ChangeMaker Program at IIT Bombay, focusing on sustainable
              development goals and empathy-driven changemaking. The workshop
              engaged university students in an immersive educational journey
              that combined life simulation experiences with structured
              reflection and entrepreneurial thinking. Participants navigated
              through the complete RealLives ecosystem, experiencing lives
              across different socioeconomic backgrounds globally while
              developing measurable empathy and changemaking competencies
              through our proprietary assessment tools.
            </p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            Implementation & Methodology
          </p>

          <span class={Styles.text_data_content_1}>
            <p>
              The program utilized our integrated four-step methodology:
              students first experienced diverse global lives through RealLives
              simulation, then processed their emotional responses using the
              Empathy Canvas framework, followed by generating personalized
              ChangeMaker Index reports analyzing their development across 18
              competencies. The workshop concluded with students creating viable
              social business solutions using our Social Business Canvas,
              directly addressing challenges they encountered during their
              simulated life experiences. This experiential learning approach
              enabled participants to move beyond theoretical understanding of
              global issues to developing practical, empathy-driven solutions.
            </p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>Outcomes & Impact</p>

          <span class={Styles.text_data_content_1}>
            <p>
              The workshop demonstrated significant measurable outcomes in
              student engagement and empathy development. Participants showed
              enhanced understanding of global disparities, improved critical
              thinking about sustainable development challenges, and increased
              motivation to pursue social impact initiatives. Students created
              innovative social business proposals targeting issues ranging from
              educational inequality to sustainable resource management,
              reflecting their deepened awareness of interconnected global
              challenges. The success at IIT Bombay reinforces RealLives'
              effectiveness in transforming academic learning into actionable
              changemaking capabilities across diverse cultural and educational
              contexts.
            </p>
          </span>
        </div>
      </div>

      <div className={Styles.span_imapct_colume}>
        <p className={Styles.participants_title_text}>Skills Developed</p>

        <div className={Styles.wapper_show_btn}>
          <button className={Styles.color_btn_font}>
            21’st Century Skills
          </button>
          <button
            className={`${Styles.color_btn_font} ${Styles.empathy_btn_color}`}
          >
            Business Acumen
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

export default IIT_Bombay;
