import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Si hay un hash (ej: #talleres), intentamos hacer scroll
        if (hash) {
            // Pequeño timeout para dar tiempo a que la página se renderice
            const timer = setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);

            return () => clearTimeout(timer);
        } else {
            // Si no hay hash, hacemos scroll al top (comportamiento estándar de cambio de página)
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
