import { motion } from "motion/react";
import { ThreeDCard } from "./ThreeDCard";

export const ExecutiveCollection = () => {
  const products = [
    {
      span: "md:col-span-2",
      tag: "Signature Series",
      title: "The Portfolio Tray",
      description: "A complete executive set featuring an A4 Folio, credit card holder, and premium metallic pen, housed in an inset tray box.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-vBFADTW7PGx7Lz0QpUsAylnYrx8fJkne_9eYrapAM9OcAC6EkpQbLoBttNClRc63jk7t8CJPNeBeQj_o36tUDroST8NKe9Qh8jCt827VwbnPJbFevQknUr4S25MgVX5vr5Yexdv9sQuXv6IBDe_beEzXX82C20i8a0l5mSTAHWpX5z7op8ytbQHqK5QK5xuJbebON02zoMVTOpJGR882ALj1jDvodmagEwMCTUIzev3ziIskpkyjRCGcp7BRtvZCM7oLNve8jqk"
    },
    {
      span: "md:col-span-1",
      title: "Bespoke Wallets",
      description: "Top-grain leather, hand-stitched for permanence.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcRsNi6cmh-V1h-CjVuPaV7ySJNahPYuKugIALlC_Rnf9swPhn7Wd1j6nJY7koshssrbqtPq9Abk2BYW_t3aumdL22c-nga92d1y6IF4_RFcYvlr2OCYfGixi9CpFotXlCTkXX8fQeYdW0P63NIFGEeDq9NnNKlS_Fw-4StNJTS0D9BoPTrYOyYf_NtsdQWsQs-KmLO706G9IDtl4XlDRgQt-dkkoa-QRMU8RvmvhSxozuC4op17p0Qkaf1PT6XX35vVxR3BG-mQ4"
    },
    {
      span: "md:col-span-1",
      title: "Travel Folios",
      description: "RFID protected cases for the global nomad.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6mBxCK4ZXo7k9ZR9HQqVYE-Yy6m7w_H_iFRpbG2rEwzRjBb0ettrS61-A6gu7LJFCtdHmHBMmBERXsva-TP3xuvRI3Mq6FqRG8w-7-JbN_GJwP6ynKbmCfjsv2iOPAXKFgGvoIDdlgHbOtn1MOaADV8vmNVqFF9Vvss3YxLGVyIBnZFGLmb6nfFO9up5yW3n1_HZVINVKOyXHMhF3UIex98fEIhMRkp8KSKcJqCrDtDXuATq8YGp9BDCjQwC38bN85yly_o02srU"
    },
    {
      span: "md:col-span-2",
      title: "Institutional Sets",
      description: "Scalable gifting solutions for conferences, retreats, and new executive onboarding. Tailored to your corporate identity.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDynSOKYPzVBqoOjgi6Lw9eVxntpOEj4hbaJYXCkYm8AwPtxdjtHzZXXPHZl1ofmribUoRb9cjM0cXHpwNUYpDiMwshIcirLmYRi7r7nH_njTxlZcQgFDn2aeiU0QCB_BuCnarpKZiYha3sQI-be2Q3cItRttMqoFwnhVH3PLrcAP6-3lQ0tVg2wLVDU3nAiX_3MbRfKUP1g9CR4WIvEAykg-GEm4otGjghn9Zi8o4J-BsGxC-FtaBM_tTszdqDCG_c7xXAGO8JTU",
      list: ["Custom Embossing", "Panton-matched Tones", "Velvet-lined Trays"]
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
      <div className="mb-16 text-center space-y-4">
        <h2 className="font-display text-4xl md:text-5xl text-on-surface">The Executive Collection</h2>
        <div className="w-24 h-px bg-primary mx-auto gold-thread"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p, index) => (
          <ThreeDCard key={index} className={p.span}>
            <div className="group relative bg-surface p-8 border border-primary/10 rounded overflow-hidden flex flex-col justify-between h-full hover:border-primary/40 transition-all duration-500 shadow-2xl">
              <div className="relative z-10 space-y-4">
                {p.tag && <span className="bg-surface-highest text-primary font-mono text-[10px] px-3 py-1 tracking-widest uppercase">{p.tag}</span>}
                <h3 className="font-display text-3xl text-on-surface">{p.title}</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md">{p.description}</p>
                {p.list && (
                  <ul className="space-y-2 mt-4">
                    {p.list.map(li => (
                      <li key={li} className="flex items-center gap-3 text-xs font-mono text-on-surface-variant">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="mt-8 relative overflow-hidden rounded group shadow-inner-xl" style={{ transform: "translateZ(30px)" }}>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>
          </ThreeDCard>
        ))}
      </div>
    </section>
  );
};
