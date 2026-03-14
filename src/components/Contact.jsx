import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Send, Copy, Check } from 'lucide-react';

const CONTACTS = [
  { label: 'Phone', value: '+94701005098', href: 'tel:+94701005098', icon: Phone },
  { label: 'Email', value: 'methusala28@gmail.com', href: 'mailto:methusala28@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/methusala-perera-46940028a', href: 'https://www.linkedin.com/in/methusala-perera-46940028a/', icon: Linkedin },
  { label: 'GitHub', value: 'github.com/MethusalaKPerera', href: 'https://github.com/MethusalaKPerera', icon: Github },
];

function ContactItem({ item }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(item.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (_) {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-base flex items-center justify-between gap-4 rounded-2xl p-4 transition"
    >
      <a
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="flex flex-1 min-w-0 items-center gap-3"
      >
        <div className="rounded-xl bg-amber-500/15 p-2 dark:bg-amber-400/20 shrink-0">
          <item.icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-slate-500 dark:text-slate-400">{item.label}</p>
          <p className="truncate font-medium text-slate-800 dark:text-white">{item.value}</p>
        </div>
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-lg p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-amber-400 shrink-0"
        aria-label="Copy"
        title="Copy to clipboard"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl text-slate-800 dark:text-white"
        >
          <span className="gradient-text">Contact</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-slate-600 dark:text-slate-400 sm:mb-12"
        >
          Get in touch — I'm available for hire.
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Contact info</h3>
            {CONTACTS.map((item) => (
              <ContactItem key={item.label} item={item} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="card-base rounded-2xl p-6 transition md:p-8"
            >
              <div className="mb-4">
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/40 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/40 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/40 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-medium text-white transition hover:bg-amber-600"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" />
                    Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
