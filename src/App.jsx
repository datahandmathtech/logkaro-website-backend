import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

import HomePage from './pages/HomePage';
import TaxiFleetPage from './pages/TaxiFleetPage';
import EduRidePage from './pages/EduRidePage';
import CorpDrivePage from './pages/CorpDrivePage';
import MaintenancePage from './pages/MaintenancePage';
import PricingPage from './pages/PricingPage';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setDemoModalOpen(true);
  const handleCloseDemo = () => setDemoModalOpen(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Navbar onOpenDemo={handleOpenDemo} />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage onOpenDemo={handleOpenDemo} />} />
          <Route path="/taxi-fleet" element={<TaxiFleetPage onOpenDemo={handleOpenDemo} />} />
          <Route path="/eduride-schools" element={<EduRidePage onOpenDemo={handleOpenDemo} />} />
          <Route path="/corpdrive" element={<CorpDrivePage onOpenDemo={handleOpenDemo} />} />
          <Route path="/fleet-maintenance" element={<MaintenancePage onOpenDemo={handleOpenDemo} />} />
          <Route path="/pricing" element={<PricingPage onOpenDemo={handleOpenDemo} />} />
        </Routes>
      </main>

      <Footer onOpenDemo={handleOpenDemo} />
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
