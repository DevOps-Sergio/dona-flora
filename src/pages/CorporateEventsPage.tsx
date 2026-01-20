import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Building2, Calendar, Clock, Utensils } from 'lucide-react';

export default function CorporateEventsPage() {
  
  // Estado para los datos (Añadidos Telefono y Personas)
  const [formData, setFormData] = useState({
    Nombre: '',
    Email: '',
    Telefono: '',
    Personas: '',
    Fecha: '',
    Hora: '',
    Tipo_Evento: '',
    Quiere_Comida: false
  });

  const availableTimes = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", 
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];

  // Opciones Corporativas
  const eventTypes = [
    "Dinámica de Grupo",
    "Comida de empresa"
  ];

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    // VALIDACIÓN: SOLO NÚMEROS EN EL TELÉFONO
    if (name === 'Telefono') {
        const numericValue = value.replace(/[^0-9]/g, '');
        setFormData(prev => ({ ...prev, [name]: numericValue }));
        return; 
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark font-sans selection:bg-brand-pink selection:text-white">
      <Link to="/" className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full hover:scale-110 transition shadow-sm border border-brand-dark/5">
        <ArrowLeft size={24} />
      </Link>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-screen">
        {/* IMAGEN CORPORATIVA */}
        <div className="relative h-64 md:h-auto bg-stone-200 order-1 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
            alt="Evento Corporativo" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-brand-dark/30 mix-blend-multiply"></div>
          <div className="absolute bottom-10 left-10 text-white max-w-sm hidden md:block">
            <h2 className="text-4xl font-serif italic mb-2">Corporativo & Colaboraciones</h2>
            <p className="opacity-95 text-lg">Team Building, lanzamientos y alianzas profesionales.</p>
          </div>
        </div>

        {/* FORMULARIO CORPORATIVO */}
        <div className="p-8 md:p-20 flex flex-col justify-center order-2 md:order-2">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 text-brand-dark">Eventos <span className="text-brand-pink font-serif italic lowercase">Corporativos</span></h1>
            
            {/* DESCRIPCIÓN CON MENCIÓN A PROFESIONALES */}
            <div className="mb-10 text-lg opacity-70 leading-relaxed space-y-4 border-l-4 border-brand-dark pl-4">
                <p>
                    Ofrecemos un espacio diferente para desconectar de la oficina, fortalecer equipos y generar ideas creativas.
                </p>
                <p className="font-bold text-brand-dark">
                    ¿Eres Wedding Planner, tienes un Hotel o un Restaurante?
                </p>
                <p className="text-sm">
                    Estaremos encantados de colaborar. Usa este formulario para contarnos tu propuesta o necesidad y nos pondremos en contacto contigo.
                </p>
            </div>

            <form action="https://formsubmit.co/gestion@xn--doafloraencuentros-o0b.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="💼 Nuevo Evento Corporativo / Profesional" />
              <input type="hidden" name="_next" value="http://localhost:5173/" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Nombre y Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Nombre y Apellidos</label>
                    <input required name="Nombre" type="text" value={formData.Nombre} onChange={handleChange} className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition" placeholder="Nombre completo" />
                </div>
                <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Correo Corporativo</label>
                    <input required name="Email" type="email" value={formData.Email} onChange={handleChange} className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition" placeholder="nombre@empresa.com" />
                </div>
              </div>

              {/* Teléfono y Personas (NUEVO) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Teléfono</label>
                    <input required name="Telefono" type="tel" value={formData.Telefono} onChange={handleChange} className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition" placeholder="600..." maxLength={9}/>
                </div>
                <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Nº Asistentes</label>
                    <input required name="Personas" type="number" value={formData.Personas} onChange={handleChange} className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition" placeholder="Ej: 20" />
                </div>
              </div>

              {/* Fecha y Hora */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/40 p-4 rounded-xl border border-brand-dark/5">
                 <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50 mb-2 text-brand-pink"><Calendar size={14}/> Fecha</label>
                    <input required name="Fecha" type="date" value={formData.Fecha} onChange={handleChange} className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition font-medium cursor-pointer" />
                 </div>
                 <div className="group">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50 mb-2 text-brand-pink"><Clock size={14}/> Hora</label>
                    <select required name="Hora" value={formData.Hora} onChange={handleChange} className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition font-medium cursor-pointer appearance-none">
                        <option value="" disabled>Elegir hora</option>
                        {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                 </div>
              </div>

              {/* Tipo de Evento (Desplegable) */}
              <div className="group">
                 <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Tipo de Evento</label>
                 <select required name="Tipo_Evento" value={formData.Tipo_Evento} onChange={handleChange} className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition text-lg cursor-pointer appearance-none bg-white/50">
                    <option value="" disabled>Selecciona opción</option>
                    {eventTypes.map(type => <option key={type} value={type}>{type}</option>)}
                 </select>
              </div>

              {/* Comida */}
              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-brand-dark/5">
                <div className="mt-1 text-brand-pink"><Utensils size={20} /></div>
                <label className="flex items-center gap-3 cursor-pointer flex-1">
                    <input type="checkbox" name="Quiere_Comida" checked={formData.Quiere_Comida} onChange={handleChange} value="Sí" className="w-5 h-5 text-brand-pink rounded border-gray-300 focus:ring-brand-pink" />
                    <span className="font-bold text-brand-dark">¿Necesitáis servicio de comida?</span>
                </label>
              </div>

              <button type="submit" className="group w-full bg-brand-dark text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-pink transition-all flex justify-center items-center gap-2 mt-4 shadow-lg hover:shadow-brand-pink/30">
                <span>Solicitar Info</span> <Building2 size={18} />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}