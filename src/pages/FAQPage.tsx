import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

export default function FAQPage() {
    const faqs = [
        {
            section: "1. Sobre Doña Flora y nuestros servicios",
            items: [
                {
                    q: "¿Qué hace diferente a Doña Flora?",
                    a: "Creemos en el valor de sentarnos alrededor de la mesa. Nuestros eventos no solo se ven bonitos: están pensados para reunir, compartir y crear recuerdos a través del diseño y el cuidado del detalle."
                },
                {
                    q: "¿Qué tipo de eventos realizan?",
                    a: "Diseñamos y producimos eventos privados y encuentros personalizados: cumpleaños, pedidas de mano, bodas íntimas, baby showers, comidas familiares, aniversarios, eventos corporativos y talleres creativos."
                },
                {
                    q: "¿En qué consiste su servicio exactamente?",
                    a: "Nos encargamos del diseño de la mesa y la ambientación del espacio, creando un entorno coherente con la celebración. Según el proyecto, también gestionamos la coordinación, la búsqueda del espacio y los detalles para que la experiencia esté cuidada de principio a fin."
                },
                {
                    q: "¿Organizan también talleres?",
                    a: "Sí. Realizamos talleres creativos y experienciales, tanto propios (consulta nuestra agenda) como privados para empresas, grupos de amigas o celebraciones especiales."
                },
                {
                    q: "¿Incluyen comida o catering?",
                    a: "Diseñamos la mesa y el acompañamiento gastronómico acorde a la experiencia (desayuno, brunch, merienda o comida ligera). Para necesidades más complejas, colaboramos con proveedores externos o adaptamos la propuesta según el evento."
                }
            ]
        },
        {
            section: "2. Ubicación y Logística",
            items: [
                {
                    q: "¿En qué zonas trabajan?",
                    a: "Trabajamos principalmente en Gran Canaria y Tenerife. Para otros destinos o islas, consúltanos sin compromiso."
                },
                {
                    q: "¿Dónde se realizan los eventos?",
                    a: (
                        <>
                            Nos adaptamos a ti. Realizamos eventos en:
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Espacios privados (tu domicilio o jardín).</li>
                                <li>Entornos naturales.</li>
                                <li>Locales o espacios con encanto.</li>
                            </ul>
                            <p className="mt-2 text-sm italic opacity-80">Nota: Si no tienes espacio, podemos ayudarte a encontrar uno acorde al evento.</p>
                        </>
                    )
                },
                {
                    q: "¿Tienen un número mínimo o máximo de personas?",
                    a: "No hay un número fijo, depende del tipo de evento y del espacio. Trabajamos desde encuentros pequeños e íntimos hasta grupos más amplios. Cuéntanos tu idea y te asesoramos."
                }
            ]
        },
        {
            section: "3. Reservas y Presupuestos",
            items: [
                {
                    q: "¿Con cuánta antelación hay que reservar?",
                    a: (
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Eventos pequeños:</strong> Recomendamos contactar con al menos 2–3 semanas de antelación.</li>
                            <li><strong>Eventos complejos:</strong> Entre 2 y 6 meses mínimo, dependiendo de la envergadura.</li>
                        </ul>
                    )
                },
                {
                    q: "¿Cómo se solicita un presupuesto?",
                    a: (
                        <>
                            <p>Puedes escribirnos por WhatsApp, Correo o Instagram (MD) indicándonos:</p>
                            <ol className="list-decimal pl-5 mt-2 space-y-1">
                                <li>Fecha del evento.</li>
                                <li>Tipo de celebración.</li>
                                <li>Número aproximado de personas.</li>
                                <li>Lugar (si ya lo tienes).</li>
                            </ol>
                            <p className="mt-2">O si lo prefieres, llámanos al <strong>+34 614 039 494</strong> para concertar una cita y que nos cuentes tu idea en persona.</p>
                        </>
                    )
                },
                {
                    q: "¿Los precios incluyen IGIC?",
                    a: "Sí, todos los precios mostrados en la web y en nuestros presupuestos finales incluyen el IGIC correspondiente."
                }
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-brand-bg text-brand-dark pt-32 pb-20 px-6 font-sans">
            <SEO
                title="Preguntas Frecuentes (FAQ)"
                description="Resuelve tus dudas sobre los eventos, talleres y servicios de Doña Flora. Encuentra información sobre reservas, cancelaciones, ubicaciones y más."
            />

            <div className="max-w-4xl mx-auto">
                <Link to="/" className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full hover:scale-110 transition shadow-sm border border-brand-dark/5 text-brand-dark">
                    <ArrowLeft size={24} />
                </Link>

                <FadeIn>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Preguntas Frecuentes</h1>
                        <p className="text-brand-pink font-serif italic text-xl">Resolvemos tus dudas</p>
                    </div>

                    <div className="space-y-12">
                        {faqs.map((section, idx) => (
                            <div key={idx} className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/60 shadow-sm">
                                <h2 className="text-2xl font-serif text-brand-dark mb-6 pb-4 border-b border-brand-dark/10">
                                    {section.section}
                                </h2>

                                <div className="space-y-8">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="group">
                                            <h3 className="text-lg font-bold text-brand-dark mb-3 flex gap-2">
                                                <span className="text-brand-pink opacity-80">●</span> {item.q}
                                            </h3>
                                            <div className="text-brand-dark/80 leading-relaxed text-sm md:text-base pl-5 group-hover:text-brand-dark transition-colors">
                                                {item.a}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="mb-6 opacity-70">¿Tienes más preguntas?</p>
                        <a
                            href="https://wa.me/34614039494"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-brand-dark text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-pink transition-colors shadow-lg"
                        >
                            Contactar por WhatsApp
                        </a>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
