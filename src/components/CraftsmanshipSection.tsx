export const CraftsmanshipSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-outline">Craftsmanship</p>
          <h2 className="font-display text-4xl md:text-5xl">Handmade precision, premium scale.</h2>
          <p className="text-on-surface-variant max-w-2xl leading-8">Aurel Leather blends artisan construction with enterprise production. Each piece is finished in Karachi with soft gold detailing, edge-burn polishing, and quality checks for executive gifting programs.</p>
        </div>

        <div className="grid gap-6">
          {[
            {
              title: 'Material provenance',
              copy: 'Full-grain hides selected for texture, durability and a richer patina over time.',
            },
            {
              title: 'Luxury finishing',
              copy: 'Natural polish, subtle embossing and gold-accent details kept elegant and restrained.',
            },
            {
              title: 'White-glove packaging',
              copy: 'Private label boxes, silk tissue wrap, and premium presentation tailored for corporate clients.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-surface p-8 shadow-2xl">
              <h3 className="font-display text-2xl text-on-surface mb-3">{item.title}</h3>
              <p className="text-on-surface-variant leading-7">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
