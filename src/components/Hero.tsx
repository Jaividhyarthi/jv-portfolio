import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { projects, type ProfileId } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';

const specialties = [
  { icon: '⌘', text: 'AI / ML Systems' },
  { icon: '▣', text: 'Full-Stack Development' },
  { icon: '▤', text: 'IoT & Embedded AI' },
  { icon: '⬡', text: 'Research & Publications' },
  { icon: '✦', text: 'Hackathons & Products' },
  { icon: '↗', text: 'Startup & Innovation' },
];
const leftRoles = [
  { icon: '✺', text: 'AI Engineer', top: 'top-[12%]' },
  { icon: '♙', text: 'Researcher', top: 'top-[39%]' },
  { icon: '✧', text: 'Entrepreneur', top: 'top-[69%]' },
];
const rightRoles = [
  { icon: '⌘', text: 'Developer', top: 'top-[17%]' },
  { icon: '↗', text: 'Builder', top: 'top-[46%]' },
  { icon: '✧', text: 'Student', top: 'top-[77%]' },
];
const prompts = ['Show me your projects', 'Your hackathons?', 'About your startup?', 'Why AI & DS?'];

export default function Hero({
  onPlay: _onPlay,
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
              <button type="button" onClick={() => scrollTo('#originals', { offset: -75 })} className="rounded-full border border-[#ff9aa9] bg-gradient-to-r from-[#c92042] to-[#ed4261] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_28px_rgba(239,47,84,.35)] transition hover:scale-[1.03] hover:shadow-[0_0_38px_rgba(239,47,84,.5)]">
                ▶ &nbsp; Explore My Work
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
            {/* Glowing, circular film-poster halo. The photo itself is a transparent cutout. */}
            <div aria-hidden className="absolute left-1/2 top-[44%] h-[77%] max-h-[500px] w-[77%] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff718c]/70 shadow-[0_0_30px_rgba(255,63,93,.3),0_0_125px_rgba(170,31,62,.24),inset_0_0_80px_rgba(255,61,90,.08)]" />
            <div aria-hidden className="absolute left-1/2 top-[42%] h-[82%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(192,32,65,.22),transparent_68%)] blur-2xl" />

            <img
              src="/assets/jv-home-cutout.webp"
              alt="Portrait of Jaividhyarthi"
              onError={e => { e.currentTarget.onerror = null; e.currentTarget.style.visibility = 'hidden'; }}
              className="relative z-10 h-[100%] w-[80%] object-contain object-bottom drop-shadow-[0_14px_55px_rgba(0,0,0,.55)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_72%,transparent_100%)]"
            />
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[18%] bg-gradient-to-t from-[#10080f] to-transparent" />

            {leftRoles.map(role => (
              <div key={role.text} className={`absolute left-0 z-30 hidden items-center gap-2 rounded-2xl border border-[#ff8298]/45 bg-[#28141d]/75 px-4 py-2.5 text-xs text-white shadow-[0_0_22px_rgba(243,62,95,.09)] backdrop-blur-sm sm:flex ${role.top}`}>
                <span className="text-lg text-[#ff90a1]">{role.icon}</span>{role.text}
              </div>
            ))}
            {rightRoles.map(role => (
              <div key={role.text} className={`absolute right-0 z-30 hidden items-center gap-2 rounded-2xl border border-[#ff8298]/45 bg-[#28141d]/75 px-4 py-2.5 text-xs text-white shadow-[0_0_22px_rgba(243,62,95,.09)] backdrop-blur-sm sm:flex ${role.top}`}>
                <span className="text-lg text-[#ff90a1]">{role.icon}</span>{role.text}
              </div>
            ))}
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
            <div aria-hidden className="relative flex h-24 w-20 shrink-0 items-center justify-center rounded-2xl border border-[#f98da7]/35 bg-[#28131f] text-5xl shadow-[0_0_20px_rgba(250,52,91,.22)] sm:h-28 sm:w-28">
              <span>🤖</span>
              <span className="absolute bottom-1 rounded bg-[#3b121e] px-2 text-[9px] font-bold text-white">JV</span>
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
