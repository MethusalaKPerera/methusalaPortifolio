import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const direction = useScrollDirection();
  const visible = direction === 'up';
  const { isDark, toggleTheme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 px-3 py-2 sm:px-4 md:px-6"
        >
          <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200 dark:border-white/20 bg-white/90 dark:bg-slate-900/90 px-3 py-2.5 backdrop-blur-xl sm:px-4 md:px-6">
            <a href="#hero" className="text-base font-bold tracking-tight sm:text-lg md:text-xl text-slate-800 dark:text-white">
              <span className="gradient-text">Methusala</span>
            </a>

            <div className="flex items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="rounded-xl p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-amber-400 transition"
              >
                {isDark ? <Sun className="h-5 w-5 sm:h-5 sm:w-5" /> : <Moon className="h-5 w-5 sm:h-5 sm:w-5" />}
              </button>

              <ul className="hidden items-center gap-4 md:flex md:gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-slate-600 dark:text-white/80 hover:text-amber-600 dark:hover:text-amber-400 transition"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                aria-label="Toggle menu"
                className="rounded-lg p-2 text-slate-700 dark:text-white/90 hover:bg-slate-200/80 dark:hover:bg-white/10 md:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl md:hidden"
              >
                <ul className="flex flex-col gap-0.5 p-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block rounded-xl px-4 py-3 text-slate-700 dark:text-white/90 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-amber-400"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
