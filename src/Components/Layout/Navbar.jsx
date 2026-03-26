import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function AppNavbar({ title, menuItems  }) {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">{title ?? "Navbar with text"}</Navbar.Brand>
        <nav>
          {menuItems.map(item => (
            <a key={item.path} href={item.path}>{item.label}</a>
          ))}
        </nav>
      </Container>
    </Navbar>
  );
}
