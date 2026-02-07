import Styles from "../HomeComponentParts/ChangeMakeraction.module.css";
import changemake_image_action from "../../assets/Home-image/changemaker-bg.png";
import Benifits from "../HomeComponentParts/Benifites";
import "../Footer/Footer.css";

const ChangeMakeraction = ({ theme, settheme }) => {
  //   console.log(theme);

  return (
    <div>
      <div className={Styles.change_maker_action_container}>
        <img
          className={Styles.image_fit_cover}
          src={changemake_image_action}
          alt=""
        />

        <div className={Styles.see_chnagemaker_index}>
          <p className={Styles.title_see_changemaker}>
            See the ChangeMaker Index in Action
          </p>
          <p className={Styles.title_discription_index}>
            Explore an interactive demo of the RCMI to understand how it works,
            what it measures,
            <br />
            and how it supports student growth.
          </p>

          <div className="iframe_container">
            <div className="rcmi_embed_cdn">
              <iframe
                className="iframe-width width-100"
                src="https://demo.arcade.software/i527E8HZo4YlXdSC8arb?embed&amp;embed_mobile=tab&amp;embed_desktop=inline&amp;show_copy_link=true"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Benifits theme={theme} settheme={settheme}></Benifits>
    </div>
  );
};

export default ChangeMakeraction;
