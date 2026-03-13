import React, { useState } from 'react';
import { PhoneTagLogo } from './components/PhoneTagLogo';
import { EmailCapture } from './components/EmailCapture';
import { motion } from 'motion/react';
import { 
  Phone, 
  Users, 
  CheckCircle, 
  Clock, 
  XCircle, 
  ShieldCheck, 
  Zap, 
  Smartphone,
  MessageSquareOff,
  ArrowRight
} from 'lucide-react';

const STATUSES = [
  {
    id: 'free',
    label: 'Free to Talk',
    color: '#10B981',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: CheckCircle,
  },
  {
    id: 'few-mins',
    label: 'A Few Mins',
    color: '#F59E0B',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: Clock,
  },
  {
    id: 'busy',
    label: 'Busy',
    color: '#EF4444',
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: XCircle,
  },
];

const FEATURES = [
  {
    title: "Privacy First",
    description: "No tracking, no sharing. Your availability is shared only with the people you choose.",
    icon: ShieldCheck,
  },
  {
    title: "Zero Latency",
    description: "Status updates are pushed instantly. When you change your status, the world knows.",
    icon: Zap,
  },
  {
    title: "Cross-Platform",
    description: "Whether you're on iOS or Android, PhoneTag keeps you in sync with everyone.",
    icon: Smartphone,
  }
];

export default function App() {
  const [activeStatus, setActiveStatus] = useState<string>('free');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Navbar */}
      <header className="px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <PhoneTagLogo className="w-8 h-8 text-slate-900" />
          <span className="font-bold text-lg tracking-tight text-slate-900">PhoneTag</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#problem" className="hover:text-slate-900 transition-colors">The Problem</a>
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it Works</a>
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
        </div>
        <a 
          href="#waitlist" 
          className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-md shadow-slate-200"
        >
          Join Waitlist
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 p-3 bg-white rounded-2xl shadow-xl border border-slate-100 relative group"
          >
            <PhoneTagLogo className="w-20 h-20 text-slate-900 relative z-10" />
            <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl"
          >
            Stop playing <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">phone tag.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed"
          >
            Know when your contacts are free before you call. A simple 3-status system to end the infinite "missed you" loop.
          </motion.p>

          <motion.div 
            id="waitlist"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full"
          >
            <EmailCapture />
            <p className="text-xs text-slate-400 mt-4">Be the first to know when we launch for iOS & Android.</p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquareOff className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The phone tag loop is exhausting.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              You call. They're busy. They call back. You're in a meeting. 
              Communication shouldn't be a game of chance. Existing social apps are noisy; PhoneTag is focused.
            </p>
            <ul className="space-y-4">
              {['No more "is now a good time?" texts', 'Respect boundaries effortlessly', 'Deep focus without missing the important calls'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <XCircle className="w-5 h-5 text-slate-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm opacity-50 italic">
                <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
                <span>"Hey, can you talk?"</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm ml-8">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">ME</div>
                <span>"Busy now, I'll call back at 4?"</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm opacity-50 italic">
                <div className="w-8 h-8 bg-slate-100 rounded-full"></div>
                <span>"Missed your call. Call me?"</span>
              </div>
              <div className="text-center py-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Total wasted time: 6 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / Interactive Section */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.15),transparent)]"></div>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple status. Smart connections.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Broadcast your availability to your circle in a single tap. 
              The most efficient way to stay in touch without the noise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATUSES.map((status) => {
              const Icon = status.icon;
              const isActive = activeStatus === status.id;
              
              return (
                <button
                  key={status.id}
                  onClick={() => setActiveStatus(status.id)}
                  className={`flex flex-col items-center p-8 rounded-3xl border-2 transition-all duration-500 relative group overflow-hidden ${
                    isActive 
                      ? `bg-white/10 border-white/20 shadow-2xl scale-105` 
                      : 'bg-white/5 border-transparent hover:border-white/10 hover:bg-white/10'
                  }`}
                >
                  <motion.div 
                    animate={{ 
                      scale: isActive ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ repeat: isActive ? Infinity : 0, duration: 2 }}
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center transition-colors relative z-10"
                    style={{ backgroundColor: status.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 relative z-10">
                    {status.label}
                  </h3>
                  <div className={`w-8 h-1 rounded-full mb-4 transition-all duration-500 ${isActive ? 'bg-white opacity-100' : 'bg-white opacity-0'}`}></div>
                  <p className="text-sm text-slate-400 text-center relative z-10 leading-relaxed">
                    Automatically lets your contacts know you're {status.label.toLowerCase()}.
                  </p>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="glow"
                      className="absolute inset-0 bg-white/5 blur-xl -z-0"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to end the tag?</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
              Join the 2,000+ people waiting for a better way to communicate.
            </p>
            
            <div className="max-w-md mx-auto relative z-10">
              <EmailCapture />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <PhoneTagLogo className="w-6 h-6 text-slate-900" />
            <span className="font-bold text-slate-900">PhoneTag Inc.</span>
          </div>
          <div className="flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="/TERMS.html" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
          </div>
          <p className="text-sm text-slate-400">© 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

