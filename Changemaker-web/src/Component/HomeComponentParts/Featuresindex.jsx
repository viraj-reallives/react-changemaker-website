import Styels from "../HomeComponentParts/Featuresindex.module.css";
import waterflow_image from "../../assets/Home-image/Water-flow-image.svg";
import firstsection from "../../assets/Home-image/first-section-image.png";
import actionableReport from "../../assets/Home-image/Actionable Reports.png";
import AiGuidance from "../../assets/Home-image/AI Guidance.png";
import benifitimage from "../../assets/Home-image/background-benifits-image.svg";
import decisionstracked from "../../assets/Home-image/Decisions Tracked.png";
import insightsdeliverd from "../../assets/Home-image/Insights Delivered.png";
import personalgrowth from "../../assets/Home-image/Personal Growth.png";
import studentsimulate from "../../assets/Home-image/Student-Simulate.png";
import finalbusiness from "../../assets/Home-image/Final Business with Purpose 1.png";
import fourth_slide_1 from "../../assets/Home-image/fourth_workshop-1-min.jpg";
import first_slide_3 from "../../assets/Home-image/second-workshop-3.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Featuresindex = ({ theme, settheme }) => {
  const become_change_btn = () => {
    window.location.href =
      "https://reallivesworld.com/reallives-website-main/license.html";
  };

  let impactcarddata = [
    {
      id: 1,
      image: finalbusiness,
      title: " ETH Zurich, Switzerland",
      description: `Students explored global life scenarios in the RealLives ChangeMaking Workshop, building empathy, ethicalleadership, and sustainable problem-solving skills.`,
    },

    {
      id: 2,
      image: fourth_slide_1,
      title: "IIT Bombay, India",
      description: `Through simulation-based experiences, students connected technology, society, and values, learning how empathy-driven choices can drive social impact.`,
    },

    {
      id: 3,
      image: first_slide_3,
      title: " Navamindradhiraj University, Thailand ",
      description: ` Students participated in an immersive ChangeMaker  program, gaining insights into social responsibility, ethical decision-making, and the impact of choices on communities.`,
    },
  ];

  let featuresdata = [
    {
      id: 1,
      image: studentsimulate,
      title: "Students Simulate",
      description: `Students step into diverse real-world lives, experiencing challenges, opportunities, 
     and cultural contexts firsthand. They don’t just learn about the world—they live it through 
     immersive simulation.`,
    },

    {
      id: 2,
      image: decisionstracked,
      title: "Decisions Tracked",
      description: `Every choice—small or big—is recorded and analyzed.
      This gives students a clear view of how decisions shape outcomes,
       helping them understand responsibility, ethics, and long-term impact.`,
    },

    {
      id: 3,
      image: insightsdeliverd,
      title: "Insights Delivered",
      description: `The system automatically transforms student choices into rich insights,
       highlighting thinking patterns, strengths, and areas for growth. Educators get an 
       instant window into each learner’s mindset.`,
    },

    {
      id: 4,
      image: AiGuidance,
      title: "AI Guidance",
      description: `Built-in AI coaches students as they play, providing nudges, reflections,
       and tailored suggestions. It supports deeper self-awareness, critical thinking,
        and intentional decision-making`,
    },

    {
      id: 5,
      image: actionableReport,
      title: "Actionable Reports",
      description: `Easy-to-understand dashboards summarise all learning outcomes and
       competencies. Educators receive detailed, ready-to-use reports they can use for
        feedback, assessment, and personalised mentoring.`,
    },

    {
      id: 6,
      image: personalgrowth,
      title: "Personal Growth",
      description: `Students discover who they are as decision-makers.They build resilience,
       empathy, global awareness, and confidence through repeated reflection and 
       experience-based learning.`,
    },
  ];

  return (
    <div className={`${Styels.feautures_main} ${Styels[theme]}`}>
      <div className={Styels.impact_section_container}>
        <p className={Styels.experience_text_reallives}>Our Impact</p>
        <p className={Styels.description_features_bottom}>
          Discover the global footprint of the RealLives Foundation through the
          workshops and <br />
          events we’ve hosted to inspire change.
        </p>

        <div className={Styels.inforamtion_card_container}>
          <div className={Styels.card_info_container}>
            {impactcarddata.map((ourimpactcard, idx) => (
              <div className={Styels.card_info_box}>
                <div className={Styels.university_image_box}>
                  <img
                    className={Styels.image_fit_cover}
                    src={ourimpactcard.image}
                    alt=""
                  />
                </div>

                <div className={Styels.content_data_text_box}>
                  <p className={Styels.title_university_name}>
                    {ourimpactcard.title}
                  </p>

                  <p className={Styels.description_university_text}>
                    {ourimpactcard.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Styels.btn_larne_more}>
          <button
            className={Styels.explore_workshop_btn}
            onClick={become_change_btn}
          >
            Explore Workshop Integration
          </button>

          <Link className={Styels.text_decoration_none} to="/our-impact">
            <button className={Styels.inner_btn}>
              Explore More Impact Stories <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>

      <div className={Styels.feautures_inner_main}>
        <div className={Styels.top_features_box}>
          <p className={Styels.reallives_changemaker_text}>
            RealLives ChangeMaker Index Features
          </p>
          <p className={Styels.description_changemake_text}>
            Discover how the ChangeMaker Index turns your life choices into
            insights, tracking growth, <br /> guiding decisions, and unlocking
            your potential as a global ChangeMaker.
          </p>
        </div>

        <div className={Styels.features_card_container}>
          {featuresdata.map((featuresdata) => (
            <div key={featuresdata.id} className={Styels.cards_features_box}>
              <div className={Styels.content_data_text_box}>
                <p className={Styels.features_text_card}>
                  {featuresdata.title}
                </p>

                <p className={Styels.features_description_text}>
                  {featuresdata.description}
                </p>
              </div>

              <img
                className={Styels.image_fit_cover}
                src={featuresdata.image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featuresindex;
