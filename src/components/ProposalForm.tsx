import { motion } from "motion/react";

export const ProposalForm = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-background">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-surface p-10 md:p-16 border border-primary/10 rounded-sm shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="mb-12 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl text-on-surface mb-4">Request Manufacturing Proposal.</h2>
          <p className="text-on-surface-variant text-lg">Our procurement team responds to qualified inquiries within 24 business hours.</p>
        </div>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-8">
            <div className="group">
              <label className="block font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3 group-focus-within:text-primary transition-colors">Full Name</label>
              <input 
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-all pb-3 text-on-surface outline-none placeholder:text-outline/30" 
                type="text"
                placeholder="Ex. Julian Vane"
              />
            </div>
            <div className="group">
              <label className="block font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3 group-focus-within:text-primary transition-colors">Company / Agency</label>
              <input 
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-all pb-3 text-on-surface outline-none placeholder:text-outline/30" 
                type="text"
                placeholder="Ex. Vane & Co."
              />
            </div>
            <div className="group">
              <label className="block font-sans text-[10px] font-bold text-outline uppercase tracking-[0.2em] mb-3 group-focus-within:text-primary transition-colors">Project Scale (MOQ)</label>
              <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-all pb-3 text-on-surface outline-none appearance-none cursor-pointer">
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
                className="w-full bg-background border border-outline-variant focus:border-primary transition-all p-4 text-on-surface outline-none resize-none h-full min-h-[160px] placeholder:text-outline/30" 
                placeholder="Describe your technical requirements..."
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-primary text-on-primary py-5 font-sans text-xs font-bold tracking-[0.2em] hover:opacity-90 transition-all uppercase rounded-sm cursor-pointer shadow-lg shadow-primary/10"
              type="submit"
            >
              Submit Proposal Request
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
