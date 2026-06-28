import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isMobile = () =>
  typeof window !== 'undefined' && window.innerWidth < 768;

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { y?: number; duration?: number; delay?: number }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (reduced() || isMobile()) return;
    const el = ref.current;
    if (!el) return;

    const { y = 32, duration = 0.8, delay = 0 } = options ?? {};

    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [options?.y, options?.duration, options?.delay]);

  return ref;
}

export function useStagger<T extends HTMLElement = HTMLDivElement>(
  options?: { y?: number; duration?: number; stagger?: number }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (reduced() || isMobile()) return;
    const container = ref.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];
    if (!items.length) return;

    const { y = 24, duration = 0.7, stagger = 0.1 } = options ?? {};

    const tween = gsap.fromTo(
      items,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [options?.y, options?.duration, options?.stagger]);

  return ref;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options?: { speed?: number }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (reduced() || isMobile()) return;
    const el = ref.current;
    if (!el) return;

    const { speed = 0.3 } = options ?? {};

    const tween = gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [options?.speed]);

  return ref;
}

export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}
