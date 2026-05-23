export const CorporateGiftingSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-background text-on-surface">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-outline">Corporate Programs</p>
          <h2 className="font-display text-4xl md:text-5xl">Premium gifting at scale — for banking, telecom and luxury experiences.</h2>
          <p className="text-on-surface-variant max-w-2xl leading-8">We partner with institutional brands to deliver leather gifts that reinforce trust, luxury and thoughtful presentation. From onboarding suites to executive awards, every shipment is curated for impact.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Private label production',
              'Global logistics support',
              'Custom packaging and inserts',
              'Bespoke bulk pricing',
            ].map((feature) => (
              <span key={feature} className="inline-flex rounded-full border border-white/10 bg-surface px-4 py-3 text-sm text-on-surface-variant">{feature}</span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-surface p-10 shadow-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-outline">Tailored execution</p>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl mb-3">Dedicated account support</h3>
              <p className="text-on-surface-variant leading-7">A single-touch project manager ensures brief-to-delivery consistency for your corporate programs.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-3">Quality at every batch</h3>
              <p className="text-on-surface-variant leading-7">Each run passes multiple quality checks so your brand receives uniform premium finish across every unit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
