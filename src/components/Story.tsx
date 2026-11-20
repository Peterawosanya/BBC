import { Reveal } from '@/lib/motion';
import { profile, experience } from '@/data/content';

export default function Story() {
  return (
    <section id="story" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <Reveal>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
          The Story
        </p>
        <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Music is the craft. <span className="text-outline">Business is the engine.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <Reveal delay={100}>
          <div className="lg:sticky lg:top-28">
            <p className="whitespace-pre-line text-lg leading-[1.8] text-zinc-400">{profile.bio}</p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">Born of</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">Lagos, Nigeria</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">Focus</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">
                  Artist Relations
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <div className="relative">
          <div
            className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-amber-400/60 via-white/15 to-transparent"
            aria-hidden="true"
          />
          <ol className="space-y-14">
            {experience.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 60} className="relative pl-10">
                <span
                  className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-amber-400 bg-ink-950"
                  aria-hidden="true"
                />
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-400">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{item.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs tracking-wide text-zinc-400"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
