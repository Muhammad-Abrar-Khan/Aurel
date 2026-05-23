"use client";

import React, { useState } from 'react';
import { captureLead, getWhatsAppUrl } from '../utils/leadCapture';

type Props = {
  open: boolean;
  onClose: () => void;
  product?: string;
};

export const LeadModal: React.FC<Props> = ({ open, onClose, product }) => {
  const [form, setForm] = useState({ name: '', company: '', qty: '50 - 250 Units', budget: 'Standard', email: '' });
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload = { ...form, product };
    captureLead(payload);

    const msg = `Aurel Leather Enterprise Inquiry\nProduct: ${product || 'General'}\nName: ${form.name}\nCompany: ${form.company}\nQuantity: ${form.qty}\nBudget: ${form.budget}\nEmail: ${form.email}`;
    window.open(getWhatsAppUrl(msg), '_blank');
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50">
      <div className="bg-surface text-on-surface p-8 rounded max-w-xl w-full mx-4">
        <h3 className="font-display text-2xl mb-4">Request a Quote</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Full name" className="p-3 bg-background border border-outline rounded" />
          <input required value={form.company} onChange={(e)=>setForm({...form,company:e.target.value})} placeholder="Company / Agency" className="p-3 bg-background border border-outline rounded" />
          <input value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Email (optional)" className="p-3 bg-background border border-outline rounded" />
          <select value={form.qty} onChange={(e)=>setForm({...form,qty:e.target.value})} className="p-3 bg-background border border-outline rounded">
            <option>50 - 250 Units</option>
            <option>250 - 1,000 Units</option>
            <option>1,000 - 10,000 Units</option>
            <option>Enterprise Scale</option>
          </select>
          <select value={form.budget} onChange={(e)=>setForm({...form,budget:e.target.value})} className="p-3 bg-background border border-outline rounded">
            <option>Standard</option>
            <option>Premium</option>
            <option>Express (+30%)</option>
          </select>

          <div className="flex items-center gap-4 justify-end">
            <button type="button" onClick={onClose} className="px-6 py-3 border border-outline rounded">Cancel</button>
            <button type="submit" disabled={loading} className="px-6 py-3 bg-primary text-on-primary rounded">Continue to WhatsApp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadModal;

