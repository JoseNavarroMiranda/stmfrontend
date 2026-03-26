import Container from "react-bootstrap/Container";


export function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="d-flex justify-content-between align-items-center">
        <span className="small">© {new Date().getFullYear()} Tu Empresa</span>
        <span className="small">
          <a href="#privacidad" className="text-light text-decoration-none me-3">
            Privacidad
          </a>
          <a href="#terminos" className="text-light text-decoration-none">
            Términos
          </a>
        </span>
      </Container>
    </footer>
  );
}
