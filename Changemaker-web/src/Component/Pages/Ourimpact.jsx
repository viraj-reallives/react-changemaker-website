import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link, Outlet } from "react-router-dom";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import Styles from "./Ourimpact.module.css";

// import worldmap from "../../assets/Home-image/world-map.svg";
// import finalbusiness from "../../assets/Home-image/Final Business with Purpose 1.png";
// import first_slide_1 from "../../assets/Home-image/second-workshop.png";
// import first_slide_2 from "../../assets/Home-image/second-workshop-2.png";
// import first_slide_3 from "../../assets/Home-image/second-workshop-3.png";
// import first_slide_4 from "../../assets/Home-image/second-workshop-4.png";
// import second_slide_1 from "../../assets/Home-image/school-1-image-slider.png";
// import second_slide_2 from "../../assets/Home-image/school-2-image-slider.png";
// import second_slide_3 from "../../assets/Home-image/school-3-image-slider.png";
// import therd_slide_0 from "../../assets/Home-image/3-rd-workshop-first-image.jpeg";
// import therd_slide_1 from "../../assets/Home-image/3-rd-workshop-image.png";
// import therd_slide_2 from "../../assets/Home-image/3-rd-workshop-2.png";
// import therd_slide_3 from "../../assets/Home-image/3-rd-workshop-3.png";
// import therd_slide_4 from "../../assets/Home-image/3-rd-workshop-4.png";
// import fourth_slide_1 from "../../assets/Home-image/fourth_workshop-1-min.jpg";
// import fourth_slide_2 from "../../assets/Home-image/fourth_workshop-2-min.jpg";
// import fourth_slide_3 from "../../assets/Home-image/fourth_workshop-3-min.jpg";

import { FaArrowRight } from "react-icons/fa6";

const Ourimpact = ({ theme }) => {
  const become_change_btn = () => {
    window.location.href =
      "https://reallivesworld.com/reallives-website-main/license.html";
  };

  const impact_home = [
  {
      id: 1,
      card_title: "ETH Zurich Workshop",
      card_date: "27 / 06 / 2018",
      imgURL:"https://res.cloudinary.com/dexw6sglh/image/upload/v1771653482/Final_Business_with_Purpose_1_qhhlwu.png",
      university_text: "ETH University Zurich, Switzerland",
      particepent_title: "Department - Institute of Molecular Systems Biology",
      collaboration_text: "In collaboration with:",
      name_card: "Prof. Dr. Ernst Hafen",
      number_title: 120,
      skill_devloped: "Skills Developed",
      teamwork_title: "Teamwork",
      intergrity_title: "Integrity and Work Ethics",
      teamwork_bg: "#f9c1a5",
      intergrity_bg: "#caecf1",
      link: "/our-impact/eth-university", 
    },
    {
      id: 2,
      card_title: "Navamindradhiraj University Workshop",
      card_date: "20 / 09 / 2025",
      imgURL:"https://res.cloudinary.com/dexw6sglh/image/upload/v1771653464/second-workshop_vmxhhq.png",
      university_text: "Navamindradhiraj University, Bangkok",
      particepent_title: "Department - General Education",
      collaboration_text: "In collaboration with:",
      name_card: "Prof. Krittanan Pensirisomboon",
      number_title: 150,
      skill_devloped: "Skills Developed",
      teamwork_title: "21’st Century Skills",
      intergrity_title: "Business Acumen",
      teamwork_bg: "#d4e8eb",
      intergrity_bg: "#dff6c2",
      link: "/our-impact/navamindradhiraj-university", 
    },
    {
      id: 3,
      card_title: "KyungHee University SDG Workshop",
      card_date: "29 / 09 / 2025",
      imgURL:"https://res.cloudinary.com/dexw6sglh/image/upload/v1771653472/3-rd-workshop-first-image_y34mx3.jpg",
      university_text: "Kyunghee University, Korea",
      particepent_title: "Department - Social Sciences",
      collaboration_text: "In collaboration with:",
      name_card: "Prof. Dr. Utak Chang",
      number_title: 30,
      skill_devloped: "Skills Developed",
      teamwork_title: "SDG Awareness",
      intergrity_title: "ChangeMaking",
      teamwork_bg: "#f7b4b4",
      intergrity_bg: "#ffef9f ",
      Used_Tools: "Empathy Canvas",
      link: "/our-impact/kyunghee-university", 
    },
    {
      id: 4,
      card_title: "IIT Bombay Exploring SDG 1 through Empathy Workshop",
      card_date: "07 / 11 / 2024",
      imgURL:"https://res.cloudinary.com/dexw6sglh/image/upload/v1771653467/fourth_workshop-1-min_j7e4y0.jpg",
      university_text: "IIT Bombay, India",
      particepent_title: "Department - IDC School of Design",
      collaboration_text: "In collaboration with:",
      name_card: "India HCI 2024",
      number_title: 30,
      skill_devloped: "Skills Developed",
      teamwork_title: "SDG Awareness",
      intergrity_title: "Social Entrepreneurship",
      teamwork_bg: "#f7b4b4 ",
      intergrity_bg: "#c4c1ff",
      link: "/our-impact/iit-bombay", 
    },
  ];

  return (
    <div className={`${Styles.ourimpactmaincontainer} ${Styles[theme]}`}>
      
      {/* Slider Section */}

      <div className={Styles.slider_componet}>
        <div className={Styles.slider_wrapper}>
          <div className={Styles.top_slider_imapct_container}>
            <div className={Styles.individual_slide_inner}>
              <p className={Styles.impact_text_slide}>Impact</p>
              <p className={Styles.impact_description_slide}>
                of RealLives Foundation around the world
              </p>
            </div>

            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop={true}
              loopedSlides={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
            >
              <SwiperSlide>
                <img loading="eager" decoding="async"  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653482/Final_Business_with_Purpose_1_qhhlwu.png" className={Styles.slider_img} alt="Changemaker Index image" />
              </SwiperSlide>

              <SwiperSlide>
                <img loading="eager" decoding="async" src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653474/second-workshop-2_ikloth.png" className={Styles.slider_img} alt="Changemaker Index image"/>
              </SwiperSlide>

              <SwiperSlide>
                <img loading="eager" decoding="async" src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653474/second-workshop-3_ycah0h.png" className={Styles.slider_img} alt="Changemaker Index image"/>
              </SwiperSlide>

              <SwiperSlide>
                <img loading="eager" decoding="async" src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653472/second-workshop-4_ew4261.png" className={Styles.slider_img} alt="Changemaker Index image" />
              </SwiperSlide>
            </Swiper>

            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop={true}
              loopedSlides={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
            >
              <SwiperSlide>
                <img  loading="eager" decoding="async"  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653466/school-1-image-slider_bsn9za.png" className={Styles.slider_img} alt="Changemaker Index image" />
              </SwiperSlide>

              <SwiperSlide>
                <img loading="eager" decoding="async"  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653481/school-2-image-slider_opj1vb.png" className={Styles.slider_img}  alt="Changemaker Index image"/>
              </SwiperSlide>

               <SwiperSlide>
                <img loading="eager" decoding="async" src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/orchid-6_filvzp.jpg" className={Styles.slider_img} alt="Changemaker Index image"/>
              </SwiperSlide>

              <SwiperSlide>
                <img loading="eager" decoding="async" src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653475/school-3-image-slider_troncd.png" className={Styles.slider_img} alt="Changemaker Index image"/>
              </SwiperSlide>
            </Swiper>
            
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop={true}
              loopedSlides={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
            >
              <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653479/3-rd-workshop-image_jwd7ay.png" className={Styles.slider_img} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/3-rd-workshop-2_ktwj7o.png" className={Styles.slider_img} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-5_kwmesy.png" className={Styles.slider_img} />
              </SwiperSlide>

              {/* <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653464/3-rd-workshop-3_wegcf0.png" className={Styles.slider_img} />
              </SwiperSlide> */}

              <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653468/3-rd-workshop-4_ea6we5.png" className={Styles.slider_img} />
              </SwiperSlide>

            </Swiper>

          </div>

          <div className={Styles.bottom_impact_container}>

            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop={true}
              loopedSlides={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
            >

                 <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-background-img-2.jpeg_off002.png" className={Styles.slider_img} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653467/fourth_workshop-1-min_j7e4y0.jpg" className={Styles.slider_img} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653471/fourth_workshop-2-min_umblqv.jpg" className={Styles.slider_img} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653470/fourth_workshop-3-min_dqej4n.jpg" className={Styles.slider_img} />
              </SwiperSlide>

            </Swiper>

            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop={true}
              loopedSlides={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
            >

                <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-2_hgvd1d.jpg" className={Styles.slider_img} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653466/school-1-image-slider_bsn9za.png" className={Styles.slider_img} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/3-rd-workshop-2_ktwj7o.png" className={Styles.slider_img} />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653464/3-rd-workshop-3_wegcf0.png" className={Styles.slider_img} />
              </SwiperSlide>

            </Swiper>
            
          </div>
        </div>
      </div>

      {/* Global Impact Section */}

      <div className={Styles.our_global_impact_component}>
        <div className={Styles.global_title_description_container}>
          <p className={Styles.first_title_global}>Our Global Impact Story</p>
          <p className={Styles.global_second_description}>
            RealLives has delivered six workshops across six countries,
            partnering with leading universities to bring global, experiential
            learning into classrooms. Students engage in real-world scenarios,
            make life-shaping decisions, explore global disparities, and build
            empathy for diverse human experiences. By integrating RealLives,
            institutions enrich courses in sociology, economics, and
            international relations while strengthening students’ critical
            thinking and problem-solving skills. Students report deeper
            understanding of global issues and a stronger connection to the
            world beyond their own borders.
          </p>
        </div>
        <div className={Styles.global_image_section}>

          <img
            className={Styles.impact_img_containe}
            src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653468/world-map_nnisio.svg"
            alt="World Map"
          />
        </div>

      </div>

      {/* Impact Cards Section */}

      <div className={Styles.our_card_section_wrapper}>
        <p className={Styles.workshop_text}>Impact Home</p>

        {impact_home.map((impactdata, idx) => (
          <React.Fragment key={idx}>
            {/* --- NORMAL CARD SECTION --- */}
            <div className={Styles.card_box_impact}>
              <span className={Styles.span_imapct_colume}>
                <p className={Styles.cards_title_imapct_text}>
                  {impactdata.card_title}
                </p>
                <p className={Styles.date_of_start_title}>
                  {impactdata.card_date}
                </p>
              </span>

              <div className={Styles.bottom_card_imapct_section}>
                <div className={Styles.impact_image_card}>
                  <img src={impactdata.imgURL} alt={impactdata.card_title} />
                </div>

                <div className={Styles.impact_card_data}>

                  <span className={Styles.span_imapct_colume}>

                    <p className={Styles.university_text_title}>
                      {impactdata.university_text}
                    </p>
                    <p className={Styles.participants_title_text}>
                      {impactdata.particepent_title}
                    </p>

                  </span>
                  

                  <span className={Styles.flex_align_start}>
                    <p className={Styles.participants_title_text}>
                      {impactdata.collaboration_text}
                    </p>
                    <p className={Styles.university_text_title}>
                      {impactdata.name_card}
                    </p>
                  </span>

                  <span className={Styles.flex_align_start}>
                    <p className={Styles.participants_title_text}>
                      Participants:
                    </p>
                    <p className={Styles.numbers_font}>
                      {impactdata.number_title}
                    </p>
                  </span>

                  {impactdata.Used_Tools && (
                    <p>
                      Used tool: <strong>{impactdata.Used_Tools}</strong>
                    </p>
                  )}

                  <span className={Styles.span_imapct_colume}>
                    <p className={Styles.participants_title_text}>
                      {impactdata.skill_devloped}
                    </p>
                  </span>

                  <div className={Styles.wapper_show_btn}>
                    <button
                      className={Styles.team_work_btn}
                      style={{ backgroundColor: impactdata.teamwork_bg }}
                    >
                      {impactdata.teamwork_title}
                    </button>

                    <button
                      className={Styles.integrity_work_btn}
                      style={{ backgroundColor: impactdata.intergrity_bg }}
                    >
                      {impactdata.intergrity_title}
                    </button>
                  </div>

                  <Link
                    to={impactdata.link}
                    className={Styles.text_decoration_none}
                  >
                    <button className={Styles.larne_more_btn}>
                      Learn more <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* --- MIDDLE SECTION (After 2nd Card) --- */}

            {idx === 1 && (
              <div className={Styles.wrapper_descision_skills_2}>
                <div className={Styles.decision_skills_container}>
                  <p className={Styles.global_student_title}>
                    Every choice you make shapes your growth. Track your skills,
                    explore your potential, and see how you can make a
                    real-world impact
                  </p>

                  <button
                    className={Styles.larne_more_btn}
                    onClick={become_change_btn}
                  >
                    Begin Your ChangeMaking Journey <FaArrowRight />
                  </button>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className={Styles.wrapper_descision_skills}>
        <div className={Styles.decision_skills_container}>
          <p className={Styles.global_student_title}>
            Make decisions, grow skills, and see your impact come to life.
          </p>

          <button className={Styles.larne_more_btn} onClick={become_change_btn}>
            Begin Your ChangeMaking Journey <FaArrowRight />
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Ourimpact;
