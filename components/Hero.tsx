import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/995558934713?text=Hi!%20I'm%20interested%20in%20NORTADA%20Camp%202026";

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080" 
          alt="Tenerife Beach Catchball" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-sm md:text-base mb-6 tracking-wider uppercase font-semibold">
            Catchball & Adventure
          </span>
          
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            NORTADA Camp <br />
            <span className="text-brand-sand">Tenerife</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 text-lg md:text-xl font-light">
            <div className="flex items-center gap-2">
              <Calendar className="text-brand-red" />
              <span>February 2-8, 2026</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <MapPin className="text-brand-red" />
              <span>Puerto de la Cruz</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappLink} className="text-lg px-8 py-4">
              Book Now <ArrowRight size={20} />
            </Button>
            <Button href="#program" variant="outline" className="text-lg px-8 py-4 !text-white !border-white hover:!bg-white hover:!text-brand-red">
              View Program
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;