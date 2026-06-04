"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, 
  Pause, 
  Copy, 
  Check, 
  AlertTriangle, 
  Layers, 
  Maximize2,
  Tv,
  Film,
  Compass,
  Sliders,
  Sparkles
} from "lucide-react";


// Types
interface ShotData {
  id: string;
  number: string;
  title: string;
  duration: string;
  concept: string;
  universalPrompt: string;
  visualCue: string;
  engines: {
    runway: {
      prompt: string;
      parameters: { key: string; value: string }[];
    };
    kling: {
      prompt: string;
      parameters: { key: string; value: string }[];
    };
    luma: {
      prompt: string;
      parameters: { key: string; value: string }[];
    };
  };
}

const v1Issues = [
  {
    id: "shape",
    title: "Box Shape Shifting",
    description: "Gift box morphs into a cabinet-like structure midway and changes its overall geometry.",
    severity: "Critical",
    timestamp: "0:04"
  },
  {
    id: "hinge",
    title: "Lid Hinge Disconnection",
    description: "The rear hinge relationship breaks, causing the lid to float independently above the products.",
    severity: "Critical",
    timestamp: "0:05"
  },
  {
    id: "hierarchy",
    title: "Product Timing & Pacing",
    description: "Wallets fly into position before the box is fully open, losing all premium pacing and hierarchy.",
    severity: "High",
    timestamp: "0:03"
  },
  {
    id: "rotation",
    title: "Uncontrolled Tumbling",
    description: "Products rotate aggressively on multiple axes, resembling game assets rather than luxury items.",
    severity: "High",
    timestamp: "0:04"
  },
  {
    id: "leather",
    title: "Detail Degradation",
    description: "Exquisite pebble-grain leather textures and stitching details completely vanish during motion.",
    severity: "Medium",
    timestamp: "0:06"
  }
];

const storyboardShots: ShotData[] = [
  {
    id: "shot1",
    number: "SHOT 01",
    title: "The Presentation (Lid Opens)",
    duration: "2.5 Seconds",
    concept: "Focuses purely on the box opening smoothly. The camera remains 100% stationary. The lid rotates cleanly around a rigid rear hinge exactly 110 degrees, revealing the empty luxury velvet trays inside.",
    visualCue: "A slow, heavy, mechanical open. The matte-black leather pebble grain catches soft rim lights. No wallets move.",
    universalPrompt: "Premium, photorealistic, 8k resolution, luxury studio commercial for Aurel Leather. A rigid matte-black gift box is resting on a highly polished black marble table. The camera is completely stationary, locked on a tripod, front-facing view, with a very subtle 1% dolly-in. The environment is a dark, premium luxury studio with deep golden rim lighting and soft shadows. The elegant gift box slowly and smoothly opens its lid from a closed position. The lid remains permanently and securely attached to the box base via a thick, visible gold-accented rear hinge. The lid pivots slowly and steadily around the hinge axis to an angle of 110 degrees. The box base remains absolutely still and rigid. Zero morphing, zero shape-shifting. The interior reveals elegant, clean, empty beige velvet compartments. Luxury cinematic pacing, extremely slow and deliberate motion.",
    engines: {
      runway: {
        prompt: "A premium luxury product commercial. Front-facing stationary shot of a rigid matte-black luxury gift box opening on a polished black marble table. Extremely slow and smooth motion. The lid is physically attached to a heavy rear hinge and opens to 110 degrees. Empty beige velvet trays inside. Dark luxury studio environment, soft golden rim lighting, highly detailed pebble leather texture on the box. Absolute zero morphing, zero scale changes, rigid body physics. 8k resolution, cinematic, photorealistic, 60fps.",
        parameters: [
          { key: "Motion Strength", value: "3 (Low)" },
          { key: "Upscale", value: "Enabled" },
          { key: "Aspect Ratio", value: "16:9" }
        ]
      },
      kling: {
        prompt: "High-end luxury advertising, 8k resolution. A luxurious rigid presentation box sits on a polished black marble table. Camera is locked, no movement, extremely stable. The box lid opens slowly and smoothly from a closed position, rotating 110 degrees on a permanent rear hinge. Box base and interior trays remain perfectly static and unchanged. Soft key light, premium golden reflections, photorealistic leather grain on box. Rigid body dynamics, zero morphing.",
        parameters: [
          { key: "Mode", value: "Professional" },
          { key: "Camera Movement", value: "Static (Locked)" },
          { key: "Relevance Index", value: "8/10" }
        ]
      },
      luma: {
        prompt: "A cinematic slow-motion commercial shot of a luxury black gift box opening, revealing empty beige velvet trays. Polished black marble background, gold reflections. Camera is completely static. The lid stays attached to the hinge and rotates smoothly. Photorealistic, 8k, highly detailed leather textures, premium product shot.",
        parameters: [
          { key: "Enhance Prompt", value: "Off (Locked)" },
          { key: "Quality", value: "Best" }
        ]
      }
    }
  },
  {
    id: "shot2",
    number: "SHOT 02",
    title: "The Fitting (Products Descend)",
    duration: "3.5 Seconds",
    concept: "With the open box standing perfectly still, the four luxury leather products glide down slowly from above. They follow clean, elegant Bezier curves with near-zero rotation, landing with millimeter precision in their dedicated trays.",
    visualCue: "A choreographed descent. A black notebook, brown zip wallet, cardholder, and long wallet float gently down, sliding snugly into velvet slots without bouncing or colliding.",
    universalPrompt: "Premium, photorealistic, 8k resolution, luxury studio commercial for Aurel Leather. The rigid matte-black gift box is already open at 110 degrees and sits completely static on a polished black marble table. The camera is stationary, front-facing, with a subtle 1% dolly-in. Four luxury full-grain leather products (1. Black Executive Notebook Wallet, 2. Brown Zip Wallet, 3. Black Card Holder, 4. Brown Long Wallet) float slightly above the box. The products slowly and gracefully glide downward into their dedicated, perfectly fitted beige velvet compartments. The products follow smooth, linear Bezier paths. Zero spinning, zero tumbling, absolute zero violent rotation. Maximum tilt is 5 degrees. The products land with millimeter precision in their respective compartments. No clipping, no bouncing, no shape-shifting. Ultra-realistic leather pebble grain and stitching details remain perfectly sharp. Golden logo reflections.",
    engines: {
      runway: {
        prompt: "Premium product commercial. An open rigid matte-black gift box sits static on a black marble table. Four luxury leather products—a black notebook, brown zip wallet, black cardholder, and brown long wallet—descend slowly and slide perfectly into their custom velvet slots. Zero spinning, zero tumbling, extremely smooth and gentle glide, landing with precision. High detail leather grain, sharp stitching, soft golden lighting. 8k, photorealistic, rigid-body physics.",
        parameters: [
          { key: "Motion Strength", value: "4 (Moderate)" },
          { key: "Upscale", value: "Enabled" },
          { key: "Aspect Ratio", value: "16:9" }
        ]
      },
      kling: {
        prompt: "High-end luxury advertising, 8k. Four premium leather accessories (black notebook, brown zip wallet, cardholder, long wallet) float down slowly and dock with perfect precision into the custom velvet trays of a static, open luxury box. Extremely stable box geometry, perfect proportions. No morphing, no tumbling, slow-motion Bezier movement, smooth landing. High-end lighting, realistic leather pebble-grain and gold foil stamps.",
        parameters: [
          { key: "Mode", value: "Professional" },
          { key: "Relevance Index", value: "9/10" },
          { key: "Frame Rate", value: "60 fps" }
        ]
      },
      luma: {
        prompt: "A beautiful, cinematic shot of premium leather wallets and a notebook descending slowly and fitting with millimeter precision into a luxury gift box's beige velvet compartments. Static camera, rich studio lighting, perfect leather textures, gold foil reflections, luxury pacing.",
        parameters: [
          { key: "Enhance Prompt", value: "Off (Locked)" },
          { key: "Motion Pacing", value: "Slow" }
        ]
      }
    }
  },
  {
    id: "shot3",
    number: "SHOT 03",
    title: "The Showcase (Hero Close-Up)",
    duration: "2.0 Seconds",
    concept: "A slow, breathy cinematic dolly-in showing the fully assembled luxury gift box. Visual highlights glint across the elegant, perfectly sharp gold foil Aurel branding, emphasizing clean stitching and premium pebble leather.",
    visualCue: "A pristine high-fashion editorial close-up. Zero object movement. Dramatic studio lighting glides over full-grain pebble contours.",
    universalPrompt: "Premium, photorealistic, 8k resolution, luxury product commercial for Aurel Leather. A fully assembled luxury gift box sits on a polished black marble table, holding four premium leather products perfectly nested in beige velvet compartments. The camera is stationary and performs a very slow, elegant cinematic dolly-in of 2%. Soft luxury key lighting glides across the scene, catching the highly detailed, sharp pebble grain texture of the leather and individual stitching threads. The elegant gold foil embossed Aurel logo on the lid and products shines with highly realistic metallic gold reflections and sharp readability. Absolute zero motion of objects, zero morphing, zero clipping. Pristine, high-end editorial product commercial look, deep rich contrast.",
    engines: {
      runway: {
        prompt: "Luxury product close-up, hero shot. A stationary open black gift box holding a leather notebook, cardholder, and wallets in beige velvet. Extremely slow cinematic dolly-in. Studio key light moves slightly, creating rich golden metallic reflections on the Aurel gold foil logo. Ultra-detailed full-grain leather textures, visible stitching, polished marble table, dark luxury background. 8k resolution, photorealistic.",
        parameters: [
          { key: "Motion Strength", value: "2 (Minimal)" },
          { key: "Upscale", value: "Enabled" },
          { key: "Aspect Ratio", value: "16:9" }
        ]
      },
      kling: {
        prompt: "Hero shot of luxury corporate gift set, 8k. Open matte-black box containing premium leather notebook and wallets. Completely static scene, subtle dolly-in camera motion. Professional studio lighting sweeps slowly, highlighting gold foil Aurel logo, deep leather pebble textures, and meticulous stitching. Ultra-realistic, commercial advertising quality, elite branding.",
        parameters: [
          { key: "Mode", value: "Professional" },
          { key: "Camera Move", value: "Very Slow Zoom" },
          { key: "Relevance Index", value: "9/10" }
        ]
      },
      luma: {
        prompt: "A beautiful, cinematic shot of premium leather wallets and a notebook nested inside a luxury presentation gift box. Very slow dolly in, gold foil Aurel logo catching glowing warm lights, highly detailed stitching and heavy leather textures.",
        parameters: [
          { key: "Enhance Prompt", value: "Off (Locked)" },
          { key: "Pristine Pass", value: "On" }
        ]
      }
    }
  }
];

export const CinematicShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeShot, setActiveShot] = useState<ShotData>(storyboardShots[0]);
  const [activeEngine, setActiveEngine] = useState<"runway" | "kling" | "luma">("runway");
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<"storyboard" | "draft">("storyboard");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const handlePlayToggle = () => {
    const video = document.getElementById("draft-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full bg-surface border border-primary/10 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(38,33,26,0.06)] relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#a1814e]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-primary/10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[9px] tracking-[0.4em] text-primary uppercase bg-primary/10 px-2.5 py-1 rounded">
              B2B Director's Console
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>
          <h2 className="font-display italic text-3xl md:text-4xl text-on-surface">
            Cinematic Unboxing Showcase
          </h2>
          <p className="text-sm text-on-surface-variant max-w-xl mt-2 leading-relaxed">
            Review the structural flaws in our current V1 draft, copy copy-pasteable production prompts, and review the modular 3-stage luxury B2B launch sequence.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center p-1 bg-surface border border-white/5 rounded-xl self-start md:self-center">
          <button
            onClick={() => setActiveTab("storyboard")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-lg transition-all duration-300 ${
              activeTab === "storyboard"
                ? "bg-primary text-on-primary shadow-lg"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Film size={12} />
            3-Shot Plan
          </button>
          <button
            onClick={() => setActiveTab("draft")}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest uppercase rounded-lg transition-all duration-300 ${
              activeTab === "draft"
                ? "bg-primary text-on-primary shadow-lg"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Tv size={12} />
            Current Draft V1
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* TAB 1: DRAFT REVIEW */}
        {activeTab === "draft" && (
          <motion.div
            key="draft"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start"
          >
            {/* Video Player */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <video
                id="draft-video"
                src="/assets/3d-video.mp4"
                loop
                muted
                className="w-full h-full object-cover opacity-80"
                onClick={handlePlayToggle}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Player Overlay controls */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <button
                  onClick={handlePlayToggle}
                  className="w-16 h-16 rounded-full bg-primary/95 text-on-primary flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                </button>
              </div>

              {/* Timestamp & Brand Label */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
                <div className="flex items-center gap-2">
                  <Film size={14} className="text-primary" />
                  <span className="font-mono text-xs text-white/80">3d-video.mp4 (Draft V1)</span>
                </div>
                <span className="font-mono text-xs text-white/50 bg-black/40 px-2 py-0.5 rounded">
                  0:08 Sec
                </span>
              </div>
            </div>

            {/* Critique Console */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={16} className="text-primary animate-pulse" />
                <h3 className="font-mono text-xs tracking-[0.25em] text-outline uppercase">
                  Physics & Geometry Critique
                </h3>
              </div>

              <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                {v1Issues.map((issue) => (
                  <div 
                    key={issue.id}
                    className="p-4 rounded-xl border border-white/5 bg-surface hover:border-primary/25 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                          {issue.severity}
                        </span>
                        <h4 className="font-display italic text-base text-on-surface group-hover:text-primary transition-colors duration-300">
                          {issue.title}
                        </h4>
                      </div>
                      <span className="font-mono text-[10px] text-on-surface-variant bg-white/5 px-2 py-0.5 rounded">
                        {issue.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {issue.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-xs text-primary/95 leading-relaxed font-sans flex gap-2">
                  <Sparkles size={14} className="flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Director's Verdict:</strong> Single-pass generations force the AI to interpolate too much geometry. Splitting the action into 3 distinct shots secures flawless, rich, premium luxury consistency.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: STORYBOARD & MASTER PROMPTS */}
        {activeTab === "storyboard" && (
          <motion.div
            key="storyboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            {/* Shot Selector Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-8 p-1 bg-background border border-primary/10 rounded-xl">
              {storyboardShots.map((shot) => (
                <button
                  key={shot.id}
                  onClick={() => setActiveShot(shot)}
                  className={`py-3.5 rounded-lg flex flex-col items-center justify-center transition-all duration-300 ${
                    activeShot.id === shot.id
                      ? "bg-surface-high border border-primary/25 shadow-md text-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span className="font-mono text-[9px] tracking-[0.25em] mb-1">{shot.number}</span>
                  <span className="font-display italic text-xs md:text-sm">{shot.title}</span>
                </button>
              ))}
            </div>

            {/* Main Content Pane */}
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              {/* Concept & Universals */}
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[9px] text-outline uppercase tracking-widest block mb-1">
                    Visual Duration: {activeShot.duration}
                  </span>
                  <h3 className="font-display italic text-2xl text-on-surface mb-3">
                    {activeShot.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {activeShot.concept}
                  </p>
                </div>

                {/* Visual Cue Mockup Card */}
                <div className="p-4 rounded-xl bg-surface-low border border-primary/10">
                  <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-primary">
                    <Compass size={12} />
                    <span>CHOREOGRAPHY & MOTION TARGET</span>
                  </div>
                  <p className="text-xs text-on-surface-variant italic">
                    "{activeShot.visualCue}"
                  </p>
                </div>

                {/* Universal Prompt Box */}
                <div className="relative group rounded-xl border border-primary/10 bg-background p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3 border-b border-primary/10 pb-2">
                    <span className="font-mono text-[10px] tracking-widest text-outline uppercase">
                      Universal Prompt (Base)
                    </span>
                    <button
                      onClick={() => copyToClipboard(activeShot.universalPrompt, `${activeShot.id}-universal`)}
                      className="p-1.5 rounded bg-primary/10 hover:bg-primary/20 text-on-surface-variant hover:text-primary transition-all duration-300 flex items-center gap-1.5 font-mono text-[10px]"
                    >
                      {copiedStates[`${activeShot.id}-universal`] ? (
                        <>
                          <Check size={10} />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={10} />
                          Copy Base
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed select-all">
                    {activeShot.universalPrompt}
                  </p>
                </div>
              </div>

              {/* AI Generators Prompt Engine */}
              <div className="rounded-2xl border border-primary/10 bg-surface-low p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-primary" />
                    <h3 className="font-mono text-xs tracking-widest text-outline uppercase">
                      AI Platform Optimization
                    </h3>
                  </div>

                  {/* Engine Selector buttons */}
                  <div className="flex p-0.5 bg-background border border-primary/10 rounded-lg">
                    {(["runway", "kling", "luma"] as const).map((eng) => (
                      <button
                        key={eng}
                        onClick={() => setActiveEngine(eng)}
                        className={`px-3 py-1.5 rounded-md font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                          activeEngine === eng
                            ? "bg-primary text-on-primary"
                            : "text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        {eng}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optimized Prompt Output */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-outline uppercase">
                      Engine Optimized Copy
                    </span>
                    <button
                      onClick={() => copyToClipboard(activeShot.engines[activeEngine].prompt, `${activeShot.id}-${activeEngine}`)}
                      className="px-3 py-1.5 rounded bg-primary/10 hover:bg-primary text-primary hover:text-on-primary transition-all duration-300 flex items-center gap-2 font-mono text-[10px] border border-primary/20"
                    >
                      {copiedStates[`${activeShot.id}-${activeEngine}`] ? (
                        <>
                          <Check size={12} />
                          Prompt Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          Copy Optimized Prompt
                        </>
                      )}
                    </button>
                  </div>

                  {/* Highlighted copy container */}
                  <div className="p-4 rounded-xl bg-surface-low border border-primary/10 font-sans text-xs text-on-surface-variant leading-relaxed select-all min-h-[120px]">
                    {activeShot.engines[activeEngine].prompt}
                  </div>
                </div>

                {/* Recommended Parameters */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sliders size={12} className="text-primary" />
                    <span className="font-mono text-[10px] text-outline uppercase tracking-widest">
                      RECOMMENDED ENGINE PARAMS
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {activeShot.engines[activeEngine].parameters.map((param, pi) => (
                      <div key={pi} className="p-3 rounded-lg bg-background border border-primary/10">
                        <span className="font-mono text-[8px] text-outline block mb-1 uppercase">
                          {param.key}
                        </span>
                        <span className="font-mono text-[11px] text-primary italic font-semibold">
                          {param.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CinematicShowcase;
