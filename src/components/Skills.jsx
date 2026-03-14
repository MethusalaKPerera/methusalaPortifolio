import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Smartphone,
  Palette,
  Database,
  Brain,
  Wrench,
} from 'lucide-react';

const SKILL_GROUPS = [
  { title: 'Frontend', icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS'] },
  { title: 'Backend', icon: Server, items: ['Spring Boot', 'Node.js', 'Express.js', 'Java', 'Python'] },
  { title: 'Mobile', icon: Smartphone, items: ['Kotlin', 'Android Studio'] },
  { title: 'Design', icon: Palette, items: ['Figma', 'UI/UX Design', 'Prototyping'] },
  { title: 'Database', icon: Database, items: ['MongoDB', 'MySQL'] },
  { title: 'AI/ML', icon: Brain, items: ['PyTorch', 'Sentence-BERT', 'RAG', 'Flask'] },
  { title: 'Tools', icon: Wrench, items: ['GitHub', 'Postman', 'VS Code'] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl text-slate-800 dark:text-white"
        >
          <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-slate-600 dark:text-slate-400 sm:mb-12"
        >
          Technologies and tools I work with.
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.05 }}
              className="card-base rounded-2xl p-5 transition sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-amber-500/15 p-2 dark:bg-amber-400/20">
                  <group.icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + si * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg border border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 px-3 py-1.5 text-sm text-slate-700 dark:text-slate-300 transition hover:border-amber-500/40 hover:bg-amber-500/10 dark:hover:bg-amber-400/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
