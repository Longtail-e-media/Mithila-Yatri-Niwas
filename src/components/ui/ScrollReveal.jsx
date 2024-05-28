import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

function ScrollReveal({ para }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((splitType) => {
      const text = new SplitType(splitType, {
        types: "chars, words",
      });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: splitType,
          start: "top 50%",
          //   start: "top 100%",
          end: "bottom 60%",
          //   end: "top 100%",
          scrub: true,
          markers: false,
        },
        opacity: 0.1,
        stagger: 0.1,
      });
    });

    // Set the scroll duration to be slower
    gsap.to(window, {
      len: 10000, // Adjust the scroll duration as needed
      scrollTrigger: {
        scrub: 1, // Set scrub to 1 for a smooth scroll animation
      },
    });
  }, [para]);

  return (
    <>
      <div className="space-y-6 text-center reveal-type p-36 container">
        <p className="font-body font-bold text-3xl leading-relaxed">{para}</p>
      </div>
    </>
  );
}

export default ScrollReveal;
