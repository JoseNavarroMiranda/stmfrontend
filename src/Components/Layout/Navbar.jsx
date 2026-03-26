import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark" className="px-3">
      <Container>
        <Navbar.Brand>Aqui se mostrara logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Usuario</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
