
import React from 'react';
import { Check, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamTraining = () => {
  const benefits = [
    "Customized training programs tailored to your team's specific needs",
    "Flexible scheduling to accommodate your team's availability",
    "Real-time progress tracking and detailed performance analytics",
    "Collaborative projects to strengthen teamwork and communication",
    "Certification upon completion to validate acquired skills",
    "Ongoing support and consultation from industry experts"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-6">
              Advance Your Team's Skills with Training from EduHub
            </h2>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-orange-DEFAULT hover:bg-orange-dark text-white">
              Request Team Training
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Team Training" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-navy-light text-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center">
                <Trophy className="h-8 w-8 text-orange-DEFAULT mr-3" />
                <div>
                  <span className="text-lg font-bold block">98%</span>
                  <span className="text-sm">Completion Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamTraining;
