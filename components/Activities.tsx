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
        <h2 className="text-4xl lg:text-6xl text-carmela-purple mb-4">Experiencias de Regalo</h2>
        <p className="text-gray-500 font-medium mb-16 uppercase tracking-widest text-sm">Elige la invitación perfecta para él</p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-2xl transition-all border-b-8 border-carmela-yellow text-left group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-carmela-purple text-white rounded-full flex items-center justify-center mb-6 group-hover:bg-carmela-yellow group-hover:text-carmela-purple transition-all duration-500 shadow-md">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl text-carmela-purple mb-4 font-bold">{activity.title}</h3>
              <p className="text-gray-600 mb-8 font-light italic leading-relaxed flex-grow">"{activity.description}"</p>
              
              <div className="mt-auto">
                <p className="text-xs text-carmela-purple font-bold uppercase mb-4 opacity-60">{activity.date}</p>
                <button 
                  onClick={() => onSelect(activity.id)}
                  className="w-full bg-gray-50 text-carmela-purple font-bold border-2 border-carmela-purple py-3 hover:bg-carmela-purple hover:text-white transition-all text-sm uppercase tracking-widest"
                >
                  Regalar esta Experiencia
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;>
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
