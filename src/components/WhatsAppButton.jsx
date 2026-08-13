import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // We'll use the Gents gym number as primary for the floating button, or just the one they provided earlier
  // The user asked to add BOTH contact numbers, so for WhatsApp maybe link to the main one (Ladies: 50350222, Gents: 33279451)
  // I will link to the general / gents one by default
  const whatsappNumber = "97433279451"; 
  const message = "Hello, I am interested in joining QFit Gym!";
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat with us on WhatsApp">
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;
