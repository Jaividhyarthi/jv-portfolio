import { useEffect, useRef, useState, type FormEvent } from 'react';
import { achievements, certifications, education, experience, profile, projects, skillCategories } from '../data/portfolio';

type Message = { from: 'visitor' | 'assistant'; text: string };
const suggested = [
  'Tell me about your projects',
  'What are your technical skills?',
  'What hackathons have you won?',
  'How can I contact JV?',
];

const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
function answer(question: string): string {
  const q = clean(question);
  if (/hello|^hi$|^hey$|who are you/.test(q)) return "Hello! I'm JV's interactive portfolio guide. Ask me about projects, experience, skills, education, research or achievements.";
  if (/contact|email|reach|hire|collaborat|linkedin|github/.test(q))
    return `You can reach JV at ${profile.email}. LinkedIn: ${profile.links.linkedin} and GitHub: ${profile.links.github}. Open the Contact section below for more.`;
  if (/educat|college|degree|university|study|cgpa/.test(q))
    return education.map(e => `${e.degree} — ${e.school}${e.score ? ` (${e.score})` : ''}`).join('\n');
  if (/intern|experience|worked|career|company/.test(q))
    return experience.map(e => `${e.role} at ${e.company} (${e.period}). ${e.points.join(' ')}`).join('\n\n');
  if (/skill|stack|language|python|react|fastapi|framework/.test(q))
    return skillCategories.map(c => `${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n');
  if (/hackathon|award|achiev|prize|won|competition/.test(q))
    return achievements.slice(0, 8).map(a => `${a.title} — ${a.org}: ${a.detail}`).join('\n\n');
  if (/certif|course|credential/.test(q))
    return certifications.map(c => `${c.issuer}: ${c.name}`).join('\n');
  if (/research|paper|publication/.test(q))
    return "JV's work includes research and experimentation in AI, regional-language models and applied systems. Explore the Projects and Achievements sections for publication and prototype details.";
  const hits = projects.map(p => {
    const tokens = clean([p.title, p.genre, p.logline, ...p.stack, ...p.features].join(' ')).split(' ');
    const terms = q.split(' ').filter(w => w.length > 2 && !['tell', 'about', 'what', 'does', 'show', 'your', 'the', 'me'].includes(w));
    return { p, score: terms.reduce((n, w) => n + (clean(p.title).includes(w) ? 5 : tokens.includes(w) ? 1 : 0), 0) };
  }).sort((a,b) => b.score-a.score);
  if (hits[0]?.score > 0)
    return hits.slice(0, 3).filter(x => x.score > 0).map(({p}) => `${p.title} — ${p.logline} Stack: ${p.stack.join(', ')}.`).join('\n\n');
  if (/project|build|portfolio|work|develop/.test(q))
    return `JV has ${projects.length} projects in this portfolio, including ${projects.slice(0, 8).map(p => p.title).join(', ')}. Ask me about any project by name.`;
  return "I don't have a verified answer to that in JV's portfolio yet. I can explain JV's projects, skills, internships, hackathons, certifications, education or contact details. Try one of those topics!";
}

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'assistant', text: "Hi! I'm JV's portfolio guide. Don't just read the portfolio — interview it. What would you like to know?" },
  ]);
  const [question, setQuestion] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, [messages]);
  const send = (value = question) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setMessages(m => [...m, { from: 'visitor', text: trimmed }, { from: 'assistant', text: answer(trimmed) }]);
    setQuestion('');
  };
  const submit = (e: FormEvent) => { e.preventDefault(); send(); };\n  useEffect(() => {\n    const handle = (event: Event) => {\n      const question = (event as CustomEvent<string>).detail;\n      if (typeof question === 'string' && question.trim()) send(question);\n    };\n    window.addEventListener('jv-assistant-ask', handle);\n    return () => window.removeEventListener('jv-assistant-ask', handle);\n  });

  return (
    <div className="gutter mx-auto max-w-[1500px]">
      <div className="relative overflow-hidden rounded-[28px] border border-[#ff3d5a]/35 bg-[radial-gradient(ellipse_at_85%_10%,rgba(229,19,43,0.18),transparent_55%),linear-gradient(145deg,#151019,#09090d)] px-5 py-8 shadow-[0_0_80px_rgba(229,19,43,.09)] sm:px-9 lg:px-14 lg:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-crimson-2/20 shadow-[0_0_100px_rgba(229,19,43,.2)]" />
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-crimson-2">Meet my digital portfolio guide · Interactive</p>
            <h2 className="font-display text-[clamp(3.2rem,7vw,7rem)] leading-[.9] text-bone">ASK MY <span className="text-crimson-2">AI</span><br/>ASSISTANT</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-bone/75">Don't just read my portfolio. Interview it. Ask about the products I've built, problems I've solved, the technologies I use and where I want to go next.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {suggested.map(s => <button type="button" key={s} onClick={() => send(s)} className="rounded-full border border-white/20 px-4 py-2 text-left text-xs text-bone/80 transition hover:border-crimson-2 hover:text-white">{s} ↗</button>)}
            </div>
            <p className="mt-7 text-xs leading-5 text-mist">Currently a portfolio-aware interactive guide, not a connected generative AI model. Replies use the information published on this site.</p>
          </div>
          <div className="flex min-h-[470px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-black/45 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-crimson-2/40 bg-crimson/15 text-2xl">✦</div>
              <div><p className="text-sm font-semibold text-bone">JV · Portfolio Assistant</p><p className="text-[11px] text-mist">● Ready to answer from portfolio content</p></div>
              <span className="ml-auto rounded-full border border-white/10 px-2 py-1 text-[10px] text-mist">BETA</span>
            </div>
            <div role="log" aria-live="polite" className="flex max-h-[450px] min-h-[310px] flex-1 flex-col gap-4 overflow-y-auto px-4 py-5 sm:px-6">
              {messages.map((m,i) => <div key={i} className={`max-w-[92%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${m.from === 'visitor' ? 'ml-auto rounded-br-sm bg-crimson text-white' : 'mr-auto rounded-bl-sm border border-white/10 bg-white/[.07] text-bone/90'}`}>{m.text}</div>)}
              <div ref={endRef} />
            </div>
            <form onSubmit={submit} className="flex gap-2 border-t border-white/10 p-3 sm:p-4">
              <input aria-label="Ask JV's portfolio assistant" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask about projects, skills or achievements..." className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/[.07] px-4 py-3 text-sm text-bone outline-none placeholder:text-smoke focus:border-crimson-2" />
              <button type="submit" disabled={!question.trim()} className="rounded-full bg-crimson px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-2 disabled:cursor-not-allowed disabled:opacity-40">Send ↗</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
