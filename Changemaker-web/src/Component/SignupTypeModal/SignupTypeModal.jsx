import { useEffect, useId, useRef, useState } from "react";
import {
  MdAccountBalance,
  MdArrowBack,
  MdClose,
  MdHome,
  MdPalette,
  MdSchool,
} from "react-icons/md";
import { useMarketingTranslation } from "../../context/MarketingLocaleContext";
import { useSignupModal } from "../../context/SignupModalContext";
import { getSignupUrl, SIGNUP_USER_TYPES } from "../../lib/signupUrls";
import orchidWorkshop3 from "../../assets/Home-image/orchid-3.jpeg";
import orchidWorkshop4 from "../../assets/Home-image/orchid-4.jpg";
import orchidWorkshop6 from "../../assets/Home-image/orchid-6.jpg";
import kyungHeeWorkshop from "../../assets/Home-image/3-rd-workshop-image.png";
import navamindradhirajWorkshop from "../../assets/Home-image/second-workshop.png";
import ResponsiveImg from "../../components/media/ResponsiveImg";
import { media } from "../../assets/optimizedMedia";
import styles from "./SignupTypeModal.module.css";

const TYPE_ICONS = {
  school: MdSchool,
  university: MdAccountBalance,
  homeschooler: MdHome,
  gamer: MdPalette,
};

const TYPE_IMAGES = {
  school: [
    media.orchid1,
    media.orchid2,
    { src: orchidWorkshop3 },
    { src: orchidWorkshop4 },
    media.orchid5,
    { src: orchidWorkshop6 },
  ],
  university: [
    media.chula1,
    media.fourthWorkshop1,
    media.ethWorkshop,
    media.chula2,
    media.fourthWorkshop2,
    { src: kyungHeeWorkshop },
    media.chula3,
    media.fourthWorkshop3,
    { src: navamindradhirajWorkshop },
    media.chula4,
  ],
};

const SignupTypeModal = () => {
  const { isOpen, closeSignupModal } = useSignupModal();
  const { locale, getMessage, t } = useMarketingTranslation();
  const copy = getMessage("common.signupModal") ?? {};
  const types = copy.types ?? {};
  const titleId = useId();
  const dialogRef = useRef(null);
  const selectedTypeRef = useRef(null);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      selectedTypeRef.current = null;
      setSelectedType(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (selectedTypeRef.current) {
          selectedTypeRef.current = null;
          setSelectedType(null);
        } else {
          closeSignupModal();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => {
      dialogRef.current?.querySelector("button, a")?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, closeSignupModal]);

  if (!isOpen) return null;

  const selected = selectedType ? types[selectedType] : null;
  const photos = selectedType ? TYPE_IMAGES[selectedType] : null;
  const heading = selected
    ? selected.headline || selected.benefitsTitle || selected.title
    : copy.chooseTitle;
  const signupHref = selectedType ? getSignupUrl(selectedType, locale) : null;

  const chooseType = (typeId) => {
    selectedTypeRef.current = typeId;
    setSelectedType(typeId);
  };

  const goBackToTypes = () => {
    selectedTypeRef.current = null;
    setSelectedType(null);
  };

  return (
    <div
      className={styles.overlay}
      onClick={closeSignupModal}
    >
      <div
        ref={dialogRef}
        className={`${styles.dialog} ${photos ? styles.dialogWide : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.toolbar}>
          {selectedType ? (
            <button
              type="button"
              className={styles.iconBtn}
              onClick={goBackToTypes}
              aria-label={copy.back || t("common.back")}
            >
              <MdArrowBack />
            </button>
          ) : (
            <span className={styles.toolbarSpacer} />
          )}

          <button
            type="button"
            className={styles.iconBtn}
            onClick={closeSignupModal}
            aria-label={copy.close || t("common.goBack")}
          >
            <MdClose />
          </button>
        </div>

        {!selectedType ? (
          <>
            <h2 id={titleId} className={styles.title}>
              {heading}
            </h2>
            {copy.chooseSubtitle && (
              <p className={styles.subtitle}>{copy.chooseSubtitle}</p>
            )}
            <div className={styles.cardGrid}>
              {SIGNUP_USER_TYPES.map((typeId) => {
                const item = types[typeId];
                if (!item) return null;
                const Icon = TYPE_ICONS[typeId] ?? MdSchool;
                return (
                  <button
                    key={typeId}
                    type="button"
                    className={styles.card}
                    onClick={() => chooseType(typeId)}
                  >
                    <span className={styles.cardIcon} aria-hidden="true">
                      <Icon />
                    </span>
                    <span className={styles.cardTitle}>{item.title}</span>
                    {item.short && (
                      <span className={styles.cardShort}>{item.short}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div
            className={`${styles.benefits} ${photos ? styles.benefitsSplit : ""}`}
          >
            <div className={styles.benefitsCopy}>
              <h2
                id={titleId}
                className={`${styles.title} ${styles.titleSelected}`}
              >
                {heading}
              </h2>
              <ul className={styles.benefitList}>
                {(selected.benefits ?? []).map((benefit) => {
                  const title =
                    typeof benefit === "string" ? null : benefit.title;
                  const text =
                    typeof benefit === "string" ? benefit : benefit.text;
                  return (
                    <li key={title || text}>
                      {title && (
                        <span className={styles.benefitTitle}>{title}</span>
                      )}
                      <span className={styles.benefitText}>{text}</span>
                    </li>
                  );
                })}
              </ul>
              <a
                className={styles.cta}
                href={signupHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.cta || t("common.nav.getRcmiReport")}
              </a>
            </div>

            {photos && (
              <aside className={styles.photoCol}>
                <div key={selectedType} className={styles.photoGrid}>
                  {photos.map((img, index) => (
                    <ResponsiveImg
                      key={`${selectedType}-${index}`}
                      src={img.src}
                      src900={img.src900}
                      sizes="(max-width: 720px) 45vw, 180px"
                      alt=""
                      className={styles.photo}
                    />
                  ))}
                </div>
                {selected.photoCaption && (
                  <p className={styles.photoCaption}>{selected.photoCaption}</p>
                )}
              </aside>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupTypeModal;
