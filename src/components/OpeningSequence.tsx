import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';

/**
 * Cinematic title card: large name across the top, softly blended portrait
 * beneath it, small series tag and a compact play action.
 */
export default function OpeningSequence({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotionPref();
  const [ready, setReady] = useState(reduced);
  useEffect(() => {
    if (reduced) return;
    const timer = window.setTimeout(() => setReady(true), 1100);
    return () => window.clearTimeout(timer);
  }, [reduced]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') onDone();
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-[#030308]"
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(14px)' }}
      transition={{ duration: .9 }}
      role="dialog"
      aria-label="JV cinematic portfolio opening"
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_78%,rgba(99,25,56,.32),transparent_60%),linear-gradient(180deg,#040717_0%,#080712_58%,#0e070f_100%)]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[1px] bg-crimson-2/60" />

      {/* Portrait: fade all four edges into the background, so it feels
          like a film poster rather than a rectangular image card. */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-[8vh] mx-auto h-[min(67vh,720px)] w-[min(84vw,600px)]"
        initial={{ opacity: 0, scale: 1.08, y: 35, filter: 'blur(12px)' }}
        animate={ready ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 1.4, ease: [0.22,1,0.36,1] }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse,rgba(189,40,79,.2),transparent_70%)] blur-2xl" />
        <img
          src={profile.portrait.src}
          onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = 'assets/jv-monogram.svg'; }}
          alt={profile.portrait.alt}
          className="relative h-full w-full object-contain object-bottom drop-shadow-[0_25px_70px_rgba(0,0,0,.8)] [mask-image:radial-gradient(ellipse_60%_56%_at_50%_44%,black_55%,transparent_100%)]"
        />
      </motion.div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[30vh] bg-gradient-to-t from-[#030308] via-[#030308]/75 to-transparent" />

      {/* Name stays ABOVE the portrait, never floats across the face. */}
      <div className="absolute inset-x-4 top-[8vh] z-10 text-center sm:top-[8vh]">
        <motion.h1
          className="font-display leading-[.82] tracking-[.025em] text-bone drop-shadow-[0_8px_45px_rgba(0,0,0,.85)]"
          style={{ fontSize: 'clamp(5.8rem, 15vw, 13rem)' }}
          initial={{ opacity: 0, y: -20, letterSpacing: '.2em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '.025em' }}
          transition={{ duration: 1.2 }}
        >{profile.firstName}</motion.h1>
        <motion.p
          className="mt-3 text-[10px] font-bold tracking-[.65em] text-crimson-2 sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .65, duration: 1 }}
        >{profile.seriesTag}</motion.p>
      </div>

      <motion.div
        className="absolute inset-x-3 bottom-[6vh] z-20 flex flex-col items-center gap-5 text-center"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: .8 }}
      >
        <p className="max-w-[90vw] text-[9px] font-semibold uppercase tracking-[.21em] text-bone/75 sm:text-xs sm:tracking-[.38em]">{profile.tagline.join(' · ')}</p>
        <button
          type="button"
          onClick={onDone}
          className="rounded-full border border-white/60 bg-white/95 px-10 py-3 text-xs font-extrabold tracking-[.18em] text-[#060609] shadow-[0_10px_50px_rgba(0,0,0,.5)] transition hover:scale-105 hover:bg-white"
        >▶ &nbsp; PLAY</button>
      </motion.div>
      <button type="button" onClick={onDone} className="absolute right-4 top-4 z-30 rounded-full border border-white/20 px-4 py-2 text-[10px] font-semibold tracking-[.15em] text-bone/70 transition hover:text-white sm:right-8 sm:top-8">SKIP INTRO</button>
    </motion.div>
  );
}
