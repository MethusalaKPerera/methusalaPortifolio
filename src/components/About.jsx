import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const STATS = [
  { value: '16', label: 'Projects' },
  { value: '6', label: 'Months Experience' },
  { value: '4', label: 'Figma Designs' },
  { value: '3', label: 'AI/ML Projects' },
];

const EDUCATION = [
  { year: 'Present', title: 'BSc (Hons) Information Technology', org: 'SLIIT', gpa: 'GPA 2.98' },
  { year: '—', title: 'Higher Diploma in Information Technology', org: 'SLIIT' },
  { year: 'A/Levels', title: 'Physics (S), Chemistry (C), Combined Mathematics (C)', org: '—' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
      <div className="relative mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl text-slate-800 dark:text-white"
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-slate-600 dark:text-slate-400 sm:mb-12"
        >
          Get to know who I am and what I do.
        </motion.p>

        <div className="grid gap-10 lg:items-start lg:grid-cols-2 lg:gap-16">
          {/* Single profile photo - replaced with animated asset image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-24 z-10 mx-auto w-full max-w-md lg:mx-0 lg:top-32"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-400/40 to-amber-600/30 blur-xl dark:from-amber-400/30 dark:to-amber-500/20 animate-pulse" />
              <motion.img
                src="/assets/images/image.png"
                alt="Profile Presentation"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-auto w-full aspect-square md:aspect-auto md:min-h-[400px] rounded-2xl object-cover shadow-2xl drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]"
              />
            </div>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card-base rounded-2xl px-4 py-4 sm:px-5 sm:py-4 transition"
                >
                  <span className="block text-xl font-bold text-amber-600 dark:text-amber-400 sm:text-2xl md:text-3xl">{stat.value}</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 sm:text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-base flex items-start gap-4 rounded-2xl p-4 transition"
            >
              <div className="rounded-xl bg-amber-500/15 p-2.5 dark:bg-amber-400/20">
                <MapPin className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 dark:text-white">Bandaragama, Sri Lanka</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Open to remote and onsite opportunities</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white">
                <GraduationCap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                Education
              </h3>
              <ul className="space-y-3">
                {EDUCATION.map((edu, i) => (
                  <motion.li
                    key={edu.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="card-base rounded-xl px-4 py-3 transition"
                  >
                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">{edu.year}</span>
                    <p className="font-medium text-slate-800 dark:text-white">{edu.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{edu.org}</p>
                    {edu.gpa && <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{edu.gpa}</p>}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-base rounded-2xl p-4 transition"
            >
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white">
                <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                Awards & Certifications
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                <li>• Merit Award — AI Sprint, Codefest 2024 (SLIIT × Sysco LABS)</li>
                <li>• Higher Diploma in Information Technology — SLIIT</li>
                <li>• A/Levels: Physics (S), Chemistry (C), Combined Mathematics (C)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
