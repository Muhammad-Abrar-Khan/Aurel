import { motion } from "motion/react";
import { ThreeDCard } from "./ThreeDCard";

export const AtelierSection = () => {
  const images = [
    {
      span: "md:col-span-2",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALCC3wY8rmKMpAunJQ8Qf2LmBpnh5VwzoJSU4btZ9E8u5nrxk2tP4XEmwQUpRAr9SVm4oYMlaEixj-T2xUCct_GudhioZEvCU5qUW39OY8pjNWv8jqx91tMiTZGFEaE2Xvgwck2ZmpSKNPXFfQQnS8ns3t5DXYRsKhc0uPCuNeo_tMP28zVXg2h1XnyConslrdkbnm_beKPXApb65q4n7FLZetrHkjMe0xgaYWINutaxVJ96Hsv9hmPblDNn_UCGdnpadm8DWXhao",
      label: "Hand-Stitched Precision"
    },
    {
      span: "md:col-span-1",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaZl79JxQMtiNlwc6yJjidUKcHsTerIiyz5aw4oWV7_G5ITsoVzKNHXg2qP9fcgiacxzZCx040CIxyPk0Cz54muHraCLnXi2U6MK4ai3ZKXjpJ828WYpvWDQHv0LX-kiXZS2_N7uxZ4p_MFSs7K4ZEAjP06Fojg4Dqw0ZtpthxT0qLO7dFfsP4j_QpiYtodI8VTe7cBnaS7EG__Uz8mwltv3G_YA_2FgPBf2RpMgT9K8ENJlc_98KrWoKWQvrudDDwWb_O8yKeX54",
      label: "Gold Embossing"
    },
    {
      span: "md:col-span-1",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPRxB5oBEY0P6y8l-94iieIfcJnSytT1Wdl6CtI4px1mswYN7qi53AE_8vVhLI7aDhdJAVpIQIC219AOgtgev94HS_3FZe5k5jvQQVJFIBGXiMqSkXDDPGMa5dKi0WH81d5WREU4zHY7uEYHOuu4usR3iH-kMaNnlMTdxrmwkvqYZ4R9iQ4mRk9o-9Dsdt7OEDptpqC4J4fjU8MwsXe6TmtrTmtKQAf7DiRLZIuIjOmqDbTTSskF7vkR9-HwlHQ2Hzf0KdlLn6F0c",
      label: "Raw Hide Curation"
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto perspective-2000">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
        <div className="max-w-2xl space-y-6">
          <h2 className="font-display text-4xl md:text-5xl italic text-on-surface">Aurel Leather Atelier</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Our Karachi-based workshop combines generational artisanal skill with modern design precision. Every hide is inspected for grain consistency and durability.
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05, rotateY: 10 }}
          whileTap={{ scale: 0.95 }}
          className="font-sans text-[10px] font-bold tracking-[0.2em] text-primary border border-outline px-10 py-4 hover:bg-primary hover:text-on-primary transition-all uppercase rounded-sm cursor-pointer"
        >
          View Craft Process
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[auto] md:h-[600px]">
        {images.map((img, idx) => (
          <ThreeDCard key={idx} className={img.span}>
            <div
              className={`relative group h-full w-full overflow-hidden rounded-sm cursor-pointer min-h-[300px] md:min-h-0 bg-surface shadow-2xl`}
            >
              <img 
                src={img.image} 
                alt={img.label} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-8" style={{ transform: "translateZ(40px)" }}>
                <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-on-surface uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                  {img.label}
                </span>
              </div>
            </div>
          </ThreeDCard>
        ))}
      </div>
    </section>
  );
};
