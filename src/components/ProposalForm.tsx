"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { captureLead, getWhatsAppUrl } from "../utils/leadCapture";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { MessageCircle, Clock, Package, MapPin, ArrowRight, ChevronDown, Download, X, FileText, CheckCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const trustBadges = [
  { icon: <Clock size={14} />,   label: "24h Boardroom Response" },
  { icon: <Package size={14} />, label: "50 Unit Factory MOQ" },
  { icon: <MapPin size={14} />,  label: "Global Courier Shipping" },
];

const moqOptions = [
  { label: "50 - 250 Units", details: "Min. 50 MOQ / Premium Packaging" },
  { label: "250 - 1,000 Units", details: "Bulk Discount / Custom Stamp" },
  { label: "1,000 - 10,000 Units", details: "Factory Direct Priority Line" },
  { label: "Enterprise Scale (10,000+)", details: "Dedicated Custom Production Run" }
];

export const ProposalForm = () => {
  const [formData, setFormData] = useState({ name: "", company: "", qty: "50 - 250 Units", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  
  // Custom dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lead magnet state
  const [modalOpen, setModalOpen] = useState(false);
  const [leadMagnetForm, setLeadMagnetForm] = useState({ name: "", email: "", company: "" });
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    captureLead({ name: formData.name, company: formData.company, qty: formData.qty, message: formData.message });
    const msg = `*Aurel Leather Boardroom Quote Request*\n\nName: ${formData.name}\nCompany: ${formData.company}\nQuantity: ${formData.qty}\nMessage: ${formData.message}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  const handleLeadMagnetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Capture catalog downloader lead details
    captureLead({ 
      name: leadMagnetForm.name, 
      company: leadMagnetForm.company, 
      qty: "Catalogue Lead", 
      message: `Lead Magnet Download: ${leadMagnetForm.email}` 
    });
    setDownloadSuccess(true);
    setTimeout(() => {
      // Simulate file download
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("download", "Aurel_Leather_Corporate_Catalogue_2026.pdf");
      document.body.appendChild(link);
      // Clean modal
      setTimeout(() => {
        setModalOpen(false);
        setDownloadSuccess(false);
        setLeadMagnetForm({ name: "", email: "", company: "" });
      }, 1500);
    }, 800);
  };

  const textFieldCls = "w-full bg-transparent border-b border-primary/20 focus:border-primary transition-all duration-300 pb-3 text-on-surface outline-none placeholder:text-outline/25 font-sans text-sm";
  const labelCls = (key: string) => `block font-mono text-[9px] font-bold tracking-[0.3em] uppercase mb-3 transition-colors duration-200 ${focused === key ? "text-primary" : "text-outline"}`;
  const underlineCls = (key: string) => `absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${focused === key ? "w-full" : "w-0"}`;

  return (
    <section id="contact" className="scroll-mt-28 relative py-32 px-8 md:px-16 bg-background overflow-hidden border-t border-primary/5">
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,_rgba(201,169,110,0.05)_0%,_transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px gold-thread opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Resource Download Lead Magnet Pitch */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 rounded border border-primary/15 bg-[#0e0d0b] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10" />
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 border border-primary/30 rounded flex items-center justify-center bg-background shrink-0 shadow">
              <FileText size={20} className="text-primary" />
            </div>
            <div>
              <span className="font-mono text-[8px] tracking-[0.35em] text-primary uppercase font-bold block mb-1">Corporate Resource Package</span>
              <h3 className="font-display text-2xl italic text-on-surface mb-2">Corporate Gifting Guide &amp; Resources</h3>
              <p className="font-sans text-xs text-on-surface-variant max-w-xl leading-relaxed">
                Download the official **Aurel Leather Gifting Catalogue + MOQ Matrix + Branding Guidelines + Delivery Timelines** in a unified, board-ready package.
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setModalOpen(true)}
            className="shimmer-btn flex items-center gap-3 bg-primary text-on-primary px-8 py-4 font-mono text-[9px] tracking-[0.25em] uppercase hover:shadow-[0_0_24px_rgba(201,169,110,0.25)] shrink-0 shadow-lg rounded-sm"
          >
            <Download size={12} />
            Download Package Bundle
          </motion.button>
        </motion.div>

        <SectionHeading 
          eyebrow="Start Your Procurement" 
          title="Request a Proposal." 
          subtitle="Configure your production scope below — our manufacturing managers will prepare a physical spec plan and custom quote within 24 hours." 
          align="center" 
          className="mb-14" 
        />

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {trustBadges.map((badge, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 12 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
              className="flex items-center gap-2 border border-primary/10 bg-surface px-5 py-2.5 text-primary rounded-sm shadow-md"
            >
              {badge.icon}
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Form card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
          className="bg-surface border border-primary/10 p-10 md:p-14 shadow-[0_45px_130px_rgba(0,0,0,0.6)] relative overflow-hidden rounded-sm"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20 pointer-events-none" />

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

              {/* Bespoke Luxury Dropdown Selector */}
              <div className="relative" ref={dropdownRef}>
                <label className={labelCls("qty")}>Project Scale (MOQ)</label>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onFocus={() => setFocused("qty")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border-b border-primary/20 hover:border-primary/40 focus:border-primary transition-all duration-300 pb-3 text-on-surface outline-none cursor-pointer flex justify-between items-center text-left font-sans text-sm select-none"
                >
                  <span className="font-bold text-primary">{formData.qty}</span>
                  <ChevronDown size={14} className={`text-primary transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={underlineCls("qty")} />

                {/* Staggered Options Panel */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 right-0 mt-2 z-30 bg-[#0d0c0b] border border-primary/20 rounded shadow-[0_15px_45px_rgba(0,0,0,0.85)] max-h-[280px] overflow-y-auto"
                    >
                      {moqOptions.map((opt, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setFormData({ ...formData, qty: opt.label });
                            setDropdownOpen(false);
                          }}
                          className={`p-4 border-b border-white/5 last:border-b-0 cursor-pointer transition-colors hover:bg-primary/10 flex justify-between items-center ${formData.qty === opt.label ? 'bg-primary/5' : ''}`}
                        >
                          <span className="font-sans text-sm font-semibold text-on-surface">{opt.label}</span>
                          <span className="font-mono text-[9px] tracking-wider text-outline">{opt.details}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 relative">
                <label className={labelCls("message")}>Scope of Work</label>
                <textarea required placeholder="Describe your genuine leather specifications, embossing requirements, quantity split, and targeted courier delivery timeline..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} className="w-full h-full min-h-[180px] bg-background/50 border border-primary/10 focus:border-primary transition-all duration-300 p-4 text-on-surface outline-none resize-none placeholder:text-outline/25 font-sans text-sm rounded-sm" />
              </div>
              <div className="flex flex-col gap-3">
                <PremiumButton variant="primary" size="lg" type="submit" icon={<ArrowRight size={14} />} className="w-full justify-center">
                  Submit Quote Request
                </PremiumButton>
                <a href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20to%20discuss%20a%20corporate%20gifting%20order.`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 border border-primary/20 text-on-surface-variant hover:border-primary/45 hover:text-primary transition-all duration-300 py-4 font-mono text-[9px] tracking-[0.2em] uppercase rounded-sm bg-background/30 shadow">
                  <MessageCircle size={14} />
                  Or Chat on WhatsApp
                </a>
              </div>
            </div>
          </form>
        </motion.div>

      </div>

      {/* ── Lead Capture Download Modal ── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center px-4"
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setModalOpen(false)} />
            
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md bg-[#0e0d0b] border border-primary/20 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.85)] relative z-10 rounded-sm"
            >
              {/* Top border lines */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10" />

              {/* Close Button */}
              <button 
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-outline hover:text-primary transition-colors"
              >
                <X size={16} />
              </button>

              <div className="text-center mb-6">
                <FileText size={28} className="text-primary mx-auto mb-2" />
                <h3 className="font-display text-2xl italic text-on-surface">Download Corporate Kit</h3>
                <p className="font-sans text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Enter your business details to receive immediate access to the Aurel Catalogue + MOQ Guide + Timelines bundle.
                </p>
              </div>

              {downloadSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center justify-center gap-3"
                >
                  <CheckCircle size={36} className="text-primary animate-bounce" />
                  <span className="font-mono text-[10px] tracking-widest text-primary uppercase font-bold">Access Granted</span>
                  <p className="font-sans text-xs text-on-surface-variant">Your high-resolution PDF download has started.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleLeadMagnetSubmit} className="space-y-6">
                  <div>
                    <label className="block font-mono text-[8px] tracking-widest uppercase text-outline mb-2">Your Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Ex. Marcus Vane" 
                      value={leadMagnetForm.name} 
                      onChange={e => setLeadMagnetForm({ ...leadMagnetForm, name: e.target.value })}
                      className="w-full bg-[#151412] border border-primary/10 focus:border-primary/40 px-4 py-3 text-xs text-on-surface outline-none rounded-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[8px] tracking-widest uppercase text-outline mb-2">Corporate Email</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="Ex. marcus@vane.com" 
                      value={leadMagnetForm.email} 
                      onChange={e => setLeadMagnetForm({ ...leadMagnetForm, email: e.target.value })}
                      className="w-full bg-[#151412] border border-primary/10 focus:border-primary/40 px-4 py-3 text-xs text-on-surface outline-none rounded-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[8px] tracking-widest uppercase text-outline mb-2">Company / Institution</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Ex. Vane Global" 
                      value={leadMagnetForm.company} 
                      onChange={e => setLeadMagnetForm({ ...leadMagnetForm, company: e.target.value })}
                      className="w-full bg-[#151412] border border-primary/10 focus:border-primary/40 px-4 py-3 text-xs text-on-surface outline-none rounded-sm transition-colors"
                    />
                  </div>

                  <PremiumButton variant="primary" size="lg" type="submit" className="w-full justify-center py-4 font-mono text-[9px] tracking-widest">
                    Request Secure Download
                  </PremiumButton>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
