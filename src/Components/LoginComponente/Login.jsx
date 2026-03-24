import { Form, Button, Card, Container } from 'react-bootstrap';

function Login() {
  return (
    <Container className="d-flex justify-content-center">
      <Card 
        style={{ width: '100%', maxWidth: '420px', minHeight: '520px' }} 
        className="shadow-lg p-4 border-0">

        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-center mb-5 fs-2 fw-bold">
            Iniciar Sesión
          </Card.Title>

          <Form className="d-flex flex-column flex-grow-1 justify-content-between">
            
            <div>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="fw-semibold">Correo electrónico</Form.Label>
                <Form.Control 
                  size="lg" 
                  type="email" 
                  placeholder="Usuario o correo" 
                  className="bg-light"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label className="fw-semibold">Contraseña</Form.Label>
                <Form.Control 
                  size="lg" 
                  type="password" 
                  placeholder="Tu contraseña" 
                  className="bg-light"
                />
              </Form.Group>
            </div>

            <div className="d-grid gap-2">
              <Button variant="outline-primary" type="submit" size="lg" className="py-3 shadow-sm">
                Ingresar al sistema
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;