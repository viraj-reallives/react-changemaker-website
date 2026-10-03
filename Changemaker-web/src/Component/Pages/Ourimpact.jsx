import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link, Outlet } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Styles from "./Ourimpact.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useLocalePath } from "../../hooks/useLocalePath";
import { useSignupModal } from "../../context/SignupModalContext";
import ResponsiveImg from "../../components/media/ResponsiveImg";
import { media } from "../../assets/optimizedMedia";

const GlobalMap = lazy(() =>
  import("../GlobalMap").then((m) => ({ default: m.GlobalMap })),
);

const IMPACT_CARD_META = [
  { img: media.finalBusiness },
  {
    img: {
      src: "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653464/second-workshop_vmxhhq.png",
    },
  },
  {
    img: {
      src: "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653472/3-rd-workshop-first-image_y34mx3.jpg",
    },
  },
  { img: media.fourthWorkshop1 },
  { img: media.chula1 },
];

const Ourimpact = () => {
  const { t, getMessage } = useMarketingTranslation();
  const localePath = useLocalePath();
  const { openSignupModal } = useSignupModal();
  const impactCards = getMessage("pages.ourImpact.cards") ?? [];

  return (
    <div className={Styles.ourimpactmaincontainer}>
      <div className={Styles.slider_componet}>
        <div className={Styles.slider_wrapper}>
          <div className={Styles.top_slider_imapct_container}>
            <div className={Styles.individual_slide_inner}>
              <p className={Styles.impact_text_slide}>
                {t("pages.ourImpact.slider.impact")}
              </p>
              <p className={Styles.impact_description_slide}>
                {t("pages.ourImpact.slider.description")}
              </p>
            </div>

            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop={true}
              loopedSlides={3}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={1000}
            >
              <SwiperSlide>
                <ResponsiveImg
                  src={media.finalBusiness.src}
                  src900={media.finalBusiness.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.secondWorkshop2.src}
                  src900={media.secondWorkshop2.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.secondWorkshop3.src}
                  src900={media.secondWorkshop3.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.secondWorkshop4.src}
                  src900={media.secondWorkshop4.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                  />
              </SwiperSlide>
            </Swiper>

            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop={true}
              loopedSlides={3}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={1000}
            >
              <SwiperSlide>
                <ResponsiveImg
                  src={media.school1.src}
                  src900={media.school1.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.school2.src}
                  src900={media.school2.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="eager"
                  decoding="async"
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/orchid-6_filvzp.jpg"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.school3.src}
                  src900={media.school3.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                  />
              </SwiperSlide>
            </Swiper>

            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop={true}
              loopedSlides={3}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={1000}
            >
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653479/3-rd-workshop-image_jwd7ay.png"
                  className={Styles.slider_img}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.thirdWorkshop2.src}
                  src900={media.thirdWorkshop2.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={""}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.orchid5.src}
                  src900={media.orchid5.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={""}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653468/3-rd-workshop-4_ea6we5.png"
                  className={Styles.slider_img}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={Styles.bottom_impact_container}>
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop={true}
              loopedSlides={3}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={1000}
            >
              <SwiperSlide>
                <ResponsiveImg
                  src={media.orchidBackground.src}
                  src900={media.orchidBackground.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={""}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.fourthWorkshop1.src}
                  src900={media.fourthWorkshop1.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={""}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.fourthWorkshop2.src}
                  src900={media.fourthWorkshop2.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={""}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.fourthWorkshop3.src}
                  src900={media.fourthWorkshop3.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={""}
                  />
              </SwiperSlide>
            </Swiper>

            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop={true}
              loopedSlides={3}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={1000}
            >
              <SwiperSlide>
                <ResponsiveImg
                  src={media.orchid2.src}
                  src900={media.orchid2.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={""}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.school1.src}
                  src900={media.school1.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={""}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <ResponsiveImg
                  src={media.thirdWorkshop2.src}
                  src900={media.thirdWorkshop2.src900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={Styles.slider_img}
                  alt={""}
                  />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653464/3-rd-workshop-3_wegcf0.png"
                  className={Styles.slider_img}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className={Styles.our_global_impact_component}>
        <div className={Styles.global_title_description_container}>
          <p className={Styles.first_title_global}>
            {t("pages.ourImpact.globalStory.title")}
          </p>
          <p className={Styles.global_second_description}>
            {t("pages.ourImpact.globalStory.description")}
          </p>
        </div>

        <div className={Styles.global_image_section}>
          <Suspense fallback={null}>
            <GlobalMap />
          </Suspense>
        </div>
      </div>

      <div className={Styles.our_card_section_wrapper}>
        <p className={Styles.workshop_text}>
          {t("pages.ourImpact.sectionTitle")}
        </p>

        {impactCards.map((card, idx) => {
          const meta = IMPACT_CARD_META[idx] ?? {};

          return (
            <React.Fragment key={card.link ?? idx}>
              <Link
                to={localePath(card.link)}
                className={Styles.card_box_impact}
              >
                <header className={Styles.span_imapct_colume}>
                  <p className={Styles.date_of_start_title}>{card.card_date}</p>
                  <h3 className={Styles.cards_title_imapct_text}>
                    {card.card_title}
                  </h3>
                </header>

                <div className={Styles.bottom_card_imapct_section}>
                  <div className={Styles.impact_image_card}>
                    <ResponsiveImg
                      src={meta.img?.src}
                      src900={meta.img?.src900}
                      sizes="(max-width: 720px) 100vw, 280px"
                      alt=""
                    />
                  </div>

                  <div className={Styles.impact_card_data}>
                    <div className={Styles.span_imapct_colume}>
                      <p className={Styles.university_text_title}>
                        {card.university_text}
                      </p>
                      <p className={Styles.participants_title_text}>
                        {card.particepent_title}
                      </p>
                    </div>

                    <div className={Styles.flex_align_start}>
                      <p className={Styles.participants_title_text}>
                        {card.collaboration_text}
                      </p>
                      <p className={Styles.metaValue}>{card.name_card}</p>
                    </div>

                    <div className={Styles.flex_align_start}>
                      <p className={Styles.participants_title_text}>
                        {t("common.impact.participants")}
                      </p>
                      <p className={Styles.numbers_font}>
                        {card.number_title}
                      </p>
                    </div>

                    {card.Used_Tools && (
                      <p className={Styles.usedTools}>
                        {t("common.impact.usedTool")}{" "}
                        <strong>{card.Used_Tools}</strong>
                      </p>
                    )}

                    <div className={Styles.span_imapct_colume}>
                      <p className={Styles.participants_title_text}>
                        {card.skill_devloped}
                      </p>
                      <div className={Styles.wapper_show_btn}>
                        {[
                          card.teamwork_title,
                          card.intergrity_title,
                          card.extra_skill,
                        ]
                          .filter(Boolean)
                          .map((skill) => (
                            <span key={skill} className={Styles.team_work_btn}>
                              {skill}
                            </span>
                          ))}
                      </div>
                    </div>

                    <span className={Styles.cardCta}>
                      {t("common.learnMore")} <FaArrowRight />
                    </span>
                  </div>
                </div>
              </Link>

              {idx === 1 && (
                <section className={Styles.wrapper_descision_skills_2}>
                  <div className={Styles.decision_skills_container}>
                    <p className={Styles.global_student_title}>
                      {t("pages.ourImpact.midSection.title")}
                    </p>

                    <button
                      type="button"
                      className={Styles.ctaBtn}
                      onClick={openSignupModal}
                    >
                      {t("pages.ourImpact.midSection.cta")} <FaArrowRight />
                    </button>
                  </div>
                </section>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <section className={Styles.wrapper_descision_skills}>
        <div className={Styles.decision_skills_container}>
          <p className={Styles.global_student_title}>
            {t("pages.ourImpact.bottomCta.title")}
          </p>

          <button
            type="button"
            className={Styles.ctaBtn}
            onClick={openSignupModal}
          >
            {t("pages.ourImpact.bottomCta.cta")} <FaArrowRight />
          </button>
        </div>
      </section>

      <Outlet />
    </div>
  );
};

export default Ourimpact;
