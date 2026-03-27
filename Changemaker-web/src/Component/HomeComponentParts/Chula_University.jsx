import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import fourth_slide_logo from "../../assets/Home-image/iit_bom_rl.svg";
import sdg_logo_1 from "../../assets/Home-image/E-WEB-Goal-01.svg";

import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Styles from "../../Component/HomeComponentParts/Chula_University.module.css";

const Chula_University = ({ theme }) => {
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
          Chulalongkorn University, Thailand
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
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/fifth-work-shop-4.png"
              className={Styles.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>


          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/fifth-work-shop-2.png"
              className={Styles.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/fifth-work-shop-3.png"
              className={Styles.slider_img}
              alt="slide 1"
            />
          </SwiperSlide>

          <SwiperSlide className={Styles.swiperSlide}>
            <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/fifth-work-shop-5.png"
              className={Styles.slider_img}
              alt="slide 1"
            />

              <img
              src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/fifth-work-shop.png"
              className={Styles.slider_img}
              alt="slide 2"
            />

          </SwiperSlide>
        </Swiper>
      </div>

      <div className={Styles.content_tab_container_imapct}>
        <div className={Styles.container_logo_box_impact}>
          <img src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/chula-rl.svg" alt="" />
        </div>
      </div>

      <div className={Styles.wrapper_professior_data}>
        <span className={Styles.span_imapct_colume_2}>
          <p className={Styles.university_text_title}>
            Chulalongkorn University, Thailand
          </p>
          <p className={Styles.participants_title_text}>
           Department - Faculty of Education / BAScii Program
          </p>
        </span>

        <span className={Styles.flex_align_start}>
          <p className={Styles.participants_title_text}>
            In collaboration with:
          </p>
          <p className={Styles.university_text_title}>Dr. Sawaros Thanapornsangsuth</p>
        </span>
      </div>

      {/* <div className={Styles.sdg_container_imapct_tab}>
        <p className={Styles.student_testimonials_title}>
          SDG’s Alligned with this workshop
        </p>

        <div className={Styles.grid_sdg_card_imapct}>
          <div className={Styles.sdg_imapct}>
            <img src={sdg_logo_1} alt="" />
          </div>
        </div>
      </div> */}

      <div className={Styles.first_tab_style}>
        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>Objective</p>

          <span class={Styles.text_data_content_1}>
            <p>
              To develop empathy and global awareness among university students
              by immersing them in real-life poverty scenarios through
              simulation-based learning. The workshop aimed to deepen
              understanding of SDG 1 (No Poverty), enabling students to
              experience systemic inequalities, reflect on privilege, and build
              critical thinking and changemaking skills through experiential
              learning and structured reflection.
            </p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>Program Overview</p>

          <span class={Styles.text_data_content_1}>
            <p>
              RealLives conducted an immersive SDG-focused workshop at
              Chulalongkorn University (Thailand) for students in the BAScii
              program. The session centered on SDG 1: No Poverty, where students
              simulated lives in poverty-affected countries such as Burundi,
              experiencing challenges like limited access to healthcare,
              education, and income. The workshop combined simulation gameplay,
              guided reflection, and collaborative discussion to help students
              understand poverty beyond statistics. By integrating real-world
              data and AI-driven life scenarios, the program enabled students to
              connect emotionally with global issues while developing a deeper
              awareness of inequality and global citizenship.
            </p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            Implementation & Methodology
          </p>

          <span class={Styles.text_data_content_1}>
            <p>
              The workshop followed a structured experiential learning approach
              combining simulation, reflection, and collaborative analysis. It
              began with an introduction to SDG 1: No Poverty and the global
              context of inequality, followed by an immersive RealLives
              simulation where students experienced full life journeys shaped by
              real-world data. Participants made critical decisions around
              education, healthcare, and livelihood while navigating systemic
              constraints faced in poverty-affected regions. This was followed
              by a reflective exercise in which students wrote personal letters
              from the perspective of their simulated character, fostering
              emotional connection and deeper empathy. The session then
              transitioned into a group-based Empathy Canvas activity, where
              students analyzed their character’s experiences across dimensions
              such as environment, behavior, influences, and emotions. The
              workshop concluded with group presentations and a facilitated
              discussion linking individual experiences to broader global
              challenges and the role of students as changemakers. 
            </p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>Outcomes & Impact</p>

          <span class={Styles.text_data_content_1}>
            <p>
              The workshop resulted in a significant shift in students’
              understanding of global poverty, transforming it from an abstract
              concept into a deeply personal and emotional experience.
              Participants demonstrated heightened empathy, with many expressing
              strong emotional reactions to the difficult life choices
              encountered during the simulation. The gamified and interactive
              nature of the platform drove high engagement, enabling students to
              connect more meaningfully with global issues compared to
              traditional learning methods. Students also developed a stronger
              awareness of their own privilege and the structural inequalities
              that shape life outcomes across different regions. The experience
              encouraged critical thinking and reflection, with many
              participants recognizing their potential role as changemakers in
              addressing global challenges. While students expressed a desire
              for more time to explore the simulation further, the overall
              impact highlighted the effectiveness of experiential, data-driven
              learning in fostering global citizenship, empathy, and
              action-oriented mindsets.
            </p>
          </span>
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            A Note from the Professor
          </p>

          <video
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
            playsInline
            controls
            className={Styles.image_cover_class}
          >
            <source src="https://d2jn82ki4w4ftn.cloudfront.net/Prof-Sawaros-Chula.mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <span class={Styles.text_data_content_1}>
            <p>
              The workshop resulted in a significant shift in students’ understanding of global poverty, transforming it from an abstract concept into a deeply personal and emotional experience. Participants demonstrated heightened empathy, with many expressing strong emotional reactions to the difficult life choices encountered during the simulation. The gamified and interactive nature of the platform drove high engagement, enabling students to connect more meaningfully with global issues compared to traditional learning methods.
             Students also developed a stronger awareness of their own privilege and the structural inequalities that shape life outcomes across different regions. The experience encouraged critical thinking and reflection, with many participants recognizing their potential role as changemakers in addressing global challenges. While students expressed a desire for more time to explore the simulation further, the overall impact highlighted the effectiveness of experiential, data-driven learning in fostering global citizenship, empathy, and action-oriented mindsets.
            </p>
          </span>
           */}
        </div>

        <div className={Styles.impact_left_data_box}>
          <p className={Styles.student_testimonials_title}>
            Empathy Canvas Insights & Reflections
          </p>

          <div class={Styles.goal_img_chula }>
                  <img src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/first-goal-img-1.png" alt=""/>
          </div>

            

        </div>


         <div className={Styles.impact_left_data_box}>
         
          <div class={Styles.goal_img_chula }>
                  <img src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/second-goal-img-2.png" alt=""/>
          </div>
          </div>


          <div className={Styles.impact_left_data_box}>
         
          <div class={Styles.goal_img_chula }>
                  <img src="https://d2jn82ki4w4ftn.cloudfront.net/changemaker-website/chula-workshop/therd-goal-img-3.png" alt=""/>
          </div>
          </div>


      </div>

      <div className={Styles.span_imapct_colume}>
        <p className={Styles.participants_title_text}>Skills Developed</p>

        <div className={Styles.wapper_show_btn}>

          <button className={Styles.color_btn_font}>
            Empathy
          </button>

          <button
            className={`${Styles.color_btn_font} ${Styles.empathy_btn_color}`}
          >
            SDG Awareness
          </button>

           <button
            className={`${Styles.color_btn_font} ${Styles.critical_thinking}`}
          >
           Critical Thinking
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

export default Chula_University;
