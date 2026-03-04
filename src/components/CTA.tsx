import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="relative bg-primary rounded-[40px] p-12 md:p-20 overflow-hidden shadow-2xl">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Restore <br />
              Your Comfort?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg">
              Don't let a malfunctioning AC ruin your day. Our expert technicians are just a call away. 
              Get your free estimate now!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="tel:+1234567890" 
                className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all active:scale-95 shadow-xl"
              >
                <Phone size={24} />
                Call Now
              </a>
              <a 
                href="https://wa.me/1234567890" 
                className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all active:scale-95"
              >
                <MessageCircle size={24} />
                WhatsApp
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
              <img
                src="https://picsum.photos/seed/ac-cta/800/600"
                alt="Expert AC Service"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 z-20 bg-accent p-6 rounded-2xl shadow-xl text-white font-bold text-center">
              <p className="text-3xl">20%</p>
              <p className="text-sm">OFF Today</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
