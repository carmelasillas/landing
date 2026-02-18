import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="about" className="py-20 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Collage Side */}
        <div className="lg:w-1/2 relative">
          <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-carmela-yellow -z-10 translate-x-4 -translate-y-4"></div>
          <div className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-carmela-purple -z-10 -translate-x-4 translate-y-4"></div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&q=80&w=600" alt="Padre e hijo" className="w-full aspect-square object-cover border-4 border-white shadow-lg" />
              <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600" alt="Amistad Senior" className="w-full aspect-square object-cover border-4 border-white shadow-lg" />
            </div>
            <div className="pt-12 space-y-4">
              <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600" alt="Cultura y vino" className="w-full aspect-square object-cover border-4 border-white shadow-lg" />
              <img src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?auto=format&fit=crop&q=80&w=600" alt="Disfrute de la vida" className="w-full aspect-square object-cover border-4 border-white shadow-lg" />
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="lg:w-1/2 text-left">
          <div className="inline-block px-4 py-1 bg-carmela-yellow text-carmela-purple font-bold text-xs uppercase tracking-widest mb-6 rounded-sm">
            Promoción Especial
          </div>
          <h2 className="text-5xl lg:text-7xl text-carmela-purple mb-8">Este Día del Padre, regala el arte de vivir.</h2>
          <div className="space-y-6 text-lg font-medium leading-relaxed">
            <p>¿Buscas un regalo que trascienda lo material? En <strong>Carmela Ocio Senior</strong> creamos experiencias culturales y sociales diseñadas para padres que valoran la calidad, la conversación y las nuevas amistades.</p>
            <p className="text-2xl font-bold italic text-carmela-purple/80">"Porque cumplir años es un arte, y compartirlo es un privilegio."</p>
          </div>
          
          <button 
            onClick={onCtaClick}
            className="mt-12 bg-carmela-purple text-white font-bold py-4 px-12 hover:bg-carmela-yellow hover:text-carmela-purple transition-all text-xl uppercase tracking-widest shadow-xl"
          >
            Ver Regalos de Experiencia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
