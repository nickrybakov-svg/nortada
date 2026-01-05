import React from 'react';
import { MessageCircle, Instagram, Facebook, Mail } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  const whatsappLink = "https://wa.me/995558934713?text=Hi!%20I'm%20interested%20in%20NORTADA%20Camp%202026";

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <a href="#" className="font-display font-bold text-2xl text-brand-dark flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-brand-red">NORTADA</span> Camp
            </a>
            <p className="text-gray-500 max-w-xs mx-auto md:mx-0">
              Join us for an unforgettable week of sport, adventure, and new friendships in Tenerife.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="font-bold text-brand-dark">Ready to join?</h4>
            <Button href={whatsappLink}>
              <MessageCircle size={18} />
              Book via WhatsApp
            </Button>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Nortada Camp Tenerife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;