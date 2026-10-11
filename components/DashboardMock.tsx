"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  ShoppingBag,
  BadgeCheck,
  Wallet,
} from "lucide-react";
import Counter from "./Counter";

const bars = [42, 68, 55, 80, 62, 95, 74];
const days = ["س", "ح", "ن", "ث", "ر", "خ", "ج"];

const orders = [
  ["#١٠٥٢", "هدي أحمد", "فستان سهرة", "٩٥٠ ج", "في الشحن"],
  ["#١٠٥١", "منة الله سيد", "عباية كريب", "٧٢٠ ج", "تم التسليم"],
  ["#١٠٥٠", "نور الهدى", "طقم شيفون ×٢", "١٬١٤٠ ج", "تأكيد"],
];

export default function DashboardMock() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current!;
    const ctx = gsap.context(() => {
      gsap.from(".kpi-card", {
        scrollTrigger: { trigger: el, start: "top 75%" },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.from(".chart-bar", {
        scrollTrigger: { trigger: el, start: "top 70%" },
        scaleY: 0,
        transformOrigin: "bottom",
        stagger: 0.08,
        duration: 0.9,
        ease: "back.out(1.6)",
      });
      gsap.from(".order-row", {
        scrollTrigger: { trigger: el, start: "top 65%" },
        x: -50,
        opacity: 0,
        stagger: 0.14,
        duration: 0.6,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="glass rounded-3xl overflow-hidden shadow-2xl shadow-black/60">
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="mx-auto text-xs text-muted font-semibold">
          لوحة تحكم صاحب المتجر
        </span>
        <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/25">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          لايف
        </span>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              icon: Wallet,
              label: "مبيعات النهاردة",
              val: 12450,
              suffix: "",
            },
            { icon: ShoppingBag, label: "أوردر جديد", val: 86, suffix: "" },
            { icon: BadgeCheck, label: "نسبة التحصيل", val: 98, suffix: "٪" },
          ].map((k) => (
            <div key={k.label} className="kpi-card rounded-2xl bg-white/[0.03] border border-white/[0.07] p-4">
              <k.icon className="w-4.5 h-4.5 text-gold-soft mb-2" />
              <p className="text-xl sm:text-2xl font-black gold-text">
                <Counter to={k.val} suffix={k.suffix} />
              </p>
              <p className="text-[11px] text-muted mt-1">{k.label}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold">مبيعات الأسبوع</p>
            <span className="flex items-center gap-1 text-xs text-emerald-300">
              <TrendingUp className="w-3.5 h-3.5" />
              +٣٢٪ عن الأسبوع اللي فات
            </span>
          </div>
          <div className="flex items-end justify-between gap-2 sm:gap-3 h-32">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className={`chart-bar w-full rounded-t-lg ${
                    i === 5
                      ? "bg-gradient-to-t from-gold to-gold-bright shadow-[0_0_18px_rgba(212,175,55,0.45)]"
                      : "bg-gradient-to-t from-gold/30 to-gold/10"
                  }`}
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] text-muted">{days[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          {orders.map(([id, name, product, total, status]) => (
            <div
              key={id}
              className="order-row flex items-center gap-3 sm:gap-4 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 text-sm"
            >
              <span className="text-muted text-xs">{id}</span>
              <span className="font-semibold hidden sm:inline">{name}</span>
              <span className="text-muted hidden md:inline text-xs">
                {product}
              </span>
              <span className="mr-auto font-black gold-text">{total}</span>
              <StatusChip label={status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusChip({ label }: { label: string }) {
  const style =
    label === "تم التسليم"
      ? "bg-emerald-400/15 text-emerald-300 border-emerald-400/25"
      : label === "في الشحن"
        ? "bg-sky-400/15 text-sky-300 border-sky-400/25"
        : "bg-gold/15 text-gold-soft border-gold/30";
  return (
    <span className={`text-[10px] px-2 py-1 rounded-full border ${style}`}>
      {label}
    </span>
  );
}
