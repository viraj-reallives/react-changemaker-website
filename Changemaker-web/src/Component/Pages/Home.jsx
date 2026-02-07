import Styles from "./Home.module.css";
import Footer from "../Footer/Footer.jsx";
import Featuresindex from "../HomeComponentParts/Featuresindex";
import waterflow_image from "../../assets/Home-image/Water-flow-image.svg";
import firstsection from "../../assets/Home-image/first-section-image.png";
import ChangeMakeraction from "../HomeComponentParts/ChangeMakeraction";

const Home = ({ theme, settheme }) => {
  //  {Styles.homecontainer}
  return (
    <div className={`${Styles.homecontainer} ${Styles[theme]}`}>
      <div className={Styles.first_content_structure}>
        <div className={Styles.content_left_bar}>
          <div className={Styles.top_heading_container_main}>
            <div className={Styles.wrapper_heading}>
              <h1 className={Styles.title_section_1}>
                Beyond Traditional Testing, <br /> Measure What Really Matters
              </h1>

              <div className={Styles.image_description}>
                <img src={waterflow_image} alt="" />

                <p className={Styles.top_description_title}>
                  Life simulation–based assessment that tracks 18 critical
                  <br />
                  competencies through authentic decision-making, not surveys.
                </p>
              </div>
            </div>
          </div>

          <div className={Styles.container_btn}>
            <button className={Styles.redirect_btn}>
              Begin Your Journey of Change
            </button>
            <button className={Styles.How_works}>How this works?</button>
          </div>
        </div>

        <div className={Styles.content_image_right}>
          <img className={Styles.image_hight_rem} src={firstsection} alt="" />
        </div>
      </div>

      <Featuresindex theme={theme} settheme={settheme}></Featuresindex>

      <ChangeMakeraction theme={theme} settheme={settheme}></ChangeMakeraction>
    </div>
  );
};

export default Home;
