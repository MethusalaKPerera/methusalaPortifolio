import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, PROJECT_CATEGORIES } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [modalProject, setModalProject] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl text-slate-800 dark:text-white"
        >
          <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-slate-600 dark:text-slate-400"
        >
          A selection of my work across UI/UX, web, mobile, and AI/ML.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap gap-2 sm:mb-10"
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition sm:px-4 ${
                filter === cat
                  ? 'bg-amber-500 text-white'
                  : 'border border-slate-200 dark:border-white/20 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:border-amber-500/50 hover:bg-amber-500/10 dark:hover:bg-amber-400/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={setModalProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center text-slate-500 dark:text-slate-400"
          >
            No projects in this category.
          </motion.p>
        )}
      </div>

      <AnimatePresence>
        {modalProject && (
          <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
