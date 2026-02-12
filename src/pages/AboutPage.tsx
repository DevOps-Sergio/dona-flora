import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';
import Flora from '../assets/Flora.png';
import Yara from '../assets/Yara.jpeg';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-brand-bg text-brand-dark font-sans selection:bg-brand-pink selection:text-white">
            <SEO
                title="Sobre Nosotros | Doña Flora"
                description="Conoce la historia detrás de Doña Flora, un proyecto nacido de la pasión por el arte de la mesa y la necesidad de compartir."
            />

            {/* Botón Volver */}
            <Link to="/" className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full hover:scale-110 transition shadow-sm border border-brand-dark/5 text-brand-dark">
                <ArrowLeft size={24} />
            </Link>

            <section className="py-20 px-6 min-h-screen flex flex-col justify-center">

                {/* PARTE 1: SOBRE MÍ */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start mb-32 pt-12 md:pt-0">
                    {/* Imagen (Izquierda) */}
                    <div className="order-2 md:order-1 relative sticky top-32">
                        <FadeIn direction="right">
                            <div className="aspect-[3/4] bg-gray-300 rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src={Yara}
                                    alt="Sobre mí"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Texto (Derecha) */}
                    <div className="order-1 md:order-2">
                        <FadeIn>
                            <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-brand-dark/50">La fundadora</h2>
                            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-brand-dark">
                                Hola, soy Yara
                            </h3>

                            <div className="space-y-6 text-lg opacity-80 font-serif italic leading-relaxed text-pretty">
                                <p>
                                    Dicen que la vocación se descubre, pero yo siento que nací con ella. De niña, el momento favorito de mi cumpleaños no era abrir los regalos, sino las horas e incluso las semanas previas: ir a buscar las invitaciones, preparar las bolsas de golosinas para repartir en el colegio y ese instante mágico de transformar el salón, colocar cada adorno y crear la atmósfera perfecta antes de que sonara el timbre.
                                </p>
                                <p>
                                    Aún conservo una imagen nítida: yo, muy pequeña, subida de puntillas a la escalera para alcanzar la parte más alta del armario de mis padres —donde todavía hoy se guardan los cubiertos de plata de Navidad— con la firme intención de limpiarlos uno a uno para que quedaran perfectos. También recuerdo, con cierta gracia, cómo no dejaba que nadie se acercara al aparador; la elección de las copas y la vajilla era territorio exclusivo mío.
                                </p>
                                <p>
                                    Me pasaba horas combinando manteles y servilletas o diseñando el menú. Entendí muy pronto que reunirse alrededor de una mesa es una de las cosas que más felices nos hacen: compartir, comer rico, charlar y reír hasta que llega la hora de los juegos de mesa.
                                </p>
                                <p>
                                    Esa pasión infantil se convirtió en mi profesión. Me formé en <strong className="font-extrabold text-brand-dark opacity-100">Proyectos y Dirección de Obras de Decoración</strong>, me especialicé en <strong className="font-extrabold text-brand-dark opacity-100">Organización de Caterings y Eventos</strong> y completé mi visión con un <strong className="font-extrabold text-brand-dark opacity-100">Máster en Gestión de Proyectos y Espacios Comunitarios</strong>.
                                </p>
                                <p>
                                    Hoy, mi especialidad es el <strong className="font-extrabold text-brand-dark opacity-100">Arte de la Mesa</strong>: crear diseños pensados para convertir una celebración en un recuerdo imborrable. Combino mi trayectoria profesional con mi amor por el detalle para dar vida a tu proyecto, logrando que seas una invitada más en tu propia celebración, lejos del estrés de la organización y conectada con el placer de disfrutar.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* PARTE 2: ¿POR QUÉ DOÑA FLORA? */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Texto (Izquierda) */}
                    <div className="order-1">
                        <FadeIn>
                            <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-brand-dark/50">Nuestra Filosofía</h2>
                            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-brand-dark">
                                ¿Por qué nos llamamos Doña Flora?
                            </h3>
                            <div className="space-y-6 text-lg opacity-80 font-serif italic leading-relaxed text-pretty">
                                <p>
                                    Este proyecto lleva el nombre de mi abuela materna, Flora.
                                </p>
                                <p>
                                    A mi abuela le gustaba que la llamaran <strong className="font-extrabold text-brand-dark opacity-100">Doña Flora</strong>. Le sacaba una sonrisa picarona; lejos de hacerla sentir mayor, la hacía sentir un poco la matriarca: respetada, pero también muy querida. Era risueña, humilde, soñadora y valiente.
                                </p>
                                <p>
                                    Pero ¿por qué lleva su nombre?
                                </p>
                                <p>
                                    Porque hay historias que se construyen con recuerdos, sabores y aromas, como la de ella, como la de las abuelas canarias, que están hechas de otra pasta. De sacar a la familia pa'lante, de garra y aguante. De olor a leche con gofio y mar salada. De “ese poquito solo te vas a comer”, de “vete por la sombrita” y “a ver cuándo me vienes a ver”.
                                </p>
                                <p>
                                    Pero, sobre todo, están hechas de reunión. <strong className="font-extrabold text-brand-dark opacity-100">De sentar a todos alrededor de la mesa</strong>. De donde comen dos, comen ocho. <strong className="font-extrabold text-brand-dark opacity-100">De sobremesas. De compartir.</strong>
                                </p>
                                <p>
                                    Cuando mi abuela se fue, lo entendí todo. Porque cuando se van, cuando ya no están, se nota. Se nota porque ya no huele igual, porque la comida no lleva la misma cantidad de sal y cariño, y las voces empiezan a hacer eco en tanto espacio vacío.
                                </p>
                                <p>
                                    <strong className="font-extrabold text-brand-dark opacity-100">Doña Flora nace para recuperar ese legado. Para recordarnos que la mesa importa. Que sentarnos juntos importa. Que los momentos que compartimos alrededor de ella son los que, al final, se quedan con nosotros.</strong>
                                </p>
                                <p>
                                    <strong className="font-extrabold text-brand-dark opacity-100">Este proyecto es por mi abuela</strong>. Y por todas las abuelas. Porque, aunque ellas siempre serán el punto de unión, <strong className="font-extrabold text-brand-dark opacity-100">nosotros tenemos que seguir celebrándonos.</strong>
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Imagen (Derecha) */}
                    <div className="order-2 relative">
                        <FadeIn direction="left">
                            <div className="aspect-square bg-gray-300 rounded-full overflow-hidden shadow-xl border-4 border-white/50">
                                <img
                                    src={Flora}
                                    alt="Filosofía Doña Flora"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>

            </section>
        </div>
    );
}
