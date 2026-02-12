/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo crema claro (se mantiene igual)
        'brand-bg': '#f0ebdbff',

        // --- CAMBIO AQUÍ: Azul Oscuro en lugar de Verde ---
        'brand-dark': '#2b435a', // Azul noche muy oscuro para textos
        'brand-primary': '#2C3E50', // Un azul un poco más claro para detalles

        // El Rosa pastel (se mantiene para contrastar)
        'brand-pink': '#F090A0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}