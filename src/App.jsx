import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Staff from './pages/Staff';
import ChiSiamo from './pages/ChiSiamo';
import Cure from './pages/Cure';
import Tecnologia from './pages/Tecnologia';
import Sterilizzazione from './pages/Sterilizzazione';
import Pedodonzia from './pages/Pedodonzia';
import Convenzioni from './pages/Convenzioni';
import Contatti from './pages/Contatti';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="outer-frame">
      <Sidebar />
      <main className="main-viewport">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/cure" element={<Cure />} />
          <Route path="/sterilizzazione" element={<Sterilizzazione />} />
          <Route path="/pedodonzia" element={<Pedodonzia />} />
          <Route path="/convenzioni" element={<Convenzioni />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
