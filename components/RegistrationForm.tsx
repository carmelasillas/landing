
import React, { useState, useEffect } from 'react';
import { Activity } from '../types';
import { generateFatherDayMessage } from '../services/geminiService';

interface RegistrationFormProps {
  activities: Activity[];
  initialActivityId?: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ activities, initialActivityId }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    activityId: initialActivityId || '',
  });
  const [loading, setLoading] = useState(false);
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialActivityId) {
      setFormData(prev => ({ ...prev, activityId: initialActivityId }));
    }
  }, [initialActivityId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const message = await generateFatherDayMessage(formData.name);
    setAiMessage(message);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 border-2 border-carmela-purple shadow-xl animate-fadeIn text-center">
        <h3 className="text-3xl text-carmela-purple mb-4">Solicitud recibida</h3>
        <p className="text-gray-600 mb-8 font-medium">Gracias por confiar en Carmela. Nos pondremos en contacto contigo al {formData.phone} muy pronto.</p>
        
        <div className="bg-carmela-yellow/10 p-6 rounded italic border-l-4 border-carmela-yellow">
          <p className="text-carmela-purple text-lg leading-relaxed">"{aiMessage}"</p>
        </div>
        
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-carmela-purple font-bold hover:underline uppercase tracking-widest text-sm"
        >
          Volver a empezar
        </button>
      </div>
    );
  }

  return (
    <div id="contact" className="bg-white p-10 lg:p-14 border-2 border-carmela-purple shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-carmela-yellow -mr-16 -mt-16 transform rotate-45"></div>
      
      <div className="mb-10 text-center lg:text-left">
        <h3 className="text-4xl text-carmela-purple font-bold mb-4 uppercase tracking-tighter">Únete a la Comunidad</h3>
        <p className="text-gray-500 font-medium">Déjanos tu teléfono y hablaremos de corazón.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-xs font-bold text-carmela-purple uppercase tracking-widest mb-2">Nombre Completo</label>
          <input 
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-carmela-purple transition-colors bg-transparent text-lg text-carmela-purple font-semibold"
            placeholder="Introduce tu nombre"
          />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-carmela-purple uppercase tracking-widest mb-2">Teléfono de contacto</label>
          <input 
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-carmela-purple transition-colors bg-transparent text-xl text-carmela-purple font-bold"
            placeholder="+34 000 000 000"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-carmela-purple uppercase tracking-widest mb-2">Actividad de Interés</label>
          <select 
            required
            name="activityId"
            value={formData.activityId}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-carmela-purple transition-colors bg-white text-gray-700"
          >
            <option value="">¿En qué te podemos ayudar?</option>
            {activities.map(a => (
              <option key={a.id} value={a.id}>{a.title}</option>
            ))}
          </select>
        </div>

        <button 
          disabled={loading}
          type="submit"
          className="w-full bg-carmela-purple text-white font-bold py-5 px-6 shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-4 text-sm tracking-widest uppercase"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
          ) : 'ENVIAR SOLICITUD'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
