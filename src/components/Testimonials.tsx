import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://picsum.photos/seed/sarah/100/100',
    content: 'CoolFlow saved us during the heatwave! Their technician arrived within 30 minutes and fixed our AC in no time. Highly recommend their professional service.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    image: 'https://picsum.photos/seed/michael/100/100',
    content: 'We use their AMC for our office building. Their preventive maintenance has significantly reduced our energy bills and downtime. Excellent team!',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Apartment Manager',
    image: 'https://picsum.photos/seed/emily/100/100',
    content: 'Transparent pricing and honest advice. They don\'t try to sell you parts you don\'t need. It\'s hard to find such trustworthy service these days.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-main mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-text-main/60 max-w-2xl mx-auto">
            Real stories from real customers who trust us with their comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-8 rounded-3xl border border-gray-100 shadow-sm relative"
            >
              <div className="absolute top-8 right-8 text-primary/10">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-text-main/80 mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-text-main">{testimonial.name}</h4>
                  <p className="text-xs text-text-main/60 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
