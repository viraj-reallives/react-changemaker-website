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
import chulaWorkshopCardImg from "../../assets/chula-workshop/fifth-work-shop-4.png";

const GlobalMap = lazy(() =>
  import("../GlobalMap").then((m) => ({ default: m.GlobalMap })),
);

const IMPACT_CARD_META = [
  {
    imgURL:
      "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653482/Final_Business_with_Purpose_1_qhhlwu.png",
  },
  {
    imgURL:
      "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653464/second-workshop_vmxhhq.png",
  },
  {
    imgURL:
      "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653472/3-rd-workshop-first-image_y34mx3.jpg",
  },
  {
    imgURL:
      "https://res.cloudinary.com/dexw6sglh/image/upload/v1771653467/fourth_workshop-1-min_j7e4y0.jpg",
  },
  {
    imgURL: chulaWorkshopCardImg,
  },
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
                <img
                  loading="eager"
                  decoding="async"
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653482/Final_Business_with_Purpose_1_qhhlwu.png"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="eager"
                  decoding="async"
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653474/second-workshop-2_ikloth.png"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="eager"
                  decoding="async"
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653474/second-workshop-3_ycah0h.png"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="eager"
                  decoding="async"
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653472/second-workshop-4_ew4261.png"
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
                  loading="eager"
                  decoding="async"
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653466/school-1-image-slider_bsn9za.png"
                  className={Styles.slider_img}
                  alt={t("common.alt.changemakerIndexImage")}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="eager"
                  decoding="async"
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653481/school-2-image-slider_opj1vb.png"
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
                <img
                  loading="eager"
                  decoding="async"
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653475/school-3-image-slider_troncd.png"
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
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/3-rd-workshop-2_ktwj7o.png"
                  className={Styles.slider_img}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-5_kwmesy.png"
                  className={Styles.slider_img}
                  alt=""
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
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-background-img-2.jpeg_off002.png"
                  className={Styles.slider_img}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653467/fourth_workshop-1-min_j7e4y0.jpg"
                  className={Styles.slider_img}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653471/fourth_workshop-2-min_umblqv.jpg"
                  className={Styles.slider_img}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653470/fourth_workshop-3-min_dqej4n.jpg"
                  className={Styles.slider_img}
                  alt=""
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
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653477/orchid-2_hgvd1d.jpg"
                  className={Styles.slider_img}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653466/school-1-image-slider_bsn9za.png"
                  className={Styles.slider_img}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dexw6sglh/image/upload/v1771653465/3-rd-workshop-2_ktwj7o.png"
                  className={Styles.slider_img}
                  alt=""
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
                    <img src={meta.imgURL} alt="" />
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
                        <span className={Styles.team_work_btn}>
                          {card.teamwork_title}
                        </span>
                        <span className={Styles.integrity_work_btn}>
                          {card.intergrity_title}
                        </span>
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
