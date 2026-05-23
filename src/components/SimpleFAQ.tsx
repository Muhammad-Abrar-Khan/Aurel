import React from 'react';

export const SimpleFAQ = ({ items }: { items: { q: string; a: string }[] }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, idx) => (
        <details key={idx} className="p-4 bg-surface border border-outline rounded">
          <summary className="font-display text-lg cursor-pointer">{item.q}</summary>
          <div className="mt-2 text-on-surface-variant text-sm">{item.a}</div>
        </details>
      ))}
    </div>
  );
};

export default SimpleFAQ;
