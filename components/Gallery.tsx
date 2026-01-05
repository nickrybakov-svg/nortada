import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://picsum.photos/600/600?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/600?random=4",
  "https://picsum.photos/600/800?random=5",
  "https://picsum.photos/600/400?random=6",
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-brand-red font-bold uppercase tracking-wide mb-2 text-sm">Memories</h2>
          <h3 className="font-display text-4xl font-bold text-brand-dark">Camp Vibes</h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;