import { memo } from 'react';
import { ImageIcon } from 'lucide-react';

/**
 * Inline SVG placeholder when project image is missing or fails to load.
 * Shows project title so cards never appear as blank/solid color.
 */
function ProjectImagePlaceholder({ title, aspect = 'video', className = '' }) {
  const isPhone = aspect === 'phone';
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-200 to-amber-100/50 dark:from-slate-800 dark:to-amber-900/30 text-slate-700 dark:text-slate-200 ${className}`}
      style={isPhone ? { aspectRatio: '9/19' } : { aspectRatio: '16/10' }}
    >
      <ImageIcon className="h-10 w-10 text-white/50 md:h-12 md:w-12" strokeWidth={1.5} />
      <p className="max-w-[85%] px-2 text-center text-sm font-medium leading-tight md:text-base">
        {title}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400">Screenshot</p>
    </div>
  );
}

export default memo(ProjectImagePlaceholder);
