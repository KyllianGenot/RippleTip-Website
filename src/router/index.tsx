// src/router/index.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CommandsPage from '../pages/CommandsPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import NotFoundPage from '../pages/NotFoundPage'; // <-- Import the new page

const AppRouter = () => {
  return (
    <Routes>
      {/* Existing routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/commands" element={<CommandsPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />

      {/* Catch-all route - MUST BE LAST */}
      <Route path="*" element={<NotFoundPage />} /> {/* <-- Add this route */}
    </Routes>
  );
};

export default AppRouter;