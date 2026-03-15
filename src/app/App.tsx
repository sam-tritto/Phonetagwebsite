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
    label: 'Available',
    color: '#10B981',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: CheckCircle,
    vibe: 'Open for a long catch-up.'
  },
  {
    id: 'few-mins',
    label: 'Quick Chat',
    color: '#F59E0B',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: Clock,
    vibe: 'I’m almost at work; keep it brief.'
  },
  {
    id: 'busy',
    label: 'Focused',
    color: '#EF4444',
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: XCircle,
    vibe: 'Don’t even try; I’ll see you later.'
  },
];

const FEATURES = [
  {
    title: "Privacy First",
    description: "You aren't a dot on a map. You're a status in a circle. You control who sees your light.",
    icon: ShieldCheck,
  },
  {
    title: "Instant Updates",
    description: "Rather catch up with a friend than listen to a podcast? One tap. Your inner circle knows the second you're free.",
    icon: Zap,
  },
  {
    title: "Universal",
    description: "Android and iOS finally agree on something. Stay in sync with everyone. No usernames, no messages, just meaningful connections.",
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
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-5xl leading-[1.1]"
          >
            In an ever changing world we are more connected online, but <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">lonelier in person.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-medium"
          >
            Real-time presence meets spontaneous conversation. 
            <br />
            <span className="text-slate-900 font-bold italic">See who's free and talk now.</span>
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
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <MessageSquareOff className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">The loop is exhausting.</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Communication shouldn't be a game of chance.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex flex-col items-center pt-1">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">OLD</div>
                  <div className="w-px h-full bg-slate-100 my-2"></div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-400 uppercase tracking-wider text-xs mb-2">The Old Way</h3>
                  <p className="text-lg text-slate-500 italic">Text <ArrowRight className="inline w-4 h-4" /> Wait <ArrowRight className="inline w-4 h-4" /> Call <ArrowRight className="inline w-4 h-4" /> Voicemail <ArrowRight className="inline w-4 h-4" /> “Call me later!” <ArrowRight className="inline w-4 h-4" /> Repeat.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center pt-1">
                  <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white">NEW</div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2 underline decoration-slate-900 decoration-2 underline-offset-4">The PhoneTag Way</h3>
                  <p className="text-2xl font-bold text-slate-900">Glance <ArrowRight className="inline w-5 h-5 mx-1" /> See "Free" <ArrowRight className="inline w-5 h-5 mx-1" /> Meaningful Conversation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-12 border border-slate-200 shadow-inner relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-100/50 transition-colors"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
              <div className="text-center">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-red-500/60 block mb-2">Math of Misery</span>
                <div className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter shadow-sm">6 HOURS</div>
                <div className="text-lg font-bold text-slate-500 mt-2 uppercase tracking-widest italic decoration-red-500 decoration-2 underline underline-offset-8">Wasted Every Week</div>
              </div>
              <div className="w-full h-px bg-slate-200"></div>
              <p className="text-sm font-medium text-slate-500 text-center italic max-w-xs leading-relaxed">
                Purposefully simple. <br />
                <span className="text-slate-900 not-italic font-bold">So simple, even Grandpa can use it.</span>
              </p>
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
                  <p className="text-sm text-slate-400 text-center relative z-10 leading-relaxed font-medium">
                    {status.vibe}
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
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 tracking-tighter">Ready to reclaim your focus?</h2>
            <div className="mb-12 space-y-4 relative z-10">
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                Join 2,000+ people reclaiming their focus and building deeper connections.
              </p>
              <div className="w-12 h-px bg-slate-700 mx-auto"></div>
              <p className="text-sm text-slate-500 italic max-w-lg mx-auto leading-relaxed">
                PhoneTag doesn’t ask you to join a new world. <br />
                <span className="text-white not-italic font-bold">It makes the one you’re in more accessible.</span>
              </p>
            </div>
            
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

