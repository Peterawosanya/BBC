import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, MapPin, CalendarDays, Clock, Users, Ticket } from 'lucide-react';
import { eventCaseStudy as evt, galleryCaption } from '@/data/content';
import { Reveal } from '@/lib/motion';

function Lightbox({
  src,
  caption,
  onClose,
}: {
  src: string;
  caption: string;
  onClose: () => void;
}) {
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
      className="fixed inset-0 z-[70] grid place-items-center bg-ink-950/95 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={caption}
    >
      <button
        onClick={onClose}
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber-400 hover:text-ink-950"
        aria-label="Close image"
      >
        <X size={22} />
      </button>
      <motion.figure
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl"
      >
        <img src={src} alt={caption} className="max-h-[78vh] w-auto rounded-lg object-contain" />
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-zinc-400">{caption}</figcaption>
        )}
      </motion.figure>
    </motion.div>
  );
}

export function Gallery() {
  const [active, setActive] = useState<{ src: string; caption: string } | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <Reveal>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
          Moments
        </p>
        <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Nights that <span className="text-outline">became memories.</span>
        </h2>
      </Reveal>

      <div className="mt-14 columns-2 gap-4 space-y-4 md:columns-3">
        {evt.gallery.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 80}>
            <button
              onClick={() => setActive({ src, caption: galleryCaption[src] ?? 'Rave with BBC' })}
              className="group relative block w-full overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
              aria-label={`View image: ${galleryCaption[src] ?? 'Rave with BBC'}`}
            >
              <img
                src={src}
                alt={galleryCaption[src] ?? 'Rave with BBC event photo'}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/30" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && <Lightbox {...active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

const icons = [Users, Users, MapPin, Ticket, CalendarDays, Clock];

export default function EventCaseStudy() {
  return (
    <section id="event" className="relative py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(251,191,36,0.07),transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
            Event Production
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            {evt.title.split(' ')[0]} <span className="text-outline">with BBC.</span>
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400">{evt.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={evt.flyer}
                alt={`${evt.title} event flyer — ${evt.venue}, ${evt.location}`}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={80}>
              <dl className="grid grid-cols-2 gap-5">
                {[
                  [CalendarDays, 'Date', evt.date],
                  [Clock, 'Time', evt.time],
                  [MapPin, 'Venue', `${evt.venue}, ${evt.location}`],
                  [Ticket, 'Entry', 'Tickets & VIP Tables'],
                ].map(([Icon, label, value]) => {
                  const I = Icon as typeof CalendarDays;
                  return (
                    <div key={label as string} className="rounded-lg border border-white/10 p-4">
                      <dt className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
                        <I size={14} className="text-amber-400" />
                        {label as string}
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium text-white">{value as string}</dd>
                    </div>
                  );
                })}
              </dl>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-lg border border-white/10 p-5">
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  <Users size={14} className="text-amber-400" /> Lineup
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {evt.lineup.map((a) => (
                    <li
                      key={a}
                      className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-zinc-200"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-zinc-500">Hosted by {evt.hostedBy}</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="leading-[1.8] text-zinc-400">{evt.description}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-white">
              How the night was built.
            </h3>
          </Reveal>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {evt.timeline.map((step, i) => (
              <Reveal as="li" key={step.phase} delay={i * 60}>
                <div className="group h-full rounded-xl border border-white/10 p-6 transition-colors duration-300 hover:border-amber-400/40 hover:bg-white/[0.03]">
                  <span className="font-display text-3xl font-bold text-white/10 transition-colors duration-300 group-hover:text-amber-400/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-amber-400">
                    {step.phase}
                  </p>
                  <h4 className="mt-1.5 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
