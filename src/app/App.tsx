import React, { useState } from 'react';
import { PhoneTagLogo } from './components/PhoneTagLogo';
import { EmailCapture } from './components/EmailCapture';
import { motion } from 'motion/react';
import User1 from '@/assets/user_1.png';
import User2 from '@/assets/user_2.png';
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
  ArrowRight,
  AlertTriangle
} from 'lucide-react';

const STATUSES = [
  {
    id: 'free',
    label: 'Free to Talk',
    color: '#10B981',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: CheckCircle,
    description: "Automatically lets your contacts know you're free to talk."
  },
  {
    id: 'few-mins',
    label: 'Only a Few Mins Left',
    color: '#F59E0B',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: Clock,
    description: "I’m almost at work; keep it brief."
  },
  {
    id: 'busy',
    label: 'Busy',
    color: '#EF4444',
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: XCircle,
    description: "Don't even try; I'll talk to you later."
  },
];

const FEATURES = [
  {
    title: "Privacy First",
    description: "No tracking, no sharing, no strangers. Your availability is shared only with the people you know and choose.",
    icon: ShieldCheck,
    color: '#CC5555'
  },
  {
    title: "Instant Updates",
    description: "Rather catch up with a friend than listen to a podcast? One tap. Your inner circle knows the second you’re free.",
    icon: Zap,
    color: '#E8B84B'
  },
  {
    title: "Universal",
    description: "Android and iOS finally agree on something. Stay in sync with everyone. No usernames, no messages, just meaningful connections.",
    icon: Smartphone,
    color: '#82B94C'
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
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
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
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-5xl leading-tight"
          >
            In an ever changing world we are more connected online, but lonelier in person.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-900 mb-12 max-w-3xl leading-relaxed"
          >
            <span className="font-extralight block mb-6">Real-time presence meets spontaneous conversation.</span>
            <span className="text-2xl md:text-4xl font-bold block">
              Stop playing <strong>phone tag</strong>,
              <br />
              see who's <span style={{ color: '#CC5555' }}>free</span> and <span style={{ color: '#E8B84B' }}>talk</span> <span style={{ color: '#82B94C' }}>now</span>.
            </span>
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
              {[
                { text: 'No more "is now a good time?" texts', icon: XCircle, color: '#CC5555' },
                { text: 'Respect boundaries effortlessly', icon: AlertTriangle, color: '#E8B84B' },
                { text: 'Spontaneous conversations, zero scheduling required.', icon: CheckCircle, color: '#82B94C' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm opacity-50 italic">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                  <img src={User2} alt="User 2" className="w-full h-full object-cover rounded-full" />
                </div>
                <span>"Hey, can you talk?"</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm ml-8">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-500">
                  <img src={User1} alt="User 1" className="w-full h-full object-cover rounded-full" />
                </div>
                <span>"Busy now, I'll call back at 4?"</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm opacity-50 italic">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                  <img src={User2} alt="User 2" className="w-full h-full object-cover rounded-full" />
                </div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple status. Connect with intention.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Broadcast your availability to your circle in a single tap. 
              The easiest way to stay in touch without the noise. So simple, even Grandpa can use it.
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
                    {status.description}
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
                  <div 
                    className="w-12 h-12 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-slate-200"
                    style={{ backgroundColor: feature.color }}
                  >
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

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-600 text-lg">
              Start for free, upgrade when you want more flexibility.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto pb-4 pt-4 -mt-4">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="w-1/4 py-4 px-4 md:py-5 md:px-6 bg-white border-b border-slate-200">
                      <span className="text-lg font-bold text-slate-900">Feature</span>
                    </th>
                    <th className="w-1/4 py-4 px-4 md:py-5 md:px-6 border-b border-slate-200 border-l border-slate-200 relative text-center" style={{ backgroundColor: '#fdfbf4' }}>
                      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: '#E8B84B' }}></div>
                      <div className="text-xl font-bold text-slate-900">Standard</div>
                    </th>
                    <th className="w-1/4 py-5 px-4 md:py-6 md:px-6 border-t-4 border-l-2 border-r-2 border-b-0 border-[#82B94C] relative text-center shadow-xl z-20" style={{ backgroundColor: '#f9fdf5' }}>
                      <div className="text-2xl font-black text-slate-900 flex flex-col items-center gap-1">
                        Pro
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm" style={{ backgroundColor: '#82B94C', color: 'white' }}>
                          Recommended
                        </span>
                      </div>
                    </th>
                    <th className="w-1/4 py-4 px-4 md:py-5 md:px-6 border-b border-slate-200 relative text-center border-l-0" style={{ backgroundColor: '#fdf6f6' }}>
                      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: '#CC5555' }}></div>
                      <div className="text-xl font-bold text-slate-900 flex flex-col items-center gap-1">
                        Premier
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ backgroundColor: '#CC5555', color: 'white' }}>
                          Coming Soon
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Price */}
                  <tr className="hover:bg-slate-50/50 transition-colors border-t-0">
                    <td className="py-3 px-4 md:py-4 md:px-6 font-semibold text-slate-900">Price</td>
                    <td className="py-3 px-4 md:py-4 md:px-6 border-l border-slate-100 text-center" style={{ backgroundColor: '#fdfbf4' }}>
                      <div className="font-bold text-lg text-slate-900">$0 <span className="text-sm font-normal text-slate-500">/ forever</span></div>
                    </td>
                    <td className="py-4 px-4 md:py-5 md:px-6 border-l-2 border-r-2 border-[#82B94C] text-center relative z-20 shadow-[0_5px_15px_rgba(130,185,76,0.1)]" style={{ backgroundColor: '#fbfdf8' }}>
                      <div className="font-black text-3xl text-slate-900 mb-1">$1.99 <span className="text-sm font-medium text-slate-500">/ mo</span></div>
                      <div className="text-xs text-slate-500 bg-white inline-block px-3 py-1 rounded-full border border-slate-100 shadow-sm mt-1">
                        or <span className="font-bold text-slate-700">$19.99</span> / yr
                      </div>
                    </td>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-center border-l-0" style={{ backgroundColor: '#fdf6f6' }}>
                      <div className="font-bold text-lg text-slate-900 mb-1">$7.99 <span className="text-sm font-normal text-slate-500">/ mo</span></div>
                      <div className="text-xs text-slate-500 bg-white inline-block px-3 py-1 rounded-full border border-slate-100 shadow-sm">
                        or <span className="font-bold text-slate-700">$59.99</span> / yr
                      </div>
                    </td>
                  </tr>
                  
                  {/* Inner Circle */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 md:py-4 md:px-6 font-semibold text-slate-900">Inner Circle</td>
                    <td className="py-3 px-4 md:py-4 md:px-6 border-l border-slate-100 text-center font-medium" style={{ backgroundColor: '#fdfbf4', color: '#b98818' }}>
                      Up to 3 Contacts
                    </td>
                    <td className="py-4 px-4 md:py-5 md:px-6 border-l-2 border-r-2 border-[#82B94C] text-center font-bold text-lg relative z-20 shadow-[0_5px_15px_rgba(130,185,76,0.1)]" style={{ backgroundColor: '#fbfdf8', color: '#68943d' }}>
                      Up to 10 Contacts
                    </td>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-center font-medium border-l-0" style={{ backgroundColor: '#fdf6f6', color: '#a03b3b' }}>
                      Up to 100 Contacts
                    </td>
                  </tr>

                  {/* Personalization */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 md:py-4 md:px-6 font-semibold text-slate-900">Personalization</td>
                    <td className="py-3 px-4 md:py-4 md:px-6 border-l border-slate-100 text-center font-medium" style={{ backgroundColor: '#fdfbf4', color: '#b98818' }}>
                      3 Standard Statuses
                      <div className="text-xs text-amber-700/60 mt-1 font-normal">(busy, a few mins left, free)</div>
                    </td>
                    <td className="py-4 px-4 md:py-5 md:px-6 border-l-2 border-r-2 border-[#82B94C] text-center font-bold text-lg relative z-20 shadow-[0_5px_15px_rgba(130,185,76,0.1)]" style={{ backgroundColor: '#fbfdf8', color: '#68943d' }}>
                      Custom Status Emojis
                    </td>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-center font-medium border-l-0" style={{ backgroundColor: '#fdf6f6', color: '#a03b3b' }}>
                      Interactive Status Themes
                    </td>
                  </tr>

                  {/* Privacy */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 md:py-4 md:px-6 font-semibold text-slate-900">Privacy & AI</td>
                    <td className="py-3 px-4 md:py-4 md:px-6 border-l border-slate-100 text-center" style={{ backgroundColor: '#fdfbf4' }}>
                      <div className="font-semibold mb-1" style={{ color: '#b98818' }}>Basic</div>
                      <div className="text-sm opacity-80 leading-relaxed" style={{ color: '#c99929' }}>Send your availability to<br/>all 3 contacts</div>
                    </td>
                    <td className="py-4 px-4 md:py-5 md:px-6 border-l-2 border-r-2 border-[#82B94C] text-center relative z-20 shadow-[0_5px_15px_rgba(130,185,76,0.1)]" style={{ backgroundColor: '#fbfdf8' }}>
                      <div className="font-bold text-lg mb-1" style={{ color: '#68943d' }}>Select Contacts & Groups</div>
                      <div className="text-sm opacity-90 leading-relaxed font-medium" style={{ color: '#7aab4a' }}>Choose who you’d like to notify</div>
                    </td>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-center border-l-0" style={{ backgroundColor: '#fdf6f6' }}>
                      <div className="font-semibold mb-1" style={{ color: '#a03b3b' }}>Smart Scheduling</div>
                      <div className="text-sm opacity-80 leading-relaxed" style={{ color: '#b84e4e' }}>AI Auto Context Availability, Ready in X</div>
                    </td>
                  </tr>

                  {/* Notifications */}
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 md:py-4 md:px-6 font-semibold text-slate-900">Notifications</td>
                    <td className="py-3 px-4 md:py-4 md:px-6 border-l border-slate-100 text-center font-medium" style={{ backgroundColor: '#fdfbf4', color: '#b98818' }}>
                      Receive
                    </td>
                    <td className="py-4 px-4 md:py-5 md:px-6 border-b-4 border-l-2 border-r-2 border-[#82B94C] text-center font-bold text-lg relative z-20 shadow-[0_10px_20px_rgba(130,185,76,0.15)]" style={{ backgroundColor: '#fbfdf8', color: '#68943d' }}>
                      Send and Receive
                    </td>
                    <td className="py-3 px-4 md:py-4 md:px-6 text-center font-medium border-l-0" style={{ backgroundColor: '#fdf6f6', color: '#a03b3b' }}>
                      Custom Messages and Priority "Flash" Notifications
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-100/50 shadow-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">The PhoneTag Privacy Promise</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We only use your status and contact data to make the app work for you and your friends—<span className="font-semibold text-slate-900">we never sell your information or track you across other apps</span>. Your subscriptions are securely handled by <span className="font-semibold">RevenueCat</span>, so your payment details never even touch our servers.
              </p>
            </div>
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
              Join the growing waitlist for a better way to communicate.
            </p>
            
            <div className="max-w-md mx-auto relative z-10">
              <EmailCapture buttonColor="#82B94C" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <PhoneTagLogo className="w-6 h-6 text-slate-900" />
            <span className="font-bold text-slate-900">PhoneTag</span>
          </div>
          <div className="flex gap-8 text-sm font-semibold text-slate-400">
            <a href="https://app.termly.io/document/privacy-policy/82700da7-bcc6-4cb7-a9d8-e0d576dd0eff" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=3bb3606e-321b-4713-bc32-891352460c49" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=c1a86168-30e5-49e2-ad04-9a61820df7fa" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">EULA</a>
          </div>
          <p className="text-sm text-slate-400">© 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

