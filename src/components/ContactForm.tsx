import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new globalThis.FormData();
      formData.append("access_key", "efb33a90-28a7-4fd7-b764-04af255fc551");

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        reset();
        navigate('/thank-you', { state: { success: true } });
      } else {
        alert("Something went wrong! Please try again.");
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert("Network error, please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Contact Us</span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-text-main mb-8 leading-[0.9]">
            GET A <span className="text-gradient">FREE QUOTE</span> <br />
            TODAY
          </h2>
          <p className="text-xl text-text-main/60 mb-12 leading-relaxed font-medium">
            Our master technicians are standing by. Fill out the form and experience the elite CoolFlow service.
          </p>

          <div className="space-y-10">
            {[
              { icon: Phone, title: 'Call Us', value: '+1 (234) 567-890', sub: 'Available 24/7' },
              { icon: Mail, title: 'Email Us', value: 'support@coolflow.com', sub: 'Instant Response' },
              { icon: MapPin, title: 'Our Office', value: '123 Cooling Avenue, Frost City', sub: 'FC 54321' },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xl">
                  <item.icon size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-text-main mb-1">{item.title}</h4>
                  <p className="text-lg text-text-main/60 font-medium">{item.value}</p>
                  <p className="text-xs text-primary font-black uppercase tracking-widest mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 glass p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] border-white/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <MessageCircle size={120} />
            </div>
            <h4 className="text-2xl font-black text-text-main mb-4 flex items-center gap-3">
              <MessageCircle size={28} className="text-primary" />
              Prefer WhatsApp?
            </h4>
            <p className="text-lg text-text-main/60 mb-8 leading-relaxed font-medium">
              Send us a message for an instant booking and real-time support.
            </p>
            <a
              href="https://wa.me/1234567890"
              className="btn-primary inline-flex items-center gap-3 w-full justify-center py-5 text-xl shadow-xl shadow-primary/20"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-6 sm:p-10 md:p-16 rounded-[32px] sm:rounded-[64px] shadow-2xl border-white/60 relative"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-black text-text-main uppercase tracking-widest ml-1">Full Name</label>
                <input
                  {...register('name')}
                  placeholder="John Doe"
                  className="w-full px-8 py-5 bg-white/50 rounded-2xl border border-white/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-lg"
                />
                {errors.name && <p className="text-xs text-red-500 font-bold ml-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-text-main uppercase tracking-widest ml-1">Phone Number</label>
                <input
                  {...register('phone')}
                  placeholder="+1 (234) 567-890"
                  className="w-full px-8 py-5 bg-white/50 rounded-2xl border border-white/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-lg"
                />
                {errors.phone && <p className="text-xs text-red-500 font-bold ml-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-black text-text-main uppercase tracking-widest ml-1">Email Address</label>
              <input
                {...register('email')}
                placeholder="john@example.com"
                className="w-full px-8 py-5 bg-white/50 rounded-2xl border border-white/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-lg"
              />
              {errors.email && <p className="text-xs text-red-500 font-bold ml-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-3">
              <label className="text-sm font-black text-text-main uppercase tracking-widest ml-1">Select Service</label>
              <select
                {...register('service')}
                className="w-full px-8 py-5 bg-white/50 rounded-2xl border border-white/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none font-bold text-lg"
              >
                <option value="">Choose a service...</option>
                <option value="installation">AC Installation</option>
                <option value="repair">Repair & Maintenance</option>
                <option value="gas">Gas Refilling</option>
                <option value="cleaning">Deep Cleaning</option>
                <option value="other">Other</option>
              </select>
              {errors.service && <p className="text-xs text-red-500 font-bold ml-1">{errors.service.message}</p>}
            </div>

            <div className="space-y-3">
              <label className="text-sm font-black text-text-main uppercase tracking-widest ml-1">Your Message</label>
              <textarea
                {...register('message')}
                placeholder="Tell us about your AC issue..."
                rows={4}
                className="w-full px-8 py-5 bg-white/50 rounded-2xl border border-white/50 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none font-bold text-lg"
              />
              {errors.message && <p className="text-xs text-red-500 font-bold ml-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-4 py-6 text-xl shadow-2xl shadow-primary/30"
            >
              {isSubmitting ? (
                <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={24} />
                  Send Request Now
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
