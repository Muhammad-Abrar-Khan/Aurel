export const TrustSection = () => {
  const logos = [
    'Banking',
    'Telecom',
    'FMCG',
    'Luxury',
    'Private Banking',
  ];

  return (
    <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <p className="text-xs uppercase tracking-[0.35em] text-outline">Trusted By</p>
        <h2 className="font-display text-4xl md:text-5xl">Enterprise brands rely on our leather programs.</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {logos.map((label) => (
          <div key={label} className="rounded-[1.5rem] border border-white/10 bg-surface px-6 py-8 text-center shadow-xl">
            <span className="text-base uppercase tracking-[0.35em] text-on-surface-variant">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
