
import React from 'react';
import { Activity } from '../types';

interface ActivitiesProps {
  activities: Activity[];
  onSelect: (id: string) => void;
}

const Activities: React.FC<ActivitiesProps> = ({ activities, onSelect }) => {
  return (
    <section className="py-24 bg-gray-50" id="activities">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-6xl text-carmela-purple mb-4">Servicios Especiales</h2>
        <div className="w-24 h-1 bg-carmela-yellow mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all border-t-4 border-carmela-purple text-left group"
            >
              <div className="w-16 h-16 bg-carmela-yellow/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-carmela-yellow transition-colors">
                <span className="text-carmela-purple text-2xl font-bold italic">C</span>
              </div>
              <h3 className="text-2xl text-carmela-purple mb-4">{activity.title}</h3>
              <p className="text-gray-600 mb-8 font-light italic leading-relaxed">"{activity.description}"</p>
              <button 
                onClick={() => onSelect(activity.id)}
                className="text-carmela-purple font-bold border-b-2 border-carmela-purple pb-1 hover:text-carmela-yellow hover:border-carmela-yellow transition-all text-sm uppercase tracking-widest"
              >
                Solicitar Reserva
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
