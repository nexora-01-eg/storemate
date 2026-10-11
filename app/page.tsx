import {
  MessageCircle,
  PackageCheck,
  Truck,
  BarChart3,
  Boxes,
  BellRing,
  Wallet,
  ShieldCheck,
  Star,
  Check,
  ChevronDown,
  Instagram,
  Facebook,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import ChatDemo from "@/components/ChatDemo";
import Reveal from "@/components/Reveal";
import GoldField from "@/components/GoldField";
import Magnetic from "@/components/Magnetic";
import ScrollFx from "@/components/ScrollFx";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import HeroTitle from "@/components/HeroTitle";
import DashboardMock from "@/components/DashboardMock";
import Testimonials from "@/components/Testimonials";
import Counter from "@/components/Counter";

const features = [
  {
    icon: MessageCircle,
    title: "أوردر أوتوماتيك من الواتساب",
    desc: "العميل يكتب عادي في الشات — والذكاء الاصطناعي يسجّل الطلب بالمقاس واللون والعنوان من غير ما تكتب حرف.",
  },
  {
    icon: BellRing,
    title: "تأكيد وتذكيرات تلقائية",
    desc: "رسايل تأكيد، متابعة شحن، وتذكير تحصيل فلوس — كل ده بيبعت نفسه في الوقت المناسب.",
  },
  {
    icon: Boxes,
    title: "مخزون بيحكم نفسه",
    desc: "المقاس اتخلص؟ الأعلان بيتقفل لوحده. رجع مخزون؟ بينوّر تاني. عمره ما هتبيع حاجة مش موجودة.",
  },
  {
    icon: Truck,
    title: "شحن وCOD مرتبين",
    desc: "بولص شحنة لشركة الشحن بكليكة، وتابع الفلوس اللي لسه محصّلها من كل عميلة.",
  },
  {
    icon: BarChart3,
    title: "تقارير تفهمها",
    desc: "مين أشتري أكتر؟ أنهي منتج بيبيع؟ صافي ربحك الشهر كام؟ بأرقام بسيطة بالجنيه المصري.",
  },
  {
    icon: ShieldCheck,
    title: "بيانات محفوظة ومؤمنة",
    desc: "عملاءك وأرقامهم مكانهم محفوظ — حتى لو ضاع الموبايل، المحل كله معاك.",
  },
];

const steps = [
  {
    n: "١",
    title: "اربط الواتساب",
    desc: "دقيقتين وتربط رقم محلك — من غير أي تقنية.",
  },
  {
    n: "٢",
    title: "ارفع منتجاتك",
    desc: "صوّر المنتجات أو استوردها من إنستجرام بضغطة.",
  },
  {
    n: "٣",
    title: "سيب الباقي علينا",
    desc: "الأوردرات والتأكيدات والشحن والتقارير بتشتغل لوحدها.",
  },
];

const plans = [
  {
    name: "بداية",
    price: "٣٩٩",
    desc: "لمحلك الصغير اللي بيبدأ",
    features: [
      "حتى ٥٠ أوردر شهرياً",
      "أوردر أوتوماتيك بالـAI",
      "كتالوج ومنتجات غير محدودة",
      "تأكيد واتساب تلقائي",
    ],
    cta: "ابدأ مجاناً ١٤ يوم",
    highlight: false,
  },
  {
    name: "نمو",
    price: "٧٩٩",
    desc: "الأشهر لبائعي إنستجرام",
    features: [
      "أوردرات غير محدودة",
      "كل مزايا بداية +",
      "مخزون ذكي + إعلانات متزامنة",
      "تقارير أرباح كاملة",
      "ربط شركات الشحن",
    ],
    cta: "جرّب نمو دلوقتي",
    highlight: true,
  },
  {
    name: "براند",
    price: "١٤٩٩",
    desc: "للبراندات والفرق الكبيرة",
    features: [
      "كل مزايا نمو +",
      "٤ أعضاء فريق بصلاحيات",
      "تقسيط وتحصيل آلي",
      "مدير حساب مخصص",
    ],
    cta: "كلمنا بيعمل إيه",
    highlight: false,
  },
];

const faqs = [
  [
    "أنا مش تقني خالص.. هقدر أستخدمه؟",
    "أكيد — صاحب المتجر مصمّم أصلاً للباعة مش للمبرمجين. الربط دقيقتين، والباقي كله بيشتغل لوحده. وفريق الدعم على الواتساب ٧ أيام في الأسبوع.",
  ],
  [
    "بيشتغل مع واتساب العادي ولا بيزيد فلوس؟",
    "بيشتغل مع WhatsApp Business العادي المجاني. لو عندك رقم تاني للمحل مش هتكلفك جنيه زيادة.",
  ],
  [
    "والعميلة هتحس إنها بتكلم بوت؟",
    "لأ — الرسايل بتفضل بنفس أسلوبك وبمصرية، والعميلة بتتكلم عادي. انت بس مش مضطر تدوّر في النوتات وتنسخ عناوين.",
  ],
  [
    "أدفع إزاي؟",
    "فودافون كاش، إنستاباي، أو بطاقة — وبالجنيه المصري طبعاً. وتقدر توقف في أي وقت من غير التزام.",
  ],
];

export default function Home() {
  return (
    <main className="relative">
      {/* ambient orbs */}
      <div className="glow-orb w-[480px] h-[480px] bg-gold/[0.07] -top-40 -left-40" />
      <div className="glow-orb w-[380px] h-[380px] bg-gold/[0.05] top-[45%] -right-52" />
      <div className="glow-orb w-[300px] h-[300px] bg-[#25d366]/[0.04] bottom-0 left-1/4" />

      <Cursor />
      <SmoothScroll />
      <Nav />
      <ScrollFx />
      <Hero />
      <Stats />
      <SocialProof />
      <Features />
      <DashboardShowcase />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass mt-4 rounded-2xl px-5 py-3 flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="w-9 h-9 rounded-xl btn-gold grid place-items-center !text-lg">
              ص
            </span>
            <span>
              صاحب المتجر
              <span className="block text-[10px] leading-none text-muted font-medium tracking-wide">
                StoreMate
              </span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted mr-4">
            <a href="#features" className="hover:text-gold-soft transition-colors">المزايا</a>
            <a href="#how" className="hover:text-gold-soft transition-colors">إزاي يشتغل</a>
            <a href="#pricing" className="hover:text-gold-soft transition-colors">الأسعار</a>
            <a href="#faq" className="hover:text-gold-soft transition-colors">أسئلة شائعة</a>
          </nav>
          <a
            href="#pricing"
            className="btn-gold rounded-xl px-5 py-2 text-sm font-bold mr-auto"
          >
            جرّبه مجاناً
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-4 sm:px-6 overflow-hidden">
      <GoldField />
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center relative">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-gold-soft mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              أول مساعد مبيعات ذكي لباعة السوشيال في مصر
            </div>
          </Reveal>
          <Reveal delay={100}>
            <HeroTitle />
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg">
              لو بتبيع على إنستجرام أو فيسبوك — سيبك من النوتات والشيتات.
              صاحب المتجر بيسجّل الطلبات، يؤكد للعملاء، يتابع الشحن، ويقولك
              ربحتك إيه — كل ده أوتوماتيك.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a href="#pricing" className="btn-gold rounded-xl px-7 py-3.5 font-bold inline-flex items-center gap-2">
                  ابدأ مجاناً — من غير بطاقة
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </Magnetic>
              <a
                href="#how"
                className="glass rounded-xl px-6 py-3.5 font-semibold text-sm hover:border-gold/40 transition-colors"
              >
                شوف إزاي بيشتغل
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-gold fill-gold" />
                تقييم ٤.٩ من الباعة
              </span>
              <span>·</span>
              <span>+٢٬٥٠٠ محل بيستخدموه</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="animate-float">
            <ChatDemo />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { to: 2500, suffix: "+", label: "محل بيستخدم المنصة" },
    { to: 1200000, suffix: "+", label: "أوردر اتسجل أوتوماتيك" },
    { to: 98, suffix: "٪", label: "رضا العملاء" },
    { to: 14, suffix: " يوم", label: "تجربة مجانية كاملة" },
  ];
  return (
    <section className="relative py-16 border-b border-white/[0.05]">
      <div className="mx-auto max-w-5xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <p className="text-3xl sm:text-4xl font-black gold-text">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs sm:text-sm text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function DashboardShowcase() {
  return (
    <section id="dashboard" className="relative py-28 px-4 sm:px-6 overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-gold/[0.06] top-20 left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-5xl relative">
        <Reveal>
          <p className="text-gold-soft text-sm font-bold tracking-widest text-center">
            من جوه
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-center leading-snug">
            شوف محلك وأنت <span className="gold-text">بتشرب قهوتك</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-14">
            <DashboardMock />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialProof() {
  const items = ["Instagram", "WhatsApp Business", "Facebook", "TikTok Shop"];
  return (
    <section className="py-10 border-y border-white/[0.06] bg-white/[0.01]">
      <Reveal>
        <div className="mx-auto max-w-5xl px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-muted/70 text-sm">
          <span className="font-bold text-muted">بيتكامل مع:</span>
          {items.map((s) => (
            <span key={s} className="flex items-center gap-2">
              {s === "Instagram" && <Instagram className="w-4 h-4" />}
              {s === "Facebook" && <Facebook className="w-4 h-4" />}
              {(s.startsWith("WhatsApp") || s.startsWith("TikTok")) && (
                <MessageCircle className="w-4 h-4" />
              )}
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-gold-soft text-sm font-bold tracking-widest text-center">
            المزايا
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-center leading-snug">
            كل اللي محلك محتاجه..
            <span className="gold-text"> في تطبيق واحد</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 120}>
              <div className="glass card-hover rounded-2xl p-7 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/30 grid place-items-center group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="w-5.5 h-5.5 text-gold-soft" />
                </div>
                <h3 className="mt-5 font-bold text-lg">{f.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="relative py-28 px-4 sm:px-6 bg-ink-2 border-y border-white/[0.05]">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-gold-soft text-sm font-bold tracking-widest text-center">
            إزاي بيشتغل
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-center">
            تلات خطوات و<span className="gold-text">محلك بقى نظام</span>
          </h2>
        </Reveal>
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-10 inset-x-24 h-px bg-gradient-to-l from-transparent via-gold/40 to-transparent" />
          <div className="grid md:grid-cols-3 gap-10 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 150}>
                <div className="text-center relative">
                  <div className="mx-auto w-20 h-20 rounded-full glass grid place-items-center text-3xl font-black gold-text relative z-10">
                    {s.n}
                  </div>
                  <h3 className="mt-6 font-bold text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted max-w-xs mx-auto leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-gold-soft text-sm font-bold tracking-widest text-center">
            الأسعار
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-center">
            أقل من <span className="gold-text">٢٧ جنيه في اليوم</span>
          </h2>
          <p className="mt-4 text-center text-muted">
            أرخص من موظفة متابعة أوردرز — وبتشتغل ٢٤ ساعة
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 130} className="h-full">
              <div
                className={`rounded-3xl p-8 h-full flex flex-col card-hover ${
                  p.highlight
                    ? "bg-gradient-to-b from-gold/[0.13] to-transparent border-2 border-gold/50 shadow-[0_0_60px_-15px_rgba(212,175,55,0.35)] md:-translate-y-3"
                    : "glass"
                }`}
              >
                {p.highlight && (
                  <span className="self-start mb-4 text-[11px] font-bold px-3 py-1 rounded-full bg-gold text-ink">
                    الأكثر اختياراً ⭐
                  </span>
                )}
                <h3 className="text-xl font-black">{p.name}</h3>
                <p className="text-sm text-muted mt-1">{p.desc}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-black gold-text">{p.price}</span>
                  <span className="text-sm text-muted mb-2">جنيه / شهر</span>
                </div>
                <ul className="mt-7 space-y-3.5 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4.5 h-4.5 mt-0.5 text-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 rounded-xl py-3 font-bold text-sm w-full ${
                    p.highlight ? "btn-gold" : "glass hover:border-gold/40"
                  } transition-all`}
                >
                  {p.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-xs text-muted flex items-center justify-center gap-2 flex-wrap">
            <Wallet className="w-4 h-4 text-gold-soft" />
            فودافون كاش · إنستاباي · بطاقة — وإلغاء في أي وقت
            <PackageCheck className="w-4 h-4 text-gold-soft mr-2" />
            ضمان استرجاع ١٤ يوم بدون أسئلة
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 bg-ink-2 border-y border-white/[0.05]">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-black text-center">
            أسئلة بتتكرر <span className="gold-text">كتير</span>
          </h2>
        </Reveal>
        <div className="mt-14 space-y-4">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 90}>
              <details className="group glass rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none p-5 font-bold select-none">
                  {q}
                  <ChevronDown className="w-5 h-5 text-gold shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 text-sm text-muted leading-relaxed">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 px-4 sm:px-6 overflow-hidden">
      <div className="glow-orb w-[420px] h-[420px] bg-gold/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Reveal>
        <div className="mx-auto max-w-3xl text-center relative">
          <h2 className="text-4xl sm:text-5xl font-black leading-snug">
            محلك يستاهل <span className="gold-text">نظام حقيقي</span>
            <br />
            حتى لو بيبدأ من موبايل
          </h2>
          <p className="mt-6 text-lg text-muted">
            جرّب ١٤ يوم مجاناً — لو مش وفرلك وقت، امشي من غير ما تدفع مليم.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic strength={0.45}>
              <a href="#pricing" className="btn-gold rounded-xl px-9 py-4 font-bold text-lg inline-block">
                ابدأ دلوقتي
              </a>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div className="flex items-center gap-2 font-bold">
          <span className="w-7 h-7 rounded-lg btn-gold grid place-items-center text-sm">
            ص
          </span>
          صاحب المتجر
        </div>
        <p className="text-xs">صُنع بفخر في مصر 🇪🇬 — جميع الأسعار بالجنيه المصري</p>
        <div className="flex items-center gap-4 text-xs">
          <a href="#" className="hover:text-gold-soft">الشروط</a>
          <a href="#" className="hover:text-gold-soft">الخصوصية</a>
          <a href="#" className="hover:text-gold-soft">تواصل معنا</a>
        </div>
      </div>
    </footer>
  );
}
