import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Alert, Spinner } from "react-bootstrap";
import { loginService } from "../../services/authService";

// Mapeo actualizado según tu tabla de IDs
const RUTAS_POR_ROL = {
  4: "/operador",   // Operador
  1: "/tecnico",    // Técnico
  2: "/ingeniero",  // Ingeniero
  3: "/gerente",    // Gerente
};

function Login() {
  const navigate = useNavigate();
  const [numeroEmpleado, setNumeroEmpleado] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("👉 PASO 1: ¡Botón presionado!");
    console.log("👉 Datos a enviar:", { numeroEmpleado, password });
    setError("");

    if (!numeroEmpleado.trim() || !password.trim()) {
      console.log("❌ Error: Faltan campos por llenar");
      setError("Por favor completa todos los campos.");
      return;
    }

    setCargando(true);
    try {
      console.log("👉 PASO 2: Tocando la puerta del backend...");
      const respuesta = await loginService(numeroEmpleado, password);
      
      console.log("👉 PASO 3: ¡El backend respondió exitosamente!", respuesta);
      const { token, usuario } = respuesta.data;
      
      console.log("👉 PASO 4: Datos extraídos. Token:", token, "Usuario:", usuario);

      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(usuario));

      // El signo de interrogación abajo previene que explote si usuario no existe
      const ruta = RUTAS_POR_ROL[usuario?.rol_id] || "/"; 
      
      console.log("👉 PASO 5: Todo listo. Redirigiendo a la ruta:", ruta);
      navigate(ruta);
      
    } catch (err) {
      console.error("🚨 PASO ERROR: Algo falló en el proceso:", err);
      setError(err.response?.data?.message || "Error de credenciales o conexión.");
    } finally {
      console.log("👉 PASO 6: Proceso terminado. Apagando botón de carga.");
      setCargando(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card
        style={{ width: "100%", maxWidth: "420px", minHeight: "520px" }}
        className="shadow-lg p-4 border-0"
      >
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-center mb-5 fs-2 fw-bold">
            SIGTP Login
          </Card.Title>

          {error && (
            <Alert variant="danger" className="py-2">
              {error}
            </Alert>
          )}

          <Form className="d-flex flex-column flex-grow-1 justify-content-between" onSubmit={handleSubmit}>
            <div>
              <Form.Group className="mb-4" controlId="formBasicNumeroEmpleado">
                <Form.Label className="fw-semibold">Número de Empleado</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Ingrese su número de empleado"
                  className="bg-light"
                  value={numeroEmpleado}
                  onChange={(e) => setNumeroEmpleado(e.target.value)}
                  disabled={cargando}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label className="fw-semibold">Contraseña</Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Contraseña"
                  className="bg-light"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={cargando}
                />
              </Form.Group>
            </div>

            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                className="py-3 shadow-sm"
                disabled={cargando}
              >
                {cargando ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Verificando...
                  </>
                ) : (
                  "Ingresar"
                )}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;