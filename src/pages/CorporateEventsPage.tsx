import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import SuccessModal from '../components/SuccessModal';
import { ArrowLeft, Calendar, Utensils, Send, Briefcase, Mail, Phone, Users } from 'lucide-react';
import SEO from '../components/SEO';

export default function CorporateEventsPage() {

  // Estado para los datos
  const [formData, setFormData] = useState({
    Nombre: '',
    Email: '',
    Telefono: '',
    Personas: '',
    Fecha: '',
    Hora: '',
    Tipo_Evento: '',
    Otros_Tipo: '',
    Ubicacion: '',
    Quiere_Comida: false
  });

  const [hasDate, setHasDate] = useState(false);

  const availableTimes = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
  ];

  const eventTypes = [
    "Reunión", "Comida de empresa", "Dinámica de grupo", "Inauguración", "Reconocimiento de marca", "Otro"
  ];

  const locationOptions = ["Gran Canaria", "Tenerife"];

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (name === 'Telefono') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
      return;
    }
    if (name === 'Nombre') {
      const lettersOnly = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      setFormData(prev => ({ ...prev, [name]: lettersOnly }));
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  /* --- LOGICA DE ENVÍO --- */
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      // Tipo_Evento y Otros_Tipo se mandan tal cual como están en formData
      Fecha: hasDate ? formData.Fecha : null,
      Hora: hasDate ? formData.Hora : null,
      eventTypeId: 2,
      cookiesAccepted: undefined,
      privacyPolicyAccepted: true
    };

    if (!privacyAccepted) {
      alert("Por favor, acepta la Política de Privacidad para continuar.");
      return;
    }

    try {
      const response = await fetch("https://hook.eu1.make.com/u5p3414184o3iqwvis62kqththrh32o7", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData)
      });

      if (response.ok) {
        setIsSuccessOpen(true);
        setFormData({
          Nombre: '', Email: '', Telefono: '', Personas: '',
          Fecha: '', Hora: '', Tipo_Evento: '', Otros_Tipo: '', Ubicacion: '', Quiere_Comida: false
        });
        setHasDate(false);
        setPrivacyAccepted(false);
      } else {
        alert("Hubo un error al enviar. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error de conexión.");
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark font-sans selection:bg-brand-pink selection:text-white">
      <SEO
        title="Eventos de Empresa y Team Building en Gran Canaria"
        description="Eleva tu marca con eventos corporativos diferentes. Expertos en inauguraciones, retiros, comidas de empresa, dinamicas de grupo y team building para empresas en Gran Canaria. Diseño y logística integral."
      />

      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />

      {/* --- BANNER SUPERIOR --- */}
      <div className="relative h-80 md:h-64 lg:h-72 w-full bg-stone-200 overflow-hidden shadow-md">
        {/* Patrón de FRANJAS VERTICALES intercaladas (Rosa y Azul Corporativos) */}
        <div className="w-full h-full absolute inset-0 bg-brand-bg" style={{
          backgroundImage: `repeating-linear-gradient(
                90deg,
                #F090A0,
                #F090A0 40px,
                #2b435a 40px, 
                #2b435a 80px
            )`
        }}></div>

        {/* Overlay muy suave para no tapar el patrón pero integrar texto */}
        <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>

        {/* Botón Volver */}
        <Link to="/#eventos" className="absolute top-6 left-6 z-50 bg-white/90 backdrop-blur-md p-3 rounded-full hover:scale-110 transition shadow-lg border border-brand-dark/5 text-brand-dark">
          <ArrowLeft size={24} />
        </Link>

        {/* Título integrado */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent p-6 md:p-10 pt-24">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 bg-white text-brand-dark text-[10px] font-bold uppercase tracking-widest rounded-full mb-2 shadow-sm">
              Business & Team Building
            </span>
            <h1 className="text-2xl md:text-5xl font-black uppercase text-white leading-tight drop-shadow-md">
              Eventos <span className="font-serif italic lowercase font-normal text-[#F090A0]">Corporativos</span>
            </h1>
          </div>
        </div>
      </div>


      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <FadeIn>
          {/* 1. TARJETA DE DESCRIPCIÓN (Intro) */}
          <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-sm mb-6 text-center">
            <p className="text-lg text-brand-dark/80 leading-relaxed max-w-4xl mx-auto font-serif italic">
              Diseñamos y producimos eventos corporativos alineados con la identidad y los objetivos de cada marca. Gestionamos desde inauguraciones, eventos con creadores de contenidos, presentaciones de productos, workshops, encuentros y retiros de equipo, comidas de empresa, dinámicas de grupos, talleres creativos, acciones y reconocimiento de marca.
              <br /><br />
              Ofrecemos una ejecución integral y cuidada para humanizar las relaciones dentro del entorno corporativo.
              <br /><br />
            </p>
          </div>


          {/* FORMULARIO EN 3 COLUMNAS */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

            {/* COLUMNA 1: INTRO + DATOS EMPRESA */}
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm h-full flex flex-col space-y-6">

              <div className="space-y-4 flex-grow">
                <h3 className="text-lg font-serif italic text-brand-pink mb-4 flex items-center gap-2">
                  <Briefcase className="text-brand-dark opacity-50" size={18} />
                  Tu contacto
                </h3>

                <div className="group relative">
                  <Briefcase className="absolute left-3 top-3 text-brand-dark/40" size={16} />
                  <input required name="Nombre" type="text" value={formData.Nombre} onChange={handleChange} className="w-full pl-10 bg-white/60 border border-brand-dark/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition" placeholder="Nombre / Empresa *" />
                </div>

                <div className="group relative">
                  <Mail className="absolute left-3 top-3 text-brand-dark/40" size={16} />
                  <input required name="Email" type="email" value={formData.Email} onChange={handleChange} className="w-full pl-10 bg-white/60 border border-brand-dark/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition" placeholder="Email Corporativo *" />
                </div>

                <div className="group relative">
                  <Phone className="absolute left-3 top-3 text-brand-dark/40" size={16} />
                  <input required name="Telefono" type="tel" value={formData.Telefono} onChange={handleChange} className="w-full pl-10 bg-white/60 border border-brand-dark/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition" placeholder="Teléfono *" maxLength={9} />
                </div>
              </div>
            </div>


            {/* COLUMNA 2: EL EVENTO */}
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm h-full flex flex-col">
              <h3 className="text-lg font-serif italic text-brand-pink mb-4 flex items-center gap-2">
                <Users className="text-brand-dark opacity-50" size={18} />
                El evento
              </h3>

              <div className="space-y-6 flex-grow">
                {/* UBICACION */}
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Ubicación *</label>
                  <select required name="Ubicacion" value={formData.Ubicacion} onChange={handleChange} className="w-full bg-white/60 border border-brand-dark/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition cursor-pointer appearance-none">
                    <option value="" disabled>Seleccionar...</option>
                    {locationOptions.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                {/* TIPO */}
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Tipo de Evento *</label>
                  <select required name="Tipo_Evento" value={formData.Tipo_Evento} onChange={handleChange} className="w-full bg-white/60 border border-brand-dark/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition cursor-pointer appearance-none">
                    <option value="" disabled>Seleccionar...</option>
                    {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>

                  <div className="mt-4">
                    <label className="block text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Cuéntanos tu idea</label>
                    <input
                      name="Otros_Tipo"
                      type="text"
                      value={formData.Otros_Tipo}
                      onChange={handleChange}
                      className="w-full bg-white/60 border border-brand-dark/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-pink transition"
                      placeholder="Describe brevemente qué tienes en mente..."
                    />
                  </div>
                </div>

                {/* NUMERO PERSONAS */}
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Asistentes *</label>
                  <input required min="1" max="100" name="Personas" type="number" value={formData.Personas} onChange={handleChange} className="w-full bg-white/60 border border-brand-dark/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition" placeholder="Ej: 15" />
                </div>

                {/* COMIDA TOGGLE */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest opacity-60">Servicio de comida</label>
                  <p className="text-[10px] opacity-60 mb-2 italic">Catering, mesa dulce y/o salada</p>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, Quiere_Comida: false }))}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold transition border ${!formData.Quiere_Comida ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white/40 text-brand-dark/60 border-brand-dark/10'}`}
                    >
                      No, gracias
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(p => ({ ...p, Quiere_Comida: true }))}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 border ${formData.Quiere_Comida ? 'bg-brand-pink text-white border-brand-pink' : 'bg-white/40 text-brand-dark/60 border-brand-dark/10'}`}
                    >
                      <Utensils size={14} />
                      <span>Sí, con catering</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>


            {/* COLUMNA 3: AGENDA Y CIERRE */}
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm h-full flex flex-col">
              <h3 className="text-lg font-serif italic text-brand-pink mb-4 flex items-center gap-2">
                <Calendar className="text-brand-dark opacity-50" size={18} />
                Agenda
              </h3>

              <div className="flex-grow space-y-6">
                {/* FECHA TOGGLE */}
                <div className="flex bg-white/30 p-1 rounded-lg border border-brand-dark/5">
                  <button
                    type="button"
                    onClick={() => setHasDate(false)}
                    className={`flex-1 py-2 rounded-md text-xs font-bold transition ${!hasDate ? 'bg-white shadow-sm text-brand-dark' : 'text-brand-dark/50'}`}
                  >
                    Flexible
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasDate(true)}
                    className={`flex-1 py-2 rounded-md text-xs font-bold transition ${hasDate ? 'bg-white shadow-sm text-brand-pink' : 'text-brand-dark/50'}`}
                  >
                    Con fecha
                  </button>
                </div>

                {hasDate && (
                  <div className="space-y-3 animate-fade-in-up">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Día *</label>
                      <input required min={new Date().toISOString().split('T')[0]} name="Fecha" type="date" value={formData.Fecha} onChange={handleChange} className="w-full bg-white/60 border border-brand-dark/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-pink transition cursor-pointer" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Hora *</label>
                      <select required name="Hora" value={formData.Hora} onChange={handleChange} className="w-full bg-white/60 border border-brand-dark/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-pink transition cursor-pointer appearance-none">
                        <option value="" disabled>Elegir...</option>
                        {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                )}

                <div className="border-t border-brand-dark/5 pt-4 mt-auto">
                  <div className="flex items-start gap-3 mb-4">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 text-brand-pink rounded border-gray-300 focus:ring-brand-pink cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-[10px] opacity-70 cursor-pointer text-brand-dark leading-tight">
                      He leído y acepto la <Link to="/legal/privacidad" target="_blank" className="font-bold underline hover:text-brand-pink">Política de Privacidad</Link> y consiento el tratamiento de mis datos para la gestión de la solicitud.
                    </label>
                  </div>

                  <button type="submit" disabled={!privacyAccepted} className={`w-full py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex justify-center items-center gap-2 shadow-lg ${privacyAccepted ? 'bg-brand-dark text-white hover:bg-brand-pink hover:shadow-brand-pink/30 hover:-translate-y-0.5' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                    <span>Solicitar Evento</span> <Send size={14} />
                  </button>


                </div>
              </div>
            </div>

          </form>
        </FadeIn>
      </div>
    </div>
  );
}