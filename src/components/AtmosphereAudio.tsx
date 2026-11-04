import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Original generative dark-ambient soundtrack. No third-party audio files
 * or copyrighted film recordings. Audio starts only after a user gesture.
 */
export default function AtmosphereAudio() {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRef = useRef<(() => void) | null>(null);

  const start = useCallback(async () => {
    if (ctxRef.current) {
      await ctxRef.current.resume();
      setEnabled(true);
      return;
    }
    const ctx = new AudioContext();
    ctxRef.current = ctx;
    const master = ctx.createGain();
    master.gain.value = 0.0001;
    master.connect(ctx.destination);
    master.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 500;
    lowpass.Q.value = 0.65;
    lowpass.connect(master);

    const voices: OscillatorNode[] = [];
    // Dissonant low drones; subtle detuning creates a sinister beating texture.
    [55, 55.41, 82.1, 110.8, 164.4].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i < 2 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.value = [0.28, 0.20, 0.065, 0.025, 0.012][i];
      osc.connect(gain).connect(lowpass);
      osc.start();
      voices.push(osc);
    });

    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.07;
    const lfoDepth = ctx.createGain();
    lfoDepth.gain.value = 170;
    lfo.connect(lfoDepth).connect(lowpass.frequency);
    lfo.start();
    voices.push(lfo);

    // A distant, irregular bell-like pulse, intentionally original.
    let count = 0;
    const pulse = () => {
      if (ctx.state === 'closed') return;
      const now = ctx.currentTime;
      const bell = ctx.createOscillator();
      const vol = ctx.createGain();
      bell.type = 'sine';
      bell.frequency.setValueAtTime([220, 207.65, 233.08, 164.81][count++ % 4], now);
      bell.frequency.exponentialRampToValueAtTime(55, now + 2.8);
      vol.gain.setValueAtTime(0.0001, now);
      vol.gain.exponentialRampToValueAtTime(0.035, now + 0.12);
      vol.gain.exponentialRampToValueAtTime(0.0001, now + 3.9);
      bell.connect(vol).connect(lowpass);
      bell.start(now);
      bell.stop(now + 4);
    };
    pulse();
    const timer = window.setInterval(pulse, 8500);
    stopRef.current = () => {
      window.clearInterval(timer);
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.25);
      window.setTimeout(() => {
        voices.forEach(v => { try { v.stop(); } catch { /* already stopped */ } });
        void ctx.close();
      }, 1200);
    };
    setEnabled(true);
  }, []);

  const toggle = useCallback(() => {
    if (enabled) {
      stopRef.current?.();
      ctxRef.current = null;
      stopRef.current = null;
      setEnabled(false);
    } else {
      void start().catch(() => setEnabled(false));
    }
  }, [enabled, start]);

  useEffect(() => () => {
    stopRef.current?.();
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={enabled ? 'Mute eerie ambience' : 'Play eerie ambience'}
      aria-pressed={enabled}
      title={enabled ? 'Mute eerie ambience' : 'Play eerie ambience'}
      className="glass fixed bottom-5 right-5 z-[160] flex items-center gap-2 rounded-full px-4 py-3 text-xs font-semibold tracking-[0.12em] text-bone shadow-xl transition hover:bg-white/15"
    >
      <span aria-hidden="true" className="text-lg">{enabled ? '♫' : '♪'}</span>
      {enabled ? 'SOUND ON' : 'SOUND OFF'}
    </button>
  );
}
