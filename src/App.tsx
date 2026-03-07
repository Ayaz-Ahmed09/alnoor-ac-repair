import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Home from './pages/Home';
import Book from './pages/Book';
import ThankYou from './pages/ThankYou';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-primary/30 selection:text-primary">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>

        <ContactForm />
        <Footer />

        {/* Floating Actions for Mobile */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 md:hidden">
          <a
            href="tel:+1234567890"
            className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center "
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
    </BrowserRouter>
  );
}
