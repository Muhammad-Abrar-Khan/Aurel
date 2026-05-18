import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, Send } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
}

export const LeadModal = ({ isOpen, onClose, productTitle }: LeadModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    scale: "50-200 Units",
    budget: "Standard",
  });

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else handleWhatsAppRedirect();
  };

  const handleWhatsAppRedirect = () => {
    const prefill = encodeURIComponent(
      `*AUREL Enterprise Inquiry*\n\nProduct: ${productTitle || 'General Catalog'}\nName: ${formData.name}\nCompany: ${formData.company}\nScale: ${formData.scale}\nBudget: ${formData.budget}\nEmail: ${formData.email}`
    );
    // Also simulate a POST to webhook
    fetch('/api/leads', { 
        method: 'POST', 
        body: JSON.stringify({...formData, product: productTitle}),
        headers: { 'Content-Type': 'application/json' }
    }).catch(() => {}); // Silent fail for this demo environment

    window.open(`https://wa.me/923323632052?text=${prefill}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-surface border border-primary/20 p-8 md:p-12 rounded-sm shadow-2xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <button onClick={onClose} className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors">
              <X size={20} />
            </button>

            <div className="mb-10">
              <div className="flex gap-2 mb-4">
                <div className={`h-1 flex-grow rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-surface-highest'}`}></div>
                <div className={`h-1 flex-grow rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-surface-highest'}`}></div>
              </div>
              <h3 className="font-display text-3xl text-on-surface">
                {step === 1 ? "Project Qualification" : "Procurement Context"}
              </h3>
              <p className="text-on-surface-variant text-sm mt-2">
                {step === 1 ? "Help us tailor your production quote." : "Almost there. Opening secure WhatsApp channel."}
              </p>
            </div>

            <div className="space-y-6">
              {step === 1 ? (
                <>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary px-0 pb-2 text-sm text-on-surface outline-none transition-all"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">Business Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary px-0 pb-2 text-sm text-on-surface outline-none transition-all"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary px-0 pb-2 text-sm text-on-surface outline-none transition-all"
                      placeholder="Global Enterprise Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">Order Scale</label>
                    <select 
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary px-0 pb-2 text-sm text-on-surface outline-none transition-all cursor-pointer"
                      value={formData.scale}
                      onChange={(e) => setFormData({...formData, scale: e.target.value})}
                    >
                      <option className="bg-surface">50-200 Units</option>
                      <option className="bg-surface">201-1000 Units</option>
                      <option className="bg-surface">1000+ Units (Enterprise)</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">Budget Tier</label>
                    <select 
                      className="w-full bg-transparent border-b border-outline-variant focus:border-primary px-0 pb-2 text-sm text-on-surface outline-none transition-all cursor-pointer"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option className="bg-surface">Standard Premium</option>
                      <option className="bg-surface">Elite Luxury (Full-Grain)</option>
                      <option className="bg-surface">Institutional (Large Scale)</option>
                    </select>
                  </div>
                </>
              )}

              <button 
                onClick={handleNext}
                disabled={step === 1 && (!formData.name || !formData.email || !formData.company)}
                className="w-full mt-6 bg-primary text-on-primary py-4 font-sans text-[10px] font-bold tracking-[0.3em] uppercase rounded-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {step === 1 ? "Next Steps" : "Open WhatsApp Inquiry"}
                <Send size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
