import { Check, X } from 'lucide-react';
import { useEffect } from 'react';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {

    // Cerrar con ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop con desenfoque */}
            <div
                className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-fade-in-up border border-brand-pink/10">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-brand-dark/30 hover:text-brand-dark transition"
                >
                    <X size={24} />
                </button>

                <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-pink">
                    <Check size={32} strokeWidth={3} />
                </div>

                <h3 className="text-3xl font-serif italic text-brand-dark mb-4">¡Gracias!</h3>

                <p className="text-brand-dark/70 mb-8 leading-relaxed">
                    Hemos recibido tu solicitud correctamente. Nuestro equipo revisará los detalles y nos pondremos en contacto contigo muy pronto.
                </p>

                <button
                    onClick={onClose}
                    className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-brand-pink transition duration-300 w-full"
                >
                    Entendido
                </button>

            </div>
        </div>
    );
}
