import Styles from "./Rcmiworks.module.css";
import competencies_image from "../../assets/Home-image/competencies-background-image.svg";
import chartpolar from "../../assets/Home-image/chart-polar-duotone 1.svg";
import key_icon from "../../assets/Home-image/key-duotone 2.svg";
import image_behind_rcmi from "../../assets/Home-image/atom-duotone 2.svg";
import image_reallives_index from "../../assets/Home-image/RealLives ChangeMaker Index-1.svg";
import image_reallives_index_2 from "../../assets/Home-image/RealLives ChangeMaker Index-2.svg";
import make_a_changemaker_image from "../../assets/Home-image/make-a-changemaker-journey.svg";
import graph_rcmi_image from "../../assets/Home-image/graph-rcmi-image.svg";
import Comptencies_image from "../../assets/Home-image/Comptencies-ss-image.svg";
import changemaker_journey from "../../assets/Home-image/changemaker-journey-image.svg";

const Rcmiworks = ({ theme }) => {

  const become_change_btn = () => {
    window.location.href =
      "https://reallivesworld.com/reallives-website-main/license.html";
  };

  let Sprout = [
    {
      id: 1,
      card_head: "Stage 1: Seed",
      card_title: '"Just beginning to explore your potential"',
      card_discription:
        "At the Seed stage, individuals are at the very beginning of their changemaking journey. They are discovering their interests, starting to understand their strengths, and beginning to develop foundational competencies.",
      bgColor: "#e6f1da",
    },

    {
      id: 2,
      card_head: "Stage 2: Sprout",
      card_title: '"Starting to develop foundational skills"',
      card_discription:
        "At the Sprout stage, individuals are actively developing their competencies and beginning to see growth in specific areas. They are building confidence and starting to take initiative.",
      bgColor: "#daeac8",
    },

    {
      id: 3,
      card_head: "Stage 3: Sapling",
      card_title: '"Growing stronger with a mix of strengths and growth areas"',
      card_discription:
        "At the Sapling stage, individuals have developed a solid foundation of competencies with clear strengths emerging. They are actively working on areas for improvement while leveraging their strengths.",
      bgColor: "#cde2b6",
    },

    {
      id: 4,
      card_head: "Stage 4: Plant",
      card_title: '"Well on your way, with a solid and balanced profile"',
      card_discription:
        "At the Plant stage, individuals are flourishing, branching out, and making their presence felt. Their work is creating visible change, and their connections are helping their impact spread further. This is the time to protect what they've built.",
      bgColor: "#c1dba3",
    },

    {
      id: 5,
      card_head: "Stage 5: Fruit",
      card_title: '"Thriving as a ChangeMaker, creating meaningful impact"',
      card_discription:
        "At the Fruit stage, individuals are at the pinnacle of their changemaking capacity. They are creating significant, sustained impact and inspiring others to do the same.",
      bgColor: "#a8cd7f",
    },
  ];

  return (
    <>
      <div className={`${Styles.rcmimaincontainer} ${Styles[theme]}`}>

        <div className={Styles.competencies_Style_image}>

          <img loading="eager" decoding="async" src={competencies_image} alt="Changemaker Index image" />
          
        </div>

        <div className={Styles.data_container_rcmi_main}>
          <div className={Styles.rcmi_data_left_bar}>
            <div className={Styles.tow_box_rcmi}>
              <div className={Styles.top_benfit_header}>
                <div className={Styles.icon_card}>
                  <img
                    className={Styles.image_fit_content}
                    src={chartpolar}
                    alt=""
                  />
                </div>

                <p className={Styles.header_title_side_text}>What is RCMI?</p>
              </div>
              <div
                className={`${Styles.bottom_data_benifit} ${Styles.flex_colume_what_rcmi}`}
              >
                <p className={Styles.rcmi_info_data_text}>
                  The RealLives ChangeMaker Index (RCMI) is a revolutionary
                  competency-based assessment tool that measures an individual's
                  potential to create positive impact in their personal and
                  professional lives.
                </p>

                <p className={Styles.rcmi_info_data_text}>
                  Unlike traditional assessments that focus solely on academic
                  knowledge or technical skills, RCMI provides a holistic
                  evaluation of critical competencies that are essential for
                  success in the 21st century.
                </p>
              </div>
            </div>

            <div className={Styles.tow_box_rcmi}>
              <div className={Styles.top_benfit_header}>
                <div className={Styles.icon_card}>
                  <img
                    className={Styles.image_fit_content}
                    src={key_icon}
                    alt=""
                  />
                </div>

                <p className={Styles.header_title_side_text}>Key Features</p>
              </div>

              <div
                className={`${Styles.bottom_data_benifit} ${Styles.flex_colume_what_rcmi}`}
              >
                <p className={Styles.rcmi_info_data_text}>
                  <span className={Styles.title_description_mid}>
                    Powered by RealLives Simulation :
                  </span>
                  The RealLives ChangeMaker Index (RCMI) is a revolutionary
                  competency-based assessment tool that measures an individual's
                  potential to create positive impact in their personal and
                  professional lives.
                </p>

                <p className={Styles.rcmi_info_data_text}>
                  <span className={Styles.title_description_mid}>
                    AI-Powered Score Generation :
                  </span>
                  Advanced algorithms analyze performance across all
                  competencies to generate accurate, personalized insights.
                </p>

                <p className={Styles.rcmi_info_data_text}>
                  <span className={Styles.title_description_mid}>
                    Global Recognition :
                  </span>
                  Developed in partnership with leading institutions including
                  Korea University
                </p>
              </div>
            </div>
          </div>

          <div className={Styles.rcmi_data_right_bar}>
            <div className={Styles.top_benfit_header}>
              <div className={Styles.icon_card}>
                <img
                  className={Styles.image_fit_content}
                  src={image_behind_rcmi}
                  alt=""
                />
              </div>

              <p className={Styles.header_title_side_text}>
                The Science behind RCMI
              </p>
            </div>

            <div
              className={`${Styles.bottom_data_benifit} ${Styles.flex_colume_what_rcmi}`}
            >
              <p className={Styles.rcmi_info_data_text}>
                The RCMI Index is built on a robust foundation of psychometric
                research, educational theory, and data-driven insights. The
                assessment framework was developed through collaboration between
                the RealLives Foundation and Korea University, combining
                expertise in:
              </p>

              <p className={Styles.rcmi_info_data_text}>
                <span className={Styles.title_description_mid}>
                  Competency-Based Education:
                </span>
                Learning through realistic simulation and decision-making
              </p>

              <p className={Styles.rcmi_info_data_text}>
                <span className={Styles.title_description_mid}>
                  Competency-Based Education:
                </span>
                Focus on skills and abilities rather than just knowledge
              </p>

              <p className={Styles.rcmi_info_data_text}>
                <span className={Styles.title_description_mid}>
                  Social Impact Research:
                </span>
                Understanding the competencies that drive meaningful change
              </p>

              <p className={Styles.rcmi_info_data_text}>
                <span className={Styles.title_description_mid}>
                  Positive Psychology:
                </span>
                Emphasis on strengths-based development
              </p>

              <p className={Styles.rcmi_info_data_text}>
                The RealLives simulation provides a unique assessment
                environment where individuals make decisions that aﬀect a
                simulated life, revealing their natural competencies in areas
                such as problem-solving, empathy, ethical reasoning, and global
                awareness.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.changemaker_how_works}>
          <div className={Styles.how_to_works_rcmi_container_inner}>
            <p className={Styles.first_title_how_to_work}>
              How the RealLives ChangeMaker Index Works?
            </p>

            <div className={Styles.container_event_main}>
              <div className={Styles.container_inner_child_left}>
                <p className={Styles.title_game_event}>
                  Step 1: Making a Real-Life Decision
                </p>

                <p className={Styles.description_game_title}>
                  Every player faces life-like situations and must choose what
                  to do.These choices depend on your character’s unique life —
                  their family background, income level, job, and more. Just
                  like in real life, every decision shapes who you become.
                </p>
              </div>

              <div className={`${Styles.container_inner_child_right}`}>
                <img
                  className={Styles.image_fit_content}
                  src={image_reallives_index}
                  alt=""
                />
              </div>
            </div>

            <div className={Styles.container_event_main}>
              <div className={Styles.container_inner_child_left}>
                <p className={Styles.title_game_event}>
                  Step 2: Measuring Competencies
                </p>

                <p className={Styles.description_game_title}>
                  Each choice reflects different mindsets and skills.When you
                  decide, our system automatically updates your character’s
                  competencies based on your choice.
                </p>
              </div>

              <div className={`${Styles.container_inner_child_right}`}>
                <img
                  className={Styles.image_fit_content}
                  src={image_reallives_index_2}
                  alt=""
                />
              </div>
            </div>

            <div className={Styles.container_event_main}>
              <div className={Styles.container_inner_child_left}>
                <p className={Styles.title_game_event}>
                  Step 3: Building the ChangeMaker Index
                </p>

                <p className={Styles.description_game_title}>
                  Let’s say you chose A — “Make the journey and bring back the
                  water.” Our proprietary algorithm analyzes the intent and
                  impact of that choice and updates your ChangeMaker Index,
                  showing how your empathy, resilience, and decision-making
                  evolve over time.
                </p>
              </div>

              <div className={`${Styles.container_inner_child_right}`}>
                <img
                  className={Styles.image_fit_content}
                  src={make_a_changemaker_image}
                  alt=""
                />
              </div>
            </div>

            <div className={Styles.container_event_main}>
              <div className={Styles.container_inner_child_left}>
                <p className={Styles.title_game_event}>
                  Step 4 — View Your ChangeMaker Graph
                </p>

                <p className={Styles.description_game_title}>
                  Watch your personal ChangeMaker journey come alive!The
                  ChangeMaker Graph visualizes your progress across 18
                  ChangeMaker Competencies
                </p>

                <p className={Styles.description_game_title}>
                  Each new decision updates your graph, showing where you’re
                  growing, and where you can grow next.
                </p>
              </div>

              <div
                className={`${Styles.container_inner_child_right} ${Styles.background_white} `}
              >
                <img
                  className={Styles.image_fit_content}
                  src={graph_rcmi_image}
                  alt=""
                />
              </div>
            </div>

            <div className={Styles.container_event_main}>
              <div className={Styles.container_inner_child_left}>
                <p className={Styles.title_game_event}>
                  Step 5 — Discover Your ChangeMaker Clusters
                </p>

                <p className={Styles.description_game_title}>
                  Your overall ChangeMaker Score is built from four powerful
                  clusters, each combining multiple competencies you develop
                  through your decisions:
                </p>

                <p className={Styles.description_game_title}>
                  <span className={Styles.title_description_mid}>
                    1 Internal / Personal Qualities –
                  </span>
                  How you grow as an individual:Self-Awareness, Resilience,
                  Adaptability, Persistence, Emotional Intelligence
                </p>

                <p className={Styles.description_game_title}>
                  <span className={Styles.title_description_mid}>
                    2 Interpersonal Competencies –
                  </span>
                  How you grow as an individual:Self-Awareness, Resilience,
                  Adaptability, Persistence, Emotional Intelligence
                </p>

                <p className={Styles.description_game_title}>
                  <span className={Styles.title_description_mid}>
                    3 Strategic Thinking –
                  </span>
                  How you plan, solve problems, and innovate: Visionary
                  Thinking, Creativity & Innovation, Problem-Solving Skills,
                  Initiative, Risk-Taking, Critical Thinking
                </p>

                <p className={Styles.description_game_title}>
                  <span className={Styles.title_description_mid}>
                    4 Contextual Awareness –
                  </span>
                  How you understand the wider world and act responsibly: Global
                  Awareness, Ethical Responsibility
                </p>

                <p className={Styles.description_game_title}>
                  Together, these clusters show how your choices build personal
                  growth, social impact, strategic capability, and responsible
                  citizenship — giving a holistic view of your ChangeMaker
                  potential.
                </p>
              </div>

              <div
                className={`${Styles.container_inner_child_right} ${Styles.background_white}`}
              >
                <img
                  className={Styles.image_fit_content}
                  src={Comptencies_image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.the_ChangeMaker_Journey_container}>
          <div className={Styles.top_child_changemaker}>
            <p className={Styles.text_changemaker_journey}>
              The ChangeMaker Journey
            </p>

            <p className={Styles.changemaker_devlopement_text}>
              The Five Stages of ChangeMaker Development
            </p>

            <p className={Styles.changemaker_devlopment_text}>
              The RCMI Index places individuals on a developmental journey with
              five distinct stages, each representing a level of changemaking
              capacity:
            </p>
          </div>

          <div className={Styles.changemaker_journey_background_image}>
            <img
              class={Styles.image_fit_content}
              src={changemaker_journey}
              alt=""
            />
          </div>

          <div className={Styles.point_cards_container}>
            {Sprout.filter((data) => [1, 2, 3].includes(data.id)).map(
              (data, id) => (
                <div
                  className={`${Styles.point_cards_inner}`}
                  style={{ backgroundColor: data.bgColor }}
                  key={id}
                >
                  <p className={Styles.stage_title_text}>{data.card_head}</p>

                  <p className={Styles.stage_title_2}>{data.card_title}</p>

                  <p className={Styles.stage_description_text}>
                    {data.card_discription}
                  </p>
                </div>
              ),
            )}
          </div>

          <div className={Styles.point_cards_container_2}>
            {Sprout.filter((data) => [4, 5].includes(data.id)).map(
              (data, idx) => (
                <div
                  className={`${Styles.point_cards_inner}`}
                  style={{ backgroundColor: data.bgColor }}
                  key={idx}
                >
                  <p className={Styles.stage_title_text}>{data.card_head}</p>

                  <p className={Styles.stage_title_2}>{data.card_title}</p>

                  <p className={Styles.stage_description_text}>
                    {data.card_discription}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className={Styles.make_decision_container}>
          <p className={Styles.make_decision_skill_text}>
            Make decisions, grow skills, and see your impact come to life.
          </p>

          <div
            className={Styles.becomechanage_maker}
            onClick={become_change_btn}
          >
            Begin Your ChangeMaker Journey
          </div>
        </div>

      </div>
    </>
  );
};

export default Rcmiworks;
