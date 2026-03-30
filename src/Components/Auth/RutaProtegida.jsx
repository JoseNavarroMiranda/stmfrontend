import { Navigate } from 'react-router-dom';

function RutaProtegida({ children }) {
  const token = localStorage.getItem('token');

  if (!token) 
  return <Navigate to="/" replace state={{ mensaje: 'Deebes de inciar sesion para continuar '}} />;
  return children;
}

export default RutaProtegida;