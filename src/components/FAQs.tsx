import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How often should I service my AC?',
    answer: 'For optimal performance and energy efficiency, we recommend servicing your AC at least twice a year—once before the peak summer season and once after.',
  },
  {
    question: 'Why is my AC not cooling properly?',
    answer: 'Common reasons include dirty air filters, low refrigerant levels, a faulty compressor, or blocked condenser coils. Our technicians can diagnose the exact issue quickly.',
  },
  {
    question: 'How long does a typical repair take?',
    answer: 'Most standard repairs take between 1 to 3 hours. More complex issues like compressor replacement might take longer, but we always strive for same-day resolution.',
  },
  {
    question: 'Do you provide a warranty on repairs?',
    answer: 'Yes! We provide a 30-day service warranty and up to 1-year warranty on spare parts replaced by us, giving you complete peace of mind.',
  },
  {
    question: 'What brands of AC do you service?',
    answer: 'We service all major brands including Samsung, LG, Daikin, Mitsubishi, Carrier, Voltas, Blue Star, and many others.',
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-main mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-text-main/60">
            Everything you need to know about our AC services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-text-main">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text-main/70 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
