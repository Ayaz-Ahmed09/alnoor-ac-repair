import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const services = [
        'AC Installation',
        'Repair & Maintenance',
        'Gas Refilling',
        'Deep Cleaning',
        'Duct Cleaning',
        'Commercial AMC',
        'Other Services'
];

export default function Book() {
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
                name: '',
                phone: '',
                email: '',
                service: '',
                date: '',
                time: '',
                notes: ''
        });

        const [isSubmitting, setIsSubmitting] = useState(false);

        useEffect(() => {
                window.scrollTo({ top: 0, behavior: 'instant' });

                // Auto-select service if passed via state
                if ((location as any).state?.service) {
                        setFormData(prev => ({ ...prev, service: (location as any).state.service }));
                }
        }, [(location as any).state]);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
                const { name, value } = e.target;
                setFormData(prev => ({ ...prev, [name]: value }));
        };

        const handleSubmit = async (e: React.FormEvent) => {
                e.preventDefault();
                setIsSubmitting(true);

                try {
                        const submitData = new FormData();
                        submitData.append("access_key", "efb33a90-28a7-4fd7-b764-04af255fc551");

                        Object.entries(formData).forEach(([key, value]) => {
                                submitData.append(key, value);
                        });

                        const response = await fetch("https://api.web3forms.com/submit", {
                                method: "POST",
                                body: submitData
                        });

                        const result = await response.json();
                        if (result.success) {
                                navigate('/thank-you', { state: { success: true } });
                        } else {
                                alert("Something went wrong! Please try again.");
                                console.error("Web3Forms error:", result);
                        }
                } catch (error) {
                        console.error('Submission error:', error);
                        alert("Network error, please try again.");
                } finally {
                        setIsSubmitting(false);
                }
        };

        return (
                <main className="min-h-[120vh] pt-32 pb-20 px-6 relative overflow-hidden">
                        {/* Background Subtle Elements */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10 animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

                        <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-16">
                                        <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block"
                                        >
                                                Schedule Service
                                        </motion.span>
                                        <motion.h1
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-text-main mb-6 leading-[0.9]"
                                        >
                                                BOOK A <span className="text-gradient">MASTER</span>
                                        </motion.h1>
                                        <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 }}
                                                className="text-xl text-text-main/60 max-w-2xl mx-auto font-medium"
                                        >
                                                Secure your spot with our elite technicians. Experience premium air conditioning solutions restoring your comfort.
                                        </motion.p>
                                </div>

                                <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="glass p-8 md:p-12 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(255,92,0,0.15)] border-white/40 relative z-10"
                                >
                                        <form onSubmit={handleSubmit} className="space-y-8">
                                                <div className="grid md:grid-cols-2 gap-8">
                                                        {/* Personal Info */}
                                                        <div className="space-y-6">
                                                                <h3 className="text-2xl font-black text-text-main/80 flex items-center gap-3">
                                                                        <User className="text-primary" /> Your Details
                                                                </h3>

                                                                <div className="group relative">
                                                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                                                <User size={20} className="text-primary/50 group-focus-within:text-primary transition-colors" />
                                                                        </div>
                                                                        <input
                                                                                type="text"
                                                                                name="name"
                                                                                required
                                                                                placeholder="Full Name"
                                                                                value={formData.name}
                                                                                onChange={handleChange}
                                                                                className="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-sm border border-white/50 focus:border-primary/50 text-text-main placeholder:text-text-main/40 rounded-2xl outline-none transition-all focus:ring-4 focus:ring-primary/10 font-bold"
                                                                        />
                                                                </div>

                                                                <div className="group relative">
                                                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                                                <Phone size={20} className="text-primary/50 group-focus-within:text-primary transition-colors" />
                                                                        </div>
                                                                        <input
                                                                                type="tel"
                                                                                name="phone"
                                                                                required
                                                                                placeholder="Phone Number"
                                                                                value={formData.phone}
                                                                                onChange={handleChange}
                                                                                className="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-sm border border-white/50 focus:border-primary/50 text-text-main placeholder:text-text-main/40 rounded-2xl outline-none transition-all focus:ring-4 focus:ring-primary/10 font-bold"
                                                                        />
                                                                </div>

                                                                <div className="group relative">
                                                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                                                <Mail size={20} className="text-primary/50 group-focus-within:text-primary transition-colors" />
                                                                        </div>
                                                                        <input
                                                                                type="email"
                                                                                name="email"
                                                                                placeholder="Email Address (Optional)"
                                                                                value={formData.email}
                                                                                onChange={handleChange}
                                                                                className="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-sm border border-white/50 focus:border-primary/50 text-text-main placeholder:text-text-main/40 rounded-2xl outline-none transition-all focus:ring-4 focus:ring-primary/10 font-bold"
                                                                        />
                                                                </div>
                                                        </div>

                                                        {/* Service Details */}
                                                        <div className="space-y-6">
                                                                <h3 className="text-2xl font-black text-text-main/80 flex items-center gap-3">
                                                                        <Calendar className="text-primary" /> Service Details
                                                                </h3>

                                                                <div className="group relative">
                                                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                                                <FileText size={20} className="text-primary/50 group-focus-within:text-primary transition-colors" />
                                                                        </div>
                                                                        <select
                                                                                name="service"
                                                                                required
                                                                                value={formData.service}
                                                                                onChange={handleChange}
                                                                                className="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-sm border border-white/50 focus:border-primary/50 text-text-main rounded-2xl outline-none transition-all focus:ring-4 focus:ring-primary/10 font-bold appearance-none cursor-pointer"
                                                                        >
                                                                                <option value="" disabled className="text-gray-500">Select Required Service</option>
                                                                                {services.map(s => (
                                                                                        <option key={s} value={s} className="text-black">{s}</option>
                                                                                ))}
                                                                        </select>
                                                                </div>

                                                                <div className="grid grid-cols-2 gap-4">
                                                                        <div className="group relative">
                                                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                                                        <Calendar size={20} className="text-primary/50 group-focus-within:text-primary transition-colors" />
                                                                                </div>
                                                                                <input
                                                                                        type="date"
                                                                                        name="date"
                                                                                        required
                                                                                        value={formData.date}
                                                                                        onChange={handleChange}
                                                                                        className="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-sm border border-white/50 focus:border-primary/50 text-text-main placeholder:text-text-main/40 rounded-2xl outline-none transition-all focus:ring-4 focus:ring-primary/10 font-bold"
                                                                                />
                                                                        </div>

                                                                        <div className="group relative">
                                                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                                                        <Clock size={20} className="text-primary/50 group-focus-within:text-primary transition-colors" />
                                                                                </div>
                                                                                <input
                                                                                        type="time"
                                                                                        name="time"
                                                                                        value={formData.time}
                                                                                        onChange={handleChange}
                                                                                        className="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-sm border border-white/50 focus:border-primary/50 text-text-main placeholder:text-text-main/40 rounded-2xl outline-none transition-all focus:ring-4 focus:ring-primary/10 font-bold"
                                                                                />
                                                                        </div>
                                                                </div>

                                                                <div className="group relative">
                                                                        <textarea
                                                                                name="notes"
                                                                                placeholder="Any specific issues or symptoms? (Optional)"
                                                                                rows={3}
                                                                                value={formData.notes}
                                                                                onChange={handleChange}
                                                                                className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border border-white/50 focus:border-primary/50 text-text-main placeholder:text-text-main/40 rounded-2xl outline-none transition-all focus:ring-4 focus:ring-primary/10 font-medium resize-none"
                                                                        ></textarea>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div className="pt-6 border-t border-white/20">
                                                        <button
                                                                type="submit"
                                                                disabled={isSubmitting}
                                                                className="w-full btn-primary text-xl py-5 shadow-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                                                        >
                                                                {isSubmitting ? (
                                                                        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                                                ) : (
                                                                        <>
                                                                                Confirm Booking Request
                                                                                <ArrowRight size={24} />
                                                                        </>
                                                                )}
                                                        </button>
                                                        <p className="text-center text-sm font-medium text-text-main/50 mt-4">
                                                                No upfront payment required. Our team will call you to confirm the appointment.
                                                        </p>
                                                </div>
                                        </form>
                                </motion.div>
                        </div>
                </main>
        );
}
