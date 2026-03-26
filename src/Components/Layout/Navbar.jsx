import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

export function AppNavbar() {

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
            title={<span className="text-white fw-medium">Cuenta</span>}
            menuVariant="light"
          >
            <NavDropdown.Item eventKey="4.1">Perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Cerrar sesión</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
