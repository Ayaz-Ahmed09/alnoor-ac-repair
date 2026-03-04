import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Zap, ThermometerSnowflake } from 'lucide-react';

const features = [
  { title: 'Certified Technicians', description: 'Our team is fully licensed and trained to handle all major AC brands.', icon: ShieldCheck },
  { title: 'Quick Response', description: 'We value your time. Expect us at your doorstep within 30-60 minutes.', icon: Zap },
  { title: 'Transparent Pricing', description: 'No hidden costs. We provide upfront estimates before starting any work.', icon: CheckCircle2 },
  { title: 'Energy Efficiency', description: 'We optimize your AC performance to save you money on electricity bills.', icon: ThermometerSnowflake },
];

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/ac-technician/800/1000"
              alt="Our Expert Technician"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Experience Badge */}
          <div className="absolute -bottom-10 -right-10 z-20 bg-primary p-8 rounded-3xl shadow-2xl text-white text-center">
            <p className="text-5xl font-bold mb-1">12+</p>
            <p className="text-sm font-medium opacity-90">Years of Excellence</p>
          </div>
          
          {/* Decorative Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-main mb-6 leading-tight">
            We Bring <span className="text-primary text-6xl">Coolness</span> <br />
            Back to Your Life
          </h2>
          
          <p className="text-lg text-text-main/70 mb-10 leading-relaxed">
            At CoolFlow, we understand that a malfunctioning AC is more than just an inconvenience—it's a disruption to your peace of mind. 
            That's why we've dedicated over a decade to providing top-tier cooling solutions with a commitment to quality and speed.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-main mb-2">{feature.title}</h4>
                  <p className="text-sm text-text-main/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Learn More About Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
