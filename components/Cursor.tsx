"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const d = dot.current!;
    const r = ring.current!;

    const dx = gsap.quickTo(d, "x", { duration: 0.12, ease: "power2" });
    const dy = gsap.quickTo(d, "y", { duration: 0.12, ease: "power2" });
    const rx = gsap.quickTo(r, "x", { duration: 0.45, ease: "power3" });
    const ry = gsap.quickTo(r, "y", { duration: 0.45, ease: "power3" });

    const move = (e: MouseEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);

      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, summary, .card-hover");
      gsap.to(r, {
        scale: interactive ? 1.8 : 1,
        borderColor: interactive
          ? "rgba(232,200,116,0.9)"
          : "rgba(212,175,55,0.45)",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[100] w-2 h-2 -ml-1 -mt-1 rounded-full bg-gold-bright pointer-events-none hidden md:block"
        style={{ boxShadow: "0 0 12px rgba(232,200,116,0.8)" }}
      />
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[100] w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border pointer-events-none hidden md:block"
        style={{ borderColor: "rgba(212,175,55,0.45)" }}
      />
    </>
  );
}
