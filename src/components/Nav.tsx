import { useEffect, useState } from 'react';
import { Menu, X, Disc3 } from 'lucide-react';
import { scrollToId } from '@/lib/motion';

const links = [
  { id: 'story', label: 'Story' },
  { id: 'projects', label: 'Music Room' },
  { id: 'event', label: 'Rave with BBC' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button
          onClick={() => go('top')}
          className="group flex items-center gap-3 text-left"
          aria-label="Back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-amber-400 text-ink-950 transition-transform duration-500 group-hover:rotate-180">
            <Disc3 size={18} strokeWidth={2.2} />
          </span>
          <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.25em] text-white sm:block">
            Temitope <span className="text-amber-400">Emmanuel</span>
          </span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="relative text-[13px] font-medium uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => go('contact')}
              className="rounded-full border border-amber-400/60 px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-ink-950"
            >
              Let's Talk
            </button>
          </li>
        </ul>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-ink-950/95 backdrop-blur-lg transition-all duration-500 md:hidden ${
          open ? 'max-h-96 border-b border-white/5' : 'max-h-0'
        }`}
      >
        <ul className="space-y-1 px-6 py-6">
          {links.map((l, i) => (
            <li key={l.id} style={{ transitionDelay: `${i * 40}ms` }}>
              <button
                onClick={() => go(l.id)}
                className="w-full py-3 text-left font-display text-2xl font-semibold text-zinc-200 transition-colors hover:text-amber-400"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
