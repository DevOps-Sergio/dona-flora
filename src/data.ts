// src/data.ts

export const workshops = [
  {
    id: 1,
    title: "Especial San Valentin - Velas & Cartas",
    date: "14 Febrero",
    time: "Mañana 10:30h / Tarde 16:00h",
    duration: "3h",
    price: "50€",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    description: "Aprende a crear tus propias velas aromáticas con ingredientes 100% naturales.",
    sessions: [
      { label: "Turno Mañana (10:30h - 13:30h)", id: "evt-3eklvhvCWwp9yWi" },
      { label: "Turno Tarde (16:00h - 19:00h)", id: "evt-wPf9aCzp9PSzvYg" }
    ],
    // --- DATOS NUEVOS ---
    plan: [
      "Cata de aroma a ciegas",
      "Mezcla y personalización de tu aroma",
      "Creación de vela de Soja artesanal",
      "Escritura de carta con propósito",
      "Descanso con mesa dulce"
    ],
    materials: ["Cera de soja 100% natural", "Recipiente de vidrio", "Mecha ", "Decoración floral", "Sales naturales", "Papelería", "Antifaz", "Selección de aceites esenciales a compartir"],
    location: "Calle Trasera de la Galera, 1, 35018 Las Palmas de Gran Canaria",
    maxParticipants: 20,
    lumaEventId: null// El código de tu evento en Luma
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
    comingSoon: true
  },
 
 /* {
    id: 3,
    title: "Cerámica Manual",
    date: "10 Noviembre",
    time: "10:00h - 13:00h",
    price: "60€",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800",
    description: "Modelado manual de arcilla para crear tu set de desayuno.",
    materials: ["Arcilla blanca", "Herramientas de modelado", "Cocción y esmaltado", "Envío a domicilio"],
    location: "Atelier Doña Flora, Madrid Centro",
    maxParticipants: 8,
    lumaEventId: "evt-3eklvhvCWwp9yWi"
  }*/
];