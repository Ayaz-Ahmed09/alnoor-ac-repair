import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How often should I service my AC?',
    answer: 'For optimal performance and longevity, we recommend a professional service at least twice a year—once before the summer peak and once after. Regular maintenance can reduce energy bills by up to 15%.',
  },
  {
    question: 'Why is my AC not cooling properly?',
    answer: 'Common causes include dirty air filters, low refrigerant levels, a malfunctioning compressor, or blocked condenser coils. Our master technicians can diagnose the exact issue within minutes.',
  },
  {
    question: 'Do you provide emergency repair services?',
    answer: 'Yes, we provide 24/7 emergency repair services across the city. Our rapid response team is always on standby to restore your comfort at any hour.',
  },
  {
    question: 'What is the average lifespan of an AC unit?',
    answer: 'With proper maintenance, a high-quality AC unit typically lasts 10-15 years. Regular servicing is the key factor in extending your system\'s lifespan.',
  },
  {
    question: 'Are your technicians certified?',
    answer: 'Absolutely. Every CoolFlow technician is fully licensed, background-checked, and undergoes rigorous ongoing training for all major cooling brands.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Got Questions?
          </motion.span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-text-main mb-6">
            EXPERT <span className="text-gradient">ANSWERS</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[32px] transition-all duration-500 overflow-hidden ${
                openIndex === index ? 'glass shadow-2xl border-white/50' : 'bg-white/40 border border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className="text-lg sm:text-xl font-black text-text-main group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-primary/5 text-primary'
                }`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-2">
                      <div className="h-px bg-primary/10 mb-6" />
                      <p className="text-lg text-text-main/60 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
