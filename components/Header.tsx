import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Program', href: '#program' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Team', href: '#team' },
  ];

  const whatsappLink = "https://wa.me/995558934713?text=Hi!%20I'm%20interested%20in%20NORTADA%20Camp%202026";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display font-bold text-2xl md:text-3xl text-brand-dark flex items-center gap-2">
            <span className="text-brand-red">NORTADA</span> Camp
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-brand-dark hover:text-brand-red' : 'text-brand-dark md:text-white hover:text-brand-sand shadow-black drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button href={whatsappLink} variant={isScrolled ? 'primary' : 'secondary'} className="py-2 px-4 text-sm">
              <MessageCircle size={18} />
              Book Now
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-dark p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-brand-dark' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brand-dark font-medium text-lg py-2 border-b border-gray-50 hover:text-brand-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button href={whatsappLink} fullWidth>
            <MessageCircle size={20} />
            Book via WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;