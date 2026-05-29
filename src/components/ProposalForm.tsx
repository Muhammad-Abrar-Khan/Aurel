"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { captureLead, getWhatsAppUrl } from "../utils/leadCapture";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { MessageCircle, Clock, Package, MapPin, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const trustBadges = [
  { icon: <Clock size={16} />,   label: "24h Response" },
  { icon: <Package size={16} />, label: "50 Unit MOQ" },
  { icon: <MapPin size={16} />,  label: "Pakistan-Wide Delivery" },
];

export const ProposalForm = () => {
  const [formData, setFormData] = useState({ name: "", company: "", qty: "50 - 250 Units", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    captureLead({ name: formData.name, company: formData.company, qty: formData.qty, message: formData.message });
    const msg = `*Aurel Leather Quote Request*\n\nName: ${formData.name}\nCompany: ${formData.company}\nQuantity: ${formData.qty}\nMessage: ${formData.message}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  const textFieldCls = "w-full bg-transparent border-b border-outline-variant focus:border-primary transition-all duration-300 pb-3 text-on-surface outline-none placeholder:text-outline/25 font-sans text-sm";
  const labelCls = (key: string) => `block font-mono text-[9px] font-bold tracking-[0.3em] uppercase mb-3 transition-colors duration-200 ${focused === key ? "text-primary" : "text-outline"}`;
  const underlineCls = (key: string) => `absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${focused === key ? "w-full" : "w-0"}`;

  return (
    <section id="contact" className="scroll-mt-28 relative py-32 px-8 md:px-16 bg-background overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,_rgba(201,169,110,0.06)_0%,_transparent_65%)]" />
      <div className="absolute top-0 left-0 right-0 h-px gold-thread opacity-40" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading eyebrow="Start Your Procurement" title="Request a Quote." subtitle="Fill the form below — we'll respond within 24 hours via WhatsApp with a tailored proposal." align="center" className="mb-14" />

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {trustBadges.map((badge, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex items-center gap-2 border border-primary/20 bg-surface px-5 py-2.5 text-primary">
              {badge.icon}
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Form card */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="bg-surface border border-primary/10 p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.08)_0%,_transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/30" />

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {/* Left column */}
            <div className="space-y-8">
              <div className="relative">
                <label className={labelCls("name")}>Full Name</label>
                <input required type="text" placeholder="Ex. Julian Vane" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} className={textFieldCls} />
                <div className={underlineCls("name")} />
              </div>
              <div className="relative">
                <label className={labelCls("company")}>Company / Agency</label>
                <input required type="text" placeholder="Ex. Vane & Co." value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} className={textFieldCls} />
                <div className={underlineCls("company")} />
              </div>
              <div className="relative">
                <label className={labelCls("qty")}>Project Scale (MOQ)</label>
                <select value={formData.qty} onChange={e => setFormData({ ...formData, qty: e.target.value })} onFocus={() => setFocused("qty")} onBlur={() => setFocused(null)} className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-all duration-300 pb-3 text-on-surface outline-none appearance-none cursor-pointer font-sans text-sm">
                  <option className="bg-surface">50 - 250 Units</option>
                  <option className="bg-surface">250 - 1,000 Units</option>
                  <option className="bg-surface">1,000 - 10,000 Units</option>
                  <option className="bg-surface">Enterprise Scale</option>
                </select>
                <div className={underlineCls("qty")} />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 relative">
                <label className={labelCls("message")}>Scope of Work</label>
                <textarea required placeholder="Describe your requirements, timeline, and customization needs..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} className="w-full h-full min-h-[180px] bg-background/60 border border-outline-variant focus:border-primary transition-all duration-300 p-4 text-on-surface outline-none resize-none placeholder:text-outline/25 font-sans text-sm" />
              </div>
              <div className="flex flex-col gap-3">
                <PremiumButton variant="primary" size="lg" type="submit" icon={<ArrowRight size={14} />} className="w-full justify-center">
                  Submit Quote Request
                </PremiumButton>
                <a href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20to%20discuss%20a%20corporate%20gifting%20order.`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 border border-outline-variant/40 text-on-surface-variant hover:border-primary/40 hover:text-primary transition-all duration-300 py-4 font-mono text-[9px] tracking-[0.2em] uppercase">
                  <MessageCircle size={14} />
                  Or Chat on WhatsApp
                </a>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
