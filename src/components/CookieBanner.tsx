import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const accepted = localStorage.getItem('donaflora_cookies_accepted');
        if (!accepted) {
            // Show banner with a small delay for smoother entrance
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('donaflora_cookies_accepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-brand-dark text-white p-4 z-50 animate-fade-in-up border-t border-white/10 shadow-2xl">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                <p className="text-sm font-light text-center md:text-left leading-relaxed opacity-90 max-w-4xl">
                    Utilizamos cookies técnicas imprescindibles para garantizar la seguridad de los pagos y el funcionamiento de la web. Al continuar navegando, aceptas su uso.
                </p>

                <button
                    onClick={handleAccept}
                    className="whitespace-nowrap bg-brand-pink hover:bg-white hover:text-brand-pink text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 group shadow-lg"
                >
                    <span>Entendido</span>
                    <X size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>

            </div>
        </div>
    );
}
