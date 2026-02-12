import { Link } from 'react-router-dom';
import { CheckCircle, Mail, Instagram, Home } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-brand-bg flex items-center justify-center p-4 font-sans">
            <SEO
                title="Reserva Confirmada | Doña Flora"
                description="Gracias por tu reserva, en breve recibirás un correo con todos los detalles."
            />

            <FadeIn>
                <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 text-center border border-brand-pink/20 relative overflow-hidden">

                    {/* Icono animado */}
                    <div className="flex justify-center mb-6 relative z-10">
                        <div className="bg-green-100 p-4 rounded-full animate-bounce-slow">
                            <CheckCircle className="w-16 h-16 text-green-600" strokeWidth={1.5} />
                        </div>
                    </div>

                    <h1 className="text-3xl font-serif text-brand-dark mb-4">
                        ¡Reserva Confirmada!
                    </h1>

                    <p className="text-brand-dark/70 mb-8 leading-relaxed">
                        Muchas gracias por unirte a nosotros. Tu plaza en el taller ya es oficial y estamos deseando verte.
                    </p>

                    {/* Caja de instrucciones importantes */}
                    <div className="bg-brand-bg/50 border border-brand-pink/20 rounded-lg p-5 mb-8 text-left">
                        <h3 className="font-bold text-brand-pink text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                            <Mail size={16} /> Pasos siguientes:
                        </h3>
                        <ul className="text-sm text-brand-dark/80 space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-brand-pink">1.</span>
                                <span>Acabamos de enviarte un correo con <strong>tu entrada y la ubicación</strong> exacta.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-brand-pink">2.</span>
                                <span>Si no lo ves, por favor <strong>revisa tu carpeta de SPAM</strong> o Promociones.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Botones de acción */}
                    <div className="space-y-3 relative z-10">
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-2 w-full bg-brand-dark text-white py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-default/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Home size={18} />
                            Volver al Inicio
                        </Link>

                        <a
                            href="https://instagram.com/donaflora_encuentros"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full border border-brand-pink text-brand-pink py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-pink/10 transition-colors"
                        >
                            <Instagram size={18} />
                            Síguenos en Instagram
                        </a>
                    </div>

                </div>
            </FadeIn>
        </div>
    );
}
