import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Users, Activity } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Activity size={32} className="text-brand-orange" />,
      title: "Active Training",
      desc: "Daily catchball training sessions focusing on technique, complex combinations, and team strategy."
    },
    {
      icon: <Sun size={32} className="text-brand-orange" />,
      title: "Island Adventure",
      desc: "Explore the wild beaches, waterfalls, volcanic landscapes, and the famous Loro Parque."
    },
    {
      icon: <Users size={32} className="text-brand-orange" />,
      title: "Community",
      desc: "Connect with like-minded people, exchange experiences, and participate in friendly tournaments."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-sand/30 rounded-full -z-10"></div>
              <img 
                src="https://picsum.photos/600/400" 
                alt="Group of people on beach" 
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/20 rounded-full -z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-red font-bold uppercase tracking-wide mb-2 text-sm">About The Camp</h2>
            <h3 className="font-display text-4xl font-bold text-brand-dark mb-6">
              More Than Just <br/> A Sports Camp
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              NORTADA Camp represents the perfect balance between professional catchball development and an unforgettable vacation in Tenerife. 
              We bring together energy, nature, and sport in the beautiful setting of Puerto de la Cruz.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you are looking to improve your game technique or simply want to enjoy an active holiday with a supportive community, this camp is designed for you. From sunrise beach trainings to hiking through ancient forests, every day is a new adventure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-brand-light p-4 rounded-xl border border-brand-sand/30 hover:shadow-md transition-shadow">
                  <div className="mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-brand-dark mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;