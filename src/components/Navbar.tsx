import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full px-6 py-1 flex justify-between items-center z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-dark/5">
            <a href="/" className="flex items-center gap-4 group">
                <img
                    src={logo}
                    alt="Logotipo Doña Flora"
                    className="h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* EL SLOGAN */}
                {/* 'hidden md:block' oculta el texto en móviles muy pequeños para que no se rompa el menú */}
                <span className="hidden md:block font-serif italic text-brand-dark text-xl pt-2 opacity-80 tracking-wide border-l border-brand-dark/20 pl-4">
                    Diseño de mesas creativas
                </span>

            </a>

            {/* MENÚ ESCRITORIO */}
            <div className="hidden md:flex gap-4 items-center">
                <Link to="/sobre-nosotros" className="border border-brand-dark text-brand-dark px-5 py-2 rounded-full hover:bg-brand-dark hover:text-white transition text-xs font-bold uppercase tracking-widest">
                    Sobre Nosotros
                </Link>

                {/* LINK TALLERES (SIN DESPLEGABLE) */}
                <a href="/#talleres" className="border border-brand-dark text-brand-dark px-5 py-2 rounded-full hover:bg-brand-dark hover:text-white transition text-xs font-bold uppercase tracking-widest">
                    Talleres
                </a>

                {/* DESPLEGABLE EVENTOS (NUEVO) */}
                <div className="relative group h-full flex items-center">
                    <button className="border border-brand-dark text-brand-dark px-5 py-2 rounded-full group-hover:bg-brand-dark group-hover:text-white transition text-xs font-bold uppercase tracking-widest cursor-default flex items-center gap-1">
                        Eventos ▾
                    </button>
                    <div className="absolute top-full left-0 w-60 pt-4 hidden group-hover:block z-50 animate-fade-in-down">
                        <div className="bg-white rounded-xl shadow-xl border border-brand-dark/10 overflow-hidden">
                            <Link to="/eventos-sociales" className="block px-6 py-4 hover:bg-brand-bg text-brand-dark hover:text-brand-pink transition-colors text-sm font-bold uppercase tracking-widest transition border-b border-gray-100">
                                Sociales
                            </Link>
                            <Link to="/eventos-corporativos" className="block px-6 py-4 hover:bg-brand-bg text-brand-dark hover:text-brand-pink transition-colors text-sm font-bold uppercase tracking-widest transition">
                                Corporativos
                            </Link>
                        </div>
                    </div>
                </div>

                {/* LINK FAQ */}
                <Link to="/faq" className="border border-brand-dark text-brand-dark px-5 py-2 rounded-full hover:bg-brand-dark hover:text-white transition text-xs font-bold uppercase tracking-widest">
                    FAQ
                </Link>

                <a href="#contacto" className="border border-brand-pink text-brand-pink px-5 py-2 rounded-full hover:bg-brand-pink hover:text-white transition text-xs font-bold uppercase tracking-widest">
                    Contacto
                </a>
            </div>

            {/* BOTÓN HAMBURGUESA */}
            <button className="md:hidden text-brand-dark p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* MENÚ MÓVIL */}
            {
                isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-dark/10 shadow-xl flex flex-col p-8 gap-6 md:hidden animate-fade-in-down text-center">

                        {/* 1. SOBRE NOSOTROS */}
                        <Link to="/sobre-nosotros" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark font-bold uppercase tracking-widest text-lg py-2 hover:opacity-80 transition">
                            Sobre Nosotros
                        </Link>

                        {/* 2. TALLERES */}
                        <a href="/#talleres" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark font-bold uppercase tracking-widest text-lg py-2 hover:opacity-80 transition">
                            Talleres
                        </a>

                        {/* 3. EVENTOS (Sección) */}
                        <div className="flex flex-col gap-2">
                            <span className="text-brand-dark font-bold uppercase tracking-widest text-lg">Eventos</span>
                            <Link to="/eventos-sociales" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark/70 text-sm font-medium hover:text-brand-pink transition">
                                Sociales
                            </Link>
                            <Link to="/eventos-corporativos" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark/70 text-sm font-medium hover:text-brand-pink transition">
                                Corporativos
                            </Link>
                        </div>

                        {/* 4. FAQ */}
                        <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-dark font-bold uppercase tracking-widest text-lg py-2 hover:opacity-80 transition">
                            FAQ
                        </Link>

                        {/* 5. CONTACTO */}
                        <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-pink font-bold uppercase tracking-widest text-lg py-2 hover:opacity-80 transition">
                            Contacto
                        </a>

                    </div>
                )
            }
        </nav >
    );
}
