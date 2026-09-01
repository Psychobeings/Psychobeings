import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919962979176';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello Psychobeings, I would like to connect with you.'
)}`;

const WhatsAppChat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_16px_36px_rgba(37,211,102,0.55)]"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppChat;
