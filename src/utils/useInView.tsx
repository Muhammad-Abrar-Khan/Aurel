import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setInView(true);
        else setInView(false);
      });
    }, options ?? { threshold: 0.2 });

    obs.observe(node);
    return () => obs.disconnect();
  }, [ref.current]);

  return { ref, inView } as const;
}
