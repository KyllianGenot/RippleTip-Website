import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppRouter from './router';
import { Header, Footer } from './components/layout';
import { PageBackground } from './components/features/PageBackground';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <PageBackground />
      <Header />
      <main className="flex-grow min-h-[calc(100vh-64px-80px)]">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;