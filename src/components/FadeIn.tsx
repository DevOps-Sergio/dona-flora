// src/components/FadeIn.tsx
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number; // Cuánto tarda en empezar la animación
  direction?: 'up' | 'down' | 'left' | 'right'; // Desde dónde aparece
  fullWidth?: boolean;
}

export default function FadeIn({ children, delay = 0, direction = 'up', fullWidth = false }: Props) {
  
  // Definimos las coordenadas desde donde sale el elemento
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      // 1. Estado inicial: invisible y desplazado un poco
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      
      // 2. Estado final: visible y en su sitio (cuando el usuario hace scroll)
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      
      // 3. Configuración: que pase solo 1 vez y dure 0.7 segundos
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      
      className={fullWidth ? "w-full" : ""}
    >
      {children}
    </motion.div>
  );
}