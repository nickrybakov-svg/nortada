import React from 'react';
import { Trophy, Medal, MapPin, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const ClubInfo: React.FC = () => {
  const achievements = [
    {
      year: "2024",
      event: "Canary Legend",
      type: "Local Tournament",
      result: "3rd Place",
      icon: <Medal className="text-brand-orange" />
    },
    {
      year: "Apr 2024",
      event: "Tenerife Tournament",
      type: "Local Competition",
      result: "Participation",
      icon: <Award className="text-gray-400" />
    },
    {
      year: "Jul 2024",
      event: "All-Tenerife Championship",
      type: "Regional",
      result: "1st Place",
      highlight: true,
      icon: <Trophy className="text-brand-sand" />
    },
    {
      year: "Oct 2024",
      event: "Multi-Sport Cup",
      type: "Catchball, Volleyball, Football",
      result: "1st in Catchball, 2nd Overall",
      highlight: true,
      icon: <Trophy className="text-brand-sand" />
    },
    {
      year: "Jun 2025",
      event: "International World Tournament",
      type: "Greece (37 Teams)",
      result: "9th Place",
      icon: <MapPin className="text-brand-teal" />
    },
    {
      year: "Oct 2025",
      event: "International World Tournament",
      type: "Berlin (24 Teams)",
      result: "11th Place",
      icon: <MapPin className="text-brand-teal" />
    }
  ];

  return (
    <section id="team" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-5/12 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-brand-red font-bold uppercase tracking-wide mb-2 text-sm">The Hosts</h2>
              <h3 className="font-display text-4xl font-bold text-brand-dark mb-6">
                About Nortada Team
              </h3>
              
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  The <span className="font-semibold text-brand-dark">Nortada</span> team was founded in 2023 in the north of Tenerife. Since our inception, we have grown into a competitive force, participating in numerous tournaments ranging from local leagues to major international competitions.
                </p>
                <p>
                  We continue to actively develop, representing Tenerife on the international sports arena and demonstrating stable growth and a high level of preparation. Our passion for catchball drives us to connect with players worldwide.
                </p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-brand-light rounded-xl border border-brand-sand/30">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <TrendingUp size={24} className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Constantly Growing</h4>
                  <p className="text-sm text-gray-500">From local wins to global stages</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements List */}
          <div className="lg:w-7/12 w-full">
            <h4 className="text-xl font-bold text-brand-dark mb-8 flex items-center gap-2">
              <Trophy size={20} className="text-brand-teal" />
              Team Achievements
            </h4>

            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-6 rounded-xl border transition-all hover:shadow-md flex flex-col sm:flex-row gap-4 sm:items-center ${
                    item.highlight 
                      ? 'bg-white border-brand-sand shadow-brand-sand/10' 
                      : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <div className={`p-3 rounded-full flex-shrink-0 w-12 h-12 flex items-center justify-center ${
                    item.highlight ? 'bg-brand-sand/20' : 'bg-white shadow-sm'
                  }`}>
                    {item.icon}
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-1">
                      <h5 className="font-bold text-lg text-brand-dark">{item.event}</h5>
                      <span className="text-sm font-semibold px-3 py-1 bg-brand-dark/5 rounded-full text-brand-dark">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <span className="text-sm text-gray-500">{item.type}</span>
                      <span className={`font-bold ${item.highlight ? 'text-brand-orange' : 'text-brand-teal'}`}>
                        {item.result}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClubInfo;