import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import FAQs from '../components/FAQs';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';

export default function Home() {
        const [searchQuery, setSearchQuery] = useState('');
        const location = useLocation();

        // Smooth scroll behavior via Route hash
        useEffect(() => {
                if (location.hash) {
                        const targetId = location.hash.substring(1);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                                setTimeout(() => {
                                        window.scrollTo({
                                                top: targetElement.offsetTop - 80,
                                                behavior: 'smooth'
                                        });
                                }, 100);
                        }
                }
        }, [location]);

        return (
                <main>
                        <Hero onSearch={setSearchQuery} />
                        <Stats />
                        <About />
                        <Services searchQuery={searchQuery} onSearchChange={setSearchQuery} />
                        <CTA />
                        <Testimonials />
                        <FAQs />
                </main>
        );
}
