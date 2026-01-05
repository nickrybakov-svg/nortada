import React from 'react';
import { ScheduleItem } from '../types';
import { motion } from 'framer-motion';

const scheduleData: ScheduleItem[] = [
  {
    date: "Feb 2",
    day: "Monday",
    activities: ["Arrival & Welcome", "Check-in", "17:00 Camp Opening: Beach training, games & picnic"],
    highlight: true
  },
  {
    date: "Feb 3",
    day: "Tuesday",
    activities: ["10:00 Hike to wild beaches, nature reserve & waterfall", "17:00 Beach games & sunset"]
  },
  {
    date: "Feb 4",
    day: "Wednesday",
    activities: ["10:00 Advanced training: Complex combinations", "Experience exchange session", "Walking city tour"]
  },
  {
    date: "Feb 5",
    day: "Thursday",
    activities: ["09:00 Mixed team friendly game", "11:00 Visit to Loro Parque (World famous zoo)"]
  },
  {
    date: "Feb 6",
    day: "Friday",
    activities: ["10:00 Training & Beach games", "Optional: Trip to Volcanic Landscapes"]
  },
  {
    date: "Feb 7",
    day: "Saturday",
    activities: ["10:00 NORTADA Camp Tournament Begins"],
    highlight: true
  },
  {
    date: "Feb 8",
    day: "Sunday",
    activities: ["10:00 Tournament Finals", "Closing Ceremony & Awards"]
  }
];

const Program: React.FC = () => {
  return (
    <section id="program" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold uppercase tracking-wide mb-2 text-sm">Itinerary</h2>
          <h3 className="font-display text-4xl font-bold text-brand-dark">Camp Program</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A carefully curated mix of intense training, friendly competition, and island exploration.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand-teal/30"></div>

          {scheduleData.map((item, index) => (
            <motion.div 
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-brand-teal rounded-full z-10 mt-1.5"></div>

              {/* Content Box */}
              <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                <div className={`p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border-l-4 ${
                  item.highlight ? 'bg-white border-brand-orange shadow-brand-orange/10' : 'bg-white border-brand-teal/50'
                }`}>
                  <div className="flex justify-between items-start mb-4 border-b border-gray-100 pb-2">
                    <div>
                      <span className="block font-display font-bold text-xl text-brand-dark">{item.date}</span>
                      <span className="text-sm text-gray-500 uppercase tracking-wide">{item.day}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {item.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0"></span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty Space for alternate side */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;