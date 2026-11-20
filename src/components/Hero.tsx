import { motion } from 'motion/react';
import { ChevronDown, MapPin } from 'lucide-react';
import { profile } from '@/data/content';
import { scrollToId } from '@/lib/motion';

function WaveBars() {
  return (
    <div className="flex items-end gap-1" aria-hidden="true">
      {[0.4, 0.9, 0.55, 1, 0.7, 0.45, 0.85].map((h, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-amber-400/70"
          initial={{ height: 4 }}
          animate={{ height: [4, 4 + h * 26, 4] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            delay: i * 0.12,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 75% 30%, rgba(251,191,36,0.14), transparent), radial-gradient(ellipse 45% 40% at 15% 80%, rgba(251,191,36,0.07), transparent)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.5) 1px, transparent 2px)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pb-24 pt-32 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:px-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-amber-400"
          >
            <WaveBars />
            {profile.tagline}
          </motion.p>

          <h1 className="font-display text-[13vw] font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[5.6rem]">
            {['Temitope', 'Emmanuel'].map((word, wi) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className={`block ${wi === 1 ? 'text-outline' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 + wi * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            {profile.title}. Building stages, records and careers from Lagos outward — founder of
            Billionaire Boys Crew.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToId('projects')}
              className="group rounded-full bg-amber-400 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-ink-950 transition-all duration-300 hover:bg-amber-300"
            >
              Explore the Work
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            <button
              onClick={() => scrollToId('event')}
              className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-300 transition-all duration-300 hover:border-amber-400/60 hover:text-amber-400"
            >
              Rave with BBC
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-2xl border border-amber-400/20" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.fullName}`}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-300">
              <MapPin size={13} className="text-amber-400" />
              {profile.location}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToId('story')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition-colors hover:text-amber-400"
        aria-label="Scroll to story"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ChevronDown size={26} />
        </motion.span>
      </motion.button>
    </section>
  );
}
