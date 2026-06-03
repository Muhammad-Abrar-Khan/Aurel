"use client";

import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { EMAIL_ADDRESS } from '@/lib/constants';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_aurel';
const TEMPLATE_ALERT = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ALERT_ID || 'template_alert';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

const PRODUCTS = [
  'Executive Wallet',
  'Card Holder',
  'Leather Notebook',
  'Executive Gift Set',
  'Custom / Inquiry',
];

const QUANTITIES = ['50–99 Units', '100–499 Units', '500–1,000 Units', '1,000+ Units'];
const BUDGETS = ['PKR 50K–100K', 'PKR 100K–250K', 'PKR 250K–500K', 'PKR 500K+', 'International USD'];
const PACKAGING_OPTIONS = ['Standard Black Box', 'Custom Branded Box', 'No Packaging'];

const STATUS_MESSAGES = {
  idle: 'Ready to submit your quote request.',
  sending: 'Sending your enquiry...',
  success: 'Your request has been sent. We will respond within 2 hours.',
  error: 'Something went wrong. Please try again or contact us on WhatsApp.',
};

type StepKey = 1 | 2 | 3 | 4;

type FormState = {
  fullName: string;
  company: string;
  role: string;
  whatsapp: string;
  email: string;
  products: string[];
  quantity: string;
  budget: string;
  deadline: string;
  embossing: string;
  packaging: string;
  requirements: string;
  acceptTerms: boolean;
};

export const MultiStepRFQ = () => {
  const [step, setStep] = useState<StepKey>(1);
  const [form, setForm] = useState<FormState>({
    fullName: '',
    company: '',
    role: '',
    whatsapp: '+92 ',
    email: '',
    products: [],
    quantity: '50–99 Units',
    budget: 'PKR 50K–100K',
    deadline: '',
    embossing: '',
    packaging: 'Standard Black Box',
    requirements: '',
    acceptTerms: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const productSummary = useMemo(() => {
    if (!form.products.length) return 'No product selected yet.';
    return form.products.join(', ');
  }, [form.products]);

  const setField = (name: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateStep = (currentStep: StepKey) => {
    const nextErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required';
      if (!form.company.trim()) nextErrors.company = 'Company is required';
      if (!form.role.trim()) nextErrors.role = 'Role or title is required';
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Valid email is required';
      if (!form.whatsapp.trim() || form.whatsapp === '+92 ') nextErrors.whatsapp = 'Valid WhatsApp number is required';
    }

    if (currentStep === 2) {
      if (!form.products.length) nextErrors.products = 'Select at least one product';
      if (!form.quantity.trim()) nextErrors.quantity = 'Quantity is required';
    }

    if (currentStep === 3) {
      if (!form.packaging.trim()) nextErrors.packaging = 'Select a packaging preference';
    }

    if (currentStep === 4 && !form.acceptTerms) {
      nextErrors.acceptTerms = 'You must agree to terms to submit';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep((prev) => Math.min(prev + 1, 4) as StepKey);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1) as StepKey);
  };

  const handleProductToggle = (product: string) => {
    setForm((prev) => {
      const selected = prev.products.includes(product)
        ? prev.products.filter((item) => item !== product)
        : [...prev.products, product];
      return { ...prev, products: selected };
    });
    setErrors((prev) => ({ ...prev, products: '' }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateStep(4)) return;
    if (!PUBLIC_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ALERT, {
        full_name: form.fullName,
        company: form.company,
        role: form.role,
        whatsapp: form.whatsapp,
        email: form.email,
        products: productSummary,
        quantity: form.quantity,
        budget: form.budget,
        deadline: form.deadline || 'Not specified',
        embossing: form.embossing || 'N/A',
        packaging: form.packaging,
        requirements: form.requirements || 'No special requirements',
      });

      setStatus('success');
      setForm({
        fullName: '',
        company: '',
        role: '',
        whatsapp: '+92 ',
        email: '',
        products: [],
        quantity: '50–99 Units',
        budget: 'PKR 50K–100K',
        deadline: '',
        embossing: '',
        packaging: 'Standard Black Box',
        requirements: '',
        acceptTerms: false,
      });
      setStep(1);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="rounded-[32px] border border-primary/10 bg-surface/40 p-8 md:p-12">
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-primary font-mono">
          <span className="text-on-surface">Step {step} of 4</span>
          <span className="h-px w-16 bg-primary" />
          <span className="text-on-surface-variant">{STATUS_MESSAGES[status]}</span>
        </div>
        <div className="grid grid-cols-4 gap-3 text-[10px] uppercase tracking-[0.35em] text-on-surface-variant font-mono">
          {['Contact Info', 'Project Details', 'Customization', 'Review'].map((label, index) => (
            <div key={label} className={`rounded-full border px-3 py-2 ${step === index + 1 ? 'border-primary text-primary bg-background/50' : 'border-white/10'}`}>
              {label}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {step === 1 && (
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span>Full Name</span>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => setField('fullName', e.target.value)}
                className="w-full rounded-xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none"
              />
              {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName}</p>}
            </label>

            <label className="space-y-2 text-sm">
              <span>Company</span>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setField('company', e.target.value)}
                className="w-full rounded-xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none"
              />
              {errors.company && <p className="text-red-400 text-xs">{errors.company}</p>}
            </label>

            <label className="space-y-2 text-sm">
              <span>Role / Title</span>
              <input
                type="text"
                value={form.role}
                onChange={(e) => setField('role', e.target.value)}
                className="w-full rounded-xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none"
              />
              {errors.role && <p className="text-red-400 text-xs">{errors.role}</p>}
            </label>

            <label className="space-y-2 text-sm">
              <span>WhatsApp Number</span>
              <input
                type="tel"
                value={form.whatsapp}
                onChange={(e) => setField('whatsapp', e.target.value)}
                className="w-full rounded-xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none"
              />
              {errors.whatsapp && <p className="text-red-400 text-xs">{errors.whatsapp}</p>}
            </label>

            <label className="space-y-2 text-sm md:col-span-2">
              <span>Email Address</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setField('email', e.target.value)}
                className="w-full rounded-xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none"
              />
              {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {PRODUCTS.map((product) => (
                <button
                  key={product}
                  type="button"
                  onClick={() => handleProductToggle(product)}
                  className={`rounded-3xl border px-5 py-4 text-left transition ${form.products.includes(product) ? 'border-primary bg-primary/10 text-on-surface' : 'border-white/10 bg-background/70 text-on-surface-variant'}`}
                >
                  <span className="font-semibold">{product}</span>
                </button>
              ))}
            </div>
            {errors.products && <p className="text-red-400 text-xs">{errors.products}</p>}

            <div className="grid gap-6 md:grid-cols-3">
              <label className="space-y-2 text-sm">
                <span>Quantity</span>
                <select
                  value={form.quantity}
                  onChange={(e) => setField('quantity', e.target.value)}
                  className="w-full rounded-xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none"
                >
                  {QUANTITIES.map((quantity) => (
                    <option key={quantity} value={quantity}>{quantity}</option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm">
                <span>Budget Range</span>
                <select
                  value={form.budget}
                  onChange={(e) => setField('budget', e.target.value)}
                  className="w-full rounded-xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none"
                >
                  {BUDGETS.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm">
                <span>Delivery Deadline</span>
                <input
                  type="date"
                  value={form.deadline}
                  onChange={(e) => setField('deadline', e.target.value)}
                  className="w-full rounded-xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none"
                />
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8">
            <label className="space-y-2 text-sm">
              <span>Embossing Text</span>
              <input
                type="text"
                value={form.embossing}
                onChange={(e) => setField('embossing', e.target.value)}
                placeholder="Brand name, initials, or logo line"
                className="w-full rounded-xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none"
              />
            </label>

            <label className="space-y-2 text-sm">
              <span>Packaging Preference</span>
              <select
                value={form.packaging}
                onChange={(e) => setField('packaging', e.target.value)}
                className="w-full rounded-xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none"
              >
                {PACKAGING_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.packaging && <p className="text-red-400 text-xs">{errors.packaging}</p>}
            </label>

            <label className="space-y-2 text-sm">
              <span>Special Requirements</span>
              <textarea
                value={form.requirements}
                onChange={(e) => setField('requirements', e.target.value)}
                rows={4}
                placeholder="Any special finishes, delivery instructions, or design notes"
                className="w-full rounded-3xl border border-primary/10 bg-background/70 px-4 py-3 text-sm text-on-surface outline-none resize-none"
              />
            </label>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="rounded-[24px] border border-primary/10 bg-background/80 p-6">
              <h3 className="font-display text-2xl text-on-surface mb-4">Review your quote request</h3>
              <div className="space-y-3 text-sm text-on-surface-variant">
                <p><span className="font-semibold text-on-surface">Name:</span> {form.fullName}</p>
                <p><span className="font-semibold text-on-surface">Company:</span> {form.company}</p>
                <p><span className="font-semibold text-on-surface">Role:</span> {form.role}</p>
                <p><span className="font-semibold text-on-surface">WhatsApp:</span> {form.whatsapp}</p>
                <p><span className="font-semibold text-on-surface">Email:</span> {form.email}</p>
                <p><span className="font-semibold text-on-surface">Products:</span> {productSummary}</p>
                <p><span className="font-semibold text-on-surface">Quantity:</span> {form.quantity}</p>
                <p><span className="font-semibold text-on-surface">Budget:</span> {form.budget}</p>
                <p><span className="font-semibold text-on-surface">Deadline:</span> {form.deadline || 'Not specified'}</p>
                <p><span className="font-semibold text-on-surface">Embossing:</span> {form.embossing || 'N/A'}</p>
                <p><span className="font-semibold text-on-surface">Packaging:</span> {form.packaging}</p>
                <p><span className="font-semibold text-on-surface">Requirements:</span> {form.requirements || 'None'}</p>
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-on-surface-variant">
              <input
                type="checkbox"
                checked={form.acceptTerms}
                onChange={(e) => setField('acceptTerms', e.target.checked)}
                className="mt-1 h-4 w-4 rounded border border-primary/20 bg-background/70 text-primary focus:ring-primary"
              />
              <span>I agree to share this information with Aurel Leather for quote preparation.</span>
            </label>
            {errors.acceptTerms && <p className="text-red-400 text-xs">{errors.acceptTerms}</p>}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <div className="flex gap-3">
            {step > 1 && (
              <PremiumButton type="button" variant="outline" size="md" onClick={handleBack}>
                Back
              </PremiumButton>
            )}
            {step < 4 && (
              <PremiumButton type="button" variant="primary" size="md" onClick={handleNext}>
                Continue
              </PremiumButton>
            )}
          </div>
          {step === 4 && (
            <PremiumButton type="submit" variant="primary" size="md" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Submit Request'}
            </PremiumButton>
          )}
        </div>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-sm text-emerald-200"
          >
            {STATUS_MESSAGES.success}
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-red-500/20 bg-red-500/10 p-5 text-sm text-red-200"
          >
            {STATUS_MESSAGES.error}
          </motion.div>
        )}
      </form>
    </div>
  );
};
