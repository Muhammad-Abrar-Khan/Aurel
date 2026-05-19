export type LeadPayload = {
  name: string;
  company: string;
  qty?: string;
  budget?: string;
  email?: string;
  product?: string;
  message?: string;
};

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '923323632052';
const leadEndpoint = import.meta.env.VITE_LEAD_ENDPOINT;

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const captureLead = async (payload: LeadPayload) => {
  if (!leadEndpoint) return;

  try {
    await fetch(leadEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.warn('Lead capture request failed:', error);
  }
};
