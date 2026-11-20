import { useEffect, useRef, type ReactNode } from 'react';
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    lenisInstance = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    let raf = 0;
    const loop = (t: number) => {
      lenisInstance?.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) lenisInstance.scrollTo(el, { offset: -80 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span' | 'p';
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1';
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('is-revealed');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`reveal ${className ?? ''}`}>
      {children}
    </Tag>
  );
}
