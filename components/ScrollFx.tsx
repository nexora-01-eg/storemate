"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollFx() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = ref.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      document.querySelectorAll("section > div > h2, section h2").forEach((h) => {
        if (h.closest("#pricing") || h.closest("#faq")) return;
        gsap.from(h, {
          scrollTrigger: { trigger: h, start: "top 85%" },
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray<HTMLElement>(".card-hover").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 88%" },
          y: 60,
          opacity: 0,
          rotateX: -8,
          duration: 0.8,
          delay: (i % 3) * 0.12,
          ease: "power3.out",
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={ref} className="contents" />;
}
