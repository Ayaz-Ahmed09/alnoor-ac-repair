import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, ArrowRight, Search, Filter, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const initialServices = [
  {
    title: 'AC Installation',
    category: 'Installation',
    description: 'Precision installation of premium cooling systems. We ensure perfect airflow and energy efficiency for your sanctuary.',
    image: '/install.png',
    // price: 'From $99',
    rating: 4.9,
  },
  {
    title: 'Repair & Maintenance',
    category: 'Repair',
    description: 'Surgical diagnostics and master repairs. From compressor failures to minor leaks, we restore perfection.',
    image: '/repair.png',
    // price: 'From $49',
    rating: 5.0,
  },
  {
    title: 'Gas Refilling',
    category: 'Maintenance',
    description: 'Premium refrigerant top-up with rigorous leak testing. Experience ice-cold air as it was meant to be.',
    image: '/gas.png',
    // price: 'From $79',
    rating: 4.8,
  },
  {
    title: 'Deep Cleaning',
    category: 'Cleaning',
    description: 'High-pressure jet cleaning for pristine air quality. Breathe pure, allergen-free air every single day.',
    image: '/ac-cleaning-1.png',
    // price: 'From $59',
    rating: 4.9,
  },
  {
    title: 'Duct Cleaning',
    category: 'Cleaning',
    description: 'Total ventilation purification. We eliminate dust, mold, and bacteria from your hidden air paths.',
    image: '/Duct-clean.png',
    price: 'From $129',
    rating: 4.7,
  },
  {
    title: 'Commercial AMC',
    category: 'Commercial',
    description: 'Elite maintenance contracts for enterprise cooling. Zero downtime, maximum productivity for your business.',
    image: '/AMC.png',
    price: 'Custom Quote',
    rating: 5.0,
  },
];

const categories = ['All', 'Installation', 'Repair', 'Maintenance', 'Cleaning', 'Commercial'];

export default function Services({ searchQuery = '', onSearchChange }: { searchQuery?: string, onSearchChange?: (q: string) => void }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = useMemo(() => {
    let filtered = initialServices.filter(service => {
      const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (searchQuery.toLowerCase().includes('ac') && filtered.length === 0) {
      const mockTitle = searchQuery.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      filtered = [{
        title: mockTitle,
        category: 'Custom',
        description: `Bespoke ${mockTitle} solutions tailored to your unique requirements. Master-level execution guaranteed.`,
        image: `https://picsum.photos/seed/${searchQuery.replace(/\s/g, '')}/800/600`,
        price: 'Custom Quote',
        rating: 5.0,
      }];
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  return (
    <section id="services" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-text-main mb-6">
            PREMIUM <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-xl text-text-main/60 max-w-2xl mx-auto font-medium">
            We don't just fix air conditioners; we engineer perfect environments.
            Discover our range of elite cooling solutions.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="glass p-4 rounded-[32px] mb-16 flex flex-col lg:flex-row gap-6 items-center justify-between shadow-2xl border-white/50">
          <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 scrollbar-hide px-2">
            <Filter size={20} className="text-primary flex-shrink-0" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl font-bold text-sm whitespace-nowrap transition-all duration-300 ${activeCategory === category
                  ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105'
                  : 'bg-white/50 text-text-main hover:bg-white/80 border border-white/50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary transition-transform group-focus-within:scale-110" size={24} />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white/50 backdrop-blur-sm border border-white/50 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 transition-all font-bold text-lg placeholder:text-text-main/30"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group glass-card flex flex-col"
              >
                <div className="relative h-72 rounded-[24px] overflow-hidden mb-8">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* <div className="absolute top-4 right-4 glass px-5 py-2 rounded-full text-sm font-black text-primary border-white/50">
                    {service.price}
                  </div> */}
                  <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-full text-xs font-black text-text-main border-white/50 flex items-center gap-2">
                    <Star size={14} className="fill-primary text-primary" />
                    {service.rating}
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-primary uppercase tracking-widest">{service.category}</span>
                  </div>
                  <h3 className="text-3xl font-display font-black text-text-main mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-text-main/60 mb-10 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <div className="flex flex-col gap-4 mt-auto">
                    {/* Desktop View */}
                    <div className="hidden md:flex gap-4">
                      <Link
                        to="/book"
                        state={{ service: service.title }}
                        className="btn-primary flex-1 py-4 text-base"
                      >
                        Book Now
                      </Link>
                      <a
                        href="https://wa.me/1234567890"
                        className="btn-outline flex-1 py-4 text-base"
                      >
                        <MessageCircle size={20} />
                        WhatsApp
                      </a>
                    </div>

                    {/* Mobile View - No Book Now button */}
                    <div className="flex md:hidden gap-3 pt-2">
                      <a
                        href="https://wa.me/1234567890"
                        className="flex items-center justify-center gap-2 flex-1 py-3.5 bg-[#4ade80] text-white rounded-[20px] shadow-lg shadow-[#4ade80]/30 font-bold text-[15px] active:scale-95 transition-all"
                      >
                        <MessageCircle size={22} />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="tel:+1234567890"
                        className="flex items-center justify-center gap-2 flex-1 py-3.5 bg-[#ff5c00] text-white rounded-[20px] shadow-lg shadow-[#ff5c00]/30 font-bold text-[15px] active:scale-95 transition-all"
                      >
                        <Phone size={18} />
                        <div className="flex flex-col text-left leading-[1.1]">
                          <span>Call</span>
                          <span>Now</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <div className="col-span-full py-24 text-center glass rounded-[40px] border-dashed border-2 border-primary/20">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} />
              </div>
              <p className="text-2xl text-text-main font-black mb-4">No services match your search</p>
              <p className="text-text-main/60 max-w-md mx-auto mb-8 font-medium">
                Try searching for something else or clear the filters to see all our premium services.
              </p>
              <button
                onClick={() => { setActiveCategory('All'); onSearchChange?.(''); }}
                className="btn-primary px-10"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        <div className="mt-24 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block p-1 rounded-[32px] bg-gradient-to-r from-primary to-accent shadow-2xl"
          >
            <Link to="/book" className="flex items-center gap-4 px-12 py-6 bg-white rounded-[28px] text-xl font-black text-text-main hover:bg-transparent hover:text-white transition-all">
              Request Custom Solution <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
