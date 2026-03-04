import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import FAQs from './components/FAQs';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <CTA />
        <Testimonials />
        <FAQs />
        <ContactForm />
      </main>
      
      <Footer />

      {/* Floating Actions for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 md:hidden">
        <a
          href="tel:+1234567890"
          className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <Phone size={28} />
        </a>
        <a
          href="https://wa.me/1234567890"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      {/* Desktop Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block">
        <a
          href="https://wa.me/1234567890"
          className="group flex items-center gap-3 bg-white p-3 pr-6 rounded-full shadow-2xl border border-gray-100 hover:scale-105 transition-all"
        >
          <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg">
            <MessageCircle size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Chat with us</span>
            <span className="text-sm font-bold text-text-main">Online Now</span>
          </div>
        </a>
      </div>
    </div>
  );
}
