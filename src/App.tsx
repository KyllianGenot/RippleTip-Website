// src/App.tsx
import AppRouter from './router';
import { Header, Footer } from './components/layout';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* ---- pt-16 SUPPRIMÉ ICI ---- */}
      <main className="flex-grow">
      {/* ---- FIN DE LA SUPPRESSION ---- */}
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;