"use client";
import Image from "next/image";

export const StaticLuxuryPackagingImage = () => {
  return (
    <div className="w-full h-full relative">
      <Image 
        src="/assets/institutional-gifting-packaging.webp" 
        alt="Aurel Rigid Packaging" 
        fill 
        className="object-cover" 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-background/10 mix-blend-overlay" />
    </div>
  );
};
