import { useMemo } from 'react';
import { motion } from 'framer-motion';

const STAR_COUNT = 80;
const getRandom = (min, max) => min + Math.random() * (max - min);

export default function StarryBackground({ className = '' }) {
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        x: getRandom(0, 100),
        y: getRandom(0, 100),
        size: getRandom(0.5, 2),
        duration: getRandom(2, 5),
        delay: getRandom(0, 3),
        opacity: getRandom(0.2, 0.8),
      })),
    []
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-amber-200/90 dark:bg-amber-300/80"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: '0 0 6px currentColor',
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
