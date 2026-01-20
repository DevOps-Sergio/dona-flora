import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Menu, X, MessageCircle, Pin } from 'lucide-react';
import CustomEventPage from './pages/CustomEventPage';
import BookingPage from './pages/BookingPage';
import { workshops } from './data';
import logo from './assets/logo.png';
import FadeIn from './components/FadeIn'; // Importamos nuestro componente mágico
import { useState } from 'react';
import LegalPage from './pages/LegalPage';
import CustomWorkshopPage from './pages/CustomWorkshopPage';
import SocialEventsPage from './pages/SocialEventsPage';
import CorporateEventsPage from './pages/CorporateEventsPage';


function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="font-sans text-brand-dark bg-brand-bg selection:bg-brand-dark selection:text-white">


      {/* --- NAVEGACIÓN ACTUALIZADA --- */}
      <nav className="fixed top-0 left-0 w-full px-6 py-1 flex justify-between items-center z-50 bg-[#e4e3df]/90 backdrop-blur-md border-b border-brand-dark/5">
        <a href="/" className="flex items-center gap-4 group">
          <img
            src={logo}
            alt="Logotipo Doña Flora"
            className="h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* EL SLOGAN */}
          {/* 'hidden md:block' oculta el texto en móviles muy pequeños para que no se rompa el menú */}
          <span className="hidden md:block font-serif italic text-brand-dark text-xl pt-2 opacity-80 tracking-wide border-l border-brand-dark/20 pl-4">
            Arte en la mesa
          </span>

        </a>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden md:flex gap-4 items-center">
          <a href="#about" className="border border-brand-dark text-brand-dark px-5 py-2 rounded-full hover:bg-brand-dark hover:text-white transition text-xs font-bold uppercase tracking-widest">
            Sobre Nosotros
          </a>

          {/* DESPLEGABLE TALLERES */}
          <div className="relative group h-full flex items-center">
            <button className="border border-brand-dark text-brand-dark px-5 py-2 rounded-full group-hover:bg-brand-dark group-hover:text-white transition text-xs font-bold uppercase tracking-widest cursor-default flex items-center gap-1">
              Talleres ▾
            </button>
            <div className="absolute top-full left-0 w-60 pt-4 hidden group-hover:block z-50 animate-fade-in-down">
              <div className="bg-white rounded-xl shadow-xl border border-brand-dark/10 overflow-hidden">
                <a href="/#talleres" className="block px-6 py-4 hover:bg-brand-bg text-brand-dark text-sm font-bold uppercase tracking-widest transition border-b border-gray-100">
                  Talleres Propios <span className="block text-[10px] text-gray-400 font-normal normal-case mt-1">Calendario oficial</span>
                </a>
                <Link to="/talleres-medida" className="block px-6 py-4 hover:bg-brand-bg text-brand-dark text-sm font-bold uppercase tracking-widest transition">
                  Personalizados <span className="block text-[10px] text-gray-400 font-normal normal-case mt-1">Para grupos privados</span>
                </Link>
              </div>
            </div>
          </div>

          {/* DESPLEGABLE EVENTOS (NUEVO) */}
          <div className="relative group h-full flex items-center">
            <button className="border border-brand-dark text-brand-dark px-5 py-2 rounded-full group-hover:bg-brand-dark group-hover:text-white transition text-xs font-bold uppercase tracking-widest cursor-default flex items-center gap-1">
              Eventos ▾
            </button>
            <div className="absolute top-full left-0 w-60 pt-4 hidden group-hover:block z-50 animate-fade-in-down">
              <div className="bg-white rounded-xl shadow-xl border border-brand-dark/10 overflow-hidden">
                <Link to="/eventos-sociales" className="block px-6 py-4 hover:bg-brand-bg text-brand-dark text-sm font-bold uppercase tracking-widest transition border-b border-gray-100">
                  Sociales <span className="block text-[10px] text-gray-400 font-normal normal-case mt-1">Bodas y Celebraciones</span>
                </Link>
                <Link to="/eventos-corporativos" className="block px-6 py-4 hover:bg-brand-bg text-brand-dark text-sm font-bold uppercase tracking-widest transition">
                  Corporativos <span className="block text-[10px] text-gray-400 font-normal normal-case mt-1">Empresas y Equipos</span>
                </Link>
              </div>
            </div>
          </div>

          <a href="#contacto" className="border border-brand-pink text-brand-pink px-5 py-2 rounded-full hover:bg-brand-pink hover:text-white transition text-xs font-bold uppercase tracking-widest">
            Contacto
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button className="md:hidden text-brand-dark p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* MENÚ MÓVIL */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-dark/10 shadow-xl flex flex-col p-6 gap-4 md:hidden animate-fade-in-down">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-3 border-b border-brand-dark/10 text-brand-dark text-sm font-bold uppercase tracking-widest hover:text-brand-pink">Sobre Nosotros</a>

            <p className="text-center text-xs opacity-50 uppercase tracking-widest mt-2">Talleres</p>
            <a href="/#talleres" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-2 text-brand-dark text-sm font-bold uppercase tracking-widest hover:text-brand-pink">Calendario</a>
            <Link to="/talleres-medida" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-2 border-b border-brand-dark/10 text-brand-dark text-sm font-bold uppercase tracking-widest hover:text-brand-pink">A Medida</Link>

            <p className="text-center text-xs opacity-50 uppercase tracking-widest mt-2">Eventos</p>
            <Link to="/eventos-sociales" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-2 text-brand-dark text-sm font-bold uppercase tracking-widest hover:text-brand-pink">Sociales</Link>
            <Link to="/eventos-corporativos" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-2 border-b border-brand-dark/10 text-brand-dark text-sm font-bold uppercase tracking-widest hover:text-brand-pink">Corporativos</Link>

            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-3 text-brand-pink font-bold uppercase tracking-widest">Contacto</a>
          </div>
        )}
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
        <FadeIn>
          <h1 className="text-[13vw] leading-[0.8] font-black uppercase tracking-tighter text-center md:text-left text-brand-dark">
            Diseñando Experiencias<br />
            <span className="text-brand-pink font-serif italic lowercase tracking-normal"> Para ti</span>
          </h1>
        </FadeIn>


        <div className="mt-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <FadeIn delay={0.5}>
            <p className="font-serif italic text-2xl md:text-3xl text-brand-dark/90 leading-relaxed font-light">
              "El arte de reunir a los que más importan a través de la mesa"
            </p>
          </FadeIn>


        </div>
      </section>

      {/* --- 2. SOBRE NOSOTROS (Texto + Imagen) --- */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <FadeIn direction="right">
              <div className="aspect-[3/4] bg-gray-300 rounded-2xl overflow-hidden">
                {/* Placeholder imagen */}
                <img src="https://images.unsplash.com/photo-1522751593361-91a54736aea7?q=80&w=987&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>

          <div className="order-1 md:order-2">
            <FadeIn>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-dark/50">Nuestra Esencia</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                No somos solo eventos. <br /> Somos pausas en el caos.
              </h3>
              <p className="text-lg opacity-80 mb-6 leading-relaxed">
                Nacimos de la necesidad de frenar. Creemos en el poder de mancharse las manos de arcilla, de oler la cera derretida y de compartir una copa de vino sin mirar el reloj.
              </p>
              <p className="text-lg opacity-80 leading-relaxed">
                Nuestro equipo de artesanos y organizadores cuida cada detalle estético para que tú solo tengas que preocuparte de disfrutar.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 3. TALLERES (Horizontal Scroll o Grid) --- */}
      <section id="talleres" className="py-20 px-6 border-2 border-brand-dark mx-4 md:mx-12 rounded-[2.5rem] my-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-6xl md:text-8xl font-black uppercase opacity-10">Agenda</h2>
              <h3 className="text-3xl font-bold absolute mt-8 ml-2">Talleres</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {workshops.map((workshop) => (

              // AQUÍ EMPIEZA LA LÓGICA NUEVA
              // Si tiene la propiedad 'comingSoon', renderizamos un DIV (sin enlace)
              // Si no la tiene, renderizamos el LINK normal.

              workshop.comingSoon ? (
                // --- VERSIÓN "PRÓXIMAMENTE" (Desactivada) ---
                <div key={workshop.id} className="group relative grayscale opacity-80 cursor-default">
                  <div className="overflow-hidden rounded-xl h-96 relative">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Etiqueta de aviso */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="bg-white text-brand-dark px-4 py-2 text-xs font-bold uppercase tracking-widest">
                        Próximamente
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-2xl font-serif italic">{workshop.title}</h3>
                    <p className="text-sm opacity-60">Fechas por confirmar</p>
                  </div>
                </div>
              ) : (
                // --- VERSIÓN NORMAL (Con enlace) ---
                <Link to={`/reservar/${workshop.id}`} key={workshop.id} className="group block">
                  <div className="overflow-hidden rounded-xl h-96 relative">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                      {workshop.price}
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h3 className="text-2xl font-serif italic group-hover:text-brand-pink transition">{workshop.title}</h3>
                    <div className="flex justify-between items-center text-sm opacity-60">
                      <span>{workshop.date}</span>
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              )

            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 1: LLAMADA A TALLER PERSONALIZADO (ESTILO CONTACTO) --- */}
      <section className="py-20 bg-brand-dark text-white text-center px-6 border-b border-brand-bg/5">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif italic mb-6">¿Buscas un taller a tu medida?</h2>
          <p className="max-w-2xl mx-auto text-white/80 text-lg mb-10 leading-relaxed">
            Diseñamos talleres privados a medida para grupos. Tú pones la compañía, nosotros ponemos todo lo demás.
          </p>

          {/* ESTILO IGUAL A CONTACTO: Borde Rosa -> Relleno Rosa al Hover */}
          <Link
            to="/talleres-medida"
            className="inline-block border border-brand-pink text-brand-pink px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 hover:bg-brand-pink hover:text-white"
          >
            Crear mi Taller Privado
          </Link>

        </FadeIn>
      </section>

      {/* --- SECCIÓN 2: EVENTOS (CON BORDE MÁS GRUESO) --- */}
      <section id="eventos" className="py-20 px-6 border-2 border-brand-dark mx-4 md:mx-12 rounded-[2.5rem] my-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-widest text-brand-dark mb-4">Eventos a Medida</h2>
            <p className="text-xl font-serif italic text-brand-pink">El escenario perfecto para tus mejores recuerdos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* TARJETA SOCIAL */}
            <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer border border-brand-dark/10">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=800&auto=format&fit=crop"
                alt="Eventos Sociales"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <h3 className="text-3xl font-serif italic mb-2">Sociales</h3>
                <p className="mb-6 opacity-90 text-sm">Bodas, aniversarios y cenas privadas.</p>
                <Link to="/eventos-sociales" className="inline-block bg-white text-brand-dark px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-pink hover:text-white transition">
                  Organizar Celebración
                </Link>
              </div>
            </div>

            {/* TARJETA CORPORATIVO */}
            <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer border border-brand-dark/10">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                alt="Eventos Corporativos"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <h3 className="text-3xl font-serif italic mb-2">Corporativos</h3>
                <p className="mb-6 opacity-90 text-sm">Team building, reuniones y lanzamientos.</p>
                <Link to="/eventos-corporativos" className="inline-block bg-white text-brand-dark px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-pink hover:text-white transition">
                  Organizar Evento
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER / SECCIÓN CONTACTO --- */}
      <footer id="contacto" className="bg-brand-dark text-brand-bg py-6 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">

          {/* Lado Izquierdo: Título y Slogan */}
          <div className="flex flex-row items-center gap-4">
            {/* Logo: Reducido a h-24 para que el footer sea más estrecho */}
            <img
              src={logo}
              alt="Doña Flora"
              className="h-24 w-auto brightness-0 invert shrink-0 opacity-90"
            />

            <p className="opacity-70 text-sm font-light leading-snug max-w-xs border-l border-white/20 pl-4">
              Creando momentos inolvidables y espacios de calma a través de la creatividad y el detalle.
            </p>
          </div>

          {/* Lado Derecho: Datos Compactos */}
          <div className="space-y-3 text-sm font-light"> {/* space-y-3 junta las filas */}

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
              <a href="mailto:gestion@doñafloraencuentros.com" className="hover:text-brand-pink transition">
                gestion@doñafloraencuentros.com
              </a>
            </div>

            {/* REDES SOCIALES (Instagram + Pinterest juntos para ahorrar espacio) */}
            <div className="flex gap-6">
              {/* Instagram */}
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full border border-brand-pink/30 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition duration-300">
                  <Instagram size={14} />
                </div>
                <a href="https://instagram.com/donaflora_encuentros" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition">
                  Instagram
                </a>
              </div>

              {/* Pinterest (NUEVO) */}
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full border border-brand-pink/30 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition duration-300">
                  {/* Usamos 'Pin' de lucide-react como icono para Pinterest */}
                  <Pin size={14} />
                </div>
                {/* Cambia el enlace por tu URL real de Pinterest */}
                <a href="https://pinterest.com/donaflora_encuentros" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition">
                  Pinterest
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

        {/* BARRA LEGAL INFERIOR (Muy compacta) */}
        <div className="max-w-5xl mx-auto pt-6 border-t border-white/5 mt-6 text-[10px] opacity-40 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Doña Flora. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link to="/legal/aviso-legal" className="hover:text-brand-pink transition">Aviso Legal</Link>
            <Link to="/legal/privacidad" className="hover:text-brand-pink transition">Privacidad</Link>
            <Link to="/legal/cookies" className="hover:text-brand-pink transition">Cookies</Link>
          </div>
        </div>
      </footer>

    </div> // Cierre del div principal
  );
}



// Configuración del Router
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservar/:id" element={<BookingPage />} />
        <Route path="/medida" element={<CustomEventPage />} />
        <Route path="/legal/:type" element={<LegalPage />} />
        <Route path="/talleres-medida" element={<CustomWorkshopPage />} />
        <Route path="/eventos-sociales" element={<SocialEventsPage />} />
        <Route path="/eventos-corporativos" element={<CorporateEventsPage />} />
      </Routes>
    </BrowserRouter>
  );
}


