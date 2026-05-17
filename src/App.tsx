import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { pageFromPath, routes } from './data/navigation';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Industries } from './pages/Industries';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import type { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => pageFromPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setCurrentPage(pageFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  function navigate(page: Page) {
    const nextPath = routes[page];
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const page = {
    home: <Home navigate={navigate} />,
    products: <Products navigate={navigate} />,
    industries: <Industries />,
    services: <Services />,
    about: <About />,
    careers: <Careers />,
    contact: <Contact />,
  }[currentPage];

  return (
    <div className="min-h-screen bg-white text-brand-charcoal">
      <Header currentPage={currentPage} navigate={navigate} />
      <main id="main">{page}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
