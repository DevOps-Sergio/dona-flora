// src/pages/BookingPage.tsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { workshops } from '../data';
import { Clock, MapPin, Users, Package, ChevronDown, ChevronUp, ClipboardList } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function BookingPage() {
    const { id } = useParams();
    const workshop = workshops.find(w => w.id === Number(id));

    // Estado para saber qué caja de información está abierta
    const [openSection, setOpenSection] = useState<string | null>(null);

    // Efecto para cargar el script de Luma
    useEffect(() => {
        const scriptId = 'luma-checkout';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://embed.lu.ma/checkout-button.js";
            document.body.appendChild(script);
        }
    }, []);

    // Función para abrir/cerrar secciones
    const toggleSection = (section: string) => {
        if (openSection === section) {
            setOpenSection(null); // Si ya está abierta, la cierra
        } else {
            setOpenSection(section); // Si no, la abre
        }
    };

    if (!workshop) return <div className="p-10 text-center">Taller no encontrado</div>;

    return (
        <div className="min-h-screen bg-brand-bg text-brand-dark pb-20">

            {/* 1. IMAGEN DE CABECERA */}
            <div className="relative h-[50vh] w-full">
                <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                    <Link to="/" className="absolute top-8 left-8 text-white border-b border-white hover:opacity-70 transition">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 -mt-20 relative z-10">
                <FadeIn>
                    {/* TARJETA DE TÍTULO */}
                    <div className="bg-white p-8 shadow-xl rounded-sm border-t-4 border-brand-pink">
                        <h1 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-4">{workshop.title}</h1>
                        <p className="text-xl opacity-80 mb-6">{workshop.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-widest text-brand-pink">
                            <span>{workshop.price}</span>
                            <span>•</span>
                            <span>{workshop.date}</span>
                        </div>
                    </div>

                    {/* SECCIONES DESPLEGABLES (ACORDEÓN) */}
                    <div className="mt-12 space-y-4">

                        {/* --- NUEVO BOTÓN: PLAN --- */}
                        {/* --- NUEVO BOTÓN: PLAN (CORREGIDO) --- */}
                        <InfoButton
                            icon={<ClipboardList size={20} />}
                            title="Plan del Taller"
                            isOpen={openSection === 'plan'}
                            onClick={() => toggleSection('plan')}
                        >
                            <ul className="list-disc pl-5 space-y-2 opacity-80">
                                {/* El truco: Ponemos '(workshop as any)' para que no marque error */}
                                {(workshop as any).plan ? (
                                    (workshop as any).plan.map((item: string, index: number) => (
                                        <li key={index}>{item}</li>
                                    ))
                                ) : (
                                    <li className="list-none italic">Detalles del plan disponibles próximamente.</li>
                                )}
                            </ul>
                        </InfoButton>

                        {/* Botón 1: Materiales */}
                        <InfoButton
                            icon={<Package size={20} />}
                            title="Materiales Incluidos"
                            isOpen={openSection === 'materials'}
                            onClick={() => toggleSection('materials')}
                        >
                            <ul className="list-disc pl-5 space-y-2 opacity-80">
                                {workshop.materials?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </InfoButton>

                        {/* Botón 2: Fecha y Horario */}
                        <InfoButton
                            icon={<Clock size={20} />}
                            title="Fecha y Horario"
                            isOpen={openSection === 'time'}
                            onClick={() => toggleSection('time')}
                        >
                            <p className="opacity-80">
                                <strong>Día:</strong> {workshop.date}<br />
                                <strong>Horario:</strong> {workshop.time}<br />
                                <strong>Duración:</strong> {workshop.duration}<br />
                                <span className="text-sm italic block mt-2">Rogamos puntualidad para comenzar la experiencia juntos.</span>
                            </p>
                        </InfoButton>

                        {/* Botón 3: Ubicación */}
                        <InfoButton
                            icon={<MapPin size={20} />}
                            title="Ubicación"
                            isOpen={openSection === 'location'}
                            onClick={() => toggleSection('location')}
                        >
                            <p className="opacity-80">{workshop.location}</p>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(workshop.location || '')}`} target="_blank" rel="noreferrer" className="text-brand-pink underline text-sm mt-2 block">
                                Ver en el mapa
                            </a>
                        </InfoButton>

                        {/* Botón 4: Participantes */}
                        <InfoButton
                            icon={<Users size={20} />}
                            title="Grupo Reducido"
                            isOpen={openSection === 'capacity'}
                            onClick={() => toggleSection('capacity')}
                        >
                            <p className="opacity-80">
                                Para garantizar una experiencia íntima y personalizada, este taller está limitado a un máximo de <strong>{workshop.maxParticipants} personas</strong>.
                            </p>
                        </InfoButton>

                    </div>

                    {/* BOTONES DE INSCRIPCIÓN (LUMA) */}
                    <div className="mt-16 text-center">

                        {/* LÓGICA: ¿Tiene múltiples sesiones? */}
                        {(workshop as any).sessions ? (

                            // --- OPCIÓN A: MÚLTIPLES BOTONES (Mañana y Tarde) ---
                            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                                <div className="w-full md:w-auto">
                                    <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-pink">Elige tu horario</p>
                                    <div className="flex flex-col gap-4">
                                        {(workshop as any).sessions.map((session: any, index: number) => (
                                            <a
                                                key={index}
                                                href={`https://luma.com/event/${session.id}`}
                                                className="luma-checkout--button inline-block bg-brand-dark text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-pink transition duration-300 shadow-lg"
                                                data-luma-action="checkout"
                                                data-luma-event-id={session.id}
                                            >
                                                Inscribirse: {session.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        ) : (

                            // --- OPCIÓN B: UN SOLO BOTÓN (Para el resto de talleres) ---
                            workshop.lumaEventId && (
                                <a
                                    href={`https://luma.com/event/${workshop.lumaEventId}`}
                                    className="luma-checkout--button inline-block bg-brand-dark text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-pink transition duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                                    data-luma-action="checkout"
                                    data-luma-event-id={workshop.lumaEventId}
                                >
                                    Inscribirse al Evento
                                </a>
                            )
                        )}

                        <div className="mt-8 p-4 bg-brand-pink/10 rounded-xl border border-brand-pink/20 max-w-lg mx-auto">
                            <p className="text-xs text-brand-dark uppercase font-bold tracking-widest mb-1">
                                Política de Cancelación
                            </p>
                            <p className="text-sm opacity-80 leading-relaxed">
                                Debido a la cercanía del evento y la personalización de los materiales,
                                <strong> las entradas para este taller no son reembolsables</strong>.
                                Si no puedes asistir, puedes ceder tu plaza a otra persona.
                            </p>
                        </div>

                        <p className="mt-6 text-xs opacity-50">Reserva segura gestionada a través de Luma</p>
                    </div>

                </FadeIn>
            </div>
        </div>
    );
}

// COMPONENTE AUXILIAR PARA LOS BOTONES DESPLEGABLES
// Esto hace que el código de arriba sea más limpio
function InfoButton({ icon, title, children, isOpen, onClick }: any) {
    return (
        <div className="border border-brand-dark/20 rounded-lg overflow-hidden bg-white transition-all duration-300">
            <button
                onClick={onClick}
                className={`w-full flex items-center justify-between p-6 hover:bg-brand-bg/50 transition ${isOpen ? 'bg-brand-bg/30' : ''}`}
            >
                <div className="flex items-center gap-4 text-brand-dark">
                    <span className="text-brand-pink">{icon}</span>
                    <span className="font-serif italic text-xl">{title}</span>
                </div>
                {isOpen ? <ChevronUp className="text-brand-pink" /> : <ChevronDown className="opacity-30" />}
            </button>

            {/* Contenido desplegable */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-brand-dark leading-relaxed">
                    <div className="border-t border-brand-dark/10 pt-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}