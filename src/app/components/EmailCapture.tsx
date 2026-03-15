import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { subscribeEmail } from '../../lib/emailService';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    const result = await subscribeEmail(email);

    if (result.success) {
      setStatus('success');
      setEmail('');
      setMessage("You're on the list! We'll be in touch soon.");
    } else {
      setStatus('error');
      setMessage(typeof result.error === 'string' ? result.error : 'Something went wrong. Please check your connection.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl flex items-center gap-4 text-emerald-800"
          >
            <CheckCircle className="w-6 h-6 shrink-0 text-emerald-500" />
            <p className="font-medium">{message}</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-none focus:ring-0 text-slate-900 placeholder:text-slate-400 bg-transparent outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group/btn disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Join Waitlist
                    <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </>
                )}
              </button>
            </div>
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs mt-2 ml-4 flex items-center gap-1 font-medium"
              >
                <AlertCircle className="w-3 h-3" />
                {message}
              </motion.p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
