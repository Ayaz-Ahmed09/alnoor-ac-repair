import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight, Search, Star } from 'lucide-react';

export default function Hero({ onSearch }: { onSearch?: (q: string) => void }) {
  const [localQuery, setLocalQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(localQuery);
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute -bottom-48 -left-48 -z-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full font-bold text-sm mb-8 text-primary border-primary/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            24/7 EMERGENCY REPAIR
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-text-main leading-[0.9] mb-8">
            STAY COOL <br />
            <span className="text-gradient">EXPERT AC</span> <br />
            REPAIR
          </h1>
          
          <p className="text-xl text-text-main/70 mb-10 max-w-lg leading-relaxed font-medium">
            Premium air conditioning solutions for your sanctuary. 
            Our master technicians restore your comfort with surgical precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <a href="#contact" className="btn-primary text-xl px-10 py-5 shadow-2xl shadow-primary/30">
              Book Now
              <ArrowRight size={24} />
            </a>
            
            <div className="flex gap-4">
              <a 
                href="https://wa.me/1234567890" 
                className="btn-outline px-8 py-5 flex-1 sm:flex-none bg-white/50 backdrop-blur-sm"
              >
                <MessageCircle size={24} />
                WhatsApp
              </a>
              <a 
                href="tel:+1234567890" 
                className="md:hidden btn-outline px-8 py-5 flex-1"
              >
                <Phone size={24} />
                Call
              </a>
            </div>
          </div>

          <form onSubmit={handleSearch} className="glass p-3 rounded-[24px] flex flex-col sm:flex-row items-center gap-3 max-w-xl relative z-20 shadow-2xl border-white/50">
            <div className="flex items-center flex-1 w-full px-4">
              <Search className="text-primary" size={24} />
              <input
                type="text"
                placeholder="What service do you need?"
                className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-text-main placeholder:text-text-main/40 font-bold text-lg"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto py-4 px-10 rounded-2xl shadow-xl">
              Search
            </button>
          </form>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  alt="User"
                  className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} className="fill-primary text-primary" />)}
              </div>
              <p className="text-sm font-bold text-text-main">
                Trusted by 5,000+ happy residents
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:ml-auto"
        >
          <div className="relative z-10 rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,92,0,0.2)] border-[12px] border-white floating">
            <img
              src="https://picsum.photos/seed/ac-repair-hero/1000/1200"
              alt="Master Technician"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating Glass Cards */}
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 z-20 glass p-8 rounded-[32px] shadow-2xl border-white/60 hidden md:block"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary/40">
                <Phone size={32} />
              </div>
              <div>
                <p className="text-sm text-text-main/60 font-bold uppercase tracking-widest">Emergency Line</p>
                <p className="text-2xl font-black text-text-main">+1 (234) 567-890</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 -right-10 z-20 glass p-6 rounded-[24px] shadow-2xl border-white/60 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
                <Star size={20} fill="currentColor" />
              </div>
              <p className="font-black text-text-main">4.9/5 Rating</p>
            </div>
          </motion.div>
          
          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
