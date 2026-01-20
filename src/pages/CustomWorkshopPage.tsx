import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Coffee, Calendar, Clock } from 'lucide-react';

export default function CustomWorkshopPage() {

    // 1. CORRECCIÓN: Ahora los nombres aquí coinciden EXACTAMENTE con los inputs de abajo
    const [formData, setFormData] = useState({
        Nombre: '',
        Email: '',
        phone: '', // Este lo dejamos así para la lógica del filtro de números
        Personas: '',
        Fecha: '',
        Hora: '',
        Idea: '',
        Quiere_Catering: false
    });

    // Generamos las horas disponibles de 30 en 30 min
    const availableTimes = [
        "10:00", "10:30",
        "11:00", "11:30",
        "12:00", "12:30",
        "16:00", "16:30",
        "17:00", "17:30",
        "18:00", "18:30",
        "19:00", "19:30",
        "20:00"
    ];

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;

        // VALIDACIÓN: SOLO NÚMEROS EN EL TELÉFONO
        if (name === 'phone') {
            const numericValue = value.replace(/[^0-9]/g, '');
            setFormData(prev => ({ ...prev, [name]: numericValue }));
            return;
        }

        setFormData(prev => ({
            ...prev,
            // Si es checkbox usa 'checked', si no usa 'value'
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="min-h-screen bg-brand-bg text-brand-dark font-sans selection:bg-brand-pink selection:text-white">

            {/* Botón Volver */}
            <Link to="/" className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full hover:scale-110 transition shadow-sm border border-brand-dark/5">
                <ArrowLeft size={24} />
            </Link>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-screen">

                {/* --- IZQUIERDA: IMAGEN --- */}
                <div className="relative h-72 md:h-auto bg-stone-200 order-1 md:order-1 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1596436920958-867144e05b9f?q=80&w=1000&auto=format&fit=crop"
                        alt="Taller exclusivo Doña Flora"
                        className="w-full h-full object-cover hover:scale-105 transition duration-1000"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>

                    <div className="absolute bottom-10 left-10 text-white max-w-sm hidden md:block drop-shadow-lg">
                        <h2 className="text-4xl font-serif italic mb-2">Momentos únicos</h2>
                        <p className="opacity-95 text-lg font-light">Diseñamos el entorno perfecto para que la creatividad fluya.</p>
                    </div>
                </div>

                {/* --- DERECHA: FORMULARIO --- */}
                <div className="p-8 md:p-20 flex flex-col justify-center order-2 md:order-2 bg-brand-bg">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 text-brand-dark leading-tight">
                            Diseña tu <br />
                            <span className="text-brand-pink font-serif italic lowercase tracking-normal text-5xl md:text-6xl">Experiencia</span>
                        </h1>

                        <p className="text-lg mb-10 opacity-70 leading-relaxed max-w-md">
                            Cuéntanos tu idea y prepararemos un taller exclusivo para ti y tus invitados.
                        </p>

                        <form
                            action="https://formsubmit.co/gestion@xn--doafloraencuentros-o0b.com"
                            method="POST"
                            className="space-y-8"
                        >
                            <input type="hidden" name="_subject" value="✨ Nueva Solicitud: Taller A Medida" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="http://localhost:5173/" />

                            {/* GRUPO 1: DATOS PERSONALES */}
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Nombre</label>
                                        <input
                                            required
                                            name="Nombre"
                                            type="text"
                                            value={formData.Nombre} // CORREGIDO: Coincide con el estado
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition text-lg"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Email</label>
                                        <input
                                            required
                                            name="Email"
                                            type="email"
                                            value={formData.Email} // CORREGIDO
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition text-lg"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Teléfono</label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            value={formData.phone} // CORREGIDO
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition text-lg"
                                            placeholder="600..."
                                            maxLength={9}
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Nº Personas</label>
                                        <input
                                            required
                                            name="Personas"
                                            type="number"
                                            value={formData.Personas} // CORREGIDO
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition text-lg"
                                            placeholder="Ej: 8"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* GRUPO 2: FECHA Y HORA */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/40 p-6 rounded-2xl border border-brand-dark/5">

                                {/* CALENDARIO */}
                                <div className="relative group">
                                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50 mb-2 text-brand-pink">
                                        <Calendar size={14} /> Fecha Preferida
                                    </label>
                                    <input
                                        required
                                        name="Fecha"
                                        type="date"
                                        value={formData.Fecha} // CORREGIDO
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition text-brand-dark font-medium cursor-pointer"
                                    />
                                </div>

                                {/* RELOJ (Desplegable) */}
                                <div className="relative group">
                                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50 mb-2 text-brand-pink">
                                        <Clock size={14} /> Hora Aprox.
                                    </label>

                                    <select
                                        required
                                        name="Hora"
                                        value={formData.Hora} // CORREGIDO
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition text-brand-dark font-medium cursor-pointer appearance-none"
                                    >
                                        <option value="" disabled>Selecciona hora</option>
                                        {availableTimes.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* IDEA */}
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Cuéntanos tu idea</label>
                                <textarea
                                    required
                                    name="Idea"
                                    rows={3}
                                    value={formData.Idea} // CORREGIDO
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-brand-dark/20 py-2 focus:outline-none focus:border-brand-pink transition resize-none text-lg"
                                    placeholder="¿Es un cumpleaños? ¿Una despedida? ¿Qué os gustaría crear?"
                                />
                            </div>

                            {/* COMIDA */}
                            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-brand-dark/5 shadow-sm hover:shadow-md transition">
                                <div className="mt-1 text-brand-pink bg-brand-pink/10 p-2 rounded-full">
                                    <Coffee size={20} />
                                </div>
                                <div className="flex-1">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="Quiere_Catering"
                                            checked={formData.Quiere_Catering} // CORREGIDO
                                            onChange={handleChange}
                                            value="Sí"
                                            className="w-5 h-5 text-brand-pink rounded border-gray-300 focus:ring-brand-pink"
                                        />
                                        <span className="font-bold text-brand-dark text-lg">¿Añadimos catering?</span>
                                    </label>
                                    <p className="text-sm opacity-60 mt-1 pl-0">
                                        Podemos preparar una mesa dulce o picoteo salado.
                                    </p>
                                </div>
                            </div>

                            <button type="submit" className="group w-full bg-brand-dark text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-pink transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-brand-pink/30 flex justify-center items-center gap-2 mt-8">
                                <span>Enviar Propuesta</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                        </form>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}