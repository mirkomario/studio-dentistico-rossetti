import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const PageWrapper = ({ title, img }) => (
  <div className="flex flex-col items-center min-h-full py-12 px-8">
    <h2 className="text-[#009EA9] text-3xl font-bold mb-10 uppercase tracking-widest border-b-2 border-[#009EA9] pb-2">
      {title}
    </h2>
    <div className="max-w-[1000px] w-full border-4 border-[#009EA9]/10 shadow-xl bg-white">
      <img
        src={`http://www.studiomedicodentisticorossetti.com/IMG/${img}`}
        alt={title}
        className="w-full h-auto block"
      />
    </div>
  </div>
);

function App() {
  return (
    <div className="outer-frame">
      <Sidebar />
      <main className="main-viewport">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<PageWrapper title="LO STUDIO / STAFF" img="imgchisiamo.jpg" />} />
          <Route path="/servizi" element={<PageWrapper title="LE DISCIPLINE" img="imgdiscipline.jpg" />} />
          <Route path="/tecnologia" element={<PageWrapper title="LA TECNOLOGIA" img="imgtecnologia.jpg" />} />
          <Route path="/sterilizzazione" element={<PageWrapper title="STERILIZZAZIONE" img="imgsterilizzazione.jpg" />} />
          <Route path="/pedodonzia" element={<PageWrapper title="ODONTOIATRIA PEDIATRICA" img="imgodontoiatriapedia.jpg" />} />
          <Route path="/convenzioni" element={<PageWrapper title="LE CONVENZIONI" img="imgconvenzioni.jpg" />} />
          <Route path="/contatti" element={<PageWrapper title="CONTATTI E DOVE SIAMO" img="imgcontatti.jpg" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
