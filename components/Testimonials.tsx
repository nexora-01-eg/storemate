const items = [
  ["«كنت بقعد ٣ سوايع أعمل أوردرات في نوت الموبايل.. دلوقتي بياخدوا نفسهم»", "هدي — هدي ستور، المنصورة"],
  ["«نسبة الغلط في الأوردرات بقت صفر. والعملاء بيستلموا تأكيد على طول»", "محمود — MZ فاشون، القاهرة"],
  ["«تقرير الأرباح فضحني 😂 بس خلاني أعرف أنهي منتج أعلن له»", "سارة — Sara's Closet، الإسكندرية"],
  ["«التحصيل بقى مرتب.. عارفة مين لسه مدفعش من غير دفتر وقلم»", "منة — منة هوم، طنطا"],
];

export default function Testimonials() {
  const row = [...items, ...items];
  return (
    <section className="py-24 overflow-hidden border-y border-white/[0.05] bg-ink-2">
      <p className="text-gold-soft text-sm font-bold tracking-widest text-center mb-12">
        الباعة بيقولوا إيه
      </p>
      <div className="marquee-mask relative">
        <div className="marquee-track flex gap-6 w-max pr-6">
          {row.map(([quote, who], i) => (
            <div
              key={i}
              className="glass card-hover rounded-2xl p-6 w-[320px] sm:w-[380px] shrink-0"
            >
              <p className="text-sm leading-relaxed">{quote}</p>
              <p className="mt-4 text-xs text-gold-soft font-bold">{who}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
