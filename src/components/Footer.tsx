import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer id="contacto" className="bg-brand-dark text-brand-bg py-4 px-6 border-t border-white/10">
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                {/* Lado Izquierdo: Título y Slogan */}
                <div className="flex flex-row items-center gap-4">
                    {/* Logo: Reducido a h-24 para que el footer sea más estrecho */}
                    <img
                        src={logo}
                        alt="Doña Flora"
                        className="h-16 w-auto brightness-0 invert shrink-0 opacity-90"
                    />

                    <p className="opacity-70 text-sm font-light leading-snug max-w-xs border-l border-white/20 pl-4">
                        Creando momentos y espacios inolvidables a través de la creatividad y el detalle.
                    </p>
                </div>

                {/* Lado Derecho: Datos Compactos */}
                <div className="space-y-3 text-xs font-light">
                    {/* Teléfono */}
                    <div className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-full border border-brand-pink/30 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition duration-300">
                            <Phone size={14} />
                        </div>
                        <a href="tel:+34614039494" className="hover:text-brand-pink transition">
                            +34 614 039 494
                        </a>
                    </div>

                    {/* Correo */}
                    <div className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-full border border-brand-pink/30 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition duration-300">
                            <Mail size={14} />
                        </div>
                        <a href="mailto:gestion@donafloraencuentros.com" className="hover:text-brand-pink transition">
                            gestion@donafloraencuentros.com
                        </a>
                    </div>

                    {/* REDES SOCIALES */}
                    <div className="flex gap-6">
                        <div className="flex items-center gap-3 group">
                            <div className="w-8 h-8 rounded-full border border-brand-pink/30 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition duration-300">
                                <Instagram size={14} />
                            </div>
                            <a href="https://instagram.com/donaflora_encuentros" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition">
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-3 group pt-1">
                        <div className="w-8 h-8 rounded-full border border-brand-pink/30 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition duration-300">
                            <MessageCircle size={14} />
                        </div>
                        <a
                            href="https://wa.me/34614039494"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand-pink transition font-medium"
                        >
                            Escríbenos por WhatsApp
                        </a>
                    </div>

                </div>
            </div>

            {/* BARRA LEGAL INFERIOR */}
            <div className="max-w-3xl mx-auto pt-6 border-t border-white/5 mt-6 text-[10px] opacity-40 flex flex-col md:flex-row justify-between items-center gap-2">
                <p>© {new Date().getFullYear()} Doña Flora. Todos los derechos reservados.</p>
                <div className="flex gap-4">
                    <Link to="/legal/aviso-legal" className="hover:text-brand-pink transition">Aviso Legal</Link>
                    <Link to="/legal/privacidad" className="hover:text-brand-pink transition">Privacidad</Link>
                    <Link to="/legal/cookies" className="hover:text-brand-pink transition">Cookies</Link>
                    <Link to="/legal/terminos-y-condiciones" className="hover:text-brand-pink transition">Términos y Condiciones</Link>
                    <Link to="/faq" className="hover:text-brand-pink transition">Preguntas Frecuentes</Link>
                </div>
            </div>
        </footer>
    );
}
