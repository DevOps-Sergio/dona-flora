import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const legalContent: any = {
  'aviso-legal': {
    title: 'Aviso Legal',
    content: (
      <>
        <h3 className="text-xl font-bold mt-6 mb-2">I. INFORMACIÓN GENERAL</h3>
        <p>En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:</p>
        <p className="mt-2">Los precios de los servicios o productos mostrados en el Sitio Web se indican en euros (€) e incluyen el Impuesto sobre el Valor Añadido (IVA) vigente en cada momento, salvo que se indique expresamente lo contrario.</p>
        <p className="mt-2">La titularidad de este sitio web, <strong>www.donafloraencuentros.com</strong>, (en adelante, Sitio Web) la ostenta:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Titular:</strong> Yara Tena Aguiar</li>
          <li><strong>NIF:</strong> 78625034V</li>
          <li><strong>Domicilio:</strong> Actividad de servicios online sin establecimiento físico abierto al público. Telde, Las Palmas de Gran canaria, España.</li>
          <li><strong>Email de contacto:</strong> gestion@donafloraencuentros.com</li>
          <li><strong>Teléfono:</strong> +34 614 039 494</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2">II. TÉRMINOS Y CONDICIONES GENERALES DE USO</h3>
        <h4 className="font-bold mt-4 mb-2">El objeto de las condiciones: El Sitio Web</h4>
        <p>El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).</p>
        <p className="mt-2">Doña Flora se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento Doña Flora pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos.</p>
        <p className="mt-2">La adquisición de cualquiera de los servicios ofrecidos (talleres, eventos) se regirá, además de por las presentes Condiciones, por las Condiciones Generales de Contratación específicas que se presenten en el momento de la compra.</p>

        <h4 className="font-bold mt-4 mb-2">El Usuario</h4>
        <p>El acceso, la navegación y uso del Sitio Web, confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h3>
        <p>Doña Flora no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o Servicios. Doña Flora hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido o que esté libre de error.</p>
        <p className="mt-2">Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este Sitio Web, esté libre de error o cause un daño al sistema informático (software y hardware) del Usuario. En ningún caso Doña Flora será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso, navegación y el uso del Sitio Web.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">IV. POLÍTICA DE ENLACES</h3>
        <p>El Usuario o tercero que realice un hipervínculo desde una página web de otro, distinto, sitio web al Sitio Web de Doña Flora deberá saber que no se permite la reproducción —total o parcialmente— de ninguno de los Contenidos y/o Servicios del Sitio Web sin autorización expresa de Doña Flora.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">V. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
        <p>Doña Flora por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo (imágenes, sonido, audio, vídeo, software o textos, marcas o logotipos, etc.).</p>
        <p className="mt-2">Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Doña Flora.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>
        <p>Doña Flora se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones.</p>
        <p className="mt-2">La relación entre el Usuario y Doña Flora se regirá por la normativa vigente y de aplicación en el territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a derecho.</p>
        <p className="mt-2">Así mismo, le informamos que la Comisión Europea facilita una plataforma de resolución de litigios en línea de acceso gratuito, disponible en el siguiente enlace: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="nofollow noopener noreferrer" className="underline">https://ec.europa.eu/consumers/odr/</a>. Los consumidores podrán someter sus reclamaciones a través de dicha plataforma.</p>
      </>
    )
  },
  'privacidad': {
    title: 'Política de Privacidad',
    content: (
      <>

        <h3 className="text-xl font-bold mt-6 mb-2">I. INFORMACIÓN GENERAL Y RESPONSABLE DEL TRATAMIENTO</h3>
        <p>Respetando lo establecido en la legislación vigente, Doña Flora (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.</p>

        <p className="mt-4 font-bold">Identidad del responsable del tratamiento:</p>
        <p>El responsable del tratamiento de los datos personales recogidos en Doña Flora es:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Titular:</strong> Yara Tena Aguiar</li>
          <li><strong>NIF:</strong> 78625034V</li>
          <li><strong>Domicilio:</strong> Telde, España.</li>
          <li><strong>Email de contacto:</strong> <a href="mailto:gestion@donafloraencuentros.com" className="underline hover:text-brand-pink">gestion@donafloraencuentros.com</a></li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2">II. MARCO LEGAL</h3>
        <p>Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, respeta las siguientes normas:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD).</li>
          <li>La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).</li>
          <li>La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2">III. FINALIDAD Y LEGITIMACIÓN DEL TRATAMIENTO</h3>
        <p className="font-bold mt-2">¿Con qué finalidad tratamos sus datos personales?</p>
        <p>En Doña Flora tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Gestión de consultas:</strong> Atender las solicitudes de información recibidas a través de los formularios de contacto de la web.</li>
          <li><strong>Gestión de reservas y eventos:</strong> Tramitar la inscripción a talleres, eventos sociales o corporativos, así como la gestión de la lista de asistentes.</li>
          <li><strong>Facturación y obligaciones legales:</strong> Emitir facturas y cumplir con las obligaciones fiscales derivadas de la compra de entradas o servicios.</li>
        </ul>

        <p className="font-bold mt-4">¿Cuál es la legitimación para el tratamiento de sus datos?</p>
        <p>La base legal para el tratamiento de sus datos es:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>El consentimiento:</strong> El usuario marca explícitamente la casilla de aceptación en nuestros formularios de contacto o registro antes de enviar sus datos.</li>
          <li><strong>La ejecución de un contrato:</strong> En el caso de compra de entradas, talleres o servicios, el tratamiento es necesario para la ejecución del contrato de compraventa y la prestación del servicio.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2">IV. DESTINATARIOS DE LOS DATOS E INFRAESTRUCTURA TÉCNICA</h3>
        <p>Para poder prestar nuestros servicios, compartimos datos estrictamente necesarios con proveedores de servicios externos (Encargados del Tratamiento), que cumplen con sus correspondientes políticas de privacidad y normativas de seguridad:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Make (Celonis):</strong> Plataforma para la automatización de procesos y conexión de datos (gestión de formularios).</li>
          <li><strong>Airtable:</strong> Base de datos segura utilizada para gestionar la información de clientes, reservas y logística de eventos.</li>
          <li><strong>Stripe:</strong> Plataforma de procesamiento de pagos. Los datos bancarios se envían directamente a Stripe mediante pasarela segura; Doña Flora no tiene acceso ni almacena dicha información financiera sensible.</li>

          <li><strong>Google (Workspace):</strong> Proveedor de servicios de correo electrónico y ofimática.</li>
          <li><strong>Hostinger:</strong> Proveedor de alojamiento web (Hosting) y servidores de correo.</li>
        </ul>
        <p className="mt-2">No se cederán datos a terceros ajenos a estos proveedores de servicios, salvo obligación legal.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">V. PERIODO DE CONSERVACIÓN</h3>
        <p>Los datos personales proporcionados se conservarán:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales (ej. facturación).</li>
          <li>Hasta que el interesado solicite su supresión.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2">VI. DERECHOS DEL USUARIO</h3>
        <p>El Usuario puede ejercer en todo momento sus derechos reconocidos en el RGPD y la Ley Orgánica 3/2018 dirigiendo una comunicación escrita al email <a href="mailto:gestion@donafloraencuentros.com" className="underline hover:text-brand-pink">gestion@donafloraencuentros.com</a>, adjuntando fotocopia de su DNI u otro documento identificativo equivalente.</p>
        <p className="mt-2">Los derechos que puede ejercer son:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Derecho de acceso:</strong> Conocer qué datos suyos estamos tratando.</li>
          <li><strong>Derecho de rectificación:</strong> Modificar los datos inexactos.</li>
          <li><strong>Derecho de supresión (derecho al olvido):</strong> Solicitar que se borren sus datos cuando ya no sean necesarios.</li>
          <li><strong>Derecho a la limitación del tratamiento:</strong> En determinadas circunstancias, solicitar que se paralice el uso de sus datos.</li>
          <li><strong>Derecho a la portabilidad:</strong> Recibir sus datos en un formato estructurado y común.</li>
          <li><strong>Derecho de oposición:</strong> Oponerse a que tratemos sus datos para fines concretos.</li>
        </ul>
        <p className="mt-2">Asimismo, el interesado tiene derecho a presentar una reclamación ante la autoridad de control (Agencia Española de Protección de Datos - <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">VII. SECRETO Y SEGURIDAD DE LOS DATOS</h3>
        <p>Doña Flora se compromete al uso y tratamiento de los datos personales de los usuarios, respetando su confidencialidad y a utilizarlos de acuerdo con la finalidad del mismo, así como a dar cumplimiento a su obligación de guardarlos y adaptar todas las medidas para evitar la alteración, pérdida, tratamiento o acceso no autorizado, de conformidad con lo establecido en la normativa vigente de protección de datos. El sitio web utiliza técnicas de seguridad de la información (certificados SSL) para garantizar que la transmisión de datos entre el servidor y el usuario está encriptada y es segura.</p>
      </>
    )
  },
  'cookies': {
    title: 'Política de Cookies',
    content: (
      <>

        <h3 className="text-xl font-bold mt-6 mb-2">I. DEFINICIÓN Y FUNCIÓN DE LAS COOKIES</h3>
        <p>El acceso a <strong>www.donafloraencuentros.com</strong> puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.</p>
        <p className="mt-2">La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">II. TIPOS DE COOKIES QUE UTILIZAMOS</h3>
        <p>En este Sitio Web utilizamos únicamente cookies técnicas y estrictamente necesarias. No utilizamos cookies analíticas, publicitarias ni de rastreo de comportamiento.</p>

        <p className="mt-4 font-bold">Cookies estrictamente necesarias (Técnicas)</p>
        <p>Son aquellas imprescindibles para el correcto funcionamiento del sitio web y la prestación de los servicios ofrecidos por Doña Flora. Permiten la navegación, el acceso a áreas seguras, la prevención de fraudes y la realización de pagos seguros. Sin estas cookies, los servicios de reserva y pago no podrían realizarse.</p>

        <p className="mt-4 font-bold">Proveedores de servicios terceros:</p>
        <p>Para prestar nuestros servicios, utilizamos plataformas externas de confianza que pueden instalar cookies técnicas en su dispositivo:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Stripe (Pagos y Seguridad):</strong> Utilizamos Stripe como pasarela de pago segura. Stripe instala cookies técnicas (como <code>__stripe_mid</code> y <code>__stripe_sid</code>) esenciales para la detección y prevención de fraudes bancarios y para procesar las transacciones de forma segura.</li>

        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2">III. GESTIÓN DE COOKIES</h3>
        <p>Al tratarse de cookies estrictamente necesarias para el funcionamiento y seguridad de la web, su instalación no requiere del consentimiento previo del usuario según la normativa vigente (artículo 22.2 de la LSSI). No obstante, el Usuario puede configurar su navegador para bloquearlas o eliminarlas, aunque le advertimos que, en tal caso, es posible que no pueda completar procesos de reserva o pago en nuestro sitio web.</p>
        <p className="mt-2">Puede consultar la configuración de los principales navegadores en los siguientes enlaces:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Google Chrome:</strong> Configuración -&#62; Privacidad y seguridad -&#62; Cookies.</li>
          <li><strong>Mozilla Firefox:</strong> Ajustes -&#62; Privacidad & Seguridad.</li>
          <li><strong>Safari:</strong> Preferencias -&#62; Privacidad.</li>
          <li><strong>Microsoft Edge:</strong> Configuración -&#62; Cookies y permisos del sitio.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2">IV. CAMBIOS EN LA POLÍTICA DE COOKIES</h3>
        <p>Es posible que actualicemos la Política de Cookies de nuestro Sitio Web, por ello le recomendamos revisar esta política cada vez que acceda a nuestro Sitio Web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.</p>
      </>
    )
  },
  'condiciones': {
    title: 'Condiciones de Venta',
    content: (
      <>
        <h3 className="text-xl font-bold mt-6 mb-2">1. Reservas y Pagos</h3>
        <p>Las plazas para los talleres se confirman una vez realizado el pago a través de la plataforma externa habilitada (Stripe o pasarela de pago segura).</p>

        <h3 className="text-xl font-bold mt-6 mb-2">2. Política de Cancelación</h3>
        <p>Si cancelas con más de 7 días de antelación, te ofreceremos un cambio de fecha o la devolución del importe (menos gastos de gestión si los hubiera). Si cancelas con menos de 48h, no se realizarán devoluciones salvo causa de fuerza mayor debidamente justificada, ya que los materiales habrán sido adquiridos.</p>

        <h3 className="text-xl font-bold mt-6 mb-2">3. Cancelación por nuestra parte</h3>
        <p>Si Doña Flora debe cancelar el evento por causas ajenas o falta de aforo mínimo, se devolverá el importe íntegro automáticamente a la mayor brevedad posible.</p>
      </>
    )
  },
  'terminos-y-condiciones': {
    title: 'Términos y Condiciones',
    content: (
      <>
        <h3 className="text-xl font-bold mt-6 mb-2">1. Política para TALLERES</h3>
        <p>En Doña Flora preparamos cada taller con mucho mimo. Dado que trabajamos con productos perecederos y materiales bajo pedido, nuestra política es:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Más de 7 días de antelación:</strong> Si cancelas con una semana de margen, te guardaremos la plaza para una futura fecha.</li>
          <li><strong>Menos de 7 días:</strong> Una vez entramos en la semana del taller, ya hemos realizado la compra de tu material. Por ello, no podemos realizar cambios ni devoluciones.</li>
          <li><strong>¿Y si no puedo ir?</strong> Puedes ceder tu plaza a una amiga o familiar. Solo tienes que avisarnos por teléfono (+34 614 039 494) para el cambio de nombre.</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-2">2. Política para EVENTOS PRIVADOS</h3>
        <p>Para eventos exclusivos, reservamos fecha y personal solo para ti.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Señal de reserva:</strong> Se requiere el abono del 50% del presupuesto para confirmar. Esta señal (gastos de gestión y reserva de espacio) no es reembolsable.</li>
          <li><strong>Cancelación parcial (bajada de asistentes):</strong> Debes avisar con al menos 1 semana de antelación. Pasado ese plazo, se cobrará por el número de asistentes confirmados inicialmente.</li>
          <li><strong>Cancelación total del evento:</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Eventos hasta 30 invitados: Si cancelas con más de 20 días, solo se pierde la señal.</li>
              <li>Eventos de más de 30 invitados: Si cancelas con más de 40 días, solo se pierde la señal.</li>
            </ul>
          </li>
          <li><strong>Cancelación fuera de plazo:</strong> Si cancelas con menos días de los estipulados arriba, se deberá abonar el 100% del importe acordado para cubrir costes de proveedores, personal y lucro cesante.</li>
        </ul>
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
      <SEO
        title={data.title}
        description={`${data.title} de Doña Flora - Arte en la mesa.`}
      />
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full hover:scale-110 transition shadow-sm border border-brand-dark/5 text-brand-dark">
          <ArrowLeft size={24} />
        </Link>

        <h1 className="text-4xl font-serif mb-12 text-brand-dark">{data.title}</h1>

        <div className="prose prose-stone text-brand-dark/80 leading-relaxed space-y-4">
          {data.content}
        </div>
      </div>
    </div>
  );
}