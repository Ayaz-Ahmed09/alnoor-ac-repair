import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/5 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available 24/7 for Emergencies
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-text-main leading-tight mb-6">
            Stay Cool with <br />
            <span className="text-primary">Expert AC Repair</span> <br />
            Services
          </h1>
          
          <p className="text-lg text-text-main/70 mb-8 max-w-lg leading-relaxed">
            Fast, reliable, and affordable air conditioning solutions for your home and office. 
            Our certified technicians are ready to restore your comfort today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-2 text-lg">
              Book a Service
              <ArrowRight size={20} />
            </a>
            
            {/* Desktop WhatsApp, Mobile Call */}
            <div className="flex gap-4">
              <a 
                href="https://wa.me/1234567890" 
                className="btn-outline flex items-center justify-center gap-2 flex-1 sm:flex-none"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a 
                href="tel:+1234567890" 
                className="md:hidden btn-outline flex items-center justify-center gap-2 flex-1"
              >
                <Phone size={20} />
                Call
              </a>
            </div>
          </div>
          
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-text-main/60">
              <span className="font-bold text-text-main">500+</span> Happy customers this month
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://picsum.photos/seed/ac-repair/800/600"
              alt="Professional AC Repair"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Emergency Service</p>
                <p className="text-lg font-bold text-text-main">+1 (234) 567-890</p>
              </div>
            </div>
          </motion.div>
          
          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
