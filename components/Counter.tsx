"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Counter({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current!;
    const obj = { v: 0 };

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: to,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent =
              Math.round(obj.v).toLocaleString("ar-EG") + suffix;
          },
        });
      },
    });

    return () => st.kill();
  }, [to, suffix, duration]);

  return <span ref={ref}>٠</span>;
}
