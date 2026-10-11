"use client";

import { useEffect, useState } from "react";
import {
  CheckCheck,
  Package,
  MessageCircle,
  Truck,
  Banknote,
} from "lucide-react";

type Step =
  | "idle"
  | "msg1"
  | "msg2"
  | "order"
  | "confirm"
  | "ship";

const messages = [
  { from: "customer", text: "أهلاً 👋 عايزة الفستان الأسود مقاس L" },
  { from: "customer", text: "والتوصيل لـ المعادي" },
];

export default function ChatDemo() {
  const [step, setStep] = useState<Step>("idle");

  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = [];
    const seq: { at: number; s: Step }[] = [
      { at: 800, s: "msg1" },
      { at: 1800, s: "msg2" },
      { at: 2900, s: "order" },
      { at: 4200, s: "confirm" },
      { at: 5600, s: "ship" },
    ];
    seq.forEach(({ at, s }) => t.push(setTimeout(() => setStep(s), at)));
    const loop = setTimeout(() => setStep("idle"), 9500);
    return () => {
      t.forEach(clearTimeout);
      clearTimeout(loop);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="glass rounded-3xl p-5 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-3 pb-4 border-b border-white/10">
          <div className="relative pulse-ring">
            <div className="w-11 h-11 rounded-full bg-[#25d366]/20 grid place-items-center">
              <MessageCircle className="w-5 h-5 text-[#25d366]" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold">سارة محمد</p>
            <p className="text-xs text-muted">عميلة جديدة — من إنستجرام</p>
          </div>
          <span className="mr-auto text-[10px] px-2 py-1 rounded-full bg-gold/15 text-gold-soft border border-gold/25">
            StoreMate AI
          </span>
        </div>

        <div className="min-h-[300px] py-4 space-y-3">
          {step !== "idle" && (
            <>
              <Bubble
                side="in"
                text={messages[0].text}
                show={step >= "msg1"}
                k={1}
              />
              <Bubble
                side="in"
                text={messages[1].text}
                show={step >= "msg2"}
                k={2}
              />
            </>
          )}

          {step >= "order" && step !== "idle" && (
            <OrderCard k={3} />
          )}

          {step >= "confirm" && step !== "idle" && (
            <Bubble
              side="out"
              text="تم تأكيد طلبك ✅ هيتشحن خلال ٢٤ ساعة — شكراً لثقتك 🌟"
              show
              k={4}
            />
          )}

          {step >= "ship" && step !== "idle" && (
            <div className="msg-in flex justify-center" key={"s5"}>
              <div className="flex items-center gap-2 text-xs px-4 py-2 rounded-full glass">
                <Truck className="w-4 h-4 text-gold-soft" />
                <span>الطلب في الطريق — الدفع عند الاستلام</span>
                <Banknote className="w-4 h-4 text-gold-soft" />
              </div>
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-muted text-xs">
          <Package className="w-4 h-4" />
          <span>كل رسالة بتتحول لطلب منظّم تلقائياً</span>
          <CheckCheck className="w-4 h-4 mr-auto text-gold" />
        </div>
      </div>
    </div>
  );
}

function Bubble({
  side,
  text,
  show,
  k,
}: {
  side: "in" | "out";
  text: string;
  show?: boolean;
  k?: number;
}) {
  if (!show) return null;
  return (
    <div
      key={`b-${k}`}
      className={`msg-in max-w-[85%] text-sm leading-relaxed px-4 py-2.5 rounded-2xl ${
        side === "in"
          ? "bg-white/[0.06] border border-white/10 ml-auto"
          : "bg-gradient-to-l from-gold/25 to-gold/10 border border-gold/30 mr-auto"
      }`}
    >
      {text}
      {side === "out" && (
        <CheckCheck className="inline w-3.5 h-3.5 mr-1 text-gold" />
      )}
    </div>
  );
}

function OrderCard({ k }: { k: number }) {
  return (
    <div key={`o-${k}`} className="msg-in mr-auto w-[92%]">
      <div className="rounded-2xl overflow-hidden border border-gold/40 bg-gradient-to-b from-gold/[0.12] to-transparent">
        <div className="flex items-center gap-2 px-4 py-2 bg-gold/15 text-gold-soft text-xs font-bold">
          <Package className="w-4 h-4" />
          أوردر جديد #١٠٤٧ — اتسجل أوتوماتيك
        </div>
        <div className="px-4 py-3 space-y-2 text-sm">
          {[
            ["المنتج", "فستان أسود — مقاس L"],
            ["المنطقة", "المعادي — القاهرة"],
            ["الإجمالي", "٨٥٠ جنيه (COD)"],
          ].map(([k2, v]) => (
            <div key={k2} className="flex items-center justify-between">
              <span className="text-muted">{k2}</span>
              <span className="font-semibold">{v}</span>
            </div>
          ))}
        </div>
        <div className="h-[3px] shimmer-line" />
      </div>
    </div>
  );
}
