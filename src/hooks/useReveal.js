import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useReveal = (selector) => {
  useEffect(() => {
    gsap.from(selector, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
      },
    });
  }, [selector]);
};
