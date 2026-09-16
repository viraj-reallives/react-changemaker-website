import Style from "../HomeComponentParts/Benifits.module.css";
import userduotone from "../../assets/Home-image/user-duotone.svg";
import targetduotone from "../../assets/Home-image/chalkboard-teacher-duotone 1.svg";
import userthreeduotone from "../../assets/Home-image/users-three-duotone 1.svg";
import arrowup from "../../assets/Home-image/arrow-up.svg";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";

const BENEFIT_ICONS = [userduotone, targetduotone, userthreeduotone, arrowup];

const Benifites = () => {
  const { t, getMessage } = useMarketingTranslation();
  const benefitCards = getMessage("benefits.cards") ?? [];

  return (
    <section className={Style.section}>
      <div className={Style.inner}>
        <header className={Style.head}>
          <h2 className={Style.title}>{t("benefits.title")}</h2>
          <p className={Style.subtitle}>{t("benefits.description")}</p>
        </header>

        <div className={Style.grid}>
          {benefitCards.map((card, idx) => (
            <article key={card.title ?? idx} className={Style.card}>
              <div className={Style.cardHead}>
                <span className={Style.icon}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={BENEFIT_ICONS[idx]}
                    alt=""
                  />
                </span>
                <h3 className={Style.cardTitle}>{card.title}</h3>
              </div>
              <p className={Style.cardCopy}>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifites;
