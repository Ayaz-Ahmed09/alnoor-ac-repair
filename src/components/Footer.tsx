import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-main text-white pt-32 pb-12 px-6 md:px-12 relative overflow-hidden bg-[url('/fbg.png')] bg-cover bg-no-repeat bg-center backdrop-blur-lg">
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 backdrop-blur-xs  bg-text-main/80  -z-10" />

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-32 h-28 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform">
                <img src="/logo-2.png" alt="Logo" className="w-full h-full object-contain" />
              </div>

              <span className="text-3xl font-display font-black">
                Noor<span className="text-primary">AcRepair</span>
              </span>
            </a>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              Providing elite cooling solutions with surgical precision. Your comfort is our masterwork.
            </p>
            {/* <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'FAQs', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/60 hover:text-primary transition-colors font-bold text-lg flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-primary">Services</h4>
            <ul className="space-y-4">
              {['AC Installation', 'Repair & Maintenance', 'Gas Refilling', 'Deep Cleaning', 'Commercial AMC'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/60 hover:text-primary transition-colors font-bold text-lg flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest text-primary">Newsletter</h4>
            <p className="text-white/60 mb-6 font-medium">Subscribe for elite maintenance tips and exclusive offers.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:border-primary outline-none transition-all font-bold"
              />
              <button className="btn-primary w-full py-4 text-lg shadow-xl shadow-primary/20">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 font-bold">
            © {currentYear}  ALL-Noor Ac Repair Services. All rights reserved.
          </p>
          <div className="flex gap-10 text-white/40 font-bold text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
