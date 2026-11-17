import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer, WhatsAppButton } from './components/Shared';

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}
import { BlogHome } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { TestePage } from './pages/Teste';
import { ComprarPage } from './pages/Comprar';
import { CompletoPage } from './pages/Completo';
import { PrivacyPage, TermsPage, AboutPage, ContactPage, AvisoLegalPage, DireitosAutoraisPage } from './pages/Legal';

// Dispara a conversão do Google Ads em todo clique de link de WhatsApp (wa.me)
function WhatsAppConversionTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a');
      if (anchor && anchor.href && anchor.href.includes('wa.me')) {
        if (typeof window.gtag_report_conversion === 'function') {
          window.gtag_report_conversion();
        }
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/saibamais' || location.pathname === '/planos' || location.pathname === '/sabermais';
  const hideFooter = hideNavbar || location.pathname === '/' || location.pathname === '/blog' || location.pathname.startsWith('/blog');
  const isLandingWithWhatsApp = location.pathname === '/saibamais' || location.pathname === '/sabermais';

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<BlogHome />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/saibamais" element={<TestePage />} />
          <Route path="/planos" element={<ComprarPage />} />
          <Route path="/sabermais" element={<CompletoPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/privacidade" element={<PrivacyPage />} />
          <Route path="/termos" element={<TermsPage />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/direitos-autorais" element={<DireitosAutoraisPage />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
      {isLandingWithWhatsApp && <WhatsAppButton />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <WhatsAppConversionTracker />
      <AppContent />
    </Router>
  );
}
