import { WHATSAPP_URL } from '@/lib/constants';

const encode = (message: string) => `?text=${encodeURIComponent(message)}`;

export const waLinks = {
  general: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I have an inquiry.')}`,
  quote: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I would like a corporate gifting quote.')}`,
  wallets: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I need a quote for executive wallets.')}`,
  cardholders: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I need a quote for card holders.')}`,
  notebooks: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I need a quote for leather notebooks.')}`,
  giftSets: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I need a quote for executive gift sets.')}`,
  manufacturing: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I would like to schedule a virtual factory tour.')}`,
  oem: `${WHATSAPP_URL}${encode("Hi Aurel Leather, I'm interested in OEM/Private Label production. I'd like to discuss my requirements.")}`,
  banking: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I represent a banking institution and need corporate gifting.')}`,
  technology: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I represent a tech company and need corporate gifting.')}`,
  education: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I represent an educational institution and need branded leather gifts.')}`,
  realEstate: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I represent a real estate business and need premium client gifts.')}`,
  healthcare: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I represent a healthcare organization and need leather gifts for executives.')}`,
  sample: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I would like to request a product sample.')}`,
  international: `${WHATSAPP_URL}${encode('Hi Aurel Leather, I am an international buyer looking for a manufacturing partner.')}`,
};
