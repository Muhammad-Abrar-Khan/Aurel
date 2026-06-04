"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PremiumButton } from '@/components/ui/PremiumButton';
import LeadModal from './LeadModal';
import { WHATSAPP_URL } from '@/lib/constants';
import { ArrowDown, ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';

/* ─── Mouse-tracking tilt card ─── */
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width  / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -5, y: dx * 5 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div ref={ref} className="perspective-2000 w-full h-full">
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 180, damping: 22, mass: 0.6 }}
        className="preserve-3d w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ─── Main Hero ─── */
export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => { setMounted(true); }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%',   '25%']);
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%',   '12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const headline = "Crafted for\nCorporate\nPrestige.";

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-center"
      aria-label="Hero"
    >
      {/* ── Cinematic background layers ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        {/* Deep base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_rgba(201,169,110,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,_rgba(201,169,110,0.07)_0%,_transparent_60%)]" />
        {/* Grain overlay */}
        <div className="grain-overlay" />
        {/* Edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(250,248,245,0.7)_100%)]" />
      </motion.div>

      {/* ── Decorative lines ── */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent hidden lg:block" style={{ left: '10%' }} />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" style={{ right: '10%' }} />

      {/* ── Main content grid ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16 pt-[100px] pb-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 items-center min-h-[calc(100svh-120px)]">

          {/* ── Left: Typography column ── */}
          <motion.div style={{ y: textY, opacity }} className="flex flex-col justify-center gap-8">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-px bg-primary" />
              <span className="font-mono text-[10px] tracking-[0.45em] uppercase text-primary">
                Pakistan's Premier Corporate Leather
              </span>
            </motion.div>

            {/* Headline — staggered word reveal (single h1 for SEO) */}
            <h1 className="font-display italic leading-[1.0] tracking-tight text-on-surface">
              {headline.split('\n').map((line, li) => (
                <span key={li} className="overflow-hidden block">
                  <motion.span
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.2 + li * 0.12,
                    }}
                    className={`block text-5xl md:text-7xl xl:text-8xl ${
                      li === 1 ? 'text-primary' : ''
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.58 }}
              className="font-sans text-on-surface-variant text-base md:text-lg leading-relaxed max-w-lg"
            >
              Aurel Leather delivers full-grain precision — from executive wallets 
              to complete corporate gift programmes — manufactured in Karachi, 
              delivered Pakistan-wide.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
              className="flex flex-wrap items-center gap-4"
            >
              <PremiumButton
                variant="primary"
                size="lg"
                onClick={() => setIsModalOpen(true)}
                icon={<ArrowRight size={14} />}
              >
                Request Quote
              </PremiumButton>
              <PremiumButton
                variant="ghost"
                size="lg"
                href="/products"
              >
                Browse Collections
              </PremiumButton>
              <PremiumButton
                variant="outline"
                size="lg"
                href={`${WHATSAPP_URL}?text=Hi%20Aurel%20Leather%2C%20I%20would%20like%20a%20corporate%20gifting%20proposal.`}
                icon={<MessageCircle size={14} />}
              >
                WhatsApp
              </PremiumButton>
            </motion.div>

            {/* Micro stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.88 }}
              className="flex items-center gap-8 pt-2"
            >
              {[
                { value: '50+',    label: 'Enterprise Clients'  },
                { value: '10K+',   label: 'Units Delivered'     },
                { value: '7–14',   label: 'Day Production'      },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-display text-2xl text-primary italic">{s.value}</span>
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-outline">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Product visual panel ── */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1,    y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center h-full"
            >
              <TiltCard>
                <div className="relative rounded-[2px] border border-primary/12 bg-surface overflow-hidden shadow-[0_30px_80px_rgba(38,33,26,0.15)] luxury-glow" style={{ minHeight: 520 }}>
                  
                  {/* Grain overlay */}
                  <div className="grain-overlay rounded-[2px]" />

                  {/* Product image */}
                  <Image
                    src="/assets/premium-leather-wallet-bulk.webp"
                    alt="Aurel Leather — Premium Corporate Gift Collection"
                    width={800}
                    height={520}
                    className="w-full h-[520px] object-cover opacity-90 contrast-[1.08]"
                    priority
                    fetchPriority="high"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Corner accent lines */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/50" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/50" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary/50" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/50" />

                  {/* Floating stat badge — top right */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-8 right-8 bg-background/85 backdrop-blur-md border border-primary/20 px-4 py-3 shadow-xl"
                  >
                    <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-outline mb-1">Min. Order</p>
                    <p className="font-display text-xl text-primary italic">50 Units</p>
                  </motion.div>

                  {/* Floating stat badge — bottom left */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-8 left-8 bg-background/85 backdrop-blur-md border border-primary/20 px-4 py-3 shadow-xl"
                  >
                    <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-outline mb-1">Production</p>
                    <p className="font-display text-xl text-primary italic">7–14 Days</p>
                  </motion.div>

                  {/* Product label */}
                  <div className="absolute bottom-8 right-8">
                    <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-on-surface/60">Executive Collection</p>
                  </div>

                  {/*
                    ===== R3F FUTURE ZONE =====
                    Component: HeroProduct3D
                    Requires: @react-three/fiber, @react-three/drei
                    Status: Architecture prepared — implementation deferred
                    Replace <img> above with <Canvas> containing rotating leather object
                    ========================== 
                  */}
                </div>
              </TiltCard>
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-primary/60" />
        </motion.div>
        <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-outline/50">Scroll</span>
      </motion.div>

      <LeadModal open={isModalOpen} onClose={() => setIsModalOpen(false)} product={undefined} />
    </section>
  );
};
