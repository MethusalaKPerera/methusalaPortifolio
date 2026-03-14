import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ProjectImagePlaceholder from './ProjectImagePlaceholder';

function ProjectCard({ project, index, onClick }) {
  const { title, category, type, tags, link, linkLabel, github, device, images } = project;
  const list = Array.isArray(images) ? images : [];
  const [tryIndex, setTryIndex] = useState(0);
  const currentUrl = list[tryIndex];
  const showPlaceholder = list.length === 0 || tryIndex >= list.length;

  const handleImageError = () => {
    setTryIndex((i) => i + 1);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -12px rgba(251, 191, 36, 0.2)' }}
      onClick={() => onClick(project)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 dark:border-white/20 bg-white dark:bg-white/5 shadow-card dark:shadow-card-dark transition hover:border-amber-500/40"
    >
      {/* Device frame */}
      <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800/50 p-3 pt-6 sm:p-4 sm:pt-8 md:p-6 md:pt-10">
        {device === 'phone' ? (
          <div className="mx-auto w-[min(160px,55vw)] sm:w-[min(180px,60vw)] rounded-[2rem] border-4 border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-900 shadow-xl">
            <div className="aspect-[9/19] overflow-hidden rounded-[1.5rem]">
              {showPlaceholder ? (
                <ProjectImagePlaceholder title={title} aspect="phone" className="h-full w-full" />
              ) : (
                <img
                  key={currentUrl}
                  src={currentUrl}
                  alt={title}
                  className="h-full w-full object-cover object-top transition group-hover:scale-105"
                  loading="lazy"
                  onError={handleImageError}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-white/10 bg-slate-200 dark:bg-slate-900 shadow-xl">
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/10 bg-slate-300/80 dark:bg-slate-800/80 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>
            <div className="aspect-video overflow-hidden">
              {showPlaceholder ? (
                <ProjectImagePlaceholder title={title} aspect="video" className="h-full w-full" />
              ) : (
                <img
                  key={currentUrl}
                  src={currentUrl}
                  alt={title}
                  className="h-full w-full object-cover object-top transition group-hover:scale-105"
                  loading="lazy"
                  onError={handleImageError}
                />
              )}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 dark:border-white/10 p-3 sm:p-4 md:p-5">
        <span className="text-xs font-medium text-amber-600 dark:text-amber-400">{category}</span>
        <h3 className="mt-1 font-semibold text-slate-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">{title}</h3>
        {type && <p className="mt-0.5 line-clamp-1 text-sm text-slate-600 dark:text-slate-400">{type}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.slice(0, 3).map((t) => (
            <span key={t} className="rounded-md bg-slate-100 dark:bg-white/10 px-2 py-0.5 text-xs text-slate-600 dark:text-slate-300">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
                className="rounded-lg p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-amber-400"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
                className="rounded-lg p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-amber-400"
              aria-label={linkLabel || 'View'}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default memo(ProjectCard);
