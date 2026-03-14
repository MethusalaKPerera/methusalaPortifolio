import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const ITEMS = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Lead Frontend Developer',
    subtitle: 'Lead UI/UX Designer',
    org: 'Gamage Recruiters',
    duration: '6 months',
    side: 'left',
  },
  {
    type: 'edu',
    icon: GraduationCap,
    title: 'Final Year Student',
    subtitle: 'BSc (Hons) Information Technology',
    org: 'SLIIT',
    duration: 'Present',
    side: 'right',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
      <div className="relative mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl text-slate-800 dark:text-white"
        >
          <span className="gradient-text">Experience</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-slate-600 dark:text-slate-400 sm:mb-12"
        >
          Where I've worked and studied.
        </motion.p>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-amber-500/30 to-transparent sm:left-1/2 sm:-translate-x-px" />

          <ul className="space-y-10 sm:space-y-12">
            {ITEMS.map((entry, i) => (
              <motion.li
                key={entry.org + entry.title}
                initial={{ opacity: 0, x: entry.side === 'left' ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col gap-6 sm:gap-8 ${entry.side === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                <div className="relative z-10 flex shrink-0 sm:w-1/2 sm:justify-end">
                  <div className="card-base flex w-full max-w-md items-start gap-4 rounded-2xl p-5 transition sm:p-6">
                    <div className="rounded-xl bg-amber-500/15 p-2.5 dark:bg-amber-400/20">
                      <entry.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-slate-800 dark:text-white">{entry.title}</h3>
                      {entry.subtitle && (
                        <p className="text-sm text-amber-600/90 dark:text-amber-400/90">{entry.subtitle}</p>
                      )}
                      <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">{entry.org}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{entry.duration}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-6 h-3 w-3 rounded-full border-2 border-amber-500 bg-slate-50 dark:bg-slate-900 sm:left-1/2 sm:-translate-x-1/2" />
                <div className="hidden flex-1 sm:block sm:w-1/2" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
