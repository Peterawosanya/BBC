import { ArrowUpRight, Mail, Phone, Instagram, Twitter, Disc3 } from 'lucide-react';
import { profile } from '@/data/content';
import { Reveal } from '@/lib/motion';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(251,191,36,0.09),transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
            Contact
          </p>
          <h2 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-7xl">
            Let's build the <span className="text-outline">next stage.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Artists, brands, venues and promoters — if it moves culture forward, the conversation
            starts here.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`mailto:${profile.email}`}
              className="group rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/[0.03]"
            >
              <Mail size={20} className="text-amber-400" />
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">Email</p>
              <p className="mt-1 break-all text-sm font-medium text-white group-hover:text-amber-400">
                {profile.email}
              </p>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="group rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/[0.03]"
            >
              <Phone size={20} className="text-amber-400" />
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">Phone</p>
              <p className="mt-1 text-sm font-medium text-white group-hover:text-amber-400">
                {profile.phone}
              </p>
            </a>
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/[0.03]"
              >
                {s.label === 'Instagram' ? (
                  <Instagram size={20} className="text-amber-400" />
                ) : (
                  <Twitter size={20} className="text-amber-400" />
                )}
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">{s.label}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-amber-400">
                  @{s.url.split('/').pop()}
                  <ArrowUpRight size={14} />
                </p>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-amber-400 text-ink-950">
                <Disc3 size={15} />
              </span>
              <p className="text-sm text-zinc-500">
                © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
              Billionaire Boys Crew — Lagos, Nigeria
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
