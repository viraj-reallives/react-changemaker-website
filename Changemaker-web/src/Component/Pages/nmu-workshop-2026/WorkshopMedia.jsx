import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import styles from "./NmuWorkshop2026.module.css";

const MEDIA = "/assets/nmu-workshop-2026";

const WORKSHOP_PHOTOS = [
  { id: "sessionClassroom", src: `${MEDIA}/session-classroom.jpg` },
  { id: "sessionIntro", src: `${MEDIA}/session-intro.jpg` },
  { id: "sessionAisle", src: `${MEDIA}/session-aisle.jpg` },
  { id: "sessionBallroom", src: `${MEDIA}/session-ballroom.jpg` },
  { id: "sessionSignup", src: `${MEDIA}/session-signup.jpg` },
  { id: "sessionTablet", src: `${MEDIA}/session-tablet.jpg` },
  { id: "facilitator", src: `${MEDIA}/facilitator.jpg` },
  { id: "classroom", src: `${MEDIA}/classroom.jpg` },
  { id: "notes", src: `${MEDIA}/notes.jpg` },
  { id: "playing", src: `${MEDIA}/playing.jpg` },
  { id: "hall", src: `${MEDIA}/hall.jpg` },
  { id: "facilitatorIntro", src: `${MEDIA}/facilitator-intro.jpg` },
  { id: "hallSession", src: `${MEDIA}/hall-session.jpg` },
  { id: "hallStudents", src: `${MEDIA}/hall-students.jpg` },
  { id: "studentsTablets", src: `${MEDIA}/students-tablets.jpg` },
  { id: "groupTablets", src: `${MEDIA}/group-tablets.jpg` },
  { id: "classroomTablets", src: `${MEDIA}/classroom-tablets.jpg` },
  { id: "studentsSmiling", src: `${MEDIA}/students-smiling.jpg` },
  { id: "studentPlaying", src: `${MEDIA}/student-playing.jpg` },
  { id: "tabletCloseup", src: `${MEDIA}/tablet-closeup.jpg` },
];

export default function WorkshopMedia({ content }) {
  const [openIndex, setOpenIndex] = useState(null);
  const open = openIndex != null ? WORKSHOP_PHOTOS[openIndex] : null;

  useEffect(() => {
    if (openIndex == null) return undefined;
    function onKey(event) {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight") setOpenIndex((index) => (index + 1) % WORKSHOP_PHOTOS.length);
      if (event.key === "ArrowLeft") {
        setOpenIndex((index) => (index - 1 + WORKSHOP_PHOTOS.length) % WORKSHOP_PHOTOS.length);
      }
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [openIndex]);

  function step(delta) {
    setOpenIndex((index) => (index + delta + WORKSHOP_PHOTOS.length) % WORKSHOP_PHOTOS.length);
  }

  return (
    <section className={styles.mediaGallery} aria-labelledby="workshop-media-title">
      <h2 id="workshop-media-title" className={styles.mediaTitle}>{content.title}</h2>
      <p className={styles.mediaIntro}>{content.intro}</p>

      <button
        type="button"
        className={styles.mediaFeature}
        onClick={() => setOpenIndex(0)}
      >
        <img src={WORKSHOP_PHOTOS[0].src} alt={content.alts[WORKSHOP_PHOTOS[0].id]} />
      </button>

      <ul className={styles.mediaGrid}>
        {WORKSHOP_PHOTOS.slice(1).map((photo, index) => (
          <li key={photo.id}>
            <button
              type="button"
              className={styles.mediaTile}
              onClick={() => setOpenIndex(index + 1)}
            >
              <img src={photo.src} alt={content.alts[photo.id]} />
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={content.alts[open.id]}>
          <button type="button" className={styles.lightboxClose} onClick={() => setOpenIndex(null)} aria-label={content.close}>
            <FaTimes />
          </button>
          <button type="button" className={styles.lightboxNav} data-side="prev" onClick={() => step(-1)} aria-label={content.previous}>
            <FaChevronLeft />
          </button>
          <img src={open.src} alt={content.alts[open.id]} className={styles.lightboxImage} />
          <button type="button" className={styles.lightboxNav} data-side="next" onClick={() => step(1)} aria-label={content.next}>
            <FaChevronRight />
          </button>
          <p className={styles.lightboxCaption}>
            {content.alts[open.id]}
            <span>{openIndex + 1} / {WORKSHOP_PHOTOS.length}</span>
          </p>
        </div>
      )}
    </section>
  );
}
