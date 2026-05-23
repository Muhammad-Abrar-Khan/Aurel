export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Aurel Leather transformed our corporate gifting with luxury execution and timely delivery.',
      author: 'Head of Brand, Global Bank',
    },
    {
      quote: 'The quality and customization were exceptional — every piece felt premium from box to finish.',
      author: 'Procurement Director, Telecom Group',
    },
    {
      quote: 'Their manufacturing precision made our client gifts feel like a true luxury investment.',
      author: 'Marketing Lead, FMCG Brand',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-background text-on-surface">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-outline">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl">Words from trusted partners.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.author} className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl">
              <p className="text-on-surface leading-8">“{item.quote}”</p>
              <p className="mt-8 text-sm uppercase tracking-[0.25em] text-on-surface-variant">{item.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
