import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function AppNavbar() {
  return (
    <Navbar bg="primary" >
      <Container>
        <Navbar.Brand href="/">Aqui se mostrara logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Ma</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
