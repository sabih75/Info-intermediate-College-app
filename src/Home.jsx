import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const LOGO = "/logo.png";
const PRINCIPAL = "/principal.jpg";

/* ─── Reusable animated wrapper ─────────────────────────────────────── */
function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section heading helper ─────────────────────────────────────────── */
function SectionHeading({ eyebrow, title, highlight, center = true }) {
  return (
    <div className={center ? "text-center mb-14" : "mb-10"}>
      <span className="text-[#800000] text-xs font-black tracking-[0.3em] uppercase block mb-3">
        {eyebrow}
      </span>
      <h2
        className="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}{" "}
        {highlight && <span className="text-[#800000]">{highlight}</span>}
      </h2>
      <div className={`w-16 h-1 bg-[#FFD700] mt-4 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

/* ─── DATA ───────────────────────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "20+", label: "Expert Faculty" },
  { value: "15+", label: "Years of Excellence" },
  { value: "95%", label: "Board Pass Rate" },
];

const programs = [
  {
    icon: "🔬",
    title: "Pre-Medical",
    subtitle: "F.Sc Science Faculty",
    subjects: ["Biology", "Chemistry", "Physics", "Mathematics", "English"],
    desc: "Grooming future doctors and healthcare professionals with rigorous science fundamentals.",
  },
  {
    icon: "⚙️",
    title: "Pre-Engineering",
    subtitle: "F.Sc Science Faculty",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer", "English"],
    desc: "Preparing tomorrow's engineers and scientists through applied sciences.",
  },
  {
    icon: "💻",
    title: "ICS",
    subtitle: "Computer Science",
    subjects: ["Computer Science", "Mathematics", "Statistics", "Physics", "English"],
    desc: "A tech-forward curriculum bridging computing theory with programming skills.",
  },
  {
    icon: "📊",
    title: "I.Com",
    subtitle: "Commerce Faculty",
    subjects: ["Principles of Acc.", "Business Maths", "Economics", "Business Stats", "English"],
    desc: "Building commerce graduates ready for banking, business, and financial careers.",
  },
];

const faculty = [
  { name: "Sir Umair Khan", subject: "Mathematics", qual: "M.Sc Mathematics", exp: "10+ yrs", initial: "U" },
  { name: "Dr. Asif Rehman", subject: "Physics", qual: "Ph.D Physics", exp: "12+ yrs", initial: "A" },
  { name: "Ms. Sana Tariq", subject: "Biology", qual: "M.Sc Zoology", exp: "8+ yrs", initial: "S" },
  { name: "Mr. Bilal Akhtar", subject: "Computer Science", qual: "M.S CS", exp: "7+ yrs", initial: "B" },
  { name: "Ms. Nadia Hussain", subject: "Chemistry", qual: "M.Sc Chemistry", exp: "9+ yrs", initial: "N" },
  { name: "Mr. Faisal Malik", subject: "English", qual: "MA English Lit.", exp: "11+ yrs", initial: "F" },
];

const features = [
  { icon: "🏛️", title: "State-of-the-Art Labs", desc: "Fully equipped Physics, Chemistry, Biology & CS labs" },
  { icon: "📚", title: "Smart Classrooms", desc: "Interactive digital boards and multimedia learning tools" },
  { icon: "🏆", title: "Board Toppers", desc: "Consistent district and provincial position holders" },
  { icon: "🛡️", title: "Disciplined Environment", desc: "Zero-tolerance policy; structured, focused atmosphere" },
  { icon: "📝", title: "Regular Assessments", desc: "Weekly tests, monthly exams, and mock board papers" },
  { icon: "🤝", title: "Parental Engagement", desc: "Monthly PTMs and real-time academic progress updates" },
];

/* ══════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const [form, setForm] = useState({ name: "", father: "", phone: "", email: "", program: "", grade: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", father: "", phone: "", email: "", program: "", grade: "", message: "" });
  }

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#800000] via-[#6b0000] to-[#2d0000]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,215,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FFD700]/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#FFD700]/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        {/* Stars row */}
        <div className="absolute top-8 left-0 right-0 flex justify-center gap-6 pointer-events-none">
          {[...Array(9)].map((_, i) => (
            <motion.span
              key={i}
              className="text-[#FFD700]/30 text-lg"
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 2.5, delay: i * 0.25, repeat: Infinity }}
            >
              ★
            </motion.span>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">

          {/* Admissions badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#FFD700]/15 border border-[#FFD700]/40 text-[#FFD700] text-xs font-bold tracking-widest uppercase px-4 py-2 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-pulse" />
            Admissions Open — Session 2025–26
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, type: "spring", bounce: 0.35 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-4 border-[#FFD700] overflow-hidden shadow-2xl bg-white">
                <img src={LOGO} alt="INFO Intermediate College Logo" className="w-full h-full object-cover" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-[#FFD700]/40"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Building{" "}
            <span className="text-[#FFD700]">Strong Foundations</span>
            <br />
            for Your Future.
          </motion.h1>

          {/* Motto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            {["Knowledge", "Wisdom", "Awareness"].map((w, i) => (
              <span key={w} className="flex items-center gap-4">
                <span className="text-[#FFD700] font-bold tracking-widest uppercase text-sm md:text-base">{w}</span>
                {i < 2 && <span className="w-1.5 h-1.5 bg-[#FFD700]/50 rounded-full" />}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/65 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A disciplined, nurturing academic environment where every student is empowered to achieve their highest potential.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#admissions"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,215,0,0.45)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#FFD700] text-[#800000] font-black px-8 py-4 tracking-widest uppercase text-sm shadow-xl"
            >
              + Apply Now
            </motion.a>
            <motion.a
              href="#academics"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-white/40 text-white hover:border-[#FFD700] hover:text-[#FFD700] font-bold px-8 py-4 tracking-widest uppercase text-sm transition-colors duration-200"
            >
              Explore Programs →
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/25 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#FFD700]/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <div className="bg-[#FFD700] py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <p className="text-[#800000] font-black text-3xl md:text-4xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {s.value}
              </p>
              <p className="text-[#800000]/65 text-xs font-bold tracking-widest uppercase mt-1">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <Reveal direction="left">
              <span className="text-[#800000] text-xs font-black tracking-[0.3em] uppercase block mb-4">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                A Legacy of <span className="text-[#800000]">Academic Excellence</span>
              </h2>
              <div className="w-16 h-1 bg-[#FFD700] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                INFO Intermediate College has been a pillar of quality intermediate education for over 15 years.
                Founded with a vision to provide accessible yet premium education, we have consistently produced
                district toppers and university merit candidates.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our philosophy combines disciplined academic rigor with holistic personality development —
                ensuring every graduate enters higher education with confidence, character, and competence.
              </p>
              <div className="flex flex-wrap gap-3">
                {["BISE Affiliated", "FBISE Recognized", "HEC Approved", "Result-Oriented"].map((tag) => (
                  <span key={tag} className="border border-[#800000]/25 text-[#800000] text-xs font-bold px-3 py-1.5 tracking-wide bg-[#800000]/5">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="relative bg-gradient-to-br from-[#800000] to-[#5a0000] p-8 text-white">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFD700]/10 rounded-bl-full" />
                <div className="text-4xl mb-5">🎓</div>
                <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Our Mission
                </h3>
                <p className="text-white/75 leading-relaxed text-sm mb-6">
                  To deliver transformative intermediate education that equips students with the intellectual tools,
                  moral compass, and practical skills needed to excel in an ever-evolving world.
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/20">
                  <div className="w-10 h-10 rounded-full border-2 border-[#FFD700] overflow-hidden bg-white">
                    <img src={LOGO} alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-[#FFD700] text-sm">INFO Intermediate College</p>
                    <p className="text-white/50 text-xs">Rawalpindi, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-[#FFD700] -z-10" />
            </Reveal>

          </div>
        </div>
      </section>

      {/* ═══════════════ ACADEMICS ═══════════════ */}
      <section id="academics" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="Academic Programs" title="Choose Your" highlight="Path" />
          </Reveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {programs.map((prog, i) => (
              <Reveal key={prog.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(128,0,0,0.12)" }}
                  className="bg-white border border-gray-100 overflow-hidden transition-all duration-300 h-full"
                >
                  <div className="bg-[#800000] px-5 py-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFD700]/10 rounded-bl-full" />
                    <span className="text-3xl block mb-3">{prog.icon}</span>
                    <h3 className="text-white font-black text-lg leading-tight"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {prog.title}
                    </h3>
                    <p className="text-[#FFD700]/80 text-xs font-semibold tracking-wide mt-1">{prog.subtitle}</p>
                  </div>
                  <div className="px-5 py-5 border-b-4 border-[#FFD700]">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{prog.desc}</p>
                    <div className="space-y-1.5">
                      {prog.subjects.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#800000] rounded-full flex-shrink-0" />
                          <span className="text-gray-600 text-xs">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRINCIPAL ═══════════════ */}
      <section id="principal" className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="Leadership" title="A Message from the" highlight="Principal" />
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Photo */}
            <Reveal direction="left" className="lg:col-span-2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute -inset-3 border-2 border-[#FFD700]/30" />
                <div className="absolute -inset-1.5 border-2 border-[#800000]/20" />
                <div className="relative w-64 sm:w-72 overflow-hidden border-4 border-[#800000] shadow-2xl">
                  <img
                    src={PRINCIPAL}
                    alt="Sir Umair Khan — Principal"
                    className="w-full object-cover object-top"
                    style={{ aspectRatio: "3/4" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#800000]/95 to-transparent px-4 py-5">
                    <p className="text-[#FFD700] font-black text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      Sir Umair Khan
                    </p>
                    <p className="text-white/80 text-xs tracking-wider uppercase">Principal & Mathematics Expert</p>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-[#FFD700] text-[#800000] px-3 py-2 shadow-xl">
                  <p className="font-black text-xs tracking-widest uppercase">M.Sc Mathematics</p>
                  <p className="text-[#800000]/70 text-xs">10+ Years Experience</p>
                </div>
              </div>
              <div className="mt-12 flex gap-3">
                <a href="tel:+923253629755" className="bg-[#800000] text-white text-xs font-bold px-4 py-2.5 tracking-wide hover:bg-[#6b0000] transition-colors">
                  📞 Call Us
                </a>
                <a href="https://wa.me/923253629755" target="_blank" rel="noreferrer"
                  className="bg-green-600 text-white text-xs font-bold px-4 py-2.5 tracking-wide hover:bg-green-700 transition-colors">
                  💬 WhatsApp
                </a>
              </div>
            </Reveal>

            {/* Message */}
            <Reveal direction="right" className="lg:col-span-3">
              <div className="relative bg-gray-50 border border-gray-100 p-8">
                <span className="absolute -top-5 -left-2 text-[#800000]/8 text-[110px] leading-none font-serif select-none" aria-hidden>
                  "
                </span>
                <div className="relative z-10">
                  <p className="text-gray-700 text-lg leading-relaxed mb-5 italic"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    "At INFO Intermediate College, we believe every student is gifted with potential waiting to be
                    unlocked. Our role as educators is not just to deliver syllabi — it is to inspire curiosity,
                    build character, and prepare young minds for the challenges of tomorrow."
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    Mathematics teaches us that every problem has a solution — and that principle guides our
                    entire approach to education. We set high expectations because we believe deeply in our
                    students' capabilities.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    I personally invite you to visit INFO Intermediate College, speak with our teachers, and
                    experience the environment we've built. We are not just a college — we are a launchpad for
                    Pakistan's brightest futures.
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t-2 border-[#FFD700]/50">
                    <div>
                      <p className="font-black text-[#800000] text-xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        Sir Umair Khan
                      </p>
                      <p className="text-gray-500 text-sm">Principal — INFO Intermediate College</p>
                      <p className="text-[#800000]/60 text-xs mt-1">M.Sc Mathematics • 10+ Years in Education</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-5">
                {[
                  { icon: "📐", title: "Specialist", desc: "Mathematics & Calculus" },
                  { icon: "🏆", title: "Results", desc: "95%+ Board Pass Rate" },
                  { icon: "💡", title: "Vision", desc: "Student-First Philosophy" },
                ].map((item) => (
                  <div key={item.title} className="bg-[#800000] text-white p-4 text-center">
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <p className="font-bold text-[#FFD700] text-xs tracking-wide uppercase">{item.title}</p>
                    <p className="text-white/65 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ═══════════════ FACULTY ═══════════════ */}
      <section id="faculty" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="Our Educators" title="Expert" highlight="Faculty" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {faculty.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "#FFD700" }}
                  className="bg-white border-2 border-gray-100 p-5 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#800000] flex items-center justify-center text-[#FFD700] font-black text-xl flex-shrink-0">
                      {m.initial}
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {m.name}
                      </h3>
                      <p className="text-[#800000] text-xs font-bold tracking-wide mt-0.5">{m.subject}</p>
                      <p className="text-gray-500 text-xs mt-1">{m.qual}</p>
                      <p className="text-gray-400 text-xs">{m.exp} experience</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY US ═══════════════ */}
      <section className="py-24 bg-[#800000] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,215,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-[#FFD700] text-xs font-black tracking-[0.3em] uppercase block mb-3">Our Advantages</span>
              <h2 className="text-4xl md:text-5xl font-black text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Why Choose <span className="text-[#FFD700]">INFO College?</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 border border-white/15 hover:border-[#FFD700]/50 hover:bg-white/15 p-6 transition-all duration-300"
                >
                  <span className="text-3xl block mb-4">{f.icon}</span>
                  <h3 className="text-[#FFD700] font-black text-base mb-2">{f.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ADMISSIONS ═══════════════ */}
      <section id="admissions" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SectionHeading eyebrow="Enroll Today" title="Start Your" highlight="Application" />
            <p className="text-gray-500 text-center max-w-xl mx-auto -mt-8 mb-14">
              Fill in the form below for Class 9th or Intermediate admissions. Our team will contact you within 24 hours.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form */}
            <Reveal direction="left" className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <div className="w-20 h-20 bg-[#FFD700] flex items-center justify-center text-4xl mb-5 rounded-full">✓</div>
                  <h3 className="text-2xl font-black text-[#800000]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Application Received!
                  </h3>
                  <p className="text-gray-500 mt-2">We'll contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { key: "name", label: "Student Name *", placeholder: "Full name", required: true },
                      { key: "father", label: "Father's Name *", placeholder: "Father's full name", required: true },
                    ].map(({ key, label, placeholder, required }) => (
                      <div key={key}>
                        <label className="block text-xs font-black tracking-wider text-gray-700 uppercase mb-2">{label}</label>
                        <input
                          required={required}
                          type="text"
                          value={form[key]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          placeholder={placeholder}
                          className="w-full border-2 border-gray-200 focus:border-[#800000] px-4 py-3 text-sm outline-none transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-black tracking-wider text-gray-700 uppercase mb-2">Phone *</label>
                      <input
                        required type="tel" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="03XX-XXXXXXX"
                        className="w-full border-2 border-gray-200 focus:border-[#800000] px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black tracking-wider text-gray-700 uppercase mb-2">Email</label>
                      <input
                        type="email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full border-2 border-gray-200 focus:border-[#800000] px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-black tracking-wider text-gray-700 uppercase mb-2">Program *</label>
                      <select
                        required value={form.program}
                        onChange={(e) => setForm({ ...form, program: e.target.value })}
                        className="w-full border-2 border-gray-200 focus:border-[#800000] px-4 py-3 text-sm outline-none transition-colors bg-white"
                      >
                        <option value="">Select Program</option>
                        <option>Class 9th (Matric)</option>
                        <option>Class 10th (Matric)</option>
                        <option>F.Sc Pre-Medical (Part I)</option>
                        <option>F.Sc Pre-Engineering (Part I)</option>
                        <option>ICS (Part I)</option>
                        <option>I.Com (Part I)</option>
                        <option>F.Sc Part II (Continuation)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black tracking-wider text-gray-700 uppercase mb-2">Previous Grade</label>
                      <input
                        type="text" value={form.grade}
                        onChange={(e) => setForm({ ...form, grade: e.target.value })}
                        placeholder="e.g. 85% or A1"
                        className="w-full border-2 border-gray-200 focus:border-[#800000] px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black tracking-wider text-gray-700 uppercase mb-2">Message</label>
                    <textarea
                      rows={3} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Any questions or special requirements..."
                      className="w-full border-2 border-gray-200 focus:border-[#800000] px-4 py-3 text-sm outline-none transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,215,0,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#FFD700] text-[#800000] font-black py-4 tracking-widest uppercase text-sm shadow-lg"
                  >
                    Submit Application →
                  </motion.button>
                </form>
              )}
            </Reveal>

            {/* Info sidebar */}
            <Reveal direction="right" className="lg:col-span-2 space-y-5">
              <div className="bg-[#800000] text-white p-6">
                <h3 className="text-[#FFD700] font-black text-lg mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Documents Required
                </h3>
                <ul className="space-y-2.5 text-sm text-white/75">
                  {[
                    "Attested copy of previous result card",
                    "Original Transfer Certificate (TC)",
                    "4 passport-size photographs",
                    "Student B-Form / CNIC copy",
                    "Parent/Guardian CNIC copy",
                    "Domicile certificate (if applicable)",
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-2">
                      <span className="text-[#FFD700] mt-0.5 flex-shrink-0">▸</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-2 border-gray-100 p-6 space-y-4">
                <h3 className="font-black text-gray-900 text-base" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Contact Us Directly
                </h3>
                {[
                  { icon: "📍", label: "Address", value: "INFO College Campus, Rawalpindi, Punjab" },
                  { icon: "📞", label: "Phone", value: "+92-325-3629755" },
                  { icon: "💬", label: "WhatsApp", value: "+92-325-3629755" },
                  { icon: "🕐", label: "Office Hours", value: "Mon–Sat: 8:00 AM – 4:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs font-black text-[#800000] tracking-wider uppercase">{item.label}</p>
                      <p className="text-gray-600 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer id="contact" className="bg-[#1a0000] text-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full border-2 border-[#FFD700] overflow-hidden bg-white">
                  <img src={LOGO} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[#FFD700] font-black text-sm tracking-wider uppercase">INFO Intermediate</p>
                  <p className="text-white/45 text-xs">College — Rawalpindi</p>
                </div>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">
                Nurturing Pakistan's brightest minds through disciplined academics and character development.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Knowledge", "Wisdom", "Awareness"].map((w) => (
                  <span key={w} className="bg-[#800000]/50 text-[#FFD700]/65 text-xs px-2 py-1">{w}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[#FFD700] font-black text-xs tracking-[0.3em] uppercase mb-5">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Academics", "Principal", "Faculty", "Admissions"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`}
                      className="text-white/45 hover:text-[#FFD700] text-sm transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#FFD700]/35 rounded-full" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#FFD700] font-black text-xs tracking-[0.3em] uppercase mb-5">Programs</h4>
              <ul className="space-y-2">
                {["F.Sc Pre-Medical", "F.Sc Pre-Engineering", "ICS (Computer Science)", "I.Com", "Matric (9th & 10th)"].map((p) => (
                  <li key={p}>
                    <a href="#academics" className="text-white/45 hover:text-[#FFD700] text-sm transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#FFD700]/35 rounded-full" />
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/25 text-xs">© {new Date().getFullYear()} INFO Intermediate College, Rawalpindi. All rights reserved.</p>
            <p className="text-white/25 text-xs">Designed for Academic Excellence</p>
          </div>
        </div>
      </footer>

      {/* ═══════════════ FLOATING WHATSAPP ═══════════════ */}
      <motion.a
        href="https://wa.me/923253629755"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", bounce: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-colors"
      >
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <svg className="w-7 h-7 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </>
  );
}
