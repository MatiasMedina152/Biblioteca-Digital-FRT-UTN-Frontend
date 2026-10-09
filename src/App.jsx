import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PaginaTecnicaturas } from './pages/PaginaTecnicaturas';
import PaginaTesisCarrera from './pages/PaginaTesisCarrera';
import { PaginaDetalleTesis } from './pages/PaginaDetalleTesis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tecnicaturas" element={<PaginaTecnicaturas />} />
        <Route path="/tecnicaturas/:tecnicaturaId/tesis" element={<PaginaTesisCarrera />} />
        <Route path="/tesis/:tesisId" element={<PaginaDetalleTesis />} />
      </Routes>
    </Router>
  );
}

export default App;