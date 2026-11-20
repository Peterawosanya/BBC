import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ArrowUpRight, Play } from 'lucide-react';
import { projects, type MusicProject } from '@/data/content';
import { Reveal } from '@/lib/motion';

function CaseStudy({ project, onClose }: { project: MusicProject; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-ink-950/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <motion.article
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto my-8 w-[min(920px,94vw)] overflow-hidden rounded-2xl border border-white/10 bg-ink-900"
      >
        <div className="relative h-64 sm:h-80">
          <img
            src={project.cover}
            alt={`${project.title} — ${project.artist} cover art`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink-950/70 text-white transition-colors hover:bg-amber-400 hover:text-ink-950"
            aria-label="Close case study"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-5 left-6 right-6">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400">{project.year}</p>
            <h3 className="mt-1 font-display text-4xl font-bold text-white sm:text-5xl">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="space-y-10 p-6 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ['Artist', project.artist],
              ['Featured', project.featuredArtist ?? '—'],
              ['Role', project.role],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{k}</p>
                <p className="mt-1 text-sm font-medium text-white">{v}</p>
              </div>
            ))}
          </div>

          <p className="font-display text-xl italic text-amber-400/90">"{project.tagline}"</p>

          <div className="space-y-6">
            <p className="leading-[1.8] text-zinc-400">{project.overview}</p>
            <p className="leading-[1.8] text-zinc-400">{project.collaboration}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">BBC Contribution</p>
            <ul className="mt-4 space-y-3">
              {project.contribution.map((c) => (
                <li key={c} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-amber-400 transition-all hover:bg-amber-400 hover:text-ink-950"
                >
                  {l.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function MusicRoom() {
  const [active, setActive] = useState<MusicProject | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <Reveal>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
          BBC Music Room
        </p>
        <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Records from the <span className="text-outline">BBC stable.</span>
        </h2>
        <p className="mt-5 max-w-xl text-zinc-400">
          Singles driven from concept to release day under Billionaire Boys Crew. Open a record to
          read its story.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 90}>
            <button
              onClick={() => setActive(p)}
              className="group relative block w-full overflow-hidden rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
              aria-label={`Open case study for ${p.title}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.cover}
                  alt={`${p.title} — ${p.artist} cover art`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink-950/60 text-amber-400 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <Play size={16} />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-400">{p.year}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">{p.title}</h3>
                  <p className="text-sm text-zinc-300">
                    {p.artist}
                    {p.featuredArtist ? ` ft. ${p.featuredArtist}` : ''}
                  </p>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && <CaseStudy project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
