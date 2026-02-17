
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Activities from './components/Activities';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Activity } from './types';

const App: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>('');

  const activities: Activity[] = [
    {
      id: '1',
      title: 'Taller de Historia del Arte',
      description: 'Descubrimos juntos los secretos de las mejores pinacotecas, maridando arte con una charla amena.',
      date: 'Sábado 18, 11:00h',
      category: 'Cultura',
      image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Cata Distinguida',
      description: 'Una experiencia sensorial exclusiva guiada por expertos someliers en un ambiente relajado.',
      date: 'Domingo 19, 19:30h',
      category: 'Gastronomía',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'Tertulia Literaria',
      description: 'Compartimos lecturas y debates sobre los grandes autores, disfrutando de un café de alta calidad.',
      date: 'Lunes 20, 17:00h',
      category: 'Ocio',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(id);
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {/* Propuesta de Valor & Quien es Carmela Section */}
        <Hero onCtaClick={() => handleSelectActivity(activities[0].id)} />
        
        {/* Three Sections of Services */}
        <Activities activities={activities} onSelect={handleSelectActivity} />

        {/* Lead Capture Section (Form) */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <RegistrationForm 
              activities={activities} 
              initialActivityId={selectedActivity} 
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
