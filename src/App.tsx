// src/App.tsx
import React from 'react';
import AppRouter from './router';
import { Header, Footer } from './components/layout';
import { PageBackground } from './components/features/PageBackground';

function App() {
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