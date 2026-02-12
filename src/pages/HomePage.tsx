import { Link } from 'react-router-dom';
import { workshops } from '../data';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';
import { MapPin } from 'lucide-react';


export default function HomePage() {
    return (
        <>
            <SEO
                title="Doña Flora | Eventos y Talleres Creativos en Gran Canaria"
                description="Organización de eventos y talleres únicos. Creamos experiencias inolvidables en Gran Canaria y Tenerife usando el arte en la mesa."
                type="website"
            />

            {/* --- 1. PORTADA (Altura ajustada: pt-32) --- */}
            <section className="pt-32 pb-10 md:pt-48 md:pb-16 px-6 bg-brand-bg relative flex flex-col justify-center">
                <FadeIn>
                    <h1 className="text-[13vw] leading-[0.8] font-black uppercase tracking-tighter text-center md:text-left text-brand-dark select-none mb-10">
                        Diseñando Experiencias<br />
                        <span className="text-brand-pink font-serif italic lowercase tracking-normal"> Para ti</span>
                    </h1>

                    <div className="md:ml-2 max-w-2xl border-t border-brand-dark/10 pt-6">
                        <p className="font-serif italic text-2xl md:text-3xl text-brand-dark/80 leading-relaxed font-light">
                            "El arte de reunir a los que más importan a través de la mesa."
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* --- 2. TALLERES (Espacio reducido: pt-4) --- */}
            <section id="talleres" className="pt-4 pb-20 px-6 max-w-7xl mx-auto">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">TALLERES</h2>
                        <p className="text-lg text-brand-pink opacity-80 font-serif italic">Agenda & Próximas fechas</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workshops.map((workshop) => (
                        <FadeIn key={workshop.id}>
                            {workshop.comingSoon ? (
                                // --- VERSIÓN PRÓXIMAMENTE ---
                                <div className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-brand-dark/5 grayscale opacity-80 cursor-default">
                                    <img
                                        src={workshop.image}
                                        alt={workshop.title}
                                        className={`w-full h-full object-cover ${workshop.imagePosition || 'object-center'} md:object-center`}
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                                        <h3 className="text-3xl font-serif italic mb-2">{workshop.title}</h3>
                                        <span className="inline-block border border-white/60 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                                            Próximamente
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                // --- VERSIÓN NORMAL ---
                                <Link to={`/reservar/${workshop.id}`} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer block">
                                    <img
                                        src={workshop.image}
                                        alt={workshop.title}
                                        className={`w-full h-full object-cover ${workshop.imagePosition || 'object-center'} md:object-center transition duration-700 group-hover:scale-105`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur text-brand-dark px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm flex items-center gap-2">
                                        <span>{workshop.price}</span>
                                        {(workshop as any).priceDuo && (
                                            <>
                                                <span className="w-1 h-1 bg-brand-dark/30 rounded-full"></span>
                                                <span className="text-brand-pink font-black">DÚO {(workshop as any).priceDuo}</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                                        <h3 className="text-3xl font-serif italic mb-2">{workshop.title}</h3>
                                        <div className="flex items-center gap-4 mb-6 opacity-90 text-sm font-medium">
                                            <span>{workshop.date}</span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={16} />
                                                {(workshop as any).locationLabel || "Gran Canaria"}
                                            </span>
                                        </div>
                                        <span className="inline-block bg-white text-brand-dark px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest group-hover:bg-brand-pink group-hover:text-white transition-colors">
                                            Reservar Plaza
                                        </span>
                                    </div>
                                </Link>
                            )}
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* --- SEPARADOR ELEGANTE --- */}
            {/* --- SEPARADOR ELEGANTE --- */}
            <div className="flex justify-center items-center gap-4 py-8 opacity-80">
                <div className="h-[1px] w-24 bg-brand-dark/30"></div>
                <div className="w-2 h-2 rounded-full bg-brand-pink/70"></div>
                <div className="h-[1px] w-24 bg-brand-dark/30"></div>
            </div>



            {/* --- 4. EVENTOS --- */}
            <section id="eventos" className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">EVENTOS</h2>
                    <p className="text-lg text-brand-pink opacity-80 font-serif italic">El escenario perfecto para tus recuerdos</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* SOCIAL */}
                    <Link to="/eventos-sociales" className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1613109040830-ffdd96756f5e?q=80&w=1170" alt="Eventos Sociales" className="w-full h-full object-cover transition duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-brand-dark/30 group-hover:bg-brand-dark/50 transition-colors duration-500"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                            <h3 className="text-5xl font-serif italic mb-4">Social</h3>

                            <p className="opacity-90 mb-8 text-sm tracking-wide font-medium">
                                Bodas íntimas • Cumpleaños • Aniversarios
                            </p>

                            <span className="border border-white px-8 py-3 rounded-full uppercase text-xs font-bold tracking-widest transition-all hover:bg-brand-pink hover:text-white hover:border-brand-pink">
                                Ver Detalles
                            </span>
                        </div>
                    </Link>

                    {/* CORPORATIVO */}
                    <Link to="/eventos-corporativos" className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Eventos Corporativos" className="w-full h-full object-cover transition duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-brand-dark/30 group-hover:bg-brand-dark/50 transition-colors duration-500"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                            <h3 className="text-5xl font-serif italic mb-4">Corporativo</h3>

                            <p className="opacity-90 mb-8 text-sm tracking-wide font-medium">
                                Team building • Inauguraciones • Retiros
                            </p>

                            <span className="border border-white px-8 py-3 rounded-full uppercase text-xs font-bold tracking-widest transition-all hover:bg-brand-pink hover:text-white hover:border-brand-pink">
                                Ver Detalles
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}