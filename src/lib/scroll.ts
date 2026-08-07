/**
 * Ein einziger rAF-gedrosselter Scroll-Listener für die ganze Seite.
 * Verhindert, dass jede Komponente einen eigenen Listener registriert.
 */
type Listener = () => void;

const listeners = new Set<Listener>();
let frame = 0;
let attached = false;

function flush() {
  frame = 0;
  for (const listener of listeners) listener();
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(flush);
}

export function subscribeScroll(listener: Listener) {
  listeners.add(listener);

  if (!attached) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    attached = true;
  }

  listener();

  return () => {
    listeners.delete(listener);
  };
}

export function clamp01(value: number) {
  return value < 0 ? 0 : value > 1 ? 1 : value;
}
