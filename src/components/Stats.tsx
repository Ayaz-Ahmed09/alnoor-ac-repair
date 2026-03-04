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
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-4">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-text-main mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
