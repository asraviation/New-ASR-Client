import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const h1Ref = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.play();

    const ctx = gsap.context(() => {
      tl.from([h1Ref.current], {
        opacity: 0,
        x: -1000,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: h1Ref.current,
          start: "top 70%",
          end: "top 35%",
          scrub: 1,
          scale: 1.5,
          toggleActions: "play none none reverse",
        },
      });

      tl.from([paraRef.current], {
        opacity: 0,
        x: -800,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 70%",
          end: "top 35%",
          scrub: 1,
          scale: 1.5,
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ctx.revert();
      tl.kill();
    };
  }, []);

  return (
    <div className="bg-white py-8 px-8 shadow-lg w-full">
      <h1
        className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent"
        ref={h1Ref}
      >
        Experience the art of travel with ASR Aviation
      </h1>
      <p
        className="mt-6 text-lg text-gray-700 max-w-screen-lg mx-auto text-left"
        ref={paraRef}
      >
        Experience ultimate luxury travel with ASR Aviation, where opulence
        meets convenience. Our premium fleet of private jets and helicopters
        ensures a journey tailored to exceed expectations. From sophisticated
        comfort to seamless service, every moment is designed for an exclusive,
        first-class experience that redefines private aviation.{" "}
      </p>
    </div>
  );
};

export default ExperienceSection;
