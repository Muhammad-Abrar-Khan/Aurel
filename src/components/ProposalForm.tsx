import { motion } from "motion/react";
import { useState } from "react";
import { captureLead, getWhatsAppUrl } from "../utils/leadCapture";

export const ProposalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    qty: "50 - 250 Units",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name: formData.name, company: formData.company, qty: formData.qty, message: formData.message };
    captureLead(payload);

    const msg = `*AUREL Quote Request*\n\nName: ${formData.name}\nCompany: ${formData.company}\nQuantity: ${formData.qty}\nMessage: ${formData.message}`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="contact" className="py-24 px-8 md:px-16 bg-background">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-surface p-10 md:p-16 border border-primary/10 rounded-sm shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="mb-12 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl text-on-surface mb-4">Request a Quote</h2>
          <p className="text-on-surface-variant text-lg">Fill the form below — we'll respond within 24 hours via WhatsApp.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-8">
            <div className="group">
              <label className="block font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3 group-focus-within:text-primary transition-colors">Full Name</label>
              <input 
                required
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-all pb-3 text-on-surface outline-none placeholder:text-outline/30" 
                type="text"
                placeholder="Ex. Julian Vane"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="group">
              <label className="block font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3 group-focus-within:text-primary transition-colors">Company / Agency</label>
              <input 
                required
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-all pb-3 text-on-surface outline-none placeholder:text-outline/30" 
                type="text"
                placeholder="Ex. Vane & Co."
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div className="group">
              <label className="block font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3 group-focus-within:text-primary transition-colors">Project Scale (MOQ)</label>
              <select 
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-all pb-3 text-on-surface outline-none appearance-none cursor-pointer"
                value={formData.qty}
                onChange={(e) => setFormData({...formData, qty: e.target.value})}
              >
                <option className="bg-surface">50 - 250 Units</option>
                <option className="bg-surface">250 - 1,000 Units</option>
                <option className="bg-surface">1,000 - 10,000 Units</option>
                <option className="bg-surface">Enterprise Scale</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-8 flex flex-col">
            <div className="flex-grow group">
              <label className="block font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3 group-focus-within:text-primary transition-colors">Scope of Work</label>
              <textarea 
                required
                className="w-full bg-background border border-outline-variant focus:border-primary transition-all p-4 text-on-surface outline-none resize-none h-full min-h-[160px] placeholder:text-outline/30" 
                placeholder="Describe your corporate gifting requirements..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-primary text-on-primary py-5 font-sans text-xs font-bold tracking-[0.2em] hover:opacity-90 transition-all uppercase rounded-sm cursor-pointer shadow-lg shadow-primary/10"
              type="submit"
            >
              Submit Quote Request
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
