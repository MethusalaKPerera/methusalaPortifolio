import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { projects } from '../data/projects';

const GREETING = `Hi! I'm your portfolio assistant. Ask me about Methusala's 16 projects, skills, education (SLIIT, GPA 2.98), or experience at Gamage Recruiters (Lead Frontend Developer & UI/UX Designer).`;

function getReply(input) {
  const lower = input.toLowerCase().trim();
  if (!lower) return "Type a question about Methusala's work, skills, or experience.";

  if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio')) {
    const list = projects.slice(0, 8).map((p) => `• ${p.title} (${p.category})`).join('\n');
    return `Here are some projects:\n${list}\n...and ${projects.length - 8} more. Ask "tell me about [project name]" for details!`;
  }

  if (lower.includes('skill') || lower.includes('tech')) {
    return `Skills include: Frontend (React, Next.js, TypeScript), Backend (Spring Boot, Node.js, Python), Mobile (Kotlin), Design (Figma), DB (MongoDB, MySQL), AI/ML (PyTorch, RAG, Sentence-BERT). Tools: GitHub, Postman, VS Code.`;
  }

  if (lower.includes('education') || lower.includes('sliit') || lower.includes('gpa')) {
    return `Education: Final year BSc (Hons) Information Technology at SLIIT, GPA 2.98. Higher Diploma in IT from SLIIT. A/Levels: Physics (S), Chemistry (C), Combined Mathematics (C).`;
  }

  if (lower.includes('gamage') || lower.includes('experience') || lower.includes('job')) {
    return `Experience: Gamage Recruiters — Lead Frontend Developer (6 months) and former Lead UI/UX Designer. Currently final year student at SLIIT. Available for hire.`;
  }

  if (lower.includes('hire') || lower.includes('available') || lower.includes('contact')) {
    return `Methusala is available for hire. Contact: methusala28@gmail.com, +94701005098. LinkedIn: linkedin.com/in/methusala-perera-46940028a. GitHub: github.com/MethusalaKPerera.`;
  }

  const match = projects.find((p) => lower.includes(p.title.toLowerCase()));
  if (match) {
    return `${match.title} — ${match.type}\n${match.description.slice(0, 200)}...`;
  }

  return `I can tell you about Methusala's projects, skills, education, or experience at Gamage Recruiters. Try asking "What projects do you have?" or "Tell me about your skills."`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: GREETING }]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setInput('');
    setMessages((m) => [...m, { role: 'user', text: userText }]);
    const reply = getReply(userText);
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: reply }]);
    }, 400);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 z-40 flex h-[380px] w-[calc(100vw-2rem)] max-w-[340px] flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-white/20 bg-white dark:bg-slate-900 shadow-2xl backdrop-blur sm:bottom-24 sm:right-6 md:right-8"
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 px-4 py-3">
              <span className="font-semibold text-slate-800 dark:text-white">Portfolio assistant</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 text-slate-500 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-amber-400"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                      msg.role === 'user'
                        ? 'bg-amber-500 text-white'
                        : 'bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <pre className="whitespace-pre-wrap font-sans">{msg.text}</pre>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 border-t border-slate-200 dark:border-white/10 p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ask about projects, skills..."
                className="flex-1 rounded-xl border border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 px-4 py-2 text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-white/40 outline-none focus:border-amber-500"
              />
              <button
                type="button"
                onClick={send}
                className="rounded-xl bg-amber-500 p-2 text-white hover:bg-amber-600"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg shadow-amber-500/30 hover:bg-amber-600 sm:h-14 sm:w-14 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
        aria-label="Open chatbot"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </>
  );
}
