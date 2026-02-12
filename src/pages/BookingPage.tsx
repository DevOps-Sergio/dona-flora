// src/pages/BookingPage.tsx
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { workshops } from '../data';
import { Calendar, MapPin, Sparkles, Users, ArrowLeft, Clock } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

export default function BookingPage() {
    const { id } = useParams();
    const workshop = workshops.find(w => w.id === Number(id));

    // Efecto para cargar scripts externos (Stripe)
    useEffect(() => {
        const loadScript = (src: string, id: string) => {
            if (!document.getElementById(id)) {
                const script = document.createElement('script');
                script.id = id;
                script.src = src;
                script.async = true;
                document.body.appendChild(script);
            }
        };

        loadScript("https://js.stripe.com/v3/buy-button.js", "stripe-buy-button");
    }, []);

    if (!workshop) return <div className="p-10 text-center">Taller no encontrado</div>;

    return (
        <div className="min-h-screen bg-brand-bg text-brand-dark font-sans selection:bg-brand-pink selection:text-white">
            <SEO
                title={workshop.title + " | Doña Flora"}
                description={workshop.description}
                image={workshop.image}
            />

            {/* --- IMAGEN SUPERIOR (Banner) --- */}
            <div className="relative h-80 md:h-64 lg:h-72 w-full bg-stone-200 overflow-hidden shadow-md">
                {/* <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover object-center"
                /> */}
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
                <Link to="/#talleres" className="absolute top-6 left-6 z-50 bg-white/90 backdrop-blur-md p-3 rounded-full hover:scale-110 transition shadow-lg border border-brand-dark/5 text-brand-dark">
                    <ArrowLeft size={24} />
                </Link>

                {/* Título integrado en banner - Degradado en Azul Corporativo */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent p-6 md:p-10 pt-24">
                    <div className="max-w-7xl mx-auto">
                        <span className="inline-block px-3 py-1 bg-white text-brand-dark text-[10px] font-bold uppercase tracking-widest rounded-full mb-2 shadow-sm">
                            Taller Exclusivo
                        </span>
                        <h1 className="text-2xl md:text-5xl font-black uppercase text-white leading-tight drop-shadow-md">
                            {workshop.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
                <FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

                        {/* COLUMNA 1: LOGÍSTICA */}
                        <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm h-full flex flex-col space-y-6">

                            <div className="space-y-5 flex-grow">
                                {/* FECHA */}
                                <div className="flex gap-4 items-start pt-2">
                                    <div className="bg-brand-pink/10 p-2 rounded-lg text-brand-pink"><Calendar size={20} /></div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Fecha</h3>
                                        <p className="font-bold text-sm text-brand-dark">{workshop.date}</p>
                                    </div>
                                </div>

                                {/* HORA */}
                                <div className="flex gap-4 items-start">
                                    <div className="bg-brand-pink/10 p-2 rounded-lg text-brand-pink"><Clock size={20} /></div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Horario</h3>
                                        <p className="font-bold text-sm text-brand-dark">{workshop.time}</p>
                                        <p className="text-xs opacity-60 mt-1">Duración: {workshop.duration}</p>
                                    </div>
                                </div>

                                {/* LUGAR */}
                                <div className="flex-col gap-4">
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-brand-pink/10 p-2 rounded-lg text-brand-pink"><MapPin size={20} /></div>
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Ubicación</h3>
                                            <p className="font-bold text-sm leading-tight text-brand-dark">{workshop.location}</p>
                                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(workshop.location || '')}`} target="_blank" rel="noreferrer" className="text-[10px] text-brand-pink underline font-bold uppercase tracking-wider mt-2 inline-block hover:text-brand-dark">
                                                Ver en Google Maps
                                            </a>
                                        </div>
                                    </div>

                                    {/* MAPA INTERACTIVO */}
                                    <div className="w-full h-48 rounded-xl overflow-hidden shadow-sm border border-brand-dark/10 mt-4 relative bg-gray-100">
                                        <iframe
                                            title="Mapa de ubicación"
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight={0}
                                            marginWidth={0}
                                            style={{ border: 0 }}
                                            src={`https://maps.google.com/maps?q=${encodeURIComponent(workshop.location || '')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* COLUMNA 2: LA EXPERIENCIA */}
                        <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm h-full flex flex-col">
                            <h3 className="text-lg font-serif italic text-brand-pink mb-4 flex items-center gap-2">
                                <Sparkles className="text-brand-dark opacity-50" size={18} />
                                La experiencia
                            </h3>

                            <div className="flex-grow space-y-6">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Plan del Taller</p>
                                    <ul className="space-y-2">
                                        {(workshop as any).plan ? (
                                            (workshop as any).plan.map((item: string, index: number) => (
                                                <li key={index} className="text-sm opacity-80 flex gap-2 items-start">
                                                    <span className="text-brand-pink text-xs mt-1">●</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="text-sm opacity-60 italic">Detalles próximamente.</li>
                                        )}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-brand-dark/5">
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Incluye</p>
                                    <ul className="grid grid-cols-1 gap-1">
                                        {workshop.materials?.map((item, index) => (
                                            <li key={index} className="text-sm opacity-80 flex gap-2 items-center">
                                                <span className="text-brand-pink">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* COLUMNA 3: PRECIO Y RESERVA */}
                        <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm h-full flex flex-col items-center text-center relative overflow-hidden group">

                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink blur-[80px] opacity-10 group-hover:opacity-20 transition duration-700 pointer-events-none"></div>

                            <div className="flex-grow flex flex-col justify-center items-center w-full">
                                <Users className="text-brand-pink mb-4" size={32} />
                                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark/60 mb-2">Precios</h3>

                                <div className="flex gap-6 items-end mb-4">
                                    <div className="flex flex-col items-center">
                                        <p className="text-4xl font-black text-brand-dark tracking-tight">{workshop.price}</p>
                                        <span className="text-[10px] uppercase font-bold text-brand-dark/50 tracking-widest mt-1">Individual</span>
                                    </div>
                                    {(workshop as any).priceDuo && (
                                        <>
                                            <div className="h-10 w-px bg-brand-dark/10"></div>
                                            <div className="flex flex-col items-center">
                                                <div className="bg-brand-pink text-white text-[9px] font-bold px-2 py-0.5 rounded-full mb-1 uppercase tracking-wider animate-pulse">
                                                    Pack Pareja
                                                </div>
                                                <p className="text-4xl font-black text-brand-dark tracking-tight">{(workshop as any).priceDuo}</p>
                                                <span className="text-[10px] uppercase font-bold text-brand-dark/50 tracking-widest mt-1">Dos personas</span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="mb-8">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70 bg-white/80 px-3 py-1 rounded-full border border-brand-dark/10">
                                        Max {workshop.maxParticipants} participantes
                                    </span>
                                </div>

                                {/* BOTONES DE RESERVA (Stripe) */}
                                <div className="w-full space-y-3 relative z-10 font-sans">
                                    <div className="flex flex-col gap-4">
                                        {/* Stripe Individual - Hardcoded as requested */}
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70 mb-1">Entrada individual</p>
                                            {/* @ts-ignore */}
                                            <stripe-buy-button
                                                buy-button-id="buy_btn_1SyHtOE49A7e8gXGkw967R46"
                                                publishable-key="pk_live_51SpvEYE49A7e8gXGr7AOdwuZjR6ToGheCMleCVqW3Ete7Yapaa99NAsUEQrqd2ul4gjLddVljmSxu5rBj4kD5eo7001enpr9JP"
                                            >
                                                {/* @ts-ignore */}
                                            </stripe-buy-button>
                                        </div>

                                        {/* Stripe Duo */}
                                        {(workshop as any).stripeIds?.duo && (
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70 mb-1">Pack dúo (DESCUENTO)</p>
                                                {/* @ts-ignore */}
                                                <stripe-buy-button
                                                    buy-button-id="buy_btn_1SyHu0E49A7e8gXGxAgxXB9Z"
                                                    publishable-key="pk_live_51SpvEYE49A7e8gXGr7AOdwuZjR6ToGheCMleCVqW3Ete7Yapaa99NAsUEQrqd2ul4gjLddVljmSxu5rBj4kD5eo7001enpr9JP"
                                                >
                                                    {/* @ts-ignore */}
                                                </stripe-buy-button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-6 text-[9px] text-brand-dark/60 leading-tight bg-brand-dark/5 p-3 rounded-lg border border-brand-dark/5 text-left">
                                    <p className="font-bold mb-1">Política de Cancelación:</p>
                                    <ul className="list-disc pl-3 mb-1 space-y-0.5">
                                        <li>+7 días antelación: Te guardamos la plaza para un futuro taller.</li>
                                        <li>-7 días antelación: No se admiten cambios ni devoluciones.</li>
                                    </ul>
                                    <Link to="/legal/terminos-y-condiciones" target="_blank" className="underline hover:text-brand-pink mt-1 block">Ver condiciones completas</Link>
                                </div>
                            </div>

                            {/* NOTA WHATSAPP (Añadida DENTRO) */}
                            <div className="mt-4 pt-4 border-t border-brand-dark/5 w-full text-center">
                                <a href="https://wa.me/34614039494" target="_blank" rel="noreferrer" className="text-xs opacity-50 hover:opacity-100 transition flex items-center justify-center gap-2">
                                    <span>¿Dudas?</span>
                                    <span className="underline font-bold">Consúltanos por WhatsApp</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </FadeIn>
            </div>
        </div>
    );
}