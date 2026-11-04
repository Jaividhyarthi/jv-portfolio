import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * One shared MP3 player for the entire Netflix-style portfolio.
 * Place the music at public/assets/jv-background.mp3.
 * No generated drones or external music libraries.
 */
const TRACK = '/assets/jv-background.mp3';
const VOLUME = 0.32;

export default function AtmosphereAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = VOLUME;
    void audio.play().then(() => {
      setPlaying(true);
      setError(false);
    }).catch(() => {
      setPlaying(false);
      setError(true);
    });
  }, []);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setPlaying(false);
  }, []);

  useEffect(() => {
    // Called from a real user click (Play or Watch Trailer).
    const onPlay = () => play();
    window.addEventListener('jv-start-sound', onPlay);
    return () => window.removeEventListener('jv-start-sound', onPlay);
  }, [play]);

  return (
    <>
      <audio
        ref={audioRef}
        src={TRACK}
        preload="auto"
        loop
        onPlay={() => { setPlaying(true); setError(false); }}
        onPause={() => setPlaying(false)}
        onError={() => { setPlaying(false); setError(true); }}
      />
      <button
        type="button"
        onClick={() => playing ? pause() : play()}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        aria-pressed={playing}
        title={error ? 'MP3 missing or playback blocked; check public/assets/jv-background.mp3' : playing ? 'Pause background music' : 'Play background music'}
        className="glass fixed bottom-5 right-5 z-[160] flex items-center gap-2 rounded-full border border-[#ff7895]/45 bg-black/70 px-4 py-3 text-xs font-semibold tracking-[0.12em] text-bone shadow-xl transition hover:bg-[#ff3d5a]/20"
      >
        <span aria-hidden className="text-lg">{playing ? '♫' : '♪'}</span>
        {error ? 'RETRY MUSIC' : playing ? 'MUSIC ON' : 'PLAY MUSIC'}
      </button>
    </>
  );
}
