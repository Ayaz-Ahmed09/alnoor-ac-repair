import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-12 ${isScrolled ? 'py-3' : 'py-6'
        }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}>
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-32 h-16 flex items-center justify-center ">
            <img src="/logo-2.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          {/* <span className="text-2xl font-display font-bold text-text-main">
            AL-Noor<span className="text-primary">ACRepair</span>
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href.startsWith('#') ? `/${link.href}` : link.href}
              className="text-text-main font-bold hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/1234567890" className="btn-primary">
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[-1] bg-background/95 backdrop-blur-xl p-8 flex flex-col gap-6 pt-24 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href.startsWith('#') ? `/${link.href}` : link.href}
              className="text-2xl font-bold text-text-main border-b border-primary/10 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-auto">
            <a href="tel:+1234567890" className="btn-outline w-full py-4">
              <Phone size={20} />
              Call Now
            </a>
            <a href="https://wa.me/1234567890" className="btn-primary w-full py-4">
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
