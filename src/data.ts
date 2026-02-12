// src/data.ts



import VelaDeCafe from './assets/VelaDeCafe.png';

export const workshops = [
  {
    id: 1,
    title: "Taller de Velas de Café, en Copa de Cristal",
    date: "7 de marzo",
    time: "10:00 - 12:00",
    duration: "2h",
    price: "45€",
    priceDuo: "80€", // 40€ por persona
    locationLabel: "Tenerife",
    image: VelaDeCafe,
    //description: "Cata de aromas a ciegas, diseño de aroma y creación de vela de soja en copa de cristal con brunch.",
    // sessions: [], // Eliminado ya que es fecha única
    lumaEventId: null, // Pendiente de enlace real
    // --- DATOS NUEVOS ---
    plan: [
      "Cata de aromas a ciegas: Despierta tu olfato y descubre las notas más profundas del café.",
      "Personalización: Diseña tu propio aroma según tu estilo de café favorito (desde un Espresso intenso hasta un dulce Toffee).",
      "Creación artesanal: Elaborarás tu propia vela de cera de soja en una elegante copa de cristal.",
      "Decoración: Toppings creativos para darle el toque final a tu 'copa' de café.",
      "El picoteo: 'Caprichos dulces y salados' (bombones, quesos, mermeladas, panes y mini croissants)."
    ],
    materials: [
      "Cata de aromas a ciegas",
      "Vela de cera de soja en copa de cristal",
      "Decoración con toppings creativos",
      "Aromas: café, chai, pumpkin spice, toffee y vainilla",
      "Brunch maridaje dulce y salado"
    ],
    location: "Espacio Cuarto Veintitrés (C/ Hermanos Puelles, 38250 Bajamar, Tenerife)",
    maxParticipants: 20,
    stripeIds: {
      individual: "buy_btn_1SyAdQ2Smsh3qzSFHEX1f8EO",
      duo: "buy_btn_1SyFJB2Smsh3qzSF2pTmJTZK",
      publishableKey: "pk_test_51SpvEk2Smsh3qzSF6Sb4dTFHCoRDveIZxxN4zFeClUD5E5LjA0SrSKuxTgkjxCItvxgL2Oi4ziTw0cMaE0Gn9Lxi00f9ptkaij"
    },
    imagePosition: "object-[50%_60%]"
  },
  {
    id: 2,
    title: "Escritura Creativa - Té & Pastas",
    date: "02 Noviembre",
    time: "19:30h - 21:00h",
    price: "35€",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    description: "Desbloquea tu creatividad en una sesión guiada acompañada de vino local.",
    materials: ["Cuaderno artesanal", "Pluma estilográfica (préstamo)", "Cata de 3 vinos locales", "Picoteo gourmet"],
    location: "Bodega Urbana, Barrio de las Letras",
    maxParticipants: 12,
    lumaEventId: "evt-3eklvhvCWwp9yWi", // RECUERDA: Aquí tendrías que poner el ID real de ESTE evento en el futuro
    comingSoon: true,
    imagePosition: "object-center"
  },


];