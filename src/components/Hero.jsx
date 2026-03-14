import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown, Download } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const ROLES = [
  'UI/UX Developer',
  'Full Stack Developer',
  'Frontend Developer',
  'React Developer',
  'Figma Designer',
];

const SOCIAL = [
  { href: 'https://github.com/MethusalaKPerera', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/methusala-perera-46940028a/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:methusala28@gmail.com', icon: Mail, label: 'Email' },
  { href: 'tel:+94701005098', icon: Phone, label: 'Phone' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const typewriter = useTypewriter(ROLES);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-4 pt-24 pb-14 sm:pt-28 sm:pb-16 md:px-6 md:pt-32 lg:pt-36">
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.h1
            variants={item}
            className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">Methusala Perera</span>
          </motion.h1>
          <motion.div
            variants={item}
            className="mt-2 min-h-[2rem] text-base text-amber-600 dark:text-amber-400 sm:mt-3 sm:min-h-[2.5rem] sm:text-lg md:text-xl lg:min-h-[2rem]"
          >
            <span>{typewriter}</span>
            <span className="animate-pulse">|</span>
          </motion.div>
          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-slate-600 dark:text-slate-300 md:mx-auto md:mt-6 lg:mx-0"
          >
            Final year BSc (Hons) IT student at SLIIT. Lead Frontend Developer & UI/UX Designer with a passion for
            building clean interfaces and full-stack applications. Available for hire.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-amber-500/25 transition hover:bg-amber-600 sm:px-6 sm:py-3"
            >
              View My Work
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </a>
            <a
              href="/Methusala_Perera_Frontend_Developer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/30 bg-white/80 dark:bg-white/5 px-5 py-2.5 font-medium text-slate-800 dark:text-white backdrop-blur transition hover:bg-slate-100 dark:hover:bg-white/10 sm:px-6 sm:py-3"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>
          <motion.div variants={item} className="mt-6 flex justify-center gap-3 sm:mt-8 sm:gap-4 lg:justify-start">
            {SOCIAL.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-xl border border-slate-200 dark:border-white/20 bg-white/80 dark:bg-white/5 p-2.5 text-slate-600 dark:text-white/80 transition hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-400 sm:p-3"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-400/30 to-amber-600/20 blur-xl dark:from-amber-400/25 dark:to-amber-500/15" />
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80">
              <img
                src="/assets/images/methusala.jpeg"
                alt="Methusala Perera"
                className="relative h-full w-full rounded-2xl object-cover shadow-2xl ring-2 ring-slate-200 dark:ring-white/20"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  const fallback = e.target.nextElementSibling;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div
                className="hidden absolute inset-0 flex items-center justify-center rounded-2xl bg-amber-500/20 text-4xl font-bold text-amber-600 dark:text-amber-400"
                aria-hidden
              >
                MP
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400 transition hover:text-amber-600 dark:hover:text-amber-400"
        >
          <span className="text-xs">Scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="h-6 w-6" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
