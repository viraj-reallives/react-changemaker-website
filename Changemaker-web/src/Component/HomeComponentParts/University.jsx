import Styles from "../HomeComponentParts/University.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
// import second_slide_1 from "../../assets/Home-image/school-1-image-slider.png";
// import second_slide_2 from "../../assets/Home-image/school-2-image-slider.png";
// import second_slide_3 from "../../assets/Home-image/school-3-image-slider.png";
import first_logo_slide from "../../assets/Home-image/first-logo-tab.svg";
import sdg_logo_1 from "../../assets/Home-image/E-WEB-Goal-01.svg";
import sdg_logo_2 from "../../assets/Home-image/E-WEB-Goal-02.svg";
import sdg_logo_3 from "../../assets/Home-image/E-WEB-Goal-04.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const University = ({ theme }) => {
  const goToExternal = () => {
    window.location.href =
      "https://reallivesworld.com/reallives-website-main/license.html";
  };

  return (
    <>
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
            ETH Zurich Workshop
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
                src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653466/school-1-image-slider_bsn9za.png"
                className={Styles.slider_img}
                alt="slide 1"
              />
            </SwiperSlide>

            <SwiperSlide className={Styles.swiperSlide}>
              <img
                src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653481/school-2-image-slider_opj1vb.png"
                className={Styles.slider_img}
                alt="slide 2"
              />
            </SwiperSlide>

            <SwiperSlide className={Styles.swiperSlide}>
              <img
                src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653475/school-3-image-slider_troncd.png"
                className={Styles.slider_img}
                alt="slide 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={Styles.content_tab_container_imapct}>
          <div className={Styles.container_logo_box_impact}>
            <img src={first_logo_slide} alt="" />
          </div>
        </div>

        <div className={Styles.wrapper_professior_data}>
          <span className={Styles.span_imapct_colume_2}>
            <p className={Styles.university_text_title}>
              ETH University Zurich, Switzerland
            </p>
            <p className={Styles.participants_title_text}>
              Department - Institute of Molecular Systems Biology
            </p>
          </span>

          <span className={Styles.flex_align_start}>
            <p className={Styles.participants_title_text}>
              In collaboration with:
            </p>
            <p className={Styles.university_text_title}>
              Prof. Dr. Ernst Hafen
            </p>
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
                To develop cross-cultural empathy and global awareness among
                students from high-income countries by enabling them to
                experience life circumstances in developing nations through
                RealLives simulation. The program aimed to bridge the
                perspective gap between students from privileged backgrounds and
                global development challenges while fostering meaningful
                intercultural dialogue and understanding of the United Nations'
                Sustainable Development Goals through experiential learning and
                structured peer-to-peer exchanges.
              </p>
            </span>
          </div>

          <div className={Styles.impact_left_data_box}>
            <p className={Styles.student_testimonials_title}>
              Program Overview
            </p>

            <span class={Styles.text_data_content_1}>
              <p>
                RealLives Foundation partnered with ETH Zurich to conduct an
                innovative cross-cultural empathy program that provided students
                with deep insights into the United Nations' seventeen
                Sustainable Development Goals (SDGs). By engaging with the
                text-based RealLives simulation, Swiss students learned to
                empathize with people from other parts of the world and gained
                new perspectives on global development challenges. The program
                facilitated hands-on experience in discussing SDGs and their
                real-world implications through direct collaboration with
                students from developing countries, creating authentic
                intercultural learning experiences.
              </p>
            </span>
          </div>

          <div className={Styles.impact_left_data_box}>
            <p className={Styles.student_testimonials_title}>
              Implementation & Methodology
            </p>

            <span class={Styles.text_data_content_1}>
              <p>
                The program addressed a key challenge: students from high-income
                countries like Switzerland often show difficulties relating to
                global challenges addressed in the UN's Sustainable Development
                Goals. The RealLives simulation allowed students to experience
                life when born at random locations on earth, with each simulated
                life lasting between 30 to 45 minutes. During the purely
                text-based gameplay, students encountered real-world data from
                public databases about their assigned countries, learning about
                specific SDG challenges. They experienced life unfolding around
                them until age eight, when they could begin making independent
                decisions, concluding each simulation by writing reflective
                obituaries about their lived experiences and life choices.
              </p>
            </span>
          </div>

          <div className={Styles.impact_left_data_box}>
            <p className={Styles.student_testimonials_title}>
              Cross-Cultural Exchange & Impact
            </p>

            <span class={Styles.text_data_content_1}>
              <p>
                The program featured a unique partnership with FLAME University
                in Pune, India, established through Parag Mankeekar's
                connection. Twenty ETH students experienced life by being born
                in Pune, India, while twenty Indian students lived simulated
                lives in Zurich, Switzerland. After completing three lives in
                their respective assigned cities, the program arranged
                one-on-one Skype conferences between Swiss and Indian students
                to share experiences and insights. The success of this
                perspective transformation was rigorously assessed through
                recorded interviews with Swiss students, demonstrating
                measurable changes in their understanding of global development
                challenges and cross-cultural empathy development.
              </p>
            </span>
          </div>
        </div>

        <div className={Styles.span_imapct_colume}>
          <p className={Styles.participants_title_text}>Skills Developed</p>

          <div className={Styles.wapper_show_btn}>
            <button className={Styles.color_btn_font}>Teamwork</button>
            <button
              className={`${Styles.color_btn_font} ${Styles.empathy_btn_color}`}
            >
              Integrity and Work Ethics
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
    </>
  );
};

export default University;
