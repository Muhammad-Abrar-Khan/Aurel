"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageCircle, FileText, Eye, Hammer, Shield, Package } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const steps = [
  {
    id: "01",
    label: "WhatsApp Inquiry",
    description: "Reach us directly with your requirements — quantity, product type, timeline.",
    icon: MessageCircle,
  },
  {
    id: "02",
    label: "Catalog & Quote",
    description: "Receive a curated catalogue and detailed pricing proposal within 24 hours.",
    icon: FileText,
  },
  {
    id: "03",
    label: "Sample Approval",
    description: "Approve a pre-production sample before full run begins.",
    icon: Eye,
  },
  {
    id: "04",
    label: "Production",
    description: "Manufacturing begins with full quality oversight at our Karachi atelier.",
    icon: Hammer,
  },
  {
    id: "05",
    label: "Quality Check",
    description: "Every unit individually inspected against our luxury standard.",
    icon: Shield,
  },
  {
    id: "06",
    label: "Delivery",
    description: "Delivered in premium branded packaging — boardroom-ready on arrival.",
    icon: Package,
  },
];

export const DeliveryModel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="scroll-mt-28 py-36 px-8 md:px-16 bg-surface-low overflow-hidden relative">
      <div className="grain-overlay" />
      <div className="absolute top-0 left-0 right-0 h-px gold-thread opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,_rgba(201,169,110,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="How It Works"
          title="The Aurel Process."
          subtitle="Six precision steps — from your first message to boardroom delivery."
          align="center"
          className="mb-24"
        />

        <div ref={ref} className="relative">
          {/* Desktop animated connector line */}
          <div className="absolute top-[52px] left-[calc(8.33%+8px)] right-[calc(8.33%+8px)] h-px bg-primary/8 hidden lg:block overflow-hidden z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              style={{ originX: 0 }}
              className="h-full bg-gradient-to-r from-primary/80 via-primary/50 to-primary/20"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 + index * 0.1,
                  }}
                  className="group relative z-10 flex flex-col items-center text-center px-2"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="w-[104px] h-[104px] rounded-full bg-background border border-primary/18 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.45)] group-hover:border-primary/55 group-hover:shadow-[0_14px_44px_rgba(201,169,110,0.18)] transition-all duration-500 relative overflow-hidden">
                      {/* Inner glow gradient */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon
                        size={22}
                        className="relative text-primary/45 group-hover:text-primary transition-colors duration-500"
                      />
                      {/* Outer hover ring */}
                      <div className="absolute inset-[-6px] rounded-full border border-primary/0 group-hover:border-primary/14 transition-all duration-700" />
                    </div>

                    {/* Step number tag */}
                    <div className="absolute -top-1 -right-1 bg-background border border-primary/25 px-2 py-0.5 font-mono text-[8px] text-primary tracking-widest shadow-sm">
                      {step.id}
                    </div>
                  </div>

                  {/* Label */}
                  <h4 className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-on-surface mb-2.5 group-hover:text-primary transition-colors duration-400 leading-tight">
                    {step.label}
                  </h4>

                  {/* Description */}
                  <p className="font-sans text-[10px] text-outline/65 leading-relaxed hidden md:block">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.0 }}
          className="mt-20 flex justify-center"
        >
          <a
            href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%27d%20like%20to%20start%20the%20procurement%20process.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn group inline-flex items-center gap-3 border border-primary/35 hover:bg-primary hover:border-primary text-primary hover:text-on-primary px-10 py-4 font-mono text-[9px] tracking-[0.3em] uppercase transition-all duration-400 overflow-hidden"
          >
            <MessageCircle size={14} />
            Begin on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};
