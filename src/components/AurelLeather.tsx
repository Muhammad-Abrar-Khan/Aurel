"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

const features = [
  "Minimum 100 units",
  "White-label production",
  "Trade pricing tiers",
  "Private label packaging",
];

export const AurelLeather = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/923323632052?text=Hi Aurel Leather, I'd like to enquire about trade pricing for white-label production.",
      "_blank"
    );
  };

  return (
    <section id="aurel-leather" className="scroll-mt-28 relative py-32 px-8 md:px-16 max-w-7xl mx-auto overflow-hidden">
      {/* Left accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-40 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <AnimatedReveal variant="slideRight" duration={0.9}>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="B2B Manufacturing Division"
              title="Aurel Leather."
              subtitle="For gifting agencies, white-label resellers, and bulk corporate suppliers. We are the backend manufacturing partner for brands that need scalable, premium production."
              align="left"
              showDivider={false}
              titleSize="3xl"
            />

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 border border-primary/60 rotate-45 shrink-0" />
                  <span className="font-sans text-sm text-on-surface">{feature}</span>
                </motion.div>
              ))}
            </div>

            <PremiumButton
              variant="ghost"
              size="md"
              onClick={openWhatsApp}
              icon={<MessageCircle size={14} />}
            >
              Contact for Trade Pricing
            </PremiumButton>
          </div>
        </AnimatedReveal>

        {/* Right — image with parallax glow */}
        <AnimatedReveal variant="slideLeft" duration={0.9} delay={0.1}>
          <div className="relative group">
            <div className="absolute -inset-6 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.1)_0%,_transparent_70%)] group-hover:bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.15)_0%,_transparent_70%)] transition-colors duration-1000 rounded-full pointer-events-none" />
            <div className="relative overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.5)] border border-primary/10 group-hover:border-primary/25 transition-all duration-700">
              <img
                srcSet="/assets/aurel-leather-craft-karachi-400.webp 400w, /assets/aurel-leather-craft-karachi.webp 800w"
                sizes="(max-width: 768px) 100vw, 600px"
                src="/assets/aurel-leather-craft-karachi.webp"
                alt="Industrial scale leather manufacturing at Aurel Leather Karachi"
                className="w-full aspect-video object-cover opacity-80 contrast-[1.08] group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-1000 ease-out"
                loading="lazy"
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
              {/* Corner marks */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/40" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/40" />
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
