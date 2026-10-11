"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const lines = [
  [{ t: "رسايل", gold: false }, { t: "الواتساب", gold: false }],
  [{ t: "بتتحوّل لأوردرات منظمة", gold: true }],
  [{ t: "وإنت", gold: false }, { t: "نايم", gold: false }],
];

export default function HeroTitle() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const words = el.querySelectorAll(".hero-word");
    gsap.from(words, {
      yPercent: 120,
      opacity: 0,
      rotateX: -50,
      stagger: 0.09,
      duration: 1,
      delay: 0.25,
      ease: "power4.out",
    });
    gsap.to(el.querySelector(".title-underline"), {
      scaleX: 100,
      duration: 0.9,
      delay: 1.15,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <h1
      ref={ref}
      className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-[1.35]"
    >
      {lines.map((line, li) => (
        <span key={li} className="block overflow-visible">
          {line.map((w, wi) => (
            <span key={wi} className="hero-line">
              <span
                className={`hero-word ${w.gold ? "gold-text" : ""}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {w.t}
              </span>
              {wi < line.length - 1 && <span> </span>}
            </span>
          ))}
        </span>
      ))}
      <span
        className="title-underline block h-[3px] mt-5 origin-right rounded-full bg-gradient-to-l from-transparent via-gold to-transparent"
        style={{ transform: "scaleX(0)" }}
      />
    </h1>
  );
}
