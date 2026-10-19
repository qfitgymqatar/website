"use client";

import React from 'react';
import { WhatsAppIcon } from './SocialIcons';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // Gents gym number as primary for WhatsApp floating button
  const whatsappNumber = "97433279451"; 
  const message = "Hello, I am interested in joining QFit Gym!";
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat with us on WhatsApp">
      <WhatsAppIcon size={34} color="#ffffff" />
    </a>
  );
};

export default WhatsAppButton;
