"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { MessageCircle, Clock, MapPin, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { WHATSAPP_URL, CONTACT, EMAIL_ADDRESS } from "@/lib/constants";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_aurel';
const TEMPLATE_ALERT = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ALERT_ID || 'template_alert';
const TEMPLATE_REPLY = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTO_REPLY_ID || 'template_reply';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

const PRODUCTS = [
  'Executive Wallet',
  'Card Holder',
  'Leather Notebook',
  'Executive Gift Set',
  'Custom / Inquiry',
];

const QUANTITIES = [
  '50–99 Units',
  '100–499 Units',
  '500–1,000 Units',
  '1,000+ Units',
];

export const ProposalForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    whatsapp: '+92 ',
    email: '',
    product: 'Executive Wallet',
    quantity: '50–99 Units',
    deadline: '',
    message: '',
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.whatsapp.trim() || formData.whatsapp === '+92 ') newErrors.whatsapp = 'Valid WhatsApp number required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (!PUBLIC_KEY) {
      setStatus('error');
      console.warn('EmailJS not configured. Set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
      return;
    }

    setLoading(true);
    
    try {
      // Send internal alert
      await emailjs.send(SERVICE_ID, TEMPLATE_ALERT, {
        from_name: formData.fullName,
        company: formData.company,
        whatsapp: formData.whatsapp,
        reply_to: formData.email,
        product: formData.product,
        quantity: formData.quantity,
        deadline: formData.deadline || 'Not specified',
        message: formData.message || 'No additional details',
      });

      // Send auto-reply
      await emailjs.send(SERVICE_ID, TEMPLATE_REPLY, {
        reply_to: formData.email,
        from_name: formData.fullName,
        to_email: formData.email,
      });

      setStatus('success');
      setFormData({
        fullName: '',
        company: '',
        whatsapp: '+92 ',
        email: '',
        product: 'Executive Wallet',
        quantity: '50–99 Units',
        deadline: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const textFieldCls = "w-full bg-transparent border-b border-primary/20 focus:border-primary transition-all duration-300 pb-3 text-on-surface outline-none placeholder:text-outline/60 font-sans text-sm";

  return (
    <section id="contact" className="scroll-mt-28 relative py-32 px-8 md:px-16 bg-background border-t border-primary/5 overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_rgba(201,169,110,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Request a Proposal."
          subtitle="Our team responds within 2 hours, Mon–Sat, 9am–7pm PKT."
          align="center"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === 'success' ? (
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <CheckCircle size={64} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl text-center text-on-surface">Enquiry Received</h3>
                <p className="text-center text-on-surface-variant">
                  We'll respond within 2 hours. Or chat with us now:
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-on-primary py-4 text-center font-sans font-bold text-sm tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
                >
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => setStatus('idle')}
                  className="w-full border border-primary/30 text-on-surface py-4 font-sans font-bold text-sm tracking-[0.1em] uppercase hover:border-primary/60 transition-all"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocused('fullName')}
                    onBlur={() => setFocused(null)}
                    className={textFieldCls}
                  />
                  {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Company */}
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company / Organisation"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused(null)}
                    className={textFieldCls}
                  />
                  {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
                </div>

                {/* WhatsApp */}
                <div>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="+92 3XX XXXX XXX"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    onFocus={() => setFocused('whatsapp')}
                    onBlur={() => setFocused(null)}
                    className={textFieldCls}
                  />
                  {errors.whatsapp && <p className="text-red-600 text-xs mt-1">{errors.whatsapp}</p>}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className={textFieldCls}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Product Interest */}
                <div>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary/20 focus:border-primary transition-all duration-300 pb-3 text-on-surface outline-none font-sans text-sm"
                  >
                    {PRODUCTS.map(p => (
                      <option key={p} value={p} className="bg-background text-on-surface">{p}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-primary/20 focus:border-primary transition-all duration-300 pb-3 text-on-surface outline-none font-sans text-sm"
                  >
                    {QUANTITIES.map(q => (
                      <option key={q} value={q} className="bg-background text-on-surface">{q}</option>
                    ))}
                  </select>
                </div>

                {/* Deadline (optional) */}
                <div>
                  <input
                    type="text"
                    name="deadline"
                    placeholder="Delivery Deadline (optional)"
                    value={formData.deadline}
                    onChange={handleChange}
                    className={textFieldCls}
                  />
                </div>

                {/* Message (optional) */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Additional details (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-transparent border-b border-primary/20 focus:border-primary transition-all duration-300 pb-3 text-on-surface outline-none placeholder:text-outline/60 font-sans text-sm resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
                    <AlertCircle size={16} />
                    <p>Error sending enquiry. Please try again.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-on-primary py-4 font-sans font-bold text-sm tracking-[0.1em] uppercase hover:opacity-90 disabled:opacity-50 transition-opacity"
                >
                  {loading ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-outline/60 mb-1">WhatsApp</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-on-surface hover:text-primary transition-colors">
                    +92 332 363 2052
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-outline/60 mb-1">Email</p>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-on-surface hover:text-primary transition-colors">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-outline/60 mb-1">Location</p>
                  <p className="text-on-surface">Karachi, Pakistan</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-outline/60 mb-1">Hours</p>
                  <p className="text-on-surface">Mon–Sat, 9 AM – 7 PM PKT</p>
                  <p className="text-on-surface-variant text-xs mt-1">Response within 2 hours</p>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="p-6 border border-primary/15 bg-surface/50">
              <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-primary mb-2">Founding Client Programme</p>
              <p className="font-sans text-sm text-on-surface-variant">
                Be among the first brands to gift with AUREL. Enjoy priority production slots and introductory pricing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
