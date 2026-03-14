import { useState, useEffect } from 'react';

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_AT_END = 2000;
const PAUSE_AT_START = 500;

/**
 * Cycles through phrases with a typewriter effect.
 * @param {string[]} phrases - Array of strings to cycle through
 * @returns {string} Current displayed text
 */
export function useTypewriter(phrases) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const safeIndex = index % Math.max(phrases.length, 1);

  useEffect(() => {
    const p = phrases[safeIndex] ?? '';
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setSubIndex((prev) => Math.max(0, prev - 1));
          if (subIndex === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % Math.max(phrases.length, 1));
          }
        } else {
          setSubIndex((prev) => {
            if (prev >= p.length) {
              setIsDeleting(true);
              return prev;
            }
            return prev + 1;
          });
        }
      },
      subIndex === p.length && !isDeleting ? PAUSE_AT_END : subIndex === 0 && isDeleting ? PAUSE_AT_START : speed
    );

    return () => clearTimeout(timeout);
  }, [index, subIndex, isDeleting, safeIndex, phrases]);

  return (phrases[safeIndex] ?? '').slice(0, subIndex);
}
