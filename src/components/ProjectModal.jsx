import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import MediaGallery from './MediaGallery';
import ProjectImagePlaceholder from './ProjectImagePlaceholder';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const { title, type, description, features, tags, link, linkLabel, github, images } = project;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 dark:border-white/20 bg-white dark:bg-slate-900 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-3 sm:px-6 sm:py-4 backdrop-blur">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white sm:text-xl">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-500 dark:text-white/80 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-amber-400"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-6 p-4 sm:p-6">
            {type && <p className="text-sm text-amber-600 dark:text-amber-400">{type}</p>}
            {(images?.length ?? 0) > 0 ? (
              <MediaGallery images={images} projectTitle={title} />
            ) : (
              <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-white/5">
                <ProjectImagePlaceholder title={title} aspect="video" className="aspect-video w-full" />
              </div>
            )}
            <p className="text-slate-600 dark:text-slate-300">{description}</p>
            {features && features.length > 0 && (
              <div>
                <h4 className="mb-2 font-semibold text-slate-800 dark:text-white">Features</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  {features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 px-3 py-1 text-xs text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-white/10 px-4 py-2 text-sm font-medium text-slate-800 dark:text-white hover:bg-amber-500/20 dark:hover:bg-amber-500/20"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
                >
                  <ExternalLink className="h-4 w-4" />
                  {linkLabel || 'View'}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
