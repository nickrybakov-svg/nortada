import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Do I need experience in catchball to join?",
    answer: "Not necessarily! While we have advanced training, we welcome players of all levels who are eager to learn and improve their skills. The camp is about growth and community."
  },
  {
    question: "Is accommodation included?",
    answer: "We provide recommendations for partner hotels nearby, but the camp fee typically covers the training program, activities, and organization. Please contact us via WhatsApp for specific packages."
  },
  {
    question: "What should I bring?",
    answer: "Comfortable sportswear, knee pads, running shoes, swimwear, sunscreen, hiking shoes for the nature walks, and your good vibes!"
  },
  {
    question: "How do I get to Puerto de la Cruz?",
    answer: "The nearest airport is Tenerife North (TFN). From there, it's a 25-minute taxi or bus ride. Tenerife South (TFS) is about 60-90 minutes away."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-brand-red font-bold uppercase tracking-wide mb-2 text-sm">FAQ</h2>
          <h3 className="font-display text-4xl font-bold text-brand-dark">Common Questions</h3>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-brand-sand/20 overflow-hidden"
            >
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-red' : 'text-brand-dark'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-red" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;