import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'CoolFlow saved my summer! Their technician arrived within 30 minutes and fixed my AC compressor with absolute precision. Truly elite service.',
    rating: 5,
    image: 'https://picsum.photos/seed/sarah/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'We use CoolFlow for all our commercial properties. Their AMC plans are the best in the industry—zero downtime and perfect maintenance.',
    rating: 5,
    image: 'https://picsum.photos/seed/michael/100/100',
  },
  {
    name: 'Emma Williams',
    role: 'Interior Designer',
    content: 'As a designer, I appreciate their attention to detail. Not only is the cooling perfect, but their installation is clean and aesthetically flawless.',
    rating: 5,
    image: 'https://picsum.photos/seed/emma/100/100',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Client Stories
          </motion.span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-text-main mb-6">
            TRUSTED BY <span className="text-gradient">THOUSANDS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col group"
            >
              <div className="mb-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30 group-hover:rotate-12 transition-transform">
                  <Quote size={24} fill="currentColor" />
                </div>
                <div className="flex gap-1 mb-4 pt-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xl text-text-main/70 leading-relaxed font-medium italic">
                  "{t.content}"
                </p>
              </div>
              
              <div className="mt-auto flex items-center gap-5 pt-8 border-t border-primary/10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-2xl object-cover shadow-lg border-2 border-white"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xl font-black text-text-main">{t.name}</h4>
                  <p className="text-sm text-primary font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
