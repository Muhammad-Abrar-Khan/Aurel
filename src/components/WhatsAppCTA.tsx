import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export const WhatsAppCTA = () => {
  return (
    <motion.a
      href="https://wa.me/923001234567" // Placeholder for actual brand number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center gap-3 group"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-sans text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">
        Chat with us
      </span>
      <MessageCircle size={24} fill="currentColor" />
    </motion.a>
  );
};
