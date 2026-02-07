import React from "react";
import Style from "../HomeComponentParts/Benifits.module.css";
import benfitsimage from "../../assets/Home-image/background-benifits-image.svg";
import userduotone from "../../assets/Home-image/user-duotone.svg";
import targetduotone from "../../assets/Home-image/chalkboard-teacher-duotone 1.svg";
import userthreeduotone from "../../assets/Home-image/users-three-duotone 1.svg";
import arrowup from "../../assets/Home-image/arrow-up.svg";

const Benifites = ({ theme, settheme }) => {
  let carddatachangemaker = [
    {
      id: 1,
      title: "Empower Yourself to Grow Beyond Academics",
      description:
        "RealLives helps you go beyond achievements and test scores by making social, emotional, and ethical growth visible and measurable. Through immersive life simulations, you experience real-world situations that build empathy, resilience, and responsible decision-making, all key to thriving in life and work.",
      imageUrl: userduotone,
    },

    {
      id: 2,
      title: "Gain Deep Insights into Your Growth",
      description:
        "The ChangeMaker Index transforms every in-game choice into meaningful insights on your mindset and behavior. It helps you understand how you approach challenges, collaborate with others, and lead with purpose, supporting self-awareness and continuous personal development..",
      imageUrl: targetduotone,
    },

    {
      id: 3,
      title: "Build a Life of Reflection and Purpose",
      description:
        "By revealing the impact of your decisions, RealLives encourages you to think deeply, act responsibly, and grow consciously. It nurtures a global community of ChangeMakers, empathetic, confident individuals ready to lead with purpose and create positive change in the world.",
      imageUrl: userthreeduotone,
    },

    {
      id: 4,
      title: "Seamless Integration with Your Goals",
      description:
        "RealLives aligns effortlessly with personal growth journeys, professional 	development paths, and lifelong learning goals. You can track your progress 										across 18 ChangeMaker competencies, turning qualities like compassion, 										integrity, and adaptability into measurable growth milestones.",
      imageUrl: arrowup,
    },
  ];

  return (
    <div className={`${Style.Benfits_container} ${Style[theme]}`}>
      <img className={Style.image_width} src={benfitsimage} alt="" />

      <div className={Style.benifites_content_container}>
        <div className={Style.top_content_container}>
          <p className={`${Style.title_text} ${Style[theme]}`}>
            Benefits That Shape Your Future
          </p>
          <p className={`${Style.descritpion_text} ${Style[theme]}`}>
            RealLives helps you build the social, emotional, and ethical skills
            that matter most in life. Grow with confidence as you learn to
            navigate real-world challenges with purpose.
          </p>
        </div>

        <div className={Style.bottom_content_container}>
          {carddatachangemaker.map((elem, idx) => (
            <div
              key={idx}
              className={`${Style.changemaker_grid_cards} ${Style[theme]}`}
            >
              <div className={`${Style.head_changer_tag} ${Style[theme]}`}>
                <div className={Style.icon_card}>
                  <img
                    key={elem.id}
                    className={Style.image_width}
                    src={elem.imageUrl}
                    alt="img"
                  />
                </div>
                <p
                  className={`${Style.header_title_side_text} ${Style[theme]}`}
                >
                  {elem.title}
                </p>
              </div>

              <div className={Style.description_tag_changer}>
                <p
                  className={`${Style.bottom_data_benifit_description} ${Style[theme]}`}
                >
                  {elem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benifites;
