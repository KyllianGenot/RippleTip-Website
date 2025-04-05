// src/App.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import AppRouter from './router';
import { Header, Footer } from './components/layout';
import { PageBackground } from './components/features/PageBackground';

function App() {
  const location = useLocation(); // Get the current location

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  }, [location.pathname]); // Trigger effect when the pathname changes

  return (
    <div className="flex flex-col min-h-screen relative">
      <PageBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;