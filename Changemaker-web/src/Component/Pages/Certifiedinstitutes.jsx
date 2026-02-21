import Styles from "./Certifiedinstitutes.module.css";
import Certifideimage from "../../assets/Home-image/Changemaker-Foundation-logo.svg";
// import orchid_school_banner from "../../assets/Home-image/orchid-background-img-2.jpeg.png";
import chnagemakerstudent from "../../assets/Home-image/changemaker_students 1.svg";
import goal1 from "../../assets/Home-image/E-WEB-Goal-01.svg";
import goal2 from "../../assets/Home-image/E-WEB-Goal-02.svg";
import goal3 from "../../assets/Home-image/E-WEB-Goal-04.svg";
import sustinablegoal from "../../assets/Home-image/Sustinable-goal-img.svg";
import national_image from "../../assets/Home-image/National-education.svg";
import orchid_1 from "../../assets/Home-image/orchid-1.jpeg";
// import orchid_2 from "../../assets/Home-image/orchid-2.jpeg";
// import orchid_3 from "../../assets/Home-image/orchid-3.jpeg";
// import orchid_4 from "../../assets/Home-image/orchid-4.jpg";
// import orchid_5 from "../../assets/Home-image/orchid-5.png";
import orchid_6 from "../../assets/Home-image/orchid-6.jpg";
import quotes from "../../assets/Home-image/quote-svg.svg";
import orchid_school_logo from "../../assets/Home-image/orchid-reallives-logo.svg";
import logowhite from "../../assets/logo-white.svg";

const Certifiedinstitutes = ({ theme, settheme }) => {
  let workshop = [
    {
      id: 1,
      img:"https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-5_kwmesy.png",
    },

    {
      id: 2,
      img:"https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-2_hgvd1d.jpg",
    },

    {
      id: 3,
      img: "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653480/orchid-3_zmamzk.jpg",
    },

    {
      id: 4,
      img:"https://res.cloudinary.com/dexw6sglh/image/upload/v1771653466/orchid-4_tnp54i.jpg",
    },

    {
      id: 5,
      img:"https://res.cloudinary.com/dexw6sglh/image/upload/v1771653468/orchid-1_ipbgc7.jpg",
    },

    {
      id: 6,
      img:"https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/orchid-6_filvzp.jpg",
    },
  ];

  return (
    <div className={`${Styles.Maincontainercertifide} ${Styles[theme]}`}>
      <div className={Styles.rallives_foundation_tab_box}>
        <img
          loading="eager"
          decoding="async"
          src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-background-img-2.jpeg_off002.png"
          alt="Changemaker Index image"
        />

        <div className={Styles.inner_content_tab}>
          <h1 className={Styles.title_of_foundation}>
            RealLives Foundation is proud to certify <br />
            The Orchid School Pune as a ChangeMaker School
          </h1>
        </div>

        <div className={Styles.logo_foundation_box}>
          <img src={orchid_school_logo} alt="" />
        </div>
      </div>

      {/* <div className={Styles.inner_content_first}>
        <div className={Styles.child_inner_content}>
          <div className={Styles.grid_class}>
            <div className={Styles.logo_foundation_box}>
              <img src={Certifideimage} alt="" />
            </div>

            <h1 className={Styles.title_of_foundation}>
              RealLives Foundation is proud to certify <br />
              The Orchid School Pune as a ChangeMaker School
            </h1>
          </div>
        </div>
      </div> */}

      <div className={`${Styles.dashboard_content_box} ${Styles[theme]}`}>
        <div className={Styles.changemaker_dashboard_title_d}>
          <h2 className={Styles.certifide_institutes_t_dashboard}>
            Certified Institute Dashboard
          </h2>
          <p className={Styles.certifide_institutes_description}>
            This is where your certified institute content goes.
          </p>
        </div>

        <div className={`${Styles.wrapper_all_data_cards} ${Styles[theme]}`}>
          <div className={Styles.left_side_content_i_dashboard}>
            <div className={Styles.left_side_content_inner_top}>
              <div className={Styles.top_cards_dashboard}>
                <p className={Styles.title_cards_dashboard_in}>
                  Overall ChangeMaker Score
                </p>
                <p className={Styles.title_cards_description_in}>
                  A composite score reflecting student empathy and action
                  orientation.
                </p>
                <div className={Styles.number_box_container}>
                  <p className={Styles.number_title_font}>
                    81<span className={Styles.second_number_title}>/100</span>
                  </p>
                </div>
              </div>

              <div className={Styles.top_cards_dashboard}>
                <p className={Styles.title_cards_dashboard_in}>
                  Number of Certified Students
                </p>
                <p className={Styles.title_cards_description_in}>
                  Students who completed the ChangeMaker Workshop and showed
                  applied learning.
                </p>
                <div className={Styles.number_box_container}>
                  <p className={Styles.number_title_font}>
                    66
                    <span className={Styles.second_number_title}>Student</span>
                  </p>
                </div>
              </div>

              <div className={Styles.right_top_content_i}>
                <div className={Styles.image_student_changemaker}>
                  <img src={logowhite} alt="" />
                </div>

                <div class={Styles.student_description_changemaker}>
                  <p class={Styles.orchid_text_title}>
                    Driven by RealLives Simulation
                  </p>

                  <p class={Styles.orchid_text_bottom}>
                    The Orchid School Pune is a RealLives certified ChangeMaker
                    School
                  </p>
                </div>
              </div>
            </div>

            <div className={Styles.new_bottom_container}>
              <div className={Styles.left_side_content_inner}>
                <div className={Styles.title_bottom_left_container}>
                  <p className={Styles.sdg_title_first}>
                    SDG’s addressed through the program
                  </p>
                  <p className={Styles.sdg_description_title}>
                    3 SDG’s impacted through student-led projects and
                    simulations
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
                  <img src={national_image} alt=""></img>
                </div>

                <p className={Styles.notional_education_text}>
                  The Orchid School, Pune meets NEP 2020 <br />
                  experiential and competency-based learning goals through
                  RealLives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${Styles.workshop_still_container} ${Styles[theme]}`}>
        <div className={Styles.button_container_workshop_still}>
          <button className={Styles.workshop_still_btn}>
            Workshop Pictures
          </button>
        </div>

        <div className={Styles.foundation_description_box}>
          <p className={Styles.foundation_description_text}>
            After the successful completion of the Changemaker Program at The
            Orchid School, Pune, RealLives is proud to certify the school as an
            official Changemaker School. This year, the program engaged 75
            students, resulting in 10 unique social business pitches and
            movements, along with 75 individual Changemaker Reports showca`sing
            thoughtful, impact-driven ideas.
          </p>
          <p className={Styles.foundation_description_text}>
            This achievement reflects the school's commitment to nurturing
            leadership, empathy, and social responsibility in young minds.
          </p>
        </div>

        <div className={Styles.container_card_colume}>
          {workshop.map((datawork, idx) => (
            <div key={idx} className={Styles.card_data_add}>
              <img
                loading="lazy"
                decoding="async"
                className={Styles.image_fit}
                src={datawork.img}
                alt="Changemaker Index image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`${Styles.student_impact_container} ${Styles[theme]}`}>
        <div className={Styles.button_container_workshop_still}>
          <button className={Styles.workshop_still_btn}>Words of Praise</button>
        </div>

        <div className={Styles.student_impact_cards_container}>
          <div className={Styles.inner_data_impact}>
            <div className={Styles.quotes_container}>
              <img src={quotes} alt="" />
            </div>

            <div className={Styles.inner_data_description}>
              <p>
                I used to think global problems were too big for students like
                us. Experiencing life through the SDGs helped me understand
                people’s struggles and showed me that even small business ideas
                can create real change
              </p>
            </div>

            <div className={Styles.grade_student_detail}>
              <p>— Grade 11 Student</p>
            </div>
          </div>

          <div className={Styles.inner_data_impact}>
            <div className={Styles.quotes_container}>
              <img src={quotes} alt="" />
            </div>

            <div className={Styles.inner_data_description}>
              <p>
                Living a life connected to the SDGs helped me feel empathy, not
                just learn facts. It made our social business idea more
                meaningful because we designed it for real people, not imaginary
                problems.
              </p>
            </div>

            <div className={Styles.grade_student_detail}>
              <p>— Grade 11 Student</p>
            </div>
          </div>

          <div className={Styles.inner_data_impact}>
            <div className={Styles.quotes_container}>
              <img src={quotes} alt="" />
            </div>

            <div className={Styles.inner_data_description}>
              <p>
                This experience made me realize that empathy is the first step
                to changemaking. Understanding global challenges helped our team
                build a business idea that focuses on impact, not just profit.
              </p>
            </div>

            <div className={Styles.grade_student_detail}>
              <p>— Grade 11 Student</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${Styles.changemaker_certificate_container} ${Styles[theme]}`}
      >
        <p className={Styles.changemaker_text_font}>
          ChangeMaker Certificate Awarded to Students
        </p>

        <div className={Styles.changemaker_certificate}>
          <img
            loading="lazy"
            decoding="async"
            src="https://reallivesfrontend.s3.us-east-1.amazonaws.com/certificate.svg"
            alt="Changemaker Index image"
          />
        </div>
      </div>
    </div>
  );
};

export default Certifiedinstitutes;
