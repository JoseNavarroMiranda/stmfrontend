import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Tus importaciones actuales de Bootstrap (mantenlas, te servirán para otras vistas)
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

// ⚠️ IMPORTANTE: Ajusta esta ruta dependiendo de dónde guardaste VistaOperador.jsx
// Si está en una carpeta llamada "components", usa esto:
import VistaOperador from './components/VistaOperador'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirige automáticamente la ruta raíz "/" hacia el panel del operador */}
        <Route path="/" element={<Navigate to="/operador" replace />} />

        {/* Esta es la ruta que mostrará tu componente */}
        <Route path="/operador" element={<VistaOperador />} />

        {/* Ruta comodín para manejar páginas que no existen (Error 404) */}
        <Route path="*" element={
          <div className="d-flex flex-column align-items-center justify-content-center vh-100">
            <h2 className="mb-3">404 - Página no encontrada</h2>
            <Button variant="primary" href="/">Volver al inicio</Button>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;