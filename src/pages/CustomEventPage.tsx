// src/pages/CustomEventPage.tsx
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

export default function CustomEventPage() {
    return (
        <div className="min-h-screen bg-brand-bg text-brand-dark p-6 md:p-12">

            {/* Botón Volver */}
            <Link to="/" className="inline-block mb-8 text-sm border-b border-brand-dark hover:text-brand-pink hover:border-brand-pink transition">
                ← Volver al inicio
            </Link>

            <div className="max-w-2xl mx-auto">
                <FadeIn>
                    <h1 className="text-5xl md:text-7xl font-serif italic text-brand-pink mb-6">
                        A tu medida
                    </h1>
                    <p className="text-xl mb-12 opacity-80">
                        Cuéntanos tu idea. Ya sea una cena íntima, una boda pequeña o un taller privado,
                        diseñaremos cada detalle para ti.
                    </p>

                    {/* --- FORMULARIO --- */}
                    {/* IMPORTANTE: Cambia 'TU_CORREO' por tu email real en la siguiente línea */}
                    <form
                        action="https://formsubmit.co/gestion@xn--doafloraencuentros-o0b.com"
                        method="POST"
                        className="space-y-6"
                    >
                        {/* Trucos para que funcione mejor */}
                        <input type="hidden" name="_subject" value="¡Nuevo Pedido de Evento Doña Flora!" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="http://localhost:5173/" />
                        {/* NOTA: Cuando subas la web a internet, cambia la línea de '_next' por tu dominio real */}

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest">Nombre</label>
                                <input required type="text" name="nombre" className="w-full bg-transparent border-b border-brand-dark/30 py-2 focus:outline-none focus:border-brand-pink transition" placeholder="Tu nombre" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest">Teléfono</label>
                                <input
                                    required
                                    type="tel"
                                    name="telefono"

                                    // 1. ESTO BLOQUEA LAS LETRAS:
                                    onInput={(e) => {
                                        // Solo permite números (0-9), el símbolo más (+) y espacios
                                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9+ ]/g, '');
                                    }}

                                    // 2. ESTO AYUDA AL MÓVIL A MOSTRAR EL TECLADO NUMÉRICO:
                                    inputMode="numeric"

                                    // 3. ESTO VALIDA AL ENVIAR (mínimo 9 caracteres):
                                    pattern="[0-9+ ]{9,}"
                                    title="Por favor, escribe un número de teléfono válido"

                                    className="w-full bg-transparent border-b border-brand-dark/30 py-2 focus:outline-none focus:border-brand-pink transition"
                                    placeholder="+34 600 000 000"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest">Correo Electrónico</label>
                            <input required type="email" name="email" className="w-full bg-transparent border-b border-brand-dark/30 py-2 focus:outline-none focus:border-brand-pink transition" placeholder="hola@ejemplo.com" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest">Fecha Aproximada</label>
                                <input type="date" name="fecha" className="w-full bg-transparent border-b border-brand-dark/30 py-2 focus:outline-none focus:border-brand-pink transition" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest">Nº de Personas</label>
                                <input type="number" name="personas" className="w-full bg-transparent border-b border-brand-dark/30 py-2 focus:outline-none focus:border-brand-pink transition" placeholder="Ej: 15" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest">Cuéntanos tu idea</label>
                            <textarea required name="mensaje" rows={4} className="w-full bg-transparent border-b border-brand-dark/30 py-2 focus:outline-none focus:border-brand-pink transition" placeholder="¿Qué estás imaginando? (Tipo de evento, estilo, preferencias...)"></textarea>
                        </div>

                        <button type="submit" className="mt-8 bg-brand-pink text-white px-8 py-4 rounded-full font-bold w-full hover:bg-brand-dark transition duration-300 uppercase tracking-widest text-sm">
                            Enviar Solicitud
                        </button>

                    </form>
                </FadeIn>
            </div>
        </div>
    );
}