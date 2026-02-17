
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-carmela-purple text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white text-carmela-purple rounded-full flex items-center justify-center font-bold text-xl">
              S
            </div>
            <h1 className="text-2xl font-bold uppercase tracking-widest">Carmela</h1>
          </div>
          <p className="text-white/80 font-medium leading-relaxed italic">
            "Fomentando la amistad y la cultura entre personas de más de 60 años con servicio profesional y de corazón."
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h4 className="text-carmela-yellow font-bold text-xs uppercase tracking-widest mb-6">Contacto</h4>
            <ul className="text-sm space-y-4 font-semibold">
              <li>Calle de Velázquez, Madrid</li>
              <li>+34 912 345 678</li>
              <li>info@ociosenior.es</li>
            </ul>
          </div>
          <div>
            <h4 className="text-carmela-yellow font-bold text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="text-xs space-y-4 opacity-70 uppercase tracking-widest">
              <li><a href="#" className="hover:text-carmela-yellow">Privacidad</a></li>
              <li><a href="#" className="hover:text-carmela-yellow">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-carmela-yellow">Cookies</a></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <a href="https://wa.me/34912345678" className="bg-carmela-yellow text-carmela-purple font-bold py-3 px-6 rounded-sm text-sm uppercase tracking-widest hover:bg-white transition-colors">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 text-center">
        <p className="text-[10px] opacity-50 uppercase tracking-[0.4em]">© 2024 Carmela Ocio Senior - Madrid</p>
      </div>
    </footer>
  );
};

export default Footer;
