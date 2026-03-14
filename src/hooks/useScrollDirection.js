import { useState, useEffect } from 'react';

/**
 * Returns 'up' | 'down' based on scroll direction.
 * Used for navbar: hide on scroll down, show on scroll up.
 */
export function useScrollDirection(threshold = 60) {
  const [direction, setDirection] = useState('up');
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (Math.abs(y - lastY) < threshold) {
          ticking = false;
          return;
        }
        setDirection(y > lastY ? 'down' : 'up');
        setLastY(y);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY, threshold]);

  return direction;
}
