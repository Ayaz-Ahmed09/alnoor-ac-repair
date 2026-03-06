import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Award, Clock } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '12+', icon: Award },
  { label: 'Happy Clients', value: '5k+', icon: Users },
  { label: 'Service Points', value: '25+', icon: CheckCircle2 },
  { label: 'Response Time', value: '30m', icon: Clock },
];

export default function Stats() {
  return (
    <section className="py-12 relative z-20 -mt-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-6 md:p-12 rounded-[32px] sm:rounded-[40px] shadow-2xl border-white/50 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 text-primary rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <stat.icon size={24} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-black text-text-main mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-[10px] sm:text-sm text-text-main/50 font-black uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
