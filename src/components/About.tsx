import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Zap, ThermometerSnowflake, ArrowRight } from 'lucide-react';

const features = [
  { title: 'Certified Technicians', description: 'Our team is fully licensed and trained to handle all major AC brands.', icon: ShieldCheck },
  { title: 'Quick Response', description: 'We value your time. Expect us at your doorstep within 30-60 minutes.', icon: Zap },
  { title: 'Transparent Pricing', description: 'No hidden costs. We provide upfront estimates before starting any work.', icon: CheckCircle2 },
  { title: 'Energy Efficiency', description: 'We optimize your AC performance to save you money on electricity bills.', icon: ThermometerSnowflake },
];

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white floating">
            <img
              src="/about-2.png"
              alt="Our Expert Technician"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating Experience Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-10 z-20 bg-primary p-6 sm:p-10 rounded-[40px] shadow-2xl text-white text-center border-4 border-white"
          >
            <p className="text-4xl sm:text-6xl font-black mb-1">12+</p>
            <p className="text-[10px] sm:text-sm font-black uppercase tracking-widest opacity-90">Years of Excellence</p>
          </motion.div>

          {/* Decorative Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Our Story</span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-text-main mb-8 leading-[0.9]">
            WE BRING <span className="text-gradient">COOLNESS</span> <br />
            BACK TO LIFE
          </h2>

          <p className="text-xl text-text-main/70 mb-12 leading-relaxed font-medium">
            At CoolFlow, we understand that a malfunctioning AC is more than just an inconvenience—it's a disruption to your sanctuary.
            We've dedicated over a decade to providing elite cooling solutions with a commitment to surgical precision and speed.
          </p>

          <div className="grid sm:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                  <feature.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-text-main mb-2 tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-text-main/60 leading-relaxed font-medium">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <a href="#contact" className="btn-primary text-lg px-10 py-5 shadow-xl shadow-primary/20">
              Discover Our Process
              <ArrowRight size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
