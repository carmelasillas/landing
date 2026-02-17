
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
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600" alt="Encuentro" className="w-full aspect-square object-cover border-4 border-white shadow-lg" />
              <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600" alt="Amistad" className="w-full aspect-square object-cover border-4 border-white shadow-lg" />
            </div>
            <div className="pt-12 space-y-4">
              <img src="https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?auto=format&fit=crop&q=80&w=600" alt="Cultura" className="w-full aspect-square object-cover border-4 border-white shadow-lg" />
              <img src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?auto=format&fit=crop&q=80&w=600" alt="Disfrute" className="w-full aspect-square object-cover border-4 border-white shadow-lg" />
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl lg:text-7xl text-carmela-purple mb-8">¿Quien es Carmela?</h2>
          <div className="space-y-6 text-lg font-medium leading-relaxed">
            <p>Tras dedicar la mitad de mi vida a lo que se supone que debo hacer, ahora estoy haciendo lo que realmente quiero hacer: crear y fomentar amistades entre personas de más de 60 años.</p>
            <p>Comercial desde que tengo uso de razón, dirigí mis estudios hacia la rama económica, obteniendo la correspondiente licenciatura.</p>
            <p>Ahora, con este cambio de rumbo, me especialicé en Gerontología y puedo decir que ofrezco un servicio profesional y sobre todo de corazón.</p>
          </div>
          
          <button 
            onClick={onCtaClick}
            className="mt-12 border-2 border-carmela-purple text-carmela-purple font-bold py-4 px-12 hover:bg-carmela-purple hover:text-white transition-all text-xl uppercase tracking-widest"
          >
            ¿Hablamos?
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
