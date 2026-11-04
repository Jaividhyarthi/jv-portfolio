import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Original, royalty-free generative cinematic ambience.
 * Sound can start with PLAY / WATCH TRAILER (a direct user gesture),
 * and can always be muted from the floating control.
 */
export default function AtmosphereAudio() {
  const [enabled, setEnabled] = useState(false);
  const [error, setError] = useState(false);
  const context = useRef<AudioContext | null>(null);
  const cleanup = useRef<(() => void) | null>(null);

  const stop = useCallback(() => {
    cleanup.current?.();
    cleanup.current = null;
    context.current = null;
    setEnabled(false);
  }, []);

  const start = useCallback(() => {
    const running = context.current;
    if (running) {
      void running.resume().then(() => { setEnabled(true); setError(false); }).catch(() => setError(true));
      return;
    }

    try {
      const AudioContextClass = window.AudioContext;
      if (!AudioContextClass) throw new Error('Web Audio unavailable');
      const ctx = new AudioContextClass();
      context.current = ctx;
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.0001, ctx.currentTime);
      master.gain.exponentialRampToValueAtTime(0.42, ctx.currentTime + 1.6);
      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -20;
      compressor.knee.value = 12;
      compressor.ratio.value = 3;
      master.connect(compressor);
      compressor.connect(ctx.destination);

      const lowpass = ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.value = 1050;
      lowpass.connect(master);

      const voices: OscillatorNode[] = [];
      const makeVoice = (frequency: number, gain: number, type: OscillatorType) => {
        const oscillator = ctx.createOscillator();
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        const envelope = ctx.createGain();
        envelope.gain.value = gain;
        oscillator.connect(envelope);
        envelope.connect(lowpass);
        oscillator.start();
        voices.push(oscillator);
        return { oscillator, envelope };
      };

      // Audible minor-chord film score: low drone, airy minor harmonics, gentle beating.
      makeVoice(110, 0.19, 'sine');
      makeVoice(110.5, 0.16, 'sine');
      makeVoice(164.81, 0.12, 'triangle');
      makeVoice(196, 0.10, 'sine');
      makeVoice(220, 0.06, 'sine');
      makeVoice(329.63, 0.045, 'sine');

      // Swelling reverb-like motion without external audio assets.
      const filterLfo = ctx.createOscillator();
      filterLfo.type = 'sine';
      filterLfo.frequency.value = 0.09;
      const filterDepth = ctx.createGain();
      filterDepth.gain.value = 350;
      filterLfo.connect(filterDepth);
      filterDepth.connect(lowpass.frequency);
      filterLfo.start();
      voices.push(filterLfo);

      const playBell = () => {
        if (ctx.state === 'closed') return;
        const now = ctx.currentTime;
        [0, 7, 12].forEach((offset, i) => {
          const bell = ctx.createOscillator();
          bell.type = 'sine';
          bell.frequency.value = 220 * Math.pow(2, offset / 12);
          const vol = ctx.createGain();
          vol.gain.setValueAtTime(0.0001, now + i * .2);
          vol.gain.exponentialRampToValueAtTime(0.065 / (i + 1), now + i * .2 + .04);
          vol.gain.exponentialRampToValueAtTime(0.0001, now + i * .2 + 2.6);
          bell.connect(vol);
          vol.connect(master);
          bell.start(now + i * .2);
          bell.stop(now + i * .2 + 2.65);
        });
      };
      playBell();
      const bellTimer = window.setInterval(playBell, 8600);

      void ctx.resume().then(() => { setEnabled(true); setError(false); }).catch(() => setError(true));
      cleanup.current = () => {
        window.clearInterval(bellTimer);
        const now = ctx.currentTime;
        master.gain.cancelScheduledValues(now);
        master.gain.setTargetAtTime(0.0001, now, .16);
        window.setTimeout(() => {
          voices.forEach(v => { try { v.stop(); } catch { /* stopped */ } });
          void ctx.close().catch(() => undefined);
        }, 700);
      };
    } catch {
      setEnabled(false);
      setError(true);
    }
  }, []);

  useEffect(() => {
    const onPlay = () => start();
    window.addEventListener('jv-start-sound', onPlay);
    return () => {
      window.removeEventListener('jv-start-sound', onPlay);
      cleanup.current?.();
    };
  }, [start]);

  return (
    <button type="button"
      aria-label={enabled ? 'Mute cinematic soundtrack' : 'Play cinematic soundtrack'}
      aria-pressed={enabled}
      title={error ? 'Audio blocked: click to retry' : enabled ? 'Mute cinematic soundtrack' : 'Play cinematic soundtrack'}
      onClick={() => enabled ? stop() : start()}
      className="glass fixed bottom-5 right-5 z-[160] flex items-center gap-2 rounded-full border border-[#ff7895]/45 bg-black/70 px-4 py-3 text-xs font-semibold tracking-[0.12em] text-bone shadow-xl transition hover:bg-[#ff3d5a]/20">
      <span aria-hidden className="text-lg">{enabled ? '♫' : '♪'}</span>
      {error ? 'RETRY SOUND' : enabled ? 'SOUND ON' : 'PLAY SOUND'}
    </button>
  );
}
