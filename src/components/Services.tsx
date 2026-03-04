import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'AC Installation',
    description: 'Professional installation of all types of AC units with optimal placement for maximum cooling.',
    image: 'https://picsum.photos/seed/ac-install/600/400',
    price: 'Starting from $99',
  },
  {
    title: 'Repair & Maintenance',
    description: 'Expert diagnostics and repair for any AC issue, from gas leaks to compressor failures.',
    image: 'https://picsum.photos/seed/ac-repair-card/600/400',
    price: 'Starting from $49',
  },
  {
    title: 'Gas Refilling',
    description: 'High-quality refrigerant top-up and leak testing to ensure your AC blows ice-cold air.',
    image: 'https://picsum.photos/seed/ac-gas/600/400',
    price: 'Starting from $79',
  },
  {
    title: 'Deep Cleaning',
    description: 'Comprehensive jet cleaning of indoor and outdoor units to improve air quality and efficiency.',
    image: 'https://picsum.photos/seed/ac-clean/600/400',
    price: 'Starting from $59',
  },
  {
    title: 'Duct Cleaning',
    description: 'Removing dust and allergens from your ventilation system for a healthier home environment.',
    image: 'https://picsum.photos/seed/ac-duct/600/400',
    price: 'Starting from $129',
  },
  {
    title: 'Commercial AMC',
    description: 'Customized annual maintenance contracts for offices, malls, and industrial complexes.',
    image: 'https://picsum.photos/seed/ac-commercial/600/400',
    price: 'Custom Quote',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-main mb-4">
            Our Premium <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-text-main/60 max-w-2xl mx-auto">
            We provide comprehensive cooling solutions tailored to your specific needs. 
            Quality workmanship guaranteed on every job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                  {service.price}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text-main mb-3">{service.title}</h3>
                <p className="text-text-main/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <a 
                      href="#contact" 
                      className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm py-2.5"
                    >
                      Book Now
                    </a>
                    <a 
                      href="https://wa.me/1234567890" 
                      className="btn-outline flex-1 flex items-center justify-center gap-2 text-sm py-2.5"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  </div>
                  
                  {/* Mobile Call Button */}
                  <a 
                    href="tel:+1234567890" 
                    className="md:hidden btn-outline flex items-center justify-center gap-2 text-sm py-2.5"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-text-main/70 mb-6">Need a custom solution for your project?</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            Get a Free Consultation <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
