import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Contenido "falso" para rellenar. Tienes que poner tus datos reales.
const legalContent: any = {
  'aviso-legal': {
    title: 'Aviso Legal',
    content: (
      <>
        <p>En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información, te informamos que:</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li><strong>Titular:</strong> [TU NOMBRE COMPLETO O NOMBRE EMPRESA]</li>
          <li><strong>NIF/CIF:</strong> [TU DNI O CIF]</li>
          <li><strong>Dirección:</strong> [TU DIRECCIÓN FISCAL]</li>
          <li><strong>Email:</strong> gestion@doñafloraencuentros.com</li>
        </ul>
      </>
    )
  },
  'privacidad': {
    title: 'Política de Privacidad',
    content: (
      <>
        <p>En Doña Flora nos tomamos muy en serio tus datos.</p>
        <h3 className="text-xl font-bold mt-6 mb-2">1. Responsable</h3>
        <p>El responsable del tratamiento de tus datos es [TU NOMBRE], con domicilio en [TU DIRECCIÓN].</p>
        <h3 className="text-xl font-bold mt-6 mb-2">2. Finalidad</h3>
        <p>Usamos tus datos únicamente para gestionar tu reserva en los talleres y enviarte información relacionada.</p>
      </>
    )
  },
  'cookies': {
    title: 'Política de Cookies',
    content: (
      <>
        <p>Esta web utiliza cookies propias y de terceros (como Luma) para mejorar tu experiencia.</p>
        <p className="mt-4">Puedes configurar tu navegador para rechazar las cookies, aunque algunas funciones podrían no ir bien.</p>
      </>
    )
  },
  'condiciones': {
    title: 'Condiciones de Venta',
    content: (
      <>
        <h3 className="text-xl font-bold mt-6 mb-2">1. Reservas y Pagos</h3>
        <p>Las plazas se confirman tras el pago a través de la plataforma Luma.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">2. Política de Cancelación</h3>
        <p>Si cancelas con más de [X] días de antelación, te devolvemos el [X]%. Si cancelas con menos de 48h, no se realizarán devoluciones salvo causa de fuerza mayor justificada.</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">3. Cancelación por nuestra parte</h3>
        <p>Si Doña Flora debe cancelar el evento, se devolverá el importe íntegro automáticamente.</p>
      </>
    )
  }
};

export default function LegalPage() {
  const { type } = useParams(); // Leemos la URL (ej: /legal/aviso-legal)
  const data = type ? legalContent[type] : null;

  // Hacer que la página suba arriba al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) return <div className="p-20 text-center">Página no encontrada</div>;

  return (
    <div className="min-h-screen bg-brand-bg pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-brand-pink hover:underline mb-8 block">← Volver al inicio</Link>
        
        <h1 className="text-4xl font-serif mb-12 text-brand-dark">{data.title}</h1>
        
        <div className="prose prose-stone text-brand-dark/80 leading-relaxed space-y-4">
            {data.content}
        </div>
      </div>
    </div>
  );
}