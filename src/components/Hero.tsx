import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { profile, projects, type ProfileId } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';

const specialties = [
  { icon: '⌘', text: 'AI / ML Systems' },
  { icon: '▣', text: 'Full-Stack Development' },
  { icon: '▤', text: 'IoT & Embedded AI' },
  { icon: '⬡', text: 'Research & Publications' },
  { icon: '✦', text: 'Hackathons & Products' },
  { icon: '↗', text: 'Startup & Innovation' },
];
const orbitRoles = [
  { icon: '✺', text: 'AI Engineer' },
  { icon: '⌘', text: 'Developer' },
  { icon: '↗', text: 'Builder' },
  { icon: '✧', text: 'Student' },
  { icon: '♙', text: 'Researcher' },
  { icon: '✦', text: 'Entrepreneur' },
];
const prompts = ['Show me your projects', 'Your hackathons?', 'About your startup?', 'Why AI & DS?'];

export default function Hero({
  onPlay,
  onResume: _onResume,
  profileId: _profileId,
}: {
  onPlay: () => void;
  onResume: () => void;
  profileId: ProfileId;
}) {
  const { scrollTo } = useSmoothScroll();
  const [prompt, setPrompt] = useState('');
  const openAssistant = (question?: string) => {
    const q = (question ?? prompt).trim();
    if (q) window.dispatchEvent(new CustomEvent('jv-assistant-ask', { detail: q }));
    setPrompt('');
    scrollTo('#assistant', { offset: -80 });
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openAssistant();
  };

  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#08070b] text-bone">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_71%_37%,rgba(123,18,41,.38),transparent_75%),radial-gradient(ellipse_60%_45%_at_35%_85%,rgba(94,14,39,.15),transparent_80%),linear-gradient(120deg,#09080d_10%,#150910_85%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[.12] [background-image:radial-gradient(rgba(255,255,255,.5)_0.5px,transparent_0.5px)] [background-size:24px_24px]" />

      <div className="gutter relative mx-auto max-w-[1750px] pb-10 pt-[92px] sm:pt-[105px] lg:pt-[100px]">
        <div className="grid min-h-[520px] items-center gap-6 lg:grid-cols-[1.02fr_.98fr] xl:min-h-[505px]">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .85 }}
            className="relative z-20 pt-6 lg:pt-0"
          >
            <p className="font-semibold tracking-[.25em] text-[#ff6b88] text-xs sm:text-sm">V. JAIVIDHYARTHI (JV)</p>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[.37em] text-white/75 sm:text-xs">AI &amp; DATA SCIENCE ENGINEER</p>
            <h1 className="mt-7 max-w-[780px] font-sans font-black leading-[1.04] tracking-[-.04em] text-white" style={{ fontSize: 'clamp(2.65rem,4.25vw,5rem)' }}>
              Don’t just read my<br />portfolio. <span className="font-serif font-normal italic tracking-[-.035em] text-[#ff9cae] drop-shadow-[0_0_24px_rgba(255,90,125,.45)]">Interact with it.</span>
            </h1>
            <p className="mt-5 max-w-[660px] text-sm leading-[1.65] text-white/80 sm:text-base">
              Hi, I’m JV — a B.Tech AI &amp; Data Science student, researcher, builder, and aspiring entrepreneur. I build AI systems, ship real-world solutions, and explore the intersection of research, product, and impact.
            </p>
            <div className="mt-5 flex max-w-[760px] flex-wrap gap-2">
              {specialties.map(chip => (
                <span key={chip.text} className="flex items-center gap-2 rounded-full border border-[#ff8298]/35 bg-[#1b1119]/75 px-3 py-2 text-[11px] font-medium text-white/85 backdrop-blur-sm sm:text-xs">
                  <span className="text-base leading-none text-[#ff718e]">{chip.icon}</span>{chip.text}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <button type="button" onClick={onPlay} className="rounded-full border border-[#ff9aa9] bg-gradient-to-r from-[#c92042] to-[#ed4261] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_28px_rgba(239,47,84,.35)] transition hover:scale-[1.03] hover:shadow-[0_0_38px_rgba(239,47,84,.5)]">
                ▶ &nbsp; Watch My Trailer
              </button>
              <button type="button" onClick={() => openAssistant()} className="rounded-full border border-[#ed8196]/60 bg-black/30 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#e93a57]/15">
                ◉ &nbsp; Ask My AI Assistant
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32, scale: .96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: .1 }}
            className="relative mx-auto flex h-[370px] w-full max-w-[740px] items-end justify-center sm:h-[500px] lg:h-[520px]"
          >
            {/* Animated orbital ring and rotating skill labels. */}
            <div aria-hidden className="absolute left-1/2 top-[47%] h-[80%] aspect-square max-h-[515px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(176,20,58,.18),transparent_67%)] blur-xl" />
            <motion.div
              aria-hidden="true"
              style={{ x: "-50%", y: "-50%" }}
              className="pointer-events-none absolute left-1/2 top-[47%] aspect-square h-[76%] max-h-[500px] rounded-full border border-[#ff718c]/65 shadow-[0_0_50px_rgba(244,47,84,.26),inset_0_0_60px_rgba(255,61,90,.07)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
            >
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd6df] shadow-[0_0_17px_6px_rgba(255,90,125,.85)]" />
              <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#ff557e] shadow-[0_0_14px_4px_rgba(255,90,125,.6)]" />
            </motion.div>

            {/* Orbiting role cards remain upright as their orbit turns. */}
            <motion.div
              style={{ x: "-50%", y: "-50%" }}
              className="pointer-events-none absolute left-1/2 top-[47%] z-30 hidden aspect-square h-[81%] max-h-[540px] sm:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 52, ease: 'linear', repeat: Infinity }}
            >
              {orbitRoles.map((role, index) => {
                const angle = -Math.PI / 2 + (Math.PI * 2 * index) / orbitRoles.length;
                return (
                  <div
                    key={role.text}
                    className="absolute"
                    style={{
                      left: `${50 + 49 * Math.cos(angle)}%`,
                      top: `${50 + 49 * Math.sin(angle)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 52, ease: 'linear', repeat: Infinity }}
                      className="flex whitespace-nowrap items-center gap-2 rounded-2xl border border-[#ff8298]/45 bg-[#28141d]/90 px-3 py-2 text-[11px] font-semibold text-white shadow-[0_0_24px_rgba(243,62,95,.14)] backdrop-blur-md lg:px-4 lg:text-xs"
                    >
                      <span className="text-lg text-[#ff90a1]">{role.icon}</span>{role.text}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* The uploaded PNG itself has real transparency—no hard-coded face clipping. */}
            <img
              src={profile.portrait.src}
              alt="Jaividhyarthi"
              className="pointer-events-none relative z-20 h-full w-auto max-w-[94%] object-contain object-bottom drop-shadow-[0_16px_45px_rgba(0,0,0,.5)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_79%,transparent_100%)]"
            />
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[14%] bg-gradient-to-t from-[#10080f] to-transparent" />
          </motion.div>
        </div>

        {/* Always-visible teaser, separate from the full chat section below. */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, delay: .35 }}
          className="relative z-30 mt-3 grid items-center gap-5 overflow-hidden rounded-[27px] border border-[#f16885]/50 bg-[linear-gradient(110deg,#230f19_0%,#1a1119_55%,#1a0a13_100%)] px-5 py-5 shadow-[0_0_38px_rgba(220,45,83,.12)] sm:px-7 lg:grid-cols-[.95fr_1.05fr]"
        >
          <div className="flex items-center gap-4">
            <div aria-hidden="true" className="relative flex h-24 w-20 shrink-0 items-center justify-center sm:h-28 sm:w-28">
              <svg viewBox="0 0 120 130" className="h-full w-full overflow-visible drop-shadow-[0_0_18px_rgba(255,91,128,.4)]">
                <defs>
                  <linearGradient id="robot-shell" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff6f7"/><stop offset="1" stopColor="#aa7892"/></linearGradient>
                  <radialGradient id="robot-screen"><stop stopColor="#342034"/><stop offset="1" stopColor="#120d1c"/></radialGradient>
                </defs>
                <rect x="30" y="81" width="60" height="51" rx="22" fill="url(#robot-shell)" stroke="#ff91ac" strokeWidth="2.5"/>
                <rect x="45" y="96" width="30" height="19" rx="8" fill="#2d1428" stroke="#ef708f" strokeWidth="2"/>
                <text x="60" y="109" fill="#ffb6cd" fontSize="11" fontWeight="bold" textAnchor="middle">JV</text>
                <path d="M31 95 Q16 86 13 108 M89 95 Q107 78 112 95" fill="none" stroke="url(#robot-shell)" strokeWidth="13" strokeLinecap="round"/>
                <circle cx="14" cy="109" r="8" fill="#f8d5df" stroke="#ff829d" strokeWidth="2"/>
                <circle cx="111" cy="95" r="7" fill="#f8d5df" stroke="#ff829d" strokeWidth="2"/>
                <rect x="7" y="12" width="106" height="78" rx="37" fill="url(#robot-shell)" stroke="#ff91ac" strokeWidth="3"/>
                <rect x="19" y="22" width="82" height="58" rx="27" fill="url(#robot-screen)" stroke="#ed7899" strokeWidth="1.8"/>
                <path d="M36 49 q10 -15 20 0 M65 49 q10 -15 20 0" fill="none" stroke="#ff8aac" strokeWidth="5" strokeLinecap="round"/>
                <path d="M50 61 q10 11 20 0" fill="none" stroke="#ff8aac" strokeWidth="3" strokeLinecap="round"/>
                <rect x="3" y="42" width="13" height="24" rx="6" fill="#eea7bd" stroke="#ff648e" strokeWidth="2"/>
                <rect x="104" y="42" width="13" height="24" rx="6" fill="#eea7bd" stroke="#ff648e" strokeWidth="2"/>
                <ellipse cx="60" cy="88" rx="24" ry="2" fill="#ed89a3" opacity=".4"/>
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[.3em] text-[#ff7890] sm:text-xs">MEET MY AI ASSISTANT</p>
              <h2 className="mt-1 font-sans text-[clamp(1.4rem,2.35vw,2.5rem)] font-bold leading-tight tracking-tight text-white">
                Ask My <span className="text-[#ff8fa4]">AI Assistant</span>
              </h2>
              <p className="mt-1 max-w-lg text-xs leading-relaxed text-white/70 sm:text-sm">Explore my projects, achievements, skills and experience through an interactive portfolio assistant.</p>
            </div>
          </div>
          <div className="min-w-0">
            <form onSubmit={submit} className="flex items-center gap-2 rounded-full border border-white/35 bg-[#211d27]/80 p-1.5 pl-4 shadow-[inset_0_0_12px_rgba(255,255,255,.07)]">
              <span className="text-xl text-white/70">◉</span>
              <input value={prompt} onChange={e => setPrompt(e.target.value)} aria-label="Ask my portfolio assistant" placeholder="Ask about my projects, skills, internships, or startup..." className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-white/50" />
              <button type="submit" aria-label="Ask assistant" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eb4b6b] text-xl text-white shadow-[0_0_15px_rgba(246,70,102,.5)] hover:bg-[#ff647e]">➜</button>
            </form>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[11px] font-semibold text-[#ff718c]">✦ Try asking:</span>
              {prompts.map(q => <button key={q} type="button" onClick={() => openAssistant(q)} className="rounded-full border border-[#e87a93]/40 px-3 py-1.5 text-[11px] text-white/85 transition hover:border-[#ff8298] hover:text-white">{q}</button>)}
            </div>
          </div>
        </motion.div>

        <p className="sr-only">{projects.length} projects in the portfolio. Select a section to explore.</p>
      </div>
    </section>
  );
}
