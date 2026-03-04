import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form Submitted:', data);
    alert('Thank you! Your request has been received. We will contact you shortly.');
    reset();
  };

  return (
    <section id="contact" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-main mb-6 leading-tight">
            Get a <span className="text-primary">Free Quote</span> <br />
            Today
          </h2>
          <p className="text-lg text-text-main/60 mb-10 leading-relaxed">
            Fill out the form below and our team will get back to you with a customized estimate for your AC service needs.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-text-main mb-1">Call Us</h4>
                <p className="text-text-main/60">+1 (234) 567-890</p>
                <p className="text-xs text-primary font-bold mt-1 uppercase tracking-wider">Available 24/7</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-text-main mb-1">Email Us</h4>
                <p className="text-text-main/60">support@coolflow.com</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-text-main mb-1">Our Office</h4>
                <p className="text-text-main/60">123 Cooling Avenue, Frost City, FC 54321</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/10">
            <h4 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
              <MessageCircle size={20} className="text-primary" />
              Prefer WhatsApp?
            </h4>
            <p className="text-sm text-text-main/60 mb-6 leading-relaxed">
              Send us a message on WhatsApp for an even faster response and instant booking.
            </p>
            <a 
              href="https://wa.me/1234567890" 
              className="btn-primary inline-flex items-center gap-2 w-full justify-center"
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
          className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main ml-1">Full Name</label>
                <input
                  {...register('name')}
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-background rounded-2xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name.message}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main ml-1">Phone Number</label>
                <input
                  {...register('phone')}
                  placeholder="+1 (234) 567-890"
                  className="w-full px-6 py-4 bg-background rounded-2xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                {errors.phone && <p className="text-xs text-red-500 ml-1">{errors.phone.message}</p>}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-main ml-1">Email Address</label>
              <input
                {...register('email')}
                placeholder="john@example.com"
                className="w-full px-6 py-4 bg-background rounded-2xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-main ml-1">Select Service</label>
              <select
                {...register('service')}
                className="w-full px-6 py-4 bg-background rounded-2xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
              >
                <option value="">Choose a service...</option>
                <option value="installation">AC Installation</option>
                <option value="repair">Repair & Maintenance</option>
                <option value="gas">Gas Refilling</option>
                <option value="cleaning">Deep Cleaning</option>
                <option value="other">Other</option>
              </select>
              {errors.service && <p className="text-xs text-red-500 ml-1">{errors.service.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-text-main ml-1">Your Message</label>
              <textarea
                {...register('message')}
                placeholder="Tell us about your AC issue..."
                rows={4}
                className="w-full px-6 py-4 bg-background rounded-2xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              />
              {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message.message}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg shadow-xl"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={20} />
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
