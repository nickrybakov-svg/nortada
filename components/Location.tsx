import React from 'react';
import { MapPin, ThermometerSun, Utensils } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-brand-sand font-bold uppercase tracking-wide mb-2 text-sm">Destination</h2>
            <h3 className="font-display text-4xl font-bold mb-6">Puerto de la Cruz</h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Located on the north coast of Tenerife, Puerto de la Cruz offers a lush, green landscape, black volcanic sand beaches, and a charming Canarian atmosphere. It's the perfect backdrop for our training and relaxation.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-brand-sand">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">The Venue</h4>
                  <p className="text-gray-400 text-sm">We train on the beautiful beaches of Playa Jardín and local sports facilities.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-brand-sand">
                  <ThermometerSun size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Weather in February</h4>
                  <p className="text-gray-400 text-sm">Expect pleasant temperatures around 20-22°C (68-72°F). Perfect for active sports.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-brand-sand">
                  <Utensils size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Food & Culture</h4>
                  <p className="text-gray-400 text-sm">Enjoy authentic Canarian potatoes, fresh seafood, and local wines.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14316.326252998393!2d-16.5559869!3d28.4143241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a7f3404c0d0b3%3A0xc35649a372138767!2sPuerto%20de%20la%20Cruz%2C%20Santa%20Cruz%20de%20Tenerife%2C%20Spain!5e0!3m2!1sen!2sus!4v1714856000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Puerto de la Cruz"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;