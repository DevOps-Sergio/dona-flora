import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToAnchor from './components/ScrollToAnchor'; // Si lo usas

// Importamos la portada nueva
import HomePage from './pages/HomePage';

// Importamos el resto de páginas (ESTO ES LO QUE YA TENÍAS)
import BookingPage from './pages/BookingPage';
import SocialEventsPage from './pages/SocialEventsPage';
import CorporateEventsPage from './pages/CorporateEventsPage';
import AboutPage from './pages/AboutPage';
import LegalPage from './pages/LegalPage';
import ThankYouPage from './pages/ThankYouPage';
import FAQPage from './pages/FAQPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Aquí cargamos la portada limpia */}
          <Route index element={<HomePage />} />

          {/* Añadimos la página de agradecimiento */}
          <Route path="gracias" element={<ThankYouPage />} />

          {/* Tus rutas antiguas siguen aquí, NO CAMBIAN */}
          <Route path="reservar/:id" element={<BookingPage />} />
          <Route path="eventos-sociales" element={<SocialEventsPage />} />
          <Route path="eventos-corporativos" element={<CorporateEventsPage />} />
          <Route path="sobre-nosotros" element={<AboutPage />} />
          <Route path="legal/:type" element={<LegalPage />} />
          <Route path="faq" element={<FAQPage />} />

          {/* Redirección de seguridad */}
          <Route path="*" element={<HomePage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}