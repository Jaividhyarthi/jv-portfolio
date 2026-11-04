import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';

type Chapter = {
  kicker: string; title: string; line: string; detail: string;
  accent: string; year: string; watermark: string;
};
const CHAPTERS: Chapter[] = [
  { kicker: 'EPISODE 01 / THE BEGINNING', title: 'THE FIRST SPARK', line: 'Every story starts with a question.', detail: 'A curious student. A fascination with how machines think. The journey into AI & Data Science begins.', accent: '#ff7f99', year: '2024', watermark: '01' },
  { kicker: 'EPISODE 02 / THE FOUNDATION', title: 'LEARN. BUILD. REPEAT.', line: 'Code became a language for ideas.', detail: 'Python, machine learning, web engineering and embedded systems turn classroom knowledge into working prototypes.', accent: '#c6a2ff', year: '2024—25', watermark: '02' },
  { kicker: 'EPISODE 03 / THE REAL WORLD', title: 'BEYOND THE CLASSROOM', line: 'Experience changes the way we build.', detail: 'Internships in web development and analytics. Practical products, data, teamwork and decisions beyond an assignment.', accent: '#66baff', year: '2025', watermark: '03' },
  { kicker: 'EPISODE 04 / THE ARENA', title: 'BUILT TO COMPETE', line: 'A deadline. A team. A bold idea.', detail: 'Hackathons, first-place finishes and high-stakes demonstrations reveal what is possible under pressure.', accent: '#ffa95f', year: '2025—26', watermark: '04' },
  { kicker: 'EPISODE 05 / THE ORIGINALS', title: 'IDEAS INTO SYSTEMS', line: 'Not just concepts. Real engineering.', detail: 'ClassLens, Skyglow, AQUAWAVE, Vivian and AI security projects bring research, software and hardware together.', accent: '#fb567b', year: '2026', watermark: '05' },
  { kicker: 'EPISODE 06 / THE HORIZON', title: 'RESEARCH WITH PURPOSE', line: 'Questions lead to experiments.', detail: 'Regional-language models, explainable AI and publications point toward technology with measurable impact.', accent: '#78e3b1', year: '2026', watermark: '06' },
  { kicker: 'EPISODE 07 / TO BE CONTINUED', title: 'THE NEXT CHAPTER', line: 'The story is still being written.', detail: 'Bigger products. Deeper research. Entrepreneurship. And the ambition to create something that matters.', accent: '#ff8eac', year: 'NEXT', watermark: '07' },
];
const DURATION = 5700;

export default function SeriesTrailer({ onClose, onExplore }: { onClose: () => void; onExplore: () => void }) {
  useScrollLock(true);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ended, setEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const elapsed = useRef(0);
  const chapter = CHAPTERS[index];
  const advance = useCallback(() => {
    elapsed.current = 0;
    setProgress(0);
    setIndex(i => {
      if (i >= CHAPTERS.length - 1) { setEnded(true); return i; }
      return i + 1;
    });
  }, []);
  const jump = (next: number) => {
    elapsed.current = 0;
    setProgress(0);
    setEnded(false);
    setIndex(Math.max(0, Math.min(CHAPTERS.length - 1, next)));
  };
  useEffect(() => {
    if (paused || ended) return;
    let raf = 0;
    let last = 0;
    const frame = (time: number) => {
      if (last) elapsed.current += Math.min(time - last, 90);
      last = time;
      const ratio = Math.min(elapsed.current / DURATION, 1);
      setProgress(ratio);
      if (ratio >= 1) { advance(); return; }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [index, paused, ended, advance]);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') jump(index + 1);
      if (event.key === 'ArrowLeft') jump(index - 1);
      if (event.code === 'Space' && !(event.target instanceof HTMLButtonElement)) {
        event.preventDefault();
        setPaused(v => !v);
      }
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, [index, onClose]);

  return (
    <motion.div role="dialog" aria-modal="true" aria-label="JV The Series — cinematic seven-episode trailer"
      className="fixed inset-0 z-[200] overflow-hidden bg-[#040408] text-white"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .45 }}
    >
      <AnimatePresence mode="wait">
        <motion.div key={ended ? 'ending' : index}
          initial={{ opacity: 0, scale: 1.07, filter: 'blur(18px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(15px)' }}
          transition={{ duration: 1.1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 70% 45%, ${chapter.accent}32, transparent 52%), radial-gradient(ellipse at 15% 85%, ${chapter.accent}19, transparent 65%), #040408` }} />
          <motion.div aria-hidden className="absolute right-[-12%] top-[15%] aspect-square w-[min(78vh,62vw)] rounded-full border-[1.5px]"
            style={{ borderColor: chapter.accent, boxShadow: `0 0 100px ${chapter.accent}32, inset 0 0 90px ${chapter.accent}12` }}
            animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 55, ease: 'linear' }}>
            <div className="absolute left-1/2 top-0 h-3 w-3 rounded-full bg-white shadow-[0_0_30px_#ff7497]" />
          </motion.div>
          {index === 0 || index === 6 ? (
            <motion.img src={profile.portrait.src} alt="" className="pointer-events-none absolute bottom-0 right-[2%] h-[83vh] max-w-[58vw] object-contain object-bottom opacity-60 [mask-image:linear-gradient(to_bottom,black_55%,transparent_98%)]"
              initial={{ x: 55, opacity: 0 }} animate={{ x: 0, opacity: .5 }} transition={{ duration: 2 }} />
          ) : (
            <motion.div aria-hidden className="absolute right-[5%] top-[9%] font-display text-[min(55vw,55vh)] leading-none tracking-tighter opacity-[.08]"
              initial={{ rotate: -10, y: 60 }} animate={{ rotate: 0, y: 0 }} transition={{ duration: 2 }}>
              {chapter.watermark}
            </motion.div>
          )}
          <div aria-hidden className="absolute inset-0 opacity-[.08] [background-image:repeating-linear-gradient(0deg,transparent_0px,transparent_3px,white_4px)]" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-center px-[6vw] pb-20 pt-24 sm:px-[9vw]">
            <motion.p className="mb-5 text-[11px] font-bold uppercase tracking-[.42em] sm:text-sm" style={{ color: chapter.accent }}
              initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .35 }}>
              {ended ? 'SEASON ONE / COMPLETE' : chapter.kicker}
            </motion.p>
            <motion.h2 className="max-w-[900px] font-display text-[clamp(3.8rem,11vw,11rem)] leading-[.83] tracking-wide drop-shadow-[0_8px_35px_rgba(0,0,0,.6)]"
              initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4, duration: .75 }}>
              {ended ? 'TO BE CONTINUED...' : chapter.title}
            </motion.h2>
            <motion.p className="mt-7 max-w-2xl font-serif text-[clamp(1.3rem,3vw,2.5rem)] italic" style={{ color: chapter.accent }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}>
              {ended ? 'The next episode is yours to discover.' : chapter.line}
            </motion.p>
            <motion.p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-lg"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .95 }}>
              {ended ? 'Explore the work, dive into each project, or ask the portfolio assistant.' : chapter.detail}
            </motion.p>
            {ended && (
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={onExplore} className="rounded-full bg-[#ed3e5f] px-7 py-3 font-bold text-white hover:bg-[#ff5978]">▶ EXPLORE THE ORIGINALS</button>
                <button type="button" onClick={() => jump(0)} className="rounded-full border border-white/40 px-7 py-3 font-bold hover:bg-white/10">↺ REWATCH TRAILER</button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 px-5 pt-5 sm:px-10">
        <p className="text-xs font-bold tracking-[.32em] text-white/85">JV <span className="text-[#ff526f]">●</span> THE SERIES</p>
        <span className="hidden text-[10px] font-medium uppercase tracking-[.25em] text-white/45 sm:block">A seven-episode visual journey</span>
        <button type="button" onClick={onClose} className="pointer-events-auto rounded-full border border-white/30 bg-black/50 px-5 py-2 text-xs font-semibold tracking-wider hover:bg-white/15">✕ CLOSE</button>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black via-black/90 to-transparent px-5 pb-6 pt-14 sm:px-10">
        <div className="mb-5 flex gap-1.5" aria-label="Seven episode progress bars">
          {CHAPTERS.map((c, i) => (
            <button type="button" key={c.watermark} aria-label={`Jump to episode ${i + 1}`} onClick={() => jump(i)}
              className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-white/25 hover:bg-white/40">
              <div className="h-full rounded-full bg-[#ff5677]" style={{ width: `${i < index || ended ? 100 : i === index ? progress * 100 : 0}%` }} />
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={() => setPaused(v => !v)} disabled={ended} className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold disabled:opacity-40">{paused ? '▶ RESUME' : '❚❚ PAUSE'}</button>
          <button type="button" onClick={() => jump(index - 1)} disabled={index === 0 && !ended} className="rounded-full border border-white/30 px-4 py-2.5 text-sm disabled:opacity-30">← PREVIOUS</button>
          <button type="button" onClick={() => ended ? onExplore() : jump(index + 1)} className="rounded-full border border-white/30 px-4 py-2.5 text-sm">{ended ? 'EXPLORE →' : 'NEXT →'}</button>
          <span className="ml-auto text-xs font-semibold tracking-[.24em] text-white/60">{String(index + 1).padStart(2, '0')} / 07</span>
        </div>
      </div>
    </motion.div>
  );
}
