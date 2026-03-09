import React, { useState } from 'react';
import { PhoneTagLogo } from './components/PhoneTagLogo';
import { motion } from 'motion/react';
import { Phone, Users, CheckCircle, Clock, XCircle, MoreHorizontal } from 'lucide-react';

const STATUSES = [
  {
    id: 'busy',
    label: 'Busy',
    description: 'Do not disturb',
    color: '#EF4444',
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: XCircle,
  },
  {
    id: 'few-mins',
    label: 'A Few Mins Left',
    description: 'Almost done',
    color: '#F59E0B',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: Clock,
  },
  {
    id: 'free',
    label: 'Free to Talk',
    description: 'Call me anytime',
    color: '#10B981',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: CheckCircle,
  },
];

export default function App() {
  const [activeStatus, setActiveStatus] = useState<string | null>(null);



  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Navbar */}
      <header className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <PhoneTagLogo className="w-10 h-10 text-slate-800" />
          <span className="font-bold text-xl tracking-tight text-slate-900">PhoneTag</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
        </nav>
        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors hidden md:block">
          Get the App
        </button>
        <button className="md:hidden p-2 text-slate-600">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 max-w-5xl mx-auto w-full">
        
        {/* Logo Presentation */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 relative flex items-center justify-center p-12 bg-white rounded-3xl shadow-xl border border-slate-100 w-full max-w-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.slate.100)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
          
          <PhoneTagLogo 
            className="w-48 h-48 md:w-64 md:h-64 text-slate-800 relative z-10 drop-shadow-sm transition-all duration-500 group-hover:scale-105" 
          />
        </motion.div>

        <div className="text-center mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Know when to call. <br className="hidden md:block" />
            <span className="text-slate-500">Stop playing phone tag.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            PhoneTag lets you broadcast your current availability to your contacts using a simple three-status system. Focus when you need to, connect when you're free.
          </p>
        </div>

        {/* Interactive Status Selector */}
        <div className="w-full max-w-3xl">
          <h2 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
            Try the interactive status
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STATUSES.map((status) => {
              const Icon = status.icon;
              const isActive = activeStatus === status.id;
              
              return (
                <button
                  key={status.id}
                  onClick={() => setActiveStatus(isActive ? null : status.id)}
                  className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isActive 
                      ? `${status.bg} ${status.border} shadow-md scale-105` 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div 
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center transition-colors"
                    style={{ backgroundColor: isActive ? status.color : '#F1F5F9', color: isActive ? 'white' : status.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`font-bold mb-1 ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                    {status.label}
                  </h3>
                  <p className="text-sm text-slate-500 text-center">
                    {status.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </main>
      
      {/* Footer feature list */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <PhoneTagLogo className="w-6 h-6 text-slate-300" variant="white" />
            <span className="font-semibold text-slate-300">PhoneTag Inc.</span>
          </div>
          <div className="flex gap-8 text-sm">
            <span>Seamless syncing</span>
            <span>•</span>
            <span>Privacy first</span>
            <span>•</span>
            <span>Zero latency updates</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
