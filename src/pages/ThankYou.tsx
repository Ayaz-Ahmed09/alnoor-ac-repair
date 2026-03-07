import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function ThankYou() {
        const location = useLocation();
        const navigate = useNavigate();
        const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

        useEffect(() => {
                if (!location.state?.success) {
                        navigate('/');
                }
                setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
        }, [location, navigate]);

        if (!location.state?.success) return null;

        // Simple confetti particles using motion
        const particles = Array.from({ length: 50 }).map((_, i) => ({
                id: i,
                x: Math.random() * windowDimensions.width,
                y: Math.random() * windowDimensions.height,
                color: ['#FF5C00', '#25D366', '#3b82f6', '#f59e0b', '#ec4899'][Math.floor(Math.random() * 5)],
                size: Math.random() * 10 + 5,
                rotation: Math.random() * 360,
        }));

        return (
                <main className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
                        {/* Background Elements */}
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10" />

                        {/* Confetti Particles */}
                        {windowDimensions.width > 0 && particles.map(p => (
                                <motion.div
                                        key={p.id}
                                        initial={{
                                                x: windowDimensions.width / 2,
                                                y: windowDimensions.height / 2,
                                                scale: 0,
                                                opacity: 1
                                        }}
                                        animate={{
                                                x: p.x,
                                                y: Array.from({ length: 5 }).map(() => p.y + (Math.random() * 200 - 100)),
                                                scale: [0, 1, 1, 0],
                                                rotate: [0, p.rotation, p.rotation + 360],
                                                opacity: [1, 1, 0.8, 0]
                                        }}
                                        transition={{
                                                duration: 3 + Math.random() * 2,
                                                ease: "easeOut",
                                                repeat: Infinity,
                                                repeatDelay: Math.random() * 2
                                        }}
                                        style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: p.size,
                                                height: p.size,
                                                backgroundColor: p.color,
                                                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                                                zIndex: 0
                                        }}
                                />
                        ))}

                        <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                                className="glass p-12 md:p-16 rounded-[40px] shadow-2xl border-white/50 text-center max-w-2xl w-full relative z-10"
                        >
                                <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', damping: 10, delay: 0.3 }}
                                        className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(34,197,94,0.3)]"
                                >
                                        <CheckCircle2 size={48} />
                                </motion.div>
                                <h1 className="text-4xl md:text-6xl font-display font-black text-text-main mb-6 leading-tight">
                                        Thank <span className="text-primary">You!</span>
                                </h1>
                                <p className="text-xl text-text-main/70 mb-10 leading-relaxed font-medium">
                                        Your submission has been received successfully. Our team will review your details and get back to you shortly!
                                </p>
                                <Link
                                        to="/"
                                        className="btn-primary px-10 py-5 w-full md:w-auto text-lg inline-flex items-center justify-center gap-3 shadow-xl"
                                >
                                        Return to Details
                                        <ArrowRight size={24} />
                                </Link>
                        </motion.div>
                </main>
        );
}
