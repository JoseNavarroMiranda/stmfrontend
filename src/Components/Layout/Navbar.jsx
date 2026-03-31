import { useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

export function AppNavbar() {
  const navigate = useNavigate();


  // Leer usuario guardado en localstorage, esto desde componente de Login.jsx

  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const nombreUsuario = usuario?.nombre || 'Usuario';

  //funcion para realizar logout
  const handleLogout = () => {
    const confirmar = window.confirm('¿Estas seguro de cerrar sesion?');
    if (confirmar) {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      navigate('/', { replace: true });
    }
  };  

  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="px-3 py-2 shadow-sm border-bottom border-primary-subtle"
    >
      <Container>
        <Navbar.Brand className="fw-semibold text-white">
          Aqui se mostrara logo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="me-2 text-white-50">
            Has iniciado sesión como:
          </Navbar.Text>

          <NavDropdown
            id="nav-dropdown"
            align="end"
            title={<span className="text-white fw-medium">{nombreUsuario}</span>}
            menuVariant="light"
          >
            <NavDropdown.Item eventKey="4.1">Perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" onClick={handleLogout}>
              Cerrar sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
