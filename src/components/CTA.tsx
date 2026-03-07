import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass p-6 sm:p-12 md:p-24 rounded-[32px] sm:rounded-[64px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,92,0,0.3)] border-white/60 text-center"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-accent to-primary opacity-10 -z-10" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-8 block">Ready to start?</span>
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-display font-black text-text-main mb-10 leading-[0.9]">
              RESTORE YOUR <br />
              <span className="text-gradient">COMFORT</span> TODAY
            </h2>
            <p className="text-lg sm:text-2xl text-text-main/60 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Don't let the heat win. Our master technicians are ready to bring the chill back to your sanctuary.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/book" className="hidden md:flex btn-primary text-2xl px-12 py-6 shadow-2xl shadow-primary/40 w-full sm:w-auto">
                Book Now
                <ArrowRight size={28} />
              </Link>

              <div className="flex gap-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/1234567890"
                  className="btn-outline px-10 py-6 flex-1 sm:flex-none glass border-primary/20"
                >
                  <MessageCircle size={28} />
                  WhatsApp
                </a>
                {/* <a 
                  href="tel:+1234567890" 
                  className="md:hidden btn-outline px-10 py-6 flex-1"
                >
                  <Phone size={28} />
                  Call
                </a> */}
              </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-12 opacity-40 grayscale">
              <p className="text-sm sm:text-xl font-black tracking-widest">ISO CERTIFIED</p>
              <p className="text-sm sm:text-xl font-black tracking-widest">24/7 SUPPORT</p>
              <p className="text-sm sm:text-xl font-black tracking-widest">ECO FRIENDLY</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
