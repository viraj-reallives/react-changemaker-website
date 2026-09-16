import Styles from "./WorkshopDetail.module.css";
import rlLogo from "../../assets/logo-white.svg";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const WorkshopIdentity = ({
  partnerLogo,
  cropClass,
  university,
  department,
  collaborator,
}) => {
  const { t } = useMarketingTranslation();

  return (
    <div className={Styles.identityGrid}>
      <article className={Styles.identityCard}>
        <div
          className={`${Styles.logoCrop} ${cropClass ? Styles[cropClass] : ""}`}
        >
          <img src={partnerLogo} alt="" />
        </div>
        {university ? (
          <h1 className={Styles.university_text_title}>{university}</h1>
        ) : null}
        {department ? (
          <p className={Styles.participants_title_text}>{department}</p>
        ) : null}
      </article>

      <article className={Styles.identityCard}>
        <img className={Styles.rlMark} src={rlLogo} alt="" />
        {collaborator ? (
          <>
            <p className={Styles.participants_title_text}>
              {t("common.impact.inCollaborationWith")}
            </p>
            <p className={Styles.university_text_title}>{collaborator}</p>
          </>
        ) : null}
      </article>
    </div>
  );
};

export default WorkshopIdentity;
