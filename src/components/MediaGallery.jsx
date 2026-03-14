import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectImagePlaceholder from './ProjectImagePlaceholder';

export default function MediaGallery({ images, projectTitle = 'Project' }) {
  const [index, setIndex] = useState(0);
  const [failedUrls, setFailedUrls] = useState(new Set());
  const list = Array.isArray(images) && images.length ? images : [];
  const current = list[index] ?? null;
  const currentFailed = current ? failedUrls.has(current) : true;

  const goPrev = () => setIndex((i) => (i - 1 + list.length) % list.length);
  const goNext = () => setIndex((i) => (i + 1) % list.length);

  const markFailed = (url) => setFailedUrls((prev) => new Set(prev).add(url));

  if (list.length === 0) {
    return (
      <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-white/5">
        <ProjectImagePlaceholder title={projectTitle} aspect="video" className="aspect-video w-full" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-100 dark:bg-white/5">
        <AnimatePresence mode="wait">
          {currentFailed ? (
            <motion.div
              key={`placeholder-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <ProjectImagePlaceholder title={projectTitle} aspect="video" className="h-full w-full" />
            </motion.div>
          ) : (
            <motion.img
              key={index}
              src={current}
              alt={`${projectTitle} — Slide ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full object-contain"
              onError={() => markFailed(current)}
            />
          )}
        </AnimatePresence>
        {list.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      <div className="flex justify-center gap-1">
        {list.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-amber-500' : 'w-2 bg-slate-300 dark:bg-white/30 hover:bg-amber-500/50 dark:hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
