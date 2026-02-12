import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToAnchor from './ScrollToAnchor';
import CookieBanner from './CookieBanner';

export default function Layout() {
    return (
        <div className="font-sans text-brand-dark bg-brand-bg selection:bg-brand-dark selection:text-white">
            <ScrollToAnchor />
            <Navbar />
            <Outlet />
            <Footer />
            <WhatsAppButton />
            <CookieBanner />
        </div>
    );
}
