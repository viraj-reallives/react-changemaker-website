/**
 * Local WebP variants for previously oversized (>1MB) photos.
 * Each entry exposes `src` (~1600w) and `src900` (~900w).
 */
import ethWorkshop from "./ETH-Sudents2.webp";
import ethWorkshop900 from "./ETH-Sudents2-900.webp";

import howRcmiWorks from "./how-rcmi-works.webp";
import howRcmiWorks900 from "./how-rcmi-works-900.webp";

import portalBackground from "./landing page/starting-background-img.webp";
import portalBackground900 from "./landing page/starting-background-img-900.webp";

import certificate from "./Home-image/changemaker-certificate.webp";
import certificate900 from "./Home-image/changemaker-certificate-900.webp";

import orchidBackground from "./Home-image/orchid-background-img-2.jpeg.webp";
import orchidBackground900 from "./Home-image/orchid-background-img-2.jpeg-900.webp";

import orchid1 from "./Home-image/orchid-1.webp";
import orchid1900 from "./Home-image/orchid-1-900.webp";
import orchid2 from "./Home-image/orchid-2.webp";
import orchid2900 from "./Home-image/orchid-2-900.webp";
import orchid5 from "./Home-image/orchid-5.webp";
import orchid5900 from "./Home-image/orchid-5-900.webp";

import fourthWorkshop1 from "./Home-image/fourth_workshop-1-min.webp";
import fourthWorkshop1900 from "./Home-image/fourth_workshop-1-min-900.webp";
import fourthWorkshop2 from "./Home-image/fourth_workshop-2-min.webp";
import fourthWorkshop2900 from "./Home-image/fourth_workshop-2-min-900.webp";
import fourthWorkshop3 from "./Home-image/fourth_workshop-3-min.webp";
import fourthWorkshop3900 from "./Home-image/fourth_workshop-3-min-900.webp";

import secondWorkshop2 from "./Home-image/second-workshop-2.webp";
import secondWorkshop2900 from "./Home-image/second-workshop-2-900.webp";
import secondWorkshop3 from "./Home-image/second-workshop-3.webp";
import secondWorkshop3900 from "./Home-image/second-workshop-3-900.webp";
import secondWorkshop4 from "./Home-image/second-workshop-4.webp";
import secondWorkshop4900 from "./Home-image/second-workshop-4-900.webp";

import school1 from "./Home-image/school-1-image-slider.webp";
import school1900 from "./Home-image/school-1-image-slider-900.webp";
import school2 from "./Home-image/school-2-image-slider.webp";
import school2900 from "./Home-image/school-2-image-slider-900.webp";
import school3 from "./Home-image/school-3-image-slider.webp";
import school3900 from "./Home-image/school-3-image-slider-900.webp";

import thirdWorkshop2 from "./Home-image/3-rd-workshop-2.webp";
import thirdWorkshop2900 from "./Home-image/3-rd-workshop-2-900.webp";

import finalBusiness from "./Home-image/Final Business with Purpose 1.webp";
import finalBusiness900 from "./Home-image/Final Business with Purpose 1-900.webp";

import chula1 from "./chula-workshop/fifth-work-shop-4.webp";
import chula1900 from "./chula-workshop/fifth-work-shop-4-900.webp";
import chula2 from "./chula-workshop/fifth-work-shop-2.webp";
import chula2900 from "./chula-workshop/fifth-work-shop-2-900.webp";
import chula3 from "./chula-workshop/fifth-work-shop-3.webp";
import chula3900 from "./chula-workshop/fifth-work-shop-3-900.webp";
import chula4 from "./chula-workshop/fifth-work-shop-5.webp";
import chula4900 from "./chula-workshop/fifth-work-shop-5-900.webp";

import empathy1 from "./chula-workshop/first-goal-img-1.webp";
import empathy1900 from "./chula-workshop/first-goal-img-1-900.webp";
import empathy2 from "./chula-workshop/second-goal-img-2.webp";
import empathy2900 from "./chula-workshop/second-goal-img-2-900.webp";
import empathy3 from "./chula-workshop/therd-goal-img-3.webp";
import empathy3900 from "./chula-workshop/therd-goal-img-3-900.webp";

const pair = (src, src900) => ({ src, src900 });

export const media = {
  ethWorkshop: pair(ethWorkshop, ethWorkshop900),
  howRcmiWorks: pair(howRcmiWorks, howRcmiWorks900),
  portalBackground: pair(portalBackground, portalBackground900),
  certificate: pair(certificate, certificate900),
  orchidBackground: pair(orchidBackground, orchidBackground900),
  orchid1: pair(orchid1, orchid1900),
  orchid2: pair(orchid2, orchid2900),
  orchid5: pair(orchid5, orchid5900),
  fourthWorkshop1: pair(fourthWorkshop1, fourthWorkshop1900),
  fourthWorkshop2: pair(fourthWorkshop2, fourthWorkshop2900),
  fourthWorkshop3: pair(fourthWorkshop3, fourthWorkshop3900),
  secondWorkshop2: pair(secondWorkshop2, secondWorkshop2900),
  secondWorkshop3: pair(secondWorkshop3, secondWorkshop3900),
  secondWorkshop4: pair(secondWorkshop4, secondWorkshop4900),
  school1: pair(school1, school1900),
  school2: pair(school2, school2900),
  school3: pair(school3, school3900),
  thirdWorkshop2: pair(thirdWorkshop2, thirdWorkshop2900),
  finalBusiness: pair(finalBusiness, finalBusiness900),
  chula1: pair(chula1, chula1900),
  chula2: pair(chula2, chula2900),
  chula3: pair(chula3, chula3900),
  chula4: pair(chula4, chula4900),
  empathy1: pair(empathy1, empathy1900),
  empathy2: pair(empathy2, empathy2900),
  empathy3: pair(empathy3, empathy3900),
};

/** Stable public URLs for LCP heroes (also preloaded from index.html where needed). */
export const publicHero = {
  ethWorkshop: {
    src: "/images/eth-workshop.webp",
    src900: "/images/eth-workshop-900.webp",
    sizes: "(max-width: 1024px) 100vw, 55vw",
    width: 2200,
    height: 1297,
    src900Width: 1100,
    srcWidth: 2200,
  },
  portalBackground: {
    src: "/images/portal-background.webp",
    src900: "/images/portal-background-900.webp",
    sizes: "100vw",
    width: 1600,
    height: 904,
  },
  howRcmiWorks: {
    src: "/images/how-rcmi-works.webp",
    src900: "/images/how-rcmi-works-900.webp",
    sizes: "(max-width: 1024px) 100vw, 55vw",
    width: 1600,
    height: 1001,
  },
  orchidWorkshop: {
    src: "/images/orchid-workshop-hero.webp",
    src900: "/images/orchid-workshop-hero-900.webp",
    sizes: "(max-width: 1024px) 100vw, 55vw",
    width: 1600,
    height: 717,
  },
  certificate: {
    src: "/images/changemaker-certificate.webp",
    src900: "/images/changemaker-certificate-900.webp",
    sizes: "(max-width: 720px) 100vw, 640px",
    width: 1600,
    height: 1131,
  },
};
