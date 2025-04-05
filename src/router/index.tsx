import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CommandsPage from '../pages/CommandsPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/commands" element={<CommandsPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;